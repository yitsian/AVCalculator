let selectedRankings = "Optimal"

function createTierlistUnitDisplay(parent, unitData) {
  const unitDisplay = createElement("div", "tl-unit-display", parent);

  const unitButton = createElement("button", "unit-button tl-unit-icon", unitDisplay);
  unitButton.onclick = () => OpenTietlistPopup(unitData.id);

  const unitGradient = createElement("div", `unit-gradient ${unitTagData[unitData.id].rarities[unitTagData[unitData.id].rarities.length - 1].toLowerCase()}`, unitButton);

  const gradientTexture = createElement("img", "unit-gradient-texture", unitGradient);
  gradientTexture.src = "Images/Icons/Dots.webp";

  const unitContent = createElement("div", "unit-content", unitGradient);

  const unitPicture = createElement("img", "unit-picture", unitContent);
  unitPicture.src = `Images/Units/${unitData.id}.webp`;

  const unitElement = createElement("img", "unit-element", unitContent);
  unitElement.src = `Images/Elements/${unitTagData[unitData.id].elements[0]}.webp`;

  if (selectedRankings != "Traitless") {
    const unitTrait = createElement("img", "unit-trait", unitContent);
    unitTrait.src = `Images/Traits/${unitData.trait}.webp`;
  }

  const unitDescription = createElement("div", "", unitDisplay);
  unitDescription.textContent = unitData.description;

  return unitDisplay;
}

function filterList(unit) {
  const unitElement = unitTagData[unit.id].elements[0].toLowerCase()
  const unitAoe = unitTagData[unit.id].aoes[0].toLowerCase()
  const unitObtainability = unitTagData[unit.id].availability[0].toLowerCase()

  if (obtainabilityFilters.length > 0 && !obtainabilityFilters.includes(unitObtainability)) {
    return false;
  }

  if (elementFilters.length > 0 && !elementFilters.includes(unitElement)) {
    return false;
  }

  if (aoesFilters.length > 0 && !aoesFilters.includes(unitAoe)) {
    return false;
  }

  if (searchFilter && !unit.id.toLowerCase().includes(searchFilter)) {
    return false;
  }

  return true
}

function createListElements(rankings, isSmallScreen) {
  // Clear all tier rows
  const tierRows = ['tl-t0', 'tl-t0p5', 'tl-t1', 'tl-t1p5', 'tl-t2', 'tl-t3', 'tl-t4', 'tl-t5'];
  tierRows.forEach(tierId => {
    const tierRow = document.getElementById(tierId);
    if (tierRow) {
      tierRow.innerHTML = '';
    }
  });

  for (tier in rankings) {
    const tierRow = document.getElementById("tl-" + tier)

    let rowLabel = createElement("div", "tl-tier-label " + tier, tierRow)
    rowLabel.textContent = rankings[tier].name

    const categories = rankings[tier].categories

    const rowUnitContainer = createElement("div", "tl-tier-row", tierRow)

    for (category in categories) {
      /* If screen is small, load class labels in rowUnitContainer */
      if (isSmallScreen) {
        let categoryLabel = createElement("div", "tl-small-unit-class " + category + " tooltip", rowUnitContainer)

        switch (category) {
          case "carry":
            categoryLabel.innerHTML = `<img src="Images/Icons/Dmg_Icon.webp"
          class="tl-unit-class-icon"></img>Carry`
            categoryLabel.setAttribute("data-popup", "Primary damage dealers that usually have good early defend and large final Aoes.");
            break;
          case "subDamage":
            categoryLabel.innerHTML = `<img src="Images/Icons/Dps_icon.webp"
          class="tl-unit-class-icon"></img>Sub-Damage`
            categoryLabel.setAttribute("data-popup", "Secondary damage units that require more investment or specialize in specific scenerios.");
            break;
          case "support":
            categoryLabel.innerHTML = `<img src="Images/Icons/Repulse.webp"
          class="tl-unit-class-icon"></img>Support`
            categoryLabel.setAttribute("data-popup", "Units that provide debuffs or crowd control.");
            break;
          case "utility":
            categoryLabel.innerHTML = `<img src="Images/Icons/Utility.webp"
          class="tl-unit-class-icon"></img>Utility`
            categoryLabel.setAttribute("data-popup", "Buffers and units that are useful in specific stages / strategies.");
            break;
        }
      }

      /* Load Unit Groups*/

      let categoryTierGroup

      switch (category) {
        case "carry":
        case "support":
          categoryTierGroup = createElement("div", "tl-tier-unit-container1", rowUnitContainer)
          break;
        case "subDamage":
        case "utility":
          categoryTierGroup = createElement("div", "tl-tier-unit-container2", rowUnitContainer)
          break;
      }

      const units = categories[category]

      for (unit of units) {
        if (filterList(unit)) {
          createTierlistUnitDisplay(categoryTierGroup, unit)
        }
      }
    }
  }

  // Load tooltips after all content is loaded
  setTimeout(loadTooltips, 0);
}

function loadTierList() {
  // Reload based on selected rankings
  switch (selectedRankings) {
    case "Optimal": {
      createListElements(optimalRankings, window.innerWidth <= SMALL_SCREEN_SIZE);
      break;
    }
    case "Traitless": {
      createListElements(traitlessRankings, window.innerWidth <= SMALL_SCREEN_SIZE);
      break;
    }
  }

  handleDividers(window.innerWidth <= SMALL_SCREEN_SIZE)
}

// Initial load
window.addEventListener('DOMContentLoaded', loadTierList)
loadTierList();