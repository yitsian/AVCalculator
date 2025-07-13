const conditionMetaMap = {};

const dependencyReverseMap = {};

// Track currently applied multipliers for each stat
let appliedMultBuffs = {
  damage: {},
  spa: {},
  range: {},
  crit: {},
  critDmg: {},
  summon: {}
};

let appliedAddBuffs = {
  damage: {},
  spa: {},
  range: {},
  crit: {},
  critDmg: {},
  summon: {}
};

// Initialize all passive multipliers to default (1x)
function resetPassiveMults() {
  for (key in statMultBuffs) {
    statMultBuffs[key] = 1;
  }
}

function resetPassiveAdds() {
  for (key in statAddBuffs) {
    statAddBuffs[key] = 0;
  }
}

function updateAllMultipliers() {
  resetPassiveMults();
  resetPassiveAdds();

  for (const stat in appliedMultBuffs) {
    for (const key in appliedMultBuffs[stat]) {
      const value = appliedMultBuffs[stat][key];
      if (value) {
        statMultBuffs[stat] *= (1 + value);
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
}

function setBuffActive(conditionId, condition, isActive, value = 1) {
  for (const stat in appliedMultBuffs) {
    delete appliedMultBuffs[stat][conditionId];
  }
  for (const stat in appliedAddBuffs) {
    delete appliedAddBuffs[stat][conditionId];
  }

  if (isActive) {
    const buffs = typeof condition.getBuffs === "function"
      ? condition.getBuffs(value, conditionMetaMap)
      : condition.buffs;

    const sliderMult = condition.type === "Slider" ? parseFloat(value) : 1;
    const totalMult = (sliderMult / 100);

    const target = condition.multiplicative ? appliedMultBuffs : appliedAddBuffs;

    target.damage[conditionId] = buffs[0] * totalMult;
    target.spa[conditionId] = (condition.multiplicative ? -1 : 1) * buffs[1] * totalMult;
    target.range[conditionId] = buffs[2] * totalMult;
    target.crit[conditionId] = buffs[3] * totalMult;
    target.critDmg[conditionId] = buffs[4] * totalMult;
    target.summon[conditionId] = buffs[5] * totalMult;
  }

  recalculateAllPassives();
}

// Apply or remove a passive buff
function recalculateAllPassives() {
  // Reset
  const isRangeFormat = stat => /^\d+-\d+$/.test(stat);

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

  for (const conditionId in conditionMetaMap) {
    const condition = conditionMetaMap[conditionId];
    const isActive = condition.active;
    const value = condition.value ?? 1;

    if (!isActive) continue;

    const buffs = typeof condition.getBuffs === "function"
      ? condition.getBuffs(value, conditionMetaMap)
      : condition.buffs;

    const sliderMult = condition.type === "Slider" ? value : 1;
    const totalMult = sliderMult / 100;

    const target = condition.multiplicative ? appliedMultBuffs : appliedAddBuffs;

    target.damage[conditionId] = buffs[0] * totalMult;
    target.spa[conditionId] = (condition.multiplicative ? -1 : 1) * buffs[1] * totalMult;
    target.range[conditionId] = buffs[2] * totalMult;
    target.crit[conditionId] = buffs[3] * totalMult;
    target.critDmg[conditionId] = buffs[4] * totalMult;
    target.summon[conditionId] = buffs[5] * totalMult;
  }

  updateAllMultipliers();
  updateBaseStats();
}

function buffUpdate(checkbox, slider, valueDisplay, conditionId, condition) {
  const update = () => {
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
      valueDisplay.textContent = slider.value + (condition.suffix || "%");
    }

    updateAttacks()
  };

  if (checkbox) checkbox.addEventListener("change", update);
  if (slider) slider.addEventListener("input", update);

  update();
}

function clearBuffActive(conditionID) {
  setBuffActive(conditionID, {}, false, 0);
}