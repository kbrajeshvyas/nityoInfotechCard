let numPlayers = 9; //TODO: make it Input from HTML

// Player Validity
function checkValid() {
    if (numPlayers <= 0) {
        alert("Invalid ");
        return;
    }
}

// create new deck
let deck = [];
for (let item = 1; item < 53; item++) {
    deck.push(item);
}

// Deck Shuffel
function shuffel() {
    deck.sort(function (a, b) {
        return 0.5 - Math.random()
    });
}

let currentNum = 1;
// Card distribute among numPlayers
function distribute(numPlayers) {
    checkValid();
    shuffel();
    while (deck.length) {
        //TODO: repete as per applicable rounds

    }

}

// Find suit
function findSuit(card) {
    let suit = "";
    if (card <= 13)
        suit = "C";
    else if (card > 13 && card <= 26)
        suit = "D";
    else if (card > 26 && card <= 39)
        suit = "H";
    else if (card > 39 && card <= 52)
        suit = "S";
    else {
        alert("Wrong card, its a Joker");
        return;
    }
    return suit;
}

// Find value
function findValue(card) {
    let value = 0;
    value = card % 13;
    switch (value) {
        case 1:
            value = "A";
            break;
        case 10:
            value = "X";
            break;
        case 11:
            value = "J";
            break;
        case 12:
            value = "Q";
            break;
        case 0:
            value = "K";
            break;
        default:
            break;
    }
    return value;
}

// Print once card
function print(card) {
    return (findSuit(card) + "-" + findValue(card));
}