const elementBuffs = {
  Unbound: {
    name: "Unbound Element Buff", upgrade: 0,
    conditions: [
      {
        description: "Unbound units gain 5% Crit",
        multiplicative: false, type: "Statement", statement: "Toggle element buff", buffs: [0, 0, 0, 5, 0, 0]
      }
    ]
  },

  Curse: {
    name: "Curse Element Buff", upgrade: 0,
    conditions: [
      {
        description: "Curse units deal 30% more Dmg to bosses",
        multiplicative: true, type: "Statement", statement: "Toggle element buff", buffs: [30, 0, 0, 0, 0, 0]
      }
    ]
  },

  Fire: {
    name: "Fire Element Buff", upgrade: 0,
    conditions: [
      {
        description: "Fire units give 1% more Dmg to other Fire units in range",
        multiplicative: false, type: "Slider", min: 0, max: 30, step: 1, buffs: [1, 0, 0, 0, 0, 0],
      }
    ]
  },

  Passion: {
    name: "Passion Element Buff", upgrade: 0,
    conditions: [
      {
        description: "Passion units give 1% more Rng to other Passion units in range",
        multiplicative: false, type: "Slider", min: 0, max: 30, step: 1, buffs: [0, 0, 1, 0, 0, 0],
      }
    ]
  },
}