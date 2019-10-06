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
var number = 30;
var intervalID;

function run() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
}

function decrement() {

    number--;

    $("#timer").html("<h3>Time Remaining: :" + number + "</h3>");

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



    $('input[class="correct1"]' ,).click(function(){
        if($(this).is(":checked")){
            correct++;
        }
        
    });

    $('input[class="correct2"]').click(function(){
        if($(this).is(":checked")){
            correct++;
        }
        
    });

    $('input[class="correct3"]').click(function(){
        if($(this).is(":checked")){
            correct++;
        }
        
    });

    $('input[class="correct4"]').click(function(){
        if($(this).is(":checked")){
            correct++;
        }
        
    });




    $('input[class="incorrect1a"]' ,).click(function(){
        if($(this).is(":checked")){
            incorrect++;
        }
        
    });

    $('input[class="incorrect1b"]').click(function(){
        if($(this).is(":checked")){
            incorrect++;
        }
        
    });

    $('input[class="incorrect2a"]').click(function(){
        if($(this).is(":checked")){
            incorrect++;
        }
        
    });

    $('input[class="incorrect2c"]' ,).click(function(){
        if($(this).is(":checked")){
            incorrect++;
        }
        
    });

    $('input[class="incorrect3b"]').click(function(){
        if($(this).is(":checked")){
            incorrect++;
        }
        
    });

    $('input[class="incorrect3c"]').click(function(){
        if($(this).is(":checked")){
            incorrect++;
        }
        
    });

    $('input[class="incorrect4c"]').click(function(){
        if($(this).is(":checked")){
            incorrect++;
        }
        
    });

    $('input[class="incorrect4a"]').click(function(){
        if($(this).is(":checked")){
            incorrect++;
        }
        
    });




// Function that displays the results when timer is up or submit button is picked

    function results() {
        $("#correctanswers").html("<h2> Correct: " + correct);
        $("#incorrectanswers").html("<h2> Incorrect: " + incorrect);
        $("#correctanswer1").html("<h3> Correct answer: 200");
        $("#correctanswer2").html("<h3> Correct answer: 142.2");
        $("#correctanswer3").html("<h3> Correct answer: Barbeque");
        $("#correctanswer4").html("<h3> Correct answer: Quinton Lucas");
    }

$("#submitbutton").click(function() {
    stop();
})














