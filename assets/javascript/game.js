// Psuedocode 
// 1. Start game (keyup event)
// 2. Instructions on how to play (alert box)
// 3. Display number of blanks 
// 4. Guess a letter
// 5. If correct, add correct letter to word blank. If wrong, subtract number of allowable wrong guesses.
// 6. Repeat until either word is completely created or player runs out of guesses.
// 7. Start game with keyup event again
 // dont forget .ready*
// create variables


  $(document).ready(function() {

      
      // alphabet variable
      var wordBank = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "];
      var superHero = "";
      var guessLeft = 10;
      var wins = 0;
      var blankWord = "";

      // array of superhero characters
      var heroArray = [
                      ["h", "u", "l", "k"], 
                      ["i", "r", "o", "n", "m", "a", "n"], 
                      ["c", "a", "p", "t", "a", "i", "n", "a", "m", "e", "r", "i", "c", "a"], 
                      ["h", "a", "w", "k", "e", "y", "e"], 
                      ["t", "h", "o", "r"], 
                      ["b", "l", "a", "c", "k", "w", "i", "d", "o", "w"]];

      
      //generate hangman word (heroWord)
       var superHero = heroArray[Math.floor(Math.random() * heroArray.length)];
      
      // console.log(superHero)
      
      // turn hangman word into blanks and append to window
      for (var i = 0; i < superHero.length; i++) {
        superHero[i]= "_ ";


        var blankWord = $("<button>");
        blankWord.addClass("letter-button letter letter-button-color");
        blankWord.attr("data-letter", superHero[i]);
        $("#blankHeroWord").text(superHero[i]);
        $("#blankHeroWord").append(superHero[i]);
      };
    

      

      // create alphabet button and append to window
      for (var i = 0; i < wordBank.length; i++) {
        
        var letterBtn = $("<button>");
        
        letterBtn.addClass("letter-button letter letter-button-color");
        
        letterBtn.attr("data-letter", wordBank[i]);
        
        letterBtn.text(wordBank[i]);
        $("#display-alphabet").append(letterBtn);

      };

      // on click event that will start game
      // document.onclick fuction() {

      // };


      // if char code matches 
      
      
      
     		
      console.log(superHero);

      // if statement, if 

      
  	
      // checks to see if letter guessed is in the word
      var letterCheck = function() {

      };


      // if statement to reset game 
      // if (guessLeft = 0) {
      //   var 
      // }



// for creating the number of blanks
	// for (var i = 0; i < heroWord.length; i++){
	// 	heroArray[i] = "_ ";
	// };



});