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
        'minecraft'
    )
    global.recipesModToRemove.forEach(i => event.remove({ mod: i }));

    //Recipes Type
    global.recipesTypeToRemove.push(
        'minecraft:smelting',
        'minecraft:blasting',
        'minecraft:anvil',
        'minecraft:smoking',
        'minecraft:campfire_cooking'
    )
    global.recipesTypeToRemove.forEach(i => event.remove({ type: i }));

})