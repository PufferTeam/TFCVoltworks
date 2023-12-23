global.removeAndHide = [
    'createaddition:copper_wire',
    'createaddition:copper_spool',
    'createaddition:copper_rod',
    'createaddition:iron_wire',
    'createaddition:iron_rod',
    'createaddition:zinc_sheet',
    'createaddition:gold_rod',
    'createaddition:gold_spool',
    'createaddition:electrum_wire',
    'createaddition:brass_rod',
    'createaddition:connector',
    'createaddition:large_connector',
    'createaddition:redstone_relay',
    'createaddition:chocolate_cake',
    'createaddition:honey_cake',
    'createaddition:barbed_wire',
    'createaddition:electrum_rod',
    'immersiveengineering:nugget_copper',
    'createaddition:electrum_spool',
    'createaddition:electrum_sheet',
    'createaddition:gold_wire',
    'create:honeyed_apple',
    'create:bar_of_chocolate',
    'create:sweet_roll',
    'createcasing:mldeg_shaft',
    'createcasing:glass_shaft',
    'createcasing:brass_shaft',
    'create:chocolate_glazed_berries',
    'createaddition:spool',
    'createaddition:electrum_amulet',
    'createaddition:straw',
    'create:empty_blaze_burner',
    'create:blaze_burner',
    'create:dough',
    'create:wheat_flour',
    'create:brass_sheet',
    'immersiveengineering:dust_sulfur',
    'mekanism:dust_sulfur',
    'mekanism:sawdust',
    'immersiveengineering:sword_steel',
    'immersiveengineering:pickaxe_steel',
    'immersiveengineering:shovel_steel',
    'immersiveengineering:axe_steel',
    'immersiveengineering:hoe_steel',
    'immersiveengineering:seed',
    'immersiveengineering:hemp_fiber',
    'create:copper_nugget'
]
function removeAndHide(type, mod, item) {
    if (type == 'cut') {
        let cutPrefix = global.getCutPrefix(item)

        global.removeAndHide.push(
            `${mod}:${item}`
        )

        global.cutBlocks2.forEach(cut => {
            global.removeAndHide.push(
                `${mod}:${cutPrefix}_${cut}`
            )
        });
    }

    if (type == 'wood') {
        let isNetherWood = global.isNetherWood(item)
        let sapling = global.getSapling(item)
        let wood = global.getWood(item)
        let log = global.getLog(item)
        let boat = global.getBoat(item)

        if (mod == 'tfc') {
            global.removeAndHide.push(
                `${mod}:wood/axle/${item}`,
                `${mod}:wood/encased_axle/${item}`,
                `${mod}:wood/clutch/${item}`,
                `${mod}:wood/gear_box/${item}`,
                `${mod}:wood/bladed_axle/${item}`,
                `${mod}:wood/water_wheel/${item}`
            )
        }

        if (mod == 'minecraft') {
            global.removeAndHide.push(
                `${mod}:${item}_button`,
                `${mod}:${item}_door`,
                `${mod}:${item}_fence`,
                `${mod}:${item}_fence_gate`,
                `${mod}:${item}_hanging_sign`,
                `${mod}:${item}_planks`,
                `${mod}:${item}_pressure_plate`,
                `${mod}:${item}_${sapling}`,
                `${mod}:${item}_sign`,
                `${mod}:${item}_trapdoor`,
                `createcasing:${item}_shaft`,
                `create:${item}_window`,
                `create:${item}_window_pane`,
                `railways:track_${item}`,
                `railways:track_${item}_wide`,
                `railways:track_${item}_narrow`
            )
            if (item !== 'bamboo') {
                global.removeAndHide.push(
                    `${mod}:${item}_leaves`,
                    `${mod}:${item}_${log}`,
                    `${mod}:stripped_${item}_${log}`,
                    `${mod}:${item}_${wood}`,
                    `${mod}:stripped_${item}_${wood}`
                )
            }
            global.cutBlocks.forEach(cut => {
                global.removeAndHide.push(
                    `${mod}:${item}_${cut}`
                )
            });
            if (!isNetherWood) {
                global.removeAndHide.push(
                    `${mod}:${item}_${boat}`,
                    `${mod}:${item}_chest_${boat}`,
                    `smallships:${item}_cog`,
                    `smallships:${item}_brigg`,
                    `smallships:${item}_galley`
                )
            }
        }
    }
    if (type == 'rock' && mod == 'create') {
        global.removeAndHide.push(
            `${mod}:${item}`,
            `${mod}:cut_${item}`,
            `${mod}:polished_cut_${item}`,
            `${mod}:cut_${item}_bricks`,
            `${mod}:small_${item}_bricks`,
            `${mod}:layered_${item}`,
            `${mod}:${item}_pillar`
        )
        global.cutBlocks2.forEach(cut => {
            global.removeAndHide.push(
                `${mod}:cut_${item}_${cut}`,
                `${mod}:polished_cut_${item}_${cut}`,
                `${mod}:cut_${item}_brick_${cut}`,
                `${mod}:small_${item}_brick_${cut}`
            )
        });
    }

    if (type == 'metal') {
        switch (mod) {
            case 'mekanism':
                global.removeAndHide.push(
                    `${mod}:block_raw_${item}`,
                )
            case 'minecraft':
                global.removeAndHide.push(
                    `mekanism:shard_${item}`,
                    `mekanism:crystal_${item}`,
                    `mekanism:dust_${item}`,
                    `mekanism:dirty_dust_${item}`,
                    `mekanism:clump_${item}`,
                    `bfr:irradiated_${item}_ore`
                )
                break;
            case 'immersiveengineering':
                global.removeAndHide.push(
                    `${mod}:ore_${item}`,
                    `${mod}:deepslate_ore_${item}`,
                    `${mod}:raw_block_${item}`
                )
                break;
        }
        switch (mod) {
            case 'create':
            case 'minecraft':
                global.removeAndHide.push(
                    `${mod}:${item}_nugget`,
                    `${mod}:raw_${item}_block`
                )
            case 'mekanism':
                global.removeAndHide.push(
                    `${mod}:${item}_ore`,
                    `${mod}:deepslate_${item}_ore`
                )
            case 'immersiveengineering':
                global.removeAndHide.push(
                    `create:crushed_raw_${item}`,
                    `${mod}:raw_${item}`
                )
                break;
        }
    }

    if (type == 'metal' || type == 'alloy') {
        switch (mod) {
            case 'create':
            case 'createaddition':
                global.removeAndHide.push(
                    `${mod}:${item}_nugget`
                )
            case 'minecraft':
                global.removeAndHide.push(
                    `create:${global.getToolItem(item)}_sheet`,
                    `${mod}:${item}_ingot`,
                    `${mod}:${item}_block`
                )
                break;
        }
        switch (mod) {
            case 'immersiveengineering':
                global.removeAndHide.push(
                    `${mod}:ingot_${item}`,
                    `${mod}:storage_${item}`,
                    `${mod}:slab_storage_${item}`
                )
            case 'minecraft':
                global.removeAndHide.push(
                    `immersiveengineering:plate_${item}`,
                    `immersiveengineering:nugget_${item}`,
                    `immersiveengineering:dust_${item}`
                )
                break;
        }
        switch (mod) {
            case 'mekanism':
                global.removeAndHide.push(
                    `${mod}:block_${item}`,
                    `${mod}:nugget_${item}`,
                    `${mod}:ingot_${item}`
                )
            case 'minecraft':
                global.removeAndHide.push(
                    `${mod}:dust_${item}`
                )
                break;
        }
    }

    if (type == 'gem') {
        let singleItem = global.getSingleItem(item)

        if (mod == 'minecraft') {
            global.removeAndHide.push(
                `${mod}:${item}_ore`,
                `${mod}:deepslate_${item}_ore`
            )
            if (type !== 'redstone') {
                global.removeAndHide.push(
                    `${mod}:${singleItem}`,
                    `${mod}:${item}_block`,
                    `mekanism:dust_${singleItem}`
                )
            }
        }
    }

    if (type == 'metal' || type == 'armor_tool' || type == 'tool') {
        let toolItem = global.getToolItem(item)

        switch (type) {
            case 'metal':
            case 'armor_tool':
                global.removeAndHide.push(
                    `${mod}:${toolItem}_helmet`,
                    `${mod}:${toolItem}_chestplate`,
                    `${mod}:${toolItem}_leggings`,
                    `${mod}:${toolItem}_boots`
                )
            case 'tool':
                global.removeAndHide.push(
                    `${mod}:${toolItem}_shovel`,
                    `${mod}:${toolItem}_pickaxe`,
                    `${mod}:${toolItem}_axe`,
                    `${mod}:${toolItem}_hoe`,
                    `${mod}:${toolItem}_sword`
                )
        }
    }


}

