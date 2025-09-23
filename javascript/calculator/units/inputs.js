function updateTrait(change) {
  const traitImage = document.getElementById("trait-input").children[0]
  const traitText = document.getElementById("trait-input").children[1]

  let traitIndex = traitOrder.indexOf(trait)

  if (change == true) {
    if (traitIndex + 1 < traitOrder.length) {
      trait = traitOrder[traitIndex + 1]
    } else {
      trait = traitOrder[0]
    }

    traitIndex = traitOrder.indexOf(trait)
  }

  traitImage.src = "Images/Traits/" + trait + ".webp"

  traitText.textContent = trait

  traitText.classList.remove("mythic")
  traitText.classList.remove("legendary")
  traitText.classList.remove("koguro")

  if (traitIndex <= 3) {
    traitText.classList.add("mythic")
  } else if (traitIndex <= 5) {
    traitText.classList.add("legendary")
  } else {
    traitText.classList.add("koguro")
  }

  updateAllMultipliers();
  updateBaseStats()
}

function updateAscensions(add) {
  const ascensionsText = document.getElementById("ascensions-input").children[1]

  if (unitTagData[selectedUnit].rarities[0] == "Mythic") {
    if (add == true) {
      if (ascensions < 3) {
        ascensions += 1
      } else {
        ascensions = 0
      }
    }
  } else {
    ascensions = -1
  }

  if (ascensions >= 1) {
    ascensionsText.textContent = "Ascension " + "I".repeat(ascensions)
  } else if (ascensions == 0) {
    ascensionsText.textContent = "Ascension " + "0"
  } else {
    ascensionsText.textContent = "Cannot Ascend"
  }

  updateBaseStats()
}

document.querySelectorAll('.clamp-percent-input').forEach(input => {
  function clampInput() {
    let raw = input.value.replace(/[^0-9.]/g, ""); // Remove non-numeric
    let num = parseFloat(raw);

    if (isNaN(num)) num = 0;

    const min = 0;
    let max = 12.5;

    if (input.id == "dmg-input") {
      max = 25.0;
    }

    num = Math.max(min, Math.min(num, max));

    // Format nicely: always show %, trim .00 if whole number
    input.value = num.toFixed(1);

    updateBaseStats()
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      input.blur();
    }
  });

  input.addEventListener("blur", clampInput);
});

function focusInput(container) {
  const input = container.querySelector("input");
  if (input) input.focus();
}

updateAscensions()
updateTrait()