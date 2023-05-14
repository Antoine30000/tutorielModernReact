import { useDispatch, useSelector } from 'react-redux';
import { RootState, switchPlayer, updateSquare } from '../stateManagement/SquareSlice';
import { Square } from './Square';

export const Board = () => {
  const squares = useSelector((state: RootState)=>state.squares);
  const currentPlayer = useSelector((state:RootState)=>state.currentPlayer)
  const dispatch = useDispatch();

  const handleClick = (index: number) => {
  currentPlayer === 1 ?
   dispatch(updateSquare({index,value:"X"}))
   : dispatch(updateSquare({index,value:"O"}));
   dispatch(switchPlayer());
  }

const renderSquare = (index: number) => {
    return (
      <Square
        value={squares[index]}
        onClick={() => handleClick(index)}
      />
    );
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
