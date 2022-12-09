function fetchRandomDogImage() {
  $.get("https://dog.ceo/api/breeds/images/random", function (data) {
    var imageUrl = data.message;
    $("#dog-image").attr("src", imageUrl);
  }).fail(function (xhr, textStatus, errorThrown) {
    console.log("Request Failed");
  });
}

$("#fetch-dog-image-button").click(fetchRandomDogImage);
