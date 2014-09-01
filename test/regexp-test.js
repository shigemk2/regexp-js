var rpj;

module("test on regexp.js", {
  setup: function () {
    rpj = new Rpj();
  }
});

// chkNumeric
test("numeric on chkNumeric", function () {
  ok(rpj.chkNumeric("1234567890") === true, "1234567890 is valid");
});

test("numeric on chkNumeric with length", function () {
  ok(rpj.chkNumeric("1234567890", 9) === true, "1234567890 is valid");
});

test("numeric on chkNumeric with invalid length", function () {
  ok(rpj.chkNumeric("1234567890", 9) === false, "1234567890 is invalid");
});

test("alpha on chkNumeric", function () {
  ok(rpj.chkNumeric("ABCDE") === false, "ABCDE is invalid");
});

test("alphaextra on chkNumeric", function () {
  ok(rpj.chkNumeric("ABCDE+_-") === false, "ABCDE+_- is invalid");
});

test("httpurl on chkNumeric", function () {
  ok(rpj.chkNumeric("http://hoge.com") === false, "http://hoge.com is invalid");
});

test("httpsurl on chkNumeric", function () {
  ok(rpj.chkNumeric("https://hoge.com") === false, "https://hoge.com is invalid");
});

test("int on chkNumeric", function () {
  ok(rpj.chkNumeric(12345) === false, "12345 is invalid");
});

test("array on chkNumeric", function () {
  ok(rpj.chkNumeric([1,2,3,4,5]) === false, "[1,2,3,4,5] is invalid");
});

test("JSON on chkNumeric", function () {
  ok(rpj.chkNumeric({'hoge':'fuga'}) === false, "{'hoge':'fuga'} is invalid");
});

test("undefined on chkNumeric", function () {
  ok(rpj.chkNumeric(undefined) === false, "undefined is invalid");
});

test("null on chkNumeric", function () {
  ok(rpj.chkNumeric(null) === false, "null is invalid");
});

// chkAlpha
test("numeric on chkAlpha", function () {
  ok(rpj.chkAlpha("1234567890") === false, "1234567890 is invalid");
});

test("alpha on chkAlpha", function () {
  ok(rpj.chkAlpha("ABCDE") === true, "ABCDE is invalid");
});

test("alpha on chkAlpha with length", function () {
  ok(rpj.chkAlpha("ABCDE", 5) === true, "ABCDE is invalid");
});

test("alpha on chkAlpha with invalid length", function () {
  ok(rpj.chkAlpha("ABCDE", 4) === false, "ABCDE is invalid");
});

test("httpurl on chkAlpha", function () {
  ok(rpj.chkAlpha("http://hoge.com") === false, "http://hoge.com is valid");
});

test("httpsurl on chkAlpha", function () {
  ok(rpj.chkAlpha("https://hoge.com") === false, "https://hoge.com is valid");
});

test("int on chkAlpha", function () {
  ok(rpj.chkAlpha(12345) === false, "12345 is invalid");
});

test("array on chkAlpha", function () {
  ok(rpj.chkAlpha([1,2,3,4,5]) === false, "[1,2,3,4,5] is invalid");
});

test("JSON on chkAlpha", function () {
  ok(rpj.chkAlpha({'hoge':'fuga'}) === false, "{'hoge':'fuga'} is invalid");
});

test("undefined on chkAlpha", function () {
  ok(rpj.chkAlpha(undefined) === false, "undefined is invalid");
});

test("null on chkAlpha", function () {
  ok(rpj.chkAlpha(null) === false, "null is invalid");
});

// chkAlphaExtra
test("numeric on chkAlphaExtra", function () {
  ok(rpj.chkAlphaExtra("1234567890") === false, "1234567890 is invalid");
});

test("alpha on chkAlphaExtra", function () {
  ok(rpj.chkAlphaExtra("ABCDE") === true, "ABCDE is valid");
});

test("alphaextra on chkAlphaExtra", function () {
  ok(rpj.chkAlphaExtra("ABCDE+_-") === true, "ABCDE+_- is invalid");
});

