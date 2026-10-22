function updateView(){
    
    let currentPageView = "";

    switch(model.app.currentPage){
        case "mainPage":
            currentPageView = mainPageView();
            break;
    }
    document.getElementById("app").innerHTML = /*HTML*/ `
        <header>${header()}</header>
        <main>${currentPageView}</main>
    `;
}

