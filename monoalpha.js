function isObject(o) {
  return typeof o === 'object' && 
    o.toString() === '[object Object]';
}

function invertMap(obj) {
  var output = {};
  var keys = Object.keys(obj);
  keys.forEach((key) => {
    output[obj[key]] = key;
  });
  return output;
}

function getRandomLetter() {
  var charA = 'A'.charCodeAt(0);
  var charZ = 'Z'.charCodeAt(0);
  return Math.floor(
    Math.random() * (charZ - charA)
  );
}

function Monoalphabetic() {
  this.map = this.createMap();
}

Monoalphabetic.prototype.createMap = function createMap() {
  var output = {};
  var charA = 'A'.charCodeAt(0);
  var charZ = 'Z'.charCodeAt(0);
  var tmpArray = [];
  for (var i = 0; i < 26; i++) {
    var key = String.fromCharCode(charA + i);
    var randomLetter = getRandomLetter();
    if ( ~tmpArray.indexOf(randomLetter) ) {
      output[key] = randomLetter; 
      tmpArray.push(randomLetter);
    } else {
      // try to get another random letter 
    }
  }
  return output; 
};

module.exports = Monoalphabetic;
