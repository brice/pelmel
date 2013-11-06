// Sample file from http://robdodson.me/blog/2012/05/27/testing-backbone-boilerplate-with-mocha-and-chai

var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

var foobar = {
  sayHello: function() {
    return 'Hello World!';
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
