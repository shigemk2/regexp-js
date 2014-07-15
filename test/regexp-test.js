var rpj;

module("test on regexp.js", {
  setup: function () {
    rpj = new Rpj();
  }
});

test("numeric on chkNumeric", function () {
  ok(rpj.chkNumeric("1234567890") === true, "1234567890 is valid");
});

test("numeric on chkAlpha", function () {
  ok(rpj.chkAlpha("1234567890") === false, "1234567890 is invalid");
});

test("alpha on chkAlpha", function () {
  ok(rpj.chkAlpha("ABCDE") === true, "ABCDE is valid");
});

test("alpha on chkNumeric", function () {
  ok(rpj.chkNumeric("ABCDE") === false, "ABCDE is invalid");
});
