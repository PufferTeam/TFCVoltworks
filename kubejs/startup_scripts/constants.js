// priority: 30000

/*
    Special Constants
*/

//  Client
global.itemsToHide = []
global.fluidsToHide = []

//  Server
global.recipesOutputToRemove = []
global.recipesIdToRemove = []
global.recipesModToRemove = []
global.recipesTypeToRemove = []

/*
    Misc values
*/
global.colors = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
];

global.cutBlocks = [
    'slab',
    'stairs'
]
global.cutBlocks2 = [
    'wall'
]
global.cutBlocks.forEach(i => global.cutBlocks2.push(i));

/*
    TerraFirmaCraft values
*/
global.tfcWoodTypes = [
    'acacia',
    'ash',
    'aspen',
    'birch',
    'blackwood',
    'chestnut',
    'douglas_fir',
    'hickory',
    'kapok',
    'mangrove',
    'maple',
    'oak',
    'palm',
    'pine',
    'rosewood',
    'sequoia',
    'spruce',
    'sycamore',
    'white_cedar',
    'willow'
]

global.tfcRockTypes = [
    'granite',
    'diorite',
    'gabbro',
    'shale',
    'claystone',
    'limestone',
    'conglomerate',
    'dolomite',
    'chert',
    'chalk',
    'rhyolite',
    'basalt',
    'andesite',
    'dacite',
    'quartzite',
    'slate',
    'phyllite',
    'schist',
    'gneiss',
    'marble'
]

global.metalTypes = []
global.tfcMetalTypes = [
    'bismuth',
    'bismuth_bronze',
    'black_bronze',
    'bronze',
    'brass',
    'copper',
    'gold',
    'nickel',
    'rose_gold',
    'silver',
    'tin',
    'zinc',
    'sterling_silver',
    'wrought_iron',
    'cast_iron',
    'steel',
    'black_steel',
    'blue_steel',
    'red_steel'
];
global.tfcMetalTypes.forEach(i => global.metalTypes.push(i));

global.tfcJarTypes = [
    'banana',
    'blackberry',
    'blueberry',
    'bunchberry',
    'cherry',
    'cloudberry',
    'cranberry',
    'elderberry',
    'gooseberry',
    'green_apple',
    'lemon',
    'melon_slice',
    'olive',
    'orange',
    'peach',
    'pumpkin_chunks',
    'raspberry',
    'red_apple',
    'snowberry',
    'strawberry',
    'wintergreen_berry'
];

/*
    Create values
*/
global.createRockTypes = [
    'granite',
    'diorite',
    'andesite',
    'calcite',
    'dripstone',
    'deepslate',
    'tuff',
    'asurine',
    'crimsite',
    'limestone',
    'ochrum',
    'scoria',
    'scorchia',
    'veridium'
];

/*
    Vanilla Minecraft values
*/
global.vanillaWoodTypes = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'crimson',
    'warped',
    'mangrove',
    'cherry'
];

global.vanillaRockTypes = [
    'stone',
    'mossy_cobblestone',
    'mossy_stone_brick',
    'stone_brick',
    'cobblestone',
    'deepslate_tile',
    'deepslate_brick',
    'andesite',
    'granite',
    'diorite',
    'deepslate',
    'red_sandstone',
    'sandstone',
    'cobbled_deepslate'
];

global.vanillaFoodTypes = [
    'beef',
    'porkchop',
    'rabbit_stew',
    'carrot',
    'baked_potato',
    'pufferfish',
    'cod',
    'apple',
    'potato',
    'tropical_fish',
    'bread',
    'poisonous_potato',
    'mushroom_stew',
    'dried_kelp',
    'honey_bottle',
    'dried_kelp_block',
    'beetroot_soup',
    'beetroot',
    'sweet_berries',
    'salmon',
    'rabbit',
    'chicken',
    'mutton'
];

global.vanillaItems = [
    'calcite',
    'tuff',
    'dripstone_block',
    'grass_block',
    'grass',
    'seagrass',
    'tall_grass',
    'podzol',
    'sand',
    'red_sand',
    'nether_gold_ore',
    'bookshelf',
    'pumpkin',
    'jack_o_lantern',
    'melon',
    'lantern',
    'soul_lantern',
    'mycelium',
    'iron_trapdoor',
    'fern',
    'seagrass',
    'dead_bush',
    'dandelion',
    'poppy',
    'blue_orchid',
    'allium',
    'red_tulip',
    'orange_tulip',
    'white_tulip',
    'azure_bluet',
    'pink_tulip',
    'oxeye_daisy',
    'cornflower',
    'lily_of_the_valley',
    'brown_mushroom',
    'red_mushroom',
    'crimson_fungus',
    'warped_fungus',
    'sugar_cane',
    'moss_carpet',
    'big_dripleaf',
    'small_dripleaf',
    'torch',
    'petrified_oak_slab',
    'chest',
    'crafting_table',
    'farmland',
    'furnace',
    'cactus',
    'soul_torch',
    'campfire',
    'soul_campfire',
    'hanging_roots',
    'chest_minecart',
    'infested_stone',
    'infested_cobblestone',
    'infested_stone_bricks',
    'infested_mossy_stone_bricks',
    'infested_cracked_stone_bricks',
    'infested_chiseled_stone_bricks',
    'infested_deepslate',
    'pufferfish_bucket',
    'salmon_bucket',
    'cod_bucket',
    'tropical_fish_bucket',
    'powder_snow_bucket',
    'axolotl_bucket',
    'bee_nest',
    'beehive',
    'brown_mushroom_block',
    'red_mushroom_block',
    'respawn_anchor',
    'mushroom_stem',
    'ancient_debris',
    'kelp',
    'netherite_scrap',
    'sunflower',
    'barrel',
    'lilac',
    'rose_bush',
    'peony',
    'large_fern',
    'candle',
    'composter',
    'cocoa_beans',
    'smoker',
    'azalea_leaves',
    'flowering_azalea_leaves',
    'azalea',
    'flowering_azalea',
    'blast_furnace',
    'diamond_horse_armor',
    'glow_berries',
    'amethyst_shard',
    'sea_pickle',
    'nautilus_shell',
    'netherite_block',
    'turtle_egg',
    'melon_seeds',
    'trapped_chest',
    'lily_pad',
    'cake',
    'shears',
    'chain',
    'cookie',
    'pointed_dripstone',
    'spore_blossom',
    'wheat_seeds',
    'pumpkin_seeds',
    'iron_horse_armor',
    'ladder',
    'golden_horse_armor',
    'beetroot_seeds',
    'fishing_rod',
    'slime_ball',
    'dirt',
    'coarse_dirt',
    'rooted_dirt',
    'rabbit_hide',
    'dirt_path'
];