import React from 'react';
import { useHistory } from 'react-router-dom';

const CharacterSelection = () => {
  const history = useHistory();

  const selectCharacter = (character) => {
    history.push('/game');
  };

  return (
    <div>
      <h1>キャラクターを選択</h1>
      <div>
        <div onClick={() => selectCharacter('character1')}>Character 1</div>
        <div onClick={() => selectCharacter('character2')}>Character 2</div>
        <div onClick={() => selectCharacter('character3')}>Character 3</div>
      </div>
    </div>
  );
};

export default CharacterSelection;
