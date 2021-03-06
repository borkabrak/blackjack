var Card = function(rank, suit){

  this.rank = rank;
  this.suit = suit;

  var colors = {
    "Spades": "black",
    "Hearts": "red",
    "Diamonds": "red",
    "Clubs": "black"
  }

  this.color = colors[suit];

  var symbols = {

    suits: {
      "Spades": "&spades;",
      "Hearts": "&hearts;",
      "Diamonds": "&diams;",
      "Clubs": "&clubs;"
    },

    ranks: {
      1: "A",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "J",
      12: "Q",
      13: "K"
    }

  }

  this.flip = function(){
    $(this.html).toggleClass("back");
    return this;
  }

  function createLabel(classname){
    var label = document.createElement("span");
    label.innerHTML = symbols.ranks[rank] + symbols.suits[suit];
    label.setAttribute("class", classname);
    return label;
  }

  // Create the HTML structure
  this.html = document.createElement("div");
  this.html.setAttribute("class", "card " + this.color + " back");

  // labels (rank and suit signifiers at top left and bottom right)
  var labeltext = this.rank + this.suit;
  var label1 = createLabel("label1");
  var label2 = createLabel("label2");
  var label3 = createLabel("label3");

  this.html.appendChild(label1);
  this.html.appendChild(label2);
  this.html.appendChild(label3);

}
