const attacksContainer = document.getElementById("attacks-container")

function createFinalStatLabel(label, iconPath, color) {
  const finalStat = document.createElement("div");
  finalStat.className = "final-stat";

  const statIcon = createElement("div", `general-text stat-label font-size-20` + " " + color, finalStat);
  statIcon.innerHTML = `<img class="element" src="${iconPath}">${label}`;

  const valueWrapper = createElement("div", "general-text font-size-20 final-stat-number", finalStat);

  const buffDiv = createElement("div", "general-text font-size-20 buff final-stat-buff round-form tags", valueWrapper);

  const statDiv = createElement("div", "general-text", valueWrapper);

  return [finalStat, statDiv, buffDiv];
}

function createTextStat(label) {
  const container = document.createElement("div");
  container.className = "final-stat";

  const labelDiv = createElement("div", "general-text stat-label font-size-20", container);
  labelDiv.textContent = label;

  const valueDiv = createElement("div", "general-text font-size-20", container);

  return [container, valueDiv];
}

function createAttack(attack = {}) {
  const attackLayout = createElement("div", "attack-layout", attacksContainer);

  // === Top Section ===
  const attackTop = createElement("div", "attack-top", attackLayout);

  const attackImage = createElement("div", "unit-button attack-image", attackTop);
  const gradient = createElement("div", `unit-gradient ${attack.gradient || "epic"}`, attackImage);

  const texture = createElement("img", "unit-gradient-texture", gradient);
  texture.src = "Images/Icons/Dots.webp";

  const content = createElement("div", "unit-content", gradient);

  const pic = createElement("img", "unit-picture", content);
  pic.src = attack.image || "Images/Abilities/Attack_icon.webp";

  // --- Description Block ---
  const description = createElement("div", "attack-description", attackTop);

  const tabStructure = createElement("div", "tab-structure", description);

  const name = createElement("div", "passive-name general-text text-gradient passive", tabStructure);
  name.textContent = attack.name || "Basic Attack";

  const aoeInfo = createElement("div", "aoe-info", tabStructure);

  const aoeTag = createElement("div", "round-form tags image-tag general-text", aoeInfo);
  const aoeImage = attack.aoe ? getAttackType(attack.aoe) : unitTagData[selectedUnit].aoes[0];

  const aoeIcon = `<img class="element" src="Images/Aoes/${aoeImage}.png">`;
  const aoeLabel = attack.aoe || unitStats[selectedUnit].aoe;
  aoeTag.innerHTML = `${aoeIcon}${aoeLabel}`;

  const hitsTag = createElement("div", "general-text round-form tags", aoeInfo);
  hitsTag.textContent = `${attack.hits || unitStats[selectedUnit].hits} Hits`;

  const desc = createElement("div", "passive-description general-text font-size-20", description);
  desc.innerHTML = formatPassiveDescription(
    attack.description || "Deals 100% of this unit's Dmg in intervals of this unit's Spa"
  );

  // === Stat Breakdown ===
  const statBreakdown = createElement("div", "stat-breakdown", attackLayout);

  const [normalHit, normalHitDamageTag, normalHitPercentageTag] = createFinalStatLabel("Damage", "Images/Icons/Dmg_Icon.webp", "damage")

  statBreakdown.appendChild(normalHit);

  let critHitDamageTag, critHitPercentageTag
  let tickHitDamageTag, tickHitPercentageTag

  if (attack.type == "Dot" || attack.type == "Conditional-Dot") {
    const [tickHit, tickHitDamage, tickHitPercentage] = createFinalStatLabel("Damage per tick", "Images/Icons/Dot_Icon.webp", "debuff")

    tickHitDamageTag = tickHitDamage
    tickHitPercentageTag = tickHitPercentage

    statBreakdown.appendChild(tickHit);
  } else {
    const [critHit, critHitDamage, critHitPercentage] = createFinalStatLabel("Critical Hit", "Images/Icons/Crit_Dmg_Icon.png", "critDmg")

    critHitDamageTag = critHitDamage
    critHitPercentageTag = critHitPercentage

    statBreakdown.appendChild(critHit);
  }

  attackLayout.appendChild(statBreakdown);

  // === DPS Sections ===

  let avgDps, avgDpsLabel, teamDps, teamDpsLabel;

  switch (attack.type) {
    case "Nuke":
    case "Condition-Followup":
    case "Summon":
      [avgDps, avgDpsLabel] = createTextStat("Average Damage");
      attackLayout.appendChild(avgDps);

      attacksMetaMap[attack.name || "basic"] = {
        type: attack.type,
        multiplier: attack.multiplier || 1,
        statLabels: { normal: [normalHitDamageTag, normalHitPercentageTag], crit: [critHitDamageTag, critHitPercentageTag] },
        damageLabels: { average: avgDpsLabel },
        aoe: attack.aoe,
      };
      break;
    
    case "Conditional-Dot":
      [avgDps, avgDpsLabel] = createTextStat("Average Damage");
      attackLayout.appendChild(avgDps);

      attacksMetaMap[attack.name] = {
        type: attack.type,
        multiplier: attack.multiplier || 1,
        statLabels: { normal: [normalHitDamageTag, normalHitPercentageTag], tick: [tickHitDamageTag, tickHitPercentageTag] },
        damageLabels: { average: avgDpsLabel },
        aoe: attack.aoe,
        hits: attack.hits
      };
      break;

    case "Dot":
      [avgDps, avgDpsLabel] = createTextStat("Average Dps");
      [teamDps, teamDpsLabel] = createTextStat("Team Dps");

      attackLayout.appendChild(avgDps);
      attackLayout.appendChild(teamDps);

      attacksMetaMap[attack.name || "basic"] = {
        type: "Dot",
        multiplier: attack.multiplier || 1,
        statLabels: { normal: [normalHitDamageTag, normalHitPercentageTag], tick: [tickHitDamageTag, tickHitPercentageTag] },
        damageLabels: { average: avgDpsLabel, team: teamDpsLabel },
        aoe: attack.aoe,
        hits: attack.hits
      };
      break;

    default:
      [avgDps, avgDpsLabel] = createTextStat("Average Dps");
      [teamDps, teamDpsLabel] = createTextStat("Team Dps");

      attackLayout.appendChild(avgDps);
      attackLayout.appendChild(teamDps);

      attacksMetaMap[attack.name || "basic"] = {
        type: attack.type || "Spa-Interval",
        multiplier: attack.multiplier || 1,
        statLabels: { normal: [normalHitDamageTag, normalHitPercentageTag], crit: [critHitDamageTag, critHitPercentageTag] },
        damageLabels: { average: avgDpsLabel, team: teamDpsLabel },
        aoe: attack.aoe,
      };
      break;
  }
}

function createAllAttacks() {
  attacksContainer.innerHTML = ""

  createAttack()

  for (attackIndex in unitAttacks[selectedUnit]) {
    const attack = unitAttacks[selectedUnit][attackIndex];

    attackMultiplier = attack.multiplier

    if (attackMultiplier > 0 || typeof attack.multiplier == "function") {
      createAttack(attack)
    }
  }
}

createAllAttacks()
updateAttacks()

finalStats = new Proxy(finalStats, {
  set(target, prop, value) {
    if (target[prop] !== value) {
      target[prop] = value;

      createAllAttacks()
    }
    return true;
  }
});