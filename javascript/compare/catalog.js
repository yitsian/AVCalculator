// Load selection state from localStorage or initialize empty
function loadSelectionState() {
  const saved = localStorage.getItem('comparisonSelection');
  if (saved) {
    const state = JSON.parse(saved);
    return {
      selectedUnit1: state.selectedUnit1 || "",
      selectedUnit1Data: state.selectedUnit1Data || null,
      selectedBox1: state.selectedBox1 || "",
      selectedUnit2: state.selectedUnit2 || "",
      selectedUnit2Data: state.selectedUnit2Data || null,
      selectedBox2: state.selectedBox2 || "",
      lastSelected: state.lastSelected || 2
    };
  }
  return {
    selectedUnit1: "",
    selectedUnit1Data: null,
    selectedBox1: "",
    selectedUnit2: "",
    selectedUnit2Data: null,
    selectedBox2: "",
    lastSelected: 2
  };
}

// Save selection state to localStorage
function saveSelectionState() {
  const state = {
    selectedUnit1,
    selectedUnit1Data,
    selectedBox1,
    selectedUnit2,
    selectedUnit2Data,
    selectedBox2,
    lastSelected
  };
  localStorage.setItem('comparisonSelection', JSON.stringify(state));
}

// Initialize from localStorage
let selectionState = loadSelectionState();
let selectedUnit1 = selectionState.selectedUnit1;
let selectedUnit1Data = selectionState.selectedUnit1Data;
let selectedBox1 = selectionState.selectedBox1;
let selectedUnit2 = selectionState.selectedUnit2;
let selectedUnit2Data = selectionState.selectedUnit2Data;
let selectedBox2 = selectionState.selectedBox2;
let lastSelected = selectionState.lastSelected;

const searchIndex = document.getElementById("comparison-catalog-search-input")
const typeIndex = document.getElementById("comparison-catalog-sort-type")
const orderIndex = document.getElementById("comparison-catalog-sort-order")

/**
 * Constructor function to create a comparison catalog item from unit DPS data
 * @param {string} unitName - The unit name key from unitDpsData
 * @param {Array} variants - Array of unit variant objects with trait, familiar, modifier, cost, dps, rng, attacks
 * @returns {HTMLElement} The complete catalog item element
 */