global.vanillaWoodTypes.forEach(i => removeAndHide('wood', 'minecraft', i));
removeAndHide('wood', 'minecraft', 'bamboo')
global.vanillaMetalTypes.forEach(i => removeAndHide('metal', 'minecraft', i));
global.vanillaArmorToolTypes.forEach(i => removeAndHide('armor_tool', 'minecraft', i));
global.vanillaToolTypes.forEach(i => removeAndHide('tool', 'minecraft', i));
global.vanillaGemTypes.forEach(i => removeAndHide('gem', 'minecraft', i));
global.vanillaMeatTypes.forEach(i => removeAndHide('meat', 'minecraft', i));

global.mekanismMetalTypes.forEach(i => removeAndHide('metal', 'mekanism', i));
global.mekanismSpecialMetalTypes.forEach(i => removeAndHide('alloy', 'mekanism', i));

global.ieMetalTypes.forEach(i => removeAndHide('metal', 'immersiveengineering', i));
global.ieSpecialMetalTypes.forEach(i => removeAndHide('alloy', 'immersiveengineering', i));

global.tfcWoodTypes.forEach(i => removeAndHide('wood', 'tfc', i));

global.createRockTypes.forEach(i => removeAndHide('rock', 'create', i));
removeAndHide('alloy', 'create', 'brass')
removeAndHide('alloy', 'createaddition', 'electrum')
removeAndHide('metal', 'create', 'zinc')

global.vanillaItems.forEach(i => global.removeAndHide.push(`minecraft:${i}`));
global.vanillaMeatTypes.forEach(i => global.removeAndHide.push(`minecraft:cooked_${i}`));

global.vanillaSandstoneTypes.forEach(i => {
    removeAndHide('cut', 'minecraft', i)
    global.removeAndHide.push(`minecraft:chiseled_${i}`)
    removeAndHide('cut', 'minecraft', `cut_${i}`)
    removeAndHide('cut', 'minecraft', `smooth_${i}`)
});

global.vanillaRockTypes.forEach(i => {
    removeAndHide('cut', 'minecraft', i)
    removeAndHide('cut', 'minecraft', `polished_${i}`)
});

global.vanillaCutBlocks.forEach(i => removeAndHide('cut', 'minecraft', i));

global.removeAndHide.forEach(i => {
    global.itemsToHide.push(i);
    global.recipesOutputToRemove.push(i);
});