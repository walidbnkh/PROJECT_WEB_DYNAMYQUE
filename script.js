document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quiz-form");
  const alert_congrats = document.getElementById("alert");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    var answers = []; // Array to store the selected answers


    for (var i = 1; i <= 3; i++) {
      var inputName = "answer-" + i;
      var inputElement = document.querySelector(
        'input[name="' + inputName + '"]:checked'
      );

      if (inputElement) {
        answers.push(inputElement.value);
      }
    }


    // Check the answers and highlight the wrong ones
    answers.forEach(function (answer, index) {
      var correctAnswer = document.querySelector(
        ".question-item:nth-child(" + (index + 1) + ') .answer[value="true"]'
      );
      var question = correctAnswer.closest(".question-item");

      if (answer !== "true") {
        question.classList.remove("correct-answer");
        question.classList.add("wrong-answer");
      } else {
        question.classList.remove("wrong-answer");
        question.classList.add("correct-answer");
      }
    });



    // You can perform further actions or validation here
    // For example, check if all questions have been answered, and show the alert if needed


   // ------------------------
function check_answers(answers){
    let x = true ;
    answers.forEach((el)=>{
      if(el === 'false'){x = false}
    })
    return x 
}


//-----------------------------------


    if (answers.length === document.querySelectorAll(".question-item").length) {
      if(check_answers(answers)) {
        alert_congrats.classList.remove("hide_alert_congrats");
      }else{
        alert_congrats.classList.add("hide_alert_congrats");

      }
    }
  });
});
