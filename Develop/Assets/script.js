//Submit button takes you to the results page and stores user input into the URL
var submitBtn = document.querySelector("#submitBtn");
var userInput = document.querySelector("#searchInput");

submitBtn.addEventListener("click", function () {
  var food = userInput.value;
  location.assign("./ingredients.html?q=" + food);
})

<<<<<<< HEAD
});

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
    cardpage.append(createDiv)
  }

=======
>>>>>>> 6f1c45c3f404eef8c387dd170bfeb9dacdfbc897
