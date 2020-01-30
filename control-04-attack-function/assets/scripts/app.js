/* eslint-disable no-undef */
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

// eslint-disable-next-line no-undef
adjustHealthBars(chosenMaxLife);

function showMessage(message) {
  alert(message);
}

function checkWinner() {
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    showMessage('You win');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    showMessage('You lost');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    showMessage('draw');
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

function healPlayer() {
  let healValue;

  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    showMessage('you can not heal more than your max health');
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
}

function attackHandler() {
  attackTheMonster('ATTACK');
  attackThePlayer();
  checkWinner();
}

function healPlayerHandler() {
  healPlayer();
  attackThePlayer();
  checkWinner();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
