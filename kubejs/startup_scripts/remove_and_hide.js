
global.removeAndHide = []
function removeAndHide(type, mod, item) {
    if (type == 'wood') {
        let isNetherWood = global.isNetherWood(item)
        let sapling = global.getSapling(item)
        let wood = global.getWood(item)
        let log = global.getLog(item)

        if (mod == 'minecraft') {
            global.removeAndHide.push(
                `${mod}:${item}_button`,
                `${mod}:${item}_fence`,
                `${mod}:${item}_fence_gate`,
                `${mod}:${item}_hanging_sign`,
                `${mod}:${item}_leaves`,
                `${mod}:${item}_${log}`,
                `${mod}:stripped_${item}_${log}`,
                `${mod}:${item}_${wood}`,
                `${mod}:stripped_${item}_${wood}`,
                `${mod}:${item}_planks`,
                `${mod}:${item}_pressure_plate`,
                `${mod}:${item}_${sapling}`,
                `${mod}:${item}_sign`,
                `${mod}:${item}_trapdoor`
            )
            global.cutBlocks.forEach(cut => {
                global.removeAndHide.push(
                    `${mod}:${item}_${cut}`
                )
            });
            if(!isNetherWood) {
                global.removeAndHide.push(
                    `${mod}:${item}_boat`,
                    `${mod}:${item}_chest_boat`
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
}

global.vanillaWoodTypes.forEach(i => removeAndHide('wood', 'minecraft', i));
global.createRockTypes.forEach(i => removeAndHide('rock', 'create', i));

global.removeAndHide.forEach(i => {
    global.itemsToHide.push(i);
    global.recipesOutputToRemove.push(i)
});