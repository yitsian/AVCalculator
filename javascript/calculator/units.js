let selectedUnit = JSON.parse(localStorage.getItem("selectedUnit")) || "Vsjw";

let trait = "Monarch"
let ascensions = 0

const picture = document.getElementById("unit-picture");
const pictureGradient = document.getElementById("unit-picture-gradient");

const displayName = document.getElementById("unit-display-name");
const rarity = document.getElementById("unit-rarity");

const element = document.getElementById("unit-element")
const elementImage = element.children[0]
const elementName = element.children[1]

const placementCost = document.getElementById("unit-placement-cost").firstElementChild
const placementCount = document.getElementById("unit-placement-count")

const levelSlider = document.getElementById("level-slider")
const levelDisplay = document.getElementById("level-display")

const damageInput = document.getElementById("dmg-input")
const spaInput = document.getElementById("spa-input")
const rangeInput = document.getElementById("rng-input")

const aoeShape = document.getElementById("unit-aoe").children[0]
const aoeSize = document.getElementById("unit-aoe").children[1]
const aoeHits = document.getElementById("unit-aoe-hits")

const baseDamage = document.getElementById("unit-base-damage")
const baseSpa = document.getElementById("unit-base-spa")
const baseRange = document.getElementById("unit-base-range")
const baseCrit = document.getElementById("unit-base-crit")
const baseCritDmg = document.getElementById("unit-base-crit-dmg")

const unitRarities = unitTagData[selectedUnit].rarities
const unitElements = unitTagData[selectedUnit].elements

picture.src = "Images/Units/" + selectedUnit + ".webp"
pictureGradient.classList.add(unitRarities[unitRarities.length - 1].toLowerCase())

displayName.textContent = unitStats[selectedUnit].displayName

rarity.textContent = unitRarities[0]
rarity.classList.add(unitRarities[unitRarities.length - 1].toLowerCase())

elementImage.src = "Images/Elements/" + unitElements[0] + ".webp"

elementName.classList.add(unitElements[0].toLowerCase())
elementName.textContent = unitElements[0]

placementCost.textContent = unitStats[selectedUnit].placementCost + " ¥"
placementCount.textContent = unitStats[selectedUnit].placementCount + " Placement"

aoeShape.src = "Images/Aoes/" + unitTagData[selectedUnit].aoes[0] + ".png"
aoeSize.textContent = unitStats[selectedUnit].aoe
aoeHits.textContent = unitStats[selectedUnit].hits + " Hits"

function updateLevel() {
  levelDisplay.innerText = "Lv." + levelSlider.value

  updateBaseStats()
}

levelSlider.addEventListener("input", updateLevel);
updateLevel()