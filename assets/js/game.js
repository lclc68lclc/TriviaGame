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
        correctAnswer: "2004"
    },
    {
        question: "What company has Facebook acquired?",
        answers: {
            a: "YouTube",
            b: "SnapChat",
            c: "Instagram",
            d: "WhatsApp"
        },
        correctAnswer: "WhatsApp"
    },
    {
        question: "What was the first video uploaded to YouTube?",
        answers: {
            a: "A trip to the Zoo",
            b: "A walk in the Park",
            c: "A seminar on space",
            d: "The 2001 MTV awards"
        },
        correctAnswer: "A trip to the Zoo"
    },
    {
        question: "Which online activity is ranked number one?",
        answers: {
            a: "searching",
            b: "social networking",
            c: "emailing",
            d: "buying and selling"
        },
        correctAnswer: "searching"
    },
    {
        question: "Which social media site is the best?",
        answers: {
            a: "Twitter",
            b: "Facebook",
            c: "Linkedin",
            d: "all of the above"
        },
        correctAnswer: "all of the above"
    },
];
var timeLeft = 30;
//countdown function
function timer() {
    $(".timer").html('<h2>' + timeLeft + ' Seconds remaining</h2>');

    function less() {
        if (timeLeft == 0) {
            $(".timer").html("<h2>Time's Up!</h2>");
            getAnswers();
            showAnswers();
        } else {
            timeLeft--;
            $(".timer").html('<h2>' + timeLeft + ' Seconds left</h2>');
        }
    }
    let tid = setInterval(less, 1000);
}
//grab the answers once time is up
function getAnswers() {
    var firstOne = document.querySelector('input[name=pickOne0]:checked').value;
    if (firstOne === quizQuestions[0].correctAnswer) {
        correct++;
    } else {
        incorrect++;
    }
    var secondOne = document.querySelector('input[name=pickOne1]:checked').value;
    if (secondOne === quizQuestions[1].correctAnswer) {
        correct++;
    } else {
        incorrect++;
    }
    var thirdOne = document.querySelector('input[name=pickOne2]:checked').value;
    if (thirdOne === quizQuestions[2].correctAnswer) {
        correct++;
    } else {
        incorrect++;
    }
    var fourthOne = document.querySelector('input[name=pickOne3]:checked').value;
    if (fourthOne === quizQuestions[3].correctAnswer) {
        correct++;
    } else {
        incorrect++;
    }
    var fifthOne = document.querySelector('input[name=pickOne4]:checked').value;
    if (fifthOne === quizQuestions[4].correctAnswer) {
        correct++;
    } else {
        incorrect++;
    }
}

function showAnswers() {
    $(".quiz").html("<h2>You got the following: </h2>" + "<p>Correct answers: " + correct + "</p>" + "<p>Incorrect answers: " + incorrect + "</p>");

}

//start the game
$(document).ready(function() {
    $("#start-game").on("click", function() {
        $(".button").hide();
        $(".quiz").show();
        timer();


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