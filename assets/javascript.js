
var giphys = ["Dog", "Cat", "Horse", "Bat", "Rat", "Monkey", "Platypus"];

function renderButtons() {
    $("#giphy-view").empty();

    for (var i = 0; i < giphys.length; i++) {
        var giphyButton = $("<button>");
        giphyButton.addClass("giphyButton");
        giphyButton.attr("data-name", giphys[i]);
        giphyButton.text(giphys[i]);
        $("#giphy-view").append(giphyButton);
    }
}

$("#add-giphy").on("click", function (event) {
    event.preventDefault();
    var giphy = $("#giphy-input").val().trim();
    giphys.push(giphy);
    renderButtons();
});

$(document).on("click", ".giphyButton", function (event) {
    var word = $(this).attr("data-name");
    console.log(word);
    event.preventDefault();

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + (word);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var imageUrl = response.data.image_original_url;
            var giphyImage = $("<img>");
            giphyImage.attr("src", imageUrl);
            giphyImage.attr("alt", "giphy image");
            $("#giphy-view").append(giphyImage);
        });
});

$("#img").on("click", function (event) {
    $("#img").stop();
});

renderButtons();