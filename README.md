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
console.log(Rpj.start().alpha().end().match(alpha)); // true
console.log(Rpj.start().numeric().end().match(alpha)); // false

var numeric = "0123456789";
console.log(Rpj.start().numeric().end().match(numeric)); // true
console.log(Rpj.start().alpha().end().match(numeric)); // false

var http = "http://hogehoge.com";
console.log(Rpj.start().url().match(http)); // true
console.log(Rpj.start().alpha().match(http)); // true

var https = "https://hogehoge.com";
console.log(Rpj.start().url().match(https)); // true
console.log(Rpj.start().alpha().match(https)); // true
```
