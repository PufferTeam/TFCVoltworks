// priority: 210000

ServerEvents.recipes(event => {
    global.milling = function milling(isTag, isFood, output, outputCount, input) {
        global.tfcQuern(isTag, isFood, output, outputCount, input)
        global.createMillstone(isTag, isFood, output, outputCount, input)
    }

    global.tfcQuern = function tfcQuern(isTag, isFood, output, outputCount, input) {
        event.recipes.tfc.quern(global.getCount(output, outputCount), global.getItemNotRotten(isTag, isFood, input)).id(global.getId('quern', input, output))
    }

    global.createMillstone = function createMillstone(isTag, isFood, output, outputCount, input) {
        event.recipes.createMilling(global.getCount(output, outputCount), global.getItemNotRotten(isTag, isFood, input)).id(global.getId('milling', input, output))
    }

    global.barrelProcessing = function barrelProcessing(isTag, isFood, outputType, output, outputCount, isFluidTag, inputFluid, inputFluidCount, input, inputCount, time) {

    }

    global.tfcBarrelSealed = function tfcBarrelSealed(isTag, isFood, outputType, output, outputCount, isFluidTag, inputFluid, inputFluidCount, input, inputCount, time) {

    }

    global.createMixing = function createMixing(isTag, isFood, outputType, output, outputCount, isFluidTag, inputFluid, inputFluidCount, input, inputCount, time) {
        if(outputType == 'item') {
            event.recipes.createMixing(global.getCount(output, outputCount), [global.getItemNotRotten(isTag, isFood, input, inputCount), global.getFluidCount(isFluidTag, inputFluid, inputFluidCount)]).id(global.getId('mixing', input, output, inputFluid))
        } else if(outputType == 'fluid') {
            event.recipes.createMixing(global.getFluidCount(false, output, outputCount), [global.getItemNotRotten(isTag, isFood, input, inputCount), global.getFluidCount(isFluidTag, inputFluid, inputFluidCount)]).id(global.getId('mixing', input, output, inputFluid))
        } else if(outputType == 'fluid_no_item') {
            event.recipes.createMixing(global.getFluidCount(false, output, outputCount), [global.getFluidCount(isFluidTag, inputFluid, inputFluidCount)]).id(global.getId('mixing', input, output, inputFluid))
        } else if(outputType == 'item_no_item') {
            event.recipes.createMixing(global.getCount(output, outputCount), [global.getFluidCount(isFluidTag, inputFluid, inputFluidCount)]).id(global.getId('mixing', input, output, inputFluid))
        }
    }
});