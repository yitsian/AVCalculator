const searchInput = document.getElementById("search-input");
const suggestionBox = document.getElementById("suggestion-box");
const buffsCatalog = document.getElementById("buffs-catalog");

const buffFilter = document.getElementById("buff-filter")

let appliedBuffs = []
let appliedConditionMap = {}

function searchBuffs(query) {
  const lowerQuery = query.toLowerCase();

  let statVectorQuery = statToBuffVectorIndex(buffFilter.value)

  return Object.entries(buffData)
    .filter(([key, data]) => data.name.toLowerCase().includes(lowerQuery))
    .filter(([key, data]) => {
      if (statVectorQuery >= 0) {
        for (conditionIndex in data.conditions) {
          if (data.conditions[conditionIndex].buffs[statVectorQuery] != 0) {
            return true
          }
        }
      } else {
        if (["additive", "multiplicative"].includes(buffFilter.value)) {
          if (buffFilter.value == "additive") {
            if (data.multiplicative == false) {
              return true
            }
          }

          if (buffFilter.value == "multiplicative") {
            if (data.multiplicative == true) {
              return true
            }
          }
        } else {
          return true
        }
      }
    })
    .filter(([key, data]) => !appliedBuffs.includes(data.name))
}

function showSuggestions() {
  const query = searchInput.value.trim();
  const matches = searchBuffs(query);

  buffsCatalog.innerHTML = "";

  matches.forEach(([key, buffData]) => {
    const layout = createElement("div", "buff-layout", buffsCatalog);

    const top = createElement("div", "buff-top", layout);

    const button = createElement("button", "unit-button buff-image", top);
    const gradient = createElement("div", "unit-gradient " + buffData.background, button);
    const texture = createElement("img", "unit-gradient-texture", gradient);
    texture.src = "Images/Icons/Dots.webp";

    const content = createElement("div", "unit-content", gradient);
    const picture = createElement("img", "unit-picture", content);
    picture.src = buffData.image;

    const descWrap = createElement("div", "buff-description", top);
    const name = createElement("div", "passive-name general-text text-gradient passive", descWrap);
    name.textContent = buffData.name;

    const desc = createElement("div", "passive-description general-text", descWrap);
    desc.innerHTML = formatPassiveDescription(buffData.description);

    layout.addEventListener("click", () => {
      searchInput.value = ""
      suggestionBox.classList.add("hidden");
      createBuff(key, buffData)
    });
  });

  suggestionBox.classList.remove("hidden");
}

searchInput.addEventListener("input", showSuggestions);
searchInput.addEventListener("focus", showSuggestions);

buffFilter.addEventListener("input", showSuggestions)

document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target) && !suggestionBox.contains(e.target)) {
    suggestionBox.classList.add("hidden");
  }
});

const buffsContainer = document.getElementById("buffs-container")

const maxBuffs = document.getElementById("max-buffs")
const clearBuffs = document.getElementById("clear-buffs")

