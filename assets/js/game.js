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
    function quizBuilder() {
        var output = [];
        for (var i = 0; i < quizQuestions.length; i++) {
            $("#quiz").html('<p><input type="radio" id="questionRadio" value="' + quizQuestions[i].answers[0] + '"">  ' + quizQuestions[i].answers[0] + '</p>');
        }
    }
    quizBuilder();
});