/* eslint-disable no-undef */
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const enteredValue = prompt('Maximum life for you and the monster.', '100');
let chosenMaxLife = parseInt(enteredValue);
const HEAL_BONUS_LIFE = (chosenMaxLife * 25) / chosenMaxLife;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

// eslint-disable-next-line no-undef
adjustHealthBars(chosenMaxLife);

// eslint-disable-next-line no-restricted-globals
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function showMessage(message) {
  alert(message);
}

function checkWinner() {
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    // eslint-disable-next-line no-use-before-define
    healPlayer();
    removeBonusLife();
    showMessage('You would be dead but the bonus life saved you');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    showMessage('You win');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    showMessage('You lost');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    showMessage('draw');
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
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
    if (!hasBonusLife) {
      showMessage('you can not heal more than your max health');
    }
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
