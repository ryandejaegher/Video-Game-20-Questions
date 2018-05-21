/*

Pulling game covers as well
var gamesData = document.querySelectorAll('article')

for (let i = 0; i < gamesData.length; i++) {
  var gameName = gamesData[i].getElementsByClassName('item-heading')[0].textContent;
  var gameDeveloper = gamesData[i].getElementsByClassName('item-label-value')[0].textContent;
  var gameReleaseDate = gamesData[i].getElementsByClassName('item-label-value')[1].textContent;
    var gameCover = gamesData[i].getElementsByClassName('item-image')[0].getAttribute('data-original');
    var gameRanking = gamesData[i].getAttribute('data-rank');
  console.log(gameRanking);
  console.info(`
  gameName: "${gameName.trim()}",
  developer: "${gameDeveloper}",
    releaseDate: "${gameReleaseDate}",
    ignRank: ${gameRanking},
    gameCover: "${gameCover}"
`

)

}
*/

console.log('yo');
//test
const nesGames = [
    {
        gameName: 'Ice Hockey',
        developer: 'Nintendo',
        releaseDate: '1988',
        ignRank: 100,
        gameCover: 'http://media.ign.com/games/image/object/007/007166/ice_hockey_NESboxart_160w.jpg'
    },


    {
        gameName: 'Rush\'n Attack',
        developer: 'Konami',
        releaseDate: '1987',
        ignRank: 99,
        gameCover: 'http://media.ign.com/games/image/object/007/007108/Rush-N-Attack_NES_USboxart_160w.jpg'
    },


    {
        gameName: 'Teenage Mutant Ninja Turtles',
        developer: 'Ultra Games',
        releaseDate: '1989',
        ignRank: 98,
        gameCover: 'http://media.gamestats.com/gg/image/object/008/008051/TMNT1_NESBOXboxart_160w.jpg'
    },


    {
        gameName: 'Astyanax',
        developer: 'Jaleco',
        releaseDate: '1990',
        ignRank: 97,
        gameCover: 'http://media.ign.com/games/image/object/007/007540/astyanax_nesboxart_160w.jpg'
    },


    {
        gameName: 'Dragon Warrior III',
        developer: 'Enix',
        releaseDate: '1992',
        ignRank: 96,
        gameCover: 'http://media.gamestats.com/gg/image/object/006/006013/DragonWarriorIIIboxart_160w.jpg'
    },


    {
        gameName: 'Mega Man 4',
        developer: 'Capcom',
        releaseDate: '1991',
        ignRank: 95,
        gameCover: 'http://media.gamestats.com/gg/image/MegaMan4_NESBOXboxart_160w.jpg'
    },


    {
        gameName: 'Kickle Cubicle',
        developer: 'Irem Software Engineering',
        releaseDate: '1990',
        ignRank: 94,
        gameCover: 'http://media.ign.com/games/image/object/006/006642/kickle_cubicle_nesboxart_160w.jpg'
    },


    {
        gameName: 'Little Samson',
        developer: 'Taito',
        releaseDate: '1992',
        ignRank: 93,
        gameCover: 'http://codesmedia.ign.com/codes/image/object/007/007257/672191boxart_160w.jpg'
    },


    {
        gameName: 'Skate or Die 2: The Search for Double Trouble',
        developer: 'Electronic Arts',
        releaseDate: '1990',
        ignRank: 92,
        gameCover: 'http://media.ign.com/games/image/object/007/007448/skate_or_die_2boxart_160w.jpg'
    },


    {
        gameName: 'Mario Bros.',
        developer: 'Nintendo',
        releaseDate: '1986',
        ignRank: 91,
        gameCover: 'http://media.ign.com/games/image/object/007/007170/original_mario_bros_nesboxart_160w.jpg'
    },


    {
        gameName: 'Section Z',
        developer: 'Capcom',
        releaseDate: '1988',
        ignRank: 90,
        gameCover: 'http://media.gamestats.com/gg/image/object/007/007378/sectionfboxart_160w.jpg'
    },


    {
        gameName: 'Willow',
        developer: 'Capcom',
        releaseDate: '1989',
        ignRank: 89,
        gameCover: 'http://media.ign.com/games/image/910649b.jpg'
    },


    {
        gameName: 'Zombie Nation',
        developer: 'Meidac',
        releaseDate: '1991',
        ignRank: 88,
        gameCover: 'http://codesmedia.ign.com/codes/image/object/007/007597/607820boxart_160w.jpg'
    },


    {
        gameName: 'The Guardian Legend',
        developer: 'Irem Software Engineering',
        releaseDate: '1989',
        ignRank: 87,
        gameCover: 'http://retromedia.ign.com/retro/image/object/007/007042/TGL_Boxboxart_160w.jpg'
    },


    {
        gameName: 'Mickey Mousecapade',
        developer: 'Capcom',
        releaseDate: '1988',
        ignRank: 86,
        gameCover: 'http://codesmedia.ign.com/codes/image/object/007/007374/609393boxart_160w.jpg'
    },


    {
        gameName: 'Lode Runner',
        developer: 'Broderbund',
        releaseDate: '1987',
        ignRank: 85,
        gameCover: 'http://ps3media.ign.com/ps3/image/object/007/007044/lode_runner_nesfinalboxart_160w.jpg'
    },


    {
        gameName: 'Mega Man 5',
        developer: 'Capcom',
        releaseDate: '1992',
        ignRank: 84,
        gameCover: 'http://media.gamestats.com/gg/image/object/006/006004/Megaman5ne_boxboxart_160w.jpg'
    },


    {
        gameName: 'Double Dragon II: The Revenge',
        developer: 'Acclaim Entertainment',
        releaseDate: '1990',
        ignRank: 83,
        gameCover: 'http://media.ign.com/games/image/object/006/006920/Double-Dragon-2_NES_USboxart_160w.jpg'
    },


    {
        gameName: 'Power Blade',
        developer: 'Taito',
        releaseDate: '1991',
        ignRank: 82,
        gameCover: 'http://codesmedia.ign.com/codes/image/object/007/007260/609829boxart_160w.jpg'
    },


    {
        gameName: 'Journey to Silius',
        developer: 'Sunsoft',
        releaseDate: '1990',
        ignRank: 81,
        gameCover: 'http://media.ign.com/games/image/object/007/007224/journey_silius_nes1boxart_160w.jpg'
    },


    {
        gameName: 'Demon Sword',
        developer: 'Taito',
        releaseDate: '1990',
        ignRank: 80,
        gameCover: 'http://media.ign.com/games/image/object/007/007248/demon_sword_nes1boxart_160w.jpg'
    },


    {
        gameName: 'Ice Climber',
        developer: 'Nintendo',
        releaseDate: '1985',
        ignRank: 79,
        gameCover: 'http://media.ign.com/games/image/object/007/007165/ice_climber1nesboxart_160w.jpg'
    },


    {
        gameName: 'Ring King',
        developer: 'Data East',
        releaseDate: '1987',
        ignRank: 78,
        gameCover: 'http://media.ign.com/games/image/object/007/007434/ring_king_nes_01boxart_160w.jpg'
    },


    {
        gameName: 'Duck Hunt',
        developer: 'Nintendo',
        releaseDate: '1985',
        ignRank: 77,
        gameCover: 'http://media.gamestats.com/gg/image/object/007/007158/duckhunt_NESBOXboxart_160w.jpg'
    },


    {
        gameName: 'Battletoads & Double Dragon: The Ultimate Team',
        developer: 'Tradewest',
        releaseDate: '1993',
        ignRank: 76,
        gameCover: 'http://media.ign.com/games/image/object/006/006025/Battletoads-VS-Double-Dragon_NES_USboxart_160w.jpg'
    },


    {
        gameName: 'The Goonies II',
        developer: 'Konami',
        releaseDate: '1987',
        ignRank: 75,
        gameCover: 'http://media.gamestats.com/gg/image/object/007/007100/goonies2_nesboxboxart_160w.jpg'
    },


    {
        gameName: 'A Boy and His Blob: Trouble on Blobolonia',
        developer: 'Jaleco',
        releaseDate: '1989',
        ignRank: 74,
        gameCover: 'http://media.gamestats.com/gg/image/object/006/006910/boyblob1boxart_160w.jpg'
    },


    {
        gameName: 'Spy Hunter',
        developer: 'Sunsoft',
        releaseDate: '1987',
        ignRank: 73,
        gameCover: 'http://media.gamestats.com/gg/image/object/007/007228/Spyhunter_f_NESBOXboxart_160w.jpg'
    },


    {
        gameName: 'Ikari Warriors',
        developer: 'SNK',
        releaseDate: '1987',
        ignRank: 72,
        gameCover: 'http://media.ign.com/games/image/object/007/007210/ikari_warriors_nes1boxart_160w.jpg'
    },


    {
        gameName: 'Chip \'N Dale: Rescue Ranger',
        developer: 'Capcom',
        releaseDate: '1990',
        ignRank: 71,
        gameCover: 'http://media.gamestats.com/gg/image/object/007/007376/NES_ChipandDaleboxart_160w.jpg'
    },


    {
        gameName: 'Legendary Wings',
        developer: 'Capcom',
        releaseDate: '1988',
        ignRank: 70,
        gameCover: 'http://wiimedia.ign.com/wii/image/object/007/007371/NES_LegendaryWingsboxart_160w.jpg'
    },


    {
        gameName: 'Techmo World Wrestling',
        developer: 'Tecmo',
        releaseDate: '1990',
        ignRank: 69,
        gameCover: 'http://codesmedia.ign.com/codes/image/object/007/007283/607794boxart_160w.jpg'
    },


    {
        gameName: 'Little Nemo: The Dream Master',
        developer: 'Capcom',
        releaseDate: '1990',
        ignRank: 68,
        gameCover: 'http://codesmedia.ign.com/codes/image/object/007/007373/642176boxart_160w.jpg'
    },


    {
        gameName: 'Qix',
        developer: 'Taito',
        releaseDate: '1991',
        ignRank: 67,
        gameCover: 'http://media.gamestats.com/gg/image/object/007/007263/qixboxart_160w.jpg'
    },


    {
        gameName: 'Cobra Triangle',
        developer: 'Nintendo',
        releaseDate: '1989',
        ignRank: 66,
        gameCover: 'http://media.gamestats.com/gg/image/object/007/007150/CobraTriangle_NESBox-beeferboxart_160w.jpg'
    },


    {
        gameName: 'Stinger',
        developer: 'Konami',
        releaseDate: '1989',
        ignRank: 65,
        gameCover: 'http://media.gamestats.com/gg/image/object/007/007109/stinger_NESBOXboxart_160w.jpg'
    },


    {
        gameName: 'IronSword: Wizards & Warriors II',
        developer: 'Acclaim Entertainment',
        releaseDate: '1990',
        ignRank: 64,
        gameCover: 'http://media.gamestats.com/gg/image/IronswordWizardsandWarriors2_NESBoxboxart_160w.jpg'
    },


    {
        gameName: 'Gargoyle\'s Quest II: The Demon Darkness',
        developer: 'Capcom',
        releaseDate: '1992',
        ignRank: 63,
        gameCover: 'http://media.ign.com/games/image/object/007/007367/Gargoyles-Quest-II-The-Demon-Darkness_NES_USboxart_160w.jpg'
    },


    {
        gameName: 'Kung Fu',
        developer: 'Nintendo',
        releaseDate: '1985',
        ignRank: 62,
        gameCover: 'http://media.ign.com/games/image/object/007/007168/Kung-Fu-1_NES_USboxart_160w.jpg'
    },


    {
        gameName: 'Maniac Mansion',
        developer: 'Jaleco',
        releaseDate: '1990',
        ignRank: 61,
        gameCover: 'http://media.ign.com/games/image/object/006/006007/Maniac-Mansion-1_NES_USboxart_160w.jpg'
    },


    {
        gameName: 'Super C',
        developer: 'Konami',
        releaseDate: '1990',
        ignRank: 60,
        gameCover: 'http://media.ign.com/games/image/object/007/007110/Super-C_NES_USboxart_160w.jpg'
    },


    {
        gameName: 'Rygar',
        developer: 'Tecmo',
        releaseDate: '1987',
        ignRank: 59,
        gameCover: 'http://media.ign.com/games/image/object/007/007276/Rygar_NEScoverboxart_160w.jpg'
    },


    {
        gameName: 'Mega Man 6',
        developer: 'Capcom',
        releaseDate: '1994',
        ignRank: 58,
        gameCover: 'http://media.ign.com/games/image/object/006/006005/MegaMan6_USboxart_160w.jpg'
    },


    {
        gameName: 'Rad Racer',
        developer: 'Nintendo',
        releaseDate: '1987',
        ignRank: 57,
        gameCover: 'http://media.gamestats.com/gg/image/object/007/007178/RadRacer_f_NESBOXboxart_160w.jpg'
    },


    {
        gameName: 'Wizards & Warriors',
        developer: 'Acclaim Entertainment',
        releaseDate: '1987',
        ignRank: 56,
        gameCover: 'http://ps3media.ign.com/ps3/image/object/006/006939/wizards_warriors_nes1boxart_160w.jpg'
    },


    {
        gameName: 'Double Dragon III: The Sacred Stones',
        developer: 'Acclaim Entertainment',
        releaseDate: '1991',
        ignRank: 55,
        gameCover: 'http://media.ign.com/games/image/object/006/006921/Double-Dragon-3_US_NESboxart_160w.jpg'
    },


    {
        gameName: 'Ghosts \'N Goblins',
        developer: 'Capcom',
        releaseDate: '1986',
        ignRank: 54,
        gameCover: 'http://ps3media.ign.com/ps3/image/object/007/007368/Ghosts-N-Goblins_NES_US_BOX_COVERboxart_160w.jpg'
    },


    {
        gameName: 'Tecmo Super Bowl',
        developer: 'Tecmo',
        releaseDate: '1991',
        ignRank: 53,
        gameCover: 'http://xboxmedia.ign.com/xbox/image/object/006/006043/tecmosuperbowl_nesboxboxart_160w.jpg'
    },


    {
        gameName: 'Adventures of Lolo 3',
        developer: 'HAL America',
        releaseDate: '1991',
        ignRank: 52,
        gameCover: 'http://media.gamestats.com/gg/image/adventuresoflolo3_nesboxboxart_160w.jpg'
    },


    {
        gameName: 'Dr. Mario',
        developer: 'Nintendo',
        releaseDate: '1990',
        ignRank: 51,
        gameCover: 'http://media.gamestats.com/gg/image/object/007/007157/Drmario_NESBOXboxart_160w.jpg'
    },


    {
        gameName: 'Shadowgate',
        developer: 'Kemco & Seika',
        releaseDate: '1989',
        ignRank: 50,
        gameCover: 'http://media.ign.com/games/image/object/006/006685/shadow_gate_nesboxart_160w.jpg'
    },


    {
        gameName: 'Kid Niki: Radical Ninja',
        developer: 'Data East',
        releaseDate: '1987',
        ignRank: 49,
        gameCover: 'http://media.ign.com/games/image/object/007/007432/radical_ninja_nesboxart_160w.jpg'
    },


    {
        gameName: 'Tetris (Tengen)',
        developer: 'Tengen',
        releaseDate: '1988',
        ignRank: 48,
        gameCover: 'http://media.ign.com/games/image/object/005/005495/tengen_tetris_nes1boxart_160w.jpg'
    },


    {
        gameName: 'Vice: Project Doom',
        developer: 'American Sammy',
        releaseDate: '1991',
        ignRank: 47,
        gameCover: 'http://codesmedia.ign.com/codes/image/object/006/006974/607782boxart_160w.jpg'
    },


    {
        gameName: 'Metal Storm',
        developer: 'Irem Software Engineering',
        releaseDate: '1991',
        ignRank: 46,
        gameCover: 'http://retromedia.ign.com/retro/image/object/007/007535/Metal_Stormboxart_160w.jpg'
    },


    {
        gameName: 'Fester\'s Quest',
        developer: 'Sunsoft',
        releaseDate: '1989',
        ignRank: 45,
        gameCover: 'http://cheats.ign.com/objects/007/007221.html'
    },


    {
        gameName: 'Klax',
        developer: 'Tengen',
        releaseDate: '1990',
        ignRank: 44,
        gameCover: 'http://codesmedia.ign.com/codes/image/object/007/007287/605780boxart_160w.jpg'
    },


    {
        gameName: 'Ninja Gaiden II: The Dark Sword of Chaos',
        developer: 'Tecmo',
        releaseDate: '1990',
        ignRank: 43,
        gameCover: 'http://media.ign.com/games/image/object/007/007274/Ninja-Gaiden-II_NESboxart_160w.jpg'
    },


    {
        gameName: 'Crystalis',
        developer: 'SNK',
        releaseDate: '1990',
        ignRank: 42,
        gameCover: 'zhttp://media.gamestats.com/gg/image/object/006/006028/CrystalisCover_NESBOXboxart_160w.jpg'
    },


    {
        gameName: 'Teenage Mutant Ninja Turtles II: The Arcade Game',
        developer: 'Ultra Games',
        releaseDate: '1990',
        ignRank: 41,
        gameCover: 'http://media.gamestats.com/gg/image/object/006/006268/TMNT2_NESBOXboxart_160w.jpg'
    },


    {
        gameName: 'Battletoads',
        developer: 'Tradewest',
        releaseDate: '1991',
        ignRank: 40,
        gameCover: 'http://xboxmedia.ign.com/xbox/image/object/007/007659/battletoads_nesboxboxart_160w.jpg'
    },


    {
        gameName: 'Dragon Warrior V',
        developer: 'Enix',
        releaseDate: '1992',
        ignRank: 39,
        gameCover: 'http://media.gamestats.com/gg/image/object/006/006012/DragonwarriorIVCoverboxart_160w.jpg'
    },


    {
        gameName: 'Life Force',
        developer: 'Konami',
        releaseDate: '1988',
        ignRank: 38,
        gameCover: 'http://retromedia.ign.com/retro/image/object/007/007105/Lifeforceboxart_160w.jpg'
    },


    {
        gameName: 'Jackal',
        developer: 'Konami',
        releaseDate: '1988',
        ignRank: 37,
        gameCover: 'http://media.ign.com/games/image/object/007/007102/jackal_nes01boxart_160w.jpg'
    },


    {
        gameName: 'Faxanadu',
        developer: 'Hudson Soft',
        releaseDate: '1989',
        ignRank: 36,
        gameCover: 'http://retromedia.ign.com/retro/image/object/007/007160/Faxanadu_NES_US_boxboxart_160w.jpg'
    },


    {
        gameName: 'StarTropics',
        developer: 'Nintendo',
        releaseDate: '1990',
        ignRank: 35,
        gameCover: 'http://media.gamestats.com/gg/image/object/007/007184/StarTropocs_NESBOX_200502boxart_160w.jpg'
    },


    {
        gameName: 'Gradius',
        developer: 'Konami',
        releaseDate: '1986',
        ignRank: 34,
        gameCover: 'http://media.ign.com/games/image/object/006/006035/gradius_nes_01boxart_160w.jpg'
    },


    {
        gameName: 'Batman: The Video Game',
        developer: 'Sunsoft',
        releaseDate: '1990',
        ignRank: 33,
        gameCover: 'http://media.gamestats.com/gg/image/object/007/007218/batmanvg_nesboxboxart_160w.jpg'
    },


    {
        gameName: 'Snake Rattle \'n\' Roll',
        developer: 'Nintendo',
        releaseDate: '1991',
        ignRank: 32,
        gameCover: 'http://media.ign.com/games/image/object/007/007181/Snake-Rattle-Roll_NES_USboxart_160w.jpg'
    },


    {
        gameName: 'Micro Machines',
        developer: 'Camerica',
        releaseDate: '1991',
        ignRank: 31,
        gameCover: 'http://media.gamestats.com/gg/image/object/007/007352/micro_machinesboxart_160w.jpg'
    },


    {
        gameName: 'Mega Man',
        developer: 'Capcom',
        releaseDate: '1987',
        ignRank: 30,
        gameCover: 'http://media.gamestats.com/gg/image/MegaMan1_NESBOXboxart_160w.jpg'
    },


    {
        gameName: 'Adventure Island',
        developer: 'Hudson Soft',
        releaseDate: '1991',
        ignRank: 29,
        gameCover: 'http://media.gamestats.com/gg/image/adventureislandii_nesboxboxart_160w.jpg'
    },


    {
        gameName: 'Baseball Stars',
        developer: 'SNK',
        releaseDate: '1989',
        ignRank: 28,
        gameCover: 'http://media.ign.com/games/image/object/007/007207/baseball_stars_nessnkboxart_160w.jpg'
    },


    {
        gameName: 'Kirby\'s Adventure',
        developer: 'Nintendo',
        releaseDate: '1993',
        ignRank: 27,
        gameCover: 'http://media.ign.com/games/image/object/006/006008/Kirbys-Adventure-1_NES_USboxart_160w.jpg'
    },


    {
        gameName: 'Metal Gear',
        developer: 'Ultra Games',
        releaseDate: '1988',
        ignRank: 26,
        gameCover: 'http://media.gamestats.com/gg/image/object/007/007055/MetalGeaR_f_NESBOXboxart_160w.jpg'
    },


    {
        gameName: 'Castlevania II: Simon\'s Quest',
        developer: 'Konami',
        releaseDate: '1988',
        ignRank: 25,
        gameCover: 'http://ps3media.ign.com/ps3/image/object/007/007097/castlevania2_nesboxfinalboxart_160w.jpg'
    },


    {
        gameName: 'Blades of Steel',
        developer: 'Konami',
        releaseDate: '1988',
        ignRank: 24,
        gameCover: 'http://codesmedia.ign.com/codes/image/object/007/007094/603993boxart_160w.jpg'
    },


    {
        gameName: 'Bubble Bobble',
        developer: 'Taito',
        releaseDate: '1988',
        ignRank: 23,
        gameCover: 'http://codesmedia.ign.com/codes/image/object/007/007246/611278boxart_160w.jpg'
    },


    {
        gameName: 'Blaster Master',
        developer: 'Sunsoft',
        releaseDate: '1988',
        ignRank: 22,
        gameCover: 'http://retromedia.ign.com/retro/image/object/007/007220/BlasterMasterBoxboxart_160w.jpg'
    },


    {
        gameName: 'Zelda II: The Adventure of LInk',
        developer: 'Nintendo',
        releaseDate: '1988',
        ignRank: 21,
        gameCover: 'http://media.gamestats.com/gg/image/object/005/005991/zelda2nes_nesboxboxart_160w.jpg'
    },


    {
        gameName: 'Kid Icarus',
        developer: 'Nintendo',
        releaseDate: '1987',
        ignRank: 20,
        gameCover: 'http://xbox360media.ign.com/xbox360/image/object/007/007167/kid-icarus01boxart_160w.jpg'
    },


    {
        gameName: 'Castlevania',
        developer: 'Konami',
        releaseDate: '1987',
        ignRank: 19,
        gameCover: 'http://media.gamestats.com/gg/image/object/007/007096/Castlevania_NES_box_artboxart_160w.jpg'
    },


    {
        gameName: 'Super Mario Bros. 2',
        developer: 'Nintendo',
        releaseDate: '1988',
        ignRank: 18,
        gameCover: 'http://media.gamestats.com/gg/image/object/006/006695/supermariobros2_NES-BOXboxart_160w.jpg'
    },


    {
        gameName: 'Ninja Gaiden',
        developer: 'Tecmo',
        releaseDate: '1989',
        ignRank: 17,
        gameCover: 'http://media.gamestats.com/gg/image/NinjaGaiden_NESBoxboxart_160w.jpg'
    },


    {
        gameName: 'Mega Man 3',
        developer: 'Capcom',
        releaseDate: '1990',
        ignRank: 16,
        gameCover: 'http://media.gamestats.com/gg/image/MegaMan3_NESBOXboxart_160w.jpg'
    },


    {
        gameName: 'River City Ransom',
        developer: 'American Technos',
        releaseDate: '1989',
        ignRank: 15,
        gameCover: 'http://media.gamestats.com/gg/image/RiverCityRansom_NESBOXboxart_160w.jpg'
    },


    {
        gameName: 'Excite Bike',
        developer: 'Nintendo',
        releaseDate: '1985',
        ignRank: 14,
        gameCover: 'http://media.ign.com/games/image/object/007/007159/Excitebike_NES_USboxart_160w.jpg'
    },


    {
        gameName: 'R.C. Pro-Am',
        developer: 'Nintendo',
        releaseDate: '1988',
        ignRank: 13,
        gameCover: 'http://media.gamestats.com/gg/image/object/007/007176/NES-RCProAmboxart_160w.jpg'
    },


    {
        gameName: 'Contra',
        developer: 'Contra',
        releaseDate: '1988',
        ignRank: 12,
        gameCover: 'http://media.gamestats.com/gg/image/Contra_NESBOXboxart_160w.jpg'
    },


    {
        gameName: 'Final Fantasy',
        developer: 'Nintendo & Square',
        releaseDate: '1990',
        ignRank: 11,
        gameCover: 'http://media.gamestats.com/gg/image/object/006/006010/ffibox_nesboxart_160w.jpg'
    },


    {
        gameName: 'Duck Tales',
        developer: 'Capcom',
        releaseDate: '1989',
        ignRank: 10,
        gameCover: 'http://media.gamestats.com/gg/image/object/007/007365/duck_talesboxart_160w.jpg'
    },


    {
        gameName: 'Bionic Commando',
        developer: 'Capcom',
        releaseDate: '1988',
        ignRank: 9,
        gameCover: 'http://xboxmedia.ign.com/xbox/image/object/007/007360/bioncommand_nesboxboxart_160w.jpg'
    },


    {
        gameName: 'Dragon Warrior',
        developer: 'Nintendo',
        releaseDate: '1989',
        ignRank: 8,
        gameCover: 'http://xboxmedia.ign.com/xbox/image/object/006/006015/dragonwarrior_nesboxboxart_160w.jpg'
    },


    {
        gameName: 'Mike Tyson\'s Punch-Out!!',
        developer: 'Nintendo',
        releaseDate: '1987',
        ignRank: 7,
        gameCover: 'http://xboxmedia.ign.com/xbox/image/object/005/005654/miketysonpo_nesboxboxart_160w.jpg'
    },


    {
        gameName: 'Metroid',
        developer: 'Nintendo',
        releaseDate: '1987',
        ignRank: 6,
        gameCover: 'http://media.ign.com/games/image/object/006/006006/Metroid_NES_US_ORIGINALboxart_160w.jpg'
    },


    {
        gameName: 'Castlevania III: Dracula\'s Curse',
        developer: 'Konami',
        releaseDate: '1990',
        ignRank: 5,
        gameCover: 'http://media.gamestats.com/gg/image/object/006/006706/castlevania3_nesboxboxart_160w.jpg'
    },


    {
        gameName: 'Mega Man 2',
        developer: 'Capcom',
        releaseDate: '1989',
        ignRank: 4,
        gameCover: 'http://media.gamestats.com/gg/image/object/006/006001/Megaman2_boxboxart_160w.jpg'
    },


    {
        gameName: 'Super Mario Bros.',
        developer: 'Nintendo',
        releaseDate: '1985',
        ignRank: 3,
        gameCover: 'http://media.gamestats.com/gg/image/smb1_nesboxboxart_160w.jpg'
    },


    {
        gameName: 'The Legend of Zelda',
        developer: 'Nintendo',
        releaseDate: '1987',
        ignRank: 2,
        gameCover: 'http://media.gamestats.com/gg/image/object/005/005990/LegendOfZelda_NESBOX_Distboxart_160w.jpg'
    },

    {
        gameName: 'Super Maro Bros. 3',
        developer: 'Nintendo',
        releaseDate: '1990',
        ignRank: 1,
        gameCover: 'http://cheats.ign.com/objects/006/006694.html'
    }

];
const snesGames = [
    {
        gameName: 'Final Fight',
        developer: 'Capcom',
        releaseDate: '1991',
        ignRank: 100,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/100-1494870901462_1024w.jpg'
    },


    {
        gameName: 'Tiny Toon Adventures: Buster Busts Loose!',
        developer: 'Konami',
        releaseDate: '1993',
        ignRank: 99,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/99-1494870901461_640w.jpg'
    },


    {
        gameName: 'Uniracers',
        developer: 'DMA Design',
        releaseDate: '1994',
        ignRank: 98,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/98-1494870901460_640w.jpg'
    },


    {
        gameName: 'Ultimate Mortal Kombat 3',
        developer: 'Midway',
        releaseDate: '1996',
        ignRank: 97,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/97-1494870901459_640w.jpg'
    },


    {
        gameName: 'Street Fighter Alpha 2',
        developer: 'Capcom',
        releaseDate: '1997',
        ignRank: 96,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/96-1494870901459_640w.jpg'
    },


    {
        gameName: 'Top Gear 2',
        developer: 'Gremlin Interactive',
        releaseDate: '1993',
        ignRank: 95,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/95-1494870901458_640w.jpg'
    },


    {
        gameName: 'The Adventures of Batman & Robin',
        developer: 'Konami',
        releaseDate: '1994',
        ignRank: 94,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/94-1494870901457_640w.jpg'
    },


    {
        gameName: 'Super Turrican 2',
        developer: 'Factor 5',
        releaseDate: '1995',
        ignRank: 93,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/93-1494870901456_1024w.jpg'
    },


    {
        gameName: 'Super Double Dragon',
        developer: 'Technos',
        releaseDate: '1992',
        ignRank: 92,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/92-1494870901456_1024w.jpg'
    },


    {
        gameName: 'Super Star Wars: The Empire Strikes Back',
        developer: 'LucasArts',
        releaseDate: '1993',
        ignRank: 91,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/91-1494870901455_1024w.jpg'
    },


    {
        gameName: 'Blackthorne',
        developer: 'Blizzard',
        releaseDate: '1994',
        ignRank: 90,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/90-1494872921134_1024w.jpg'
    },


    {
        gameName: 'Super Bomberman 2',
        developer: 'Hudson',
        releaseDate: '1994',
        ignRank: 89,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/89-1494870901453_640w.jpg'
    },


    {
        gameName: 'Sunset Riders',
        developer: 'Konami',
        releaseDate: '1993',
        ignRank: 88,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/88-1494870901452_640w.jpg'
    },


    {
        gameName: 'Sparkster',
        developer: 'Konami',
        releaseDate: '1994',
        ignRank: 87,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/87-1494870901451_1024w.jpg'
    },


    {
        gameName: 'Stunt Race FX',
        developer: 'Nintendo EAD',
        releaseDate: '1994',
        ignRank: 86,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/86-1494870901449_640w.jpg'
    },


    {
        gameName: 'Spider-Man and Venom: Maximum Carnage',
        developer: 'Software Creations',
        releaseDate: '1994',
        ignRank: 85,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/85-1494872916116_640w.jpg'
    },


    {
        gameName: 'Super Tennis',
        developer: 'Tokyo Shoseki',
        releaseDate: '1991',
        ignRank: 84,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/84-1494870901447_640w.jpg'
    },


    {
        gameName: 'Super Star Wars',
        developer: 'LucasArts',
        releaseDate: '1992',
        ignRank: 83,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/83-1494870901446_640w.jpg'
    },


    {
        gameName: 'Killer Instinct',
        developer: 'Rare',
        releaseDate: '1995',
        ignRank: 82,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/82-1494870901445_640w.jpg'
    },


    {
        gameName: 'The Death and Return of Superman',
        developer: 'Sunsoft & Blizzard',
        releaseDate: '1994',
        ignRank: 81,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/81-1494870901444_1024w.jpg'
    },


    {
        gameName: 'Pilotwings',
        developer: 'Nintendo EAD',
        releaseDate: '1991',
        ignRank: 80,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/80-1494870901443_1024w.jpg'
    },


    {
        gameName: 'Flashback: The Quest for Identity',
        developer: 'Tiertix',
        releaseDate: '1993',
        ignRank: 79,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/79-1494870901442_640w.jpg'
    },


    {
        gameName: 'X-Men: Mutant Apocalypse',
        developer: 'Capcom',
        releaseDate: '1994',
        ignRank: 78,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/78-1494870901441_1024w.jpg'
    },


    {
        gameName: 'Shadowrun',
        developer: 'Beam Software',
        releaseDate: '1993',
        ignRank: 77,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/77-1494870901440_1024w.jpg'
    },


    {
        gameName: 'Soul Blazer',
        developer: 'Quintet',
        releaseDate: '1992',
        ignRank: 76,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/76-1494870901439_1024w.jpg'
    },


    {
        gameName: 'Madden NFL \'94',
        developer: 'Tiburon',
        releaseDate: '1993',
        ignRank: 75,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/75-1494870901438_1024w.jpg'
    },


    {
        gameName: 'Illusion of Gaia',
        developer: 'Quintet',
        releaseDate: '1994',
        ignRank: 74,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/74-1494870901436_640w.jpg'
    },


    {
        gameName: 'Pocky & Rocky 2',
        developer: 'Natsume',
        releaseDate: '1994',
        ignRank: 73,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/73-1494870901435_640w.jpg'
    },


    {
        gameName: 'Rock n\' Roll Racing',
        developer: 'Blizzard',
        releaseDate: '1993',
        ignRank: 72,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/72-1494870901435_1024w.jpg'
    },


    {
        gameName: 'Jungle Strike',
        developer: 'Electronic Arts',
        releaseDate: '1993',
        ignRank: 71,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/71-1494870901434_1024w.jpg'
    },


    {
        gameName: 'Populous',
        developer: 'Bullfrog',
        releaseDate: '1991',
        ignRank: 70,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/70-1494870901433_640w.jpg'
    },


    {
        gameName: 'Out of this World',
        developer: 'Eric Chahi',
        releaseDate: '1992',
        ignRank: 69,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/69-1494870901432_1024w.jpg'
    },


    {
        gameName: 'Kirby\'s Adventure',
        developer: 'Compile & HAL Laboratory',
        releaseDate: '1995',
        ignRank: 68,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/68-1494870901431_1024w.jpg'
    },


    {
        gameName: 'Mega Man X3',
        developer: 'Capcom',
        releaseDate: '1996',
        ignRank: 67,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/67-1494870901431_1024w.jpg'
    },


    {
        gameName: 'The Lion King',
        developer: 'Virgin Interactive',
        releaseDate: '1994',
        ignRank: 66,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/66-1494870901429_640w.jpg'
    },


    {
        gameName: 'R-Type III: The Third Lightning',
        developer: 'Irem',
        releaseDate: '1994',
        ignRank: 65,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/65-1494870901428_640w.jpg'
    },


    {
        gameName: 'International Superstar Soccer',
        developer: 'Konami',
        releaseDate: '1995',
        ignRank: 64,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/64-1494870901427_640w.jpg'
    },


    {
        gameName: 'Fatal Fury 2',
        developer: 'SNK & Takara',
        releaseDate: '1992',
        ignRank: 63,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/63-1494870901426_1024w.jpg'
    },


    {
        gameName: 'Kirby\'s Dream Land 3',
        developer: 'HAL Laboratory',
        releaseDate: '1997',
        ignRank: 62,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/62-1494870901424_640w.jpg'
    },


    {
        gameName: 'Joe & Mac 2: Lost in the Tropics',
        developer: 'Data East',
        releaseDate: '1994',
        ignRank: 61,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/61-1494870901423_1024w.jpg'
    },


    {
        gameName: 'Aladdin',
        developer: 'Capcom',
        releaseDate: '1993',
        ignRank: 60,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/60-1494870901422_640w.jpg'
    },


    {
        gameName: 'NHL \'94',
        developer: 'Electronic Arts',
        releaseDate: '1993',
        ignRank: 59,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/59-1494870901421_1024w.jpg'
    },


    {
        gameName: 'Donkey Kong Country 3: Dixie Kong\'s Double Trouble!',
        developer: 'Rare',
        releaseDate: '1996',
        ignRank: 58,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/58-1494870901420_1024w.jpg'
    },


    {
        gameName: 'Earthworm Jim',
        developer: 'Shiny Entertainment',
        releaseDate: '1994',
        ignRank: 57,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/57-1494872905229_1024w.jpg'
    },


    {
        gameName: 'Alien 3',
        developer: 'Probe',
        releaseDate: '1993',
        ignRank: 56,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/56-1494870901418_640w.jpg'
    },


    {
        gameName: 'Axelay',
        developer: ' Konami',
        releaseDate: '1992',
        ignRank: 55,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/55-1494870901417_1024w.jpg'
    },


    {
        gameName: 'Bust-A-Move',
        developer: 'Taito',
        releaseDate: '1994',
        ignRank: 54,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/54-1494870901416_1024w.jpg'
    },


    {
        gameName: 'Breath of Fire II',
        developer: 'Capcom',
        releaseDate: '1995',
        ignRank: 53,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/53-1494872899806_640w.jpg'
    },


    {
        gameName: 'Ken Griffey, Jr.\'s Winning Run',
        developer: 'Rare',
        releaseDate: '1996',
        ignRank: 52,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/52-1494870901413_1024w.jpg'
    },


    {
        gameName: 'Super Ghouls n\' Ghosts',
        developer: 'Capcom',
        releaseDate: '1991',
        ignRank: 51,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/51-1494872896320_640w.jpg'
    },


    {
        gameName: 'Yoshi\'s Cookie',
        developer: 'Nintendo R&D1',
        releaseDate: '1993',
        ignRank: 50,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/50-1494870901411_640w.jpg'
    },


    {
        gameName: 'Super Bomberman',
        developer: 'Hudson',
        releaseDate: '1993',
        ignRank: 49,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/49-1494870901410_640w.jpg'
    },


    {
        gameName: 'Zombies Ate My Neighbors',
        developer: 'LucasArts',
        releaseDate: '1993',
        ignRank: 48,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/48-1494870901410_1024w.jpg'
    },


    {
        gameName: 'Kirby Super Star',
        developer: 'HAL Laboratory',
        releaseDate: '1996',
        ignRank: 47,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/47-1494870901409_640w.jpg'
    },


    {
        gameName: 'Harvest Moon',
        developer: 'Pack-in-Video',
        releaseDate: '1997',
        ignRank: 46,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/46-1494870901408_1024w.jpg'
    },


    {
        gameName: 'Gradius III',
        developer: 'Konami',
        releaseDate: '1991',
        ignRank: 45,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/45-1494872889804_640w.jpg'
    },


    {
        gameName: 'Demon\'s Crest',
        developer: 'Capcom',
        releaseDate: '1994',
        ignRank: 44,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/44-1494870901406_640w.jpg'
    },


    {
        gameName: 'Breath of Fire',
        developer: 'Capcom',
        releaseDate: '1994',
        ignRank: 43,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/43-1494870901405_1024w.jpg'
    },


    {
        gameName: 'EVO: Search for Eden',
        developer: 'Almanic',
        releaseDate: '1993',
        ignRank: 42,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/42-1494872883710_640w.jpg'
    },


    {
        gameName: 'Ogre Battle: March of the Black Queen',
        developer: 'Quest',
        releaseDate: '1995',
        ignRank: 41,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/41-1494872883707_640w.jpg'
    },


    {
        gameName: 'Earthworm Jim 2',
        developer: 'Shiny Entertainment',
        releaseDate: '1995',
        ignRank: 40,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/40-1494870901403_640w.jpg'
    },


    {
        gameName: 'Teenage Mutant Ninja Turtles: Turtles in Time',
        developer: 'Konami',
        releaseDate: '1992',
        ignRank: 39,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/39-1494870901401_640w.jpg'
    },


    {
        gameName: 'Kirby\'s Dream Course',
        developer: 'HAL Laboratory',
        releaseDate: '1995',
        ignRank: 38,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/38-1494870901400_640w.jpg'
    },


    {
        gameName: 'UN Squadron',
        developer: 'Capcom',
        releaseDate: '1991',
        ignRank: 37,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/37-1494870901398_1024w.jpg'
    },


    {
        gameName: 'NBA Jam',
        developer: 'Midway',
        releaseDate: '1993',
        ignRank: 36,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/36-1494870901397_1024w.jpg'
    },


    {
        gameName: 'Sim City',
        developer: 'Nintendo EAD',
        releaseDate: '1991',
        ignRank: 35,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/35-1494870901396_1024w.jpg'
    },


    {
        gameName: 'Lufia II: Rise of the Sinistrals',
        developer: 'Neverland',
        releaseDate: '1996',
        ignRank: 34,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/34-1494870901394_1024w.jpg'
    },


    {
        gameName: 'Metal Warriors',
        developer: 'LucasArts',
        releaseDate: '1995',
        ignRank: 33,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/33-1494870901393_1024w.jpg'
    },


    {
        gameName: 'Legend of the Mystical Ninja',
        developer: 'Konami',
        releaseDate: '1992',
        ignRank: 32,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/32-1494870901392_1024w.jpg'
    },


    {
        gameName: 'Mega Man X2',
        developer: 'Capcom',
        releaseDate: '1995',
        ignRank: 31,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/31-1494870901390_640w.jpg'
    },


    {
        gameName: 'The Lost Vikings',
        developer: 'Blizzard',
        releaseDate: '1992',
        ignRank: 30,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/30-1494870901389_1024w.jpg'
    },


    {
        gameName: 'Wario\'s Woods',
        developer: 'Nintendo R&D1',
        releaseDate: '1994',
        ignRank: 29,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/29-1494870901388_640w.jpg'
    },


    {
        gameName: 'Donkey Kong Country',
        developer: 'Rare',
        releaseDate: '1994',
        ignRank: 28,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/28-1494870901387_640w.jpg'
    },


    {
        gameName: 'Tetris & Dr. Mario',
        developer: 'Nintendo',
        releaseDate: '1994',
        ignRank: 27,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/27-1494870901386_640w.jpg'
    },


    {
        gameName: 'Super Star Wars: Return of the Jedi',
        developer: 'LucasArts',
        releaseDate: '1994',
        ignRank: 26,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/26-1494870901385_640w.jpg'
    },


    {
        gameName: 'Mortal Kombat II',
        developer: 'Midway',
        releaseDate: '1994',
        ignRank: 25,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/25-1494870901384_640w.jpg'
    },


    {
        gameName: 'Contra III: The Alien Wars',
        developer: 'Konami',
        releaseDate: '1992',
        ignRank: 24,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/24-1494870901384_640w.jpg'
    },


    {
        gameName: 'The Magical Quest Starring Mickey Mouse',
        developer: 'Capcom',
        releaseDate: '1992',
        ignRank: 23,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/23-1494870901383_1024w.jpg'
    },


    {
        gameName: 'Mario Paint',
        developer: 'Nintendo',
        releaseDate: '1992',
        ignRank: 22,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/22-1494870901382_1024w.jpg'
    },


    {
        gameName: 'Super Castlevania IV',
        developer: 'Konami',
        releaseDate: '1991',
        ignRank: 21,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/21-1494872872321_640w.jpg'
    },


    {
        gameName: 'Super Mario All-Stars',
        developer: 'Nintendo',
        releaseDate: '1994',
        ignRank: 20,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/20-1494872869121_640w.jpg'
    },


    {
        gameName: 'ActRaiser',
        developer: 'Quintet',
        releaseDate: '1991',
        ignRank: 19,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/19-1494870901378_1024w.jpg'
    },


    {
        gameName: 'F-Zero',
        developer: 'Nintendo',
        releaseDate: '1991',
        ignRank: 18,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/18-1494872860230_640w.jpg'
    },


    {
        gameName: 'Super Punch-Out!!',
        developer: 'Nintendo',
        releaseDate: '1994',
        ignRank: 17,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/17-1494870901377_640w.jpg'
    },


    {
        gameName: 'Donkey Kong Country 2: Diddy Kong\'s Quest',
        developer: 'Rare',
        releaseDate: '1995',
        ignRank: 16,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/16-1494870901376_640w.jpg'
    },


    {
        gameName: 'Tetris Attack',
        developer: 'Tetris Attack',
        releaseDate: '1996',
        ignRank: 15,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/15-1494870901375_1024w.jpg'
    },


    {
        gameName: 'Final Fantasy IV',
        developer: 'Square',
        releaseDate: '1991',
        ignRank: 14,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/14-1494870901374_640w.jpg'
    },


    {
        gameName: 'EarthBound',
        developer: 'Ape, HAL Laboratory',
        releaseDate: '1995',
        ignRank: 13,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/13-1494870901373_1024w.jpg'
    },


    {
        gameName: 'Mega Man X',
        developer: 'Capcom',
        releaseDate: '1993',
        ignRank: 12,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/12-1494870901371_1024w.jpg'
    },


    {
        gameName: 'Secret of Mana',
        developer: 'Square',
        releaseDate: '1993',
        ignRank: 11,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/11-1494870901369_1024w.jpg'
    },


    {
        gameName: 'Super Mario RPG: Legend of the Seven Stars',
        developer: 'Nintendo',
        releaseDate: '1996',
        ignRank: 10,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/10-1494870901367_1024w.jpg'
    },


    {
        gameName: 'Star Fox',
        developer: 'Nintendo',
        releaseDate: '1993',
        ignRank: 9,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/9-1494870901366_1024w.jpg'
    },


    {
        gameName: 'Super Mario Kart',
        developer: 'Nintendo',
        releaseDate: '1992',
        ignRank: 8,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/8-1494870901365_1024w.jpg'
    },


    {
        gameName: 'Super Mario World 2: Yoshi\'s Island',
        developer: 'Nintendo',
        releaseDate: '1996',
        ignRank: 7,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/7-1494870901364_1024w.jpg'
    },


    {
        gameName: 'Super Street Fighter II Turbo',
        developer: 'Capcom',
        releaseDate: '1993',
        ignRank: 6,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/6-1494870901363_640w.jpg'
    },


    {
        gameName: 'Super Mario World',
        developer: 'Nintendo',
        releaseDate: '1991',
        ignRank: 5,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/5-1494870901363_640w.jpg'
    },


    {
        gameName: 'Final Fantasy VI',
        developer: 'Square',
        releaseDate: '1994',
        ignRank: 4,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/4-1494870901362_640w.jpg'
    },


    {
        gameName: 'Super Metroid',
        developer: 'Nintendo',
        releaseDate: '1994',
        ignRank: 3,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/3-1494870901361_1024w.jpg'
    },


    {
        gameName: 'Chrono Trigger',
        developer: 'Square',
        releaseDate: '1995',
        ignRank: 2,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/2-1494870901360_640w.jpg'
    },


    {
        gameName: 'The Legend of Zelda: A Link to the Past',
        developer: 'Nintendo',
        releaseDate: '1992',
        ignRank: 1,
        gameCover: 'http://assets1.ignimgs.com/2017/05/15/1-1494870901357_1024w.jpg'
    },
];

