var rpj;

module("regexp.jsの正常テスト", {
  setup: function () {
    rpj = new Rpj();
  }
});

test("check numeric", function () {
  var rpj = new Rpj();
  ok(rpj.chkNumeric("1") === true, "1 is valid");
  ok(rpj.chkNumeric("2") === true, "2 is valid");
});