function createBuff(buffId, buffData, conditionMap) {
  const layout = createElement("div", "buff-layout", buffsContainer);

  // ─── Buff Top ───────────────────────────────
  const top = createElement("div", "buff-top", layout);

  const button = createElement("button", "unit-button buff-image", top);
  const gradient = createElement("div", "unit-gradient " + buffData.background, button);
  const texture = createElement("img", "unit-gradient-texture", gradient);
  texture.src = "Images/Icons/Dots.webp";

  const content = createElement("div", "unit-content", gradient);
  const picture = createElement("img", "unit-picture", content);
  picture.src = buffData.image;

  const descWrap = createElement("div", "buff-description", top);
  const name = createElement("div", "passive-name general-text text-gradient passive", descWrap);
  name.textContent = buffData.name;

  const desc = createElement("div", "passive-description general-text font-size-20", descWrap);
  desc.innerHTML = formatPassiveDescription(buffData.description);

  // ─── Buff Bottom ────────────────────────────
  const bottom = document.createElement("div");
  bottom.className = "passive-bottom";
  layout.appendChild(bottom);

  const eventHandlers = [];

  buffData.conditions.forEach((condition, index) => {
    const conditionId = `${buffId}-${index}`;

    // Create a group container for each condition
    const conditionGroup = createElement("div", "passive-condition-group", bottom);

    const label = createElement("label", "round-form tags image-tag general-text clickable-label no-select", conditionGroup);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = true;
    label.appendChild(checkbox);

    const checkmark = createElement("span", "checkmark", label);
    label.append("On");

    let slider = null;
    let valueDisplay = null;

    if (condition.type === "Slider") {
      slider = createElement("input", "slider", conditionGroup);
      slider.type = "range";
      slider.min = condition.minRange;
      slider.max = condition.maxRange;
      slider.step = condition.step;
      slider.value = conditionMap ? conditionMap[conditionId] : 0;
      slider.id = conditionId;

      valueDisplay = createElement("div", "general-text round-form tags clickable-label", conditionGroup);
      valueDisplay.onclick = () => { focusInput(valueDisplay) }

      const valueInput = createElement("input", "stat-input general-text", valueDisplay)
      valueInput.type = "number"
      valueInput.min = condition.minRange
      valueInput.max = condition.maxRange
      valueInput.value = 0;

      valueInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          valueInput.blur();
        }
      });

      valueInput.addEventListener("blur", () => { clampSliderInput(valueInput, condition.minRange, condition.maxRange, condition.step) });

      const valueSuffix = createElement("span", "stat-input-suffix no-select", valueDisplay)
      valueSuffix.textContent = "%"

      const maxHandler = () => {
        slider.value = slider.max;
        slider.dispatchEvent(new Event("input"));
      };
      maxBuffs.addEventListener("click", maxHandler);
      eventHandlers.push(() => maxBuffs.removeEventListener("click", maxHandler));

      saveAppliedCondtionMap(conditionId, slider.value)
      slider.addEventListener("input", () => {
        saveAppliedCondtionMap(conditionId, slider.value)
      })
    } else if (condition.type === "Static") {
      const statement = createElement("div", "general-text round-form tags passive-number-padding passive-condition", conditionGroup);
      statement.textContent = condition.statement;
    }

    setBuffUpdateLoop(checkbox, slider, valueDisplay, conditionId, condition);
  });

  // Trash Button
  const trashButton = createElement("button", "general-text round-form tags image-tag passive-number-padding button-hover", bottom);
  trashButton.innerHTML = `<i class="fa fa-trash-o" style="font-size:24px"></i>`;

  const deleteBuff = () => {
    buffData.conditions.forEach((condition, index) => {
      clearBuffActive(`${buffId}-${index}`)
      saveAppliedCondtionMap(`${buffId}-${index}`, null)
    });

    eventHandlers.forEach(remove => remove());

    appliedBuffs = appliedBuffs.filter(n => n !== buffId);

    layout.remove();

    saveAppliedBuffs()
  };

  trashButton.addEventListener("click", deleteBuff);
  clearBuffs.addEventListener("click", deleteBuff);
  eventHandlers.push(() => clearBuffs.removeEventListener("click", deleteBuff));
  eventHandlers.push(() => trashButton.removeEventListener("click", deleteBuff));

  appliedBuffs.push(buffId);

  saveAppliedBuffs()

  return layout;
}

function saveAppliedBuffs() {
  localStorage.setItem("appliedBuffsSave", JSON.stringify(appliedBuffs))
}

function saveAppliedCondtionMap(conditionId, value) {
  if (value) {
    appliedConditionMap[conditionId] = value
  } else {
    delete appliedConditionMap[conditionId]
  }

  localStorage.setItem("appliedConditionMap", JSON.stringify(appliedConditionMap))
}

function loadAppliedBuffs() {
  const appliedBuffsSave = JSON.parse(localStorage.getItem("appliedBuffsSave")) || []
  const appliedConditionMapSave = JSON.parse(localStorage.getItem("appliedConditionMap")) || {}

  for (buffId of appliedBuffsSave) {
    if (!buffData[buffId]) {
      return
    }

    createBuff(buffId, buffData[buffId], appliedConditionMapSave)
  }
}

document.addEventListener("DOMContentLoaded", loadAppliedBuffs)