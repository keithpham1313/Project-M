function productPageView(){
    let html = /*HTML*/``;

    for(let i = 0; i < model.recipe.length; i++){
        html += /*HTML*/`
            <h2>${model.recipe[i].name}</h2>
        `;
    }
}

