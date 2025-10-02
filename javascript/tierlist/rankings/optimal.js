const optimalRankings = {
  t0: {
    name: "T0",

    categories: {
      carry: [
        { id: "SukonoFamiliar", trait: "Monarch", description: "Cleave / Full Aoe Followup" },
        { id: "BrolziSuper", trait: "Monarch", description: "Crit Demon / Full aoe Followup" },
        { id: "RogitaSuper", trait: "Monarch", description: "Crit Sharing / Highest Potential Dps" },
        { id: "TheFalcon", trait: "Monarch", description: "Self-Max / Jack of All Trades" },
        { id: "Yehowach", trait: "Monarch", description: "Cheap / Absurd Range" },
      ],

      subDamage: [
        { id: "TengonFamiliar", trait: "Monarch", description: "Blast and Fire Buffer / Scorched" },
        { id: "Koguro", trait: "Monarch", description: "Domains / Nuke / Teleport" },
        { id: "GujoFamiliar", trait: "Monarch", description: "Timestop / Inf Range Attack 3" },
        { id: "TheStruggler", trait: "Monarch", description: "Berserker Armor" },
        { id: "Vsjw", trait: "Monarch", description: "Summons / Nuke" },
        { id: "MonkeyKing", trait: "Monarch", description: "All Groups / Clones" },
      ],

      support: [
        { id: "Newsman", trait: "Marksman", description: "Bubbled / Snails" },
        { id: "Alocard", trait: "Marksman", description: "Wounded / Bleed" },
        { id: "Byeken", trait: "Marksman", description: "Tethered / Repulse / Pull" },
        { id: "GujoFamiliar", trait: "Solar", description: "Stun / Timestop" },
      ],

      utility: [
        { id: "Iscanur", trait: "Monarch", description: "Auto-Unit / Nuke / Self-Cleanse" },
        { id: "GilgameshFamiliar", trait: "Monarch", description: "Execute / Nuke / CC" },
        { id: "Vsjw", trait: "Deadeye", description: "Scaling Summons" },
        { id: "BrolziSuper", trait: "Deadeye", description: "Unbound Crit Buffer / Full aoe Rupture" },
        { id: "GoblinKiller", trait: "Deadeye", description: "Rupture / Traps" },
        { id: "TheSmith", trait: "Fortune", description: "Masterworks" },
      ]
    }
  },

  t0p5: {
    name: "T0.5",

    categories: {
      carry: [
        { id: "TheKing", trait: "Monarch", description: "Teleport / Flip Debuff " },
        { id: "SmithJohn", trait: "Monarch", description: "Nuke / Great Aoes" },
        { id: "Dawntay", trait: "Monarch", description: "Devil Trigger / Crit" },
        { id: "Byeken", trait: "Monarch", description: "On-Kill Followup / CC" },
      ],

      subDamage: [
        { id: "GG", trait: "Monarch", description: "High Burst / Cleanser" },
        { id: "Wolf", trait: "Monarch", description: "Slow / Chases Leaks / Guaranteed Crit" },
        { id: "Conqueror", trait: "Monarch", description: "High Range / Multi Attack" },
        { id: "Lfelt", trait: "Monarch", description: "Burst Dps / Love Shot" },
        { id: "LordFriezo", trait: "Monarch", description: "Placeable Minions" },
        { id: "Leo", trait: "Monarch", description: "Scaling Burn / Hellfire Incarnate" },
      ],

      support: [
        { id: "Wolf", trait: "Solar", description: "Long Slow / Chases Leaks" },
        { id: "Clatakiri", trait: "Ethereal", description: "Slow / Chase" },
        { id: "Kazzy", trait: "Solar", description: "Bubbled / Freeze" },
        { id: "Ken", trait: "Marksman", description: "Bleed / Slow" },
      ],

      utility: [
        { id: "Astolfo", trait: "Marksman", description: "Spellbook / Spear / Repulse" },
        { id: "Roku", trait: "Ethereal", description: "Slow / Stun / Rupture" },
        { id: "Rohan", trait: "Monarch", description: "Free Placement" },
        { id: "TheWitch", trait: "Marksman", description: "Nullify" },
        { id: "Al", trait: "Marksman", description: "Cleanse / Buffer" },
      ]
    }
  },

  t1: {
    name: "T1",

    categories: {
      carry: [
        { id: "Eizan", trait: "Monarch", description: "Aura / Wall" },
        { id: "Yomomata", trait: "Monarch", description: "Insane Summoner / Early Full Aoe" },
        { id: "Rogita", trait: "Monarch", description: "Teleport" },
        { id: "DarkMage", trait: "Monarch", description: "High DoT Damage" },
        { id: "Reimu", trait: "Monarch", description: "Cheap / Luck Boost" },
        { id: "NotGoodGuy", trait: "Monarch", description: "Dragon Install" },
      ],

      subDamage: [
        { id: "Quetzalcoatl", trait: "Monarch", description: "Buffer / Cycles Attacks" },
        { id: "Hei", trait: "Monarch", description: "Black Flames" },
        { id: "Zak", trait: "Monarch", description: "Burst Damage / Rumbling" },
        { id: "Vigil", trait: "Monarch", description: "Devil Trigger / Follow-ups" },
        { id: "Ali", trait: "Monarch", description: "Burn Detonate" },
        { id: "Arin", trait: "Monarch", description: "Rumbling / Buy 1 Get 2 Free" },
      ],

      support: [
        { id: "Priestess", trait: "Solar", description: "Slow / Stun / Cleanse" },
        { id: "Aurin", trait: "Fortune", description: "Buffer / Cost Reduction" },
        { id: "Isdead", trait: "Solar", description: "Freeze / Mahokorada" },
        { id: "Kiskae", trait: "Ethereal", description: "Stun / Wounded" },
        { id: "Foboko", trait: "Marksman", description: "Buffer / Freeze" },
        { id: "Diogo", trait: "Fortune", description: "Timestop" },
      ],

      utility: [
        { id: "Boohon", trait: "Fortune", description: "Summons / Crit Buffer" },
        { id: "Hercool", trait: "Fortune", description: "CritDmg Buffer" },
        { id: "Hebano", trait: "Marksman", description: "Burn Reapply / Scorched" },
        { id: "DarkMage", trait: "Solar", description: "Slow / Bleed / Diseased" },
        { id: "GiantQueen", trait: "Fortune", description: "Rumbling / Group Buffer" },
        { id: "Luce", trait: "Marksman", description: "Nullify" },
      ]
    }
  },

  t1p5: {
    name: "T1.5",

    categories: {
      carry: [
        { id: "Ichiga", trait: "Monarch", description: "Cheap / All Groups" },
        { id: "GearBoy", trait: "Monarch", description: "Meat Stocks / Cheap" },
        { id: "KidBoo", trait: "Monarch", description: "" },
        { id: "Salter", trait: "Monarch", description: "Slow Field / Early Full Aoe" },
        { id: "Yuruicha", trait: "Monarch", description: "Cheap / Stun" },
      ],

      subDamage: [
        { id: "Slime", trait: "Ethereal", description: "Cost Reduction / Great Sage" },
        { id: "Divalo", trait: "Monarch", description: "Complete Erasure" },
        { id: "ChoyJongEn", trait: "Deadeye", description: "Intense Burn" },
        { id: "Arc", trait: "Monarch", description: "Jack of all Trades" },
      ],

      support: [
        { id: "Emmie", trait: "Solar", description: "Freeze" },
        { id: "Divalo", trait: "Marksman", description: "Complete Erasure" },
        { id: "Arc", trait: "Ethereal", description: "Bleed / Repulse / Slow" },
      ],

      utility: [
        { id: "Sokora", trait: "Blitz", description: "Spa Averaging" },
        { id: "Riner", trait: "Ethereal", description: "Free Placements / Shield Stocks" },
        { id: "Rudie", trait: "Marksman", description: "Buffer" },
        { id: "Soburo", trait: "Marksman", description: "Buffer / Ability Buff" },
      ]
    }
  },

  t2: {
    name: "T2",

    categories: {
      carry: [
        { id: "Dave", trait: "Monarch", description: "Early Full Aoe" },
        { id: "Saber", trait: "Monarch", description: "Repulse" },
        { id: "Deruta", trait: "Monarch", description: "Early Full Aoe / Infinite Range" },
        { id: "RomandRan", trait: "Monarch", description: "Early Full Aoe" },
      ],

      subDamage: [
        { id: "Gilgamesh", trait: "Monarch", description: "Execute / Nuke" },
        { id: "Brisket", trait: "Monarch", description: "Teleport" },
        { id: "Regnaw", trait: "Ethereal", description: "Generational Knowledge" },
      ],

      support: [
        { id: "Sakuya", trait: "Marksman", description: "Timestop" },
        { id: "Salter", trait: "Marksman", description: "Slow Field" },
        { id: "Julias", trait: "Blitz", description: "3s Freeze" },
      ],

      utility: [
        { id: "HarukaRin", trait: "Marksman", description: "Buffer" },
        { id: "Todu", trait: "Marksman", description: "Teleport" },
        { id: "Orehimi", trait: "Fortune", description: "Buffer / Cleanser" },
        { id: "Gazelle", trait: "Fortune", description: "Summon Buffer" },
        { id: "Archer", trait: "Marksman", description: "Blast Domain Buff" },
        { id: "CuChulainn", trait: "Ethereal", description: "Rupture" },
      ]
    }
  },

  t3: {
    name: "T3",

    categories: {
      carry: [
        { id: "Friran", trait: "Monarch", description: "Teleport" },
        { id: "Tengon", trait: "Monarch", description: "Full Aoe" },
        { id: "Sukono", trait: "Monarch", description: "Cleave" },
      ],

      subDamage: [
        { id: "Chaso", trait: "Monarch", description: "Bleed" },
      ],

      support: [
        { id: "Karem", trait: "Marksman", description: "Frostburn" },
        { id: "Sosuke", trait: "Blitz", description: "Stun" },
        { id: "Dodara", trait: "Blitz", description: "Stun" },
      ],

      utility: [
        { id: "Oryo", trait: "Monarch", description: "Infinite Range" },
        { id: "Renguko", trait: "Blitz", description: "Purgatory Flames" },
        { id: "Medea", trait: "Fortune", description: "Oathbreaker" },
        { id: "Tuji", trait: "Marksman", description: "Shield Breaker" },
      ]
    }
  },

  t4: {
    name: "T4",

    categories: {
      carry: [
        { id: "Lilia", trait: "Monarch", description: "Berserker" },
        { id: "Sosora", trait: "Monarch", description: "" },
        { id: "Igros", trait: "Monarch", description: "Full Aoe" },
        { id: "ChaIn", trait: "Deadeye", description: "Counter / Crit" },
        { id: "Jago", trait: "Monarch", description: "Burn" },
      ],

      subDamage: [
        { id: "SongJinwu", trait: "Monarch", description: "Summons" },
        { id: "Akazo", trait: "Monarch", description: "Compass Needle" },
        { id: "Giro", trait: "Monarch", description: "Steel Ball" },
        { id: "Valentine", trait: "Monarch", description: "Clones" },
        { id: "Zion", trait: "Monarch", description: "Burn" },
      ],

      support: [
        { id: "Kempache", trait: "Marksman", description: "Slow" },
        { id: "Medusa", trait: "Fortune", description: "Petrified" },
        { id: "Johnni", trait: "Blitz", description: "Infinite Spin" },
      ],

      utility: [
        { id: "VogitaSuper", trait: "Ethereal", description: "" },
        { id: "Ishtar", trait: "Fortune", description: "Fate Buffer" },
        { id: "Marlin", trait: "Fortune", description: "Absolute Negation" },
      ]
    }
  },

  t5: {
    name: "T5",

    categories: {
      carry: [
        { id: "Okorun", trait: "Monarch", description: "DDD" },
        { id: "Obita", trait: "Monarch", description: "Burn" },
      ],

      subDamage: [
        { id: "Noruto", trait: "Monarch", description: "" },
        { id: "Pweeny", trait: "Monarch", description: "DDD" },
        { id: "Saiko", trait: "Monarch", description: "DDD / Burn" },
        { id: "Mimi", trait: "Monarch", description: "DDD" },
      ],

      support: [
      ],

      utility: [
      ]
    }
  },
}