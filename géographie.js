/* Burger */

function toggleMenu () {  
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', (e) => {    
    navbar.classList.toggle('show-nav');
  });    
}
toggleMenu();

/* quiz */
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
    new Question("Quelle est la capitale de la Mongolie ?", ["Abidjan", "Oulan-Bator", "Palikir", "Madrid"], "Oulan-Bator"),
    new Question("Quelle est la capitale du Zimbabwe ?", ["Harare","Abuja", "Téhéran", "Lisbonne"], "Harare"),
    new Question("Palikir est la capitale de quel pays ?", ["France", "Micronesie", "Azerbaïdjan", "Australie"], "Micronesie"),
    new Question("Quelle est la capitale de L'Algerie ?", ["Tlemcen","Gdyel", "Oran", "Alger"], "Alger"),
    new Question("Quelle est la capitale de la Cote d'Ivoire ?", ["Yamoussoukro","Abidjan", "Bissau", "Malabo"], "Yamoussoukro"),
    new Question("Quel est ce pays <img src='img/French-flag.png' alt='' >",["Espagne","Portugal", "France", "Italie"], "France" ),
    new Question("Quelle est la capitale de la Suisse ?",["Genève","Bern","Sion","Bruxelles"],"Bern"),
    new Question("De quel pays Ankara est-elle la capitale ?",["Turquie","Liban","Oman","Macédoine"],"Turquie"),
    new Question("Quelle est la capitale du Brésil ?",["Rio de Janeiro","Natal","Brasilia","Manaus"],"Brasilia"),
    new Question("Combien y a t il d'ocean dans le  monde ?",["3","5","7","9"],"5"),
    new Question("Combien de pays sont reconnus par l'ONU ?",["197","198","195","203"],"195"),
    new Question("Quel est le plus grand désert du monde ?",["l'Antarctique","Sahara","Désert de Gobi","la Lozère"],"l'Antarctique"),
    new Question("Quel département porte le numéro 34 ?",["Gard","Haute-Garonne","Hérault","Gironde"],"Hérault"),
    new Question("Combien de frontieres terrestre la France a t elle ?",["7","11","5","15"],"11"),
    /*new Question("Quelle est la capitale des Comores ?",["Moroni","Monrovia","Montevideo","Montargis"],"Moroni"),
    new Question("Quelle est la capitale de la Suisse ?",["Geneve","Bern","Sion","Bruxelles"],"Bern"),
    new Question("Quelle est la capitale de la Suisse ?",["Geneve","Bern","Sion","Bruxelles"],"Bern"),
    new Question("Quelle est la capitale de la Suisse ?",["Geneve","Bern","Sion","Bruxelles"],"Bern"),
    new Question("Quelle est la capitale de la Suisse ?",["Geneve","Bern","Sion","Bruxelles"],"Bern"),
    new Question("Quelle est la capitale de la Suisse ?",["Geneve","Bern","Sion","Bruxelles"],"Bern"),
    new Question("Quelle est la capitale de la Suisse ?",["Geneve","Bern","Sion","Bruxelles"],"Bern"),*/



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
  
  