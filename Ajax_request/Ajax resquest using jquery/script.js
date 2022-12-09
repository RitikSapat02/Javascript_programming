function fetchRandomDogImage() {
  // var xhrRequest = new XMLHttpRequest();

  // xhrRequest.onload = function () {
  //   console.log(xhrRequest.response);
  //   var responseJSON = JSON.parse(xhrRequest.response);
  //   var imageUrl = responseJSON.message;
  //   $("#dog-image").attr("src", imageUrl);
  // };

  // xhrRequest.open("get", "https://dog.ceo/api/breeds/image/random", true);
  // xhrRequest.send();

  // $.ajax({
  //   url: "https://dog.ceo/api/breeds/image/random",
  //   method: "GET",
  //   success: function (data) {
  //     // var responseJSON = JSON.parse(xhrRequest.response);
  //     var imageUrl = data.message;
  //     $("#dog-image").attr("src", imageUrl);
  //   },
  // }).fail(function(){
  //   console.log("error");
  // })

  $.get("https://dog.ceo/api/breeds/image/random", function (data) {
    var imageUrl = data.message;
    $("#dog-image").attr("src", imageUrl);
  });
}

$("#fetch-dog-image-button").click(fetchRandomDogImage);
