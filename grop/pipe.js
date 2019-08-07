const chalk = require('chalk');

module.exports = async function(chunk, encoding, ...args) {
  // get search value
  const search = args[0];

  // parse chunk to string
  const text = chunk.toString();

  // replace coincidences
  const regex = new RegExp(search, 'gmi');
  const result = text.replace(regex, chalk.red(search));

  return result;
};
