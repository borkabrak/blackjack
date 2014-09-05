var Card = function(rank, suit){

  this.rank = rank;
  this.suit = suit;

};

var Deck = function(){

  this.cards = [];

  this.ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  this.suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

  for (rank in this.ranks){
    for (suit in this.suits){
      this.cards.push(new Card(this.ranks[rank], this.suits[suit]));
    }
  }
  
};
