function productPageView() {
    let html = /*HTML*/``;

    for (let i = 0; i < model.recipe.length; i++) {
        html += /*HTML*/`
            <h2>${model.recipe[i].name}</h2>
            <h4>${model.recipe[i].type}</h4>
            <h4>${model.recipe[i].lastUpdated}</h4>
            <h4>${model.recipe[i].prepTime}</h4>
            <h4>${model.recipe[i].cookTime}</h4>
            <h4>${model.recipe[i].totalTime}</h4>
            <h4>${model.recipe[i].servings}</h4>
        `;
    }

    for (let content = 0; content < model.recipe.ingredients.length; content++){
        html += /*HTML*/`
            <h3>Ingredients</h3>
            <ul>
                <li>
                ${model.recipe.ingredients[content].amount};
                ${model.recipe.ingredients[content].unitType};
                ${model.recipe.ingredients[content].name};
                </li>
            </ul>
        `;
    }

    return html;

}

