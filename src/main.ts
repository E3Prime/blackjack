import {animate} from "motion";

const activeAnimation = () => animate(startGameBtn, {y: 4, boxShadow: "none"}, {duration: 0.3, type: "spring"});
const inactiveAnimation = () => animate(startGameBtn, {y: 0, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.9)"}, {duration: 0.3, type: "spring"});

const hideMenuElem = () => {
  startGameBtn.addEventListener("click", initializeGame);
  startGameBtn.removeEventListener("pointerdown", activeAnimation);
  startGameBtn.removeEventListener("pointerup", inactiveAnimation);
  startGameBtn.removeEventListener("pointerleave", inactiveAnimation);
  animate(menuElem, {opacity: 0}, {duration: 0.7}).then(() => menuElem.setAttribute("hidden", ""));
};

const revealGameElem = () => {};

// DOM Variables
// Menu element variables
const menuElem = document.getElementById("menu") as HTMLElement;
const startGameBtn = menuElem.querySelector("#startGame") as HTMLButtonElement;
const menuTitle = startGameBtn.previousElementSibling as HTMLElement;

// Game element variables
const gameElem = document.getElementById("game") as HTMLElement;

startGameBtn.addEventListener("click", initializeGame);
startGameBtn.addEventListener("pointerdown", activeAnimation);
startGameBtn.addEventListener("pointerup", inactiveAnimation);
startGameBtn.addEventListener("pointerleave", inactiveAnimation);

function initializeGame() {
  hideMenuElem();
  revealGameElem();
}
