module.exports = class CharacterService {
  getRepeatingCharacters(character) {
    let finalResult = '';
    let idx = 0;

    while (idx < character.length) {
      const char = character[idx];
      let currentResult = '';
      let count;
      if (+character[idx + 2] || +character[idx + 2] === 0) {
        count = +character[idx + 1] * 10 + +character[idx + 2];
        idx += 1;
      } else {
        count = +character[idx + 1];
      }

      while (count--) {
        currentResult += char;
      }

      finalResult += currentResult;
      idx += 2;
    }
    return finalResult;
  }
};
