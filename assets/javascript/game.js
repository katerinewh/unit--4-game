//game options//
var targetNumber = Math.floor(Math.random() * 120 + 1);
console.log(targetNumber)
$("#number_to_guess").text(targetNumber);
var wins = 0;
$("#wins").text(wins);
var losses = 0;
$("#losses").text(losses);



//give value to the crystals

var counter = 0;
var hashnu = Math.floor(Math.random() * 20) + 1;
var pastel = Math.floor(Math.random() * 20) + 1;
var quartz = Math.floor(Math.random() * 20) + 1;
var varied = Math.floor(Math.random() * 20) + 1;

$("#hashnu").attr("data-value", hashnu)
$("#pastel").attr("data-value", pastel)
$("#quartz").attr("data-value", quartz)
$("#varied").attr("data-value", varied)

function reset() {
    var targetNumber = Math.floor(Math.random() * 120 + 1);
    console.log(targetNumber)
    $("#number_to_guess").text(targetNumber);
    
}
// //  hardcoded HTML elements
// $(".center").on("click", function(event){

// })
$(".center").click(function (event) {
    var userclickvalue = $(this).data("value");
    counter = counter + userclickvalue;
    console.log(counter)
    // scoring
    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("You win!");
        // update wins
        wins++;
        $("#wins").text(wins);
        reset();

    }

    else if (counter >= targetNumber) {
        alert("You lose!!");
        // update losses
        losses++;
        $("#losses").text(losses);
        reset();
    }
});






