const familiarsData = {
  Birb: {
    image: "Images/Familiars/Birb.webp",
    elements: ["Water", "Spark", "Blast"],
    type: "Slider",
    passiveName: "Ventriloquism",
    passiveDescription: "Changes Dmg by -/+20.0%, Changes CritDmg by -/+30.0%, Changes Rng by -/+20.0%, Changes Changes Crit by -/+20.0%.",
    minRanges: { damage: -20, critDmg: -30, range: -20, crit: -20 },
    maxRanges: { damage: 20, critDmg: 30, range: 20, crit: 20 },
    step: 0.1,
    buffs: [1, 0, 1, 1, 1, 0],
    multiplicative: true
  },

  Alottavisits: {
    image: "Images/Familiars/Alottavisits.png",
    elements: ["Omni-Elemental"],
    type: "Statement",
    passiveName: "1,000,000,000 Visits",
    passiveDescription: "Increases Dmg by +10%, Spa by -5%, and Rng by +10%",
    buffs: [10, 5, 10, 0, 0, 0],
    multiplicative: true
  },

  Belu: {
    image: "Images/Familiars/Belu.png",
    elements: ["Curse", "Fire", "Unknown"],
    type: "Slider",
    passiveName: "For the King",
    passiveDescription: "Attacks on hit consume the 5 lowest HP summons on the field buffing Dmg of that attack by +5.0% to +20.0%.",
    minRanges: { damage: 0 },
    maxRanges: { damage: 20 },
    step: 0.1,
    buffs: [1, 0, 0, 0, 0, 0],
    multiplicative: true
  },

  Pupper: {
    image: "Images/Familiars/Pupper.png",
    elements: ["Nature", "Blast", "Holy"],
    type: "Slider",
    passiveName: "Man's Best Friend",
    passiveDescription: "Increases Crit Rate by +1% to +5% and CritDmg by +2.5% to +10%; this buff is doubled for Dragon Sphere units.",
    minRanges: { crit: 0, critDmg: 0 },
    maxRanges: { crit: 10, critDmg: 20 },
    step: 0.1,
    buffs: [0, 0, 0, 1, 1, 0],
    multiplicative: true
  },

  StrangeCat: {
    image: "Images/Familiars/StrangeCat.webp",
    elements: ["Omni-Elemental"],
    type: "Statement",
    passiveName: "Luck of the gods",
    passiveDescription: "Yet to be implemented",
    buffs: [0, 0, 0, 0, 0, 0],
    multiplicative: true
  },

  BlackSpirit: {
    image: "Images/Familiars/BlackSPirit.webp",
    elements: ["Blast", "Spark", "Nature"],
    type: "Slider",
    passiveName: "Dark Spirit",
    passiveDescription: "Any attack that would generate meter generates +0.1%-100% more meter.",
    minRanges: { meter: 0 },
    maxRanges: { meter: 100 },
    step: 1,
    buffs: [0, 0, 0, 0, 0, 0],
    otherBuffs: [0, 0, 0, 1],
    multiplicative: false
  },

  Pachiru: {
    image: "Images/Familiars/Pachiru.webp",
    elements: ["Cosmic", "Fire", "Unbound"],
    type: "Slider",
    passiveName: "Lieutenant",
    passiveDescription: "Every time the equipped unit is stunned increases Dmg by +1.0%-10.0%. (Up to +30.0%)",
    minRanges: { damage: 0 },
    maxRanges: { damage: 30 },
    step: 0.1,
    buffs: [1, 0, 0, 0, 0, 0],
    multiplicative: false
  },

  Turbo: {

  }
}