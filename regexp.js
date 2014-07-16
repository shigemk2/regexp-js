/*
 * @license
 * regexp.js
 * Copyright (c) 2014 shigemk2
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
function Rpj() {
  return this;
};

Rpj.prototype = {
  rules: {
    numericRegex: '^\\d*$',
    alphaRegex: '^[a-zA-Z]*$',
    alphaNumericRegex: '^[a-zA-Z0-9]*$',
    alphaExtraRegex: '^[a-zA-Z_\+\-]*$',
    alphaNumericExtraRegex: '^[a-zA-Z0-9\_\+\-]*$',
    urlRegex: '^(https?:\/\/)'
  },
  // check that value is numeric and check the number is the same as parameter
  chkNumeric: function(value, length) {
    if (! this._chkType(value)) {
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
    if (! this._chkType(value)) {
      return false;
    };

    if (typeof length === 'undefined') {
      return this._match(this.rules.alphaRegex, value);
    } else {
      return this._match(this.rules.alphaRegex, value) && value.length === length;
    };
  },
  // check that value is alpha with _-+ and check the number is the same as parameter
  chkAlphaExtra: function(value, length) {
    if (! this._chkType(value)) {
      return false;
    };

    if (typeof length === 'undefined') {
      return this._match(this.rules.alphaExtraRegex, value);
    } else {
      return this._match(this.rules.alphaExtraRegex, value) && value.length === length;
    };
  },
  // check that value is alphaNumeric and check the number is the same as parameter
  chkAlphaNumeric: function(value, length) {
    if (! this._chkType(value)) {
      return false;
    };

    if (typeof length === 'undefined') {
      return this._match(this.rules.alphaNumericRegex, value);
    } else {
      return this._match(this.rules.alphaNumericRegex, value) && value.length === length;
    };
  },
  // check that value is alphaNumericExtra and check the number is the same as parameter
  chkAlphaNumericExtra: function(value, length) {
    if (! this._chkType(value)) {
      return false;
    };

    if (typeof length === 'undefined') {
      return this._match(this.rules.alphaNumericExtraRegex, value);
    } else {
      return this._match(this.rules.alphaNumericExtraRegex, value) && value.length === length;
    };
  },
  // check that value is url
  chkUrl: function(value) {
    if (! this._chkType(value)) {
      return false;
    };

    return this._match(this.rules.urlRegex, value);
  },
  // match regexp
  _match: function(reg, value) {
    var re = new RegExp(reg);
    return value.match(re) !== null;
  },
  // check value's type
  _chkType: function(value) {
    return typeof value === 'string';
  }
};
