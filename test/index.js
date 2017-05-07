var chai = require('chai'),
  expect = require('chai').expect,
  randomizeArray = require('../randomize_array_module');

describe('randomizeArray: generate three arrays to confirm randomness', function(){
  var array = [1,2,3,4,5,6,7,8,9,0],
    randArray1 = randomizeArray(array),
    randArray2 = randomizeArray(array);

  it('method should return a new array', function(){
    expect(randArray1,'array one').to.be.a('array');
    expect(randArray2,'array two').to.be.a('array');
  });
  it('method should return `undefined` when passed non-arrays', function(){
    expect(randomizeArray('test')).to.equal(undefined);
  });
  it('no three arrays should match', function(){
    expect(array,'first random').to.not.eql(randArray1);
    expect(array,'second random').to.not.eql(randArray2);
    expect(randArray1,'both randoms').to.not.eql(randArray2);
  });
});
