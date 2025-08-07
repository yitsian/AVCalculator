const corruptionInput = document.getElementById("corruption-input")

const corruptionTag = corruptionInput.children[0]

const corruptionText = corruptionTag.children[1]

let corruptionSlider = null;
let corruptionValueDisplay = null;

function createCorruption4Slider(min, max) {
  corruptionSlider = createElement("input", "slider", corruptionInput);
  corruptionSlider.type = "range";
  corruptionSlider.min = min;
  corruptionSlider.max = max;
  corruptionSlider.step = 1;
  corruptionSlider.value = 0;
  corruptionSlider.id = "corruption-slider";

  corruptionValueDisplay = createElement("div", "general-text round-form tags font-size-20 passive-number-padding", corruptionInput);
  corruptionValueDisplay.textContent = corruptionSlider.value + "%";

  const buff = corruption == 4 ? [1, 0, 0, 0, 0, 0] : familiarsData[selectedFamiliar].buffs.map(number => number / 100)

  buffUpdate(null, corruptionSlider, corruptionValueDisplay, "corruption-slider", 
    {multiplicative: corruption == 4 ? true : familiarsData[selectedFamiliar].multiplicative, buffs: buff, type: "Slider"}
  )
}

function updateCorruption(change) {
  if (change == true) {
    if (corruption == 1) {
      corruption = 3
    } else if (corruption == 3) {
      corruption = 4
    } else {
      corruption = 1
    }
  }

  if (corruptionSlider) corruptionSlider.remove(); clearBuffActive("corruption-slider");
  if (corruptionValueDisplay) corruptionValueDisplay.remove();

  for (sliderIndex in familiarPassiveSliders) {
    const slider = familiarPassiveSliders[sliderIndex].slider

    slider.max = familiarPassiveSliders[sliderIndex].origMax
    slider.min = familiarPassiveSliders[sliderIndex].origMin

    slider.value = Math.min(Math.max(slider.value, familiarPassiveSliders[sliderIndex].origMin), familiarPassiveSliders[sliderIndex].origMax);

    slider.dispatchEvent(new Event("input"));
  }

  if (corruption == 4) {
    createCorruption4Slider(0, 10)
  } else if (corruption == 3) {
    for (sliderIndex in familiarPassiveSliders) {
      const slider = familiarPassiveSliders[sliderIndex].slider

      slider.max = familiarPassiveSliders[sliderIndex].origMax * 1.5
      slider.min = familiarPassiveSliders[sliderIndex].origMin * 1.5
    }

    if (familiarsData[selectedFamiliar].type == "Statement") {
      createCorruption4Slider(0, 50)
    }
  }

  corruptionText.textContent = "Corruption " + corruption
}

updateCorruption()