const unitAttacks = {
  Vsjw: [
    {name: "Song Jinwu Nuke", aoe: "Full", hits: 4, type: "Nuke", description: "Deals 400% of this unit's Dmg in a full AoE.", 
    multiplier: 4, image: "Images/Abilities/Song_Jinwu_Ability.webp", gradient: "vsjw"},

    {name: "Igros Nuke", aoe: "Full", hits: 3, type: "Nuke", description: "Deals 600% of this unit's Dmg in a full AoE.", 
    multiplier: 6, image: "Images/Abilities/Igros_Ability.webp", gradient: "vsjw"},

    {name: "Duo Nuke", aoe: "Full", hits: 5, type: "Nuke", description: "Deals 1000% of this unit's Dmg in a full AoE.", 
    multiplier: 10, image: "Images/Abilities/Duo_Ability.webp", gradient: "vsjw"},
  ],

  Conqueror: [
    {name: "Followup", aoe: "Full", hits: 1, type: "Spa-Followup", description: "Follows up every attack for 100% Dmg for every boss in range", 
    multiplier: 1, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},
  ],

  Byeken: [
    {name: "Followup", aoe: "90° Cone", hits: 1, type: "Spa-Followup", description: "Follows up with attack 5 every attack for 100% Dmg", 
    multiplier: 1, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},

    {name: "Kill Followup", aoe: "8 Circle", hits: 1, type: "Condition-Followup", description: "Follows up with attack 1 every time an enemy dies in range for 100% Dmg", 
    multiplier: 1, image: "Images/Abilities/Condition_Followup.webp", gradient: "rare"},

    {name: "Counter", aoe: "Single", hits: 1, type: "Condition-Followup", description: "Counters for 20% of Dmg every time she is attacked", 
    multiplier: 0.2, image: "Images/Abilities/Condition_Followup.webp", gradient: "rare"},
  ],

  Yehowach: [
    {name: "Followup", aoe: "Full", hits: 6, type: "Spa-Followup", description: "Follows up every attack for 100% Dmg", 
    multiplier: 1, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},
  ],

  Alocard: [
    {name: "Bleed", aoe: "Single", hits: 8, type: "Dot", description: "Deals 25% of this units Dmg over 8s per attack that inflicts it", 
    multiplier: 0.25, image: "Images/Abilities/Bleed.webp", gradient: "secret"}
  ],

  Dawntay: [
    {name: "DT Followup", aoe: "Full", hits: 7, type: "Spa-Followup", description: "Follows up with attack 5 every attack during DT for 100% Dmg (Basic also becomes full aoe)", 
    multiplier: 1, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},

    {name: "Normal Followups", aoe: "28 Circle", hits: 7, type: "Spa-Followup", 
    description: "Follows up each for 50% Dmg up to 4 times as long as this unit lands a crit per followup (Deactivated during DT)", 
    multiplier: (finalStats) => {const crit = finalStats.crit / 100; return (crit + crit ** 2 + crit ** 3 + crit ** 4)}, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},
  ]
}