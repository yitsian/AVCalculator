let unitPassives = {
  Vsjw: [
    {
      name: "The Army's Supply",
      upgrade: 0,
      conditions: [
        { 
          description: "Anytime mana is lost, Dmg is buffed by 0.5%. (Up to +30.0%)", type: "Slider", min: 0, max: 30, step: 0.5,
          multiplicative: false, buffs: [1, 0, 0, 0, 0, 0], active: false, value: 0
        }
      ]
    },

    {
      name: "The General",
      upgrade: 0,
      conditions: [
        { 
          description: "Anytime an allied summon dies in this units range, increases Dmg by +5.0% (Up to 50.0%); Resets after each unit attack.", type: "Slider", min: 0, max: 50, step: 5, 
          multiplicative: false, buffs: [1, 0, 0, 0, 0, 0], active: false, value: 0
        },

        { 
          description: "This unit gains +20.0% Rng and +30.0% Dmg.", type: "Statement", statement: "None of this unit's summons are on the track",
          multiplicative: false, buffs: [30, 0, 20, 0, 0, 0], active: false, value: 0
        }
      ]
    },

    {
      name: "The Monarch",
      upgrade: 0,
      conditions: [
        { description: "This unit's summons gain additional health based on the % of current mana remaining at the time of their summoning.", type: "Slider", min: 0, max: 100, step: 1, 
          multiplicative: false, buffs: [0, 0, 0, 0, 0, 1], active: false, value: 0
        }
      ]
    },

    {
      name: "The System",
      upgrade: 10,
      conditions: [
        { description: "This unit gains 5% Dmg (Up to 50%) everytime the summon Belu kills an enemy", type: "Slider", min: 0, max: 50, step: 5, 
          multiplicative: false, buffs: [1, 0, 0, 0, 0, 0], active: false, value: 0
        }
      ]
    },
  ],

  Conqueror: [
    {
      name: "Collateral Damage",
      upgrade: 0,
      conditions: [
        { 
          description: "every 2 attacks this unit will do a random attack and that attack will deal 120% more Dmg. Goes down by 1 every life lost. (Avg is done by average damage between attacks)", 
          type: "Slider", min: 1, max: 3, step: 1, multiplicative: true, getBuffs: (value) => [((((2.2 + (value - 1)) / value) - 1) / value) * 100, 0, 0, 0, 0, 0], 
          suffix: " Stocks Left", active: false, value: 0
        }
      ]
    },

    {
      name: "Unstoppable Conquest",
      upgrade: 0,
      conditions: [
        { 
          description: "Whenever attacks from this unit hits a non-boss enemy, it does 50% more Dmg;", type: "Statement", statement: "Hitting boss",
          multiplicative: true, buffs: [50, 0, 0, 0, 0, 0], active: false, value: 0
        }
      ]
    },

    {
      name: "Adrenaline Boost",
      upgrade: 0,
      conditions: [
        { 
          description: "For every stock missing increase range by +20%.", type: "Slider", min: 0, max: 2, step: 1, suffix: " Stocks Missing",
          multiplicative: false, buffs: [0, 0, 20, 0, 0, 0], active: false, value: 0
        }
      ]
    },
  ],

  Slime: [
    {
      name: "Great Sage",
      upgrade: 0,
      conditions: [
        { 
          description: "Gains Active: Great Sage. Once Great Sage has identified an enemy, this unit deals 40% more Dmg to that enemy.", type: "Statement", statement: "Specifically only applies to identified enemy",
          multiplicative: true, buffs: [40, 0, 0, 0, 0, 0], active: false, value: 0
        }
      ]
    },

    {
      name: "Self-Replication",
      upgrade: 0,
      conditions: [
        { description: "For every currently placed copy of this unit that is placed, this unit gains +30% Dmg", type: "Slider", min: 0, max: 4, step: 1, suffix: " Placements",
          multiplicative: false, buffs: [30, 0, 0, 0, 0, 0], active: false, value: 0
        }
      ]
    },
  ],

  Byeken: [
    {
      name: "Tethered",
      upgrade: 0,
      conditions: [
        { 
          description: "Enemies that are affected by Tethered share 0.1% of the Dmg taken. (Not implemented)", type: "None", active: false, value: 0
        }
      ]
    },
  ],

  Yehowach: [
    {
      name: "The Almighty",
      upgrade: 0,
      conditions: [
        { 
          description: "+5% Dmg for every status effect avoided. (Up to 30%)", type: "Slider", min: 0, max: 30, step: 5,
          multiplicative: false, buffs: [1, 0, 0, 0, 0, 0], active: false, value: 0
        }
      ]
    },

    {
      name: "The Man Who Saw the Future",
      upgrade: 0,
      conditions: [
        { 
          description: "On Attack: perform an additional attack on the last enemy in range at the same time. (In attacks tab)", type: "None", active: false, value: 0
        },
      ]
    },

    {
      name: "Ashfallen",
      upgrade: 0,
      conditions: [
        { 
          description: "+5% Rng every time Ashfallen is used (Up to 20%)", type: "Slider", min: 0, max: 20, step: 5,
          multiplicative: false, buffs: [0, 0, 1, 0, 0, 0], active: false, value: 0
        },

        { 
          description: "Debuffs all allied units in range by 20% damage and 10% range and gain 10% damage and 6% range per allied unit debuffed by this ability.", 
          type: "Slider", min: 0, max: 33, step: 1, multiplicative: false, buffs: [10, 0, 6, 0, 0, 0], suffix: " Units", active: false, value: 0
        },
      ]
    },
  ],

  Alocard: [
    {
      name: "Bird of Hermes",
      upgrade: 0,
      conditions: [
        { 
          description: "Enemies that enter this unit's range while Bleeding will be afflicted with Wounded. (Use buffs tab)", type: "None", active: false, value: 0
        }
      ]
    },

    {
      name: "Restraint Level 0",
      upgrade: 0,
      conditions: [
        { 
          description: "The unit gains -10% Spa.", type: "Statement", statement: "Ghouls are on the map",
          multiplicative: false, buffs: [0, 10, 0, 0, 0, 0], active: false, value: 0
        },

        { 
          description: "Dmg +1% every time a ghoul dies (up to +35%).", type: "Slider", min: 0, max: 35, step: 1,
          multiplicative: false, buffs: [1, 0, 0, 0, 0, 0], active: false, value: 0
        }
      ]
    },
  ],

  Dawntay: [
    {
      name: "Jackpot!",
      upgrade: 2,
      conditions: [
        { 
          description: "Gains 25% Crit. (Followups are in attacks)", type: "Statement", statement: "Unlocks after upg 2",
          multiplicative: false, buffs: [0, 0, 0, 25, 0, 0], active: false, value: 0
        }
      ]
    },

    {
      name: "Smokin'",
      upgrade: 0,
      conditions: [
        { description: "When DT gauge is full transforms for 30 seconds and gains +100% Dmg, +50% Crit, +75% CritDmg, and +20% Rng. Spa is capped at 12s due to animations", 
          type: "Statement", statement: "Transformed in DT (Uptime TBD)", multiplicative: false, buffs: [100, 0, 20, 50, 75, 0], extra: (finalStats) => {finalStats.spa = 12},
          active: false, value: 0
        }
      ]
    }
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
        { description: "Increases Dmg and Rng buffs from Number 1 by 5% and 2.5% respectively.", type: "Slider", min: 0, max: 10, step: 1, suffix: " Upgs", 
          multiplicative: false, buffs: [5, 0, 2.5, 0, 0, 0], dependancy: "0-0", active: false, value: 0
        }
      ]
    }
  ],
}