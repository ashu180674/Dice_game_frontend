var randomnumber1 = Math.floor(Math.random()*6 +1);
var imagenumber1 = "images/dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imagenumber1);



var randomnumber2 = Math.floor(Math.random()*6 +1);
var imagenumber2 = "images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imagenumber2);

if (randomnumber1>randomnumber2){

  document.querySelector("h1").innerHTML = "player1 wins" ;

}

else if(randomnumber2>randomnumber1){

  document.querySelector("h1").innerHTML = "player2 wins" ;
}


