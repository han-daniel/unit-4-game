$(document).ready(function() 
    {
    
var score = 0;
var wins = 0;
var losses = 0;
var computerNumber = Math.floor(Math.random() * (99-29)) + 29;
var genNum = function(min,max,cnt) {
var arrangement = [];
    for(var i = min,k=0; 
        i <= max;
        k++,i++)
    arrangement[k] = i
    arrangement.sort(function() {
    return Math.floor((Math.random() * 3 ) - 1)  
    });
    return arrangement.splice(0,cnt)
};
    
var reset = function () {
    computerNumber = Math.floor(Math.random() * (99-39)) + 39;
    console.log("The computer number is " + computerNumber);
    // When the user goes to console, the computer number can be seen again.
    $("#numberjs").text(computerNumber);
    score = 0
    $("#totalScore").html(score);
    var randomNumber = genNum(1,11,4);
    var redNumber = randomNumber[0];
    var blueNumber = randomNumber[1];
    var orangeNumber = randomNumber[2];
    var tealNumber = randomNumber [3];
    console.log(randomNumber);
    // When the use goes to console, the value of each crystal button is revealed respectively.
    $(".btn1").val(redNumber);
    $(".btn2").val(blueNumber);
    $(".btn3").val(orangeNumber);
    $(".btn4").val(tealNumber);
};
    
reset();

    // what happens when user wins
var winning = function() {
    wins++;
    $("#wins").html("Wins: " + wins);
    reset();
    alert("You win");
};

    // what happens when user loses
var losing = function() {
    losses++;
    $("#losses").html("Losses: " + losses);
    reset();
    alert("You lose");
};

$('.crystal-btn').on("click", function(){
    var crystal = parseInt($(this).val());
    score += crystal;
    console.log(score);
    $("#totalScore").html(score);
    if (score == computerNumber) {
        winning();
        }
    else if (score > computerNumber) {
        losing();
        };
    });
})