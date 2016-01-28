var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

describe('#RomanToInteger()', function() {
  it('Test to return I when put 1', function() {
    expect(new Roman(1).toInteger()).to.equal('I');
  });
  it('Test to return II when put 2', function() {
    expect(new Roman(2).toInteger()).to.equal('II');
  });

    it('Test to return V when put 5', function() {
    expect(new Roman(5).toInteger()).to.equal('V');
  });

});