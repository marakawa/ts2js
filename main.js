!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(self,function(){return function(){var e={955:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var o=function(e){let t=e.replace(/(export |import )?interface \w+ {[\s\S]+?}/g,"").replace(/(export |import )?type .+/g,"").replace(/<[\w]+>\(/g,"(").replace(/ as [^;]+/g,"").replace(/\)!/g,")").replace(/\??: (number|string|boolean|[A-Z][\w]*)/g,"");return t}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}return r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("955")}()});