test("alphaextra on chkAlphaExtra with length", function () {
  ok(rpj.chkAlphaExtra("ABCDE+_-", 8) === true, "ABCDE+_- is valid");
});

test("alphaextra on chkAlphaExtra with invalid length", function () {
  ok(rpj.chkAlphaExtra("ABCDE+_-", 7) === false, "ABCDE+_- is invalid");
});

test("int on chkAlphaExtra", function () {
  ok(rpj.chkAlphaExtra(12345) === false, "12345 is invalid");
});

test("array on chkAlphaExtra", function () {
  ok(rpj.chkAlphaExtra([1,2,3,4,5]) === false, "[1,2,3,4,5] is invalid");
});

test("JSON on chkAlphaExtra", function () {
  ok(rpj.chkAlphaExtra({'hoge':'fuga'}) === false, "{'hoge':'fuga'} is invalid");
});

test("undefined on chkAlphaExtra", function () {
  ok(rpj.chkAlphaExtra(undefined) === false, "undefined is invalid");
});

test("null on chkAlphaExtra", function () {
  ok(rpj.chkAlphaExtra(null) === false, "null is invalid");
});

// chkUrl
test("numeric on chkUrl", function () {
  ok(rpj.chkUrl("1234567890") === false, "1234567890 is invalid");
});

test("numeric on chkUrl", function () {
  ok(rpj.chkUrl("1234567890") === false, "1234567890 is invalid");
});

test("alpha on chkUrl", function () {
  ok(rpj.chkUrl("ABCDE") === false, "ABCDE is invalid");
});

test("alphaextra on chkUrl", function () {
  ok(rpj.chkUrl("ABCDE+_-") === false, "ABCDE+_- is invalid");
});

test("httpurl on chkUrl", function () {
  ok(rpj.chkUrl("http://hoge.com") === true, "http://hoge.com is valid");
});

test("httpsurl on chkUrl", function () {
  ok(rpj.chkUrl("https://hoge.com") === true, "https://hoge.com is valid");
});

test("int on chkUrl", function () {
  ok(rpj.chkUrl(12345) === false, "12345 is invalid");
});

test("array on chkUrl", function () {
  ok(rpj.chkUrl([1,2,3,4,5]) === false, "[1,2,3,4,5] is invalid");
});

test("JSON on chkUrl", function () {
  ok(rpj.chkUrl({'hoge':'fuga'}) === false, "{'hoge':'fuga'} is invalid");
});

test("undefined on chkUrl", function () {
  ok(rpj.chkUrl(undefined) === false, "undefined is invalid");
});

test("null on chkUrl", function () {
  ok(rpj.chkUrl(null) === false, "null is invalid");
});

// chkAlphaNumeric
test("numeric on chkAlphaNumeric", function () {
  ok(rpj.chkAlphaNumeric("1234567890") === true, "1234567890 is valid");
});

test("numeric on chkAlphaNumeric", function () {
  ok(rpj.chkAlphaNumeric("1234567890") === true, "1234567890 is valid");
});

test("alpha on chkAlphaNumeric", function () {
  ok(rpj.chkAlphaNumeric("ABCDE") === true, "ABCDE is valid");
});

test("alphaextra on chkAlphaNumeric", function () {
  ok(rpj.chkAlphaNumeric("ABCDE+_-") === false, "ABCDE+_- is invalid");
});

test("alphanumeric on chkAlphaNumeric", function () {
  ok(rpj.chkAlphaNumeric("ABCDE123") === true, "ABCDE123 is valid");
});

test("alphanumeric on chkAlphaNumeric with valid length", function () {
  ok(rpj.chkAlphaNumeric("ABCDE123", 8) === true, "ABCDE123 is valid");
});

test("alphanumeric on chkAlphaNumeric with invalid length", function () {
  ok(rpj.chkAlphaNumeric("ABCDE123", 7) === false, "ABCDE123 is invalid");
});

test("httpurl on chkAlphaNumeric", function () {
  ok(rpj.chkAlphaNumeric("http://hoge.com") === false, "http://hoge.com is invalid");
});