function createComparisonCatalogItem(unitName, variants) {
  if (!variants || variants.length === 0) return null;

  // Calculate min and max DPS and range
  const dpsValues = variants.map(v => v.dps);
  const rngValues = variants.map(v => v.rng);
  const minDps = Math.min(...dpsValues);
  const maxDps = Math.max(...dpsValues);
  const minRng = Math.min(...rngValues);
  const maxRng = Math.max(...rngValues);

  const firstVariant = variants[0];
  const displayName = unitName.replace(/([A-Z])/g, ' $1').trim();
  const unitRarityGradient = unitTagData[unitName].rarities[unitTagData[unitName].rarities.length - 1].toLowerCase();

  // Create main container
  const catalogItem = document.createElement('div');
  catalogItem.id = `cc-${unitName}`;
  catalogItem.className = 'comparison-catalog-item no-select';

  // Create dropdown header
  const dropdownHeader = createElement('div', 'comparison-catalog-item-dropdown', catalogItem);
  dropdownHeader.onclick = () => toggleDropdown(`cc-${unitName}`);

  // Unit button with image
  const unitButton = createElement('button', 'unit-button comparison-catalog-image', dropdownHeader);
  const unitGradient = createElement('div', `unit-gradient ${unitRarityGradient}`, unitButton);

  const gradientTexture = document.createElement('img');
  gradientTexture.className = 'unit-gradient-texture';
  gradientTexture.src = 'Images/Icons/Dots.webp';
  unitGradient.appendChild(gradientTexture);

  const unitContent = createElement('div', 'unit-content', unitGradient);
  const unitPicture = document.createElement('img');
  unitPicture.className = 'unit-picture';
  unitPicture.src = `Images/Units/${unitName}.webp`;
  unitContent.appendChild(unitPicture);

  // Description wrapper
  const descWrapper = createElement('div', 'comparison-catalog-description-wrapper', dropdownHeader);
  const nameDiv = createElement('div', `comparison-catalog-name general-text text-gradient ${unitRarityGradient}`, descWrapper);
  nameDiv.textContent = displayName;

  const tabStructure = createElement('div', 'tab-structure align-left', descWrapper);

  // Familiar tag
  const familiarTag = createElement('div', 'round-form tags image-tag general-text', tabStructure);
  const familiarImg = document.createElement('img');
  familiarImg.className = 'element';

  familiarImg.src = FamiliarDescriptions[firstVariant.familiar].image;
  familiarTag.appendChild(familiarImg);
  const familiarSpan = createElement('span', `text-gradient ${FamiliarDescriptions[firstVariant.familiar].rarity}`, familiarTag);
  familiarSpan.textContent = firstVariant.familiar;

  // DPS tag
  const dpsTag = createElement('div', 'round-form tags image-tag general-text', tabStructure);
  const dpsImg = document.createElement('img');
  dpsImg.className = 'element';
  dpsImg.src = 'Images/Icons/Dps_icon.webp';
  dpsTag.appendChild(dpsImg);
  const dpsSpan = createElement('span', 'critDmg', dpsTag);
  dpsSpan.textContent = `${minDps}k - ${maxDps}k`;

  // Range tag
  const rngTag = createElement('div', 'round-form tags image-tag general-text', tabStructure);
  const rngImg = document.createElement('img');
  rngImg.className = 'element';
  rngImg.src = 'Images/Icons/Rng_icon.webp';
  rngTag.appendChild(rngImg);
  const rngSpan = createElement('span', 'range', rngTag);
  rngSpan.textContent = `${minRng} - ${maxRng}`;

  // Dropdown arrow
  const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  arrow.setAttribute('width', '16');
  arrow.setAttribute('height', '16');
  arrow.setAttribute('viewBox', '0 0 24 24');
  arrow.classList = 'comparison-catalog-dropdown-arrow';
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M6 9l6 6 6-6');
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', 'currentColor');
  path.setAttribute('stroke-width', '2');
  arrow.appendChild(path);
  dropdownHeader.appendChild(arrow);

  // Dropdown container with variants
  const dropdownContainer = createElement('div', 'comparison-catalog-item-dropdown-container', catalogItem);

  variants.forEach((variant, index) => {
    const variantItem = createElement('div', `comparison-catalog-item-dropdown-item`, dropdownContainer);
    variantItem.id = `cc-${unitName}-${index}`;
    variantItem.onclick = () => {
      makeSelection(unitName, variant, variantItem.id)
    };

    // Check if Variant item matches an already selected item 1 or 2
    if (variantItem.id == selectedBox1 || variantItem.id == selectedBox2) {
      variantItem.classList.add("selected")
    }

    const title = createElement('div', 'comparison-catalog-item-dropdown-item-title general-text', variantItem);
    title.textContent = variant.modifier;

    const traitStat = createElement('div', 'comparison-catalog-item-dropdown-item-stat text-gradient mythic general-text', variantItem);
    const traitImg = document.createElement('img');
    traitImg.src = `Images/Traits/${variant.trait}.webp`;
    traitStat.appendChild(traitImg);
    traitStat.appendChild(document.createTextNode(variant.trait));

    const dpsStat = createElement('div', 'comparison-catalog-item-dropdown-item-stat critDmg general-text', variantItem);
    const dpsStatImg = document.createElement('img');
    dpsStatImg.src = 'Images/Icons/Dps_icon.webp';
    dpsStat.appendChild(dpsStatImg);
    dpsStat.appendChild(document.createTextNode(`${variant.dps}k`));

    const rngStat = createElement('div', 'comparison-catalog-item-dropdown-item-stat range general-text', variantItem);
    const rngStatImg = document.createElement('img');
    rngStatImg.src = 'Images/Icons/Rng_icon.webp';
    rngStat.appendChild(rngStatImg);
    rngStat.appendChild(document.createTextNode(variant.rng));
  });

  return catalogItem;
}

