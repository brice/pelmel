var assert = chai.assert,
    expect = chai.expect,
    should = chai.should(); 
    
var error = new Error('This is a bad function.');

function FizzBuzz(i) {
  if(typeof i !== 'number'){
  	throw error;
  }
  var result = '';
  if (i % 3 === 0) {
  	result +='fizz';
  }
  if (i % 5 === 0) {
  	result += 'buzz';
  }
  if (result === ''){
  	result = i.toString();
  }
  return result;
}


describe('#FizzBuzz()', function() {
  it('Fizzbuzz return a string', function() {
    expect(FizzBuzz(1)).to.equal('1');
  });
  it('Fizzbuzz return \'2\' with parameters 2', function() {
    expect(FizzBuzz(2)).to.equal('2');
  });
  it('Fizzbuzz return \'fizz\' with parameters 3', function() {
    expect(FizzBuzz(3)).to.equal('fizz');
  });
  it('Fizzbuzz return \'buzz\' with parameters 5', function() {
    expect(FizzBuzz(5)).to.equal('buzz');
  });
  it('Fizzbuzz return \'fizz\' with parameters 6', function() {
    expect(FizzBuzz(6)).to.equal('fizz');
  });
  it('Fizzbuzz return \'buzz\' with parameters 10', function() {
    expect(FizzBuzz(10)).to.equal('buzz');
  });
  it('Fizzbuzz return \'fizzbuzz\' with parameters 15', function() {
    expect(FizzBuzz(15)).to.equal('fizzbuzz');
  });
  it('Fizzbuzz return \'fizzbuzz\' with parameters 15', function() {
    expect(FizzBuzz('a')).to.throw('This is a bad function.');
  });
})
