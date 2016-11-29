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

function Caesar(offset) {
  if (!offset || typeof offset != 'number') {
    throw new Error('Offset required');
  }
  this.offset = offset;
  this.charA = 'A'.charCodeAt(0);
  this.charZ = 'Z'.charCodeAt(0);
}

Caesar.prototype.decrypt = function decrypt(str) {
  var _this = this;
  var words = str.split(' ');
  return words.map((word) => {
    return word.split('').map((letter) => {
      var charCode = _this.charA + ((letter.charCodeAt(0) - _this.charA) % 26) - this.offset;
      if ( charCode > _this.charZ ) {
        charCode = (charCode - _this.charZ) + _this.charA; 
      }
      return String.fromCharCode(charCode);
    }).join('');
  }).join(' ');
};

Caesar.prototype.encrypt = function encrypt(str) {
  var _this = this;
  var words = str.split(' ');
  return words.map((word) => {
    return word.split('').map((letter) => {
      var charCode = _this.charA + ((letter.charCodeAt(0) - _this.charA) % 26) + this.offset;
      if ( charCode > _this.charZ ) {
        charCode = (charCode - _this.charZ) + _this.charA; 
      }
      return String.fromCharCode(charCode);
    }).join('');
  }).join(' ');
};

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

function Vigenere(key) {
  this.key = key;
  this.map = this.createMap();
}
