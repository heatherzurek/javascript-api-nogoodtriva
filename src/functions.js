import $ from 'jquery';

export function spliceAnswers(string, array){
  let index = Math.floor(Math.random() * 3);
  array.splice(index, 0, string);
  return array;
}

export function checkAnswer(userAnswer, correctAnswer){
  return (userAnswer == correctAnswer);
}

export function displayAnswers(responseObj) {
  let incorrectAnswers = responseObj["results"][0]["incorrect_answers"];
  let correctAnswer = responseObj['results'][0]["correct_answer"];
  let answers = spliceAnswers(correctAnswer, incorrectAnswers);
  let counter = 1;
  answers.forEach(answer => {
    $('#answers').append('<li data-id="' + counter  + '" class="answerBox"><p>' + answer.replace(/&quot;/g,'"').replace(/&#039;/g, "'") + '</p></l1>');
    counter++;
  });
  return correctAnswer;
}

export function displayQuestion(responseObj){
  $('#host-question').text(responseObj["results"][0]["question"].replace(/&quot;/g,'"').replace(/&#039;/g, "'"));
}

export function clearScores(){
  sessionStorage.setItem('score', 0);
  displayPlayerScore();
}

export function displayPlayerScore(){
  $("#score").text(" " + sessionStorage['score']);
}

export function applyAnswer(isCorrect, eventObj) {
  isCorrect ? $(eventObj).addClass('correctAnswer').append("<span class=''>Correct</span>") : $(eventObj).addClass('wrongAnswer').append("<span class=''>Wrong</span>");
}

