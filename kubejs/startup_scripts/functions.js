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