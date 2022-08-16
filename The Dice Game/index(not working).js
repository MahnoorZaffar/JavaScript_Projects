
//------------------player one dice commands-----------------------------------//
let randomNum1 =Math.floor (Math.random()*6)+1;
let randomDiceImg ="dice" + randomNum1 + ".png"; 
let randomImgSorce ="images/" + randomDiceImg;
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSorce);
//-------------------------player two dice c ommands--------------------------//
let randomNum2 =Math.floor (Math.random()*6)+1;
let randomDiceImg2 = "dice" + randomNum2 + ".png";
let randomImgSorce2 = "images/dice" + randomDiceImg2; 
let image2 =  documnet.querySelectorAll("img")[2].setAttribute("src", randomImgSorce2);;


//--------------------conditionals----------------------------------------------//
if(randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "player 1 Wins ⭐⭐⭐⭐⭐";
}else if (randomNum2 >  randomNum1) {
    documnet.querySelector("h1").innerHTML = "Player 2 Wins ⭐⭐⭐⭐⭐";
} else {
    documnet.querySelector("h1").innerHTML = "Draw 😵😵";
}

