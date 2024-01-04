global.getId = function getId(type, input, output, second) {
    let result0 = output.split(':')
    let result = input.split(':')

    let mod = result0[0]
    let output2 = result0[1].replace("/", "_")
    let input2 = result[1].replace("/", "_")

    let id = `${mod}:${type}/${output2}_from_${input2}`
    if(second !== undefined && second !== null) {
        let result2 = second.split(':')
        let second2 = result2[1].replace("/", "_")

        id = `${mod}:${type}/${output2}_from_${input2}_and_${second2}`
    }

    return id
}

global.getCount = function getCount(output, outputCount) {
    let i2 = `${outputCount}x ${output}`

    return i2
}

global.getFluidCount = function getFluidCount(isTag, fluid, fluidAmount) {
    let i2 = Fluid.of(fluid, fluidAmount)

    if(isTag) {
        i2 = {fluidTag: fluid, amount: fluidAmount}
    }

    return i2
}

global.getItem = function getItem(isTag, item) {
    let i2 = item
    if(isTag) {
        i2 = `#${item}`
    }

    return i2
}

global.getItemNotRotten = function getItemNotRotten(isTag, isFood, input, inputCount) {
    let i = global.getItem(isTag, input)
    let i2 = i
    if(isFood) {
        i2 = TFC.ingredient.notRotten(i)
    }
    if(inputCount !== undefined && !isTag && !isFood) {
        i2 = global.getCount(input, inputCount)
    }
    return i2
}

global.getFluidTag = function getFluidTag(i) {
    let result = i.split(':')
    let input = result[1]

    let i2 = `forge:${input}`

    return i2
}