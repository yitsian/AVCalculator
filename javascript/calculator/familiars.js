const selectedFamiliar = "Birb"

let corruption = 4;
let familiarPassiveSliders = []

const familiarImage = document.getElementById("familiar-image")
const familiarName = document.getElementById("familiar-name")
const familiarElements = document.getElementById("familiar-elements")

const elementSlider = document.getElementById("element-slider")
const elementSliderText = document.getElementById("element-slider-text")

const familiarPassiveContainer = document.getElementById("familiar-passive")

familiarImage.src = familiarsData[selectedFamiliar].image
familiarName.textContent = selectedFamiliar

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

function createFamiliarPassive() {
  familiarPassiveContainer.innerHTML = ""

  const passiveLayout = createElement("div", "passive-layout", familiarPassiveContainer);

  const passiveTop = createElement("div", "passive-top", passiveLayout);

  const passiveName = createElement("div", "passive-name general-text text-gradient passive", passiveTop)
  passiveName.textContent = familiarsData[selectedFamiliar].passiveName;

  const passiveSubtext = createElement("div", "general-text font-size-20", passiveTop)
  passiveSubtext.innerHTML = "Familiar Passive";

  const passiveDesc = createElement("div", "passive-description general-text font-size-20", passiveLayout)
  passiveDesc.innerHTML = formatPassiveDescription(familiarsData[selectedFamiliar].passiveDescription);

  if (familiarsData[selectedFamiliar].type === "Slider") {
    for (stat in familiarsData[selectedFamiliar].minRanges) {
      const conditionId = "Familiar-Slider-" + stat

      const sliderMinRange = familiarsData[selectedFamiliar].minRanges[stat];
      const sliderMaxRange = familiarsData[selectedFamiliar].maxRanges[stat];

      const sliderConfig = { type: "Slider", multiplicative: familiarsData[selectedFamiliar].multiplicative, buffs: statToBuffVector(stat) }

      const [checkbox, slider, valueDisplay] = createPassiveBottom(passiveLayout, familiarsData[selectedFamiliar].type, sliderMinRange, sliderMaxRange, familiarsData[selectedFamiliar].step, conditionId)

      familiarPassiveSliders[conditionId] = { slider: slider, origMax: slider.max, origMin: slider.min }
      valueDisplay.classList.add(stat)

      buffUpdate(checkbox, slider, valueDisplay, conditionId, sliderConfig)
    }
  } else {
    const conditionId = "Familiar-Passive"

    buffUpdate(checkbox, null, null, conditionId, familiarsData[selectedFamiliar])
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
createFamiliarPassive()