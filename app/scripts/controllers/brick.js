'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:BrickCtrl
 * @description
 * # BrickCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('BrickCtrl', function () {
    this.items = [
      {
        color : 'Green',
        size : 'Size: 2 x 6',
        price : '$0.03',
        quantity : 697,
        rating : 5
      },
      {
        color : 'Red',
        size : 'Size: 2 x 6',
        price : '$0.03',
        quantity : 10,
        rating : 2
      },
      {
        color : 'Yellow',
        size : 'Size: 2 x 6',
        price : '$0.03',
        quantity : 300,
        rating : 1
      }
    ];

    this.increment = function(item) {
      item.rating = ((item.rating * 10) + 1)/ 10;
    };
    this.decrement = function(item) {
      item.rating = ((item.rating * 10) - 1)/ 10;
    };



  });
