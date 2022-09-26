module.exports = class CountService {
  getCount(input) {
    const strings = input.split(' ').map(str => str.toLowerCase());
    const counts = {};

    for (let str of strings) {
      if (counts[str]) counts[str] += 1;
      else counts[str] = 1;
    }

    let result = [];
    for (let str of Object.keys(counts)) {
      result.push(`${str}: ${counts[str]}`);
    }

    result = result.join('\n');
    return result;
  }
};
