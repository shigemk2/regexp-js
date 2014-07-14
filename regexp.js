var rgj = {
  numeric: function(value, num) {
    var re = typeof num === 'undefined' ? new RegExp("^\\d*$") : new RegExp("^\\d{"+num+"}$");
    return value.match(re) !== null;
  },
  word: function(value, num) {
    var re = typeof num === 'undefined' ? new RegExp("^.*$") : new RegExp("^.{"+num+"}$");
    return value.match(re) !== null;
  },
  url: function(value, num) {
    return /^(http|https):\/\//.test(value);
  }
};



















