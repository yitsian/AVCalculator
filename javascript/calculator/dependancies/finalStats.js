let attacksMetaMap = {}

let finalStats = {
  damage: 0,
  spa: 0,
  range: 0,
  crit: 0,
  critDmg: 0,
}

const finalDamageValue = document.getElementById("unit-final-damage-value");
const finalDamageBuff = document.getElementById("unit-final-damage-buff");

const finalSpaValue = document.getElementById("unit-final-spa-value");
const finalSpaBuff = document.getElementById("unit-final-spa-buff");

const finalRangeValue = document.getElementById("unit-final-range-value");
const finalRangeBuff = document.getElementById("unit-final-range-buff");

const finalCritValue = document.getElementById("unit-final-crit-value");
const finalCritBuff = document.getElementById("unit-final-crit-buff");

const finalCritDmgValue = document.getElementById("unit-final-critdmg-value");
const finalCritDmgBuff = document.getElementById("unit-final-critdmg-buff");

const finalCritAvgValue = document.getElementById("unit-final-critavg-value");
const finalCritAvgBuff = document.getElementById("unit-final-critavg-buff");

let critAvg = 1

function checkExtraConditions() {
  for (passiveIndex in unitPassives[selectedUnit]) {
    for (conditionIndex in unitPassives[selectedUnit][passiveIndex].conditions) {
      const condition = unitPassives[selectedUnit][passiveIndex].conditions[conditionIndex]

      if (condition.extra && (condition.active || condition.type == "None")) {
        condition.extra(finalStats, condition.value)
      }
    }
  }
}

function updateFinalStats() {
  for (const key in finalStats) {
    switch (key) {
      case "spa":
        finalStats[key] = baseStats[key] * (1 - (statAddBuffs[key]))
        break;
      case "crit":
        finalStats[key] = Math.max(baseStats[key] + statAddBuffs[key] * 100, 0)
        break;
      case "critDmg":
        finalStats[key] = baseStats[key] + statAddBuffs[key] * 100
        break;
      default:
        finalStats[key] = baseStats[key] * (1 + (statAddBuffs[key]))
    }
  }

  checkExtraConditions()

  finalDamageValue.textContent = formatDamage(finalStats.damage);
  finalDamageBuff.textContent = formatBuff(statAddBuffs.damage);

  finalSpaValue.textContent = formatSpa(finalStats.spa)
  finalSpaBuff.textContent = formatBuff(statAddBuffs.spa);

  finalRangeValue.textContent = formatRange(finalStats.range)
  finalRangeBuff.textContent = formatBuff(statAddBuffs.range);

  finalCritValue.textContent = formatCrit(finalStats.crit)
  finalCritBuff.textContent = formatBuff(statAddBuffs.crit);

  finalCritDmgValue.textContent = formatCrit(finalStats.critDmg)
  finalCritDmgBuff.textContent = formatBuff(statAddBuffs.critDmg);

  critAvg = 1 + (Math.min((finalStats.crit / 100), 1) * ((finalStats.critDmg / 100) - 1));
  finalCritAvgValue.textContent = critAvg.toFixed(2) + "x";
  finalCritAvgBuff.textContent = formatBuff(0);
}

function updateAttacks() {
  updateFinalStats()

  for (attackID in attacksMetaMap) {
    const attack = attacksMetaMap[attackID]

    const statLabels = attack.statLabels
    const damageLabels = attack.damageLabels

    if (attack.type == "Meter") {
      let meterPerAttack = unitStats[selectedUnit].meter * otherStats.meter

      statLabels.meterPerAttack[0].textContent = formatMeter(meterPerAttack)
      statLabels.meterPerAttack[1].textContent = formatBuff(otherStats.meter - 1)

      statLabels.meterToFill[0].textContent = Math.ceil(100 / meterPerAttack.toFixed(0))
      statLabels.meterToFill[1].textContent = formatBuff(0)

      damageLabels.TTF.textContent = formatSpa(Math.ceil(100 / meterPerAttack.toFixed(0)) * finalStats.spa)
    } else {
      let attackMultiplier = 1;

      if (typeof attack.multiplier == "function") {
        attackMultiplier = attack.multiplier(finalStats, conditionMetaMap)
      } else {
        attackMultiplier = attack.multiplier
      }

      const matchBurn = str => /\bburn\b/.test(str.toLowerCase())
      const matchBleed = str => /\bbleed\b/.test(str.toLowerCase())

      const dotMult = (matchBleed(attackID) ? otherStats.bleed : 1) * (matchBurn(attackID) ? otherStats.burn : 1)

      attackMultiplier *= (attack.type == "Summon" ? otherStats.summon : 1) * dotMult

      const normalAttackDamage = finalStats.damage * attackMultiplier
      statLabels.normal[0].textContent = formatDamage(normalAttackDamage)
      statLabels.normal[1].textContent = formatBuff(attackMultiplier)

      if (attack.type == "Dot") {
        const tickAttackDamage = normalAttackDamage / attack.hits

        statLabels.tick[0].textContent = formatDamage(tickAttackDamage)
        statLabels.tick[1].textContent = formatBuff(attackMultiplier / attack.hits)

        damageLabels.average.textContent = formatDps(normalAttackDamage * critAvg / finalStats.spa)
        damageLabels.team.textContent = formatDps(normalAttackDamage * critAvg * (trait == "Monarch" ? 1 : unitStats[selectedUnit].placementCount) / finalStats.spa)
      } else if (attack.type == "Conditional-Dot") {
        const tickAttackDamage = normalAttackDamage / attack.hits

        statLabels.tick[0].textContent = formatDamage(tickAttackDamage)
        statLabels.tick[1].textContent = formatBuff(attackMultiplier / attack.hits)

        damageLabels.average.textContent = formatNuke(normalAttackDamage * critAvg)
      } else {
        const critAttackDamage = normalAttackDamage * finalStats.critDmg / 100

        statLabels.crit[0].textContent = formatDamage(critAttackDamage)
        statLabels.crit[1].textContent = formatBuff(attackMultiplier * finalStats.critDmg / 100)

        if (attack.type == "Spa-Interval" || attack.type == "Spa-Followup") {
          damageLabels.average.textContent = formatDps(normalAttackDamage * critAvg / finalStats.spa)
          damageLabels.team.textContent = formatDps(normalAttackDamage * critAvg * (trait == "Monarch" ? 1 : unitStats[selectedUnit].placementCount) / finalStats.spa)
        } else if (attack.type == "Nuke" || attack.type == "Condition-Followup") {
          damageLabels.average.textContent = formatNuke(normalAttackDamage * critAvg)
        } else if (attack.type == "Summon") {
          damageLabels.average.textContent = formatNuke(normalAttackDamage * critAvg)
        }
      }
    }
  }
}

baseStats = new Proxy(baseStats, {
  set(target, prop, value) {
    if (target[prop] !== value) {
      target[prop] = value;

      updateAttacks();
    }
    return true;
  }
});

statAddBuffs = new Proxy(statAddBuffs, {
  set(target, prop, value) {
    if (target[prop] !== value) {
      target[prop] = value;

      updateAttacks();
    }
    return true;
  }
});

otherStats = new Proxy(otherStats, {
  set(target, prop, value) {
    if (target[prop] !== value) {
      target[prop] = value;

      updateAttacks();
    }
    return true;
  }
});