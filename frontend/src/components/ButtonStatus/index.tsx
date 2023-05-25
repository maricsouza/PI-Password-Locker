import React from 'react';

type ButtonType = 'fraco' | 'medio' | 'forte';

interface ButtonProps {
  strength: number;
}

export function ButtonStatus(props: ButtonProps) {
  const getButtonType = (): ButtonType => {
    if (props.strength <= 3) {
      return 'fraco';
    } else if (props.strength <= 6) {
      return 'medio';
    } else {
      return 'forte';
    }
  };

  return (
    <div>
      {getButtonType() === 'fraco' && <button style={{ backgroundColor: 'lightgray' }}>Fraco</button>}
      {getButtonType() === 'medio' && <button style={{ backgroundColor: 'gray' }}>Médio</button>}
      {getButtonType() === 'forte' && <button style={{ backgroundColor: 'darkgray' }}>Forte</button>}
    </div>
  );
};

export default ButtonStatus;
