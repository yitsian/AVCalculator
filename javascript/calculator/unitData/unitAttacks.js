const unitAttacks = {
  Koguro: [
    {name: "Beast Explosion", aoe: "Mapwide", hits: 1, type: "Nuke", description: "Deals 1000% Dmg to every enemy on the map.", 
    multiplier: 10, image: "Images/Abilities/Beast_Explosion_Ability.webp", gradient: "koguro"},

    {name: "Fire Domain", aoe: "Mapwide", hits: 8, type: "Conditional-Dot", description: "When this domain is activated, deals 35% of this units Dmg over 8s to every enemy", 
    multiplier: 0.35, image: "Images/Abilities/Fire_Domain.png", gradient: "koguro"},

    {name: "Ice Domain", aoe: "Mapwide", hits: 10, type: "Conditional-Dot", description: "When this domain is activated following fire, deals 50% of this units Dmg over 10s to every enemy", 
    multiplier: 0.5, image: "Images/Abilities/Ice_Domain.png", gradient: "koguro"},

    {name: "Sand Domain", aoe: "Mapwide", hits: 1, type: "Conditional-Dot", description: "When this domain is activated following fire, deals 50% of this units Dmg to every enemy", 
    multiplier: 0.5, image: "Images/Abilities/Sand_Domain.png", gradient: "koguro"}
  ],

  Vsjw: [
    {name: "Song Jinwu Nuke", aoe: "Full", hits: 4, type: "Nuke", description: "Deals 400% of this unit's Dmg in a full AoE.", 
    multiplier: 4, image: "Images/Abilities/Song_Jinwu_Ability.webp", gradient: "vsjw"},

    {name: "Igros Nuke", aoe: "Full", hits: 3, type: "Nuke", description: "Deals 600% of this unit's Dmg in a full AoE.", 
    multiplier: 6, image: "Images/Abilities/Igros_Ability.webp", gradient: "vsjw"},

    {name: "Duo Nuke", aoe: "Full", hits: 5, type: "Nuke", description: "Deals 1000% of this unit's Dmg in a full AoE.", 
    multiplier: 10, image: "Images/Abilities/Duo_Ability.webp", gradient: "vsjw"},
  ],

  Divalo: [
    {name: "Counter", aoe: "Single", hits: 1, type: "Condition-Followup", description: "Counters for 50% of Dmg every time he is attacked. (Does 100% during Complete Erasure)", 
    multiplier: (finalStats, conditions) => {return conditions["1-0"].active == true ? 1 : 0.5}, image: "Images/Abilities/Condition_Followup.webp", gradient: "rare"},
  ],

  Rogita: [
    {name: "Clone Followup", aoe: "50° Cone", hits: 6, type: "Spa-Followup", description: "Summons a clone that follows up every attack for 100% Dmg", 
    multiplier: 1, image: "Images/Abilities/Clone_Followup.webp", gradient: "rogita"},
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

  Lfelt: [
    {name: "Shotgun Loop", aoe: "120° Cone", hits: 1, type: "Nuke", description: "Consumes 30% meter to immediately do Attack 2 for 100% Dmg. (Refer to video for optimal animation canceling)", 
    multiplier: 1, image: "Images/Abilities/Shotgun_Loop_Ability.webp", gradient: "secret"},

    {name: "Followup", aoe: "4 Line", hits: 1, type: "Nuke", description: "After consuming meter, follows up with attack 1 for 100% Dmg (5s cd)", 
    multiplier: 1, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},
  ],

  SmithJohn: [
    {name: "Dramatic Entry", aoe: "Full", hits: 1, type: "Nuke", description: "On Entry damages all enemies in range for 80% of this units Dmg.", 
    multiplier: 0.8, image: "Images/Units/SmithJohn.webp", gradient: "secret"},

    {name: "Assassination", aoe: "Single", hits: 1, type: "Nuke", description: "Deals 700% damage to the highest hp target in range", 
    multiplier: 7, image: "Images/Abilities/Assassination_Ability.webp", gradient: "secret"},
  ],

  LordofShadows: [
    {name: "Dramatic Entry", aoe: "Full", hits: 1, type: "Nuke", description: "On Entry damages all enemies in range for 150% of this units Dmg.", 
    multiplier: 1.5, image: "Images/Units/LordofShadows.webp", gradient: "secret"},

    {name: "All Range Atomic", aoe: "Mapwide", hits: 1, type: "Nuke", description: "Does 50% Dmg x the amount of swaps this unit has done, to all enemies on the map. Increase by 25% per swap; up to 600%.", 
    multiplier: (finalStats, conditions) => {return conditions["3-0"].active == true ? (conditions["3-0"].value * (0.5 + Math.min((conditions["3-0"].value - 1) * 0.25, 6))) : 0}, 
    image: "Images/Abilities/All_Range_Atomic_Ability.webp", gradient: "secret"},
  ],

  Clatakiri: [
    {name: "Followup", aoe: "8 Circle", hits: 8, type: "Spa-Followup", description: "Follows up every attack for 50% Dmg", 
    multiplier: 0.5, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},
  ],

  SuperVogito: [
    {name: "Counter", aoe: "Single", hits: 1, type: "Condition-Followup", description: "Counters for 100% of Dmg every time he is attacked or has a status effect applied", 
    multiplier: 1, image: "Images/Abilities/Condition_Followup.webp", gradient: "rare"},
  ],

  Roku: [
    {name: "Super Soul Bomb", aoe: "Mapwide", hits: 1, type: "Nuke", description: "Charges a nuke that deals up to 1000% damage to every enemy on the map", 
    multiplier: 7, image: "Images/Abilities/Super_Soul_Bomb_Ability.webp", gradient: "secret"},
  ],

  KidBoo: [
    {name: "Kill Followup", aoe: "18 Circle", hits: 1, type: "Condition-Followup", description: "Follows up every kill for 100% Dmg (5s cd)", 
    multiplier: 1, image: "Images/Abilities/Condition_Followup.webp", gradient: "rare"},
  ],

  Boohon: [
    {name: "Egg Stomper", aoe: "8 Circle", hits: 1, type: "Condition-Followup", description: "When a candy enemy is defeated by this unit, the enemy explodes dealing 50% Dmg (Cannot hit same enemy twice)", 
    multiplier: 0.5, image: "Images/Abilities/Condition_Followup.webp", gradient: "rare"},
  ],

  ChoyJongEn: [
    {name: "Intense Burn", aoe: "Single", hits: 10, type: "Dot", description: "Deals 50% (Using 75%) of this units Dmg over 10s (Unstackable but can be refreshed) (Also need to fix dps for this since its assuming it stacks)", 
    multiplier: 0.75, image: "Images/Units/ChoyJongEn.webp", gradient: "secret"},

    {name: "Intense Burn Nuke", aoe: "Single", hits: 1, type: "Nuke", description: "Enemy receives an extra hit dealing Dmg equal to what the burn dealt. (Only accounts for 1 Choy)", 
    multiplier: (finalStats, conditions) => {return conditions["1-0"].active == true ? (conditions["1-0"].value * 0.75) : 0},
    image: "Images/Units/ChoyJongEn.webp", gradient: "secret"}
  ],

  Eizan: [
    {name: "Aura Max Damage", aoe: "Single", hits: 1, type: "Nuke", description: "Every enemy within 40% of this unit's range takes 1%-80% Dmg every second based on how close they are to the unit.", 
    multiplier: (finalStats, conditions) => {return (conditions["1-0"].active == true ? (conditions["1-0"].value * 0.02) : 0) + 0.8}, image: "Images/Abilities/Dabo_81_Ability.webp", gradient: "secret"},
  ],

  Yehowach: [
    {name: "Followup", aoe: "Full", hits: 6, type: "Spa-Followup", description: "Follows up every attack for 100% Dmg", 
    multiplier: 1, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},
  ],

  Yomomata: [
    {name: "Burn", aoe: "Single", hits: 6, type: "Dot", description: "Attacks inflict burn for 25% Dmg. (Wiki doesn't say so I used 6s duration)", 
    multiplier: 0.25, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  Sukono: [
    {name: "Burn", aoe: "Single", hits: 6, type: "Dot", description: "Attacks inflict burn for 30% Dmg after upgrade 9. (Wiki doesn't say so I used 6s duration)", 
    multiplier: 0.3, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  Alocard: [
    {name: "Bleed", aoe: "Single", hits: 8, type: "Dot", description: "Deals 25% of this units Dmg over 8s per attack", 
    multiplier: 0.25, image: "Images/Abilities/Bleed.webp", gradient: "secret"}
  ],

  Salter: [
    {name: "Followup", aoe: "22 Circle", hits: 4, type: "Spa-Followup", description: "If Sokora is placed down, follows up every attack for 50% Dmg", 
    multiplier: 0.5, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},

    {name: "Dark Excalibur Burn", aoe: "Single", hits: 6, type: "Conditional-Dot", description: "When Dark Excalibur hits, deals 35% of this units Dmg over 6s to every enemy in range", 
    multiplier: (finalStats, conditions) => {return conditions["2-0"].active == true ? 0.35 : 0}, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  Arc: [
    {name: "Bleed", aoe: "Single", hits: 6, type: "Dot", description: "Deals 30% of this units Dmg over 6s per attack", 
    multiplier: 0.3, image: "Images/Abilities/Bleed.webp", gradient: "secret"},

    {name: "Burn", aoe: "Single", hits: 8, type: "Dot", description: "Attacks inflict burn for 30% Dmg over 8s per attack if chosen element is fire", 
    multiplier: (finalStats, conditions) => {return conditions["0-0"].active == true ? 0.3 : 0}, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  Hebano: [
    {name: "Burn", aoe: "Single", hits: 8, type: "Dot", description: "Attacks inflict burn for 30% Dmg over 8s per attack", 
    multiplier: 0.3, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  DarkMage: [
    {name: "Bleed", aoe: "Single", hits: 6, type: "Dot", description: "Deals 25% of this units Dmg over 6s per attack. Does 50% more when a bleeding enemy dies in range (10s cd)", 
    multiplier: 0.25, image: "Images/Abilities/Bleed.webp", gradient: "secret"},

    {name: "Bleed Death", aoe: "Single", hits: 4, type: "Conditional-Dot", description: "When a Bleed-inflicted enemy dies within range, deals 40% of Dmg to all enemies in range over 4s", 
    multiplier: 0.4, image: "Images/Abilities/Bleed.webp", gradient: "secret"},

    {name: "Meter Bleed", aoe: "Single", hits: 8, type: "Conditional-Dot", description: "Deals 100% of this units Dmg over 8s to all enemies in range whenever the rook meter fills", 
    multiplier: 1, image: "Images/Abilities/Bleed.webp", gradient: "secret"},

    {name: "Meter Burn", aoe: "Single", hits: 8, type: "Conditional-Dot", description: "Deals 100% of this units Dmg over 8s to all enemies in range whenever the rook meter fills", 
    multiplier: 1, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  Dawntay: [
    {name: "DT Followup", aoe: "Full", hits: 7, type: "Spa-Followup", description: "Follows up with attack 5 every attack during DT for 100% Dmg (Basic also becomes full aoe)", 
    multiplier: (finalStats, conditions) => {return conditions["1-0"].active == true ? 1 : 0}, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},

    {name: "Normal Followups", aoe: "28 Circle", hits: 7, type: "Spa-Followup", 
    description: "Follows up each for 50% Dmg up to 4 times as long as this unit lands a crit per followup (Deactivated during DT)", 
    multiplier: (finalStats, conditions) => {const crit = finalStats.crit / 100; return conditions["1-0"].active == true ? 0 : (crit + crit ** 2 + crit ** 3 + crit ** 4)}, 
    image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},
  ],

  Vigil: [
    {name: "Doppelganger", aoe: "Full", hits: 1, type: "Spa-Followup", description: "Summons a Doppelganger that follows up every attack for 100% Dmg in Vigil's aoe", 
    multiplier: (finalStats, conditions) => {return conditions["0-0"].active == true ? 1 : 0}, image: "Images/Units/Vigil.webp", gradient: "exclusive"},

    {name: "You Shall Die!", aoe: "5 Circle", hits: 3, type: "Spa-Followup", 
    description: "When attacking a Frozen enemy, 100% chance of immediately following up with Move 1, with additional followups having diminishing 15% chance. (Average of 2.94 followups, double this to account for the doppelganger)", 
    multiplier: 2.94, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},
  ],

  Luce: [
    {name: "Kill Followup", aoe: "Full", hits: 5, type: "Condition-Followup", description: "Follows up every time a Dave in range attack for 100% Dmg (10s cd)", 
    multiplier: 1, image: "Images/Abilities/Condition_Followup.webp", gradient: "rare"},
  ],

  Zion: [
    {name: "Burn", aoe: "Single", hits: 8, type: "Dot", description: "Attacks inflict Burn equal to 10% of this unit's DMG: Increases Burn DMG by +3% per attack (up to 40% Dmg).", 
    multiplier: 0.1, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  Renguko: [
    {name: "Burn", aoe: "Single", hits: 8, type: "Dot", description: "Attacks inflict Burn equal to 30% of this unit's DMG, Increases Burn DMG to 50% when Purgatory Unleashed is unlocked.", 
    multiplier: (finalStats, conditions) => {return conditions["0-1"].active == true ? 0.5 : 0.3}, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  Saiko: [
    {name: "Burn", aoe: "Single", hits: 6, type: "Dot", description: "Attacks inflict Burn equal to 25% of this unit's DMG over 6s.", 
    multiplier: 0.25, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  Karem: [
    {name: "Frostburn", aoe: "Single", hits: 6, type: "Dot", description: "Attacks remove Burn and inflict Frostburn equal to 50% of this unit's DMG over 6s.", 
    multiplier: 0.5, image: "Images/Abilities/Frostburn.webp", gradient: "secret"},
  ],

  Dodara: [
    {name: "Art is an Explosion!", aoe: "Full", hits: 5, type: "Nuke", description: "Deals 100% of DMG 5 Times; Reset upgrade back to 0.", 
    multiplier: 7, image: "Images/Abilities/Art_is_an_Explosion_Ability.webp", gradient: "exclusive"},
  ],

  Sosora: [
    {name: "Burn", aoe: "Single", hits: 6, type: "Dot", description: "Attacks inflict Burn equal to 50% of this unit's DMG over 6s.", 
    multiplier: 0.5, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ]
}