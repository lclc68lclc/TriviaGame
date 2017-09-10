var count = 30;
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

$(document).ready(function() {

    $("#start-game").on("click", function() {
        $(".button").hide();
        //$(".timer").show().html()

        function quizBuilder() {
            var output = [];
            for (var i = 0; i < quizQuestions.length; i++) {
                answers = [];

                for (var letter in question[i].answers) {
                    answers.push(
                        '<label>' +
                        '<input type="radio" name="question' + i + '" value="' + letter + '">' +
                        letter + ': ' +
                        questions[i].answers[letter] +
                        '</label>'
                    );
                    /*$("#quiz").show().html('<p>' + quizQuestions[i].question + "</p>" +
                        '<p><input type="radio" name="pickOne" value="' + quizQuestions[i].answers.a + '">' + quizQuestions[i].answers.a + '</p>' +
                        '<p><input type="radio" name="pickOne" value="' + quizQuestions[i].answers.b + '">' + quizQuestions[i].answers.b + '</p>' +
                        '<p><input type="radio" name="pickOne" value="' + quizQuestions[i].answers.c + '">' + quizQuestions[i].answers.c + '</p>' +
                        '<p><input type="radio" name="pickOne" value="' + quizQuestions[i].answers.d + '">' + quizQuestions[i].answers.d + '</p>');

                */
                }
            }
        }
        quizBuilder();
    });
});