//For each item in the local storage, they are appended as buttons below the search area
for (let index = 1; index < localStorage.length - 1; index++) {
  var input = localStorage.getItem("search" + index);
  var parent = document.querySelector(".parent")
  var button = document.createElement("button")
  parent.append(button);
  button.innerHTML = input;
  button.setAttribute("class", "button search" + index);
}


var submitBtn = document.querySelector("#submitBtn");
var userInput = document.querySelector("#searchInput");

//Pressing Enter is the same as clicking the submit button
userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submitBtn").click();
  }
});

//Clears application's local storage by clicking the Clear History button
var clearHistory = document.getElementById("clearBtn");
var history = document.querySelector(".pastSearches");
clearHistory.addEventListener("click", function () {
  localStorage.clear();
  var parent = document.querySelector(".parent")
  parent.innerHTML = "";
})

//Clicking the submit button runs the searchfromVal function
submitBtn.addEventListener("click", searchfromVal)

function searchfromVal() {
  var food = userInput.value;
  //Ensures the user inputs something into the input area, if left blank, there's a modal that says they should add something.
  if (!food) {
    //If there's no food typed and the user hits submit, this function reveals the modal by adding the "is-active" tag to the existing class list
    var noInputModal = document.querySelector(".modal-no-input");
    noInputModal.classList.add("is-active");
    //Clicking the exit button in the modal's header will close the modal by removing the "is-active" tag in the class list
    var closeModal = document.querySelector(".delete");
    closeModal.addEventListener("click", function () {
      noInputModal.classList.remove("is-active");
    })
    return;
  }

  index = localStorage.getItem("index");

  // Adds 1 to an index to store the input in the local storage when user clicks submit and runs this function
  index++;
  // When user clicks submit and runs this function, 2 items are added to local storage.
  // First, index (key), [number] (value).
  localStorage.setItem("index", index);
  // Second, search[number from index] (key), [user input] (value).

  localStorage.setItem("search" + index, food);

  //Sends user to results page
  location.assign("./ingredients.html");
}

// The event listener for the search history buttons
for (let index = 1; index < localStorage.length; index++) {
  // First make sure to know which button you are pressing by searching for the class
  var historybutton = document.querySelector(".search" + index);
  // When someone clicks the button
  historybutton.addEventListener("click", function (e) {
    e.preventDefault()
    // Adds +1 to the saved index of the local storage and gets the item which matches the correct class
    var add = localStorage.getItem("search" + index);
    index = localStorage.getItem("index");
    index++;

    // Sets the past search history as a new local storage key and puts the index back into the local storage
    localStorage.setItem("search"+index, add)
    localStorage.setItem("index", index);
    // Changes the page to the recipe results page
    location.assign("./ingredients.html")
  })
}
