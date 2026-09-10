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
    this.currentView === "MENU" ? this.renderMenu() : this.renderGame();
  }

  public navigateTo(view: ViewState) {
    this.currentView = view;
    this.render();
  }

  private renderMenu() {
    this.appContainer.innerHTML = `
       <section class="flex flex-col items-center justify-center gap-5 bg-black/50 max-w-[90%] md:max-w-[40%]   mx-auto p-4 rounded-3xl font-[Roboto]">
        <h1 class="text-xl font-bold border-2 border-secondary text-secondary px-3.5 py-1 bg-secondary/15 rounded-full">VIP Salon Exclusive</h1>
        <h2 class="font-bold text-6xl text-neutral">21</h2>
        <p class="text-center text-neutral text-lg">Step onto the high-stakes felt. Master the count, beat the dealer, and claim your fortune in ultimate style.</p>
        <button id="play-btn" class="py-4 px-8 bg-secondary rounded-2xl flex items-center justify-center gap-3 text-lg cursor-pointer">
          <img src="src/assets/images/play.svg" alt="Play Button" class="w-5 h-5" />
          Deal Me In
        </button>
        <div class="flex gap-3 text-neutral">
          <div class="flex items-center justify-center gap-1">
            <img src="src/assets/images/check.svg" alt="Check Icon" />
            <p>Probably Fair</p>
          </div>

          <div class="flex items-center justify-center gap-1 text-neutral">
            <img src="src/assets/images/lightning_bolt.svg" alt="Lightning Icon" />
            <p>Instant Payouts</p>
          </div>
        </div>
      </section> 
    `;

    const playBtn = document.getElementById("play-btn") as HTMLButtonElement;
    playBtn.addEventListener("click", () => this.navigateTo("GAME"));
  }

  private renderGame() {
    this.appContainer.innerHTML = `
      <section class="aspect-video bg-black/60 backdrop-blur-sm mx-auto max-w-11/12 h-full rounded-lg p-2 flex flex-col gap-2">
        <div class="text-neutral flex justify-between">
          <button type="button" id="btn-back" class="flex items-center rounded-full px-3 py-1.5 bg-gray-600/75 gap-1.5">
            <img src="src/assets/images/back_icon.svg" alt="Back Icon" />
            Back
          </button>

          <p class="flex items-center rounded-full px-3 py-1.5 bg-gray-600/75 gap-1.5">
            <img src="src/assets/images/timer.svg" alt="Timer Icon" />
            <span>00:14</span>
          </p>

          <p class="flex items-center rounded-full px-3 py-1.5 bg-gray-600/75 gap-1.5">
            <img src="src/assets/images/wallet.svg" alt="Money Icon" />
            <span>$9,000,000</span>
          </p>
        </div>

        <div class="flex-1 flex flex-col justify-between bg-table border-2 border-tertiary rounded-md text-neutral p-3">
          <div class="flex justify-between">
            <h3 class="uppercase tracking-[0.3rem]">Dealer</h3>
            <p>Dealer Hand Value: <span></span></p>
          </div>
          <div class="dealers-cards"></div>

          <h4 class="text-center">Dealer's Turn</h4>

          <div class="players-cards"></div>
          <div class="flex justify-between">
            <h3 class="uppercase tracking-[0.3rem]">Player</h3>
            <p>Player Hand Value: <span></span></p>
          </div>
        </div>

        <div class="flex justify-between text-neutral">
          <span>Select Chip Value</span>
          <p>Current Bet: <span>$19000</span></p>
        </div>
        <div class="grid grid-cols-4 text-neutral gap-1.5">
          <button type="button" class="active rounded-lg py-2 font-semibold">$25</button>
          <button type="button" class="bg-gray-600/75 rounded-lg py-2 font-semibold">$100</button>
          <button type="button" class="bg-gray-600/75 rounded-lg py-2 font-semibold">$500</button>
          <button type="button" class="bg-gray-600/75 rounded-lg py-2 font-semibold">$1K</button>
        </div>
        <div class="grid grid-cols-3 gap-3 text-center text-neutral" hidden>
          <button type="button" class="bg-gray-600/75 rounded-lg py-2">
            <img src="src/assets/images/hit.svg" alt="Plus Icon" class="mx-auto" />
            Hit
          </button>
          <button type="button" class="bg-gray-600/75 rounded-lg py-2">
            <img src="src/assets/images/hit.svg" alt="Plus Icon" class="mx-auto" />
            Hit
          </button>
          <button type="button" class="bg-gray-600/75 rounded-lg py-2">
            <img src="src/assets/images/hit.svg" alt="Plus Icon" class="mx-auto" />
            Hit
          </button>
        </div>
        <button type="button" class="bg-secondary rounded-lg flex items-center justify-center gap-1 py-3 cursor-pointer">
          <img src="src/assets/images/die.svg" alt="Die Icon" />
          DEAL ME IN
        </button>
      </section>
    `;
    const backBtn = document.getElementById("btn-back") as HTMLButtonElement;
    backBtn.addEventListener("click", () => this.navigateTo("MENU"));
  }
}

new TwentyOneApp();
