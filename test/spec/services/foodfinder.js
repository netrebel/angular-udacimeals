'use strict';

describe('Service: bricksFinder', function () {

  // load the service's module
  beforeEach(module('udaciMealsApp'));

  // instantiate service
  var bricksFinder;
  beforeEach(inject(function (_bricksFinder_) {
    bricksFinder = _bricksFinder_;
  }));

  it('should do something', function () {
    expect(!!bricksFinder).toBe(true);
  });

});
