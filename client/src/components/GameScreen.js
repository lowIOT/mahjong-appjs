import React, { useState, useEffect } from 'react';
import Board from './Board';
import Chat from './Chat';

const GameScreen = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    setTiles(initializeTiles());
  }, []);

  const initializeTiles = () => {
    return Array(14).fill('🀄');
  };

  return (
    <div>
      <Board tiles={tiles} />
      <Chat />
    </div>
  );
};

export default GameScreen;
