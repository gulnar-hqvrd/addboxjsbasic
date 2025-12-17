let headerInput = document.getElementById("header");
let contentInput = document.getElementById("content");
let addButton = document.getElementById("add");
let searchInput = document.getElementById("search");

addButton.addEventListener("click", function (event) {
  event.preventDefault();
  let headerValue = headerInput.value;
  let contentValue = contentInput.value;
  if (headerValue && contentValue) {
    let box = document.createElement("div");
    box.className = "box";
    let header = document.createElement("h2");
    header.textContent = headerValue;
    let content = document.createElement("p");
    content.textContent = contentValue;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Sil";
    deleteBtn.className = "delete";

     deleteBtn.addEventListener("click", function () {
      box.remove();
      console.log("salam");
      
    });

    box.appendChild(header);
    box.appendChild(content);
    box.appendChild(deleteBtn);
    document.getElementById("container").appendChild(box);
    headerInput.value = "";
    contentInput.value = "";
  }

  console.log("Salam");
});


searchInput.addEventListener("keyup", function () {
  let searchValue = searchInput.value.toLowerCase();
  let boxes = document.querySelectorAll(".box");

  boxes.forEach(function (box) {
    let headerText = box.querySelector("h2").textContent.toLowerCase();
    let contentText = box.querySelector("p").textContent.toLowerCase();

    if (
      headerText.includes(searchValue) ||
      contentText.includes(searchValue)
    ) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
});