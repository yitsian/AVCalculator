let baseStats = {
  damage: 0,
  spa: 0,
  range: 0,
  crit: 0,
  critDmg: 0,
}

let statMultBuffs = {
  damage: 1,
  spa: 1,
  range: 1,
  crit: 1,
  critDmg: 1,
}

let statAddBuffs = {
  damage: 0,
  spa: 0,
  range: 0,
  crit: 0,
  critDmg: 0,
}

let otherStats = {
  summon: 0,
  burn: 0,
  bleed: 0,
  meter: 0
}

const baseDamage = document.getElementById("unit-base-damage")
const baseSpa = document.getElementById("unit-base-spa")
const baseRange = document.getElementById("unit-base-range")
const baseCrit = document.getElementById("unit-base-crit")
const baseCritDmg = document.getElementById("unit-base-crit-dmg")

function updateBaseStats() {
  const [traitDamage, traitSpa, traitRange, traitCrit, traitCritDmg] = getTraitBonus(trait)

  const levelMultiplier = 1.0235 ** (levelSlider.value - 1)
  const damageStatMultiplier = 1 + damageInput.value / 100
  const ascensionsDamageMultiplier = 1 + (((ascensions >= 1) ? 0.03 : 0) + ((ascensions >= 3) ? 0.07 : 0))
  const damage = unitStats[selectedUnit].damage

  baseStats.damage = damage * levelMultiplier * damageStatMultiplier * ascensionsDamageMultiplier * (traitDamage + 1) * statMultBuffs.damage

  const spa = unitStats[selectedUnit].spa
  const spaStatMultiplier = 1 - spaInput.value / 100

  baseStats.spa = spa * spaStatMultiplier * (1 - traitSpa) * statMultBuffs.spa

  const range = unitStats[selectedUnit].range
  const ascensionsRangeMultiplier = 1 + ((ascensions >= 2) ? 0.05 : 0)
  const rangeStatMultiplier = 1 + rangeInput.value / 100

  baseStats.range = range * rangeStatMultiplier * ascensionsRangeMultiplier * (traitRange + 1) * statMultBuffs.range

  const crit = 0

  baseStats.crit = (crit + traitCrit * 100) + ((statMultBuffs.crit - 1) * 100)

  const critDmg = 125

  baseStats.critDmg = (critDmg + traitCritDmg * 100) + ((statMultBuffs.critDmg - 1) * 100)

  baseDamage.innerHTML = statMultBuffs.damage != 1 ? createToolTip(formatDamage(baseStats.damage), formatMultBuff(statMultBuffs.damage)) : formatDamage(baseStats.damage)
  baseSpa.innerHTML = statMultBuffs.spa != 1 ? createToolTip(formatSpa(baseStats.spa), formatMultBuff(statMultBuffs.spa)) : formatSpa(baseStats.spa)
  baseRange.innerHTML = statMultBuffs.range != 1 ? createToolTip(formatRange(baseStats.range), formatMultBuff(statMultBuffs.range)) : formatRange(baseStats.range)
  baseCrit.innerHTML = formatCrit(baseStats.crit)
  baseCritDmg.innerHTML = formatCrit(baseStats.critDmg)

  loadTooltips()
}