// Search bar
const searchBar = document.getElementById('tierlist-search');

// Obtainability filter buttons
const obtainabilityFilterContainer = document.getElementById('tierlist-obtainability-filter');
const permanentButton = document.getElementById('tl-filter-obtainability-permanent');
const limitedButton = document.getElementById('tl-filter-obtainability-limited');
const unobtainableButton = document.getElementById('tl-filter-obtainability-unobtainable');

// AoE filter buttons
const aoeFilterContainer = document.getElementById('tierlist-aoe-filter');
const aoeAllButton = document.getElementById('tl-filter-aoe-all');
const aoeSingleButton = document.getElementById('tl-filter-aoe-single');
const aoeCircleButton = document.getElementById('tl-filter-aoe-circle');
const aoeLineButton = document.getElementById('tl-filter-aoe-line');
const aoeStadiumButton = document.getElementById('tl-filter-aoe-stadium');
const aoeAConeButton = document.getElementById('tl-filter-aoe-acone');
const aoeOConeButton = document.getElementById('tl-filter-aoe-ocone');
const aoeSplashButton = document.getElementById('tl-filter-aoe-splash');
const aoeFullButton = document.getElementById('tl-filter-aoe-full');

// Element filter buttons
const elementFilterContainer = document.getElementById('tierlist-element-filter');
const elementAllButton = document.getElementById('tl-filter-element-all');
const elementSparkButton = document.getElementById('tl-filter-element-spark');
const elementNatureButton = document.getElementById('tl-filter-element-nature');
const elementWaterButton = document.getElementById('tl-filter-element-water');
const elementFireButton = document.getElementById('tl-filter-element-fire');
const elementHolyButton = document.getElementById('tl-filter-element-holy');
const elementPassionButton = document.getElementById('tl-filter-element-passion');
const elementCurseButton = document.getElementById('tl-filter-element-curse');
const elementBlastButton = document.getElementById('tl-filter-element-blast');
const elementCosmicButton = document.getElementById('tl-filter-element-cosmic');
const elementUnboundButton = document.getElementById('tl-filter-element-unbound');
const elementUnknownButton = document.getElementById('tl-filter-element-unknown');

// Arrays for easier iteration
const obtainabilityButtons = [permanentButton, limitedButton, unobtainableButton];
const aoeButtons = [aoeAllButton, aoeSingleButton, aoeCircleButton, aoeLineButton, aoeStadiumButton, aoeAConeButton, aoeOConeButton, aoeSplashButton, aoeFullButton];
const elementButtons = [elementAllButton, elementSparkButton, elementNatureButton, elementWaterButton, elementFireButton, elementHolyButton, elementPassionButton, elementCurseButton, elementBlastButton, elementCosmicButton, elementUnboundButton, elementUnknownButton];

let searchFilter = ""

// Filter state arrays
let elementFilters = []
let obtainabilityFilters = []
let aoesFilters = []

searchBar.addEventListener("input", () => {
  searchFilter = searchBar.value.toLowerCase().replace(' ', '')
  loadTierList()
})

function toggleFilter(button, filterArray, filterType) {
  const filterValue = button.id.replace(`tl-filter-${filterType}-`, '');

  const index = filterArray.indexOf(filterValue);
  if (index > -1) {
    filterArray.splice(index, 1);
  } else {
    filterArray.push(filterValue);
  }

  // Toggle selected-filter class
  button.classList.toggle('selected-filter');
}

// Add event listeners for obtainability buttons
for (const obtainButton of obtainabilityButtons) {
  obtainButton.addEventListener('click', () => {
    toggleFilter(obtainButton, obtainabilityFilters, 'obtainability')
    loadTierList()
  });
}

// Add event listeners for AoE buttons
for (const aoeButton of aoeButtons) {
  if (aoeButton === aoeAllButton) {
    // Handle "All" button click
    aoeButton.addEventListener('click', () => {
      // Clear all filters
      aoesFilters.length = 0;
      // Remove selected-filter from all other buttons
      aoeButtons.forEach(btn => {
        if (btn !== aoeAllButton) {
          btn.classList.remove('selected-filter');
        }
      });
      // Add selected-filter to All button
      aoeAllButton.classList.add('selected-filter');

      loadTierList()
    });
  } else {
    // Handle other AoE buttons
    aoeButton.addEventListener('click', () => {
      toggleFilter(aoeButton, aoesFilters, 'aoe');
      // Remove selected-filter from All button when other filters are selected
      if (aoesFilters.length > 0) {
        aoeAllButton.classList.remove('selected-filter');
      } else {
        // If no filters left, select All button
        aoeAllButton.classList.add('selected-filter');
      }

      loadTierList()
    });
  }
}

// Add event listeners for element buttons
for (const elementButton of elementButtons) {
  if (elementButton === elementAllButton) {
    // Handle "All" button click
    elementButton.addEventListener('click', () => {
      // Clear all filters
      elementFilters.length = 0;
      // Remove selected-filter from all other buttons
      elementButtons.forEach(btn => {
        if (btn !== elementAllButton) {
          btn.classList.remove('selected-filter');
        }
      });
      // Add selected-filter to All button
      elementAllButton.classList.add('selected-filter');

      loadTierList()
    });
  } else {
    // Handle other element buttons
    elementButton.addEventListener('click', () => {
      toggleFilter(elementButton, elementFilters, 'element');
      // Remove selected-filter from All button when other filters are selected
      if (elementFilters.length > 0) {
        elementAllButton.classList.remove('selected-filter');
      } else {
        // If no filters left, select All button
        elementAllButton.classList.add('selected-filter');
      }

      loadTierList()
    });
  }
}