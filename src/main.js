import GameField from './GameField';

const main = () => {
  const app = document.getElementById('app');
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';


  wrapper.append(GameField());
  wrapper.append(GameField());
  app.append(wrapper);

};

main();
