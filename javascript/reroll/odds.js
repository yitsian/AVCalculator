const traitsChances = [
  // Commons
  { name: "Range",    chance: 26,    description: "+15% RNG",   color: "unbound"},
  { name: "Swift",    chance: 26,    description: "-12.5% SPA", color: "water"},
  { name: "Vigor",    chance: 26,    description: "+15% DMG",   color: "cosmic" },
  
  // Legendaries
  { name: "Scholar",  chance: 10,    description: "+50% Exp",               gradient: "legendary" },
  { name: "Marksman", chance: 6.5,   description: "+30% RNG",               gradient: "legendary" },
  { name: "Fortune",  chance: 2.5,   description: "+20% Income, -10% Cost", gradient: "legendary" },
  { name: "Blitz",    chance: 1.85,  description: "+15% RNG",               gradient: "legendary" },

  // Mythics
  { name: "Solar",    chance: 0.5,   description: "+10% DMG, -5% SPA, +25% RNG",                 gradient: "mythic" },
  { name: "Deadeye",  chance: 0.375, description: "+45% Crit Chance, +50% Crit DMG",             gradient: "mythic" },
  { name: "Ethereal", chance: 0.175, description: "+20% DMG, -20% SPA, +5% RNG",                 gradient: "mythic" },
  { name: "Monarch",  chance: 0.1,   description: "+300% DMG, -10% SPA, +5% RNG, 1 Place Limit", gradient: "mythic" },
]

const statsChances = [
  { name: "D",  minChance: 40,   maxChance: 0,    min: 0,    max: 2.49 },
  { name: "C",  minChance: 30,   maxChance: 0,    min: 2.5,  max: 3.99 },
  { name: "B",  minChance: 30,   maxChance: 0,    min: 4,    max: 5.49 },
  { name: "A",  minChance: 4.35, maxChance: 75,   min: 5.5,  max: 6.99 },
  { name: "S",  minChance: 1,    maxChance: 20,   min: 7,    max: 8.49 },
  { name: "Z",  minChance: 0.85, maxChance: 4.15, min: 8.5,  max: 9.9 },
  { name: "Z+", minChance: 0.2,  maxChance: 0.6,  min: 10,   max: 11.49 },
  { name: "神", minChance: 0.1,  maxChance: 0.25, min: 11.5, max: 12.5 },
]

const bannerChances = [
  { name: "Rare",      chance: 75.496 },
  { name: "Epic",      chance: 20 },
  { name: "Legendary", chance: 4 },
  { name: "Mythic",    chance: 0.5 },
  { name: "Secret",    chance: 0.004 },
]

const eventBannerChances = [
  { name: "Rare",      chance: 79.995 },
  { name: "Epic",      chance: 16 },
  { name: "Legendary", chance: 2 },
  { name: "Mythic",    chance: 1 },
  { name: "Exclusive", chance: 0.5 },
  { name: "Secret",    chance: 0.5 },
  { name: "Vanguard",  chance: 0.005 },
]

let statCount = {
  "D": 0,
  "C": 0,
  "B": 0,
  "A": 0,
  "S": 0,
  "Z": 0,
  "Z+": 0,
  "神": 0,
}

let bannerCount = {
  "Rare": 0,
  "Epic": 0,
  "Legendary": 0,
  "Mythic": 0,
  "Secret": 0,

  "Shiny Epic": 0,
  "Shiny Legendary": 0,
  "Shiny Mythic": 0,
  "Shiny Secret": 0,
}

let eventBannerCount = {
  "Rare": 0,
  "Epic": 0,
  "Legendary": 0,
  "Mythic": 0,
  "Exclusive": 0,
  "Secret": 0,
  "Vanguard": 0,

  "Shiny Exclusive": 0,
  "Shiny Vanguard": 0,
}