const unitTagData = {
  Vsjw: { availability: ["Permanent"], rarities: ["Vanguard", "Vsjw"], elements: ["Unknown"], aoes: ["Circle"], mechanics: ["Ability", "Summoner", "Nuke", "Immune"] },
  Koguro: { availability: ["Limited"], rarities: ["Vanguard", "Koguro"], elements: ["Nature"], aoes: ["Circle"], mechanics: ["Ability", "CC", "Buffer", "DOT", "Domain", "Nuke"] },

  Conqueror: { availability: ["Limited"], rarities: ["Secret"], elements: ["Blast"], aoes: ["OCone"], mechanics: ["Ability", "CC"] },
  Slime: { availability: ["Limited"], rarities: ["Secret"], elements: ["Water"], aoes: ["Full"], mechanics: ["Ability"] },
  Byeken: { availability: ["Permanent"], rarities: ["Secret"], elements: ["Unbound"], aoes: ["OCone"], mechanics: ["Ability", "CC", "Meter", "Debuffer"] },
  Yehowach: { availability: ["Permanent"], rarities: ["Secret"], elements: ["Cosmic"], aoes: ["Full"], mechanics: ["Ability", "Buffer", "Debuffer", "Immune"] },
  Alocard: { availability: ["Permanent"], rarities: ["Secret"], elements: ["Unbound"], aoes: ["Full"], mechanics: ["Ability", "Summoner", "Debuffer", "DOT"] },

  Dawntay: { availability: ["Unobtainable"], rarities: ["Exclusive"], elements: ["Unbound"], aoes: ["Circle", "Full"], mechanics: ["Meter"] },

  Ichiga: { availability: ["Permanent"], rarities: ["Mythic"], elements: ["Cosmic"], aoes: ["Circle"], mechanics: ["Ability", "Nuke"] },

  // { name: "Vsjw", placementCount: 3, placementCost: 2000, maxCost: 133000, tags: { availability: ["Permanent"], rarities: ["Vanguard", "Vsjw"], elements: ["Unknown"], aoes: ["Circle"], mechanics: ["Ability", "Summoner", "Nuke", "Immune"] } },

  // { name: "Divalo", maxCost: 0, tags: { availability: ["Unobtainable"], rarities: ["Vanguard", "Divalo"], elements: ["Cosmic"], aoes: ["Line"], mechanics: ["Ability", "Domain", "CC", "Immune"] } },
  // { name: "Rogita", maxCost: 0, tags: { availability: ["Unobtainable"], rarities: ["Vanguard", "Rogita"], elements: ["Blast"], aoes: ["ACone"], mechanics: ["Ability", "CC"] } },

  // { name: "Conquerer", maxCost: 0, tags: { availability: ["Limited"], rarities: ["Secret"], elements: ["Blast"], aoes: ["OCone"], mechanics: ["Ability", "CC"] } },
  // { name: "Slime", maxCost: 0, tags: { availability: ["Limited"], rarities: ["Secret"], elements: ["Water"], aoes: ["Full"], mechanics: ["Ability"] } },
  // { name: "Byeken", maxCost: 0, tags: { availability: ["Permanent"], rarities: ["Secret"], elements: ["Unbound"], aoes: ["ACone"], mechanics: ["Ability", "CC", "Meter", "Debuffer"] } },
  // { name: "Lfelt", maxCost: 0, tags: { availability: ["Permanent"], rarities: ["Secret"], elements: ["Passion"], aoes: ["OCone"], mechanics: ["Ability", "CC", "Meter",] } },
  // { name: "Clatakiri", placementCost: 2200, maxCost: 67500, tags: { availability: ["Unobtainable"], rarities: ["Secret"], elements: ["Water"], aoes: ["Full"], mechanics: ["CC"] } },
  // { name: "Kid Boo", placementCost: 1600, maxCost: 77800, tags: { availability: ["Permanent"], rarities: ["Secret"], elements: ["Cosmic"], aoes: ["Cone"], mechanics: ["Immune"] } },
  // { name: "Boohon", placementCost: 1600, maxCost: 77800, tags: { availability: ["Permanent"], rarities: ["Secret"], elements: ["Cosmic"], aoes: ["Cone"], mechanics: ["Immune", "Summoner", "Buffer"] } },
  // { name: "Choy Jong En", placementCost: 1800, maxCost: 80400, tags: { availability: ["Unobtainable"], rarities: ["Secret"], elements: ["Fire"], aoes: ["Line"], mechanics: ["DOT", "Nuke"] } },
  // { name: "Friran", placementCost: 1400, maxCost: 80100, tags: { availability: ["Unobtainable"], rarities: ["Secret"], elements: ["Nature"], aoes: ["Cone"], mechanics: ["Ability", "Immune"] } },
  // { name: "Eizan", placementCost: 3000, maxCost: 136550, tags: { availability: ["Permanent"], rarities: ["Secret"], elements: ["Unbound"], aoes: ["Full"], mechanics: ["Ability", "Immune", "CC", "Debuffer"] } },
  // { name: "Yehowach", placementCost: 1400, maxCost: 67550, tags: { availability: ["Permanent"], rarities: ["Secret"], elements: ["Cosmic"], aoes: ["Full"], mechanics: ["Ability", "Buffer", "Debuffer", "Immune"] } },
  // { name: "Yomomata", placementCost: 2500, maxCost: 87300, tags: { availability: ["Permanent"], rarities: ["Secret"], elements: ["Fire"], aoes: ["Full"], mechanics: ["DOT", "Ability", "Summoner"] } },
  // { name: "Sukono", placementCost: 2000, maxCost: 98200, tags: { availability: ["Permanent"], rarities: ["Secret"], elements: ["Curse", "Fire"], aoes: ["Cone"], mechanics: ["DOT", "Ability", "Immune", "Domain", "Debuffer", "Nuke"] } },
  // { name: "Gujo", placementCost: 1800, maxCost: 90200, tags: { availability: ["Permanent"], rarities: ["Secret"], elements: ["Cosmic"], aoes: ["Full"], mechanics: ["CC", "Immune", "Ability", "Domain"] } },
  // { name: "Igros", placementCost: 2000, maxCost: 95000, tags: { availability: ["Permanent"], rarities: ["Secret"], elements: ["Curse"], aoes: ["Full"], mechanics: ["Immune"] } },
  // { name: "Valentine", placementCost: 2100, maxCost: 107600, tags: { availability: ["Permanent"], rarities: ["Secret"], elements: ["Passion"], aoes: ["Circle"], mechanics: ["Immune", "Ability", "Debuffer"] } },
  // { name: "Soburo", placementCost: 1600, maxCost: 61850, tags: { availability: ["Unobtainable"], rarities: ["Secret"], elements: ["Passion"], aoes: ["Circle"], mechanics: ["Ability", "Buffer"] } },
  // { name: "Isdead", placementCost: 3200, maxCost: 103000, tags: { availability: ["Unobtainable"], rarities: ["Secret"], elements: ["Passion"], aoes: ["Circle"], mechanics: ["Ability", "CC", "Buffer"] } },
  // { name: "Saber Alter", placementCount: 3, placementCost: 2000, maxCost: 133000, tags: { availability: ["Permanent"], rarities: ["Secret"], elements: ["Curse"], aoes: ["Circle"], mechanics: ["CC", "DOT", "Debuffer", "Immune"] } },

  // { name: "Arc", maxCost: 0, tags: { availability: ["Limited"], rarities: ["Exclusive"], elements: ["Holy"], aoes: ["ACone"], mechanics: ["Ability", "CC", "Summoner", "DOT"] } },
  // { name: "Hebano", maxCost: 0, tags: { availability: ["Limited"], rarities: ["Exclusive"], elements: ["Fire"], aoes: ["Circle"], mechanics: ["DOT", "Buffer", "Debuffer"] } },
  // { name: "Marlin", maxCost: 0, tags: { availability: ["Limited"], rarities: ["Exclusive"], elements: ["Nature"], aoes: ["Circle"], mechanics: ["Ability", "CC", "Buffer", "Debuffer"] } },
  // { name: "Rudie", maxCost: 0, tags: { availability: ["Limited"], rarities: ["Exclusive"], elements: ["Water"], aoes: ["Full"], mechanics: ["Ability", "Meter", "Buffer", "Nuke"] } },
  // { name: "Haruka Rin", placementCost: 1200, maxCost: 24400, tags: { availability: ["Unobtainable"], rarities: ["Exclusive"], elements: ["Passion"], aoes: ["Full"], mechanics: ["Buffer"] } },

  // { name: "Brisket", maxCost: 0, tags: { availability: ["Permanent"], rarities: ["Mythic"], elements: ["Spark"], aoes: ["Circle"], mechanics: ["Ability", "Meter"] } },
  // { name: "Gear Boy", maxCost: 0, tags: { availability: ["Permanent"], rarities: ["Mythic"], elements: ["Spark"], aoes: ["Circle"], mechanics: ["Ability", "Meter"] } },
  // { name: "Kazzy", maxCost: 0, tags: { availability: ["Permanent"], rarities: ["Mythic"], elements: ["Nature"], aoes: ["ACone"], mechanics: ["Ability", "CC", "Debuffer", "Meter"] } },
  // { name: "Rohan", maxCost: 0, tags: { availability: ["Permanent"], rarities: ["Mythic"], elements: ["Blast"], aoes: ["Splash"], mechanics: ["Immune"] } },
}