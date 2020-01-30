/* eslint-disable no-undef */
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

const chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

// eslint-disable-next-line no-undef
adjustHealthBars(chosenMaxLife);

function showWinnerMessage(message) {
  alert(message);
}

function checkWinner() {
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    showWinnerMessage('You win');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    showWinnerMessage('You lost');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    showWinnerMessage('draw');
  }
}

function attackThePlayer() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE); // the damage dealt to the player
  currentPlayerHealth -= playerDamage;
}

function attackTheMonster(attackMode) {
  const monsterDamage =
    attackMode === 'STRONG_ATTACK'
      ? dealMonsterDamage(STRONG_ATTACK_VALUE)
      : dealMonsterDamage(ATTACK_VALUE); // the damage dealt to the monster
  currentMonsterHealth -= monsterDamage;
}

function strongAttackHandler() {
  attackTheMonster('STRONG_ATTACK');
  attackThePlayer();
  checkWinner();
}

function attackHandler() {
  attackTheMonster('ATTACK');
  attackThePlayer();
  checkWinner();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