console.log('hello world');

const ignTop100 = [];
const gamecubeGames = [];
const wiiGames = [];
const wiiUGames = [];
const genesisGames = [];
const saturnGames = [];
const dreamcastGames = [];
const playstationGames = [];
const ps2Games = [];
const ps3Games = [];
const ps4Games = [];
const xboxGames = [];
const xbox360Games = [];
const xboxOneGames = [];

function loadGame() {
    var gameName = document.querySelector('#gameName');
    var developer = document.querySelector('#developer');
    var releaseDate = document.querySelector('#releaseDate');
    var ignRank = document.querySelector('#ignRank');
    var gameCover = document.querySelector('#gameCover');
    var platformSelect = document.querySelector('select');

    if (platformSelect.value === 'nes') {
        var randomGame = nesGames[Math.floor(Math.random() * nesGames.length)];
    } else if (platformSelect.value === 'snes') {
        var randomGame = snesGames[Math.floor(Math.random() * snesGames.length)];
    }

    gameName.textContent = randomGame.gameName;
    developer.textContent = randomGame.developer;
    releaseDate.textContent = randomGame.releaseDate;
    ignRank.textContent = randomGame.ignRank;
    gameCover.setAttribute('src', randomGame.gameCover);
}

var myVar;

function myFunction() {
    var container = document.getElementsByClassName('container');
    container[0].style.display = 'none';
    loadGame();
    myVar = setTimeout(showPage, 500);
}

function showPage() {
    var container = document.getElementsByClassName('container');
    container[0].style.display = 'block';
}



/* List of questions for help

"Is it a console exclusive?"
"Was it released on optical media?"
"Is it a first person shooter?"
"Is it third person?"
"Is it a PC game?"
"Was it developed in Japan?"
"Is the game multiplatform?"
"Was this game critically acclaimed"
"Is it a licensed game?"
"Is the game part of a series?"
"Is the game a sequel?"
"Is it a digital only game?"
"Is it a first party game?"
"Does your character where a hat?"
"Does the game have multiplayer?
"Do you create your own character?"
"Was it released on a Nintendo platform?"
"Was it released on a Sony platform?"
"Is it a portable game?"
"Is it developed in the US?"
"Does it have realistic graphics?"
"Was it released before January 1st (2010, 2000, 1990, 1980)?"
"Does have stylized graphics?"
"Can you drive vehicles?"
"Does the game take place on earth?"
""
*/