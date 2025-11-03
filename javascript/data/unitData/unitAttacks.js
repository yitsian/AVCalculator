const unitAttacks = {
  Hollowseph: [
    {name: "Embrace the Void", aoe: "Single", hits: 1, type: "Condition-Followup", description: "Attacks the highest hp enemy for 400% Dmg. (100 Cost)", 
    multiplier: 4, image: "Images/Abilities/Void_Spells_Ability.webp", gradient: "obita"},

    {name: "Abyss Shriek", aoe: "8 Circle", hits: 15, type: "Condition-Followup", description: "This unit spawns an area on the track that deals 20% Dmg per second for 15s. (33 Cost)", 
    multiplier: (finalStats, conditions) => {return conditions["2-7"].active == true ? 3 : 4.5}, image: "Images/Abilities/Void_Spells_Ability.webp", gradient: "secret"},

    {name: "Shade Strike", aoe: "Single", hits: 1, type: "Condition-Followup", description: "Attacks the closest enemy for 100% Dmg. (33 Cost)", 
    multiplier: (finalStats, conditions) => {return conditions["2-7"].active == true ? 1.5 : 1}, image: "Images/Abilities/Void_Spells_Ability.webp", gradient: "exclusive"},

    {name: "Lost Shade", aoe: "Single", hits: 1, type: "Summon", description: "Summons in a Lost Shade Summon every takedown for 35% Dmg (65% with Void Given Claw). (2s CD)", 
    multiplier: (finalStats, conditions) => {return conditions["2-5"].active == true ? 0.65 : 0.35}, image: "Images/Units/Hollowseph.webp", gradient: "legendary"},

    {name: "Barbs of Spite", aoe: "Full", hits: 1, type: "Condition-Followup", description: "This unit deals 1% Dmg per second to all enemies in range.", 
    multiplier: (finalStats, conditions) => {return conditions["2-8"].active == true ? 0.01 : 0}, image: "Images/Abilities/Void_Spells_Ability.webp", gradient: "epic"},
    
    {name: "Soul Stacks", aoe: "None", hits: 1, type: "Meter", description: "Average time to fill 100% meter.", 
    multiplier: 1, image: "Images/Familiars/BlackSpirit.webp", gradient: "rare"},
  ],

  Shero: [
    {name: "Meter", aoe: "None", hits: 1, type: "Meter", description: "Average time to fill 100% meter (If using Yin-Yang Blade)", 
    multiplier: 1, image: "Images/Familiars/BlackSpirit.webp", gradient: "rare"},
  ],

  Hellkiller: [
    {name: "Glory Kill", aoe: "8 Circle", hits: 3, type: "Condition-Followup", description: "When this unit gets an enemy below 50% Hp, attacks them for 200% Dmg. (10s CD)", 
    multiplier: 2, image: "Images/Units/Hellkiller.webp", gradient: "exclusive"},

    {name: "HellWalker", aoe: "Full", hits: 30, type: "Nuke", description: "Ability go into first person that 50% Dmg per attack at 1 attack per 0.66s, last 20s. (180s Cd).", 
    multiplier: 15, image: "Images/Abilities/Hellkiller_Ability.webp", gradient: "exclusive"},
  ],

  Dot: [
    {name: "The Dot", aoe: "16 Circle", hits: 3, type: "Spa-Followup", description: "This unit can target units outside his range, but doing 50% Dmg per attack instead.", 
    multiplier: 0.5, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},

    {name: "Nemesis", aoe: "Single", hits: 1, type: "Spa-Followup", description: "Every attack also inflicts the same damage onto this unit's nemesis.", 
    multiplier: 1, image: "Images/Units/Dot.webp", gradient: "exclusive"},
  ],

  Callasuba: [
    {name: "Dark", aoe: "Single", hits: 1, type: "Summon", description: "Summons Dark who starts with 100% Dmg as Hp going up to 1000%. Respawns after 30s.", 
    multiplier: 10, image: "Images/Units/Callasuba.webp", gradient: "secret"},

    {name: "The Crimson Mage", aoe: "Full", hits: 1, type: "Nuke", description: "Ability to use a nuke that does 1500% Dmg to all enemies in range but disables the unit for 40s after use.", 
    multiplier: 15, image: "Images/Abilities/Callasuba_Ability.webp", gradient: "exclusive"},
  ],

  Rideon: [
    {name: "Truth Goes Unspoken", aoe: "120° Cone", hits: 3, type: "Spa-Followup", description: "Every attack inflicts its damage again after 10s", 
    multiplier: 1, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},
  ],

  Rummie: [
    {name: "Red Gem", aoe: "15 Circle", hits: 1, type: "Spa-Followup", description: "While there are less than 30 enemies in this units range, follow up after every attack for 50% Dmg. (Main attack becomes Full Aoe when this is disabled)", 
    multiplier: 0.5, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},
  ],

  Senator: [
    {name: "Burn", aoe: "Single", hits: 8, type: "Dot", description: "Attacks inflict burn for 50% Dmg over 8s.", 
    multiplier: 0.5, image: "Images/Abilities/Burn.png", gradient: "secret"},

    {name: "Nanomachines, Son", aoe: "35° Cone", hits: 3, type: "Condition-Followup", description: "When this unit hits a burning enemy, follows up with attack 2 for 100% Dmg and Detonates all burns for 200% Dmg. (20s CD)", 
    multiplier: 1, image: "Images/Units/Senator.webp", gradient: "legendary"},

    {name: "Followup Burn", aoe: "Single", hits: 8, type: "Conditional-Dot", description: "Follow up also inflicts burn for 50% Dmg over 8s.", 
    multiplier: 0.5, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  Lizard: [
    {name: "Burn", aoe: "Single", hits: 8, type: "Dot", description: "Attacks inflict burn for half of this units Radiation meter as Dmg.", 
    multiplier: (finalStats, conditions) => {return conditions["0-0"].active == true ? conditions["0-0"].value / 200 : 0}, image: "Images/Abilities/Burn.png", gradient: "secret"},

    {name: "King of Monsters", aoe: "20° Cone", hits: 14, type: "Nuke", description: "Deals 20% to 400% Dmg to in all enemies in front of this units. (Infinite Range)", 
    multiplier: 4, image: "Images/Abilities/Heat_Overload_Ability.webp", gradient: "exclusive"},

    {name: "Meter", aoe: "None", hits: 1, type: "Meter", description: "Average time to fill 100% meter", 
    multiplier: 1, image: "Images/Familiars/BlackSpirit.webp", gradient: "rare"},
  ],

  GodStandless: [
    {name: "Your Reality is Mine!", aoe: "Single", hits: 1, type: "Summon", description: "Spawns a summons with 50% for this unit's Dmg. (2s cd)", 
    multiplier: 0.5, image: "Images/Units/GodStandless.webp", gradient: "secret"},

    {name: "DoTs", aoe: "Single", hits: 8, type: "Dot", description: "This unit's DoTs are for 30% Dmg over 8s", 
    multiplier: 0.3, image: "Images/Abilities/Bleed.webp", gradient: "secret"},
  ],

  Cat: [
    {name: "DoTs", aoe: "Single", hits: 8, type: "Conditional-Dot", description: "All DoTs this unit applies are for 30% Dmg over 8s", 
    multiplier: 0.3, image: "Images/Units/Cat.webp", gradient: "secret"},
  ],

  Thunder: [
    {name: "Calamity 1", aoe: "15 Circle", hits: 1, type: "Spa-Followup", description: "70 Rng radius around the unit that does 50% of this units Dmg.", 
    multiplier: 0.5, image: "Images/Units/Thunder.webp", gradient: "rare"},

    {name: "Calamity 2", aoe: "25 Circle", hits: 1, type: "Spa-Followup", description: "50 Rng radius around the unit that does 100% of this units Dmg.", 
    multiplier: 1, image: "Images/Units/Thunder.webp", gradient: "legendary"},

    {name: "Calamity 3", aoe: "40 Circle", hits: 1, type: "Spa-Followup", description: "15 Rng radius around the unit that does 300% of this units Dmg.", 
    multiplier: 3, image: "Images/Units/Thunder.webp", gradient: "secret"},
  ],

  BrolziSuper: [
    {name: "Unrestrained Power", aoe: "Full", hits: 5, type: "Spa-Followup", description: "Follows up with attack 3 for 100% Dmg when this unit crits (5s local cd)", 
    multiplier: 1, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},

    {name: "Innocent Rage", aoe: "12 Circle", hits: 3, type: "Spa-Followup", description: "Follows up with attack 1 for 100% Dmg when this unit doesn't crit (5s local cd)", 
    multiplier: 1, image: "Images/Abilities/Condition_Followup.webp", gradient: "rare"},
  ],

  RogitaSuper: [
    {name: "Tag, You're It!", aoe: "70° Cone", hits: 3, type: "Spa-Followup", description: "Follows up with attack 1 for 100% Dmg when this unit crits an enemy (5s local cd)", 
    multiplier: 1, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},
  ],

  LordFriezo: [
    {name: "Alien Cadet", aoe: "5 Line", hits: 3, type: "Spa-Followup", description: "Place up to 3 aliens, Alien Cadets have 25% Base Dmg and Cost", 
    multiplier: 0.25, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},

    {name: "Alien Soldier", aoe: "5 Line", hits: 3, type: "Spa-Followup", description: "Place up to 3 aliens, Alien Soldiers have 40% Base Dmg and Cost", 
    multiplier: 0.4, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},

    {name: "Alien Elite", aoe: "5 Line", hits: 3, type: "Spa-Followup", description: "Place up to 3 aliens, Alien Elites have 70% Base Dmg and Cost", 
    multiplier: 0.7, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},

    {name: "Alien Cadet Summon", aoe: "Single", hits: 1, type: "Summon", description: "Basic summon that spawns with 1x this unit's Dmg.", 
    multiplier: 1, image: "Images/Units/LordFriezo.webp", gradient: "rare"},
  ],

  Wolf: [
    {name: "The Coyote", aoe: "8 Circle", hits: 1, type: "Condition-Followup", description: "Every 10s spawns 2 wolves that attack the first marked enemy", 
    multiplier: 1, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},

    {name: "Resurreccion", aoe: "12 Line", hits: 1, type: "Spa-Followup", description: "Follows up with attack 1 for 60% Dmg when this unit crits an enemy (5s local cd)", 
    multiplier: 0.6, image: "Images/Abilities/Condition_Followup.webp", gradient: "rare"},
  ],

  TheStruggler: [
    {name: "Bleed", aoe: "Single", hits: 10, type: "Conditional-Dot", description: "When stunned if the enemy has no bleed, deals 20% of this units Dmg over 10s", 
    multiplier: 0.2, image: "Images/Abilities/Bleed.webp", gradient: "secret"},

    {name: "Bleed Followup", aoe: "10 Line", hits: 1, type: "Condition-Followup", description: "Follows up every 10s with attack 1/3 for 100% Dmg if there is a bleeding enemy in range (10 Line / 12 Line)", 
    multiplier: 1, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},

    {name: "Beast of Darkness", aoe: "90° Cone", hits: 1, type: "Condition-Followup", description: "Follows up with attack 2 for 50% Dmg when attacking a bleeding enemy (2s cd)", 
    multiplier: 0.5, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},
  ],

  GoblinKiller: [
    {name: "Traps", aoe: "Single", hits: 1, type: "Condition-Followup", description: "Lays down up to 5 traps that do up to 400% of this units damage starting from 20% growing 5% per second", 
    multiplier: 4, image: "Images/Units/GoblinKiller.webp", gradient: "exclusive"},

    {name: "Trap Followup", aoe: "Single", hits: 1, type: "Condition-Followup", description: "This unit doesn't attack normally. <br> Instead when an enemy hits a trap, this unit attacks them for 100% Dmg", 
    multiplier: 1, image: "Images/Abilities/Condition_Followup.webp", gradient: "rare"},
  ],

  GG: [
    {name: "New Challenger", aoe: "10 Circle", hits: 5, type: "Condition-Followup", description: "Whenever an enemy enters this unit's range, follows up for 100% Dmg (8s cd).", 
    multiplier: 1, image: "Images/Abilities/Condition_Followup.webp", gradient: "rare"},

    {name: "Curse Ball", aoe: "10 Circle", hits: 1, type: "Condition-Followup", description: "Anytime this unit attacks, leaves a ball for each enemy hit that explodes after 5s for 40% Dmg (Max 10 per player).", 
    multiplier: 0.4, image: "Images/Units/GG.webp", gradient: "exclusive"},
  ],

  GujoFamiliar: [
    {name: "Split Second Decision", aoe: "12 Line", hits: 1, type: "Condition-Followup", description: "Anytime an enemy leaves range, stuns all enemies and follows up with attack 3 for 100% Dmg (20s cd).", 
    multiplier: 1, image: "Images/Units/GujoFamiliar.webp", gradient: "gujo"},
  ],

  SukonoFamiliar: [
    {name: "Burn", aoe: "Single", hits: 6, type: "Dot", description: "Attacks inflict burn for 30% Dmg after upgrade 9.", 
    multiplier: 0.3, image: "Images/Abilities/Burn.png", gradient: "secret"},

    {name: "Chef's Preparations", aoe: "Full", hits: 1, type: "Spa-Followup", description: "Anytime this unit first inflicts cleave on and enemy, followup with attack 2 (5s cd).", 
    multiplier: 1, image: "Images/Units/SukonoFamiliar.webp", gradient: "sukono"},

    {name: "Bleed", aoe: "Single", hits: 4, type: "Dot", description: "Followup attacks inflict bleed for 30% Dmg.", 
    multiplier: 0.3, image: "Images/Abilities/Bleed.webp", gradient: "secret"},
  ],

  GilgameshFamiliar: [
    {name: "Gates of Babylon", aoe: "Single", hits: 3, type: "Condition-Followup", description: "After this unit uses Enuma Elish, stops attacking and consumes up to 30 NP to do a followup for 100% Dmg every second until out of NP.", 
    multiplier: 1, image: "Images/Units/GilgameshFamiliar.webp", gradient: "gilgamesh"},
  ],

  ObitaFamiliar: [
    {name: "Burn", aoe: "Single", hits: 6, type: "Dot", description: "Attacks inflict Burn equal to 30% of this unit's DMG over 6s", 
    multiplier: 0.3, image: "Images/Abilities/Burn.png", gradient: "secret"},

    {name: "Placement Burn", aoe: "Single", hits: 8, type: "Conditional-Dot", description: "Anytime this unit is placed, inflicts all enemies in range with burn for 30% of this units Dmg over 8s.", 
    multiplier: 0.3, image: "Images/Units/ObitaFamiliar.webp", gradient: "obita"},
  ],

  ValentineFamiliar: [
    {name: "This is Another Me...", aoe: "18 Circle", hits: 1, type: "Spa-Followup", description: "Each use places a clone that each do 20% of this unit's Dmg, lasting 20s.", 
    multiplier: (finalStats, conditions) => {return (conditions["3-0"].active == true ? (conditions["3-0"].value * 0.2) : 0)}, image: "Images/Abilities/This_is_Another_Me..._Ability.webp", gradient: "valentine"},
  ],

  Iscanur: [
    {name: "Burn", aoe: "Single", hits: 5, type: "Dot", description: "Attacks inflict burn for 30% Dmg over 5 seconds.", 
    multiplier: 0.3, image: "Images/Abilities/Burn.png", gradient: "secret"},
    
    {name: "High Noon Burn", aoe: "Single", hits: 5, type: "Conditional-Dot", description: "When at 12 hour stacks inflict burn for 10% Dmg over 5 seconds every second.", 
    multiplier: 0.1, image: "Images/Abilities/Ultimate_Ability.webp", gradient: "secret"},

    {name: "Sunshine Burn", aoe: "Single", hits: 5, type: "Conditional-Dot", description: "When an enemy leaves this unit's range, inflicts burn for 100% of this units Dmg over 5s.", 
    multiplier: 1, image: "Images/Abilities/Ultimate_Ability.webp", gradient: "iscanur"},

    {name: "Lion's Sin", aoe: "Full", hits: 1, type: "Nuke", description: "Deals 400% Dmg to every enemy in range.", 
    multiplier: 10, image: "Images/Abilities/Lions_Sin_Ability.webp", gradient: "iscanur"},
  ],

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

    {name: "Bear", aoe: "Single", hits: 1, type: "Summon", description: "Basic summon that spawns with 2x this unit's Dmg.", 
    multiplier: 2, image: "Images/Abilities/Bear.png", gradient: "vsjw"},

    {name: "Steel", aoe: "Single", hits: 1, type: "Summon", description: "Unmoving summon that spawns with 2x this unit's Dmg and gains 2% max health over time up to 8x this unit's Dmg.", 
    multiplier: 2, image: "Images/Abilities/Steel.png", gradient: "vsjw"},

    {name: "Healer", aoe: "Single", hits: 1, type: "Summon", description: "Healing summon that spawns with 0.5x this unit's Dmg and heals all summons on the map for 5% their hp every 5s.", 
    multiplier: 0.5, image: "Images/Abilities/Healer.png", gradient: "vsjw"},

    {name: "Belu", aoe: "Single", hits: 1, type: "Summon", description: "Final summon that spawns with 1.5x this unit's Dmg and that gains 5% hp every subsequent summon up to 4.5x this unit's Dmg.", 
    multiplier: 1.5, image: "Images/Abilities/Belu.png", gradient: "vsjw"},
  ],

  Divalo: [
    {name: "Counter", aoe: "Single", hits: 1, type: "Condition-Followup", description: "Counters for 50% of Dmg every time he is attacked. (Does 100% during Complete Erasure)", 
    multiplier: (finalStats, conditions) => {return conditions["1-0"].active == true ? 1 : 0.5}, image: "Images/Abilities/Condition_Followup.webp", gradient: "rare"},
  ],

  Rogita: [
    {name: "Clone Followup", aoe: "50° Cone", hits: 6, type: "Spa-Followup", description: "Summons a clone that follows up every attack for 100% Dmg", 
    multiplier: 1, image: "Images/Abilities/Clone_Followup.webp", gradient: "rogita"},
  ],

  Leo: [
    {name: "Burn", aoe: "Single", hits: 5, type: "Dot", description: "Attacks inflict burn for 20% Dmg over 5 seconds. Increases depending on applications on same enemy.", 
    multiplier: (finalStats, conditions) => {return (conditions["0-0"].active == true ? (conditions["0-0"].value * 0.05) : 0) + 0.2}, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  MonkeyKing: [
    {name: "Clones", aoe: "22 Circle", hits: 4, type: "Spa-Followup", description: "Can place up to 3 clones that cost 50% less than the previous and do 0.65x this units Dmg. (Toggle off Monkey Clones buff to see clone damage before selling original)", 
    multiplier: 0.65, image: "Images/Abilities/Monkey_Kings_Fur_Ability.webp", gradient: "secret"},
  ],

  Arin: [
    {name: "Placement Nuke", aoe: "Full", hits: 1, type: "Nuke", description: "Whenever this unit is placed, does damage in its area equal to 500% of its Dmg stat.", 
    multiplier: 5, image: "Images/Unit/Arin.webp", gradient: "secret"},

    {name: "Rumbling", aoe: "Mapwide", hits: 1, type: "Nuke", description: "Does 20 million Dmg and does 35% max hp damage to all enemies it crosses. (Cannot be buffed, ignore shown damage)", 
    multiplier: 1, image: "Images/Abilities/Rumbling_Ability.webp", gradient: "secret"},
  ],

  Conqueror: [
    {name: "Followup", aoe: "Full", hits: 4, type: "Spa-Followup", description: "Follows up every attack for 100% Dmg for every boss in range.", 
    multiplier: 1, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},
  ],

  Byeken: [
    {name: "Followup", aoe: "90° Cone", hits: 1, type: "Spa-Followup", description: "Follows up with attack 5 every attack for 100% Dmg", 
    multiplier: 1, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},

    {name: "Kill Followup", aoe: "8 Circle", hits: 1, type: "Condition-Followup", description: "Follows up with attack 1 every time an enemy dies in range for 100% Dmg", 
    multiplier: 1, image: "Images/Abilities/Condition_Followup.webp", gradient: "rare"},

    {name: "Counter", aoe: "Single", hits: 1, type: "Condition-Followup", description: "Counters for 20% of Dmg every time she is attacked", 
    multiplier: 0.2, image: "Images/Abilities/Condition_Followup.webp", gradient: "rare"},

    {name: "Meter", aoe: "None", hits: 1, type: "Meter", description: "Average time to fill 100% meter (2% due to followup)", 
    multiplier: 1, image: "Images/Familiars/BlackSpirit.webp", gradient: "rare"},
  ],

  Lfelt: [
    {name: "Shotgun Loop", aoe: "120° Cone", hits: 1, type: "Nuke", description: "Consumes 30% meter to immediately do Attack 2 for 100% Dmg. (Refer to video for optimal animation canceling)", 
    multiplier: 1, image: "Images/Abilities/Shotgun_Loop_Ability.webp", gradient: "secret"},

    {name: "Followup", aoe: "4 Line", hits: 1, type: "Nuke", description: "After consuming meter, follows up with attack 1 for 100% Dmg (5s cd)", 
    multiplier: 1, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},

    {name: "Meter", aoe: "None", hits: 1, type: "Meter", description: "Average time to fill 100% meter for both abilities <br> (Filled by followups after shotgun loop. Refer to <a class='spark' href='https://docs.google.com/document/d/1pTkNHVGgDmNIppvcbA2ZZSSS4rLohFrErBEoHhTws_Y'>here</a> for more info)", 
    multiplier: 1, image: "Images/Familiars/BlackSpirit.webp", gradient: "rare"},
  ],

  SmithJohn: [
    {name: "Dramatic Entry", aoe: "Full", hits: 1, type: "Nuke", description: "On Entry damages all enemies in range for 80% of this units Dmg.", 
    multiplier: 0.8, image: "Images/Units/SmithJohn.webp", gradient: "secret"},

    {name: "Assassination", aoe: "Single", hits: 1, type: "Nuke", description: "Deals 700% damage to the highest hp target in range", 
    multiplier: 7, image: "Images/Abilities/Assassination_Ability.webp", gradient: "secret"},

    {name: "Meter", aoe: "None", hits: 1, type: "Meter", description: "Average time to fill 100% meter (Immediately attacks upon swapping)", 
    multiplier: 1, image: "Images/Familiars/BlackSpirit.webp", gradient: "rare"},
  ],

  LordofShadows: [
    {name: "Dramatic Entry", aoe: "Full", hits: 1, type: "Nuke", description: "On Entry damages all enemies in range for 150% of this units Dmg.", 
    multiplier: 1.5, image: "Images/Units/LordofShadows.webp", gradient: "secret"},

    {name: "All Range Atomic", aoe: "Mapwide", hits: 1, type: "Nuke", description: "Does 50% Dmg x the amount of swaps this unit has done, to all enemies on the map. Increase by 25% per swap; up to 600%.", 
    multiplier: (finalStats, conditions) => {return conditions["3-0"].active == true ? (conditions["3-0"].value * (0.5 + Math.min((conditions["3-0"].value - 1) * 0.25, 6))) : 0}, 
    image: "Images/Abilities/All_Range_Atomic_Ability.webp", gradient: "secret"},

    {name: "Meter", aoe: "None", hits: 1, type: "Meter", description: "Average time to fill 100% meter (Immediately attacks upon swapping)", 
    multiplier: 1, image: "Images/Familiars/BlackSpirit.webp", gradient: "rare"},
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

    {name: "Meter", aoe: "None", hits: 1, type: "Meter", description: "Average time to fill 100% meter", 
    multiplier: 1, image: "Images/Familiars/BlackSpirit.webp", gradient: "rare"},
  ],

  Vogita: [
    {name: "Meter", aoe: "None", hits: 1, type: "Meter", description: "Average time to fill 100% meter", 
    multiplier: 1, image: "Images/Familiars/BlackSpirit.webp", gradient: "rare"},
  ],

  KidBoo: [
    {name: "Kill Followup", aoe: "18 Circle", hits: 1, type: "Condition-Followup", description: "Follows up every kill for 100% Dmg (5s cd)", 
    multiplier: 1, image: "Images/Abilities/Condition_Followup.webp", gradient: "rare"},
  ],

  Boohon: [
    {name: "Egg Stomper", aoe: "8 Circle", hits: 1, type: "Condition-Followup", description: "When a candy enemy is defeated by this unit, the enemy explodes dealing 50% Dmg (Cannot hit same enemy twice)", 
    multiplier: 0.5, image: "Images/Abilities/Condition_Followup.webp", gradient: "rare"},

    {name: "Summons", aoe: "Single", hits: 1, type: "Summon", description: "Every 10 enemies killed by this unit summons in a basic summon for 70% of this units Attack stat. (Works with Bodibi)", 
    multiplier: 0.7, image: "Images/Abilities/Boohon.png", gradient: "mythic"},
  ],

  ChoyJongEn: [
    {name: "Intense Burn", aoe: "Single", hits: 10, type: "Dot", description: "Deals 50% (Using 75%) of this units Dmg over 10s (Unstackable but can be refreshed) (Also need to fix dps for this since its assuming it stacks)", 
    multiplier: 0.75, image: "Images/Units/ChoyJongEn.webp", gradient: "secret"},

    {name: "Intense Burn Nuke", aoe: "Single", hits: 1, type: "Nuke", description: "Enemy receives an extra hit dealing Dmg equal to what the burn dealt. (Only accounts for 1 Choy)", 
    multiplier: (finalStats, conditions) => {return conditions["1-0"].active == true ? (conditions["1-0"].value * 0.075) : 0},
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

    {name: "Summons", aoe: "Single", hits: 1, type: "Summon", description: "Every enemy this unit kills gets revived as a skeleton with its health being 40% of this units Dmg (Counts as burn Dmg, works with Bodibi)", 
    multiplier: 0.4, image: "Images/Units/Yomomata.webp", gradient: "secret"},
  ],

  Valentine: [
    {name: "This is Another Me...", aoe: "18 Circle", hits: 1, type: "Spa-Followup", description: "Up to 3 Valentine clones can be placed that each do 20% of this unit's Dmg.", 
    multiplier: 0.2, image: "Images/Abilities/This_is_Another_Me..._Ability.webp", gradient: "secret"},
  ],

  Sukono: [
    {name: "Burn", aoe: "Single", hits: 6, type: "Dot", description: "Attacks inflict burn for 30% Dmg after upgrade 9. (Wiki doesn't say so I used 6s duration)", 
    multiplier: 0.3, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  Alocard: [
    {name: "Bleed", aoe: "Single", hits: 8, type: "Dot", description: "Deals 25% of this units Dmg over 8s per attack", 
    multiplier: 0.25, image: "Images/Abilities/Bleed.webp", gradient: "secret"},
    
    {name: "Summons", aoe: "Single", hits: 1, type: "Summon", description: "Summons 10 ghouls when activating Restraint Level 0 each having 0.5x this unit's Dmg as hp", 
    multiplier: 0.5, image: "Images/Abilities/Restraint_Level_0_Ability.webp", gradient: "secret"},
  ],

  Salter: [
    {name: "Followup", aoe: "22 Circle", hits: 4, type: "Spa-Followup", description: "If Sokora is placed down, follows up every attack for 50% Dmg", 
    multiplier: 0.5, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},

    {name: "Dark Excalibur Burn", aoe: "Single", hits: 6, type: "Conditional-Dot", description: "When Dark Excalibur hits, deals 35% of this units Dmg over 6s to every enemy in range", 
    multiplier: (finalStats, conditions) => {return conditions["2-0"].active == true ? 0.35 : 0}, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  Ali: [
    {name: "Burn", aoe: "Single", hits: 5, type: "Dot", description: "Attacks inflict burn for 30% Dmg over 5s per attack", 
    multiplier: 0.3, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  Hei: [
    {name: "Burn", aoe: "Single", hits: 5, type: "Dot", description: "Attacks inflict burn for 30% Dmg over 5s per attack (Not really counted since he removes burn)", 
    multiplier: 0.3, image: "Images/Abilities/Burn.png", gradient: "secret"},

    {name: "Black Burn", aoe: "Single", hits: 6, type: "Dot", description: "Attacks inflict black burn for 80% Dmg over 6s per attack", 
    multiplier: 0.8, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  Newsman: [
    {name: "Burn", aoe: "Single", hits: 6, type: "Conditional-Dot", description: "Units that pass through this unit's clouds are inflicted with burn for 40% Dmg over 6s.", 
    multiplier: 0.4, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  Quetzalcoatl: [
    {name: "Burn", aoe: "Single", hits: 6, type: "Dot", description: "Attacks inflict burn for 30% Dmg over 6s per attack", 
    multiplier: 0.3, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  Reimu: [
    {name: "Layers", aoe: "Line", hits: 1, type: "Spa-Followup", description: "Ignore Basic Attacks. <br> Each layer sends out additional talismans (1 - 1, 2 - 2, 3 - 4, 4 - 8) and each talisman is a small line so the closer/bigger the enemy is, the more talismans that will be hitting at once", 
    multiplier: 1, image: "Images/Abilities/Evil_Sealing_Circle_Ability.webp", gradient: "exclusive"},
  ],

  Sakuya: [
    {name: "Layers", aoe: "Line", hits: 1, type: "Spa-Followup", description: "Ignore Basic Attacks. <br> Each layer sends out an additional knife (1 - 1, 2 - 2, 3 - 3) and each knife is a small line so the closer/bigger the enemy is, the more knives that will be hitting at once", 
    multiplier: 1, image: "Images/Abilities/Time_Stop_Ability.webp", gradient: "exclusive"},
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

  Rudie: [
    {name: "Meter", aoe: "None", hits: 1, type: "Meter", description: "Average time to fill 100% meter (Does not count passive 1% per second)", 
    multiplier: 1, image: "Images/Familiars/BlackSpirit.webp", gradient: "rare"},
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
    multiplier: (finalStats, conditions) => {const crit = finalStats.crit / 100; return conditions["1-0"].active == true ? crit : 0}, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},

    {name: "Normal Followups", aoe: "28 Circle", hits: 7, type: "Spa-Followup", 
    description: "Follows up each for 50% Dmg up to 4 times as long as this unit lands a crit per followup (Deactivated during DT)", 
    multiplier: (finalStats, conditions) => {const crit = finalStats.crit / 100; return conditions["1-0"].active == true ? 0 : (crit + crit ** 2 + crit ** 3 + crit ** 4) / 2}, 
    image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},

    {name: "Meter", aoe: "None", hits: 1, type: "Meter", description: "Average time to fill 100% meter for Devil Trigger that lasts 30s <br> (Toggle DT off for accurate numbers. Refer to <a class='spark' href='https://docs.google.com/document/d/1EGty6VmAu1NWHLF7ClPgo8wV4OOMkfyNE7u0eTC3VJk'>here</a> for more info)", 
    multiplier: 1, image: "Images/Familiars/BlackSpirit.webp", gradient: "rare"},
  ],

  Vigil: [
    {name: "Doppelganger", aoe: "Full", hits: 1, type: "Spa-Followup", description: "Summons a Doppelganger that follows up every attack for 100% Dmg in Vigil's aoe", 
    multiplier: (finalStats, conditions) => {return conditions["0-0"].active == true ? 1 : 0}, image: "Images/Units/Vigil.webp", gradient: "exclusive"},

    {name: "You Shall Die!", aoe: "5 Circle", hits: 3, type: "Spa-Followup", 
    description: "When attacking a Frozen enemy, 100% chance of immediately following up with Move 1, with additional followups having diminishing 15% chance. (Average of 2.94 followups, double this to account for the doppelganger)", 
    multiplier: 2.94, image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},

    {name: "Meter", aoe: "None", hits: 1, type: "Meter", description: "Average time to fill 100% meter for Devil Trigger that lasts 30s <br> (Filled by followups, average of 2.94 followups per attack. Refer to <a class='spark' href='https://docs.google.com/document/d/1La1aTug410auAXXGcgms7KJ33vuYHSphL_nmHJSXz40'>here</a> for more info)", 
    multiplier: 1, image: "Images/Familiars/BlackSpirit.webp", gradient: "rare"},
  ],

  Luce: [
    {name: "Followup", aoe: "Full", hits: 5, type: "Condition-Followup", description: "Follows up every time a Dave in range attack for 100% Dmg (10s cd)", 
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
  ],

  Ken: [
    {name: "Bleed", aoe: "Single", hits: 10, type: "Dot", description: "Attacks inflict bleed equal to 10% of this units damage over 10s per attack", 
    multiplier: 0.1, image: "Images/Abilities/Bleed.webp", gradient: "secret"},
  ],

  Makoso: [
    {name: "Fated Lover", aoe: "22 Circle", hits: 1, type: "Spa-Followup", 
    description: "If Arin is on the field, this unit follows up for 100% Dmg attacking the same target he does.", 
    multiplier: 1, image: "Images/Units/Arin.webp", gradient: "mythic"},
  ],

  Brisket: [
    {name: "Yo-Yo Follow Up!", aoe: "Not Sure", hits: 1, type: "Nuke", 
    description: "Use 50% meter to do attack 4 for 200% Dmg. (Best use is to use off cd for avg of 5/2.5 attacks to charge with/out Spirit)", 
    multiplier: 2, image: "Images/Abilities/Yo-Yo_Follow_Up_Ability.webp", gradient: "mythic"},

    {name: "Meter", aoe: "None", hits: 1, type: "Meter", description: "Average time to fill 100% meter", 
    multiplier: 1, image: "Images/Familiars/BlackSpirit.webp", gradient: "rare"},
  ],

  GearBoy: [
    {name: "Meter", aoe: "None", hits: 1, type: "Meter", description: "Average time to fill 100% meter", 
    multiplier: 1, image: "Images/Familiars/BlackSpirit.webp", gradient: "rare"},
  ],

  Kazzy: [
    {name: "Burn", aoe: "Single", hits: 6, type: "Dot", description: "Attacks inflict Burn equal to 25% of this unit's DMG over 6s when in Necro form.", 
    multiplier: (finalStats, conditions) => {return conditions["0-1"].active == true ? 0.25 : 0}, image: "Images/Abilities/Burn.png", gradient: "secret"},

    {name: "I Use This to Go Fishing", aoe: "Single", hits: 1, type: "Nuke", 
    description: "When in Undine form, spawns up to 3 bubbles per Kazzy that does 100% Dmg and applies bubbled", 
    multiplier: (finalStats, conditions) => {return conditions["0-1"].active == true ? 0 : 1}, image: "Images/Abilities/Queen_of_Man_Ability.webp", gradient: "mythic"},

    {name: "Meter", aoe: "None", hits: 1, type: "Meter", description: "Average time to fill 100% meter", 
    multiplier: 1, image: "Images/Familiars/BlackSpirit.webp", gradient: "rare"},
  ],

  NotGoodGuy: [
    {name: "Burn", aoe: "Single", hits: 5, type: "Dot", description: "Attacks inflict Burn equal to 30% of this unit's DMG over 5s (Double this to account for followup)", 
    multiplier: 0.3, image: "Images/Abilities/Burn.png", gradient: "secret"},

    {name: "Followup", aoe: "35° Cone", hits: 1, type: "Spa-Followup", description: "Anytime this unit attacks a burning enemy, Follow Up with attack 1 for 100% Dmg (4s cd).", 
    multiplier: 1, image: "Images/Abilities/Hell_Ability.webp", gradient: "mythic"},

    {name: "On Kill Burn", aoe: "Single", hits: 4, type: "Conditional-Dot", description: "During Dragon Install, Kills inflict Burn equal to 30% of this unit's (4s cd)", 
    multiplier: (finalStats, conditions) => {return conditions["0-0"].active == true ? 0.3 : 0}, image: "Images/Abilities/Dragon_Install_Ability.webp", gradient: "secret"},

    {name: "Meter", aoe: "None", hits: 1, type: "Meter", description: "Average time to fill 100% meter for Dragon Install that takes 25s to drain 100% (Toggle off DI for accurate numbers)", 
    multiplier: 1, image: "Images/Familiars/BlackSpirit.webp", gradient: "rare"},
  ],

  Rohan: [
    {name: "Followups", aoe: "12 Circle", hits: 3, type: "Spa-Followup", 
    description: "Anytime this unit crits on the first hit of its attack follows up with attack 2 for 100% Dmg", 
    multiplier: (finalStats, conditions) => {const crit = finalStats.crit / 100; return crit}, 
    image: "Images/Abilities/Spa_Followup.webp", gradient: "epic"},
  ],

  Kempache: [
    {name: "Feral Rage", aoe: "Full", hits: 4, type: "Condition-Followup", description: "Lets out a roar any time this unit gets stunned for 80% of their damage in a Full AoE", 
    multiplier: 0.8, image: "Images/Abilities/Conditional_Followup.webp", gradient: "rare"},
  ],

  Kiskae: [
    {name: "Bleed", aoe: "Single", hits: 4, type: "Dot", description: "Attacks inflict bleed equal to 25% of this units damage over 4s per attack", 
    multiplier: 0.25, image: "Images/Abilities/Bleed.webp", gradient: "secret"},
  ],

  Lilia: [
    {name: "Berserker Summon", aoe: "Single", hits: 1, type: "Summon", description: "Summons a Berserker summon that has 2x this units Dmg as hp, gaining 5% per summon up to 4x", 
    multiplier: 2, image: "Images/Units/Lilia.webp", gradient: "mythic"},
  ],

  Medusa: [
    {name: "Bleed", aoe: "Single", hits: 4, type: "Dot", description: "Attacks inflict bleed equal to 30% of this units damage over 4s per attack", 
    multiplier: 0.3, image: "Images/Abilities/Bleed.webp", gradient: "secret"},
  ],

  Giro: [
    {name: "Spin, Spin!", aoe: "5 Circle", hits: 4, type: "Condition-Followup", 
    description: "Landing an attack causes a Steel Ball to drop, dealing 20% of this unit's DMG over 4 seconds. (Drops 2 during Golden State)", 
    multiplier: 0.2, image: "Images/Abilities/Conditional_Followup.webp", gradient: "rare"},
  ],

  Chaso: [
    {name: "Bleed", aoe: "Single", hits: 6, type: "Dot", description: "Attacks inflict bleed equal to 35% of this units damage over 6s per attack", 
    multiplier: 0.35, image: "Images/Abilities/Bleed.webp", gradient: "secret"},
  ],

  Jago: [
    {name: "Burn", aoe: "Single", hits: 6, type: "Dot", description: "Attacks inflict Burn equal to 30% of this unit's DMG over 6s", 
    multiplier: 0.3, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  ChaIn: [
    {name: "Dance! Dance! Dance!", aoe: "270° Cone", hits: 1, type: "Condition-Followup", description: "Inflicts an extra instance of Dmg after performing a dodge, equal to 65% of her Dmg.", 
    multiplier: 0.65, image: "Images/Abilities/Conditional_Followup.webp", gradient: "rare"},
  ],

  Obita: [
    {name: "Burn", aoe: "Single", hits: 6, type: "Dot", description: "Attacks inflict Burn equal to 30% of this unit's DMG over 6s", 
    multiplier: 0.3, image: "Images/Abilities/Burn.png", gradient: "secret"},
  ],

  SongJinwu: [
    {name: "Arise", aoe: "Single", hits: 1, type: "Summon", description: "Summons 5 Statues when activating Arise each having 1x this unit's Dmg as hp", 
    multiplier: 1, image: "Images/Abilities/Arise_Ability.webp", gradient: "mythic"},
  ],
}