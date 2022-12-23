//Submit button takes you to the results page and stores user input into the URL
var submitBtn = document.querySelector("#submitBtn");
var userInput = document.querySelector("#searchInput");

submitBtn.addEventListener("click", function () {

  var food = userInput.value;
  localStorage.setItem("search", food);
  location.assign("./ingredients.html");
})

// for (let i = 1; i < localStorage.length; i++) {
//   var get = localStorage.getItem("citysearch"+i);
//   var getparent = document.querySelector("#searchhistory");
//   var getcreatebutton = document.createElement("button");
//   getparent.append(getcreatebutton);
//   getcreatebutton.innerHTML = get;
//   getcreatebutton.setAttribute("class", "btn btn-primary citysearch"+i)
// }