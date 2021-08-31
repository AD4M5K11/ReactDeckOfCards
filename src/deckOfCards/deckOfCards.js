import './deckOfCards.css'
import React, {Component} from 'react'

const SUITS = ["♥", "♦", "♣", "♠"]
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
// ♥ ♠ ♣ ♦

export default class Deck extends Component {
    constructor(cards = freshDeck()) {
        super(cards)
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length
    }

    get colour() {
        return this.suit === "♥" || this.suit === "♦" ? "red" : 'black'
    }

    takeCard() {
        var take = Math.floor(Math.floor() * 52) + 1;
        return this.cards.splice(take, 1)[0]
    }

    shuffle() {

        for(let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.random() * (i + 1)
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
            
        }
    }

    reset() {
        return SUITS.flatMap(suit => {
            return VALUES.map(value => {
                return new Card(suit, value)
            })
        })
    }

    render() {
        return(
                <div>
                    <h2 className="h2"> Deck Of Cards </h2>
                    <div className="player-deck deck"> {Deck.length} </div>
                    <div className="player-card-slot card-slot" onLoad={this.getHTML}>
                    <div className="card" data-value="9"> ♦ </div>
                    </div>

                    <button className="shuffle" type="button" onClick={this.shuffle}> Shuffle </button>
                    <button className="takeCard" type="button" onClick={this.takeCard}> Take Card </button>
                    <button className="reset" type="button" onClick={this.reset}> Reset </button>
                  </div>
        )
    }


    getHTML() {
    const cardDiv = document.createElement('div')
    cardDiv.innerText = this.suit
    cardDiv.classList.add("card", this.colour)
    cardDiv.dataset.value = `${this.value} ${this.suit}`
    return cardDiv
    }
}

export class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}



function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}