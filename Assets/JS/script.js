//Submit button takes you to the results page and stores user input into the URL
var submitBtn = document.querySelector("#submitBtn");
var userInput = document.querySelector("#searchInput");

submitBtn.addEventListener("click", function () {
  
  index = localStorage.getItem("index");
  // Adds 1 to an index to store the input in the local storage 
  index++;
  localStorage.setItem("index", index);


  var food = userInput.value;
  localStorage.setItem("search"+index, food);
  location.assign("./ingredients.html");
})

var historybutton = document.querySelector(".history1")
historybutton.addEventListener("click", function() {
  console.log("click")
})