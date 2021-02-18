events.listen('recipes', (event) => {
    if (global.packmode != 'normal') {
        return;
    }

    var data = {
        recipes: [
            {
                inputs: [
                    '#forge:storage_blocks/enderium',
                    Item.of('fluxnetworks:flux_dust', 8)
                ],
                outputs: [
                    Item.of('compactmachines:wall', 64)
                ]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs);
    });
});
