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

var alpha = "abc";
console.log('---------alpha--------');
console.log(Rpj.chkAlpha(alpha)); // true
console.log(Rpj.chkNumeric(alpha)); // false

var numeric = "0123456789";
console.log('---------numeric--------');
console.log(Rpj.chkNumeric(numeric)); // true
console.log(Rpj.chkAlpha(numeric)); // false

var numeric = "0123456789";
console.log('---------numericwithnum--------');
console.log(Rpj.chkNumeric(numeric, 10)); // true
console.log(Rpj.chkNumeric(numeric, 9)); // false

var http = "http://hogehoge.com";
console.log('---------http--------');
console.log(Rpj.chkUrl(http)); // true
console.log(Rpj.chkAlpha(http)); // true

var https = "https://hogehoge.com";
console.log('---------https--------');
console.log(Rpj.chkUrl(https)); // true
console.log(Rpj.chkAlpha(https)); // true
```
