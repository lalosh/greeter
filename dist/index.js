!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("axios"),require("immer"),require("lodash")):"function"==typeof define&&define.amd?define("GreeterLibrary",["axios","immer","lodash"],r):"object"==typeof exports?exports.GreeterLibrary=r(require("axios"),require("immer"),require("lodash")):e.GreeterLibrary=r(e.axios,e.immer,e.lodash)}(this,(function(e,r,o){return(()=>{"use strict";var t={820:(e,r,o)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.BUILD_TARGET=r.greetPerson=r.useLodashToo=r.makeImmutableChange=r.makeHttpRequest=void 0;var t=o(209),n=o(304),i=o(375);r.makeHttpRequest=function(){return(0,i.default.get)("https://jsonplaceholder.typicode.com/todos/1")},r.makeImmutableChange=function(e){return n.produce(e,(function(e){e.nice="yes!"}))},r.useLodashToo=function(){return t.pickBy({some:"yest",another:void 0,showHaveNoAnother:"hope that"},t.identity)},r.greetPerson=function(e){return console.log("Hello "+e.name),"Hello "+e.name},r.BUILD_TARGET="NODE"},375:r=>{r.exports=e},304:e=>{e.exports=r},209:e=>{e.exports=o}},n={};return function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{}};return t[r](o,o.exports,e),o.exports}(820)})()}));