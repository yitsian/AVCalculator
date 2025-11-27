const passiveContainer = document.getElementById("passive-container")

function loadPassive(passive, pIndex, enabled) {
  // Outer layout
  const passiveLayout = document.createElement("div");
  passiveLayout.className = "passive-layout";
  passiveContainer.appendChild(passiveLayout);

  // Top section
  const passiveTop = document.createElement("div");
  passiveTop.className = "passive-top";
  passiveLayout.appendChild(passiveTop);

  const passiveName = document.createElement("div");
  passiveName.className = "passive-name general-text text-gradient passive";
  passiveName.textContent = passive.name;
  passiveTop.appendChild(passiveName);

  const passiveUpgrade = document.createElement("div");
  passiveUpgrade.className = "general-text font-size-20 no-wrap";
  passiveUpgrade.innerHTML = `Upgrade ${passive.upgrade}`;
  passiveTop.appendChild(passiveUpgrade);

  // Iterate over Conditions
  passive.conditions.forEach((condition, cIndex) => {
    const conditionId = `${pIndex}-${cIndex}`;

    const passiveDesc = document.createElement("div");
    passiveDesc.className = "passive-description general-text font-size-20";
    passiveDesc.innerHTML = formatPassiveDescription(condition.description);
    passiveLayout.appendChild(passiveDesc);

    if (condition.type != "None") {
      let checkbox = null;
      let slider = null;
      let valueDisplay = null;

      let statement = null;

      if (condition.type === "Slider") {
        [checkbox, slider, valueDisplay] = createPassiveBottom(passiveLayout, condition.type, condition.min, condition.max, condition.step, `Slider-${conditionId}`)
      } else if (condition.type === "Statement") {
        [checkbox, statement] = createPassiveBottom(passiveLayout, condition.type, condition.statement)
      }

      checkbox.checked = condition.default !== undefined ? condition.default : enabled

      conditionMetaMap[conditionId] = condition;

      if (condition.dependancy) {
        const dep = condition.dependancy;
        if (!dependencyReverseMap[dep]) dependencyReverseMap[dep] = [];
        dependencyReverseMap[dep].push(conditionId);
      }

      setBuffUpdateLoop(checkbox, slider, valueDisplay, conditionId, condition)
    }
  });
}

function createPassives() {
  const passives = unitPassives[selectedUnit];
  passiveContainer.innerHTML = "";

  if (elementBuffs[unitTagData[selectedUnit].elements[0]]) {
    loadPassive(elementBuffs[unitTagData[selectedUnit].elements[0]], "element", false)
  }

  if (!passives) return;

  passives.forEach((passive, pIndex) => {
    loadPassive(passive, pIndex, true)
  });
}

function createPassiveBottom(passiveLayout, type, minRange, maxRange, step, sliderID, value) {
  const passiveBottom = document.createElement("div");
  passiveBottom.className = "passive-bottom";
  passiveLayout.appendChild(passiveBottom);

  const label = document.createElement("label");
  label.className = "round-form tags image-tag general-text clickable-label no-select";
  passiveBottom.appendChild(label);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = sliderID + "-checkbox"
  checkbox.checked = true;
  label.appendChild(checkbox);

  const checkmark = document.createElement("span");
  checkmark.className = "checkmark";
  label.appendChild(checkmark);
  label.appendChild(document.createTextNode("On"));

  if (type == "Slider") {
    const slider = createElement("input", "slider", passiveBottom);
    slider.type = "range";
    slider.min = minRange;
    slider.max = maxRange;
    slider.step = step;
    slider.value = value || 0;
    slider.id = sliderID;

    const valueDisplay = createElement("div", "general-text round-form tags clickable-label", passiveBottom);
    valueDisplay.onclick = () => { focusInput(valueDisplay) }

    const valueInput = createElement("input", "stat-input general-text", valueDisplay)
    valueInput.type = "number"
    valueInput.min = minRange
    valueInput.max = maxRange
    valueInput.value = value || 0;

    valueInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        valueInput.blur();
      }
    });

    valueInput.addEventListener("blur", () => {clampSliderInput(valueInput, minRange, maxRange, step)});

    const valueSuffix = createElement("span", "stat-input-suffix no-select", valueDisplay)
    valueSuffix.textContent = "%"

    return [checkbox, slider, valueDisplay]
  } else {
    const statement = createElement("div", "general-text round-form tags passive-number-padding passive-condition", passiveBottom);
    statement.textContent = minRange;

    return [checkbox, statement]
  }
}

function clampSliderInput(input, min, max, step) {
  let raw = input.value
  let num = parseFloat(raw);

  if (isNaN(num)) num = 0;

  num = Math.max(min, Math.min(num, max));

  // Format nicely: always show %, trim .00 if whole number
  const decimalAccuracy = Math.max(step.toString().indexOf("."), 0) 
  input.value = num//.toFixed(decimalAccuracy);
}

createPassives()
