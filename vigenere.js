
function Vigenere(key) {
  this.key = key;
  this.map = this.createMap();
}


module.exports = Vigenere;

