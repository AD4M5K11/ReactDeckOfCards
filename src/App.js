import './deckOfCards/deckOfCards.css';
import Deck from './deckOfCards/deckOfCards'


export default function App() {
  return (
    <div className="App">
      <Deck />
    </div>
  );
}

const deck = new Deck()
console.log(deck)

const shuffledDeck = new Deck()
shuffledDeck.shuffle();
console.log(shuffledDeck)

const cardTake = new Deck()
cardTake.takeCard()
console.log(cardTake)

const resetDeck = new Deck()
resetDeck.reset()
console.log(resetDeck)


