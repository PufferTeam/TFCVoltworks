// priority: 210000

ServerEvents.recipes(event => {
    global.milling = function milling(isTag, isFood, output, outputCount, input) {
        global.tfcQuern(isTag, isFood, output, outputCount, input)
        global.createMillstone(isTag, isFood, output, outputCount, input)
    }

    global.tfcQuern = function tfcQuern(isTag, isFood, output, outputCount, input) {
        event.recipes.tfc.quern(global.getCount(output, outputCount), global.getItem(isTag, input, 1, isFood)).id(global.getId('quern', input, output))
    }

    global.createMillstone = function createMillstone(isTag, isFood, output, outputCount, input) {
        event.recipes.createMilling(global.getCount(output, outputCount), global.getItem(isTag, input, 1, isFood)).id(global.getId('milling', input, output))
    }

    global.barrelProcessing = function barrelProcessing(isTag, isFood, outputType, output, outputCount, isFluidTag, inputFluid, inputFluidCount, input, inputCount, time) {

    }

    global.tfcBarrelSealed = function tfcBarrelSealed(isTag, isFood, outputType, output, outputCount, isFluidTag, inputFluid, inputFluidCount, input, inputCount, time) {

    }

    global.createMixing = function createMixing(isTag, isFood, outputType, output, outputCount, isFluidTag, inputFluid, inputFluidCount, input, inputCount, time) {
        if (outputType == 'item') {
            event.recipes.createMixing(global.getCount(output, outputCount), [global.getItem(isTag, input, inputCount, isFood), global.getFluid(isFluidTag, inputFluid, inputFluidCount)]).processingTime(time).id(global.getId('mixing', input, output, inputFluid))
        } else if (outputType == 'fluid') {
            event.recipes.createMixing(global.getFluid(false, output, outputCount), [global.getItem(isTag, input, inputCount, isFood), global.getFluid(isFluidTag, inputFluid, inputFluidCount)]).processingTime(time).id(global.getId('mixing', input, output, inputFluid))
        } else if (outputType == 'fluid_no_item') {
            event.recipes.createMixing(global.getFluid(false, output, outputCount), [global.getFluid(isFluidTag, inputFluid, inputFluidCount)]).processingTime(time).id(global.getId('mixing', input, output, inputFluid))
        } else if (outputType == 'item_no_item') {
            event.recipes.createMixing(global.getCount(output, outputCount), [global.getFluid(isFluidTag, inputFluid, inputFluidCount)]).processingTime(time).id(global.getId('mixing', input, output, inputFluid))
        }
    }
});