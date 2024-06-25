const Game = require('../models/gameModel');

exports.startGame = async (req, res) => {
  try {
    const game = new Game();
    await game.save();
    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ message: 'Error starting game', error });
  }
};
