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

  const checkWin=(squares:Array<string | null>): string | null=> {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = checkWin(squares);
  let status;
  if (winner){
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${currentPlayer}`;
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
      {status}
    </div>
  );
}
