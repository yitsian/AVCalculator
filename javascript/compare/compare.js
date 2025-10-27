/**
 * Loads and displays unit comparison data
 * @param {string} unitName - The name of the unit to compare
 * @param {object} variantData - The specific variant's data from unitDpsData
 * @param {number} selectionNumber - Which comparison slot (1 or 2)
 */
function loadUnitComparison(unitName, variantData, selectionNumber) {
  const container = document.querySelector(`#comparison-selection-${selectionNumber}`);

  // Clear existing content
  container.innerHTML = '';

  // Get unit tag data for additional info
  const unitTags = unitTagData[unitName] || {};
  const unitGradientClass = unitTags.rarities?.[1] || unitTags.rarities?.[0] || unitName.toLowerCase();
  const element = unitTags.elements?.[0] || '';

  // Create unit top section
  const unitTop = createElement('div', 'comparison-unit-top', container);

  // Create unit button
  const unitButton = createElement('button', 'unit-button', unitTop);
  const unitGradient = createElement('div', `unit-gradient ${unitGradientClass.toLowerCase()}`, unitButton);
  const gradientTexture = createElement('img', 'unit-gradient-texture', unitGradient);
  gradientTexture.src = 'Images/Icons/Dots.webp';

  const unitContent = createElement('div', 'unit-content', unitGradient);
  const unitPicture = createElement('img', 'unit-picture', unitContent);
  unitPicture.src = `Images/Units/${unitName}.webp`;

  // Create unit description section
  const unitDescription = createElement('div', 'comparison-unit-description', unitTop);

  // Unit name
  const unitNameDiv = createElement('div', `comparison-unit-name general-text text-gradient ${unitGradientClass.toLowerCase()}`, unitDescription);
  unitNameDiv.textContent = unitName.replace(/([A-Z])/g, ' $1').trim(); // Add spaces between camelCase

  // Tags section
  const tagsStructure = createElement('div', 'tab-structure align-left', unitDescription);

  // Trait tag
  const traitTag = createElement('div', 'round-form tags image-tag general-text', tagsStructure);
  const traitImg = createElement('img', 'element', traitTag);
  traitImg.src = `Images/Traits/${variantData.trait}.webp`;
  const traitText = createElement('span', 'text-gradient mythic', traitTag);
  traitText.textContent = variantData.trait;

  // Familiar/Ability tag
  if (variantData.familiar) {
    const familiarTag = createElement('div', 'round-form tags image-tag general-text', tagsStructure);
    const familiarImg = createElement('img', 'element', familiarTag);
    familiarImg.src = FamiliarDescriptions[variantData.familiar].image;
    const familiarText = createElement('span', `text-gradient ${FamiliarDescriptions[variantData.familiar].rarity}`, familiarTag);
    // Get familiar ability name (you may need to add a mapping for this)
    familiarText.textContent = variantData.familiar;
  }

  // Element tag
  if (element) {
    const elementTag = createElement('div', `round-form tags image-tag general-text ${element.toLowerCase()}`, tagsStructure);
    const elementImg = createElement('img', 'element', elementTag);
    elementImg.src = `Images/Elements/${element}.webp`;
    elementTag.appendChild(document.createTextNode(element));
  }

  // DPS tag
  const dpsTag = createElement('div', 'round-form tags image-tag general-text', tagsStructure);
  const dpsImg = createElement('img', 'element', dpsTag);
  dpsImg.src = 'Images/Icons/Dps_icon.webp';
  const dpsText = createElement('span', 'critDmg', dpsTag);
  dpsText.textContent = `${variantData.dps}k`;

  // Range tag
  const rangeTag = createElement('div', 'round-form tags image-tag general-text', tagsStructure);
  const rangeImg = createElement('img', 'element', rangeTag);
  rangeImg.src = 'Images/Icons/Rng_icon.webp';
  const rangeText = createElement('span', 'range', rangeTag);
  rangeText.textContent = variantData.rng.toString();

  // Details divider
  createDivider(container, 'epic', 'Details');

  // Modifier section
  createDetailRow(
    container,
    'Images/Icons/AscensionLogo.webp',
    'Modifier:',
    variantData.modifier,
    'legendary',
    'passive',
    true
  );

  // Calculate costs
  const costToFinal = variantData.cost;
  const costToMax = unitStats[unitName].maxCost;
  const efficiency = (variantData.dps / costToMax * 1000).toFixed(2);

  // Cost to final attack
  createDetailRow(
    container,
    'Images/Aoes/OCone.png',
    'Cost To Final Attack:',
    `${costToFinal} ¥`,
    '',
    'money'
  );

  // Cost to max
  createDetailRow(
    container,
    'Images/Aoes/Full.png',
    'Cost To Max:',
    `${costToMax} ¥`,
    '',
    'money'
  );

  // Cost efficiency
  createDetailRow(
    container,
    'Images/Icons/Utility.webp',
    'Cost efficiency:',
    `${efficiency}/¥`,
    'range',
    'money'
  );

  // Attacks breakdown divider
  createDivider(container, 'rare', 'Attacks Breakdown');

  // Create attack sections
  if (variantData.attacks && variantData.attacks.length > 0) {
    variantData.attacks.forEach((attack, index) => {
      createAttackSection(container, attack, variantData);
    });
  }
}

/**
 * Creates a divider line with text
 */
