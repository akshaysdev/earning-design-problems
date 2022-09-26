const fs = require('fs');
const filename = process.argv[2];

const ProblemService = require('./services/problem');
const problemService = new ProblemService();

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) throw err;
  let inputLines = data.toString().split('\n');

  let output = [];
  for (let i = 0; i < inputLines.length; i += 2) {
    const result = problemService.processInput(inputLines[i], inputLines[i + 1]);
    output.push(`${inputLines[i]}`, result);
  }

  console.log(output.join('\n'));
});
