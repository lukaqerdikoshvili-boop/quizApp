'use strict';

const historyBtn = document.querySelector('.historyBtn');
const geografics = document.querySelector('.geograficsBtn');
const english = document.querySelector('.englishBtn');
const physics = document.querySelector('.physicsBtn');
const math = document.querySelector('.mathBtn');
const chemistri = document.querySelector('.chemistriBtn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const selectTest = document.querySelector('.selector');
const startTest = document.querySelector('.modalStart');

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

const tests = {
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

startTest.addEventListener('click', function () {
  const difficulty = selectTest.value;
  const subject = localStorage.getItem('subject');

  const testType = subject + difficulty;

  localStorage.setItem('testType', testType);

  window.location.assign('quiz.html');
});

closeModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

geografics.addEventListener('click', function () {
  localStorage.setItem('subject', 'geografic');

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
historyBtn.addEventListener('click', function () {
  localStorage.setItem('subject', 'history');

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

english.addEventListener('click', function () {
  localStorage.setItem('subject', 'english');

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

physics.addEventListener('click', function () {
  localStorage.setItem('subject', 'Physic');

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
math.addEventListener('click', function () {
  localStorage.setItem('subject', 'math');

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
chemistri.addEventListener('click', function () {
  localStorage.setItem('subject', 'chemistry');

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
