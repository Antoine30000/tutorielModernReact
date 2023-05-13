interface SquareProps {
    value: string | null;
    onClick: () => void;
  }

export const Square=({value,onClick}:SquareProps)=> {
    const disabled = !!value;
  return (
    <button className="square" onClick={onClick} disabled={disabled}>
      {value}
    </button>
  );
}

export default Square;
