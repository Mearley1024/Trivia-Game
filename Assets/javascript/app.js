$('#start-game').on('click',function(){
    game.start();
})

$(document).on('click','#end',function(){
        game.done();
})

var questions = [{
    question: "What color are aircraft black boxes?",
    answer: ["black", "orange", "yellow"],
correctAnswer: "orange"
}, {
    question: "In which country was caesar salad created?",
    answer: ["United States", "Italy", "Mexico"],
correctAnswer: "Mexico"
}, { 
    question: "How long did the 100 year war last?",
    answer: [ "100 years", "116 years", "120 years"],
correctAnswer: "116 years"
}, { 
    question: "In which month does the German festival of Oktoberfest take place?",
    answer: ["November", "October", "September"],
correctAnswer: "September"
}, { 
    question: "In which US state was Tennessee Williams born?",
    answer: ["Mississippi", "Tennessee", "Alabama"],
correctAnswer: "Mississippi"
}, { 
    question: "The average human body contains how many pints of blood?",
    answer: ["fifteen", "twelve", "nine"],
correctAnswer: "nine"
}, { 
    question: "Which is the highest waterfall in the world?",
    answer: ["Angel Falls, Venezuela", "Iguazu Falls, Argentina", "Niagara Falls, USA"],
correctAnswer: "Angel Falls, Venezuela"
}];

var game = { 
    correct: 0,
    incorrect: 0,
    counter: 90,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("game over!");
            game.done();
        }
    },
start: function(){
    timer = setInterval(game.countdown,1000);
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">90</span> seconds</h2>')
    $('#start').remove();
    for(var i=0;i<questions.length;i++){
        $('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
        for(var j=0;j<questions[i].answer.length;j++) {
             $('#subwrapper').append("<input type='radio' name='questions-"+i+"' value='"+questions[i].answer[j]+"'>"+questions[i].answer[j])      }
        }     
     $('#subwrapper').append('<button id="end">)Finish</button>')
     },
done: function(){    
    $.each($('input[name="question-0]":checked'),function(){
        if($(this).val()==questions[0].correctAnswer){
            game.correct++;
        }  else {
            gmae.incorrect++;
        }
    });
    $.each($('input[name="question-1]":checked'),function(){
        if($(this).val()==questions[1].correctAnswer){
            game.correct++;
        }  else {
            gmae.incorrect++;
        }
    });
    $.each($('input[name="question-2]":checked'),function(){
        if($(this).val()==questions[2].correctAnswer){
            game.correct++;
        }  else {
            gmae.incorrect++;
        }
    });
    $.each($('input[name="question-3]":checked'),function(){
        if($(this).val()==questions[3].correctAnswer){
            game.correct++;
        }  else {
            gmae.incorrect++;
        }
    });
    $.each($('input[name="question-4]":checked'),function(){
        if($(this).val()==questions[4].correctAnswer){
            game.correct++;
        }  else {
            gmae.incorrect++;
        }
    });
    $.each($('input[name="question-5]":checked'),function(){
        if($(this).val()==questions[5].correctAnswer){
            game.correct++;
        }  else {
            gmae.incorrect++;
        }
    });
    $.each($('input[name="question-6]":checked'),function(){
        if($(this).val()==questions[6].correctAnswer){
            game.correct++;
        }  else {
            gmae.incorrect++;
        }
    });

    this.result();
},

result: function(){
    clearInterval(timer);
    $('#subwrapper h2').remove();
   
   $('#subwrapper').html("<h2>Time's up!</h2>");
   $('#subwrapper').append("<h3>correct answer: "+this.correct+"</h3>");
    $('#subwrapper').append("<h3>incoorrect answer: "+this.incorrect+"</h3>");
    $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}   
    