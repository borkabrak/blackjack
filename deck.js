var Deck = function(label, container_selector){

  this.container = document.querySelector(container_selector);

  this.cards = [];

  this.show = function(){
    $(this.container).empty();
    // Label the deck
    $(this.container).append($("<strong>" + label + "</strong>"));

    for(i in this.cards){
      var card = this.cards[i];
      card.html.style.left = (i * 15) + "px";
      this.container.appendChild(card.html);
    
      // Flip the card over when clicked.
      $(card.html).on('click', 
        {card: card},   // Enable us to keep the card flipping logic within the card object
        function(event){
          event.data.card.flip();
        }
      );

    }
  }

  this.draw = function(){
    var card = this.cards.pop();
    this.show();
    return card;
  }

  this.push = function(card){
    return this.cards.push(card);
  }

  this.score = function(){
    var score = 0;
    var soft = 0; // How many aces?
    this.cards.forEach(function(card){
        score += ( card.rank > 9 ) ? 10 : card.rank;
        if ( card.rank == 1 && score < 11 ) { soft += 1; score += 10; };
    });

    while (score > 21 && soft > 0){
      score -= 10;
      soft -= 1;
    };

    return score;

  }
  
}
