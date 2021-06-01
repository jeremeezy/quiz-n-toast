/* Burger */

function toggleMenu () {  
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', (e) => {    
    navbar.classList.toggle('show-nav');
  });    
}
toggleMenu();

/* Quiz */

class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }
  let questions = [
    new Question("Quelle est l'altitude du Mont Everest ?", ["8848m", "7965m", "10543m", "6798m"], "8848m"),
    new Question("Quelle équipe a gagner la coupe du monde 2002 ?", ["Corée du Sud","Allemagne", "Turquie", "Brésil"], "Brésil"),
    new Question("Qui a écrit La Divine Comedie", ["Victor Hugo","Dante Alighieri", "Johann Wolfgang van Goethe", "Homère"], "Dante Alighieri"),
    new Question("Qui a le plus de cheveux ?", ["Ced","Clem", "Teddy", "Armand"], "Armand"),
    new Question("Quelle est la marque de l'Iphone", ["Apple","Samsung", "Nokia", "Huawei"], "Apple"),
  ];
  
  console.log(questions);
  
  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
      }
      this.currentQuestionIndex++;
    }
    hasEnded() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  }
  
  
  const display = {
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },
    endQuiz: function() {
      endQuizHTML = `
        <h1>Quiz terminé !</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
      this.elementShown("quiz", endQuizHTML);
    },
    question: function() {
      this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
      let choices = quiz.getCurrentQuestion().choices;
  
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
    
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    },
  };
  
  
  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }

  let quiz = new Quiz(questions);
  quizApp();
  
  console.log(quiz);
  
  