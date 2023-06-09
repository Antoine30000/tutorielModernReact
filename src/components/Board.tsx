import { useDispatch, useSelector } from 'react-redux';
import { RootState, reset, switchPlayer, updateSquare } from '../stateManagement/SquareSlice';
import { Square } from './Square';

export const Board = () => {
  const squares = useSelector((state: RootState)=>state.squares);
  const currentPlayer = useSelector((state:RootState)=>state.currentPlayer)
  const dispatch = useDispatch();

  const handleClick = (index: number) => {
  if (winner || squares[index]) {
    return;
  }
  currentPlayer === 1 ?
   dispatch(updateSquare({index,value:"X"}))
   : dispatch(updateSquare({index,value:"O"}));
   dispatch(switchPlayer());
  }

  const handleReset = () =>{
    dispatch(reset());
  }

const renderSquare = (index: number) => {
  const disabled = winner || squares[index]
    return (
      <Square
        value={squares[index]}
        onClick={() => handleClick(index)}
        disabled={disabled}
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
      if (squares.every((square) => square !== null)){
        return "Tie";
      }
    }
    return null;
  }

  const winner = checkWin(squares);
  const isTie = winner === "Tie";
  let status;
  if (winner != "Tie" && winner){
    status = `Winner: ${winner}`;
  } else if (isTie){
    status = "It's a tie";
  } else {
    status = `Next player: ${currentPlayer}`;
  }
  

  return (
    <div>
      <div className="board">
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
      <div className="bottom">
        <div className='status'>{status}</div>
        {(winner || isTie) && (<button onClick={handleReset} className='reset-button'>Reset Board</button>)}
        </div>
      </div>
  );
}
