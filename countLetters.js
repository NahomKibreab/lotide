const countLetters = function (sentence) {
  let result = {};
  let letters = sentence.replace(/\s/g, "");
  for (let letter of letters) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;
