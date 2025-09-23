const buffData = {
  Worldlines: {
    name: "Worldlines Weather", description: "Worldlines elemental buffs increase Dmg by +20%-150% and debuffs decrease by -50%-100%", background: "secret",
    image: "Images/Units/Conqueror.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Slider", minRange: -100, maxRange: 150, step: 1, buffs: [1, 0, 0, 0, 0, 0]
      }
    ]
  },

  HarukaRin: {
    name: "Haruka Rin", description: "+3% Dmg per wave, up to +18%. After 6 waves +10% Rng.", image: "Images/Units/HarukaRin.webp", background: "exclusive",
    multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "6 waves", buffs: [0, 0, 10, 0, 0, 0]
      },

      {
        multiplicative: false, type: "Slider", minRange: 0, maxRange: 18, step: 3, buffs: [1, 0, 0, 0, 0, 0]
      },
    ]
  },

  Orehimi: {
    name: "Orehimi", description: "Attaches hairpins to allies that grant +15% Dmg", image: "Images/Units/Orehimi.webp", background: "mythic",
    multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Hairpin is attached", buffs: [15, 0, 0, 0, 0, 0]
      },
    ]
  },

  Soburo: {
    name: "Soburo", description: "Buffs all allies in range by +10% Dmg and 8% Rng. Slider is for additional 10% buffs", image: "Images/Units/Soburo.webp",
    background: "exclusive", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Unit is in range", buffs: [10, 0, 8, 0, 0, 0]
      },

      {
        multiplicative: false, type: "Slider", minRange: 0, maxRange: 20, step: 10, buffs: [1, 0, 0, 0, 0, 0]
      },
    ]
  },

  Rudie: {
    name: "Rudie", description: "When mana falls below 10% buff all allies in range by +15% Dmg and +10% Rng for 30 seconds.", background: "exclusive",
    image: "Images/Units/Rudie.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Unit is in range", buffs: [15, 0, 10, 0, 0, 0]
      }
    ]
  },

  Al: {
    name: "Al", description: "Anytime this unit cleanses a debuff or status effect from an ally, buff that ally by 25% Dmg and 10% Rng for 30 seconds.",
    background: "exclusive", image: "Images/Units/Al.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Debuff gets cleansed", buffs: [25, 0, 10, 0, 0, 0]
      }
    ]
  },

  Astolfo: {
    name: "Astolfo",
    description: "For every enemy hit by this units active, buff all allies in range by 1% Dmg and 0.5% Rng (Up to 20% and 10%). (Spellbook doubles this cap)",
    background: "secret", image: "Images/Units/Astolfo.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Slider", minRange: 0, maxRange: 40, step: 1, buffs: [1, 0, 0.5, 0, 0, 0]
      }
    ]
  },

  Foboko: {
    name: "Foboko",
    description: "Reduces the Spa of all allies in range by 5%",
    background: "secret", image: "Images/Units/Foboko.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Unit is in range", buffs: [0, 5, 0, 0, 0, 0]
      }
    ]
  },

  Hercool: {
    name: "Hercool", description: "Anytime this unit crits buffs all allies in range by 10% Dmg and +15% CritDmg. Doubled for DBZ units",
    background: "mythic", image: "Images/Units/Hercool.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Slider", minRange: 0, maxRange: 20, step: 10, buffs: [1, 0, 0, 0, 1.5, 0]
      }
    ]
  },

  Boohon: {
    name: "Boohon", description: "Buffs all DBZ units in range by +10% Dmg and +30% Crit chance.",
    background: "secret", image: "Images/Units/Boohon.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "DBZ Units", buffs: [10, 0, 0, 30, 0, 0]
      }
    ]
  },

  Wounded: {
    name: "Wounded", description: "Makes enemies take 20% more damage", image: "Images/Units/Alocard.webp", background: "secret", multiplicative: true,
    conditions: [
      {
        multiplicative: true, type: "Static", statement: "Enemy is bleeding in range", buffs: [20, 0, 0, 0, 0, 0]
      }
    ]
  },

  Bubbled: {
    name: "Bubbled", description: "For the next attack, the enemy takes 30% more Dmg", image: "Images/Units/Kazzy.webp", background: "mythic", multiplicative: true,
    conditions: [
      {
        multiplicative: true, type: "Static", statement: "Enemy has the debuff", buffs: [30, 0, 0, 0, 0, 0]
      }
    ]
  },

  Esdeath: {
    name: "Isdead", description: "During Mahokorada, marked units do 100% more Dmg.", image: "Images/Units/Isdead.webp", background: "secret", multiplicative: true,
    conditions: [
      {
        multiplicative: true, type: "Static", statement: "Unit is marked", buffs: [100, 0, 0, 0, 0, 0]
      }
    ]
  },

  Archer: {
    name: "Archer", description: "During Unlimited Forgeries, all enemies take 25% more Dmg as well as 50% more Dmg from blast aliies (stacks).", image: "Images/Units/Archer.webp",
    background: "mythic", multiplicative: true,
    conditions: [
      {
        multiplicative: true, type: "Static", statement: "Blast allies", buffs: [50, 0, 0, 0, 0, 0]
      },

      {
        multiplicative: true, type: "Static", statement: "All allies", buffs: [25, 0, 0, 0, 0, 0]
      },
    ]
  },

  Salter: {
    name: "Salter Debuff", description: "Uncorrupted units within 70% range gain 15% Spa", background: "secret",
    image: "Images/Units/Salter.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Unit is in range", buffs: [0, -15, 0, 0, 0, 0]
      }
    ]
  },

  FireDomain: {
    name: "Fire Domain Buff", description: "For 20s, fire allies gain 30% dmg, 45% if last domain was sand + ice", background: "koguro",
    image: "Images/Abilities/Fire_Domain.png", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Last 2 domains were sand + ice", buffs: [15, 0, 0, 0, 0, 0]
      },

      {
        multiplicative: false, type: "Static", statement: "Fire allies", buffs: [30, 0, 0, 0, 0, 0]
      }
    ]
  },

  IceDomain: {
    name: "Fire Domain Buff", description: "For 20s, water allies gain 30% dmg", background: "koguro",
    image: "Images/Abilities/Ice_Domain.png", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Water allies", buffs: [30, 0, 0, 0, 0, 0]
      }
    ]
  },

  SandDomainBlast: {
    name: "Sand Domain Blast Buff", description: "For 20s, blast allies gain 30% more Dmg, 45% if last domain was sand + ice", background: "koguro",
    image: "Images/Abilities/Sand_Domain.png", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Last 2 domains were sand + ice", buffs: [15, 0, 0, 0, 0, 0]
      },

      {
        multiplicative: false, type: "Static", statement: "Blast allies", buffs: [30, 0, 0, 0, 0, 0]
      }
    ]
  },

  SandDomain: {
    name: "Sand Domain Normal Buff", description: "For 20s, all allies gain 30% more Dmg if last domain was ice, 45% if it was sand + ice", background: "koguro",
    image: "Images/Abilities/Sand_Domain.png", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Last 2 domains were sand + ice", buffs: [15, 0, 0, 0, 0, 0]
      },

      {
        multiplicative: false, type: "Static", statement: "All allies", buffs: [30, 0, 0, 0, 0, 0]
      }
    ]
  },

  Lfelt: {
    name: "Lfelt", description: "Heavy Metal Wife: Anytime a Video Game character uses meter or gauge, increase their Dmg by 30% for 1 attack.",
    background: "secret", image: "Images/Units/Lfelt.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Video Game unit", buffs: [30, 0, 0, 0, 0, 0]
      }
    ]
  },

  Yehowach: {
    name: "Yehowach", description: "Ashfallen either buffs all units in range by 15% Dmg, or debuffs them by 20% Dmg and 10% Rng",
    background: "secret", image: "Images/Units/Yehowach.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Debuff Mode (Toggle buff off)", buffs: [-20, 0, -10, 0, 0, 0]
      },

      {
        multiplicative: false, type: "Static", statement: "Buff Mode (Toggle debuff off)", buffs: [15, 0, 0, 0, 0, 0]
      }
    ]
  },

  Foo: {
    name: "Foo", description: "When equiped on an ally that buffs also gives a +2% to 10% (15% c3) Dmg buff for the furation for the buff.",
    background: "mythic", image: "Images/Familiars/Foo.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Slider", minRange: 0, maxRange: 15, step: 0.1, buffs: [1, 0, 0, 0, 0, 0]
      },
    ]
  },

  Ishtar: {
    name: "Ishtar", description: "All fate units in range gain 12% Dmg",
    background: "mythic", image: "Images/Units/Ishtar.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Fate allies", buffs: [12, 0, 0, 0, 0, 0]
      },
    ]
  },

  Hebano: {
    name: "Hebano", description: "Enemies take 20% more Dmg from Fire allies",
    background: "exclusive", image: "Images/Units/Hebano.webp", multiplicative: true,
    conditions: [
      {
        multiplicative: true, type: "Static", statement: "Fire allies", buffs: [20, 0, 0, 0, 0, 0]
      },
    ]
  },

  Renguko: {
    name: "Renguko", description: "Enemies inflicted with Purgatory Flames receive 25% more Burn Dmg.",
    background: "exclusive", image: "Images/Units/Renguko.webp", multiplicative: true,
    conditions: [
      {
        multiplicative: true, type: "Static", statement: "Burn Buff", buffs: [0, 0, 0, 0, 0, 0], otherBuffs: [0, 25, 0]
      },
    ]
  },

  Sukono: {
    name: "Sukono", description: "Enemies inflicted with Cleave receive 20% more Bleed Dmg.",
    background: "secret", image: "Images/Units/Sukono.webp", multiplicative: true,
    conditions: [
      {
        multiplicative: true, type: "Static", statement: "Bleed Buff", buffs: [0, 0, 0, 0, 0, 0], otherBuffs: [0, 0, 20]
      },
    ]
  },

  DarkMage: {
    name: "Dark Mage", description: "Enemies inflicted with Diseased receive 50% more DoT Dmg.",
    background: "exclusive", image: "Images/Units/DarkMage.webp", multiplicative: true,
    conditions: [
      {
        multiplicative: true, type: "Static", statement: "DoT Buff", buffs: [0, 0, 0, 0, 0, 0], otherBuffs: [0, 50, 50]
      },
    ]
  },

  Gazelle: {
    name: "Gazelle", description: "Buffs any summons max HP by 1% for every summon on track. (up to 50%)",
    background: "mythic", image: "Images/Units/Gazelle.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Slider", minRange: 0, maxRange: 50, step: 1, buffs: [0, 0, 0, 0, 0, 0], otherBuffs: [1, 0, 0]
      },
    ]
  },

  GiantQueen: {
    name: "Giant Queen", description: "Buffs all Giant category allies on the field by 40% Dmg. 2nd passive buffs by 100% Dmg and 30% Rng for 40s when sold",
    background: "secret", image: "Images/Units/GiantQueen.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Giant Ally", buffs: [40, 0, 0, 0, 0, 0]
      },

      {
        multiplicative: false, type: "Static", statement: "When Sold", buffs: [100, 0, 30, 0, 0, 0]
      },
    ]
  },

  Arin: {
    name: "Arin", description: "Buffs all Giant category allies (excluding this unit) in range by 30% Dmg and 20% Rng for 120s.",
    background: "secret", image: "Images/Units/Arin.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Giant Ally", buffs: [30, 0, 20, 0, 0, 0]
      },
    ]
  },

  Zak: {
    name: "Zak", description: "For the first 3 times this unit is placed, buff all giant category allies by +60% Dmg for 120s.",
    background: "mythic", image: "Images/Units/Zak.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Giant Ally", buffs: [60, 0, 0, 0, 0, 0]
      },
    ]
  },

  Aurin: {
    name: "Aurin", description: "Buffs by reducing upgrade costs by 10% and Dmg by 20%",
    background: "mythic", image: "Images/Units/Aurin.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "When Place on Marks", buffs: [20, 0, 0, 0, 0, 0]
      },
    ]
  },

  Quetzalcoatl: {
    name: "Quetzalcoatl", description: "Buffs all fire allies in range by 20% Dmg.",
    background: "exclusive", image: "Images/Units/Quetzalcoatl.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Fire Allies", buffs: [20, 0, 0, 0, 0, 0]
      },
    ]
  },

  TheFalcon: {
    name: "The Falcon (Of Sacrifice)", description: "Buffs all allies in range by 40% Dmg. Debuffs Branded allies by 20%",
    background: "secret", image: "Images/Units/TheFalcon.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Allies in Range", buffs: [40, 0, 0, 0, 0, 0]
      },

      {
        multiplicative: false, type: "Static", statement: "Branded Allies", buffs: [-20, 0, 0, 0, 0, 0]
      },
    ]
  },

  TheWitch: {
    name: "The Witch", description: "Buffs allies by 50% Dmg when stunned for the duration of said stun",
    background: "mythic", image: "Images/Units/TheWitch.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "When Stunned", buffs: [50, 0, 0, 0, 0, 0]
      },
    ]
  },

  TheSmithForge: {
    name: "The Smith Basic Weapons", description: "Each weapon buffs allies by 25% Dmg / 20% Rng / 10% Spa (Only 1 can be equipped at a time)",
    background: "mythic", image: "Images/Units/TheSmith.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Sword (Dmg)", buffs: [25, 0, 0, 0, 0, 0]
      },

      {
        multiplicative: false, type: "Static", statement: "Spear (Rng)", buffs: [0, 0, 20, 0, 0, 0]
      },

      {
        multiplicative: false, type: "Static", statement: "Dagger (Spa)", buffs: [0, 10, 0, 0, 0, 0]
      },
    ]
  },

  TheSmithDragonslayer: {
    name: "Dragonslayer", description: "Buffs Dmg by 40% and buffs DoTs by 20% (Only 1 can exist and can't be equiped with basic weapons)",
    background: "rogita", image: "Images/Units/TheSmith.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Toggle Buff", buffs: [40, 0, 0, 0, 0, 0], otherBuffs: [20, 0, 0]
      },
    ]
  },

  TheSmithSalamanderDagger: {
    name: "Salamander Dagger", description: "Buffs Rng by 20% and buffs Dmg to burning enemies by 20% (Only 1 can exist and can't be equiped with basic weapons)",
    background: "divalo", image: "Images/Units/TheSmith.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Toggle Buff", buffs: [0, 0, 20, 0, 0, 0]
      },

      {
        multiplicative: false, type: "Static", statement: "Enemy is burning", buffs: [20, 0, 0, 0, 0, 0]
      },
    ]
  },

  TheSmithSOA: {
    name: "Sword of Actuation", description: "Buffs Spa by 10% and buffs Dmg by 20% (Only 1 can exist and can't be equiped with basic weapons)",
    background: "gujo", image: "Images/Units/TheSmith.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Toggle Buff", buffs: [20, 10, 0, 0, 0, 0]
      },
    ]
  },

  SukonoFamiliar: {
    name: "Sukono Familiar", description: "Buffs all Curse allies in range by 30% Dmg.",
    background: "sukono", image: "Images/Units/Sukono.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Curse Allies", buffs: [30, 0, 0, 0, 0, 0]
      },
    ]
  },

  BrolziSuper: {
    name: "Brolzi Super", description: "Buffs all Unbound allies by 20% Crit per wave up to 100% and CritDmg by 10% after 7 waves up to 80%.",
    background: "brolzisuper", image: "Images/Units/BrolziSuper.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Slider", minRange: 0, maxRange: 100, step: 10, buffs: [0, 0, 0, 1, 0, 0],
      },

      {
        multiplicative: false, type: "Slider", minRange: 0, maxRange: 80, step: 10, buffs: [0, 0, 0, 0, 1, 0],
      },
    ]
  },

  RogitaSuper: {
    name: "Rogita Super", description: "Anytime Rogita crits, buffs all Fused units' Crit by 50%",
    background: "secret", image: "Images/Units/RogitaSuper.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Fused Allies", buffs: [0, 0, 0, 50, 0, 0]
      },
    ]
  },

  TengonFamiliar: {
    name: "Tengon Familiar", description: "Buffs all Blast and Fire allies in range by 30% Dmg. Attacks also apply Scorched.",
    background: "tengon", image: "Images/Units/Tengon.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Blast and Fire Allies", buffs: [30, 0, 0, 0, 0, 0]
      },

      {
        multiplicative: true, type: "Static", statement: "Scorched Fire Buff", buffs: [20, 0, 0, 0, 0, 0]
      },
    ]
  },
}