$(function(){
	$('.start').on('click', quizStart);
	$('.started').hide();
	$('.end').hide();
	$('.footnote').hide();
	$('.reset').on('click', reset);
	$('.enter').on('click', checkInput);
	initAnswers();
	
	
});




var Quiz_Time = 3;

function getTimeString(){
	
	if(Quiz_Time <=0){
		return '0:00';
	} else{
		var minutes = Math.floor(Quiz_Time/60);
		var seconds = Quiz_Time%60;
		if (seconds < 10){
			seconds = '0' + seconds;
		}
		console.log(minutes + ':' + seconds)
		return minutes + ':' + seconds;
	}
		
}

function reduceTime(){
	Quiz_Time--;
	if(Quiz_Time === 0) {
		endQuiz();
	} else{
		$('.timer-remaining').text(getTimeString);
	}
}




//초기값
var Quiz_Answers = [
	'돈까스', '카레', '롤', 'abc', '키워', '사과'
];



function initAnswers(){
	answers = {};
	Quiz_Answers.forEach(function(item){
		var answer = item.trim().toLowerCase();
		answers[answer] = false;
		
	});

}
//.toLowerCase
initAnswers();

function quizStart(){
	$('.start').hide();
	$('.started').show();
	$('.total').text(Quiz_Answers.length);
	$('.timer-remaining').text(getTimeString());
	timeInterval = setInterval(reduceTime, 1000);
	
}

//정답
var score = 0;

function checkInput() {
  	console.log("ad")
    var input = $('#12').val();
    if (answers.hasOwnProperty(input) && !answers[input]) {
    // give credit
    answers[input] = true;
    score++;
    $('.current-score').text(score);
    $('.answers-score').prepend(createAnswerItem(input));
    $('.input-answer').val("");   
   console.log("aㅇd")
    // check if user beat the quiz
    if (score === Quiz_Answers.length) {
      endQuiz();
    }
  }
}

function createAnswerItem(answer) {
  return $('<li>', { text: answer });
}


function endQuiz(){
	clearTimeout(timeInterval);
    
    $('.timer').hide();
    $('.started').hide();
    $('.end').show();
    $('.final-score').text(score*30 + "%");
    $('.footnote').show();
	
}



function reset(){
	location.reload();
}
