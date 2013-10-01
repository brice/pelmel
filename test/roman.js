/**
 * A class that convert roman number to integer
 */
function Roman(integer) {
  this.integer = integer;

  this.toInteger = function(){
    if (this.integer == 1) {
      return 'I';
    }
  }
}
