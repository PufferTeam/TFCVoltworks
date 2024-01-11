// priority: 110000

ServerEvents.recipes(event => {

    //Recipes Output
    global.recipesOutputToRemove.forEach(i => event.remove({ output: i }));

    //Recipes Id
    global.recipesIdToRemove.push(
        'minecraft:barrier'
    )
    global.recipesIdToRemove.forEach(i => event.remove({ id: i }));

    //Recipes Mod
    global.recipesModToRemove.push(
        'woodencog',
        'tfc_ie_addon',
        'minecraft'
    )
    global.recipesModToRemove.forEach(i => event.remove({ mod: i }));

    //Recipes Type
    global.recipesTypeToRemove.push(
        'minecraft:anvil',
        'minecraft:smelting',
        'minecraft:blasting',
        'minecraft:anvil',
        'minecraft:smoking',
        'minecraft:campfire_cooking',
        'minecraft:stonecutting',
        'create:milling',
        'create:crushing',
        'create:mixing',
        'immersiveengineering:crusher'
    )
    global.recipesTypeToRemove.forEach(i => event.remove({ type: i }));

    global.recipesGenToRemove.push(
        'test'
    )
    global.rxBlacklist = new RegExp(global.recipesGenToRemove.join('|'));

})