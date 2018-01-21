import Cell from './Cell';
import ShipsSet from './ShipsSet';

const GameField = () => {
  const field = document.createElement('div');
  field.className = 'field';
  const shipSet = new ShipsSet();
  shipSet.generateSeveralShips(20);
  shipSet.shipsPlacement.forEach((row) => {
    row.forEach((cell) => {
      field.append(Cell(cell));
    })
  });

  return field;
};

export default GameField;
