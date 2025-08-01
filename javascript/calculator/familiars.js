let selectedFamiliar = "Birb"

let corruption = 4;
let familiarPassiveSliders = []

const familiarImage = document.getElementById("familiar-image")
const familiarName = document.getElementById("familiar-name")
const familiarElements = document.getElementById("familiar-elements")

const elementSlider = document.getElementById("element-slider")
const elementSliderText = document.getElementById("element-slider-text")

const familiarPassiveContainer = document.getElementById("familiar-passive")

function loadElements() {
  familiarElements.innerHTML = ""

  for (elementIndex in familiarsData[selectedFamiliar].elements) {
    const element = familiarsData[selectedFamiliar].elements[elementIndex]

    const tagDiv = createElement("div", "round-form tags image-tag general-text", familiarElements)

    const elementImage = createElement("img", "element", tagDiv)
    elementImage.src = getElementIcon(element)

    const elementText = createElement("p", "general-text " + (element == "Omni-Elemental" ? "text-gradient mythic" : element.toLowerCase()), tagDiv)
    elementText.textContent = element
  }
}

buffUpdate(null, elementSlider, elementSliderText, "element-buff", { multiplicative: true, buffs: [1, 0, 0, 0, 0, 0], type: "Slider" })

function clearFamiliarUI() {
  familiarPassiveContainer.innerHTML = "";
  Object.keys(familiarPassiveSliders).forEach(id => delete familiarPassiveSliders[id]);
}

function loadFamiliar() {
  familiarImage.src = familiarsData[selectedFamiliar].image
  familiarName.textContent = selectedFamiliar

  clearFamiliarUI()

  const passiveLayout = createElement("div", "passive-layout", familiarPassiveContainer);

  const passiveTop = createElement("div", "passive-top", passiveLayout);

  const passiveName = createElement("div", "passive-name general-text text-gradient passive", passiveTop)
  passiveName.textContent = familiarsData[selectedFamiliar].passiveName;

  const passiveSubtext = createElement("div", "general-text font-size-20 familiar-passive", passiveTop)
  passiveSubtext.innerHTML = "Familiar Passive";

  const passiveDesc = createElement("div", "passive-description general-text font-size-20", passiveLayout)
  passiveDesc.innerHTML = formatPassiveDescription(familiarsData[selectedFamiliar].passiveDescription);

  if (familiarsData[selectedFamiliar].type === "Slider") {
    for (stat in familiarsData[selectedFamiliar].minRanges) {
      const conditionId = "Familiar-Slider-" + stat

      const sliderMinRange = familiarsData[selectedFamiliar].minRanges[stat];
      const sliderMaxRange = familiarsData[selectedFamiliar].maxRanges[stat];

      const sliderConfig = { type: "Slider", multiplicative: familiarsData[selectedFamiliar].multiplicative, buffs: statToBuffVector(stat), otherBuffs: statToOtherBuffVector(stat) }

      const [checkbox, slider, valueDisplay] = createPassiveBottom(passiveLayout, familiarsData[selectedFamiliar].type, sliderMinRange, sliderMaxRange, familiarsData[selectedFamiliar].step, conditionId)

      familiarPassiveSliders[conditionId] = { slider: slider, origMax: slider.max, origMin: slider.min }
      valueDisplay.classList.add(stat)

      buffUpdate(checkbox, slider, valueDisplay, conditionId, sliderConfig)
    }
  } else {
    const conditionId = "Familiar-Passive"

    const buffConfig = { type: "Statement", multiplicative: familiarsData[selectedFamiliar].multiplicative, buffs: familiarsData[selectedFamiliar].buffs }

    buffUpdate(null, null, null, conditionId, buffConfig)
  }
}

function updatePassive(passiveLayout, checkbox, condition, conditionId, slider) {
  const isActive = checkbox.checked;
  const value = slider ? slider.value : 1;
  setBuffActive(conditionId, condition, isActive, value);

  if (isActive == false) {
    passiveLayout.classList.add("faded-passive")
  } else {
    passiveLayout.classList.remove("faded-passive")
  }

  if (slider) {
    corruptionValueDisplay.textContent = slider.value + (condition.suffix || "%");
  }
}


elementSliderText.textContent = elementSlider.value + "%"

loadElements()
loadFamiliar()

const popup = document.getElementById("familiar-popup");
const openBtn = document.getElementById("openPopup");
// const closeBtn = document.getElementById("closePopup");

const familiarCatalog = document.getElementById("familiars-catalog")

function showPopup() {
  popup.classList.remove("hidden");
}

function hidePopup() {
  popup.classList.add("hidden");
}

// Open button click
openBtn.addEventListener("click", showPopup);

// Close button click
// closeBtn.addEventListener("click", hidePopup);

function createFamiliarButton(familiar) {
  const familiarData = familiarsData[familiar]

  const layout = createElement("div", "buff-layout", familiarCatalog);

  const top = createElement("div", "buff-top", layout);

  const button = createElement("button", "unit-button buff-image", top);
  const gradient = createElement("div", "unit-gradient exclusive", button);
  const texture = createElement("img", "unit-gradient-texture", gradient);
  texture.src = "Images/Icons/Dots.webp";

  const content = createElement("div", "unit-content", gradient);
  const picture = createElement("img", "unit-picture", content);
  picture.src = familiarData.image;

  const descWrap = createElement("div", "buff-description", top);

  const name = createElement("div", "passive-name general-text text-gradient passive", descWrap);
  name.textContent = familiar;

  const tags = createElement("div", "tab-structure-left", descWrap)

  for (elementIndex in familiarData.elements) {
    const element = familiarData.elements[elementIndex]

    const tagDiv = createElement("div", "round-form tags image-tag general-text", tags)

    const elementImage = createElement("img", "element", tagDiv)
    elementImage.src = getElementIcon(element)

    const elementText = createElement("p", "general-text " + (element == "Omni-Elemental" ? "text-gradient mythic" : element.toLowerCase()), tagDiv)
    elementText.textContent = element
  }

  const desc = createElement("div", "passive-description general-text", descWrap);
  desc.innerHTML = formatPassiveDescription(familiarData.passiveDescription);

  layout.addEventListener("click", () => {
    hidePopup();

    clearFamiliarUI()

    clearBuffActive("Familiar-Passive")

    for (stat in familiarsData[selectedFamiliar].minRanges) {
      clearBuffActive("Familiar-Slider-" + stat)
    }

    clearBuffActive("corruption-slider")

    selectedFamiliar = familiar
    loadFamiliar()

    updateCorruption()
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hidePopup();
  }
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    hidePopup();
  }
});

for (familiar in familiarsData) {
  if (familiarsData[familiar].image) {
    createFamiliarButton(familiar)
  }
}