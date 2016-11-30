
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

module.exports = Caesar;

