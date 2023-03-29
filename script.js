var num1 = Math.ceil(Math.random()*20);
var num2 = Math.ceil(Math.random()*20);
var num3 = Math.ceil(Math.random()*20);

document.getElementById("bach").innerHTML = num1;
document.getElementById("beethoven").innerHTML = num2;
document.getElementById("mozart").innerHTML = num3;

if ((num1 > num2)&&(num1 > num3)){
    document.getElementById("item1").innerHTML = "The composer with the most country votes is: Johann Sebastian Bach " + "(" + num1 + ")";
} else if ((num2 > num1)&&(num2 > num3)){
    document.getElementById("item1").innerHTML = "The composer with the most country votes is: Ludwig van Beethoven " + "(" + num2 + ")";
} else if ((num3 > num1)&&(num3 > num2)){
    document.getElementById("item1").innerHTML = "The composer with the most country votes is: Wolfgang Amadeus Mozart " + "(" + num3 + ")";
} else if ((num1 == num2)&&(num1 > num3)){
    document.getElementById("item1").innerHTML = "The composers with the most country votes are: Johann Sebastian Bach and Ludwig van Beethoven " + "(" + num1 + ") (Re-election must be done)";
} else if ((num1 == num3)&&(num1 > num2)){
    document.getElementById("item1").innerHTML = "The composers with the most country votes are: Johann Sebastian Bach and Wolfgang Amadeus Mozart " + "(" + num1 + ") (Re-election must be done)";
} else if ((num2 == num3)&&(num2 > num1)){
    document.getElementById("item1").innerHTML = "The composers with the most country votes are: Ludwig van Beethoven and Wolfgang Amadeus Mozart " + "(" + num2 + ") (Re-election must be done)";
} else if ((num1 == num2)&&(num1 == num3)){
    document.getElementById("item1").innerHTML = "The composers with the most country votes are: Johann Sebastian Bach, Ludwig van Beethoven, and Wolfgang Amadeus Mozart " + "(" + num1 + ") (Re-election must be done)";
}

var letter = String.fromCharCode(num1 + 65);
var num4 = num2*num3;
var hr = Math.floor(num4/60);
var min = Math.floor(num4-(hr*60));
var time = hr + "hr " + min + "min";

document.getElementById("item2").innerHTML = "The country with the most voters starts with the letter: " + letter;
document.getElementById("item3").innerHTML = "The longest time it took someone to vote (" + num4 + " min): " + time;