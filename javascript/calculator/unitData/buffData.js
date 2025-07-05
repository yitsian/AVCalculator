const buffData = {
  Worldlines: {
    name: "Worldlines Weather", description: "Worldlines elemental buffs increase Dmg by +20%-150% and debuffs decrease by -50%-100%", background: "secret",
    image: "Images/Units/Conquerer.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Slider", minRange: -100, maxRange: 150, step: 1, buffs: [1, 0, 0, 0, 0, 0]
      }
    ]
  },

  HarukaRin: {
    name: "Haruka Rin", description: "+3% Dmg per wave, up to +18%. After 6 waves +10% Rng.", image: "Images/Units/Haruka Rin.webp", background: "exclusive",
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
        multiplicative: false, type: "Static", statement: "Unit is in range and is DBZ", buffs: [10, 0, 0, 30, 0, 0]
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

  Salter: {
    name: "Salter Debuff", description: "Uncorrupted units within 70% range gain 15% Spa", background: "secret",
    image: "Images/Units/Saber Alter.webp", multiplicative: false,
    conditions: [
      {
        multiplicative: false, type: "Static", statement: "Unit is in range", buffs: [0, -15, 0, 0, 0, 0]
      }
    ]
  }
}