onEvent('recipes', event => {

    event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`tfc:alabaster/polished`, [`tfc:alabaster/raw`, '#tfc:chisels']))
    
    global.addChiselCrafting = function addChiselCrafting(input_item, output_item) {
        event.recipes.tfc.chisel(output_item, input_item, 'smooth')
        event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(output_item, [input_item, '#tfc:chisels']))
        global.addCutting(input_item, output_item)
    }

})

