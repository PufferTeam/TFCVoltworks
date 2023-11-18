JEIEvents.hideItems(event => {
    global.itemsToHide.forEach(i => event.hide([Item.of(i).ignoreNBT()]));
    global.fluidsToHide.forEach(i => event.hide([Item.of(`${i}_bucket`).ignoreNBT()]));
})

JEIEvents.hideFluids(event => {
    global.fluidsToHide.forEach(i => event.hide([i]));
})