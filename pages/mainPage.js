function mainPageView(){
    let searchInput;

    let html = /*HTML*/`
        <input onchange="searchInput = this.value" type="text">
        <button onclick="searchButton()">Search</button>
    `;

    for(let i = 0; i < model.recipe.length; i++){
        html += /*HTML*/`
            <p>${model.recipe[i].name}</p>
        `;
    }
    model.app.currentPage = html;
}

updateView();

