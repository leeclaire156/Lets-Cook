var apiKey = "33c3e845cfef4ac8a9f7162d4396ea0c";
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

var button = document.querySelector(".renderbtn")


function renderCard() {
    var createDiv = document.createElement("div");
    var cardpage = document.querySelector(".columns");
    cardpage.append(createDiv);
}


//Upon loading, the user's search query is extracted (lines 59-61) from the URL, I console logged to double check
//The extracted query is put into the resultsURL variable, which is then fetched and the resulting data is logged
function resultsLogged() {
    var index = localStorage.getItem("index");
    var food = localStorage.getItem("search"+index);
    console.log(food);
    var resultsUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + apiKey + "&ingredients=" + food;
    var recipeArray = [];
    fetch(resultsUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (let index = 0; index < 10; index++) {
                // Renders Card when function is called in an area called content
                var column = document.createElement("div");
                var cardpage = document.querySelector(".columns");
                cardpage.append(column);
                column.setAttribute("class", "column is-one-quarter");
                var card = document.createElement("div");
                column.append(card);
                card.setAttribute("class", "card")
                var cardcontent = document.createElement("div");
                card.append(cardcontent);
                cardcontent.setAttribute("class", "card-content");
                var content = document.createElement("div");
                cardcontent.append(content);
                content.setAttribute("class", "content");
                var title = document.createElement("p");
                content.append(title);
                title.setAttribute("class", "title is-4");
                // var duration = document.createElement("p");
                // content.append(duration);
                // duration.setAttribute("id", "duration")
                var ingredients = document.createElement("p");
                content.append(ingredients);
                ingredients.setAttribute("id", "ingredients");
                var cardimage = document.createElement("div");
                card.append(cardimage);
                cardimage.setAttribute("class", "card-image");
                var figure = document.createElement("figure");
                cardimage.append(figure);
                figure.setAttribute("class", "image is-4by3")
                var img = document.createElement("img");
                figure.append(img)
                var footer = document.createElement("footer");
                card.append(footer);
                footer.setAttribute("class", "card-footer");
                var anchor = document.createElement("a");
                footer.append(anchor);
                anchor.setAttribute("class", "js-modal-trigger card-footer-item");
                anchor.setAttribute("data-target", "modalinfo");
                anchor.setAttribute("id", "moreinfo");

                title.innerHTML = data[index].title
                // duration.innerHTML = "45 minutes"
                ingredients.innerHTML = "Missing " + data[index].missedIngredients.length + " Ingredients"
                img.setAttribute("src", data[index].image)
                anchor.innerHTML = "Open for more"

                // Opens modal when somebody presses open for more
                anchor.addEventListener("click", function () {
                    var modal = document.querySelector("#modalinfo")
                    modal.removeAttribute("class");
                    modal.setAttribute("class", "modal is-active")
                    // console.log(data[index].id);
                    var getRecipeUrl = "https://api.spoonacular.com/recipes/" + data[index].id + "/information?apiKey=" + apiKey;
                    fetch(getRecipeUrl)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (data) {
                            console.log(data);

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

