var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomdiceimage1 = "dice" + randomNumber1 + ".png";
var randomdiceimage2 = "dice" + randomNumber2 + ".png";

var randomimagesrc1 = "images/" + randomdiceimage1;
var randomimagesrc2 = "images/" + randomdiceimage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomimagesrc1);
image2.setAttribute("src", randomimagesrc2);

if( randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
    else if ( randomNumber1 == randomNumber2) {
        document.querySelector("h1").innerHTML = "It's a Draw";
    }
    else {
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    }

