var assert = chai.assert,
    expect = chai.expect,
    should = chai.should(); // Note that should has to be executed

var foobar = {
  sayHello: function() {
    return 'funky chicken!';
  }
};

describe('Foobar', function() {
  describe('#sayHello()', function() {
    it('should work with assert', function() {
      assert.equal(foobar.sayHello(), 'funky chicken!');
    })

    it('should work with expect', function() {
      expect(foobar.sayHello()).to.equal('funky chicken!');
    })

    it('should work with should', function() {
      foobar.sayHello().should.equal('funky chicken!');
    })
  })
})
