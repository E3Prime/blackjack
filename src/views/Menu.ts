import {gsap} from "gsap";

export function renderMenu(): string {
  return `
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
}

export function setupMenuEvents(onNavigate: (view: "MENU" | "GAME") => void) {
  const dealButton = document.getElementById("play-btn") as HTMLButtonElement;
  const menuSection = dealButton.parentElement as HTMLElement;
  dealButton.addEventListener("click", () => onNavigate("GAME"));
  gsap.fromTo(menuSection, {yPercent: -100, opacity: 0}, {yPercent: 0, opacity: 1, duration: 1, ease: "power2.out"});
}
