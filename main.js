//Interacts with the DOM by grabbing a node and setting it to a variable.
var showCards = document.getElementById("cards");
var resetCards = document.getElementById("reset");

// Deal button when clicked, this function displays the shuffled cards
showCards.onclick = function(){
  // Selects #container section in the DOM and stores it in cardContainer
  var cardContainer = document.getElementById("container");
  // Clears cardContainer
  cardContainer.innerHTML = "";
  // Calls the dC function
  displayCards();
  // Sets button display to block.
  resetCards.style.display = "block";
};


// Function to reset cards on click
resetCards.onclick = function() {
  // Resets cards to empty string on click
  document.getElementById('container').innerHTML = "";
  // Reset button to display none.
  resetCards.style.display = "none";
};


// Prints the deck of shuffled cards one by one
function displayCards(){
  // New deck
  var deck = newDeck();
  // Shuffled deck
  var shuffledCards = shuffleCards(deck);
  // Iterates through the deck
  for(var i=0; i < deck.length; i++){
    // Makes a div for to hold the card
    var card = document.createElement('div');
    // Gives it the class of 'card'
    card.className = "card";
    // Creates a variable to select the 'container' section in the DOM
    var cardContainer = document.getElementById('container');
    // Adds a card at the end
    cardContainer.appendChild(card);
    // Changes the background to the image of the card from shuffledCards
    card.style.backgroundImage = "url(images/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";
  }
}


// Creates a deck of 52 cards
function newDeck(){

  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];

  var suits = [ "d", "c", "s", "h"];
  var deck = [];

  // Matches card number with a suit number, pushes it as an object to an array.
  for (var i = 0; i < ranks.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      deck.push({
        card:ranks[i].card,
        suit:suits[j]
      });
    }
  }
  return deck;
}

// Shuffles the Deck
function shuffleCards(cardDeck){
  // Empty array to store the shuffled deck
  var result = [];
  // Slices copy of deck
  var cardDeckCopy = cardDeck.slice(0);
  // Length of copy
  cardDeckLength = cardDeckCopy.length;
  // Picks a card at random and splices it from the old array to make the new one.
  for (var i = 0; i < cardDeckLength; i++) {
    var num = Math.floor(Math.random() * cardDeckCopy.length);
    result.push(cardDeckCopy.splice(num, 1)[0]);
  }
  return result;
}