var Deck = function(container_selector){

  this.container = document.querySelector(container_selector);

  this.cards = [];

  this.show = function(){
    $(this.container).empty();
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
  
}
