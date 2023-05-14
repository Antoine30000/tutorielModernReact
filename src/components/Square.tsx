interface SquareProps {
    value: string | null;
    onClick: () => void;
    disabled:string | null;
  }

export const Square=({value,onClick}:SquareProps)=> { 
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}


