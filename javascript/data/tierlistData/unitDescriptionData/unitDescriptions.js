
const unitDescriptions = {
  Al: {
    pros: ["cleanses allies","buffs when cleanse","repulses","decently cheap to max"],
    cons: ["useless before max upg","requires meter","2 placement"],
    description: "Al is a support unit which requires heavy investment, costing 47k yen before he gains any support capability. Once fully upgraded, Al will repulse enemies on hit and gain a meter. Anytime a unit in Al’s range is debuffed, Al will gain 5% meter that when full, cleanse all allies in range and buffs them for 30s. Al is a highly conditional support only being usable in Martial stages and for certain tournaments. "
  },
  Ali: {
    pros: ["good burn dps","decent aoe","detonates burn early"],
    cons: ["removes burn","better dps options","not great at anything"],
    description: "Ali is a dps unit which has decent damage and aoe. When he attacks a burning enemy, he removes the burn and increases his damage and range. Ali is a simple and good starting unit for those who are new to the game and need a fire unit that's easy to obtain"
  },
  Alocard: {
    pros: ["bleed (8s)","applies wounded","early full aoe"],
    cons: ["Needs to be upgraded for best use of utility"],
    description: "Alocard is a timeless support having the best application of wounded. Wounded enemies take 20% increased dmg from all sources making him an invaluable support. Having an 8s bleed and early full aoe, you can slot Alocard into any team comp, especially against enemies with regen. Overall Alocard is an amazing support to default to, assisting you in almost any situation. "
  },
  Arc: {
    pros: ["Jack of all trades with Slow, Repulse and Bleed","Decently high range and Good Aoe"],
    cons: ["Takes a decent amount of time to setup","CC is outclassed by most other units","Loses out on dps by taking support"],
    description: ""
  },
  Arin: {
    pros: ["max 3 placements for the cost of 1","decent full aoe dps","rumbling"],
    cons: ["expensive","giant team reliant","rumbling can only be used in longer content"],
    description: "Arin is a dps unit of the Giant category. He ends on a full aoe at max upg with good dps and range. Arin cannot be sold and buffs allies for 120s on placement; he will also nuke enemies in range after a short delay after placing. 120s after being placed, Arin will instead buff himself and remove his support buffs. Every placement will copy the upgrades of the highest upgraded placement, this means you can max all 3 placements for the cost of 1. The rumbling ability needs a maxxed out Zak, Arin, and Giant Queen. It will sell and remove a placement from all three of them activating the Rumbling dealing 20m damage + 35% max hp (this damage can crit). Although this ability is far too expensive for shorter modes, it is useful for longer content and tournaments. "
  },
  Astolfo: {
    pros: ["full aoe repulse","spears enemies increasing the dmg they take","buffs allies","teleports"],
    cons: ["expensive","buffs take a while to stack"],
    description: "Astolfo is an amazing support with a full aoe repulse on placement. Although his buffs can be expensive to max out and are costly, he is one of the best options for long for content such as rifts and infinite. Astolfo has three different actives, hippogriff is an active that allows Astolfo to teleport to a point on the map repulsing enemies. Spellbook gives the unit protected status effect immunity while buffing his own buffs on that unit by 2x. The final spear ability separates enemies souls from their body, damaging the soul damages the enemy up to 15% of their max hp. Overall Astolfo is solid support for any gamemode and is a must have for infinite.  "
  },
  Aurin: {
    pros: ["reduces cost for units","buffs units dmg","tranformation ability"],
    cons: ["cannot control where markers spawn","limited to 5 buffs"],
    description: ""
  },
  Boo: {
    pros: ["self cleanse","buffs dragon sphere units","stuns in base form"],
    cons: ["requires kills for candy","requires upg 7 to transform","long time to setup without bodibi"],
    description: "Boo (Evil) is a unit with 6 different transformations having the cosmic element (self-cleanse). In base form, Boo will stun enemies. Killing enemies gives candy needed for transformation (Alternatively, you can reduce the max summons cap for transformation). Every transformation of Boo makes the next form stronger (stacking) until you reach the final transformation; Boohan (Evil). Boohan will buff dragon sphere units in range (self-included) as well as spawn summons every 10 kills. Kills on enemies turn them into candy causing them to explode dealing aoe dmg. Selling any form of Boo will turn them into Kid Boo (Evil) who gains damage based on the number of transformations before getting sold. Kid Boo is an amazing boss killer doing increased dmg to the highest hp enemy (targeting is locked to the highest hp enemy). In addition to being immune to status effects, Kid Boo will follow-up whenever he kills an enemy (5s local cd). Overall Boo is a great unit that can provide utility and dps when needed."
  },
  BrolziSuper: {
    pros: ["full aoe rupture on placement","heavy crit scaling","cleanses self of debuffs","buffs unbound"],
    cons: ["cannot use other domains","loses buffs when domain expires","expensive overall"],
    description: "Brolzi is a high dps unit that scales massively with crit. Any crit rate over 100% is turned into crit damage. This makes birb the ideal familiar for him as Brolzi gains crit rate from his passive and from domain. Brolzi will followup buffing his own damage. If he crits, followup with attack 3 (full aoe) and apply rupture. This makes him the best rupture unit, as it is consistent and on placement. Brolzi buffs the crit rate and crit damage of unbound units when the domain is active (this includes himself). You want to use the domain as soon as possible to stack the buffs. The downside to Brolzi domain is that you cannot use other domains while it's active, making him a bad pair with The Falcon and Koguro. Overall Brolzi has among the highest dps of any unit in the game, scaling massively with crit while having support capability, making him a top tier carry.    "
  },
  Byeken: {
    pros: ["pulls enemies","repulses","applies tether which slows enemies and causes them to share dmg"],
    cons: ["takes a while to build bar","pull is limited to 3 times per game and cannot pull the same enemy twice"],
    description: "Byeken (Ronin) is an amazing support unit with high dps capability making her an all around great unit. She repulses and tethers enemies linking them to her & causing them to take shared dmg. Anytime she would get debuffed or afflicted by an ailment, Byeken will follow up attack as well as on tethered enemies on attack and death. She can also pull all enemies to her location making her great at stalling."
  },
  ChoyJongEn: {
    pros: ["thick line aoe","good burn dps","Only need to max 1 to get most out of nuke"],
    cons: ["needs time and constant intense burn application to maximize dps"],
    description: "Choy is a great option if you’re looking for a burn dps. His kit revolves around his intense burn passive. When intense burn expires, Choy will nuke enemies affected by the burn, based on how long the duration of intense burn was. Keeping that in mind, only the first/ strongest Choy needs to be maxxed while the other Choy are only needed to refresh and extend the burn duration. This ensures the burn stays on for longer, increasing the damage dealt by the nuke upon expiration. Ultimately Choy is an amazing burn dps dealing massive damage over time."
  },
  Clatakiri: {
    pros: ["slows on hit","follows enemies","has stun"],
    cons: ["stun is inconsistent","forcefully moves making him hard to manage"],
    description: "Clatakiri (Mochi) is a very unique support in terms of his crowd-control capabilities. This is due to his ability to chase enemies along the track allowing him to excell in stalling leaks, but also very annoying to use for stalling larger groups. You'll mainly be using him for early defend while you farm and setup your units, then getting him to full aoe and set to closest for defending later on."
  },
  Conqueror: {
    pros: ["Mediocore dps","high range and wide cone aoe","full AOE when attacking bosses"],
    cons: ["relies on life stock","no immunity","Needs bosses to be alive for full potential"],
    description: "Conqueror vs Invulnerable is a high dps unit attacking constantly even when no enemies are in range. This unit scales with lifestocks with each lost lifestock giving 20% range & reducing the number of attacks between enhanced attacks. With 2 lifestocks lost this unit will always deal 120% more damage! This damage buff scales with their other passive which deal 50% more damage when attacking a non-boss enemy. When attacking a boss this unit will lose the 50% damage buff however, their attacks will convert into full aoe. If you're in need of a dps, stand ready for their arrival."
  },
  CuChulainn: {
    pros: ["rupture (upg 7)","ignores enemy dodge chance"],
    cons: ["Better Rupture options","Circle aoe application"],
    description: "Cu Chulainn is one of the few rupture applicators in the game currently. While his conditions to apply rupture are pretty straight forward unlike Vogito or Goblin Killer, with the addition of Brolzi Super, its pretty hard to justify use cases for him anymore."
  },
  DarkMage: {
    pros: ["applies slow and bleed","good DOT dps","applies diseased buffing DOT including allies"],
    cons: ["requires meter and final upgrade for diseased","2 placement and steals meter gain from self"],
    description: "Dark Mage (Evil) is a solid DPS unit whose main strength is dealing DOT (damage over time). Dark Mage slows enemies on hit and applies bleed making him a great support option. In addition to Dealing more dmg to debuffed enemies, bleeding enemies that die will apply bleed to all enemies in Dark Mage's range (10s). On his final upgrade, Dark Mage will gain a bar when full, apply burn, bleed, and diseased (enemies take 50%+ dmg from DOT) , increasing his dmg and DOT dealt by other units. Overall Dark Mage is a solid dps unit that can provide exceptional support.\r"
  },
  Dawntay: {
    pros: ["good dps","insane scaling with crit"],
    cons: ["weak on placement","relies on meter","Gets spa capped during DT"],
    description: "Dawntay (Jackpot) is an amazing dps unit who scales amazingly with crit. On placement his spa is only 1s which is great for corrupting with Sokora. Dawntay will enter his Devil Trigger form when meter if full, increasing dmg and range while converting attacks into full aoe. Overall he is a great dps who can be used in practically any situation."
  },
  Diogo: {
    pros: ["Full map timestop","Cheapest timestop to unlock (37k)"],
    cons: ["time stop has a longer cd compared to other units"],
    description: ""
  },
  Divalo: {
    pros: ["High placement damage","Time Erasure","Counters"],
    cons: ["Expensive to place","Thin Line Aoe"],
    description: "(Include 60k for time erasure)"
  },
  Eizan: {
    pros: ["immune to status effects","aura ignores sheilds","stops enemies in their tracks with ability"],
    cons: ["expensive","aura has relatively small range"],
    description: "Eizan (Aura) is a unit which deals good damage while being immune to status effects. The closer enemies are, the more damage they take from the Aura passive which deals damage every second while also ignoring shields. Eizan is great for stalling, forcing enemies to walk back for 5s upon losing a life stock. Eizan's ability Dabo 81 will create a wall stopping all enemies in their tracks for 15s. Overall Eizan (Aura) is a great unit excelling in many situations."
  },
  Emmie: {
    pros: ["Thick line aoe","freeze","Able to extend freeze"],
    cons: ["short base freeze duration","Isn't line on placement"],
    description: ""
  },
  Foboko: {
    pros: ["Line aoe on placement and freezes","-5% spa for units in range","cleanses 1 unit in range (30s)"],
    cons: ["Really short aoe on placement","Bad aoe when maxed","better freeze and cleanse options"],
    description: ""
  },
  GearBoy: {
    pros: ["Decent dps","self-buff ability which resets attack cd"],
    cons: ["mid aoes","meter reliant","relatively low range"],
    description: "Gear Boy (Hungry) is a great dps unit which has the spark element making him immune to dmg reduction debuffs eg: energy drain. With a decent black spirit (70%+) he can have full uptime on his growing boy passive and Greek Cancel, permanently buffing him. Being cheap to max and with 4 placements, Gear Boy is a solid dps option. "
  },
  GG: {
    pros: ["Insanely high potential dps from balls","Cleanses allies in range","Curse element to do even more to bosses"],
    cons: ["Balls have a small aoe","Max of 10 balls across all placements per person","decently expensive"],
    description: ""
  },
  GiantQueen: {
    pros: ["Buffs Giant Category allies by up to 140% Dmg","Does more damage per giant unit placed"],
    cons: ["Loses a placement when sold","Relatively expensive"],
    description: ""
  },
  GoblinKiller: {
    pros: ["places traps","rupture","Insanely high burst damage","Very cheap due to cost reduction"],
    cons: ["traps are single hit","diminishing return due to last placements being cheaper"],
    description: ""
  },
  GujoFamiliar: {
    pros: ["does attack 3 and freezes when enemies leave range","immune to status effects","high dmg","time stop"],
    cons: ["Range is relatively low with the vanguard familiar","need enemies to leave range to be activate stun"],
    description: "With his familiar Gujo becomes a hard hitting dps with support capability. When an enemy leaves his range, Gujo will stun all enemies in range and will fire attack 3 at that enemy (20s) who escaped (this has infinite range). Along with having one of the best time stops in the game, Gujo is immune to status effects and gains 0.1% damage per wave. This seems like a small amount but it becomes a significant buff with the familiar equipped. Overall Gujo is a solid unit who is great even without monarch, his only real downside is his short range.    "
  },
  HarukaRin: {
    pros: ["All around buffer","no yen required for buffs"],
    cons: ["Only 2 placement","Small range","requires waves to max out buffs"],
    description: "Haruka Rin is a unit which can provide support without you needing to upgrade her, just place her for 1.2k yen. Every wave she will buff units in range for 3% dmg up to 18%. After 6 waves she will grant units 10% range. Some of Haruka’s downsides are that she has small range, and is outdated and overshadowed by other support units."
  },
  Hebano: {
    pros: ["reapplies burn","applies scorched"],
    cons: ["decently niche usecases","tree has small range"],
    description: ""
  },
  Hei: {
    pros: ["great full aoe burn dps","relatively cheap"],
    cons: ["removes burn","high spa and short range","steals burn from self and relies on other burn units"],
    description: ""
  },
  Ichiga: {
    pros: ["high range when lifestocks are lost","Able to nuke with Horn of Salvation","Cheap to max out","Counts for all groups"],
    cons: ["Medicore Dps","Circle Aoe on last upgrade","Requires lifestocks"],
    description: "Ichiga is a solid dps unit that relies on lifestocks for his full potential. He is able to remove lifestocks with his ability buffing his dmg. His range at max potential is insane. He has the cosmic element self cleansing him every 30s and counts as a unit from every group. This means he gets buffed in any stage where there are units who get buffed, such as the AOT ex stage and allows him to benefit from support units such as Giant Queen making  him a universal unit. "
  },
  Iscanur: {
    pros: ["free placement and auto upgrade","Insane dps","self cleanse"],
    cons: ["high spa and single hit","struggles with armored and high regen scaling"],
    description: "Iscanur is a heavy hitting unit with one of the highest dps in the game. His unique mechanic allows you to burn up your teams giving him an hour stack per slot burned and free placement once everything is burned. With everything burned, Iscanor will upgrade himself every wave once placed making him auto clear any stage. At max upgrade Iscanor unlocks the ultimate ability keeping him at 12 stocks while also gaining a burn aura in range incinerating everything. After using ultimate Iscanur sells himself after 5 waves, so it's best to use it 4 waves before the final wave. Iscanur struggles against heavy shielded enemies, high regen scaling and armored."
  },
  Isdead: {
    pros: ["Freeze","time stop","good dmg on placement","doubles marked units' damage during ability"],
    cons: ["expensive to place (3.2k)","marks only 1 ally per placement and can be hard to manage"],
    description: ""
  },
  Kazzy: {
    pros: ["freeze","applies bubbled on hit","spawns bubbles on the track dealing dmg and applying bubbled","cleasnes all allies in range with heaven ability (10s local cd)"],
    cons: ["relies on meter","requires constant swapping for optimal dps","single hit for bubbled"],
    description: "Kazzy (Queen) is a unit which can provide excellent support as well as dish out incredible damage. In her Undine form, Kazzy will freeze enemies and apply bubbled (Units will deal 30% more damage on their next attack on a bubbled enemy). She will also spawn bubbles on the track dealing damage to enemies who touch them by applying bubbled. Kazzy's necro form will increase her damage and burn enemies, as well as dealing increased damage to bubbled enemies. Kazzy additionally has the Heaven ability which will cleanse all allies in range of debuffs and status effects (local 10s cd) making her an all around great unit"
  },
  Ken: {
    pros: ["Applies bleed and slow on placement","Bleed lasts a long time","Relatively cheap and good w/o monarch"],
    cons: ["Slow doesn't last very long","Need to be unevo to make most out of support"],
    description: ""
  },
  Kiskae: {
    pros: ["Inflicts wounded and bleeds","Stuns the first time a bleeding enemy is attacked"],
    cons: ["wounded unlocks at upg 4","Bleed only lasts 3s"],
    description: ""
  },
  Koguro: {
    pros: ["3 unique domains each with their own support capability","follows enemies on attack (disabled during domain)","copies the elements of your team","buffs allies meter gain","10x mapwide nuke (1 time use)"],
    cons: ["expensive to place (3.5k)and max (151k)","low dps without monarch"],
    description: "Koguro (Unsealed) is a unit which can deal map-wide support while also dealing significant damage. When attacking, she will teleport and move with the enemy in her range unless a domain is open in which Koguro will teleport to the first enemy on the track. A major strength of Koguro is her ability to take the elements of all the units on your team, allowing her to buff herself from her domains and allows herself to gain buffs from element specific passives such as Quetzalcoatl and Sukono. Koguro’s domains include sand which has mapwide repulse, ice which has mapwide freeze, and fire which has mapwide burn. Along with her utility, Koguro has a 10x mapwide nuke making it the arguably the best nuke in the game."
  },
  Leo: {
    pros: ["infinite stacking burn","good full aoe dps","powerful active"],
    cons: ["loses range rapidly when active is on","decently expensive with bad early defend"],
    description: ""
  },
  Lfelt: {
    pros: ["good dps with followups","good range and aoe","loveshot ability"],
    cons: ["loveshot is limited to 20 enemies and 3 uses per game","reliant on meter"],
    description: ""
  },
  LordFriezo: {
    pros: ["12 placements will all minions","minions are free to place","minions give different buffs depending on type"],
    cons: ["expensive to max including minions","mediocre dps"],
    description: "Lord Friezo is a unit that has placeable minions which count as units. There 3 different categories of minions, each with their own group effect meaning its ideal to only place one category rather than mixing and matching. 3 alien cadets spawn summons; 3 alien soldiers make the minions status and debuff immune; 3 alien elites increase Friezo damage and range. This unit pairs really well with Yehowach and The Falcon. Overall this unit is decent in terms of dps, though he is very expensive when maxxing all placements and minions. "
  },
  Luce: {
    pros: ["applies nullify on hit","full aoe at max"],
    cons: ["Overshadowed by The Witch"],
    description: ""
  },
  MonkeyKing: {
    pros: ["very high dps","counts as any group","good against dmg reduction"],
    cons: ["expensive","requires setup and supporting units"],
    description: ""
  },
  Newsman: {
    pros: ["slows","applies bubbled","cheap and 4 placement"],
    cons: ["cannot slow bosses"],
    description: "Newsman is an exceptional support being one of the best in the game. Costing only 800 yen to place with 4 placements, he is super affordable providing early support and dps. Enemies are slowed by 50% and are inflicted with bubbled. The next attack a unit does on a bubbled enemy does 30% increased dmg making newsman a great damage amplifier. Newsman’s only downside is his inability to slow bosses, despite this he is definitely worth bringing along. "
  },
  NotGoodGuy: {
    pros: ["follows up on burning enemies","good dps and can pop burn","full immunity during dragon install"],
    cons: ["spa capped at 6s during dragon install","followup is attack 1 (small cone)"],
    description: "NotGoodGuy (Free) is an amazing burn dps unit. He will follow up (attack 1[small cone]) when hitting burning enemies. His first ability (Hell) will consume 2 bars to detonate the remaining dot on the enemies making him a great pair with Dark Mage. NotGoodGuy’s second ability dragon install consumes his meter (4%/s) buffing him. While in dragon install this unit will gain damage, range, and immunity to ailments and debuffs while also applying burn to all enemies in aoe when an enemies dies while mode is up making him a unit worthy of his position."
  },
  Priestess: {
    pros: ["Stuns and slows","Full aoe on placement","little investment required"],
    cons: ["Slow is only 30%","Low range on placement"],
    description: ""
  },
  Quetzalcoatl: {
    pros: ["Buffs fire allies by 20%","good dps","Medium investment until full aoe"],
    cons: ["Circle aoe on placement","Not all attacks are full aoe","Fairly expensive to max"],
    description: "Quetzalcoatl is a dps unit of the fire element. She buffs all fire allies in range by 20% making her a decent buffer. Quetz will swap her attack pattern/aoe, each time she swaps she buffs her damage. At max upg she will swap between circle and full aoes making her somewhat inconsistent. Overall there are better fire dps units to use such as Leo and Iscanur.  "
  },
  Reimu: {
    pros: ["good dps","dodges enemy attacks","gives luck boost in odessey"],
    cons: ["spray aoe allows her to miss targets","requires positioning to make use of layers"],
    description: "Reimu is a great unit having good dps and a crazy low SPA. She dodges all attacks and is an amazing shield breaker. Reimu gains layers when constantly attacking. Each layer will add another line to her AOE giving her aoe a spray shape at 3 stacks. Her ability will give her 4 layers basically making her full aoe for 10s. Overall Reimu is a great unit whose only real downside is her awkward aoe.   "
  },
  Riner: {
    pros: ["Free placement after 3 units are placed","Gives 2 shield stocks to tank leaks"],
    cons: ["Can't be placed wave 1 like Rohan","Single hit on placement"],
    description: "Riner is a unit with free placements placing himself every 3rd placement on the map. On placement he has a thick line aoe with short range. When 2 stocks are lost, instead gain 2 shields stocks. This can be useful against leaks and for modes such as pvp. Riner can help skip early waves being free to place, making grinding gamemodes such as worldlines less of a drag.   "
  },
  RogitaSuper: {
    pros: ["reduces cost and swaps needed for fusion units and buffs their crit","scales with crit","dodges attacks"],
    cons: ["short range on placement","requires heavy investment for max potential"],
    description: "Rogita is a support for fusion units (Ichiga and Monkey King included) while having a high dps ceiling. At maximum potential he has the highest dps out of any unit in the game. Rogita has 100% crit rate and dodge chance on placement, does followup whenever units crit; He will reduce the cost of fusion units by 25% and make swaps count as 2 for units such as Vogito. Whenever Rogeta crits, he will give fused units 50% crit rate and take half of their crit damage. The crit damage Rogeta gains this way has no cap, meaning you can stack deadeye fusion units with the chili familiar for crazy crit multipliers. Overall Rogita is great dps with high crit scaling who can support fusion units. "
  },
  RogitaSuper4: {
    pros: ["good placement","full map teleport","good dps"],
    cons: ["expensive (184k)","monarch reliant"],
    description: "Rogita (Super 4) is a great unit on placement costing only 1.2k yen and having a map wide teleport (20s cd). Everytime Rogita teleports he lowers his SPA by 20% for 20s. Rogita has a 10% chance to not attack, when he misses, slows all enemies in range and increases his dmg. Rogita has a clone that will mimic his attack. This means that Rogita is always doing 2x dps! Rogita’s downsides are his expensive cost (182k) and having no immunity.     \r"
  },
  Rohan: {
    pros: ["first placement is free","follows up and gains status effect immunity on crit"],
    cons: ["reliant on crit","needs to be upgraded before can followup"],
    description: "Ultimate Rohan has a free placement being placed alongside the first placed unit (Excluding farms).This makes him an amazing early game choice allowing you to farm while Rohan defends increasing overall economy, enabling you to max farms and units more efficiently. When dealing crit, Rohan will gain status effect immunity and will follow up dealing damage. Overall ultimate Rohan is a great until to bring along supporting almost any team comp.\r"
  },
  Roku: {
    pros: ["Stuns on swap from Vogita","Slows on swap from Roku","Vogito inflicts rupture, ignores dodge change and 50% of enemy defense"],
    cons: ["reliant on meter and black spririt for optimal useage","Vogito is expensive to max"],
    description: "Roku (Angel 3) is a great early game unit costing only 1k yen to place down. When Roku's bar is full, he will swap out with Vogita (Angel) slowing all enemies in range. When swapping back to Roku all enemies in range are slowed. Roku additionally has a map wide nuke that deals massive damage. After 15 swaps, Roku and Vogita are ready to fuse into Super Vogito. Super Vogito is a powerful unit who ignores 50% of enemy defense, ignores dodge chance, and inflicts rupture while also dealing decent damage. These factors make Roku (Super 3) a flexible unit usable in a wide variety of team comps."
  },
  Rudie: {
    pros: ["full aoe & dodges enemy attacks","Buffs units on placement"],
    cons: ["Better buff options","reliant on meter"],
    description: "Rudie is a unit which can provide decent dps and support. He gains a meter on placement and gains mana passively as well as on hit. Anytime you consume mana, Rudie will buff all allies in range and will also increase the dmg on his next attack based on the mana used. Rudie dodges all attacks and has full aoe on his final upgrade making him a solid unit overall. \r"
  },
  Salter: {
    pros: ["full aoe slow","full status and debuff immunity","Early full aoe"],
    cons: ["debuffs your team","reliant on Sokora for optimal usage","mediocore dps"],
    description: "Saber (Black Tyrant) is a great DPS unit especially paired with Sokora (Angra Mainyu). When Sokora is placed anywhere on the map, Saber (Black Tyrant) will perform an extra attack based on Sokora's spa. Saber is immune to status effects and debuffs; additionally, she slows enemies with her Aura of Corruption passive. Every 5 attacks, Saber will attack with Dark Excalibur, dealing massive damage. Although Saber will debuff your units, for every unit she debuffs, her dmg will increase (corrupted units are immune to the debuff), making her an amazing carry option."
  },
  Slime: {
    pros: ["f2p friendly & cost efficient","full aoe","great dps"],
    cons: ["doesn't gain as much from extra buffs","relatively small range"],
    description: "Slime (King) is a f2p friendly unit who excels even without a trait ( note that monarch is his worst trait). His passive increases the damage of each placement, & any buff applied to 1 placement applies to all other placements (only works for single targe buffs; ex: Orehimi). Every upgrade on 1 placement reduces the cost of the upgrades of other placements by 3% making him super easy to max out. Having high full aoe dps as well as an ability that identifies enemies makes him an excellent unit to bring along for almost any situation."
  },
  SmithJohn: {
    pros: ["deal dmg in range on swap","2 active nuke abilities","all upgrades have high coverage Aoes","Able to stack damage on bosses during smith John"],
    cons: ["high placement cost","takes time to build Lord of Shadows nuke"],
    description: "Smith John is an amazing dps unit with the unknown element making him immune to everything. When unevo, Delusional boy is a support unit which can work as a replacement for limited supports such as Haruka (although weaker). Smith John has high dps, always doing +40% dmg against enemies he cannot 1 shot. His undercover agent passive gives Smith +5% dmg when attacking the same enemy infinitely stacking. Smith John's assassinate ability will nuke the highest hp enemy in range, which works with his passives making it great for bosses. When Smith's meter is full, he will nuke all enemies in range and Swap to Lord of Shadows.<br><br>Lord of Shadows has amazing aoe on all upgrades, having full aoe on max. when swapping back to smith Shadow will also nuke all enemies in range. Shadow's atomic nuke ability has full map range and is infinitely stacking based upon number of swaps (only counts swaps when atomic gets unlocked) making it great ability for longer modes."
  },
  Soburo: {
    pros: ["All around buffer","Fast setup if you have the yen","Refunds most of money spent (after popping ability)"],
    cons: ["Mediocore buff until you invest","better buff options for the cost"],
    description: "Soburo is a support unit that buffs allies’ damage and range on placement. He will also buff allies' damage every time they use an ability. Soburo has good range and does low dps. His ability will refund most of his cost and increase the damage buff he gives by 2x. Overall Soburo is dated and there are better support options such as The Smith. "
  },
  Sokora: {
    pros: ["Averages out Spa","Able to use ability on placement"],
    cons: ["Uses lifestocks when corrupting","Corrupting isn't that useful on low spa units"],
    description: "Sokora is a support unit that pairs well with Saber (Black Tyrant) allowing Salter to have an extra attack building her dark excalibur faster. Sokora’s main gimmick is her ability to average out units SPA. Sokora does this by corrupting units with her ability, consuming lifestocks in the process. Any unit she corrupts, she will take their SPA and average it with her own; corrupted units attack on her SPA instead. This means if you take a high SPA unit and a low SPA unit and corrupt them both, the overall SPA will be lower for the high SPA unit. An example is to corrupt a low SPA unit such as Reimu and a high SPA unit such as Gujo, this process will give Gujo a lower SPA making him attack quicker increasing his dps. "
  },
  SukonoFamiliar: {
    pros: ["applies cleave","does attack 2 (full aoe) when applying cleave to an enemy","burns and bleeds","extremely high dps and nuke"],
    cons: ["no status effect immunity before upg 9","looses followup when there are no new enemies to apply cleave onto"],
    description: "Sukono with his familiar becomes a new unit entirely, elevating him to be among the best units in the game. On placement he has good range and full aoe through his follow up along with having a super cheap early full aoe (14k) Sukono applies bleed and cleave (enemies take 20%+ dmg from bleed) making him a great pair with other bleed units. Sukono is curse and buffs curse units by 30% making him good for bosses and a great partner for Koguro. At upg 9 Sukono gains the fire element, burn, and status effect immunity while keeping his full aoe followup applying bleed. Sukono has one of the highest raw dps in the entire game while also being affordable and having a full range nuke. Overall this unit hardly has any weaknesses, any weaknesses this unit does have is overshadowed by his utility and can be made up for by pairing him with other units. "
  },
  TengonFamiliar: {
    pros: ["buffs fire and blast units","very high full aoe dps"],
    cons: ["mediocre range"],
    description: "Tengon with his familiar becomes a dps machine with support capability buffing fire and blast allies by 30%. He will also apply scorched to enemies buffing fire damage by an additional 20%. Tengon has a 60% chance to dodge attacks at max stacks and is guaranteed to crit on enemies that have been debuffed. Since he applies scorched he will always get this buff. His final upg gives him full aoe with a decent SPA and multi-hit. His only real downside is his mediocre range which can be supplemented by units such as The Smith. Overall Tengon is a great unit with high dps and great support.   \r"
  },
  TheFalcon: {
    pros: ["1k to place & max","repulses enemies & slows","ignores dmg reduction & reduces dmg reduction in range","buffs allies"],
    cons: ["not always full aoe","requires some setup"],
    description: "The Falcon is a unit which does it all. While he does require some setup, the payoff is more than worth the effort. Place the Falcon for 1k and use the eclipse. While the eclipse is active you can use units such as Newsman, Sukono, Yehowach, The King, etc. to defend. Using the Eclipse again will give you the Falcon of Light who maxxes himself upon arrival. In this form The Falcon buffs allies, slows and repulses enemies, reduces the dmg reduction of enemies while ignoring it on his own and summons demons which give 100 yen on kill, all while having good dps on his own. "
  },
  TheKing: {
    pros: ["turns debuffs into buffs","insane full aoe dps","teleports and cleanses allies","cannot get branded"],
    cons: ["can tp to allies even when u dont want him to","not immune to status effects","somewhat reliant on debuffs"],
    description: ""
  },
  TheSmith: {
    pros: ["crafts masterworks and weapons buffing units","can grant units immunity"],
    cons: ["relies on takedowns for buffs","single unit buffs"],
    description: "The Smith is an excellent addition to any team providing buffs through the weapons he crafts. Although requiring takedowns, silver weapons are good enough where it is worth using them even if you won't be able to get enough takedowns to afford a masterwork. Only one of each masterwork can be crafted in a single game. The Dragon Slayer buffs units dmg by 40% and DOT by 20% making it a great choice on units like Sukono and The Struggler. If you need support, The Smith is ready to equip your units for battle. "
  },
  TheStruggler: {
    pros: ["insane dps","repulses and bleeds","full immunity in berserker armor"],
    cons: ["inconsistent aoe and dps","small range","expensive"],
    description: ""
  },
  TheWitch: {
    pros: ["full aoe nullify","Perf spa on all upgrades","early full aoe","buffs units who are stunned (works with The Struggler)"],
    cons: ["short range on placement"],
    description: "The Witch is the best applicator of nullify in the game. With a D SPA stat, she will have perfect nullify on all upgrades (nullify lockout is not a problem with perfect spa). The Witch has an early full aoe and buffs units that are stunned by 50% dmg. This pairs well with units such as The Stuggler."
  },
  Todu: {
    pros: ["Able to swap position with allies in range","Works on placement"],
    cons: ["Low range on placement","Niche (normally not worth bringing)"],
    description: "Todu is a support unit able to swap places with other units with his boogie ability. This can be useful if you need to catch leaks or move units to certain places such as the outer statues in the double dungeon stage. Besides his boogie ability, Todu has no use besides his boogie ability making him a niche support used only in specific situations. "
  },
  Vigil: {
    pros: ["Good dps with High followup dps","devently high range during DT"],
    cons: ["weak on placement (until upg 5)","requires cc to followup"],
    description: "Vigil (Power) is a great dps unit who follows up every time a unit is crowd controlled (attack 1 [small circle]). Having the spark element, Vigil is immune to damage reduction debuffs making him great against energy drain. Vigil has a wide cone aoe at max and becomes full aoe in Devil Trigger, gaining dmg and rang plus doing 2x dmg due to the doppelganger clone.. While Vigil follow-up is only a small circle, the dps potential for the few enemies he hits makes him a meta dps worthy of this position."
  },
  Vsjw: {
    pros: ["multple summons","3 nukes","Arise summons scale with enemy hp","Insane single target utility"],
    cons: ["nukes are a 1 time use per game","utility comes from summons dps is medicore"],
    description: "Song Jinwoo and Igros is an amazing all around unit who is immune to everything including weather interactions. On top of having great placement and all around dps, this unit has 4 different elite summons and the arise ability, resurrecting dead enemies which scale off max hp making him amazing for longer modes. Additionally he has 3 different nukes each doing massive dmg. This unit is a must have and fits into any team comp"
  },
  Wolf: {
    pros: ["50% slow","wolves chase out of range","guaranteed crit"],
    cons: ["slow is line aoe"],
    description: "Wolf is a four placement dps unit with a 50% slow. This makes him a good support hybrid able to dish out damage. He is guaranteed to crit against units that are marked, so crit rate does not matter when building him. This means you can have a negative crit rate birb with only crit damage giving you more flexible options. Wolf will also spawn coyotes that hunt down marked enemies, even when the enemy leaves his range. Overall Wolf is a good damage dealer capable of support. "
  },
  Yehowach: {
    pros: ["cheap to max","great placement","high full aoe dps and insane range","support capability"],
    cons: ["high spa","needs setup and a team for optimal usage"],
    description: "Yehowach (Almighty) is an amazing full aoe dps unit. His passive allows him to do 2x dps on top of having crazy range. Additionally he can also be used as a support with a toggle of the ashfallen ability and is immune to status effect while also having a self cleanse. Yhwach and rare units alone is enough to solo most content in the game"
  },
  Yomomata: {
    pros: ["Full AOE burn dps","constant summons","good synergy with other burn units"],
    cons: ["high spa and single hit","no immunity"],
    description: "Yomomata (Captain) is an amazing fire DPS unit offering relatively early full AOE as well as full AOE on his final upgrade. Every enemy Killed by Yomomata will turn into a skeleton, increasing his damage based on how many skeletons are on the track; his ability (North) will stop all skeletons, keeping them in place. Enemies entering Yomomata's range will burn, taking increased damage from burn the longer they stay in his AOE, making him a solid choice for your team."
  },
  Yuruicha: {
    pros: ["Cheap","stuns and does more dmg to stunned units"],
    cons: ["Relatively short range","removes own stun"],
    description: "Yuruicha is a good dps unit with fast spa and multi hit, making her an excellent shield breaker. She stuns on attack, when attacking a stunned unit she will remove the stun and buff her dmg. Yuruicha is immune to status effects and debuffs, while also being cheap (47k yen) to max. Her main downside is her short range on all upgrades.    "
  },
  Zak: {
    pros: ["good dps and decent aoe","potential for huge burst dps","pairs with other giant units"],
    cons: ["expensive","needs monarch and is team reliant"],
    description: ""
  },
  GilgameshFamiliar: {
    pros: ["slows normal enemies and executes them below 10% hp","stuns bosses","high burst potential"],
    cons: ["Mediocre dps","NP stack attack is single target","Relatively Expensive"],
    description: "Gilgamesh with his familiar becomes a unit that provides utility and high burst potential against a single target. He gains a 30% slow against normal enemies (20s) and stuns bosses for 2s. Whenever Gilgamesh activates Enuma Elish, he will attack the first enemy he was targeting for 100% dmg per second for 30s. This means in the span of 30s he will deal up to 3000% damage to a single enemy, making it great for melting bosses or finishing off normal enemies as it can proc his execute on enemies that get below 10% hp (note that bosses cannot get executed). His downsides are mediocre dps without NP stacks, self debuff when around other units and high cost. Overall the familiar makes Gilgamesh a great support unit with decent overall dps. "
  },
  ObitaFamiliar: {
    pros: ["full aoe burn upon replace (10s)","great dps","teleport"],
    cons: ["loses buffs when replacing","monarch reliant","bad early aoes"],
    description: "Obita with his familiar is reborn as a meta dps unit. His passive “Transporting Shinobi” allows you to place and sell Obita keeping his upgrades (10s cd). This works as a teleport allowing you to move him anywhere on the map. Anytime he is placed all enemies in range will be burned by 30% for 8s. This means every time you “teleport” Obita, he will do full aoe burn dps making him a better Rogita (Super 4). His downsides are that he will lose any buffs applied to him after replacing, and that he needs monarch to be viable."
  },
  ValentineFamiliar: {
    pros: ["Teleport Ability","Amazing Single Target Dps","Immune to status effects"],
    cons: ["Bad Aoes especially on clones","Relatively expensive"],
    description: "Valentine with his familiar is elected as your new president. He passively gains a clone every 10 seconds and on every 30 takedowns. Clones last for 20 seconds and do 20% of Valentine's damage. Selling Valentine will swap him with the nearest active clone, allowing for you to teleport him anywhere you wish. Valentine is immune to status effects and deals massive dps making him a great boss killer. His downsides are his bad aoes and somewhat expensive cost. Overall he is an amazing unit and performs as a better version of Monkey King."
  },
  Traitless: {
    pros: ["teleport","stacking dps","low SPA"],
    cons: ["average overall dps","Relies on swapping targets"],
    description: "Traitless is a DPS unit that does not have a base SPA. Every attack on the same enemy will increase his SPA by 0.4 (uncapped) and increase damage by 40% (up to 200%). Whenever an enemy leaves his range, Traitless will teleport to that enemy (2s cd). This makes him good at clearing low-mid range hp enemies. Because of his SPA increasing without a cap, he is not great for tanky bosses. Overall Traitless is a decent unit which can be used skillfully if the player constantly switches his targeting. "
  },
  Thunder: {
    pros: ["full immunity","high burst damage","afk"],
    cons: ["can be unreliable","not great for multi-path tracks","single hit"],
    description: "Thunder is a spawner unit which walks along the track and is immune to all effects. He has 3 different circles, indicated by color. Calamity 1: Enemies hit in the outermost circle take 50% dmg; Calamity 2: enemies hit in the middle circle take 100% dmg; Calamity 3: enemies in the innermost circle take 300% damage. Whenever an enemy is hit by Calamity 3, they take 300% damage for 30s even when leaving the range of the inner circle. This unit makes afking easy and is easily able to deal with the hammer giant crystal. His weaknesses are that he can be unreliable at times and is single hit. <br>"
  },
  Cat: {
    pros: ["applies random cc","good support"],
    cons: ["2 placement","low dps"],
    description: "Cat is a support unit that randomly applies various statuses to enemies excluding hard status effects such as repulse, time stop, walk back. Cat will deal +5% damage for every effect on the enemy, which doesn't do much as her damage isn’t great. Additionally her range is bad across all upgrades, is limited to 2 placements,  and has a bad cost/upgrade ratio. Overall cat is an alright support unit who can have niche use cases. <br>"
  },
  GodAboveHeaven: {
    pros: ["applies any status effect","best timestop","amazing dps"],
    cons: ["low range","mediocre aoes","Bad cost Scaling"],
    description: "God is a swap unit that stands at the top of meta. God (Standless) has a menu that allows him to choose between 9 different status effects which he applies on hit, he gains 50% damage when attacking an enemy inflicted with a status effect. Every takedown spawns a summon equal to 50% of this unit's damage (2s). God (Standless) is immune to debuffs and time stops all enemies on the map for 10s when placed/swapped in (limit to 3 times per game). \r<br>His other form, God (Above Heaven) gains 50% damage when swapped in for 60s and has an active which time stops all enemies on the map for 10s (60s base cd; reduced by 0.2s for every takedown). Whenever this unit stops time he gains 50% damage for 90s. God's only downsides are his relatively expensive cost and small range; overall God is a unit that can do it all having insane dps, high hp scaling summons, and a stacked support arsenal.  \r<br>"
  },
  Lizard: {
    pros: ["great range and aoes","buffs DoT","great dps"],
    cons: ["meter takes a while to charge","spa capped by long animation"],
    description: "Lizard is a dps unit having a radiation meter that charges by 2% on attack and on being attacked. He inflicts burn equal to half of his meter (100% meter = 50% burn damage), enemies in range take 30% damage from DoT. Lizard has an active ability which charges by holding the button and deals (20%-400% damage) based on charge time. When the ability is released it deals damage to all enemies in the AoE and has infinite range making it a decent nuke. (meter resets to 0 after using active). His biggest con is the incredibly long time it takes to charge his meter without black spirit. Overall Lizard is a great dps unit with good AoEs and is inexpensive. \r<br>"
  },
  Senator: {
    pros: ["detonates burn (20s) immune to status effects"],
    cons: ["expensive","mediocre dps"],
    description: "Senator is a unit that follows up with attack 2 when attacking a burning enemy (20s) cd. Whenever the followup hits an enemy it detonates all burn for 200% damage. This makes a good pair and combo with Iscanur and Hebano as you can stack burn and detonate for huge burst. Outside of the specific burn team, Senator is mediocre as a dps and is costly. \r<br>  \r<br>\r<br>"
  },
  Rummie: {
    pros: ["swaps aoes","damage stacking"],
    cons: ["Overshadowed by other dps units"],
    description: "Rummie is a dps unit that swaps her AOEs and stacks damage. She will attack with a circle AOE and followup for 50% of her damage when there are less than 30 enemies. When there are 30+ enemies, she will swap to full aoe and will no longer follow up. Rummie will stack damage when hitting enemies (up to 120%) which resets after not attacking for 10s. Overall Rummie is a great unit which deals good boss damage and can deal with large crowds. "
  },
  Rideon: {
    pros: ["constantly attacks","good dps","good cost scaling"],
    cons: ["purely a stat stick","below average range"],
    description: "Rideon vs Samuel is a versus unit which constantly attacks even with no enemies in range. Each attack they do increases damage by 50% (up to 200%); damage buff resets to 0% after hitting max stacks. Every time this unit attacks, after a 10s delay they will deal that damage again. This essentially doubles Raidens and Sams dps and can proc even if enemies leave range. Overall they are a high dps unit made to dish out damage. \r<br>"
  },
  Callasuba: {
    pros: ["summons","slows","damage buff","nuke"],
    cons: ["mediocre base stats"],
    description: "Callasuba are a utility unit with each member unlocking a new function.\r<br>Attack 1: slows enemies by 30% on hit and reduces spa by 15s for 30s\r<br>Attack 2: Every 15s cleanses allies in range and buffs allies dmg by 15% for 15s \r<br>Attack 3: Summons Dark on the track which has 100% of damage as hp, gaining 10% hp/s (up to 1000%); respawns 30s after she dies\r<br>Attack 4: unlocks the crimson mage ability; deals 1500% damage to all enemies in range and disables this unit for 40s after. \r<br>Overall Callasuba is a great addition to any team with their unique kit being able to slow enemies, buff allies, deal with leaks, and having a nuke."
  },
  Hellkiller: {
    pros: ["1st person roam","very high dps"],
    cons: ["ability lasts for 20s with a 180s cd","High Cost"],
    description: "HellKiller is a high dps unit that consumes ammo stacks. Each attack consumes 1 ammo, after 3 ammo are spent, he will reload for 4s and swap weapons, refreshing ammo stacks and increasing damage by +50% for 10s. When an enemy drops below 50% for the first time, Hellkiller will immediately attack them for 200% damage, if the enemy dies ammo stacks are refreshed. The Hellwalker active (20s duration; 180s cd) puts the player into first person mode and allows them to use Hellkillers kit and move around freely. Overall Hellkiller is an amazing dps unit that can be paired with brolzi super for ludicrous damage. \r<br>"
  },
  Shero: {
    pros: ["Full map attack","High Range","Aoe Swapping"],
    cons: ["Decently Expensive","Crippled without meter"],
    description: "Shero is a dps unit which has a mana bar that can be used to toggle his different attacks with varying AOEs. Damage increases based on current mana (100% mana = 100% damage); If his mana bar goes below 0, he will be stunned for half of the negative mana (-30 mana = 15s stun). Every time a different attack/projection is toggled, Shero gains 5% dmg (up to 60%) and resets when unlimited forgeries goes on cd.   \r<br>Upg 0: Yin Yang swords: gains 10 mana per attack\r<br>Upg 4: Caliburn: -20% dmg; +20 % rng (10% mana cost)\r<br>Upg 7: Nine Lives Forgery: +50% dmg; -20% rng (10% mana cost)\r<br>Upg 10: Kaleidoscope dagger: +30% dmg (0 mana cost)\r<br>Upg 12: Unlimited Forgeries: infinite range mapwide dps (30% mana cost) [ Has a 40s cd after it ends]\r<br>Shero can use black spirit to increase his mana gain and is overall a great dps unit with a versatile kit having many different attacks.   \r"
  },
  Dot: {
    pros: ["mapwide range","repulse"],
    cons: ["Below average dps","circle aoe"],
    description: "Dot is a support unit that repulses enemies on hit. He will teleport to an enemy anytime they enter or leave his range, making him constantly teleport. He is able to hit enemies outside of range for 50% of his damage giving him mapwide repulse and dps. Dot will select 1 enemy as a nemesis; Dot effectively does 2x damage to his nemesis attacking them an extra time with his normal attacks. Overall Dot is a great support unit with mapwide repulse and dps making him a good afk unit. \r"
  },
  Hollowseph: {
    pros: ["summons","nukes","amazing dps"],
    cons: ["High Placement cost","High total Cost"],
    description: "Hollowseph is a unit that has a soul meter and gains 3 soul per attack. He dodges all attacks and spawns a summon on takedown (2s) equal to 35% of damage. If no enemies are in range and no spells are used for 10s, the next attack does 100% damage. Hollowseph has a spell menu that costs soul to use:<br>Embrace the Void [100 soul]: attacks the highest hp enemy for 400% anywhere on the map.<br>Shade Strike [33 soul]: deals 100% damage to the enemy closest to the base.<br>Ascending Dark [33 soul]: spawns a zone on the track dealing 20% dps (15s).<br>Dream Nail [0 soul; 60s cd]: increases the damage of the next attack by 50%.<br>Before you start the match, you are able to equip relics on the soul tree each giving their own buffs (limit to 3 total cost). The best relics to take are:<br>Fury of the Forsaken [2 cost]: +100% damage (-10% for every unit placed)<br>Honed Nail [2 cost]: +40% damage.<br>Nailmaster’s Will [2 cost]: -20% SPA.<br>Void claw [1 cost]: +30% summon hp.<br>Sigil of Focus [1 cost]: -20% spell cost.<br>Hollowseph’s downside is his expensive overall cost, besides this he is a very solid unit with many abilities and customization making him a top tier carry. <br>"
  },
};