function makeSelection(unitName, variantData, selectedId) {
  // Check if this unit is already selected in slot 1
  if (selectedUnit1 == unitName) {
    // If clicking the same variant, deselect it
    if (selectedBox1 === selectedId) {
      toggleItem(selectedBox1);
      setSelection("", null, "", 1);
      document.querySelector('#comparison-selection-1').innerHTML = '';
      return;
    }

    // Different variant of same unit - update to new variant
    toggleItem(selectedBox1);
    toggleItem(selectedId);
    setSelection(unitName, variantData, selectedId, 1);
    loadUnitComparison(unitName, variantData, 1);
    return;
  }

  // Check if this unit is already selected in slot 2
  if (selectedUnit2 == unitName) {
    // If clicking the same variant, deselect it
    if (selectedBox2 === selectedId) {
      toggleItem(selectedBox2);
      setSelection("", null, "", 2);
      document.querySelector('#comparison-selection-2').innerHTML = '';
      return;
    }

    // Different variant of same unit - update to new variant
    toggleItem(selectedBox2);
    toggleItem(selectedId);
    setSelection(unitName, variantData, selectedId, 2);
    loadUnitComparison(unitName, variantData, 2);
    return;
  }

  // No slots have this unit selected, so add it to an empty slot or replace the least recently selected
  if (selectedUnit1 == "" || selectedUnit1 === undefined) {
    lastSelected = 1;
    toggleItem(selectedId);
    setSelection(unitName, variantData, selectedId, 1);
    loadUnitComparison(unitName, variantData, 1);
    return;
  } else if (selectedUnit2 == "" || selectedUnit2 === undefined) {
    lastSelected = 2;
    toggleItem(selectedId);
    setSelection(unitName, variantData, selectedId, 2);
    loadUnitComparison(unitName, variantData, 2);
    return;
  }

  // Both slots are full, replace the least recently selected slot
  if (lastSelected == 1) {
    lastSelected = 2;
    toggleItem(selectedBox2);
    toggleItem(selectedId);
    setSelection(unitName, variantData, selectedId, 2);
    loadUnitComparison(unitName, variantData, 2);
  } else {
    lastSelected = 1;
    toggleItem(selectedBox1);
    toggleItem(selectedId);
    setSelection(unitName, variantData, selectedId, 1);
    loadUnitComparison(unitName, variantData, 1);
  }
}

function setSelection(unitName, variantData, selectedId, selectionLocation) {
  if (selectionLocation == 1) {
    selectedUnit1 = unitName;
    selectedUnit1Data = variantData;
    selectedBox1 = selectedId;
  } else if (selectionLocation == 2) {
    selectedUnit2 = unitName;
    selectedUnit2Data = variantData;
    selectedBox2 = selectedId;
  }

  saveSelectionState();
}

/**
 * @param {string} elementId - The ID of the element to toggle
 */
function toggleDropdown(elementId) {
  const dropdownElm = document.getElementById(elementId);

  if (dropdownElm.classList.contains("open")) {
    dropdownElm.classList.remove("open");
  } else {
    dropdownElm.classList.add("open");
  }
}

/**
 * @param {string} elementId - The ID of the item to toggle selection
 */
function toggleItem(elementId) {
  const dropdownElm = document.getElementById(elementId);

  if (!dropdownElm) {
    return;
  }

  if (dropdownElm.classList.contains("selected")) {
    dropdownElm.classList.remove("selected");
  } else {
    dropdownElm.classList.add("selected");
  }
}

