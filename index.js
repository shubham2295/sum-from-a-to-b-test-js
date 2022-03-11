const sum = function(fromN, toN) {

  if (toN === fromN) {
    return fromN;
  }

  return toN + sum(fromN, toN - 1);

};

module.exports = sum;