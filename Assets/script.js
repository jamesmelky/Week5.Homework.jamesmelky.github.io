// remove the start button when clicked
$('#start').on('click', function(){
    $('#start').remove();
  game.loadQuestion();

})

// click event when you click the answer

$(document).on('click','.answer-button',function(e){
    game.clicked(e);
})

$(document).on('click','#reset',function(){
    game.reset();
})

// Variable for questions, an array of objects 

var questions = [{
    question: "Commonly used data types DO NOT include:",
    answers: ["Strings", "Booleans", "Alerts","Numbers"],
    correctAnswer: "Alerts",
}, {
    question: "HTML stands for which?",
    answers: ["HyperText Markup Language", "HypoText Markdown Language", "HydraText Markup Language", "HyperText Markdown Lanugage"],
    correctAnswer: "HyperText Markup Language",
}, {
question: "What is the state bird?",
    answers: ["Bald Eagle", "Blue Jay", "Cardinal", "Wild Turkey"],
    correctAnswer: "Cardinal",
\},

];

// remove the start button when clicked
$('#start').on('click', function(){
    $('#start').remove();
  game.loadQuestion();

})

// click event when you click the answer

$(document).on('click','.answer-button',function(e){
    game.clicked(e);
})

$(document).on('click','#reset',function(){
    game.reset();
})

// Variable for questions, an array of objects 

var questions = [{
    question: "Commonly used data types DO NOT include:",
    answers: ["Strings", "Booleans", "Alerts","Numbers"],
    correctAnswer: "Alerts",
    image: "assets/images/imagename"
}, {
    question: "North Carolina grows the most what in the nation?",
    answers: ["Tomatoes", "Sweet Potatoes", "Broccoli", "Soybeans"],
    correctAnswer: "Sweet Potatoes",
    image: "assets/images/imagename",
}, {
question: "What is the state bird?",
    answers: ["Bald Eagle", "Blue Jay", "Cardinal", "Wild Turkey"],
    correctAnswer: "Cardinal",
    image: "assets/images/imagename",
},

];


var game = {
    questions:questions,
    currentQuestion:0, 
    counter:30, 
    correct:0,
    incorrect:0,
    unanswered:0,
    
 