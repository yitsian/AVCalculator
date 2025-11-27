const OptimalButtonElm = document.getElementById("Optimal")
const TraitlessButtonElm = document.getElementById("Traitless")
const InfiniteButtonElm = document.getElementById("Infinite")
const PvpButtonElm = document.getElementById("Pvp")
const TournamentsButtonElm = document.getElementById("Tournaments")

OptimalButtonElm.style.backgroundImage = "url('Images/Other/The_One.webp')"
TraitlessButtonElm.style.backgroundImage = "url('Images/Other/Weakest_Hunter.webp')"
InfiniteButtonElm.style.backgroundImage = "url('Images/Other/Double_Dungeon.webp')"
PvpButtonElm.style.backgroundImage = "url('Images/Other/Ultimate_Fusion.webp')"
TournamentsButtonElm.style.backgroundImage = "url('Images/Other/Eclipse_Banner.webp')"

let selectedCategory = "Optimal"

function selectButton(buttonID) {
  if (buttonID != selectedCategory) {
    const oldSelectedButton = document.getElementById(selectedCategory)
    const newSelectedButton = document.getElementById(buttonID)

    oldSelectedButton.classList.remove("selected-category")
    newSelectedButton.classList.add("selected-category")

    selectedCategory = buttonID

    // Load TL
    selectedRankings = buttonID
    loadTierList()
  }
}
