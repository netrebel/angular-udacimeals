'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:BrickCtrl
 * @description
 * # BrickCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('BrickCtrl', ['bricksFinder', function (bricks) {
    var vm = this;

    bricks.getBricks().then(function(data) {
      vm.items = data;
    });

    this.increment = function(item) {
      item.rating = ((item.rating * 10) + 1)/ 10;
    };
    this.decrement = function(item) {
      item.rating = ((item.rating * 10) - 1)/ 10;
    };

  ]});
