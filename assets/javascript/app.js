// Allows only one box to be checked at a time
$("input:checkbox").on('click', function() {
    
    var $box = $(this);
    if ($box.is(":checked")) {

      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });

// Timer
var number = 10;
var intervalID;

function run() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
}

function decrement() {

    number--;

    $("#timer").html("<h3>Time Remaining: " + number + "</h3>");

    if (number === 0) {
        stop();
    }
}

function stop() {
    clearInterval(intervalID);
    results();
}

run()






// Reading the answers

// $('input[class="correct1"]').click(function(){
//     if($(this).prop("checked") == true){
//         console.log("Correct");
//     }
//     else {
//         console.log("incorrect");
//     }
// });
var correct = 0;
var incorrect = 0;


    $('input[class="correct1"]').click(function(){
        if($(this).is(":checked")){
            correct++;
        }
        else {
            incorrect++;
        }
    });

    $('input[class="correct2"]').click(function(){
        if($(this).is(":checked")){
            correct++;
        }
        else {
            incorrect++;
        }
    });


function results() {
        $("#correctanswers").html("<h2> Correct: " + correct);
        $("#incorrectanswers").html("<h2> Incorrect: " + incorrect);
    }

$("#submitbutton").click(function() {
    stop();
})














