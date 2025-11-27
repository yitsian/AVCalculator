const conditionMetaMap = {};

const dependencyReverseMap = {};

// Track currently applied multipliers for each stat
let appliedMultBuffs = {
  damage: {},
  spa: {},
  range: {},
  crit: {},
  critDmg: {}
};

let appliedAddBuffs = {
  damage: {},
  spa: {},
  range: {},
  crit: {},
  critDmg: {}
};

let otherBuffs = {
  summon: {},
  burn: {},
  bleed: {},
  meter: {}
}

function resetBuffs() {
  for (key in statMultBuffs) {
    statMultBuffs[key] = 1;
  }

  for (key in statAddBuffs) {
    statAddBuffs[key] = 0;
  }

  for (key in otherStats) {
    otherStats[key] = 1;
  }
}

function updateAllMultipliers() {
  resetBuffs()

  for (const stat in appliedMultBuffs) {
    for (const key in appliedMultBuffs[stat]) {
      const value = appliedMultBuffs[stat][key];
      if (value) {
        statMultBuffs[stat] += value;
      }
    }
  }

  for (const stat in appliedAddBuffs) {
    for (const key in appliedAddBuffs[stat]) {
      const value = appliedAddBuffs[stat][key];
      if (value) {
        statAddBuffs[stat] += value;
      }
    }
  }

  for (const stat in otherBuffs) {
    for (const key in otherBuffs[stat]) {
      const value = otherBuffs[stat][key];
      if (value) {
        otherStats[stat] += value;
      }
    }
  }
}

function addBuffs(conditionId, condition, isActive, value) {
  if (isActive) {
    const buffs = typeof condition.getBuffs === "function"
      ? condition.getBuffs(value, conditionMetaMap, statAddBuffs, statMultBuffs)
      : condition.buffs;

    const sliderMult = condition.type === "Slider" ? parseFloat(value) : 1;
    const totalMult = (sliderMult / 100);

    const target = condition.multiplicative ? appliedMultBuffs : appliedAddBuffs;

    target.damage[conditionId] = buffs[0] * totalMult;
    target.spa[conditionId] = (condition.multiplicative ? -1 : 1) * buffs[1] * totalMult;
    target.range[conditionId] = buffs[2] * totalMult;
    target.crit[conditionId] = buffs[3] * totalMult;
    target.critDmg[conditionId] = buffs[4] * totalMult;

    if (condition.otherBuffs) {
      const other = condition.otherBuffs

      otherBuffs.summon[conditionId] = other[0] * totalMult
      otherBuffs.burn[conditionId] = other[1] * totalMult
      otherBuffs.bleed[conditionId] = other[2] * totalMult
      otherBuffs.meter[conditionId] = other[3] * totalMult
    }
  }
}

function setBuffActive(conditionId, condition, isActive, value = 1) {
  const isRangeFormat = stat => /^\d+-\d+$/.test(stat);

  for (const stat in appliedMultBuffs) {
    delete appliedMultBuffs[stat][conditionId];
  }

  for (const stat in appliedAddBuffs) {
    delete appliedAddBuffs[stat][conditionId];
  }

  for (const stat in otherBuffs) {
    delete otherBuffs[stat][conditionId];
  }

  addBuffs(conditionId, condition, isActive, value)

  for (const stat in appliedMultBuffs) {
    for (conditionId in appliedMultBuffs[stat]) {
      if (isRangeFormat(conditionId)) {
        delete appliedMultBuffs[stat][conditionId]
      }
    }
  }

  for (const stat in appliedAddBuffs) {
    for (conditionId in appliedAddBuffs[stat]) {
      if (isRangeFormat(conditionId)) {
        delete appliedAddBuffs[stat][conditionId]
      }
    }
  }

  for (const stat in otherBuffs) {
    for (conditionId in otherBuffs[stat]) {
      if (isRangeFormat(conditionId)) {
        delete otherBuffs[stat][conditionId]
      }
    }
  }

  // First apply conditions with regular buffs
  for (const conditionId in conditionMetaMap) {
    const condition = conditionMetaMap[conditionId];
    if (!condition.getBuffs) {
      const isActive = condition.active;
      const value = condition.value ?? 1;
      addBuffs(conditionId, condition, isActive, value)
    }
  }

  // Update multipliers so dynamic buffs can see the current state
  updateAllMultipliers();
  updateBaseStats(); // Update base stats before dynamic buffs so they can access current values

  // Then apply conditions with getBuffs (dynamic buffs) that may depend on other buffs
  for (const conditionId in conditionMetaMap) {
    const condition = conditionMetaMap[conditionId];
    if (condition.getBuffs) {
      const isActive = condition.active;
      const value = condition.value ?? 1;
      addBuffs(conditionId, condition, isActive, value)
    }
  }

  updateAllMultipliers();
  updateBaseStats(); // Final update after all buffs are applied
}

function setBuffUpdateLoop(checkbox, slider, valueDisplay, conditionId, condition) {
  const updateUsingSlider = () => {
    condition.active = checkbox ? checkbox.checked : true;
    condition.value = checkbox && !checkbox.checked ? 0 : (slider ? parseFloat(slider.value) : 1);

    setBuffActive(conditionId, condition, condition.active, condition.value)

    if (checkbox) {
      if (!condition.active) {
        checkbox.parentElement.parentElement.classList.add("faded-passive");
      } else {
        checkbox.parentElement.parentElement.classList.remove("faded-passive");
      }
    }

    if (slider) {
      const valueInput = valueDisplay.querySelector("input")
      valueInput.value = slider.value

      const valueSuffix = valueDisplay.querySelector("span")
      valueSuffix.textContent = (condition.suffix || "%")
    }
    
    updateAttacks()
  };

  const updateUsingInput = () => {
    condition.value = checkbox && !checkbox.checked ? 0 : (valueDisplay.querySelector("input").value);
    setBuffActive(conditionId, condition, condition.active, condition.value)

    slider.value = valueDisplay.querySelector("input").value
  }

  if (checkbox) checkbox.addEventListener("change", updateUsingSlider);
  if (slider) slider.addEventListener("input", updateUsingSlider);
  if (slider) valueDisplay.querySelector("input").addEventListener("blur", updateUsingInput);

  updateUsingSlider();
}

function clearBuffActive(conditionID) {
  setBuffActive(conditionID, {}, false, 0);
}