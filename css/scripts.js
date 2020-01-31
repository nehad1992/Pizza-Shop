// Business interface
// Constructor for players
function Player(roll, sum) {
    this.roll = roll;
    this.sum = sum;
}
//  Function when dice is rolled
Player.prototype.rollDice = function () {
    var randomNumb = Math.floor((Math.random() * 6) + 1);   // To generate random numbers
    this.roll = randomNumb;
    if (randomNumb > 1) {
        this.sum += randomNumb;
    } else {
        this.sum = 0;
        $("#rollme_1").prop("disabled", true);
        $("#result_1").text("0");
        $("#rollme_2").prop("disabled", true);
        $("#result_2").text("0");

    }
}
// User Inteface 
$(document).ready(function () {
    var roll = parseInt(0);
    var sum = parseInt(0);
    var player_1 = new Player(roll, sum);
    //  Player 1 rolls the dice
    $("#rollme_1").click(function () {
        player_1.rollDice();
        $("#rollValue_1").text(player_1.roll);
        $(".rollSum_1").text(player_1.sum);
    });
    $("#hold_1").click(function () {
        $("#rollme_1").prop("disabled", true);
        $("#result_1").text(player_1.sum);
    });
    // Player2 rolls the dice
    var player_2 = new Player(roll, sum);
    $("#rollme_2").click(function () {
        player_2.rollDice();
        $("#rollValue_2").text(player_2.roll);
        $(".rollSum_2").text(player_2.sum);
        if (player_2.sum === 0) {
            finalResult(player_1.sum, player_2.sum);
        }
    });
    $("#hold_2").click(function () {
        $("#rollme_2").prop("disabled", true);
        $("#result_2").text(player_2.sum);
        finalResult(player_1.sum, player_2.sum);
    });
    // To decide the final winner
    function finalResult(sum1, sum2) {
        if (sum1 > sum2) {
            $("#winner").text("Player-1");
            $("#finalWinner").show();
        } else if (sum2 > sum1) {
            $("#winner").text("Player-2");
            $("#finalWinner").show();
        }
    }
});





