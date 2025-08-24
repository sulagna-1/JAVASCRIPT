
let gameNum = 2+Math.floor(Math.random()*10);
console.log("gameNum = ", gameNum);
let userNum = prompt("Enter a number = ");
console.log("userNum = ", userNum);
if(gameNum==userNum){
    console.log("You won");
}
else{
    console.log("You lost");
    userNum=prompt("Try again = ");

}