var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

describe('#RomanToInteger()', function() {
  it('Test to return I when put 1', function() {
    expect(new Roman(1).toInteger(1)).to.equal('I');
  });

});