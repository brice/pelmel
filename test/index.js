import chai from 'chai';
var expect = chai.expect;

import * as lib from '../src/lib';

describe('Lib tests', function() {
  describe('#getItems()', function() {
    it('should return an array', function() {
      expect(lib.getItems([])).to.be.an('array');
    });
    it('should return one element', function() {
      expect(lib.getItems(['a', 'b'], 1)).to.be.an('array').and.to.have.length(1);
    });
  });

  describe('#shuffle()', function() {
    it('should return the same number of elements', function() {
      expect(lib.shuffle(['a', 'b'])).to.be.an('array').and.to.have.length(2);
    });
    it('should return shuffle the array', function() {
      var data = ['a', 'b', 'c', 'd', 'e', 'f'];
      expect(lib.shuffle(['a', 'b', 'c', 'd', 'e', 'f'])).to.be.an('array').and.not.equal(data);
    });
  });

});
