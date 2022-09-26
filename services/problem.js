const { problemType } = require('../constants');
const CharacterService = require('./character');
const CommisionService = require('./commision');
const CountService = require('./count');

module.exports = class ProblemService {
  constructor() {
    this.commsionService = new CommisionService();
    this.countService = new CountService();
    this.characterService = new CharacterService();
  }

  processInput(type, input) {
    type = type.toLowerCase();

    switch (type) {
      case problemType.COMMISION:
        return this.commsionService.getCommision(+input);
      case problemType.COUNTS:
        return this.countService.getCount(input);
      case problemType.CHARACTER:
        return this.characterService.getRepeatingCharacters(input);
      default:
        return;
    }
  }
};
