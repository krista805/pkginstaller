var mocha = require('mocha')
var expect = require('chai').expect
// bring in assertion library
const assert = require('chai').assert;
// bring in js files
const pkginstaller = require('../pkginstaller');


describe('Pkginstaller', function(){
  it("should run tests", function(){
    expect(true).to.be.true
  });
  it('pkginstaller should return hello', function(){
    assert.equal(pkginstaller(), 'hello');
  });
});
