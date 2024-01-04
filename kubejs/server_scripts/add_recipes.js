// priority: 210000

onEvent('recipes', event => {

    global.addCutting = function addCutting(input, output, count) {
        if (count == undefined || count == null) {
            count == 1;
        }

        event.custom({
            "type": "create:cutting",
            "ingredients": [
                {
                    "item": input
                }
            ],
            "results": [
                {
                    "item": output,
                    "count": count
                }
            ],
        })
    }

    global.addCutting2Output = function addCutting2Output(input, output) {
        event.custom({
            "type": "create:cutting",
            "ingredients": [
                {
                    "item": input
                }
            ],
            "results": [
                {
                    "item": output
                },
                {
                    "item": output
                }
            ],
        })
    }

});