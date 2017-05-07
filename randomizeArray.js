(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory); //AMD
  }
  else if (typeof module === 'object' && module.exports) {
    module.exports = factory(); //CommonJS
  } else {
    root.randomizeArray = factory(); //Global
  }
}(this, function () {
  'use strict';
  function randomizeArray(arr){
    var len, newArr;
    if(Object.prototype.toString.call(arr) === '[object Array]'){
      len = arr.length;
      newArr = [];

      arr.forEach(function (ele) {
        var rand = Math.floor(Math.random() * len);
        newArr.splice(rand,0,ele);
      });
    }

    return newArr;
  }

  return randomizeArray;
}));