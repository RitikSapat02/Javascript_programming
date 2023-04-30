/////////////////////////////******styles***********///////////////

//creating dynamic elements
const container = document.querySelector(".container");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  "We use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>";

container.prepend(message);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
    // message.parentElement.removeChild(message);
  });

/////////////styles

message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.height); //we can access only those properties that we set using this style property.
console.log(message.style.width);
console.log(message.style.backgroundColor);

//access using getComputedStyle()
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + "px";

console.log(getComputedStyle(message).height);

////////////////Attributes

const img = document.querySelector(".img");
console.log(img.alt);
console.log(img.src);
console.log(img.className);

img.alt = "Beautiful minimalist logo";

//non-standard
console.log(img.designer); //not work only work for standard attribtes / properties

//getAttribute()
console.log(img.getAttribute("designer"));

//setAttribute()
img.setAttribute("company", "bankist");

//absolute vs relative url
console.log(img.src);
console.log(img.getAttribute("src"));

const link = document.querySelector(".link");
console.log(link.href);
console.log(link.getAttribute("href"));

//data attributes
console.log(img.dataset.versionNumber);

///classes
img.classList.add("c");
img.classList.remove("c");
img.classList.toggle("c");
img.classList.contains("c"); //not includes

//don't use
img.className = "jonas";
