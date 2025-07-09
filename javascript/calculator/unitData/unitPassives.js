let unitPassives = {
  Koguro: [
    {
      name: "Master of Dimensions", upgrade: 0,
      conditions: [
        {
          description: "When this unit activates a new dimension, increases Dmg by 20% and Rng by 10%. (Up to 60% and 30% then resets)", type: "Slider", min: 0, max: 60, step: 20,
          multiplicative: false, buffs: [1, 0, 0.5, 0, 0, 0]
        }
      ]
    },

    {
      name: "Elemental Affinity", upgrade: 0,
      conditions: [
        {
          description: "Gain +50% Dmg for the duration of the domain.", type: "Statement", statement: "Domain element matches currently on team.",
          multiplicative: false, buffs: [50, 0, 0, 0, 0, 0]
        },
      ]
    },

    { name: "Domains", upgrade: 0, conditions: [{ description: "Use Buffs tab for Dmg buffs from fire and sand Domain", type: "None" }] },
  ],

  Vsjw: [
    {
      name: "The Army's Supply", upgrade: 0,
      conditions: [
        {
          description: "Anytime mana is lost, Dmg is buffed by 0.5%. (Up to +30.0%)", type: "Slider", min: 0, max: 30, step: 0.5,
          multiplicative: false, buffs: [1, 0, 0, 0, 0, 0]
        }
      ]
    },

    {
      name: "The General", upgrade: 0,
      conditions: [
        {
          description: "Anytime an allied summon dies in this units range, increases Dmg by +5.0% (Up to 50.0%); Resets after each unit attack.",
          multiplicative: false, type: "Slider", min: 0, max: 50, step: 5, buffs: [1, 0, 0, 0, 0, 0]
        },

        {
          description: "This unit gains +20.0% Rng and +30.0% Dmg.", type: "Statement", statement: "None of this unit's summons are on the track",
          multiplicative: false, buffs: [30, 0, 20, 0, 0, 0]
        }
      ]
    },

    {
      name: "The Monarch", upgrade: 0,
      conditions: [
        {
          description: "This unit's summons gain additional health based on the % of current mana remaining at the time of their summoning.",
          multiplicative: false, type: "Slider", min: 0, max: 100, step: 1, buffs: [0, 0, 0, 0, 0, 1]
        }
      ]
    },

    {
      name: "The System", upgrade: 10,
      conditions: [
        {
          description: "This unit gains 5% Dmg (Up to 50%) everytime the summon Belu kills an enemy",
          multiplicative: false, type: "Slider", min: 0, max: 50, step: 5, buffs: [1, 0, 0, 0, 0, 0]
        }
      ]
    },
  ],

  Divalo: [
    {
      name: "The Court of the King", upgrade: 0,
      conditions: [
        {
          description: 'This unit gains Dmg +15%',
          multiplicative: false, type: 'Statement', statement: "There is a boss on the track", buffs: [15, 0, 0, 0, 0, 0]
        },

        {
          description: 'Dmg +1% every time an enemy is slowed (up to 30%)',
          multiplicative: false, type: 'Slider', min: 0, max: 30, step: 1, buffs: [1, 0, 0, 0, 0, 0]
        }
      ]
    },

    {
      name: "Complete Erasure", upgrade: 4,
      conditions: [
        {
          description: 'This unit gains Dmg and Rng +50%',
          multiplicative: false, type: 'Statement', statement: 'Ability is active', buffs: [50, 0, 50, 0, 0, 0]
        },
      ]
    }
  ],

  Rogita: [
    {
      name: "Gotchya!", upgrade: 0,
      conditions: [
        {
          description: '10% Chance every attack to not attack.',
          multiplicative: true, type: 'Statement', statement: "Idk why you would disable", buffs: [-10, 0, 0, 0, 0, 0]
        },

        {
          description: 'Every attack he does not attack he gains 5% Dmg. (Up to 50%)',
          multiplicative: false, type: 'Slider', min: 0, max: 50, step: 5, buffs: [1, 0, 0, 0, 0, 0]
        }
      ]
    },

    {
      name: "Instant Teleportation", upgrade: 0,
      conditions: [
        {
          description: 'Decrease Spa by 20% for 20s.',
          multiplicative: false, type: 'Statement', statement: "Instant Teleportation used", buffs: [0, 20, 0, 0, 0, 0]
        },
      ]
    },
  ],

  Conqueror: [
    {
      name: "Collateral Damage", upgrade: 0,
      conditions: [
        {
          description: "every 2 attacks this unit will do a random attack and that attack will deal 120% more Dmg. Goes down by 1 every life lost. (Avg is done by average damage between attacks)",
          multiplicative: true, type: "Slider", min: 1, max: 3, step: 1, getBuffs: (value) => [((((2.2 + (value - 1)) / value) - 1) / value) * 100, 0, 0, 0, 0, 0],
          suffix: " Stocks Left"
        }
      ]
    },

    {
      name: "Unstoppable Conquest", upgrade: 0,
      conditions: [
        {
          description: "Whenever attacks from this unit hits a non-boss enemy, it does 50% more Dmg;", type: "Statement", statement: "Hitting boss",
          multiplicative: true, buffs: [50, 0, 0, 0, 0, 0]
        }
      ]
    },

    {
      name: "Adrenaline Boost", upgrade: 0,
      conditions: [
        {
          description: "For every stock missing increase range by +20%.", type: "Slider", min: 0, max: 2, step: 1, suffix: " Stocks Missing",
          multiplicative: false, buffs: [0, 0, 20, 0, 0, 0]
        }
      ]
    },
  ],

  Slime: [
    {
      name: "Great Sage", upgrade: 0,
      conditions: [
        {
          description: "Gains Active: Great Sage. Once Great Sage has identified an enemy, this unit deals 40% more Dmg to that enemy.", type: "Statement", statement: "Specifically only applies to identified enemy",
          multiplicative: true, buffs: [40, 0, 0, 0, 0, 0], active: false, value: 0
        }
      ]
    },

    {
      name: "Self-Replication", upgrade: 0,
      conditions: [
        {
          description: "For every currently placed copy of this unit that is placed, this unit gains +30% Dmg", type: "Slider", min: 0, max: 4, step: 1, suffix: " Placements",
          multiplicative: false, buffs: [30, 0, 0, 0, 0, 0], active: false, value: 0
        }
      ]
    },
  ],

  Astolfo: [
    {
      name: "Rider of Black", upgrade: 0,
      conditions: [
        {
          description: "Buffs all allies in range by 1% Dmg and 0.5% Rng (Up to 20% and 10%). (Use buffs tab)", type: "None",
        }
      ]
    },

    {
      name: "Protector", upgrade: 0,
      conditions: [
        {
          description: 'Gains +50% Dmg',
          multiplicative: false, type: 'Statement', statement: 'Spellbook on cd', buffs: [50, 0, 0, 0, 0, 0]
        },

        {
          description: 'Gains +30% Rng',
          multiplicative: false, type: 'Statement', statement: 'Hippogriff on cd', buffs: [0, 0, 30, 0, 0, 0]
        },

        {
          description: 'Gains -20% Spa',
          multiplicative: false, type: 'Statement', statement: 'Spear on cd', buffs: [0, 20, 0, 0, 0, 0]
        },
      ]
    }
  ],

  Byeken: [
    {
      name: "Tethered", upgrade: 0,
      conditions: [
        {
          description: "Enemies that are affected by Tethered share 0.1% of the Dmg taken. (Not implemented)", type: "None"
        }
      ]
    },
  ],

  Lfelt: [
    {
      name: "Heavy Metal Wife", upgrade: 0,
      conditions: [
        {
          description: "Anytime a Video Game character uses meter or gauge, increase their Dmg by 30% for 1 attack. (Use buffs section)", type: "None"
        }
      ]
    },

    {
      name: "Singer's Arsenal", upgrade: 0,
      conditions: [
        {
          description: "Buffs this units Dmg and Rng by +50% and +20% for 5s.",
          multiplicative: false, type: 'Statement', statement: 'Previous attack is different from current attack.', buffs: [50, 0, 20, 0, 0, 0]
        },
      ]
    },
  ],

  SmithJohn: [
    {
      name: "Dramatic Entry", upgrade: 0,
      conditions: [
        {
          description: "Buffs this unit's Dmg by 40% for 30s.",
          multiplicative: false, type: 'Statement', statement: 'Activates whenever this unit swaps', buffs: [40, 0, 0, 0, 0, 0]
        },
      ]
    },

    {
      name: "Undercover Agent", upgrade: 0,
      conditions: [
        {
          description: "Does 5% more Dmg every attack on the same enemy",
          multiplicative: true, type: "Slider", min: 0, max: 20, step: 1, buffs: [5, 0, 0, 0, 0, 0], suffix: " Attacks"
        },
      ]
    },

    {
      name: "A Welcome Challenge", upgrade: 0,
      conditions: [
        {
          description: "This unit deals +40% more damage.",
          multiplicative: true, type: 'Statement', statement: 'Target has more hp then this unit', buffs: [40, 0, 0, 0, 0, 0]
        },
      ]
    },
  ],

  LordofShadows: [
    {
      name: "Dramatic Entry", upgrade: 0,
      conditions: [
        {
          description: "Buffs this unit's Rng by 30% for 30s.",
          multiplicative: false, type: 'Statement', statement: 'Activates whenever this unit swaps', buffs: [0, 0, 30, 0, 0, 0]
        },
      ]
    },

    {
      name: "Lord of Shadows", upgrade: 0,
      conditions: [
        {
          description: "Whenever this unit gets a takedown on an enemy, gains +0.5% Dmg and +0.25% Rng. (Up to +100% and +50%)",
          multiplicative: false, type: "Slider", min: 0, max: 100, step: 0.5, buffs: [1, 0, 0.5, 0, 0, 0]
        },
      ]
    },

    {
      name: "Overpower", upgrade: 0,
      conditions: [
        {
          description: "Increases Dmg dealt to the enemy based on the % of their missing HP. (Up to 50%)",
          multiplicative: true, type: "Slider", min: 0, max: 100, step: 1, buffs: [0.5, 0, 0, 0, 0, 0], suffix: "% Missing"
        },
      ]
    },

    {
      name: "All Range Atomic", upgrade: 9,
      conditions: [
        {
          description: "Use this slider for swaps (around 2 every minute with 100% spirit and blitz)",
          multiplicative: false, type: "Slider", min: 0, max: 120, step: 1, buffs: [0, 0, 0, 0, 0, 0], suffix: " Swaps"
        },
      ]
    },
  ],

  Clatakiri: [
    {
      name: "Mochi Mastery", upgrade: 0,
      conditions: [
        {
          description: "When this unit attacks a Slowed enemy, Decreases Spa by 2% (up to 20%)",
          multiplicative: false, type: "Slider", min: 0, max: 20, step: 2, buffs: [0, 1, 0, 0, 0, 0]
        },
      ]
    },
  ],

  SuperVogito: [
    {
      name: "The Strongest Fusion", upgrade: 0,
      conditions: [
        {
          description: "This unit gains +100% Dmg for 40s.",
          multiplicative: false, type: 'Statement', statement: 'On entry', buffs: [100, 0, 0, 0, 0, 0]
        },

        {
          description: "Gain 20% Dmg, decrease SPA by 20% and increase Rng by 20%",
          multiplicative: false, type: 'Statement', statement: '40s have elapsed (Turn the above one off first)', buffs: [20, 20, 20, 0, 0, 0]
        },
      ]
    },

    {
      name: "Alright!", upgrade: 0,
      conditions: [
        {
          description: "Any time this unit is attacked increase Rng by 3% (Up to 30%).",
          multiplicative: false, type: "Slider", min: 0, max: 30, step: 3, buffs: [0, 0, 1, 0, 0, 0]
        },
      ]
    },

    {
      name: "The Prince of Pride", upgrade: 0,
      conditions: [
        {
          description: "This unit gains 40% more Dmg",
          multiplicative: false, type: 'Statement', statement: 'Carried over from Vogita', buffs: [40, 0, 0, 0, 0, 0]
        },
      ]
    },
  ],

  Roku: [
    {
      name: "The Hero Arrives", upgrade: 0,
      conditions: [
        {
          description: "This unit gains 50% more Dmg for 40 seconds",
          multiplicative: false, type: 'Statement', statement: 'On entry from swap', buffs: [50, 0, 0, 0, 0, 0]
        },
      ]
    },

    {
      name: "Here It Comes", upgrade: 0,
      conditions: [
        {
          description: "If no enemy is in range this unit starts gaining Dmg and Rng at a rate of 1% per second (Up to 100%), resets on attack",
          multiplicative: false, type: "Slider", min: 0, max: 100, step: 1, buffs: [1, 0, 1, 0, 0, 0]
        },
      ]
    },

    {
      name: "The Prince of Pride", upgrade: 0,
      conditions: [
        {
          description: "This unit gains 40% more Dmg",
          multiplicative: false, type: 'Statement', statement: 'Carried over from Vogita', buffs: [40, 0, 0, 0, 0, 0]
        },
      ]
    },
  ],

  Vogita: [
    {
      name: "The Villain Arrives", upgrade: 0,
      conditions: [
        {
          description: "This unit gains -30% Spa for 40 seconds",
          multiplicative: false, type: 'Statement', statement: 'On entry from swap', buffs: [0, 30, 0, 0, 0, 0]
        },
      ]
    },

    {
      name: "The Prince of Pride", upgrade: 0,
      conditions: [
        {
          description: "This unit gains 2% more Dmg every attack. (Up to 40%)",
          multiplicative: false, type: "Slider", min: 0, max: 40, step: 1, buffs: [1, 0, 0, 0, 0, 0]
        },
      ]
    },
  ],

  KidBoo: [
    {
      name: "Evil Unleashed", upgrade: 0,
      conditions: [
        {
          description: "For every transformation this unit had before being sold gains +20% Dmg. (Up to 80%)",
          multiplicative: false, type: "Slider", min: 0, max: 4, step: 1, buffs: [20, 0, 0, 0, 0, 0], suffix: " Transformations"
        },
      ]
    },

    {
      name: "Uncontrollable Evil", upgrade: 0,
      conditions: [
        {
          description: "When attacking the highest HP enemy that enemy recieves 30% more Dmg",
          multiplicative: true, type: 'Statement', statement: 'Only applies to 1 target', buffs: [30, 0, 0, 0, 0, 0]
        },
      ]
    },
  ],

  Boohon: [
    {
      name: "Transforming Terror", upgrade: 0,
      conditions: [
        {
          description: "Every transformation gives +15% Dmg and +10% Rng. (Up to 60%)",
          multiplicative: false, type: "Slider", min: 0, max: 4, step: 1, buffs: [15, 0, 10, 0, 0, 0], suffix: " Transformations"
        },
      ]
    },

    {
      name: "PRODUCE!!", upgrade: 0,
      conditions: [
        {
          description: "For every enemy hit by this units attacks increases Dmg by 0.1%. (Up to 30%)",
          multiplicative: false, type: "Slider", min: 0, max: 30, step: 0.1, buffs: [1, 0, 0, 0, 0, 0]
        },
      ]
    },

    {
      name: "Intelligence Gained", upgrade: 0,
      conditions: [
        {
          description: "Buffs all Dragon Sphere units in range by +10% attack and +30% Crit chance. (Use buffs tab)", type: "None"
        },
      ]
    },
  ],

  ChoyJongEn: [
    {
      name: "Infinite Mana", upgrade: 0,
      conditions: [
        {
          description: "For every Intense Burning Enemy, increases Rng by +5% (up to +40%)",
          multiplicative: false, type: "Slider", min: 0, max: 40, step: 5, buffs: [0, 0, 1, 0, 0, 0]
        },
      ]
    },

    {
      name: "Intense Burn Ticks", upgrade: 0,
      conditions: [
        {
          description: "Use this slider for burn ticks (Around 75 ticks per minute)",
          multiplicative: false, type: "Slider", min: 0, max: 75, step: 1, buffs: [0, 0, 0, 0, 0, 0], suffix: " Ticks"
        },
      ]
    },
  ],

  Friran: [
    {
      name: "Height of Magic", upgrade: 0,
      conditions: [
        {
          description: "This unit deals +100% Dmg to enemies",
          multiplicative: true, type: 'Statement', statement: 'Only when attacking overshield', buffs: [100, 0, 0, 0, 0, 0]
        },
      ]
    },

    {
      name: "Collector of Trinkets", upgrade: 0,
      conditions: [
        {
          description: "Each chest collected has a chance to give +3% Dmg, or +1.5% Rng. (Up to +30% and +15%).",
          multiplicative: false, type: "Slider", min: 0, max: 10, step: 1, buffs: [3, 0, 1.5, 0, 0, 0], suffix: " Chests"
        },
      ]
    },

    {
      name: "Wayward Journey", upgrade: 0,
      conditions: [
        {
          description: "When this unit begins its journey increases Dmg and Rng by 4% per second. (Up to +100% and +50%). Loses 5% and 2.5% per attack.",
          multiplicative: false, type: "Slider", min: 0, max: 100, step: 5, buffs: [1, 0, 0.5, 0, 0, 0]
        },
      ]
    },
  ],

  Eizan: [
    {
      name: "Complete Hypnosis", upgrade: 0,
      conditions: [
        {
          description: "-5% SPA per health stock missing.",
          multiplicative: false, type: "Slider", min: 0, max: 10, step: 5, buffs: [0, 1, 0, 0, 0, 0]
        },
      ]
    },

    {
      name: "Dabo Mastery", upgrade: 0,
      conditions: [
        {
          description: "Use this slider for enemies stopped by Dabo 81",
          multiplicative: false, type: "Slider", min: 0, max: 100, step: 1, buffs: [0, 0, 0, 0, 0, 0], suffix: " Enemies"
        },
      ]
    },
  ],

  Yehowach: [
    {
      name: "The Almighty", upgrade: 0,
      conditions: [
        {
          description: "+5% Dmg for every status effect avoided. (Up to 30%)", multiplicative: false, type: "Slider", min: 0, max: 30, step: 5, buffs: [1, 0, 0, 0, 0, 0]
        }
      ]
    },

    {
      name: "Ashfallen", upgrade: 0,
      conditions: [
        {
          description: "+5% Rng every time Ashfallen is used (Up to 20%)", multiplicative: false, type: "Slider", min: 0, max: 20, step: 5, buffs: [0, 0, 1, 0, 0, 0]
        },

        {
          description: "Debuffs all allied units in range by 20% damage and 10% range and gain 10% damage and 6% range per allied unit debuffed by this ability.",
          multiplicative: false, type: "Slider", min: 0, max: 33, step: 1, buffs: [10, 0, 6, 0, 0, 0], suffix: " Units",
        },
      ]
    },
  ],

  Yomomata: [
    {
      name: "Head Captain", upgrade: 0,
      conditions: [
        {
          description: "+10% Dmg and -2% Spa for every burning enemy in this unit's range (up to 30% and 10%).",
          multiplicative: false, type: "Slider", min: 0, max: 30, step: 10, buffs: [1, 0.2, 0, 0, 0, 0]
        }
      ]
    },

    {
      name: "South", upgrade: 0,
      conditions: [
        {
          description: "For every skeleton alive on the track increases Dmg by 2%. (Up to 30%)",
          multiplicative: false, type: "Slider", min: 0, max: 30, step: 2, buffs: [1, 0, 0, 0, 0, 0]
        }
      ]
    },

    {
      name: "Release", upgrade: 0,
      conditions: [
        {
          description: "Increases the Dmg of burn applied to the same enemy by this unit by 1% everytime it is applied to the same enemy. (Not implemented)",
          multiplicative: false, type: "Slider", min: 0, max: 20, step: 1, buffs: [0, 0, 0, 0, 0, 0]
        }
      ]
    },
  ],

  Sukono: [
    {
      name: "King's Curse", upgrade: 0,
      conditions: [
        {
          description: "Attacks inflict Cleave, making enemies take +20% more Dmg from Bleed. (Not implemented yet)", type: "None"
        },
      ]
    },

    {
      name: "Sinister Sanctum", upgrade: 8,
      conditions: [
        {
          description: "DMG +1% for each kill during Sinister Sanctum (up to +30%).",
          multiplicative: false, type: "Slider", min: 0, max: 30, step: 1, buffs: [1, 0, 0, 0, 0, 0]
        }
      ]
    },

    {
      name: "Divine Flames", upgrade: 0,
      conditions: [
        {
          description: "This unit gains +40% Dmg.",
          multiplicative: false, type: 'Statement', statement: 'Has to be upg 9+', buffs: [40, 0, 0, 0, 0, 0]
        },
      ]
    },
  ],

  Gujo: [
    {
      name: "Strongest Sorcerer", upgrade: 0,
      conditions: [
        {
          description: "Dmg +20% and Spa -10%.",
          multiplicative: false, type: 'Statement', statement: 'It is just always on', buffs: [20, 10, 0, 0, 0, 0]
        },
      ]
    },

    {
      name: "Limitless", upgrade: 0,
      conditions: [
        {
          description: "Dmg +0.1% with each wave passed.",
          multiplicative: false, type: "Slider", min: 0, max: 300, step: 1, buffs: [0.1, 0, 0, 0, 0, 0], suffix: " Waves Passed"
        }
      ]
    },

    {
      name: "Unlimited Expansion", upgrade: 8,
      conditions: [
        {
          description: "Spa -2% for each kill during Void (down to -10%).",
          multiplicative: false, type: "Slider", min: 0, max: 10, step: 2, buffs: [0, 1, 0, 0, 0, 0]
        }
      ]
    },
  ],

  Alocard: [
    {
      name: "Bird of Hermes", upgrade: 0,
      conditions: [
        {
          description: "Enemies that enter this unit's range while Bleeding will be afflicted with Wounded. (Use buffs tab)", type: "None"
        }
      ]
    },

    {
      name: "Restraint Level 0", upgrade: 0,
      conditions: [
        { description: "The unit gains -10% Spa.", multiplicative: false, type: "Statement", statement: "Ghouls are on the map", buffs: [0, 10, 0, 0, 0, 0] },

        { description: "Dmg +1% every time a ghoul dies (up to +35%).", multiplicative: false, type: "Slider", min: 0, max: 35, step: 1, buffs: [1, 0, 0, 0, 0, 0] }
      ]
    },
  ],

  Igros: [
    {
      name: "Ruler's Hand", upgrade: 0,
      conditions: [
        {
          description: "Deals +25% Dmg",
          multiplicative: true, type: 'Statement', statement: 'Only when dealing DMG to a boss.', buffs: [25, 0, 0, 0, 0, 0]
        },
      ]
    },

    {
      name: "Strongest Shadow", upgrade: 0,
      conditions: [
        {
          description: "DMG +30% and SPA -10%.",
          multiplicative: false, type: 'Statement', statement: 'Truly simpler times.', buffs: [30, 10, 0, 0, 0, 0]
        },
      ]
    },

    {
      name: "Shadow Commander", upgrade: 0,
      conditions: [
        {
          description: "DMG +20% and RNG +10% for 100 seconds",
          multiplicative: false, type: 'Statement', statement: 'Only after a shadow enters range.', buffs: [20, 0, 10, 0, 0, 0]
        },
      ]
    },
  ],

  Valentine: [
    {
      name: "23rd President", upgrade: 0,
      conditions: [
        {
          description: "Dmg & Rng +1% after hitting an enemy (up to 23%).",
          multiplicative: false, type: "Slider", min: 0, max: 23, step: 1, buffs: [1, 0, 1, 0, 0, 0]
        }
      ]
    },

    {
      name: "A Gift From the Other Side", upgrade: 0,
      conditions: [
        {
          description: "Spa -5% with each use of This is Another Me... (down to -15%).",
          multiplicative: false, type: "Slider", min: 0, max: 15, step: 5, buffs: [0, 1, 0, 0, 0, 0]
        }
      ]
    },

    {
      name: "Ticket to Ride", upgrade: 0,
      conditions: [
        {
          description: "Dmg +10% after redirecting an attack (up to +30%).",
          multiplicative: false, type: "Slider", min: 0, max: 30, step: 10, buffs: [1, 0, 0, 0, 0, 0]
        }
      ]
    },
  ],

  Regnaw: [
    {
      name: "Ts guy pmo", upgrade: 0,
      conditions: [
        {
          description: "I'm gonna have go through so much work just to get this guys passives to work. (Basically means yet to be implemented)",
          multiplicative: false, type: "Slider", min: 0, max: 30, step: 1, buffs: [0, 0, 0, 0, 0, 0], suffix: " Pmos"
        }
      ]
    },
  ],

  Soburo: [
    {
      name: "Charismatic Leader", upgrade: 0,
      conditions: [{ description: "Buffs all allies in range by +10% damage and 8% range; When Return to Zero is activated this is increased to 20% damage instead. (Use buffs tab)", type: "None" }]
    },

    {
      name: "Contracted Spirit", upgrade: 0,
      conditions: [
        {
          description: "Every upgrade increases range by 2%.",
          multiplicative: false, type: "Slider", min: 0, max: 10, step: 1, buffs: [0, 0, 2, 0, 0, 0], suffix: " Upgrades"
        }
      ]
    },

    {
      name: "Return To Zero", upgrade: 10,
      conditions: [{ description: "Buff this unit's Dmg by 50%.", multiplicative: false, type: "Statement", statement: "When Return to Zero is activated.", buffs: [50, 0, 0, 0, 0, 0] }]
    },
  ],

  Isdead: [
    {
      name: "Battle Fanatic", upgrade: 0,
      conditions: [
        {
          description: "Attacking enemies grants a +3% Dmg and +2% Rng buff per enemy attacked. (Up to +45% and +30%)",
          multiplicative: false, type: "Slider", min: 0, max: 15, step: 1, buffs: [3, 0, 2, 0, 0, 0], suffix: " Enemies"
        }
      ]
    },

    {
      name: "Blooming Love", upgrade: 10,
      conditions: [{ description: "This unit does +50% more Dmg.", multiplicative: true, type: "Statement", statement: "When attacking same enemy as marked unit.", buffs: [50, 0, 0, 0, 0, 0] }]
    },

    {
      name: "Blooming Love", upgrade: 10,
      conditions: [
        {
          description: "For every enemy frozen by Mahokarada decrease Spa by 2% (Up to 30%) for 40 seconds.",
          multiplicative: false, type: "Slider", min: 0, max: 30, step: 2, buffs: [0, 1, 0, 0, 0, 0]
        }
      ]
    },
  ],

  Sokora: [
    {
      name: "Evil Incarnate", upgrade: 0,
      conditions: [
        {
          description: "This unit only attacks passively, Increased Rng by +0.5% for every enemy in range (Up to 40%). (Dmg is set to 0.6x, Spa also set to 1s)",
          multiplicative: false, type: "Slider", min: 0, max: 40, step: 0.5, buffs: [0, 0, 1, 0, 0, 0], extra: (finalStats) => { finalStats.damage *= 0.6, finalStats.spa = 1 },
        }
      ]
    },

    {
      name: "Spreading Corruption", upgrade: 0,
      conditions: [
        {
          description: "-0.2% Spa any time this unit damages an enemy with Evil Incarnate. (Up to 20%)",
          multiplicative: false, type: "Slider", min: 0, max: 20, step: 0.2, buffs: [0, 1, 0, 0, 0, 0],
        }
      ]
    },

    {
      name: "Unending Corruption", upgrade: 0,
      conditions: [
        {
          description: "For every corrupted unit, buff the Dmg of this unit by 20%. (Up to 60%)",
          multiplicative: false, type: "Slider", min: 0, max: 60, step: 20, buffs: [1, 0, 0, 0, 0, 0],
        }
      ]
    },
  ],

  Salter: [
    {
      name: "Aura of Corruption", upgrade: 0,
      conditions: [
        {
          description: "For every affected unit and enemy by slow, this unit gain +5% Dmg (up to +50%)",
          multiplicative: false, type: "Slider", min: 0, max: 50, step: 5, buffs: [1, 0, 0, 0, 0, 0],
        }
      ]
    },

    {
      name: "Aura of Corruption", upgrade: 0,
      conditions: [
        {
          description: "Each additional attack from Sokora increases Rng by +1% (up to +30%)",
          multiplicative: false, type: "Slider", min: 0, max: 30, step: 1, buffs: [0, 0, 1, 0, 0, 0],
        }
      ]
    },

    {
      name: "Dark Excalibur", upgrade: 10,
      conditions: [
        { description: "Every 5 attacks attacks using Dark Excalibur and gains 100% Dmg, 20% Spa, and 20% Rng", 
          multiplicative: false, type: "Statement", statement: "(Average this with 4 normal attacks to get avg dps)", buffs: [100, -20, 20, 0, 0, 0] }
      ]
    },
  ],

  Arc: [
    {
      name: "Type Earth", upgrade: 0,
      conditions: [
        { description: "During Type Earth Form this unit gains +100% Dmg and +20% Rng", 
          multiplicative: false, type: "Statement", statement: "Can transform using Bloodthirst 400 stacks.", buffs: [100, 0, 20, 0, 0, 0] }
      ]
    },
  ],

  Hebano: [
    {
      name: "Flaming Resonance", upgrade: 0,
      conditions: [
        {
          description: "Any burn applied in range of the sakura tree is reapplied. (Just multiply burn dps by 2, this effect doesnt activate that much anyways)", type: "None"
        }
      ]
    },

    {
      name: "Scorched", upgrade: 0,
      conditions: [
        {
          description: "When burning enemies enter the sakura tree's range they are applied with scorched for 60 seconds, Scorched enemies take 20% more Dmg from Fire allies. (Use buffs tab)", type: "None"
        }
      ]
    },
  ],

  Marlin: [
    {
      name: "Absolute Negation", upgrade: 0,
      conditions: [
        { description: "This unit gains +40% Dmg and +10% Rng.", 
          multiplicative: false, type: "Statement", statement: "Only after Absolute Negation is activated", buffs: [40, 0, 10, 0, 0, 0] }
      ]
    },
  ],

  Rudie: [
    {
      name: "A Rank Staff", upgrade: 0,
      conditions: [
        {
          description: "Regerates 1% mana every second and attacks restore 5%. This unit uses between 1 through 100 and for every mana used, gains 4% more damage for next attack. (Avg Dps uses (5 * Spirit bonus + Spa) mana)",
          multiplicative: true, type: "Slider", min: 0, max: 100, step: 1, buffs: [4, 0, 0, 0, 0, 0],
        }
      ]
    },

    {
      name: "Family Man", upgrade: 0,
      conditions: [
        { description: "When mana falls below 10% buff all allies in range by +15% damage and 10% range for 30 seconds (Use buffs tab), Also buffs self by 40% Dmg for 1 attack.", 
          multiplicative: false, type: "Statement", statement: "After using mana", buffs: [40, 0, 0, 0, 0, 0] }
      ]
    },
  ],

  Al: [
    {
      name: "All That is Good", upgrade: 8,
      conditions: [
        {
          description: "Anytime this unit cleanses a debuff or status effect from an ally, buff that ally by 25% Dmg and 10% Rng for 30 seconds. (Use buffs tab)", type: "None"
        }
      ]
    },
  ],

  DarkMage: [
    {
      name: "All That is Good", upgrade: 8,
      conditions: [
        {
          description: "When meter fills, applies diseased to enemies making them take 50% more DOT Dmg. (Not yet implemented)", type: "None"
        }
      ]
    },
  ],

  Dawntay: [
    {
      name: "Jackpot!", upgrade: 2,
      conditions: [
        {description: "Gains 25% Crit. (Followups are in attacks)", multiplicative: false, type: "Statement", statement: "Unlocks after upg 2", buffs: [0, 0, 0, 25, 0, 0]}
      ]
    },

    {
      name: "Smokin'", upgrade: 0,
      conditions: [
        {
          description: "When DT gauge is full transforms for 30 seconds and gains +100% Dmg, +50% Crit, +75% CritDmg, and +20% Rng. Spa is capped at 12s due to animations",
          multiplicative: false, type: "Statement", statement: "Transformed in DT (Uptime TBD)", buffs: [100, 0, 20, 50, 75, 0], extra: (finalStats) => { finalStats.spa = 12 }
        }
      ]
    }
  ],

  Vigil: [
    {
      name: "Doppelganger", upgrade: 0,
      conditions: [
        {
          description: "When DT gauge is full transforms for 30 seconds and gains +50% Dmg, and +20% Rng and summons a doppelganger.",
          multiplicative: false, type: "Statement", statement: "Transformed in DT (Uptime TBD)", buffs: [50, 0, 20, 0, 0, 0]
        }
      ]
    },
  ],

  Dave: [
    {
      name: "Sandy", upgrade: 0,
      conditions: [
        {
          description: "-30% Spa; +5% Spa for every attack, resetting after back to -30% after 5 attacks. (Avg Dps uses -20%)",
          multiplicative: false, type: "Slider", min: 0, max: 30, step: 5, buffs: [0, 1, 0, 0, 0, 0],
        }
      ]
    },

    {
      name: "Cyber Psycho", upgrade: 0,
      conditions: [
        {
          description: "This unit gains +60% Dmg; Use a random targeting type every attack unless an allied Luce is in range.",
          multiplicative: false, type: "Statement", statement: "Toggle Passive Buff", buffs: [60, 0, 0, 0, 0, 0]
        }
      ]
    },
  ],

  Zion: [
    {
      name: "Nowl Annihilation", upgrade: 0,
      conditions: [
        {
          description: "This unit gains Rng +20% if an enemy is burning",
          multiplicative: false, type: "Statement", statement: "Toggle Passive Buff", buffs: [0, 0, 20, 0, 0, 0]
        },

        {
          description: "Dmg +5% for each burning enemy (up to +50%).",
          multiplicative: false, type: "Slider", min: 0, max: 50, step: 5, buffs: [1, 0, 0, 0, 0, 0],
        }
      ]
    },
  ],

  Julias: [
    {
      name: "Mirrored Frosse", upgrade: 0,
      conditions: [
        {
          description: "This unit gains Spa -1% each time an enemy is frozen (down to -10%).",
          multiplicative: false, type: "Slider", min: 0, max: 10, step: 1, buffs: [0, 1, 0, 0, 0, 0],
        }
      ]
    },

    {
      name: "Chilling Contempt", upgrade: 0,
      conditions: [
        {
          description: "This unit gains Dmg +7% with each attack (up to +56%).",
          multiplicative: false, type: "Slider", min: 0, max: 56, step: 7, buffs: [1, 0, 0, 0, 0, 0],
        },

        {
          description: "This unit gains Rng +7% per wave (up to +35%).",
          multiplicative: false, type: "Slider", min: 0, max: 35, step: 7, buffs: [0, 0, 1, 0, 0, 0],
        }
      ]
    },
  ],

  Tuji: [
    {
      name: "Heavenly Body", upgrade: 0,
      conditions: [
        {
          description: "This unit gains 50% Dmg",
          multiplicative: false, type: "Statement", statement: "This unit is not affected by any buffs", buffs: [50, 0, 0, 0, 0, 0]
        },
      ]
    },

    {
      name: "Heavenly Body", upgrade: 0,
      conditions: [
        {
          description: "This unit gains 20% Rng",
          multiplicative: false, type: "Statement", statement: "Toggle Passive Buff", buffs: [0, 0, 20, 0, 0, 0]
        },

        {
          description: "This unit gains 20% Rng",
          multiplicative: false, type: "Statement", statement: "Toggle Passive Buff", buffs: [50, 0, 0, 0, 0, 0]
        },
      ]
    },

    {
      name: "Cursed Inventory", upgrade: 0,
      conditions: [
        {
          description: "Chain Blitz gives 25% Rng and Boss Dmg and is 12 Circle",
          multiplicative: false, type: "Statement", statement: "Toggle other weapon off first", buffs: [0, 0, 25, 0, 0, 0]
        },

        {
          description: "Domain Breaker gives 10% Dmg and is 75 Cone",
          multiplicative: false, type: "Statement", statement: "Toggle other weapon off first", buffs: [10, 0, 0, 0, 0, 0]
        },
      ]
    },
  ],

  Renguko: [
    {
      name: "Unwavering Focus", upgrade: 0,
      conditions: [
        {
          description: "Dmg dealt +5% with each consecutive attack on the same enemy (up to +20%).",
          multiplicative: true, type: "Slider", min: 0, max: 20, step: 5, buffs: [1, 0, 0, 0, 0, 0],
        }
      ]
    },

    {
      name: "Purgatory Unleashed", upgrade: 8,
      conditions: [
        {
          description: "Enemies hit by attacks are inflicted with Purgatory Flames, making them receive +25% Burn DMG. (Not yet implemented)", type: "None"
        }
      ]
    },
  ],

  Okorun: [
    {
      name: "Turbo Transformation", upgrade: 0,
      conditions: [
        {
          description: "This unit gains 70% Dmg and Spa -50% for the next attack per 5 attacks performed. (Avg 10%)",
          multiplicative: false, type: "Statement", statement: "Toggle other weapon off first", buffs: [70, 10, 0, 0, 0, 0]
        },
      ]
    },

    {
      name: "Running out of Time", upgrade: 0,
      conditions: [
        {
          description: "Spa -1% per attack performed (down to -20%); Dmg -10% per 5 attacks performed (down to -20%).",
          multiplicative: false, type: "Slider", min: 0, max: 20, step: 1, buffs: [-1, 1, 0, 0, 0, 0],
        }
      ]
    },
  ],

  Mimi: [
    {
      name: "Sudden Awakening", upgrade: 0,
      conditions: [
        {
          description: "This unit gains 40% Dmg",
          multiplicative: false, type: "Statement", statement: "Toggle Passive Buff", buffs: [40, 0, 0, 0, 0, 0]
        },

        {
          description: "Dmg & Spa -5% every 4th attack (down to -20%).",
          multiplicative: true, type: "Slider", min: 0, max: 20, step: 5, buffs: [-1, 1, 0, 0, 0, 0],
        }
      ]
    },

    {
      name: "Psychokinesis", upgrade: 0,
      conditions: [
        {
          description: "Dmg +2% & Rng +1.5% per attack performed while on the moves 'Boulder Toss' or 'Psychic Throw' (Up to +30%).",
          multiplicative: false, type: "Slider", min: 0, max: 30, step: 2, buffs: [1, 0, 1, 0, 0, 0],
        }
      ]
    },
  ],

  Pweeny: [
    {
      name: "Dover Demon", upgrade: 0,
      conditions: [
        {
          description: "This unit gains Dmg +2.5% per attack performed (up to +37.5%).",
          multiplicative: false, type: "Slider", min: 0, max: 37.5, step: 2.5, buffs: [1, 0, 0, 0, 0, 0],
        }
      ]
    },

    {
      name: "You and I Cry", upgrade: 0,
      conditions: [
        {
          description: "Every 5 attacks performed, Spa -50% for the next 2 attacks. (Avg -20%)",
          multiplicative: false, type: "Statement", statement: "Toggle Passive Buff", buffs: [0, 20, 0, 0, 0, 0]
        }
      ]
    },
  ],

  Saiko: [
    {
      name: "Nessie's Blessing", upgrade: 0,
      conditions: [
        {
          description: "This unit gains 25% Dmg",
          multiplicative: false, type: "Statement", statement: "Only when there is a boos on the track", buffs: [25, 0, 0, 0, 0, 0]
        }
      ]
    },

    {
      name: "Blazing Barriers", upgrade: 0,
      conditions: [
        {
          description: "Spa -0.5% every time an enemy is inflicted with burn (down to -15%).",
          multiplicative: false, type: "Slider", min: 0, max: 15, step: 0.5, buffs: [0, 1, 0, 0, 0, 0],
        }
      ]
    },
  ],

  Diogo: [
    {
      name: "Primal Instincts", upgrade: 0,
      conditions: [
        {
          description: "Dmg +.3% each time an enemy enters this units range (up to +30%).",
          multiplicative: false, type: "Slider", min: 0, max: 30, step: 0.3, buffs: [0, 0, 1, 0, 0, 0],
        }
      ]
    },

    {
      name: "THE WORLD", upgrade: 6,
      conditions: [
        {
          description: "Dmg & Rng +7.5% after THE WORLD is activated (up to +22.5%).",
          multiplicative: false, type: "Slider", min: 0, max: 22.5, step: 7.5, buffs: [1, 0, 1, 0, 0, 0],
        },

        {
          description: "Spa -5% per attack performed during THE WORLD (down to -25%)",
          multiplicative: false, type: "Slider", min: 0, max: 25, step: 5, buffs: [0, 1, 0, 0, 0, 0],
        }
      ]
    },
  ],

  Gilgamesh: [
    {
      name: "King of the World", upgrade: 0,
      conditions: [
        {
          description: "This unit gains Dmg +30% & Spa -10%",
          multiplicative: false, type: "Statement", statement: "Toggle Passive Buff", buffs: [30, 10, 0, 0, 0, 0]
        },

        {
          description: "Dmg -6% for each unit within range (down to -30%).",
          multiplicative: false, type: "Slider", min: 0, max: 30, step: 6, buffs: [-1, 0, 0, 0, 0, 0],
        }
      ]
    },

    {
      name: "Myriad Treasures", upgrade: 0,
      conditions: [
        {
          description: "Dmg and Rng +1% per attack. (Up to +35%).",
          multiplicative: false, type: "Slider", min: 0, max: 35, step: 1, buffs: [1, 0, 1, 0, 0, 0],
        }
      ]
    },

    {
      name: "Enuma Elish", upgrade: 10,
      conditions: [
        {
          description: "Gains 350% Dmg and 10% range for the ability Enuma Elish which hits all enemies in range",
          multiplicative: false, type: "Statement", statement: "Toggle Active Buff", buffs: [350, 0, 10, 0, 0, 0]
        },
      ]
    },
  ],

  Emmie: [
    {
      name: "Spirit Arts", upgrade: 0,
      conditions: [
        {
          description: "This unit does 40% more Dmg and 50% Crit",
          multiplicative: true, type: "Statement", statement: "Only when attacking frozen enemies", buffs: [40, 0, 0, 50, 0, 0]
        },
      ]
    },

    {
      name: "Frozen Domain", upgrade: 0,
      conditions: [
        {
          description: "When this unit crits gain +5% Rng. (Up to 30%).",
          multiplicative: false, type: "Slider", min: 0, max: 30, step: 1, buffs: [0, 0, 1, 0, 0, 0],
        }
      ]
    },
  ],

  Foboko: [
    {
      name: "Charisma", upgrade: 0,
      conditions: [
        {
          description: "Reduces the SPA of all allies in range by 5%. (Use buffs tab)", type: "None"
        }
      ]
    },
  ],

  Karem: [
    {
      name: "Thermoacoustic", upgrade: 8,
      conditions: [
        {
          description: "Swaps to full aoe and gains 30% Dmg and 10% Rng",
          multiplicative: false, type: "Statement", statement: "Theres are 20 enemies in range with burn", buffs: [30, 0, 10, 0, 0, 0]
        },
      ]
    },
  ],

  RomandRan: [
    {
      name: "Clairvoyance", upgrade: 0,
      conditions: [
        {
          description: "Consecutive hits on an enemy builds up crit chance by 1% on that enemy specifically.",
          multiplicative: true, type: "Slider", min: 0, max: 50, step: 1, buffs: [0, 0, 0, 1, 0, 0],
        }
      ]
    },

    {
      name: "Fanatical Demon", upgrade: 9,
      conditions: [
        {
          description: "Every hit while Fanatical Demon is active increases attack by .5%. (Up to 30%)",
          multiplicative: false, type: "Slider", min: 0, max: 30, step: 0.5, buffs: [1, 0, 0, 0, 0, 0],
        },

        {
          description: "Decreases Spa by 40% for 30 seconds and switches to attack 5.",
          multiplicative: false, type: "Statement", statement: "Toggle Active Buff", buffs: [0, 40, 0, 0, 0, 0]
        },
      ]
    },
  ],

  Dodara: [
    {
      name: "Detonating Clay", upgrade: 0,
      conditions: [
        {
          description: "Dmg +2% with each enemy stunned. (Up to 30%)",
          multiplicative: false, type: "Slider", min: 0, max: 30, step: 2, buffs: [1, 0, 0, 0, 0, 0],
        }
      ]
    },
  ],

  Sosora: [
    {
      name: "Wooden Body", upgrade: 0,
      conditions: [
        {
          description: "Spa -4% with each attack dodged. (Down to -20%)",
          multiplicative: false, type: "Slider", min: 0, max: 20, step: 4, buffs: [0, 1, 0, 0, 0, 0],
        }
      ]
    },
  ],

  Ichiga: [
    {
      name: "Number 1",
      upgrade: 0,
      conditions: [
        {
          description: "+20% Dmg and +10% Rng for every missing life stock.", type: "Slider", min: 0, max: 2, step: 1, suffix: " Stocks",
          multiplicative: false, buffs: [20, 0, 10, 0, 0, 0], active: false, value: 0
        }
      ]
    },

    {
      name: "Save the AV Society",
      upgrade: 0,
      conditions: [
        {
          description: "Increases Dmg and Rng buffs from Number 1 by 5% and 2.5% respectively.", type: "Slider", min: 0, max: 10, step: 1, suffix: " Upgs",
          multiplicative: false,
          getBuffs: (value, conditionMetaMap) => [conditionMetaMap["0-0"].value * 5, 0, conditionMetaMap["0-0"].value * 2.5, 0, 0, 0],
          active: false, value: 0
        }
      ]
    }
  ],
}