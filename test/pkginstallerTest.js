// bring in assertion library
const assert = require('chai').assert;
// bring in js files
const pkginstaller = require('../pkginstaller');

describe('Pkginstaller', function(){
  it('pkginstaller should return hello', function(){
    assert.equal(pkginstaller(), 'hello');
  });
});
