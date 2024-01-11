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
global.recipesGenToRemove = []

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

global.tfcGemTypes = [
    'amethyst',
    'diamond',
    'emerald',
    'lapis_lazuli',
    'opal',
    'pyrite',
    'ruby',
    'sapphire',
    'topaz'
]

global.tfcMetalParts = [
    'anvil',
    'chain',
    'block',
    'double_ingot',
    'double_sheet',
    'horse_armor',
    'ingot',
    'lamp',
    'rod',
    'sheet',
    'unfinished_helmet',
    'unfinished_chestplate',
    'unfinished_greaves',
    'unfinished_boots',
    'trapdoor'
]

global.forgingBonusWhitelist = [
    "fish_hook",
    "tuyere",
    "pickaxe_head",
    "propick_head",
    "axe_head",
    "shovel_head",
    "hoe_head",
    "chisel_head",
    "hammer_head",
    "saw_blade",
    "javelin_head",
    "sword_blade",
    "mace_head",
    "knife_blade",
    "scythe_blade",
    "helmet",
    "chestplate",
    "greaves",
    "boots",
    "shield"
];

global.forgingBonusWhitelist.forEach(i => global.tfcMetalParts.push(i));

global.tfcToolsTypes = [
    'axe',
    'chisel',
    'fishing_rod',
    'hammer',
    'hoe',
    'javelin',
    'knife',
    'mace',
    'pickaxe',
    'propick',
    'saw',
    'scythe',
    'shears',
    'shovel',
    'sword'
]

global.tfcToolsTypes.forEach(i => global.tfcMetalParts.push(i));

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
    Mekanism values
*/
global.mekanismMetalTypes = [
    'osmium',
    'tin',
    'lead',
    'uranium'
]

global.mekanismSpecialMetalTypes = [
    'steel',
    'bronze',
    'refined_obsidian',
    'refined_glowstone'
]

/*
    Immersive Engineering values
*/
global.ieMetalTypes = [
    'aluminum',
    'lead',
    'silver',
    'nickel',
    'uranium'
]

global.ieSpecialMetalTypes = [
    'constantan',
    'electrum',
    'steel'
]

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

global.vanillaMetalTypes = [
    'iron',
    'copper',
    'gold',
]

global.vanillaArmorToolTypes = [
    'diamond',
    'netherite'
]

global.vanillaToolTypes = [
    'wooden',
    'stone'
]

global.vanillaGemTypes = [
    'coal',
    'diamond',
    'redstone',
    'emerald',
    'lapis'
]

global.vanillaRockTypes = [
    'andesite',
    'granite',
    'diorite'
];

global.vanillaSandstoneTypes = [
    'red_sandstone',
    'sandstone'
]

global.vanillaCutBlocks = [
    'blackstone',
    'polished_blackstone',
    'polished_blackstone_bricks',
    'polished_deepslate',
    'cobbled_deepslate',
    'cobblestone',
    'deepslate_bricks',
    'deepslate_tiles',
    'mossy_cobblestone',
    'mossy_stone_bricks',
    'mud_bricks',
    'stone',
    'smooth_stone',
    'stone_bricks'
]

global.vanillaFoodTypes = [
    'rabbit_stew',
    'carrot',
    'baked_potato',
    'pufferfish',
    'melon_slice',
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
    'sweet_berries'
];

global.vanillaMeatTypes = [
    'beef',
    'porkchop',
    'mutton',
    'chicken',
    'rabbit',
    'cod',
    'salmon'
]

global.vanillaMeatTypes.forEach(i => global.vanillaFoodTypes.push(i));

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
    'chiseled_bookshelf',
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
    'pink_petals',
    'suspicious_gravel',
    'suspicious_sand',
    'cornflower',
    'lily_of_the_valley',
    'brown_mushroom',
    'red_mushroom',
    'crimson_fungus',
    'warped_fungus',
    'stripped_bamboo_block',
    'sugar_cane',
    'tadpole_bucket',
    'mangrove_roots',
    'muddy_mangrove_roots',
    'packed_mud',
    'mud',
    'iron_bars',
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
    'deepslate',
    'chiseled_deepslate',
    'cracked_deepslate_bricks',
    'cracked_deepslate_tiles',
    'reinforced_deepslate',
    'stone_pressure_plate',
    'stone_button',
    'cracked_stone_bricks',
    'chiseled_stone_bricks',
    'gilded_blackstone',
    'chiseled_polished_blackstone',
    'polished_blackstone_pressure_plate',
    'polished_blackstone_button',
    'cracked_polished_blackstone_bricks',
    'gravel',
    'torchflower',
    'torchflower_seeds',
    'pitcher_plant',
    'pitcher_pod',
    'sniffer_egg',
    'basalt',
    'smooth_basalt',
    'polished_basalt',
    'suspicious_stew',
    'glass_bottle',
    'potion',
    'splash_potion',
    'lingering_potion',
    'experience_bottle',
    'infested_stone',
    'infested_cobblestone',
    'infested_stone_bricks',
    'infested_mossy_stone_bricks',
    'infested_cracked_stone_bricks',
    'infested_chiseled_stone_bricks',
    'infested_deepslate',
    'bamboo_mosaic',
    'bamboo_mosaic_slab',
    'bamboo_mosaic_stairs',
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
    'wheat',
    'netherite_ingot',
    'pumpkin_seeds',
    'iron_horse_armor',
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

global.vanillaFoodTypes.forEach(i => global.vanillaItems.push(i));