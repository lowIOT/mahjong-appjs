const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  players: {
    type: Array,
    required: true,
    default: [],
  },
  tiles: {
    type: Array,
    required: true,
    default: [],
  },
  currentTurn: {
    type: Number,
    required: true,
    default: 0,
  },
  // その他のフィールド
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
