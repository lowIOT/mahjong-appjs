import React from 'react';
import Tile from './Tile';

const Board = ({ tiles }) => {
  return (
    <div className="board">
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile} />
      ))}
    </div>
  );
};

export default Board;
