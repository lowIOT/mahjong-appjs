import React from 'react';

const Tile = ({ tile }) => {
  const handleClick = () => {
    console.log('Tile clicked:', tile);
  };

  return (
    <div className="tile" onClick={handleClick}>
      {tile}
    </div>
  );
};

export default Tile;
