(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// bar.js
function bar() {
  return 'bar!';
}
 
module.exports = bar;
 
},{}],2:[function(require,module,exports){
// foo.js
function foo() {
  return 'foo!';
}
 
module.exports = foo;
 
},{}],3:[function(require,module,exports){
// main.js
var foo = require('./foo');
var bar = require('./bar');
var el = document.getElementById('box');
el.textContent = foo() + ' ' + bar();
 
},{"./bar":1,"./foo":2}]},{},[3]);