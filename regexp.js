var rgj = {
  rules: {
    numericRegex: '^\\d*$',
    alphaRegex: '^\\D*$'
  },
  isNumeric: function(value) {
    var re = new RegExp(rgj.rules.numericRegex);
    return value.match(re) !== null;
  },
  isAlpha: function(value) {
    var re = new RegExp(rgj.rules.alphaRegex);
    return value.match(re) !== null;
  },
  isUrl: function(value) {
    return /^(http|https):\/\//.test(value);
  }
};



















