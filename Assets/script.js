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
    question: "HTML is an acronym for which answer?",
    answers: ["HyperText Markup Language", "HypoText Markdown Language", "HydraText Markup Language", "HyperText Markdown Lanugage"],
    correctAnswer: "HyperText Markup Language",
}, {
question: "Arrays in JavaScript can be used to store _____?",
    answers: ["Numbers and strings", "Booleans", "Other arrays", "All of the above"],
    correctAnswer: "All of the above",
\},

];

var game = {
    questions:questions,
    currentQuestion:0, 
    counter:30, 
    correct:0,
    incorrect:0,
    unanswered:0,
    
    countdown: function(){
        game.counter --;
        $('#counter').html(game.counter); 
        if(game.counter<=0){
            console.log("TIME UP!")
            game.timeUp();
        }
    },