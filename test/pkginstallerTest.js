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
  it('will separate packages with and without dependencies', function(){
    var count = 0;
    [
      'KittenService: ',
      'Leetmeme: Cyberportal',
      'Cyberportal: Ice',
      'CamelCaser:KittenService',
      'Fraudstream: Leetmeme',
      'Ice: '
    ].forEach(function (package, array){
      assert.input = package;
    });
  });
  describe('packages', function(){
    it("should have length of 2", function(){
      packages = ['KittenService: ', 'Ice: ']
      expect(packages).to.have.length(2);
    });
  });
  describe('packagesdepend', function(){
    it("should have length of 4", function(){
      packagesdepend = ['Leetmeme: Cyberportal','Cyberportal: Ice','CamelCaser:KittenService','Fraudstream: Leetmeme']
      expect(packagesdepend).to.have.length(4);
    });
  });
  it('will then sort through unresolved packages',
  function(){
    [
      'Leetmeme: Cyberportal',
      'Cyberportal: Ice',
      'CamelCaser:KittenService',
      'Fraudstream: Leetmeme',
    ].forEach(function (packagesdepend){
      var packagesdependcheck = packagesdepend;
    expect(packagesdependcheck).to.include(['Leetmeme: Cyberportal','Cyberportal: Ice','CamelCaser:KittenService',
    'Fraudstream: Leetmeme']);
    });
  });
});
