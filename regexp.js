function Rpj() {
  return this.element;
};

Rpj.prototype = {
  _re : '',
  rules: {
    startRegex: '^',
    numericRegex: '\\d*',
    alphaRegex: '\\D*',
    urlRegex: '(http|https)',
    endRegex: '$'
  },
  numeric: function() {
    this._re += Rpj.rules.numericRegex;
    return this;
  },
  alpha: function() {
    this._re += Rpj.rules.alphaRegex;
    return this;
  },
  url: function() {
    this._re += Rpj.rules.urlRegex;
    return this;
  },
  start: function() {
    this._re += Rpj.rules.startRegex;
    return this;
  },
  end: function() {
    this._re += Rpj.rules.endRegex;
    return this;
  },
  match: function(value) {
    var re = new RegExp(this._re);
    this._init();
    return value.match(re) !== null;
  },
  _init: function() {
    this._re = '';
  }
};
