var submitBtn = document.querySelector("#submitBtn");
var searchInput = document.querySelector("#searchInput");
function getRecipe() {
    (submitBtn).addEventListener("click", function () {
        var food = searchInput.value;
        //clicking on the submit button console log's the user's input
        console.log(food);
    });
}

// function getEdamamApi() {
//     //input keywords like rosemary and chicken are separate by a space denoted as %20 in the url, optionally %2C for a comma (,) can be added with no affect on the results
//     var clairesEUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=rosemary%2C%20chicken&app_id=f785a0b4&app_key=b522efda145f54b179ea751062ab0554";
//     fetch(clairesEUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             //picks first recipe that came back
//             var meal1 = data.hits[0].recipe;
//             console.log(meal1);
//             //creates a new div element
//             var newDiv = document.createElement("div");
//             //takes the label (title of the dish) property from the meal1 object
//             var content = document.createTextNode(meal1.label);
//             //double checking
//             console.log(content);
//             //makes a new div with the content
//             newDiv.appendChild(content);
//             var titleDiv = document.getElementById("titleDiv");
//             //puts the newDiv into the bottom of the body
//             document.body.insertBefore(newDiv, titleDiv);
//         });
// }

// getEdamamApi();

// function getSpoonApi(id) {
//     $.ajax({
//         url: "https://api.spoonacular.com/recipes" + id + "/information?apiKey=95c25ff3fe144b89ad1f5c00f8455b53",
//         success: funtion(res){
//         document.getElementById("sourceLink").innerHTML = res.sourceUrl
//         document.getElementById("sourceLink").href = res.sourceUrl
//     }

//     });
// }

// function getRecipe(q){
//     $.ajax({
//         url:""
//     })
// }

function getSpoonApi() {
    var clairesSpoonUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=95c25ff3fe144b89ad1f5c00f8455b53&ingredients=apples,+flour,+sugar"
    fetch(clairesSpoonUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

getSpoonApi();