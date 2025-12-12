let count = 0;

document.getElementById("add").addEventListener("click", function () {
  count++;
  createBox(count);
});

function createBox(num) {
  const container = document.getElementById("container");

  const box = document.createElement("div");
  box.className = "box";
  box.dataset.id = num;

  box.innerHTML = `
        <h1>Metn ${num}</h1>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ipsa iste sit labore beatae atque cum rerum ipsam quaerat dolore.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ipsa iste sit labore beatae atque cum rerum ipsam quaerat dolore.${num}</p>
        <button class="delete">Sil</button>
    `;

  box.querySelector(".delete").addEventListener("click", function () {
    box.remove();
  });

  container.appendChild(box);
}
