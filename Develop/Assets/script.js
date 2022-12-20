//Submit button takes you to the results page and stores user input into the URL
var submitBtn = document.querySelector("#submitBtn");
var userInput = document.querySelector("#searchInput");

submitBtn.addEventListener("click", function () {
  var food = userInput.value;
  location.assign("./ingredients.html?q=" + food);
})