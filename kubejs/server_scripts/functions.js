global.getId = function getId(type, input, output) {
    let result0 = output.split(':')
    let result = input.split(':')
    
    let mod = result0[0]
    let output2 = result0[1]
    let input2 = result[1]
    let id = `${mod}:${type}/${output2}_from_${input2}`

    return id
}

global.getCount = function getCount(output, outputCount) {
    let i2 = `${outputCount}x ${output}`

    return i2
}

global.getFluidTag = function getFluidTag(i) {
    let result = i.split(':')
    let input = result[1]

    let i2 = `forge:${input}`

    return i2
}