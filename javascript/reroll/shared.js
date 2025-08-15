// let bannerPity = {
//   mythic: 0
// }

// let eventBannerPity = {
//   exclusive: 0,
//   vanguard: 0
// }

let baseShinyChance = 1.5
let shinyHunter = false
let somethingsShiny = false

function rollFromTable(chances) {
  const totalChance = chances.reduce((sum, t) => sum + t.chance, 0);
  const rand = Math.random() * totalChance;
  let cumulative = 0;

  for (let trait of chances) {
    cumulative += trait.chance;
    if (rand <= cumulative) {
      return trait.name;
    }
  }
  return chances[0]; // Default of the table
}

