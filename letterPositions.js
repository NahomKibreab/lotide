const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  sentence.split("").forEach((letter, index) => {
    if (results[letter]) {
      results[letter].push(sentence.indexOf(letter, index));
    } else {
      results[letter] = [sentence.indexOf(letter)];
    }
  });
  return results;
};

module.exports = letterPositions;
