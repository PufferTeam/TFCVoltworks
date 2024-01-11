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

    global.processing = function processing(isTag, isFood, outputType, output, outputCount, isFluidTag, inputFluid, inputFluidCount, input, inputCount, time) {
        global.tfcBarrelSealed(isTag, isFood, outputType, output, outputCount, isFluidTag, inputFluid, inputFluidCount, input, inputCount, time)
        global.createMixing(isTag, isFood, outputType, output, outputCount, isFluidTag, inputFluid, inputFluidCount, input, inputCount, time)
    }

    global.tfcBarrelSealed = function tfcBarrelSealed(isTag, isFood, outputType, output, outputCount, isFluidTag, inputFluid, inputFluidCount, input, inputCount, time) {
        let id = global.getId('barrel_sealed', input, output, inputFluid)
        let count = global.getCount(output, outputCount)
        let item = global.getItem(isTag, input, inputCount, isFood)
        let fluidCount = global.getFluid(false, output, outputCount)
        let fluid = global.getTFCFluid(isFluidTag, inputFluid, inputFluidCount)

        switch (outputType) {
            case 'item':
                event.recipes.tfc.barrel_sealed(time).outputItem(count).inputs(item, fluid).id(id)
                break;
            case 'fluid':
                event.recipes.tfc.barrel_sealed(time).outputFluid(fluidCount).inputs(item, fluid).id(id)
                break;
            case 'fluid_no_item':
                event.recipes.tfc.barrel_sealed(time).outputFluid(fluidCount).inputs(fluid).id(id)
                break;
            case 'item_no_item':
                event.recipes.tfc.barrel_sealed(time).outputItem(count).inputs(fluid).id(id)
                break;
        }

    }

    global.createMixing = function createMixing(isTag, isFood, outputType, output, outputCount, isFluidTag, inputFluid, inputFluidCount, input, inputCount, time) {
        let id = global.getId('mixing', input, output, inputFluid)
        let count = global.getCount(output, outputCount)
        let item = global.getItem(isTag, input, inputCount, isFood)
        let fluidCount = global.getFluid(false, output, outputCount)
        let fluid = global.getFluid(isFluidTag, inputFluid, inputFluidCount)

        switch (outputType) {
            case 'item':
                event.recipes.createMixing(count, [item, fluid]).processingTime(time).id(id)
                break;
            case 'fluid':
                event.recipes.createMixing(fluidCount, [item, fluid]).processingTime(time).id(id)
                break;
            case 'fluid_no_item':
                event.recipes.createMixing(fluidCount, [fluid]).processingTime(time).id(id)
                break;
            case 'item_no_item':
                event.recipes.createMixing(count, [fluid]).processingTime(time).id(id)
                break;
        }
    }
});