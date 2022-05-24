
var randomNumber1 = Math.floor(Math.random()*6 +1); // rnadom number 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

//image1.setAttribute("src", randomImageSource);

// For Dice 2 img[1]
var randomNumber2 = Math.floor(Math.random()*6 +1);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// Winner
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}else{
  document.querySelector("h1").innerHTML = "🚩Draw🚩";
}
