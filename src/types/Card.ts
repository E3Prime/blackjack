type Suit = "hearts" | "diamonds" | "clubs" | "spades";
type Rank = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";

type CardConfig = {
  suit: Suit;
  rank: Rank;
};

export class Card {
  public readonly suit: Suit;
  public readonly rank: Rank;
  public readonly value: number;
  public readonly id: string;
  public isFaceUp: boolean = false;
  private static readonly RANK_VALUES: Record<Rank, number> = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 10,
    Q: 10,
    K: 10,
    A: 11,
  };

  constructor(data: CardConfig) {
    this.suit = data.suit;
    this.rank = data.rank;
    this.value = Card.RANK_VALUES[data.rank];
    this.id = `${data.rank}-${data.suit}`;
  }

  toggleFaceUp() {
    this.isFaceUp = !this.isFaceUp;
  }

  get color(): "red" | "black" {
    return this.suit === "hearts" || this.suit === "diamonds" ? "red" : "black";
  }
}
