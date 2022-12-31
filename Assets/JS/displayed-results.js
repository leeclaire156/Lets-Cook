// Enter in your spoonacular API key
var apiKey = "d1ae693fc9a54390aeaf4500f67b3932";
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;

        if (e.keyCode === 27) { // Escape key
            closeAllModals();
        }
    });
});

//Upon loading, the user's search query is extracted (lines 59-61) from the URL, I console logged to double check
//The extracted query is put into the resultsURL variable, which is then fetched and the resulting data is logged
function resultsLogged() {

    var number = 12
    var index = localStorage.getItem("index");
    var food = localStorage.getItem("search"+index);
    var resultsUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + apiKey + "&ingredients=" + food + "&number=" + number;
    var recipeArray = [];
    fetch(resultsUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
             // Iterates over all of the data 
            for (let index = 0; index < 12; index++) {
                // Renders Card when function is called in an area called columns
                var column = document.createElement("div");
                var cardpage = document.querySelector(".columns");
                cardpage.append(column);
                column.setAttribute("class", "column is-one-quarter");
                // Creates the Card from Bulma with the CSS attributes
                var card = document.createElement("div");
                column.append(card);
                card.setAttribute("class", "card")
                var cardcontent = document.createElement("div");
                card.append(cardcontent);
                cardcontent.setAttribute("class", "card-content");
                var content = document.createElement("div");
                cardcontent.append(content);
                content.setAttribute("class", "content");
                // Sets the title for the card and CSS attributes from Bulma
                var title = document.createElement("p");
                content.append(title);
                title.setAttribute("class", "title is-4 is-size-6");
                // Sets the ingredients 
                var ingredients = document.createElement("p");
                content.append(ingredients);
                ingredients.setAttribute("id", "ingredients");
                ingredients.setAttribute("class", "is-size-7")
                // Card Image
                var cardimage = document.createElement("div");
                card.append(cardimage);
                cardimage.setAttribute("class", "card-image");
                var figure = document.createElement("figure");
                cardimage.append(figure);
                figure.setAttribute("class", "image is-4by3")
                var img = document.createElement("img");
                figure.append(img)
                // Card Footer where the modal trigger will be
                var footer = document.createElement("footer");
                card.append(footer);
                footer.setAttribute("class", "card-footer");
                var anchor = document.createElement("a");
                footer.append(anchor);
                anchor.setAttribute("class", "js-modal-trigger card-footer-item");
                anchor.setAttribute("data-target", "modalinfo");
                anchor.setAttribute("id", "moreinfo");


                // Sets the data from the API as the text content for all of the html elements
                title.innerHTML = data[index].title
                ingredients.innerHTML = "Missing " + data[index].missedIngredients.length + " Ingredients"
                img.setAttribute("src", data[index].image)
                anchor.innerHTML = "Open for more"

                // Opens modal when somebody presses open for more
                anchor.addEventListener("click", function () {
                    var modal = document.querySelector("#modalinfo")
                    modal.removeAttribute("class");
                    modal.setAttribute("class", "modal is-active")
                   var getRecipeUrl = "https://api.spoonacular.com/recipes/" + data[index].id + "/information?apiKey=" + apiKey;
                    fetch(getRecipeUrl)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (data) {
                             //Sets title to modal
                            var modaltitle = document.querySelector(".modal-card-title");
                            modaltitle.textContent = data.title;

                            //Takes ingredients out from object and pushes them into an array with just their amount and name
                            var modalingredients = document.querySelector(".ingredients");
                            var ingredientsArray = [];
                            for (var i = 0; i < data.extendedIngredients.length; i++) {
                                ingredientsArray.push(data.extendedIngredients[i].amount + " " + data.extendedIngredients[i].unit + " " + data.extendedIngredients[i].originalName);
                            }
                            //Takes each ingredient from array and puts them into a list
                            var ingredientsList = "<ul>"
                            ingredientsArray.forEach(function (ingredient) {
                                ingredientsList += "<li>" + ingredient + "</li>";
                            });
                            ingredientsList += "</ul>"
                            modalingredients.innerHTML = ingredientsList;

                            //Sets recipe instructions
                            var modalrecipe = document.querySelector(".recipe");
                            if (data.instructions != null) {
                                modalrecipe.innerHTML = data.instructions;
                            } else {
                                modalrecipe.innerHTML = "Sorry, no recipe here.";
                            }

                        })
                })
            }
        })
}

resultsLogged();

