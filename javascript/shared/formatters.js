function formatDamage(value) {
  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(1) + "B";
  } else if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1) + "M";
  } else if (value >= 1_000) {
    return (value / 1_000).toFixed(1) + "k";
  } else {
    return (value).toFixed(0).toString();
  }
}

function formatSpa(value) {
  return value.toFixed(1) + "s"
}

function formatRange(value) {
  return value.toFixed(1)
}

function formatCrit(value) {
  return value.toFixed(0) + "%"
}

function formatMeter(value) {
  return Math.ceil(value) + "%"
}

function formatBuff(value) {
  return (value * 100).toFixed(1) + "%"
}

function formatMultBuff(value) {
  return (value).toFixed(2) + "x"
}

function formatDps(value) {
  return Number(value.toFixed(0)).toLocaleString() + "/s"
}

function formatNuke(value) {
  return Number(value.toFixed(0)).toLocaleString()
}

function getTraitBonus(trait) {
  switch (trait) {
    case "Monarch":
      return [3, 0.1, 0.05, 0, 0]
    case "Ethereal":
      return [0.2, 0.2, 0.05, 0, 0]
    case "Deadeye":
      return [0, 0, 0, 0.45, 0.5]
    case "Solar":
      return [0.1, 0.05, 0.25, 0, 0]
    case "Blitz":
      return [0, 0.2, 0, 0, 0]
    case "Marksman":
      return [0, 0, 0.3, 0, 0]
    case "None":
      return [0, 0, 0, 0, 0]
  }
}

function formatKeyWords(text) {
  return text
    .replace(/\bmana\b/gi, `<span class="text-gradient vsjw">mana</span>`)
    .replace(/\bmeter\b/gi, `<span class="text-gradient vsjw">meter</span>`)
    .replace(/\bsummons?\b/gi, (match) => `<span class="text-gradient vsjw">${capitalizeFirstLetter(match)}</span>`)

    .replace(/\bdmg\b/gi, () => `<span class="damage">Dmg</span>`)
    .replace(/\bspa\b/gi, () => `<span class="spa">Spa</span>`)
    .replace(/\brng\b/gi, () => `<span class="range">Rng</span>`)

    .replace(/\bcritdmg\b/gi, () => `<span class="critdmg">Crit Damage</span>`)
    .replace(/\bcrit\s+damage\b/gi, () => `<span class="critDmg">Crit Damage</span>`)
    .replace(/\bcrit(?!\s*damage|\s*dmg)(?:\s+rate)?\b/gi, () => `<span class="crit">Crit</span>`)

    .replace(/\bhealth\b/gi, (match) => `<span class="buff">${capitalizeFirstLetter(match)}</span>`)
    .replace(/\bevery\b/gi, (match) => `<span class="spa">${capitalizeFirstLetter(match)}</span>`)
}

function formatPassiveDescription(text) {
  return formatKeyWords(text)
    .replace(/([+-]?\d+(\.\d+)?%|[+-]\/[+-]?\d+(\.\d+)?%)/g, `<span class="buff">$1</span>`)
    .replace(/([+-]?\d+(\.\d+)?s)/g, `<span class="spa">$1</span>`)
    .replace(/(\d+(?:\.\d+)?x)/g, `<span class="buff">$1</span>`);
}

