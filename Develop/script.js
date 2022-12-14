var recipes

fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=094cfb718b2a486eb151cd32633e1d2d&ingredients=apples&number=30")
.then(function (response) {
    console.log(response);
    return response.json();
})
.then(function (data){
    console.log(data)

});
