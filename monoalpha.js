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

function getRandomIndex(arr) {
  return Math.floor(
    Math.random() * arr.length 
  );
}

function range(a, b) {
  var len = Math.abs(b - a) + 1;
  return Array.apply(null, {length: len}).map((n, i) => a + i); 
}

function Monoalphabetic() {
  this.map = this.createMap();
}

Monoalphabetic.prototype.createMap = function createMap() {
  var output = {};
  var charA = 'A'.charCodeAt(0);
  var charZ = 'Z'.charCodeAt(0);
  var letterArr = range(charA, charZ);
  for (var i = 0; i < 26; i++) {
    var key = String.fromCharCode(charA + i);
    var randomIdx = getRandomIndex(letterArr);
    if (letterArr.length == 1) {
      randomIdx = 0;
    }
    output[key] = String.fromCharCode(letterArr[randomIdx]); 
    letterArr.splice(randomIdx, 1);
  }
  return output; 
};

Monoalphabetic.prototype.encrypt = function encrypt(plainText) {
  return plainText.split(' ').map(word => {
      return word.split('').map(l => this.map[l]).join('');
    }).join(' ');
};

Monoalphabetic.prototype.decrypt = function decrypt(cipherText) {
  var invertedMap = invertMap(this.map);
  return cipherText.split(' ').map(word => {
      return word.split('').map(l => invertedMap[l]).join('');
    }).join(' ');
};

module.exports = Monoalphabetic;

