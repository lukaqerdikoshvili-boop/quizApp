'use strict';

const question = document.querySelector('.question');
const nextBtn = document.querySelector('.nextBtn');
const start = document.querySelector('.startBtn');
const answer = document.querySelectorAll('.answer');
const container = document.querySelector('.container');
const correct = document.querySelector('.correctAnswer');
const scores = document.querySelector('.score');
const questionCount = document.querySelector('.questionCounter');
const real = document.querySelector('.realAnswer');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const reset = document.querySelector('.resetBtn');
// questions and answers importing
// import { test } from './questions.js';

import {
  historyEasy,
  historyMedium,
  historyHard,
  geograficEasy,
  geograficMedium,
  geograficHard,
  mathEasy,
  mathMedium,
  mathHard,
  chemistryEasy,
  chemistryMedium,
  chemistryHard,
  PhysicEasy,
  PhysicMedium,
  PhysicHard,
  englishEasy,
  englishMedium,
  englishHard,
} from './questions.js';

const test = {
  historyEasy,
  historyMedium,
  historyHard,

  geograficEasy,
  geograficMedium,
  geograficHard,

  mathEasy,
  mathMedium,
  mathHard,

  chemistryEasy,
  chemistryMedium,
  chemistryHard,

  PhysicEasy,
  PhysicMedium,
  PhysicHard,

  englishEasy,
  englishMedium,
  englishHard,
};

// correct answers score
let score = 0;
let curentQuestion = 0;
let questionsCount = 0;
let gameStart = false;

// get questions
// import { geograficTest, historyTest } from './questions.js';

const testType = localStorage.getItem('testType');
const quiz = test[testType];
// begining of the test

if (!quiz) {
  alert('Test not selected!');
}

start.addEventListener('click', function () {
  if (!quiz) return;
  // if (!gameStart) return;
  gameStart = true;

  score = 0;
  curentQuestion = 0;
  questionsCount = 1;

  scores.textContent = `score ${score}`;
  questionCount.textContent = `1 / ${quiz.length}`;

  // start.classList.add('hidden');

  correct.textContent = '';

  question.textContent = quiz[curentQuestion].question;

  answer.forEach((an, index) => {
    an.textContent = quiz[curentQuestion].answers[index];
  });
});

function endQuiz() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  let grade = '';

  if (score.value >= 17) {
    grade = 'A';
  } else if (score >= 15) {
    grade = 'B';
  } else if (score >= 12) {
    grade = 'C';
  } else if (score >= 10) {
    grade = 'D';
  } else if (score >= 8) {
    grade = 'E';
  } else {
    grade = 'F';
  }

  document.querySelector('.endText').textContent =
    `your score: ${score} / ${quiz.length} | Grade: ${grade}`;
}
// next question
nextBtn.addEventListener('click', function () {
  if (!gameStart) return;
  if (curentQuestion >= quiz.length - 1) {
    endQuiz();
  }

  if (curentQuestion >= quiz.length - 1) return;
  questionsCount++;
  curentQuestion++;
  questionCount.textContent = `${questionsCount} / ${quiz.length}`;
  question.textContent = quiz[curentQuestion].question;

  correct.textContent = '';
  answer.forEach((an, index) => {
    an.textContent = quiz[curentQuestion].answers[index];
  });
  // console.log(score);
});

// correct answer
answer.forEach(btn => {
  btn.addEventListener('click', function () {
    if (correct.textContent !== '') return;
    if (!gameStart) return;
    if (btn.textContent === quiz[curentQuestion].correct) {
      correct.textContent = 'correct✔️';
      score++;
      scores.textContent = `score ${score}`;
    } else {
      correct.innerHTML = `Correct Answer <strong><u>${quiz[curentQuestion].correct}</u></strong>`;
    }
    if (curentQuestion === quiz.length - 1) {
      setTimeout(endQuiz, 800);
    }
  });
});

// const quizEnd = function () {};

// console.log(quiz);
// console.log(testType);

reset.addEventListener('click', function () {
  score = 0;

  questionsCount = 0;
  curentQuestion = 0;

  modal.classList.add('hidden');
  overlay.classList.add('hidden');

  scores.textContent = 'score 0';
  questionCount.textContent = `1 / ${quiz.length}`;

  answer.forEach(btn => {
    btn.textContent = 'Click Start';
  });
  correct.textContent = '';
});
