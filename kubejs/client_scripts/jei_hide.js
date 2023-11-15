JEIEvents.hideItems(event => {
    global.itemsToHide.forEach(i => event.hide([Item.of(i).ignoreNBT()]));
})

JEIEvents.hideFluids(event => {
    global.fluidsToHide.forEach(i => event.hide([Item.of(i).ignoreNBT()]));
})