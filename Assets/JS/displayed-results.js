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

var button = document.querySelector(".renderbtn")


function renderCard() {
    var createDiv = document.createElement("div");
    var cardpage = document.querySelector(".columns");
    cardpage.append(createDiv);
}


//Upon loading, the user's search query is extracted (lines 59-61) from the URL, I console logged to double check
//The extracted query is put into the resultsURL variable, which is then fetched and the resulting data is logged
function resultsLogged() {
    var userSearch = document.location.search;
    var params = new URLSearchParams(userSearch);
    var food = params.get("q");
    console.log(food);
    var resultsUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + apiKey + "&ingredients=" + food;
    var recipeArray = [];
    fetch(resultsUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                recipeArray.push(data[i].id);
            }
            console.log(recipeArray);
            console.log(recipeArray[1]);
        })

    // // Claire's code
    // var getRecipeUrl = "https://api.spoonacular.com/recipes/" + recipeArray[0] + "/information?apiKey=" + apiKey;
    // fetch(getRecipeUrl)
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         console.log(data);

    //     })
}

resultsLogged();

