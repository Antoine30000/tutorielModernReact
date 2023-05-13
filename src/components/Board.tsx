import Square from './Square';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateSquare } from '../stateManagement/SquareSlice';

export const Board = () => {
  const squares = useSelector((state: RootState)=>state.squares);
  const dispatch = useDispatch();

  const handleClick = (index: number) => {
   dispatch(updateSquare({index,value:"X"}))
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
