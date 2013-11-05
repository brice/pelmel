/**
 * A class that convert roman number to integer
 */
function Roman(integer) {
  this.integer = integer;

  this.toInteger = function(){

    if (this.integer == 5) {
      return 'V';
    }
    var result = '';
    for (  ; this.integer != 0; this.integer--) {
        result = result + 'I';
    }

    return result;
  }
}

function noFunction() {
    return 'toto';
}
