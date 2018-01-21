import GameField from './GameField';
import gameState from './GameState';

const app = document.getElementById('app');

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const notification = document.createElement('div');
notification.className = 'notification';


const render = () => {
  wrapper.append(GameField('computer'));
  wrapper.append(GameField('user'));
};

const clear = () => {
  wrapper.innerHTML = '';
};

gameState.reRender = () => {
  clear();
  render();
  notification.innerText = gameState.shootingTurn;
};

const main = () => {
  gameState.startGame();
  notification.innerText = gameState.shootingTurn;
  app.append(notification);
  app.append(wrapper);
  render();
};

main();
