global.getName = function getName(str) {
    let arr = str.split("_");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(" ");

    return str2
}

global.getColor = function getColor(str) {
    return str.toString(str);
}

/*
    Mod Functions
*/
global.isNetherWood = function isNetherWood(i) {
    let i2 = false

    switch (i) {
        case 'crimson':
        case 'warped':
            i2 = true
            break;
    }

    return i2
}

global.getSapling = function getSapling(i) {
    let i2 = 'sapling'

    switch (i) {
        case 'mangrove':
            i2 = 'propagule'
            break;
    }

    if (global.isNetherWood(i)) {
        i2 = 'fungus'
    }

    return i2
}

global.getLog = function getLog(i) {
    let i2 = 'log'

    if (global.isNetherWood(i)) {
        i2 = 'stem'
    }

    return i2
}

global.getWood = function getWood(i) {
    let i2 = 'wood'

    if (global.isNetherWood(i)) {
        i2 = 'hyphae'
    }

    return i2
}

global.getBoat = function getBoat(i) {
    let i2 = 'boat'

    if (i == 'bamboo') {
        i2 = 'raft'
    }

    return i2
}

global.getCutPrefix = function getCutPrefix(i) {
    let i2 = i

    let ic = i.split(":")[1]
    if (ic == undefined) {
        ic = i
    }
    let ci = ic.split("_")

    let c = ci[ci.length]
    if (c == undefined) {
        c = ci[ci.length - 1]
    }
    if (c == 'bricks' || c == 'tiles') {
        i2 = i.substring(0, i.length - 1);
    }

    return i2
}

global.getSingleItem = function getSingleItem(i) {
    let i2 = i

    if(i == 'lapis') {
        i2 = 'lapis_lazuli'
    }

    return i2
}

global.getToolItem = function getToolItem(i) {
    let i2 = i

    if(i == 'gold') {
        i2 = 'golden'
    }

    return i2
}