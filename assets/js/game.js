//Holds the correct and incorrect answers
var correct = 0;
var incorrect = 0;
//Holds the unanswered questions
var unanswered = 0;
//holds the choice we make
var quizQuestions = [{
        question: "What year was Facebook founded?",
        answers: {
            a: "2002",
            b: "2004",
            c: "2005",
            d: "2010"
        },
        correctAnswer: "b"
    },
    {
        question: "What company has Facebook acquired?",
        answers: {
            a: "YouTube",
            b: "SnapChat",
            c: "Instagram",
            d: "WhatsApp"
        },
        correctAnswer: "d"
    },
    {
        question: "What was the first video uploaded to YouTube?",
        answers: {
            a: "A trip to the Zoo",
            b: "A walk in the Park",
            c: "A seminar on space",
            d: "The 2001 MTV awards"
        },
        correctAnswer: "a"
    },
    {
        question: "Which online activity is ranked number one?",
        answers: {
            a: "searching",
            b: "social networking",
            c: "emailing",
            d: "buying and selling"
        },
        correctAnswer: "a"
    },
    {
        question: "Which social media site is the best?",
        answers: {
            a: "Twitter",
            b: "Facebook",
            c: "Linkedin",
            d: "all of the above"
        },
        correctAnswer: "d"
    },
];
var timeLeft = 30;
//countdown function
function timer() {
    $(".timer").html('<h2>' + timeLeft + ' Seconds remaining</h2>');

    function less() {
        if (timeLeft == 0) {
            $(".timer").html("<h2>Time's Up!</h2>");
            //getAnswers();
        } else {
            timeLeft--;
            $(".timer").html('<h2>' + timeLeft + ' Seconds left</h2>');
        }
    }
    let tid = setInterval(less, 1000);
}
//grab the answers once time is up
function getAnswers() {
    var quizAnswers = document.querySelectorAll('quiz');

    for (var x = 0; x < quizQuestions.length; x++) {
        var choice = quizAnswers[x].querySelector('input[name=pickOne' + x + ']:checked').value;
        console.log(choice);
        if (choice === quizQuestions[x].correctAnswer) {
            console.log(quizQuestions[x].correctAnswer);
            correct++;
            console.log("Correct answers " + correct);
        } else {
            incorrect++;
        }
    }
}

function showAnswers() {

}

//start the game
$(document).ready(function() {
    $("#start-game").on("click", function() {
        $(".button").hide();
        $(".quiz").show();
        //timer();


        function quizBuilder() {
            var output = [];
            for (var i = 0; i < quizQuestions.length; i++) {

                var setupQuestion = ('<p>' + quizQuestions[i].question + "</p>" +
                    '<p><input type="radio" id="answerRadio" name="pickOne' + i + '" value="' + quizQuestions[i].answers.a + '">' + quizQuestions[i].answers.a + '</p>' +
                    '<p><input type="radio" id="answerRadio" name="pickOne' + i + '" value="' + quizQuestions[i].answers.b + '">' + quizQuestions[i].answers.b + '</p>' +
                    '<p><input type="radio" id="answerRadio" name="pickOne' + i + '" value="' + quizQuestions[i].answers.c + '">' + quizQuestions[i].answers.c + '</p>' +
                    '<p><input type="radio" id="answerRadio" name="pickOne' + i + '" value="' + quizQuestions[i].answers.d + '">' + quizQuestions[i].answers.d + '</p> <hr />');
                output.push(setupQuestion);
                $("#quiz").html(output);
            }
        }
        quizBuilder();

    });
});
//add all questions to a new array