//////////////selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

console.log(document.querySelector(".para"));
console.log(document.querySelector("p"));

const paras = document.querySelectorAll(".para");
console.log(paras);

const container = document.querySelector(".container");
console.log(container.querySelector(".btn"));

console.log(document.getElementById("heading"));

const p = document.getElementsByTagName("p");
console.log(p);

console.log(document.getElementsByClassName("para"));

//////////////Creating and insert

container.insertAdjacentHTML("afterbegin", `<p>Hello</p>`);

const message = document.createElement("div"); //create dom ele an store in message but not yet anywhere in our dom. all this is a dom object that we can use but it is not there in dom itself

message.classList.add("cookie-message");
message.textContent =
  "We use cookies for improved functionality and analytics.";
message.innerHTML =
  "We use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>";
container.prepend(message);

// container.append(message);

// container.append(message.cloneNode(true));     //to copy at diffrent location

// container.before(message);
// container.after(message);

/////////////////////deleting
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();       recent method

    message.parentElement.removeChild(message);
  });
