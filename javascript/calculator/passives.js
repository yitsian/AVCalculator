const passiveContainer = document.getElementById("passive-container")

function loadPassive(passive, pIndex) {
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

        conditionMetaMap[conditionId] = condition;

        if (condition.dependancy) {
          const dep = condition.dependancy;
          if (!dependencyReverseMap[dep]) dependencyReverseMap[dep] = [];
          dependencyReverseMap[dep].push(conditionId);
        }

        buffUpdate(checkbox, slider, valueDisplay, conditionId, condition)
      }
    });
}

function createPassives() {
  const passives = unitPassives[selectedUnit];
  passiveContainer.innerHTML = "";

  if (elementBuffs[unitTagData[selectedUnit].elements[0]]) {
    console.log(elementBuffs[unitTagData[selectedUnit].elements[0]])
    loadPassive(elementBuffs[unitTagData[selectedUnit].elements[0]], "element")
  }

  if (!passives) return;
  
  passives.forEach((passive, pIndex) => {
    loadPassive(passive, pIndex)
  });
}

function createPassiveBottom(passiveLayout, type, minRange, maxRange, step, sliderID) {
  const passiveBottom = document.createElement("div");
  passiveBottom.className = "passive-bottom";
  passiveLayout.appendChild(passiveBottom);

  const label = document.createElement("label");
  label.className = "round-form tags image-tag general-text clickable-label no-select";
  passiveBottom.appendChild(label);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = true;
  label.appendChild(checkbox);

  const checkmark = document.createElement("span");
  checkmark.className = "checkmark";
  label.appendChild(checkmark);
  label.appendChild(document.createTextNode("On"));

  if (type == "Slider") {
    const slider = document.createElement("input");
    slider.type = "range";
    slider.className = "slider";
    slider.min = minRange;
    slider.max = maxRange;
    slider.step = step;
    slider.value = 0;
    slider.id = sliderID;
    passiveBottom.appendChild(slider);

    const valueDisplay = document.createElement("div");
    valueDisplay.className = "general-text round-form tags passive-number-padding";
    valueDisplay.textContent = slider.value + "%";
    passiveBottom.appendChild(valueDisplay);

    return [checkbox, slider, valueDisplay]
  } else {
    const statement = document.createElement("div");
    statement.className = "general-text round-form tags passive-number-padding passive-condition";
    statement.textContent = minRange;
    passiveBottom.appendChild(statement);

    return [checkbox, statement]
  }
}

createPassives()
