import {animate, transform} from "motion";

const titleScreenElem = document.getElementById("titleScreen") as HTMLElement;
const startGameBtn = titleScreenElem.lastElementChild as HTMLButtonElement;
const gameScreenElem = document.getElementById("gameScreen") as HTMLElement;

startGameBtn.addEventListener("click", initializeGame);

function initializeGame() {
  animate(startGameBtn, {y: "100vh", opacity: 0}, {duration: 0.75, ease: "easeIn"}).then(() => (startGameBtn.disabled = true));
}
