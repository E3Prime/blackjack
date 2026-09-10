import {gsap} from "gsap";

export function renderGame(): string {
  return `
      <section class="game aspect-video bg-black/60 backdrop-blur-sm mx-auto max-w-11/12 h-full rounded-lg p-2 flex flex-col gap-2">
        <div class="text-neutral flex justify-between">
          <button type="button" id="btn-back" class="flex items-center rounded-full px-3 py-1.5 bg-gray-600/75 gap-1.5">
            <img src="src/assets/images/back_icon.svg" alt="Back Icon" />
            Back
          </button>

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
          <p>Current Bet: <span>$9000</span></p>
        </div>
        <div id="betting-controls" class="grid grid-cols-4 text-neutral gap-1.5">
          <label class="bg-gray-600/75 rounded-lg py-2 font-semibold text-center cursor-pointer transition-all has-checked:bg-emerald-600 has-checked:ring-2 has-checked:ring-emerald-400">
            <input type="radio" name="chipChoice" class="sr-only" checked value="25" />
            $25
          </label>
          
          <label class="bg-gray-600/75 rounded-lg py-2 font-semibold text-center cursor-pointer transition-all has-checked:bg-emerald-600 has-checked:ring-2 has-checked:ring-emerald-400">
            <input type="radio" name="chipChoice" class="sr-only" value="100" />
            $100
          </label>

          <label class="bg-gray-600/75 rounded-lg py-2 font-semibold text-center cursor-pointer transition-all has-checked:bg-emerald-600 has-checked:ring-2 has-checked:ring-emerald-400">
            <input type="radio" name="chipChoice" class="sr-only" value="500" />
            $500
          </label>

          <label class="bg-gray-600/75 rounded-lg py-2 font-semibold text-center cursor-pointer transition-all has-checked:bg-emerald-600 has-checked:ring-2 has-checked:ring-emerald-400">
            <input type="radio" name="chipChoice" class="sr-only" value="1000" />
            $1K
          </label>
        </div>
        <div id="action-controls" class="grid grid-cols-3 gap-3 text-center text-neutral" hidden>
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
        <button id="deal-btn" type="button" class="bg-secondary rounded-lg flex items-center justify-center gap-1 py-3 cursor-pointer">
          <img src="src/assets/images/die.svg" alt="Die Icon" />
          DEAL ME IN
        </button>
      </section>
    `;
}

export function setupGameEvents(onNavigate: (view: "MENU" | "GAME") => void) {
  let credits = 9000;

  const backBtn = document.getElementById("btn-back") as HTMLButtonElement;
  const dealBtn = document.getElementById("deal-btn") as HTMLButtonElement;
  const bettingControls = document.getElementById("betting-controls") as HTMLDivElement;
  const actionControls = document.getElementById("action-controls") as HTMLDivElement;

  gsap.fromTo(".game", {opacity: 0}, {opacity: 1, duration: 1, ease: "power2.out"});

  backBtn.addEventListener("click", () => onNavigate("MENU"));
  dealBtn.addEventListener("click", () => {
    bettingControls.hidden = true;
    actionControls.hidden = false;
    beginGame();
  });
}

function beginGame() {}
