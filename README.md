regexp-js
=========

## Easier JavaScript Regular Expressions

regexp.js is a JavaScript library that helps to use Regular Expression more easily.

## Usage

```HTML
<script type="text/javascript" src="regexp.js"></script>
```

```javascript
var Rpj = new Rpj();

var testalpha = "abc";
console.log('---------alpha--------');
console.log(Rpj.chkAlpha(testalpha)); // true
console.log(Rpj.chkNumeric(testalpha)); // false

var testalphaextra = "abc-abc";
console.log('---------alphaextra--------');
console.log(Rpj.chkAlphaExtra(testalphaextra)); // true
console.log(Rpj.chkNumeric(testalphaextra)); // false

var testnumeric = "0123456789";
console.log('---------numeric--------');
console.log(Rpj.chkNumeric(testnumeric)); // true
console.log(Rpj.chkAlpha(testnumeric)); // false

var testnumericnum = "0123456789";
console.log('---------numericwithnum--------');
console.log(Rpj.chkNumeric(testnumericnum, 10)); // true
console.log(Rpj.chkNumeric(testnumericnum, 9)); // false

var testhttp = "http://hogehoge.com";
console.log('---------http--------');
console.log(Rpj.chkUrl(testhttp)); // true
console.log(Rpj.chkAlpha(testhttp)); // true

var testhttps = "https://hogehoge.com";
console.log('---------https--------');
console.log(Rpj.chkUrl(testhttps)); // true
console.log(Rpj.chkAlpha(testhttps)); // true
```
