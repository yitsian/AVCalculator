const headerIconSectionElm = document.getElementsByClassName("icons-section")[0]

// Get current page filename
const currentPage = window.location.pathname.split('/').pop() || 'index.html'

// Determine which button should be selected
function getSelectedClass(page) {
  return currentPage === page ? 'selected-tag' : 'button-hover'
}

headerIconSectionElm.innerHTML = `
  <button class="tags general-text round-form ${getSelectedClass('index.html')} navigate-button"
    onclick="navigateTo('index.html')">Home</button>

  <button class="tags general-text round-form ${getSelectedClass('units.html')} navigate-button"
    onclick="navigateTo('units.html')">Units</button>

  <button class="tags general-text round-form ${getSelectedClass('calculator.html')} navigate-button"
    onclick="navigateTo('calculator.html')">Calculator</button>
    
  <button class="tags general-text round-form ${getSelectedClass('tierlist.html')} navigate-button"
    onclick="navigateTo('tierlist.html')">Tierlist</button>

  <button class="tags general-text round-form ${getSelectedClass('reroll.html')} navigate-button"
    onclick="navigateTo('reroll.html')">Rerolling</button>
`