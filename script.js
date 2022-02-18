$(function () {
    //시작화면
    $('.started').hide();
    $('.end').hide();

    //버튼 셋팅
    $('.start').on('click', quizStart);
    $('.enter').on('click', checkInput);
    $('.reset').on('click', reset);
});

//퀴즈 시작
function quizStart() {
    $('.start').hide();
    $('.started').show();
    timeInterval = setInterval(getTime, 1000);
}

var Quiz_Time = 60;

function getTime() {
    Quiz_Time = Quiz_Time - 1;
    if (Quiz_Time === 0) {
        endQuiz();
    } else {
        $('.timer-remaining').text(Quiz_Time + '초');
    }
}

var Quiz_Answers = {
    돈까스: false,
    카레: false,
    치킨: false,
    돈까스카레: false,
    치킨카레: false,
};

var score = 0;

function checkInput() {
    var input = $('.input-answer').val();
    if (Quiz_Answers.hasOwnProperty(input) && !Quiz_Answers[input]) {
        Quiz_Answers[input] = true;
        score = score + 1;
        $('.score').text(score * 20 + '점');
        $('.input-answer').val('');
        $('.answers-correct').prepend('<li>' + input + '</li>');
    }
}

function endQuiz() {
    $('.started').hide();
    $('.end').show();
    $('.final-score').text(score * 20 + '%');
}

function reset() {
    location.reload();
}
