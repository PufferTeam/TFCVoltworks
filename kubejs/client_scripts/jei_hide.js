JEIEvents.hideItems(event => {
    global.itemsToHide.forEach(i => event.hide([Item.of(i)]));
    global.fluidsToHide.forEach(i => event.hide([Item.of(`${i}_bucket`)]));
})

JEIEvents.hideFluids(event => {
    global.fluidsToHide.forEach(i => event.hide([i]));
})