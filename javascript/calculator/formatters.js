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

function formatBuff(value) {
  return (value * 100).toFixed(1) + "%"
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
    .replace(/\bmana\b/gi, `<span class="curse">mana</span>`)
    .replace(/\bmeter\b/gi, `<span class="curse">meter</span>`)
    .replace(/\bsummon\b/gi, `<span class="curse">summon</span>`)
    .replace(/\bdmg\b/gi, match => `<span class="damage">${match}</span>`)
    .replace(/\bspa\b/gi, match => `<span class="spa">${match}</span>`)
    .replace(/\brng\b/gi, match => `<span class="range">${match}</span>`)
    .replace(/\bcrit\b/gi, match => `<span class="crit">${match}</span>`)
    .replace(/\bcritdmg\b/gi, match => `<span class="critDmg">${match}</span>`)
    .replace(/\bhealth\b/gi, match => `<span class="buff">${match}</span>`)
    .replace(/\bevery\b/gi, match => `<span class="spa">${match}</span>`)
}

function formatPassiveDescription(text) {
  return formatKeyWords(text)
    .replace(/([+-]?\d+(\.\d+)?%|[+-]\/[+-]?\d+(\.\d+)?%)/g, `<span class="buff">$1</span>`)
    .replace(/([+-]?\d+(\.\d+)?s)/g, `<span class="spa">$1</span>`)
    .replace(/(\d+(?:\.\d+)?x)/g, `<span class="buff">$1</span>`);
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

  // If format doesn't match known patterns, return as-is
  return attackString;
}