function Rpj() {
  return this;
};

Rpj.prototype = {
  rules: {
    numericRegex: '^\\d*$',
    alphaRegex: '^\\D*$',
    urlRegex: '^(https?:\/\/)'
  },
  // check that value is numeric and check the number is the same as parameter
  chkNumeric: function(value, length) {
    if (! this._chkString) {
      return false;
    };

    if (typeof length === 'undefined') {
      return this._match(this.rules.numericRegex, value);
    } else {
      return this._match(this.rules.numericRegex, value) && value.length === length;
    };
  },
  // check that value is alpha and check the number is the same as parameter
  chkAlpha: function(value, length) {
    if (! this._chkString) {
      return false;
    };

    if (typeof length === 'undefined') {
      return this._match(this.rules.alphaRegex, value);
    } else {
      return this._match(this.rules.alphaRegex, value) && value.length === length;
    };
  },
  // check that value is url
  chkUrl: function(value) {
    if (! this._chkString) {
      return false;
    };

    return this._match(this.rules.urlRegex, value);
  },
  _match: function(reg, value) {
    var re = new RegExp(reg);
    return value.match(re) !== null;
  },
  _chkString: function(value) {
    return typeof value === 'string';
  }
};