// Sort unitDpsData based on filters
function sortDpsData() {
  let filteredList = Object.entries(unitDpsData)

  const searchFilter = searchIndex.value
  const sortType = typeIndex.value
  const sortOrder = orderIndex.value

  if (searchFilter) {
    filteredList = filteredList.filter(([unitName, variants]) => { return unitName.toLowerCase().includes(searchFilter) });
  }

  filteredList.sort((a, b) => {
    let valA, valB;

    const nameA = a[0]
    const nameB = b[0]

    const variantsA = a[1]
    const variantsB = b[1]

    const unitTagsA = unitTagData[nameA]
    const unitTagsB = unitTagData[nameB]

    const unitStatsA = unitStats[nameA]
    const unitStatsB = unitStats[nameB]

    switch (sortType) {
      case "name":
        valA = nameA.toLowerCase();
        valB = nameB.toLowerCase();
        break;
      case "rarity":
        valA = rarityOrder.indexOf((unitTagsA.rarities[0] || "").toLowerCase());
        valB = rarityOrder.indexOf((unitTagsB.rarities[0] || "").toLowerCase());
        break;
      case "element":
        valA = a?.elements?.[0]?.toLowerCase() ?? "";
        valB = b?.elements?.[0]?.toLowerCase() ?? "";
        break;
      case "cost":
        valA = unitStatsA.maxCost ?? "";
        valB = unitStatsB.maxCost ?? "";
      case "familiar":
        valA = variantsA[0].familiar ?? "";
        valB = variantsB[0].familiar ?? "";
      case "range":
        valA = getMaxRange(variantsA) ?? "";
        valB = getMaxRange(variantsB) ?? "";
        break;
      case "dps":
        valA = getMaxDps(variantsA) ?? "";
        valB = getMaxDps(variantsB) ?? "";
        break;
    }

    function getMaxRange(variants) {
      const rngValues = variants.map(v => v.rng);
      const maxRng = Math.max(...rngValues);

      return maxRng
    }

    function getMaxDps(variants) {
      const dpsValues = variants.map(v => v.dps);
      const maxDps = Math.max(...dpsValues);

      return maxDps
    }

    const ascending = sortOrder.toLowerCase() === "ascending";

    if (valA < valB) return ascending ? -1 : 1;
    if (valA > valB) return ascending ? 1 : -1;
    return 0;
  });

  return filteredList
}

/**
 * Renders all units from unitDpsData into the comparison catalog
 */
function renderComparisonCatalog() {
  const catalogContainer = document.getElementById('comparison-catalog-container');
  if (!catalogContainer) return;

  // Clear existing content
  catalogContainer.innerHTML = '';

  const sortedData = Object.fromEntries(sortDpsData(unitDpsData))

  // Iterate through all units in unitDpsData
  for (const [unitName, variants] of Object.entries(sortedData)) {
    const catalogItem = createComparisonCatalogItem(unitName, variants);
    if (catalogItem) {
      catalogContainer.appendChild(catalogItem);
    }
  }
}

// Function to restore saved selections from localStorage
function restoreSavedSelections() {
  // Load unit 1 if it exists
  if (selectedUnit1 && selectedUnit1Data) {
    loadUnitComparison(selectedUnit1, selectedUnit1Data, 1);
  }

  // Load unit 2 if it exists
  if (selectedUnit2 && selectedUnit2Data) {
    loadUnitComparison(selectedUnit2, selectedUnit2Data, 2);
  }
}

// Render catalog when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    renderComparisonCatalog();
    // Small delay to ensure catalog is rendered before restoring
    setTimeout(restoreSavedSelections, 100);
  });
} else {
  renderComparisonCatalog();
  setTimeout(restoreSavedSelections, 100);
}

searchIndex.addEventListener("input", renderComparisonCatalog)
typeIndex.addEventListener("input", renderComparisonCatalog)
orderIndex.addEventListener("input", renderComparisonCatalog)