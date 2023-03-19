'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const play0 = document.querySelector('.player--0');
const play1 = document.querySelector('.player--1');

const btnRoll = document.querySelector('.btn--roll');

const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');

let currentScore;
let activePlay;
let score = [0, 0];
let playing;

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  play0.classList.add('player--active');
  play1.classList.remove('player-active');
  play0.classList.remove('player--winner');
  play1.classList.remove('player--winner');
  currentScore = 0;
  activePlay = 0;
  playing = true;
  score = [0, 0];
};

init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlay}`).textContent = 0;
  activePlay = activePlay === 0 ? 1 : 0;
  play0.classList.toggle('player--active');
  play1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore = dice + currentScore;
      document.getElementById(`current--${activePlay}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlay] = score[activePlay] + currentScore;
    document.getElementById(`score--${activePlay}`).textContent =
      score[activePlay];
  }

  if (score[activePlay] >= 20) {
    playing = false;
    document
      .querySelector(`.player--${activePlay}`)
      .classList.add('player--winner');
    diceEl.classList.add('hidden');
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);

const jess = {
  fistName: 'Jess',
  lastName: 'David',
  familyMember: ['John", "Chris", "Holow'],
};
const newJess = Object.assign({}, jess);
newJess.lastName = 'chen';

console.log(jess, newJess);
newJess.familyMember.push('lala', 'aa');

console.log(jess, newJess);