test("httpsurl on chkAlphaNumeric", function () {
  ok(rpj.chkAlphaNumeric("https://hoge.com") === false, "https://hoge.com is invalid");
});

test("int on chkAlphaNumeric", function () {
  ok(rpj.chkAlphaNumeric(12345) === false, "12345 is invalid");
});

test("array on chkAlphaNumeric", function () {
  ok(rpj.chkAlphaNumeric([1,2,3,4,5]) === false, "[1,2,3,4,5] is invalid");
});

test("JSON on chkAlphaNumeric", function () {
  ok(rpj.chkAlphaNumeric({'hoge':'fuga'}) === false, "{'hoge':'fuga'} is invalid");
});

test("undefined on chkAlphaNumeric", function () {
  ok(rpj.chkAlphaNumeric(undefined) === false, "undefined is invalid");
});

test("null on chkAlphaNumeric", function () {
  ok(rpj.chkAlphaNumeric(null) === false, "null is invalid");
});

// chkAlphaNumericExtra
test("numeric on chkAlphaNumericExtra", function () {
  ok(rpj.chkAlphaNumericExtra("1234567890") === true, "1234567890 is valid");
});

test("numeric on chkAlphaNumericExtra", function () {
  ok(rpj.chkAlphaNumericExtra("1234567890") === true, "1234567890 is valid");
});

test("alpha on chkAlphaNumericExtra", function () {
  ok(rpj.chkAlphaNumericExtra("ABCDE") === true, "ABCDE is valid");
});

test("alphaextra on chkAlphaNumericExtra", function () {
  ok(rpj.chkAlphaNumericExtra("ABCDE+_-") === true, "ABCDE+_- is valid");
});

test("alphanumericextra on chkAlphaNumericExtra", function () {
  ok(rpj.chkAlphaNumericExtra("ABCDE0123+_-") === true, "ABCDE0123+_- is valid");
});

test("alphanumericextra on chkAlphaNumericExtra with valid length", function () {
  ok(rpj.chkAlphaNumericExtra("ABCDE0123+_-", 12) === true, "ABCDE0123+_- is valid");
});

test("alphanumericextra on chkAlphaNumericExtra with invalid length", function () {
  ok(rpj.chkAlphaNumericExtra("ABCDE0123+_-", 13) === false, "ABCDE0123+_- is invalid");
});

test("alphanumeric on chkAlphaNumericExtra", function () {
  ok(rpj.chkAlphaNumericExtra("ABCDE123") === true, "ABCDE123 is valid");
});

test("alphanumeric on chkAlphaNumericExtra with valid length", function () {
  ok(rpj.chkAlphaNumericExtra("ABCDE123", 8) === true, "ABCDE123 is valid");
});

test("alphanumeric on chkAlphaNumericExtra with invalid length", function () {
  ok(rpj.chkAlphaNumericExtra("ABCDE123", 7) === false, "ABCDE123 is invalid");
});

test("httpurl on chkAlphaNumericExtra", function () {
  ok(rpj.chkAlphaNumericExtra("http://hoge.com") === false, "http://hoge.com is invalid");
});

test("httpsurl on chkAlphaNumericExtra", function () {
  ok(rpj.chkAlphaNumericExtra("https://hoge.com") === false, "https://hoge.com is invalid");
});

test("int on chkAlphaNumericExtra", function () {
  ok(rpj.chkAlphaNumericExtra(12345) === false, "12345 is invalid");
});

test("array on chkAlphaNumericExtra", function () {
  ok(rpj.chkAlphaNumericExtra([1,2,3,4,5]) === false, "[1,2,3,4,5] is invalid");
});

test("JSON on chkAlphaNumericExtra", function () {
  ok(rpj.chkAlphaNumericExtra({'hoge':'fuga'}) === false, "{'hoge':'fuga'} is invalid");
});

test("undefined on chkAlphaNumericExtra", function () {
  ok(rpj.chkAlphaNumericExtra(undefined) === false, "undefined is invalid");
});

test("null on chkAlphaNumericExtra", function () {
  ok(rpj.chkAlphaNumericExtra(null) === false, "null is invalid");
});
