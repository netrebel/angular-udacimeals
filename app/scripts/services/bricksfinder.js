'use strict';

/**
 * @ngdoc service
 * @name udaciMealsApp.bricksFinder
 * @description
 * # bricksFinder
 * Service in the udaciMealsApp.
 */
angular.module('udaciMealsApp')
  .service('bricksFinder', function () {
    this.getBricks = function() {
      return $.get('/bricks/bricks.json');
    };
  });
