var mocha = require('mocha')
var expect = require('chai').expect
// bring in assertion library
const assert = require('chai').assert;
// bring in js files
const pkginstaller = require('../pkginstaller');


describe('dependencies()', function(){
  describe('Array', function(){
    it('should be an empty array', function(){
      var packages = [];
      assert.equal(packages.length, 0);
    });
  });
  describe('Array', function(){
    it('should be an empty array', function(){
      var packagesdepend = [];
      assert.equal(packagesdepend.length, 0);
    });
  });
});
