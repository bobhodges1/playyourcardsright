/**
 * Represents a card in the deck.
 * @typedef {Object} Card
 * @property {string} id - The unique identifier of the card.
 * @property {number} value - The numerical value of the card.
 * @property {"diamonds" | "hearts" | "clubs" | "spades"} suit - The suit of the card.
 * @property {string} front - url providing front image of card
 * @property {string} back -  url providing back image of card
 */

/**
 * An array of cards representing a standard deck of playing cards.
 * @type {Card[]}
 */
const cardDeckArray = [
  {
    id: "2♦️",
    value: 2,
    suit: "diamonds",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_2.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "3♦️",
    value: 3,
    suit: "diamonds",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_3.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "4♦️",
    value: 4,
    suit: "diamonds",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_4.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "5♦️",
    value: 5,
    suit: "diamonds",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_5.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "6♦️",
    value: 6,
    suit: "diamonds",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_6.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "7♦️",
    value: 7,
    suit: "diamonds",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_7.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "8♦️",
    value: 8,
    suit: "diamonds",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_8.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "9♦️",
    value: 9,
    suit: "diamonds",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_9.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "10♦️",
    value: 10,
    suit: "diamonds",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_10.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "J♦️",
    value: 11,
    suit: "diamonds",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_jack.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "Q♦️",
    value: 12,
    suit: "diamonds",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_queen.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "K♦️",
    value: 13,
    suit: "diamonds",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_king.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "A♦️",
    value: 14,
    suit: "diamonds",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_ace.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "2♥️",
    value: 2,
    suit: "hearts",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_2.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "3♥️",
    value: 3,
    suit: "hearts",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_3.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "4♥️",
    value: 4,
    suit: "hearts",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_4.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "5♥️",
    value: 5,
    suit: "hearts",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_5.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "6♥️",
    value: 6,
    suit: "hearts",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_6.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "7♥️",
    value: 7,
    suit: "hearts",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_7.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "8♥️",
    value: 8,
    suit: "hearts",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_8.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "9♥️",
    value: 9,
    suit: "hearts",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_9.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "10♥️",
    value: 10,
    suit: "hearts",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_10.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "J♥️",
    value: 11,
    suit: "hearts",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_jack.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "Q♥️",
    value: 12,
    suit: "hearts",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_queen.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "K♥️",
    value: 13,
    suit: "hearts",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_king.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "A♥️",
    value: 14,
    suit: "hearts",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_ace.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "2♣️",
    value: 2,
    suit: "clubs",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_2.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "3♣️",
    value: 3,
    suit: "clubs",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_3.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "4♣️",
    value: 4,
    suit: "clubs",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_4.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "5♣️",
    value: 5,
    suit: "clubs",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_5.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "6♣️",
    value: 6,
    suit: "clubs",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_6.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "7♣️",
    value: 7,
    suit: "clubs",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_7.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "8♣️",
    value: 8,
    suit: "clubs",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_8.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "9♣️",
    value: 9,
    suit: "clubs",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_9.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "10♣️",
    value: 10,
    suit: "clubs",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_10.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "J♣️",
    value: 11,
    suit: "clubs",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_jack.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "Q♣️",
    value: 12,
    suit: "clubs",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_queen.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "K♣️",
    value: 13,
    suit: "clubs",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_king.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "A♣️",
    value: 14,
    suit: "clubs",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_ace.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "2♠️",
    value: 2,
    suit: "spades",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_2.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "3♠️",
    value: 3,
    suit: "spades",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_3.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "4♠️",
    value: 4,
    suit: "spades",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_4.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "5♠️",
    value: 5,
    suit: "spades",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_5.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "6♠️",
    value: 6,
    suit: "spades",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_6.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "7♠️",
    value: 7,
    suit: "spades",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_7.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "8♠️",
    value: 8,
    suit: "spades",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_8.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "9♠️",
    value: 9,
    suit: "spades",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_9.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "10♠️",
    value: 10,
    suit: "spades",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_10.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "J♠️",
    value: 11,
    suit: "spades",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_jack.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "Q♠️",
    value: 12,
    suit: "spades",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_queen.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "K♠️",
    value: 13,
    suit: "spades",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_king.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
  {
    id: "A♠️",
    value: 14,
    suit: "spades",
    front:
      "https://tekeye.uk/playing_cards/images/svg_playing_cards/other/spades_ace_simple.svg",
    back: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/frog.svg",
  },
];

export default cardDeckArray;
