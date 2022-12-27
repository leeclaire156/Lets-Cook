for (let index = 1; index < localStorage.length-1; index++) {
  var input = localStorage.getItem("search"+index);
  var parent = document.querySelector(".parent")  
  var button = document.createElement("button") 
  parent.append(button)
  button.innerHTML = input
  button.setAttribute("class", "button search"+index)
}

//Submit button takes you to the results page and stores user input into the URL
var submitBtn = document.querySelector("#submitBtn");
var userInput = document.querySelector("#searchInput");

submitBtn.addEventListener("click", searchfromVal)

function searchfromVal() {
  
  index = localStorage.getItem("index");
  // Adds 1 to an index to store the input in the local storage 
  index++;
  localStorage.setItem("index", index);


  var food = userInput.value;
  localStorage.setItem("search"+index, food);
  location.assign("./ingredients.html");
}


for (let index = 1; index < localStorage.length; index++) {
  var historybutton = document.querySelector(".search"+index);
  console.log(historybutton);
  historybutton.addEventListener("click", function () {  
  console.log("click search"+index)
  console.log(historybutton.textContent)
  })

}

