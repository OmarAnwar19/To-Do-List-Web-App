let button = document.getElementById("button");
let cont = document.getElementById("container");
let input = document.getElementById("input");

button.addEventListener("click", function () {
  var paragraph = document.createElement("p");

  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = "•" + " " + input.value;

  cont.appendChild(paragraph);
  input.value = "";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", function () {
    cont.removeChild(paragraph);
  });
});
