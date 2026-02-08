const world = document.getElementById("world");
const scoreDisplay = document.getElementById("score");
const regenBtn = document.getElementById("regen");

let score = 0;

const blockTypes = ["dirt", "stone", "dirt", "stone", "dirt"];

function createWorld() {
  world.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    const block = document.createElement("div");
    block.classList.add("block");

    const type = blockTypes[Math.floor(Math.random() * blockTypes.length)];
    block.classList.add(type);

    block.addEventListener("click", () => {
      if (!block.classList.contains("air")) {
        block.className = "block air";
        score++;
        scoreDisplay.textContent = "Score: " + score;
      }
    });

    world.appendChild(block);
  }
}

regenBtn.addEventListener("click", () => {
  score = 0;
  scoreDisplay.textContent = "Score: 0";
  createWorld();
});

createWorld();
