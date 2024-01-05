ServerEvents.recipes(event => {
    
    //Quern to Milling
        event.forEachRecipe({ not: { mod: 'firmaciv' }, type: "tfc:quern" }, recipe => {
            const quernRecipe = JSON.parse(recipe.json);
            let input = undefined
            let isTag = false
            let isFood = false
            input = quernRecipe.ingredient.item;
            if (input == undefined && quernRecipe.ingredient.ingredient !== undefined) {
                input = quernRecipe.ingredient.ingredient.item;
                isFood = true
            }
            if (input == undefined) {
                input = quernRecipe.ingredient.tag;
                isTag = true
            }
            let output = quernRecipe.result.item;
            let outputCount = quernRecipe.result.count;
            if (output == undefined) {
                output = quernRecipe.result.stack.item
            }
            if (output !== undefined && input !== undefined) {
                global.createMillstone(isTag, isFood, output, outputCount, input)
            }
        });

    //Barrel to Mixing
    const barrelBlacklist = [
        'tfc:lye'
    ]
    global.colors.forEach(i => barrelBlacklist.push(`tfc:${i}_dye`));
    const rxBarrelBlacklist = new RegExp(barrelBlacklist.join('|'));

    event.forEachRecipe([{ type: "tfc:barrel_sealed"}, { type: "tfc:barrel_instant"}], recipe => {
        const barrelRecipe = JSON.parse(recipe.json);
        let input = undefined
        let inputFluid = undefined
        let inputFluidCount = undefined
        let inputCount = undefined
        let output = undefined
        let outputCount = undefined
        let outputType = 'item'
        let isTag = false
        let isFluidTag = true
        let isFood = false
        let isValid = true
        let time = 50
        if(barrelRecipe.duration !== undefined) {
            time = (barrelRecipe.duration / 10)
        }
        if(barrelRecipe.input_item !== undefined) {
            input = barrelRecipe.input_item.ingredient.item;
            inputCount = barrelRecipe.input_item.count;
        }
        if (input == undefined && barrelRecipe.input_item.ingredient.ingredient !== undefined) {
            input = barrelRecipe.input_item.ingredient.ingredient.item;
            isFood = true
            if(input == undefined) {
                input = barrelRecipe.input_item.ingredient.ingredient.tag;
                isTag = true
            }
            if(barrelRecipe.input_item.ingredient.type == 'tfc:has_trait') {
                isFood = false
                isValid = false
            }
        }
        if (input == undefined) {
            input = barrelRecipe.input_item.ingredient.tag;
            isTag = true
        }
        inputFluid = barrelRecipe.input_fluid.ingredient.tag;
        if (inputFluid == undefined) {
            inputFluid = barrelRecipe.input_fluid.ingredient;
            isFluidTag = false
        }
        inputFluidCount = barrelRecipe.input_fluid.amount;
        if(!rxBarrelBlacklist.test(inputFluid) && !rxBarrelBlacklist.test(input)) {
            if(barrelRecipe.output_item !== undefined) {
                output = barrelRecipe.output_item.item
            }
            if(output == undefined && barrelRecipe.output_fluid !== undefined) {
                output = barrelRecipe.output_fluid.fluid
                outputType = 'fluid'
            }
            if(barrelRecipe.output_item !== undefined) {
                outputCount = barrelRecipe.output_item.count;
            }
            if(outputCount == undefined && barrelRecipe.output_fluid !== undefined) {
                outputCount = barrelRecipe.output_fluid.amount;
            }
            if(input == 'firmalife:cheesecloth') {
                outputType = 'item_no_item'
            }
            if(barrelRecipe.output_fluid !== undefined && barrelRecipe.output_item !== undefined) {
                outputType = 'fluid_no_item'
                output = barrelRecipe.output_fluid.fluid
            }
            if(isValid && input !== undefined && inputFluid !== undefined && output !== undefined) {
                //console.log(isTag + ' ' + isFood + ' ' + outputType + ' ' + output + ' ' + outputCount + ' ' + isFluidTag + ' ' + inputFluid + ' ' + inputFluidCount + ' ' + input + ' ' + inputCount) 
                global.createMixing(isTag, isFood, outputType, output, outputCount, isFluidTag, inputFluid, inputFluidCount, input, inputCount, time)
            }
        }
 
    
    });

})