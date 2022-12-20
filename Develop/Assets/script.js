//Submit button takes you to the results page and stores user input into the URL
var submitBtn = document.querySelector("#submitBtn");
var userInput = document.querySelector("#searchInput");

submitBtn.addEventListener("click", function () {
  var food = userInput.value;
  location.assign("./ingredients.html?q=" + food);
})

// Renders Card when function is called in an area called content
function renderCard() {
    var column = document.createElement("div");
    var cardpage = document.querySelector("#content");
    cardpage.append(column);
    column.setAttribute("class", "column is-one-quarter");
        var card = document.createElement("div");
        column.append(card);
        card.setAttribute("class", "card");
            var cardcontent = document.createElement("div");
            card.append(cardcontent);
            cardcontent.setAttribute("class", "card-content");
                var content = document.createElement("div");
                cardcontent.append(content);
                content.setAttribute("class", "content");
                    var title = document.createElement("p");
                    content.append(title);
                    title.setAttribute("class", "title is-4");
                    var duration = document.createElement("p");
                    content.append(duration);
                    duration.setAttribute("id", "duration")
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
                anchor.setAttribute("class", "card-footer-item js-modal-trigger")
                anchor.setAttribute("data-target", "modalinfo")


title.innerHTML = "Lasagna"
duration.innerHTML = "45 minutes"
ingredients.innerHTML = "3 out of 4"

img.setAttribute("src", "https://bulma.io/images/placeholders/1280x960.png")

anchor.innerHTML = "Open for more"
}