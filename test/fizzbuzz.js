var assert = chai.assert,
    expect = chai.expect,
    should = chai.should(); 
    
function FizzBuzz(i) {
  if (i === 1) {
    return 1;
  }
}

describe('#FizzBuzz()', function() {
  it('Fizzbuzz return a string', function() {
    expect(FizzBuzz(1)).to.deep.equal('1');
  })
})
