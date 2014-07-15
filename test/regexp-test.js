var rpj;

module("test on regexp.js", {
  setup: function () {
    rpj = new Rpj();
  }
});

// numeric test
test("numeric on chkNumeric", function () {
  ok(rpj.chkNumeric("1234567890") === true, "1234567890 is valid");
});

test("numeric on chkAlpha", function () {
  ok(rpj.chkAlpha("1234567890") === false, "1234567890 is invalid");
});

test("numeric on chkAlphaExtra", function () {
  ok(rpj.chkAlphaExtra("1234567890") === false, "1234567890 is invalid");
});

test("numeric on chkUrl", function () {
  ok(rpj.chkUrl("1234567890") === false, "1234567890 is invalid");
});

test("numeric on chkUrl", function () {
  ok(rpj.chkUrl("1234567890") === false, "1234567890 is invalid");
});

test("numeric on chkNumeric with length", function () {
  ok(rpj.chkNumeric("1234567890", 10) === true, "1234567890 is valid");
});

test("numeric on chkNumeric with invalid length", function () {
  ok(rpj.chkNumeric("1234567890", 9) === false, "1234567890 is invalid");
});

// alpha test
test("alpha on chkAlpha", function () {
  ok(rpj.chkAlpha("ABCDE") === true, "ABCDE is invalid");
});

test("alpha on chkNumeric", function () {
  ok(rpj.chkNumeric("ABCDE") === false, "ABCDE is invalid");
});

test("alpha on chkUrl", function () {
  ok(rpj.chkUrl("ABCDE") === false, "ABCDE is invalid");
});

test("alpha on chkAlpha with length", function () {
  ok(rpj.chkAlpha("ABCDE", 5) === true, "ABCDE is invalid");
});

test("alpha on chkAlpha with invalid length", function () {
  ok(rpj.chkAlpha("ABCDE", 4) === false, "ABCDE is invalid");
});

// alphaextra test
test("alphaextra on chkAlphaExtra", function () {
  ok(rpj.chkAlphaExtra("ABCDE+_-") === true, "ABCDE+_- is invalid");
});

test("alphaextra on chkNumeric", function () {
  ok(rpj.chkNumeric("ABCDE+_-") === false, "ABCDE+_- is invalid");
});

test("alphaextra on chkUrl", function () {
  ok(rpj.chkUrl("ABCDE+_-") === false, "ABCDE+_- is invalid");
});

test("alphaextra on chkAlphaExtra with length", function () {
  ok(rpj.chkAlphaExtra("ABCDE+_-", 8) === true, "ABCDE+_- is valid");
});

test("alphaextra on chkAlphaExtra with invalid length", function () {
  ok(rpj.chkAlphaExtra("ABCDE+_-", 7) === false, "ABCDE+_- is invalid");
});

// httpurl test
test("httpurl on chkAlpha", function () {
  ok(rpj.chkAlpha("http://hoge.com") === false, "http://hoge.com is valid");
});

test("httpurl on chkNumeric", function () {
  ok(rpj.chkNumeric("http://hoge.com") === false, "http://hoge.com is invalid");
});

test("httpurl on chkUrl", function () {
  ok(rpj.chkUrl("http://hoge.com") === true, "http://hoge.com is valid");
});

// httpsurl test
test("httpsurl on chkAlpha", function () {
  ok(rpj.chkAlpha("https://hoge.com") === false, "https://hoge.com is valid");
});

test("httpsurl on chkNumeric", function () {
  ok(rpj.chkNumeric("https://hoge.com") === false, "https://hoge.com is invalid");
});

test("httpsurl on chkUrl", function () {
  ok(rpj.chkUrl("https://hoge.com") === true, "https://hoge.com is valid");
});

// int test
test("int on chkNumeric", function () {
  ok(rpj.chkNumeric(12345) === false, "12345 is invalid");
});

test("int on chkAlpha", function () {
  ok(rpj.chkAlpha(12345) === false, "12345 is invalid");
});

test("int on chkAlphaExtra", function () {
  ok(rpj.chkAlphaExtra(12345) === false, "12345 is invalid");
});

test("int on chkUrl", function () {
  ok(rpj.chkUrl(12345) === false, "12345 is invalid");
});

// array test
test("array on chkNumeric", function () {
  ok(rpj.chkNumeric([1,2,3,4,5]) === false, "[1,2,3,4,5] is invalid");
});

test("array on chkAlpha", function () {
  ok(rpj.chkAlpha([1,2,3,4,5]) === false, "[1,2,3,4,5] is invalid");
});

test("array on chkAlphaExtra", function () {
  ok(rpj.chkAlphaExtra([1,2,3,4,5]) === false, "[1,2,3,4,5] is invalid");
});

test("array on chkUrl", function () {
  ok(rpj.chkUrl([1,2,3,4,5]) === false, "[1,2,3,4,5] is invalid");
});

// JSON test
test("JSON on chkNumeric", function () {
  ok(rpj.chkNumeric({'hoge':'fuga'}) === false, "{'hoge':'fuga'} is invalid");
});

test("JSON on chkAlpha", function () {
  ok(rpj.chkAlpha({'hoge':'fuga'}) === false, "{'hoge':'fuga'} is invalid");
});

test("JSON on chkAlphaExtra", function () {
  ok(rpj.chkAlphaExtra({'hoge':'fuga'}) === false, "{'hoge':'fuga'} is invalid");
});

test("JSON on chkUrl", function () {
  ok(rpj.chkUrl({'hoge':'fuga'}) === false, "{'hoge':'fuga'} is invalid");
});

// undefined test
test("undefined on chkNumeric", function () {
  ok(rpj.chkNumeric(undefined) === false, "undefined is invalid");
});

test("undefined on chkAlpha", function () {
  ok(rpj.chkAlpha(undefined) === false, "undefined is invalid");
});

test("undefined on chkAlphaExtra", function () {
  ok(rpj.chkAlphaExtra(undefined) === false, "undefined is invalid");
});

test("undefined on chkUrl", function () {
  ok(rpj.chkUrl(undefined) === false, "undefined is invalid");
});

// null test
test("null on chkNumeric", function () {
  ok(rpj.chkNumeric(null) === false, "null is invalid");
});

test("null on chkAlpha", function () {
  ok(rpj.chkAlpha(null) === false, "null is invalid");
});

test("null on chkAlphaExtra", function () {
  ok(rpj.chkAlphaExtra(null) === false, "null is invalid");
});

test("null on chkUrl", function () {
  ok(rpj.chkUrl(null) === false, "null is invalid");
});