function formatFlavorText(text) {
  // Define keywords with their corresponding image and color class
  const flavorKeywords = {
    'bleed': { image: 'Bleed.webp', class: 'bleed' },
    'bleeding': { image: 'Bleed.webp', class: 'bleed' },
    'burn': { image: 'Burn.webp', class: 'fire' },
    'burning': { image: 'Burn.webp', class: 'fire' },
    'burned': { image: 'Burn.webp', class: 'fire' },
    'freeze': { image: 'Freeze.webp', class: 'freeze' },
    'frozen': { image: 'Freeze.webp', class: 'freeze' },
    'freezing': { image: 'Freeze.webp', class: 'freeze' },
    'repulse': { image: 'Repulse.webp', class: 'nature' },
    'repulsed': { image: 'Repulse.webp', class: 'nature' },
    'rupture': { image: 'Rupture.webp', class: 'debuff' },
    'ruptured': { image: 'Rupture.webp', class: 'debuff' },
    'slow': { image: 'Slow.webp', class: 'slow' },
    'slowed': { image: 'Slow.webp', class: 'slow' },
    'stun': { image: 'Stun.webp', class: 'spark' },
    'stuns': { image: 'Stun.webp', class: 'spark' },
    'stunned': { image: 'Stun.webp', class: 'spark' },
    'timestop': { image: 'Timestop.webp', class: 'time-stop' },
    'time stops': { image: 'Timestop.webp', class: 'time-stop' },
    'wound': { image: 'Wounded.webp', class: 'damage' },
    'wounded': { image: 'Wounded.webp', class: 'damage' },
    'wounding': { image: 'Wounded.webp', class: 'damage' },
    'calamity 1': { image: 'calamity.webp', class: 'buff' },
    'calamity 2': { image: 'calamity.webp', class: 'range' },
    'calamity 3': { image: 'calamity.webp', class: 'unbound' },

    'support': { image: 'utility.webp', class: 'text-gradient legendary' },
    'nullify': { image: 'Nullify.webp', class: 'text-gradient epic' },
    'nullified': { image: 'Nullify.webp', class: 'text-gradient epic' },
    'bubbled': { image: 'Bubbled.webp', class: 'text-gradient rare' },
    'cleave': { image: 'Cleave.webp', class: 'text-gradient sukono' },
    'cleaved': { image: 'Cleave.webp', class: 'text-gradient sukono' },
  };

  let formattedText = text;

  // Replace each keyword with styled HTML including image
  for (const [keyword, data] of Object.entries(flavorKeywords)) {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    formattedText = formattedText.replace(regex, (match) => {
      return `<span class="${data.class} flavor-text-keyword"><img src="Images/FlavorText/${data.image}" class="flavor-icon"">${capitalizeFirstLetter(match)}</span>`;
    });
  }

  // Apply existing number formatting
  formattedText = formattedText
    .replace(/([+-]?\d+(\.\d+)?%|[+-]\/[+-]?\d+(\.\d+)?%)/g, `<span class="buff">$1</span>`)
    .replace(/([+-]?\d+(\.\d+)?s)/g, `<span class="spa">$1</span>`)
    .replace(/(\d+(?:\.\d+)?x)/g, `<span class="buff">$1</span>`);

  return formattedText;
}

function statToBuffVector(stat) {
  switch (stat) {
    case "damage":
      return [1, 0, 0, 0, 0, 0]
    case "range":
      return [0, 0, 1, 0, 0, 0]
    case "crit":
      return [0, 0, 0, 1, 0, 0]
    case "critDmg":
      return [0, 0, 0, 0, 1, 0]
    default: 
      return [0, 0, 0, 0, 0, 0]
  }
}

function statToOtherBuffVector(stat) {
  switch (stat) {
    case "summon":
      return [1, 0, 0, 0]
    case "burn":
      return [0, 1, 0, 0]
    case "bleed":
      return [0, 0, 1, 0]
    case "dot":
      return [0, 1, 1, 0]
    case "meter":
      return [0, 0, 0, 1]
  }
}

function statToBuffVectorIndex(stat) {
  switch (stat) {
    case "damage":
      return 0
    case "spa":
      return 1
    case "range":
      return 2
    case "crit":
      return 3
    case "critDmg":
      return 4
    default:
      return -1
  }
}

function getAttackType(attackString) {
  if (!attackString) return null;

  // Handle cone attacks with degrees
  const coneMatch = attackString.match(/^(\d+)[°]/);
  if (coneMatch) {
    const angle = parseInt(coneMatch[1], 10);
    return angle < 90 ? "ACone" : "OCone";
  }

  // Handle "8 Circle" or "8 Line"
  const shapeMatch = attackString.match(/^\d+\s*(Circle|Line)/i);
  if (shapeMatch) {
    return shapeMatch[1].charAt(0).toUpperCase() + shapeMatch[1].slice(1).toLowerCase();
  }

  // Handle Splash
  const splashMatch = attackString.match("Splash")
  if (splashMatch) {
    return "Splash"
  }

  // Handle Handle Dogshit Aoe
  const StadiumMatch = attackString.match("Stadium")
  if (StadiumMatch) {
    return "Stadium"
  }

  // If format doesn't match known patterns, return as-is
  return attackString;
}

function capitalizeFirstLetter(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return ""; // Handle empty strings or non-string inputs
  }
  return str[0].toUpperCase() + str.slice(1);
}