function createDivider(parent, rarity, text) {
  const divider = createElement('div', 'line-divided-text general-text', parent);
  createElement('div', `text-divider-line ${rarity}`, divider);
  const dividerText = createElement('div', `text-gradient ${rarity}`, divider);
  dividerText.textContent = text;
  createElement('div', `text-divider-line ${rarity}`, divider);
}

/**
 * Creates a detail row with icon, label, and value
 */
function createDetailRow(parent, iconSrc, label, value, labelClass, valueClass, gradient) {
  const row = createElement('div', 'tab-structure', parent);

  const labelContainer = createElement('div', `round-form tags image-tag general-text`, row);
  const icon = createElement('img', 'element', labelContainer);
  icon.src = iconSrc;
  const labelSpan = createElement('span', labelClass ? (gradient ? `text-gradient ` : ``) + `${labelClass}` : '', labelContainer);
  labelSpan.textContent = label;

  const valueContainer = createElement('div', 'round-form tags general-text', row);
  const valueSpan = createElement('span', valueClass ? `text-gradient ${valueClass}` : '', valueContainer);
  valueSpan.textContent = value;
}

/**
 * Creates an attack breakdown section
 */
function createAttackSection(parent, attack, variantData) {
  const attackSection = createElement('div', 'comparison-attack-section', parent);

  const attackDescription = createElement('div', 'comparison-attack-description', attackSection);

  // Attack name
  const attackName = createElement('div', 'comparison-attack-name general-text text-gradient passive', attackDescription);
  attackName.textContent = attack.name;

  // Attack tags
  const attackTags = createElement('div', 'tab-structure align-left', attackDescription);

  // AOE tag
  const aoeTag = createElement('div', 'round-form tags image-tag general-text', attackTags);
  const aoeImg = createElement('img', 'element', aoeTag);
  aoeImg.src = `Images/Aoes/${attack.aoeType}.png`;
  const aoeLabel = getAoeLabel(attack.aoeType, attack.size);
  aoeTag.appendChild(document.createTextNode(aoeLabel));

  // Hits tag
  const hitsTag = createElement('div', 'round-form tags general-text', attackTags);
  hitsTag.textContent = `${attack.hits} Hits`;

  // DPS tag for this attack
  const attackDps = Math.round(variantData.dps * attack.percent / 100);
  const attackDpsTag = createElement('div', 'round-form tags image-tag general-text', attackTags);
  const attackDpsImg = createElement('img', 'element', attackDpsTag);
  attackDpsImg.src = 'Images/Icons/Dps_icon.webp';
  const attackDpsText = createElement('span', 'critDmg', attackDpsTag);
  attackDpsText.textContent = `${attackDps}k`;

  // DPS percentage
  const dpsPercent = createElement('div', 'general-text font-size-20', attackDescription);
  const percentSpan = createElement('span', 'buff', dpsPercent);
  percentSpan.textContent = `${attack.percent}%`;
  dpsPercent.appendChild(document.createTextNode(' of '));
  const dpsLabel = createElement('span', 'critDmg', dpsPercent);
  dpsLabel.textContent = 'Dps';

  // Area calculation
  const area = calculateArea(attack.aoeType, attack.size, variantData.rng);
  if (area !== null) {
    const areaDiv = createElement('div', 'general-text font-size-20', attackDescription);
    const areaSpan = createElement('span', 'buff', areaDiv);
    areaSpan.textContent = area.toFixed(1);
    areaDiv.appendChild(document.createTextNode(' units² area'));
  }

  // Create 3D AOE visualization (only if the function is loaded)
  let screenWidth;

  if (window.outerWidth > 1440) {
    screenWidth = 300
  } else {
    screenWidth = Math.max(window.outerHeight / 2, window.outerWidth / 4)
  }

  threeCreateAoeView(attackSection, screenWidth, attack.aoeType, variantData.rng, attack.size);
}

/**
 * Get AOE label text
 */
function getAoeLabel(aoeType, size) {
  if (aoeType === 'Cone' || aoeType === 'OCone' || aoeType === 'ACone') {
    return `${size}° Cone`;
  } else if (aoeType === 'Circle' || aoeType === 'Line' || aoeType === 'Stadium') {
    return `${size} ${aoeType}`
  } else if (aoeType === 'Splash') {
    return `${size[0]} ${size[1]}° ${aoeType}`
  }
  return aoeType;
}

/**
 * Calculate area based on AOE type
 */
function calculateArea(aoeType, size, range) {
  switch (aoeType) {
    case 'Full':
      return Math.PI * range * range;
    case 'Cone':
    case 'OCone':
    case 'ACone':
      const angleInRadians = size * Math.PI / 180;
      return 0.5 * range * range * angleInRadians;
    case 'Circle':
      return Math.PI * size * size;
    case 'Line':
      return size * range;
    case 'Stadium':
      return (Math.PI * size + range) * size;
    default:
      return null;
  }
}

// // Wait for the page and modules to load before calling loadUnitComparison
// window.addEventListener('DOMContentLoaded', () => {
//   // Small timeout to ensure module is fully loaded
//   setTimeout(() => {
//     loadUnitComparison("BrolziSuper", unitDpsData["BrolziSuper"][0], 1);
//     loadUnitComparison("Dawntay", unitDpsData["Dawntay"][3], 2);
//   }, 100);
// });