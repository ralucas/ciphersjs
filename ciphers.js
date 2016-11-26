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

function Caesar(mapping) {
  if (!mapping || !isObject(mapping)) {
    throw new Error('Mapping required');
  }
  this.map = this.createMap(mapping);
}

Caesar.prototype.createMap = function createMap(obj) {
  var mapped = {};
  var output = {};
  for (var key in obj) {
    mapped[key] = obj[key].toString().charCodeAt(0);
  }
  var a = mapped[Object.keys(mapped)[0]];
  var keyCode = Object.keys(mapped)[0].toString().charCodeAt(0);
  var charA = 'A'.charCodeAt(0);
  var charZ = 'Z'.charCodeAt(0);
  for (var i = 0; i < 26; i++) {
    var g = (a + i) - charZ;
    var h = (keyCode + i) - charZ;
    var newKeyCode = keyCode + i;
    var cc = String.fromCharCode(a + i);
    if (g > 0) {
      cc = String.fromCharCode(charA + (g-1));
    }
    if (h > 0) {
      newKeyCode = charA + (h-1);
    }
    output[String.fromCharCode(newKeyCode)] = cc;
  }
  return output; 
};

Caesar.prototype.decrypt = function decrypt(str) {
  var m = this.map;
  var words = str.split(' ');
  return words.map((word) => {
    return word.split('').map((letter) => {
      return m[letter];
    }).join('');
  }).join(' ');
};

Caesar.prototype.encrypt = function encrypt(str) {
  var m = invertMap(this.map);
  var words = str.split(' ');
  return words.map((word) => {
    return word.split('').map((letter) => {
      return m[letter];
    }).join('');
  }).join(' ');
};

