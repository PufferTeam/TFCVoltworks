ServerEvents.recipes(event => {

    function replace(i, i2) {
        event.replaceOutput({ output: i }, i, i2)
    }

    replace('minecraft:wheat', 'tfc:straw')
    replace('#forge:crops/wheat', 'tfc:straw')
    replace('minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')
    replace('minecraft:gold_ingot', 'tfc:metal/ingot/gold')
    replace('minecraft:copper_ingot', 'tfc:metal/ingot/copper')
    replace('create:zinc_ingot', 'tfc:metal/ingot/zinc')
    replace('create:brass_ingot', 'tfc:metal/ingot/brass')

})