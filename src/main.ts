import {gsap} from "gsap";
import {renderMenu, setupMenuEvents} from "./views/Menu";
import {renderGame, setupGameEvents} from "./views/Game";

type ViewState = "MENU" | "GAME";

class TwentyOneApp {
  private currentView: ViewState = "MENU";
  private readonly appContainer: HTMLElement;

  constructor() {
    const container = document.getElementById("app");
    if (!container) throw new Error("App container not found");
    this.appContainer = container;
    this.render();
  }

  private render() {
    this.appContainer.innerHTML = "";
    if (this.currentView === "MENU") {
      this.appContainer.innerHTML = renderMenu();
      setupMenuEvents((view) => this.navigateTo(view));
    } else if (this.currentView === "GAME") {
      this.appContainer.innerHTML = renderGame();
      setupGameEvents((view) => this.navigateTo(view));
    }
  }

  public navigateTo(view: ViewState) {
    this.currentView = view;
    this.render();
  }
}

new TwentyOneApp();
