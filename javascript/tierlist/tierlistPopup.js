const popupElm = document.getElementById("tl-popup")

const popupContentElm = document.getElementById("tl-popup-content")

const popupUnitButtonElm = document.getElementById("tl-popup-image")

/* Unit Image */
const popupUnitImageElm = document.getElementById("tl-unit-image")
const popupUnitGradientElm = document.getElementById("tl-unit-gradient")
const popupUnitElementElm = document.getElementById("tl-unit-element")

/* Unit Stats */
const popupUnitNameElm = document.getElementById("tl-popup-name")

const popupUnitIntitialCostElm = document.getElementById("tl-popup-intitial-cost")
const popupUnitFinalCostElm = document.getElementById("tl-popup-final-cost")

const popupUnitFinalAoeElm = document.getElementById("tl-popup-final-aoe")

/* Description */

const popupDescriptionElm = document.getElementById("tl-popup-description")

/* Pros and Cons */

const popupProsListElm = document.getElementById("tl-popup-pros")
const popupConsListElm = document.getElementById("tl-popup-cons")

/* Familiars */

const popupFamiliarsListElm = document.getElementById("tl-popup-familiars-container")

/* Synergies */

const popupSynergiesListElm = document.getElementById("tl-popup-teams-container")

function loadUnitInfo(unitID) {
  popupUnitButtonElm.onclick = () => { selectUnit(unitID); };

  const unitRarity = unitTagData[unitID].rarities[unitTagData[unitID].rarities.length - 1].toLowerCase()
  const unitElement = unitTagData[unitID].elements[0]

  popupContentElm.className = "tl-" + unitRarity

  /* Unit Image */
  popupUnitGradientElm.className = "unit-gradient"
  popupUnitGradientElm.classList.add(unitRarity)

  popupUnitImageElm.src = "Images/Units/" + unitID + ".webp"

  popupUnitElementElm.src = "Images/Elements/" + unitElement + ".webp"

  /* Unit Stats */
  popupUnitNameElm.innerText = unitStats[unitID].displayName

  popupUnitIntitialCostElm.innerHTML = "<span class='text-gradient money'>" + unitStats[unitID].placementCost + "¥</span>"
  popupUnitFinalCostElm.innerHTML = "<span class='text-gradient money'>" + unitStats[unitID].maxCost + "¥</span>"

  popupUnitFinalAoeElm.innerHTML = "<img class='element' src='Images/Aoes/" + getAttackType(unitStats[unitID].aoe) + ".png'>" + unitStats[unitID].aoe

  /* Description */

  popupDescriptionElm.innerHTML = (unitDescriptions[unitID] && unitDescriptions[unitID].description != "") ? formatFlavorText(formatPassiveDescription(unitDescriptions[unitID].description)) : "Description N/A";

  /* Pros and Cons */

  popupProsListElm.innerHTML = ""
  const ProsDottedListElm = createElement("ul", "", popupProsListElm)

  if (unitDescriptions[unitID]) {
    for (pro of unitDescriptions[unitID].pros) {
      createElement("li", "", ProsDottedListElm).innerText = pro;
    }
  } else {
    createElement("li", "", ProsDottedListElm).innerText = "Pros not included for units under T1.5 for now";
    createElement("li", "", ProsDottedListElm).innerText = "Or this unit is missing pros for some reason";
  }

  popupConsListElm.innerHTML = ""
  const ConsDottedListElm = createElement("ul", "", popupConsListElm)

  if (unitDescriptions[unitID]) {
    for (con of unitDescriptions[unitID].cons) {
      createElement("li", "", ConsDottedListElm).innerText = con;
    }
  } else {
    createElement("li", "", ConsDottedListElm).innerText = "Cons not included for units under T1.5 for now";
    createElement("li", "", ConsDottedListElm).innerText = "Or this unit is missing cons for some reason";
  }

  /* Familiars */

  function loadFamiliar(position, familiar) {
    /* Rankings */

    const FamiliarRankingElm = createElement("div", "tl-familiar-ranking", popupFamiliarsListElm)

    switch (position) {
      case 1:
        FamiliarRankingElm.innerText = "1st Best"
        break;
      case 2:
        FamiliarRankingElm.innerText = "2nd Best"
        break;
      case 3:
        FamiliarRankingElm.innerText = "3rd Best"
        break;
    }

    const familiarData = FamiliarDescriptions[familiar]

    const FamiliarTabElm = createElement("div", "tl-popup-familiar-tab", popupFamiliarsListElm)

    /* Familiar Image */

    const FamiliarImageElm = createElement("button", "unit-button tl-familiar-image", FamiliarTabElm)
    const FamiliarGradientElm = createElement("div", "unit-gradient " + (familiarData ? familiarData.rarity : "secret"), FamiliarImageElm)

    const FamiliarTextureElm = createElement("img", "unit-gradient-texture", FamiliarGradientElm)
    FamiliarTextureElm.src = "Images/Icons/Dots.webp"

    const FamiliarContentElm = createElement("div", "unit-content", FamiliarGradientElm)
    const FamiliarPictureElm = createElement("img", "unit-picture", FamiliarContentElm)
    FamiliarPictureElm.src = familiarData ? familiarData.image : "Images/Familiars/Familiar.webp"

    /* Familiar Description */

    const FamiliarInfoWrapperElm = createElement("div", "tl-familiar-info-wrapper", FamiliarTabElm)

    const FamiliarNameElm = createElement("div", "tl-familiar-name passive text-gradient", FamiliarInfoWrapperElm)
    FamiliarNameElm.innerText = familiar ? familiar : "None"

    const FamiliarDescriptionElm = createElement("div", "tl-familiar-description", FamiliarInfoWrapperElm)
    FamiliarDescriptionElm.innerText = familiar ? familiarData.description : "N/a"
  }

  popupFamiliarsListElm.innerHTML = ""

  const unitFamiliarsList = unitFamiliars[unitID]

  for (let i = 1; i <= 3; i++) {
    loadFamiliar(i, unitFamiliarsList ? unitFamiliarsList["fam" + i] : "")
  }

  /* Synergies */

  function loadSynergy(synergy) {
    const teamTabElm = createElement("div", "tl-popup-team-tab", popupSynergiesListElm)

    const teamInfoElm = createElement("div", "tl-popup-team-info", teamTabElm)

    const teamNameElm = createElement("div", "tl-popup-team-name text-gradient passive", teamInfoElm)
    teamNameElm.innerText = synergy.name ? synergy.name : "[Insert Clever Name]"

    const teamDescElm = createElement("div", "tl-popup-team-description", teamInfoElm)
    teamDescElm.innerText = synergy.desc ? synergy.desc : "Description TBA"

    const teamUnitsElm = createElement("div", "tl-popup-team-units", teamTabElm)

    // Add the main unit first
    const mainUnitButtonElm = createElement("button", "unit-button tl-familiar-image", teamUnitsElm)
    const mainUnitRarity = unitTagData[unitID].rarities[unitTagData[unitID].rarities.length - 1].toLowerCase()
    const mainUnitGradientElm = createElement("div", "unit-gradient " + mainUnitRarity, mainUnitButtonElm)

    const mainUnitTextureElm = createElement("img", "unit-gradient-texture", mainUnitGradientElm)
    mainUnitTextureElm.src = "Images/Icons/Dots.webp"

    const mainUnitContentElm = createElement("div", "unit-content", mainUnitGradientElm)
    const mainUnitPictureElm = createElement("img", "unit-picture", mainUnitContentElm)
    mainUnitPictureElm.src = "Images/Units/" + unitID + ".webp"

    // Add synergy units
    if (synergy.units) {
      for (const synergyUnit of synergy.units) {
        const unitButtonElm = createElement("button", "unit-button tl-familiar-image", teamUnitsElm)
        const synergyUnitRarity = unitTagData[synergyUnit] ? unitTagData[synergyUnit].rarities[unitTagData[synergyUnit].rarities.length - 1].toLowerCase() : "secret"
        const unitGradientElm = createElement("div", "unit-gradient " + synergyUnitRarity, unitButtonElm)

        const unitTextureElm = createElement("img", "unit-gradient-texture", unitGradientElm)
        unitTextureElm.src = "Images/Icons/Dots.webp"

        const unitContentElm = createElement("div", "unit-content", unitGradientElm)
        const unitPictureElm = createElement("img", "unit-picture", unitContentElm)
        unitPictureElm.src = "Images/Units/" + synergyUnit + ".webp"
      }
    }
  }

  popupSynergiesListElm.innerHTML = ""

  const unitSynergyList = unitSynergies[unitID]

  if (!unitSynergyList) {
    loadSynergy({
      name: "Synergies TBA",
      desc: "Feel free to dm/ping me @migomigy on discord for synergy ideas to include. You can also find me through the list of testers in the Av Server",
      units: []
    })

    return;
  }

  if (unitSynergyList.length > 0) {
    for (const synergy of unitSynergyList) {
      if (Object.keys(synergy).length != 0) {
        loadSynergy(synergy)
      }
    }
  }

  if (unitSynergyList.length < 2) {
    loadSynergy({
      name: "Synergies TBA",
      desc: "Feel free to dm/ping me @migomigy on discord for synergy ideas to include. You can also find me through the list of testers in the Av Server",
      units: []
    })
  }
}

function OpenTietlistPopup(unitID) {
  popupElm.classList.remove("hidden")

  loadUnitInfo(unitID)
}

function CloseTietlistPopup() {
  popupElm.classList.add("hidden")
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    CloseTietlistPopup();
  }
});

popupElm.addEventListener("click", (e) => {
  if (e.target === popupElm) {
    CloseTietlistPopup();
  }
});