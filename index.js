//code for setting first random image...

var randomNumber1 = (Math.floor(Math.random()*6)+1) ;
var randomImage1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

//code for setting second random image...

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

//for displaying comment according to the game...

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else if(randomNumber1 === randomNumber2)
{
    document.querySelector("h1").innerHTML="Draw !";
}