function displayImage(data) {
  // $("<img>", {
  //   src: data.url,
  //   height: "100%",
  //   width: "100%",
  // }).appendTo("#image-container");

  var img = $(document.createElement("img"));
  img.attr("src", data.url);
  img.appendTo("#image-container");
  //$('#image-container).append()
}

$.ajax({
  url: "https://api.nasa.gov/planetary/apod",
  mrthod: "GET",
  success: displayImage,
  data: {
    api_key: "DEMO_KEY",
    date: "2018-06-05",
  },
});
