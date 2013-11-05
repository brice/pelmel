var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

function FizzBuzz(i) {


  if (i === 3) {
    return 'fizz';
  }
  return i.toString();
}

describe('#FizzBuzz()', function() {
  it('Fizzbuzz return a string', function() {
    expect(FizzBuzz(1)).to.deep.equal('1');
  })
 it('Fizzbuzz return a string', function() {
    expect(FizzBuzz(2)).to.deep.equal('2');
  })
  it('Fizzbuzz return a string', function() {
    expect(FizzBuzz(3)).to.deep.equal('fizz');
  })
})
