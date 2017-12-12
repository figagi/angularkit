angular.module('controllers').controller('GoodsController',[
  '$scope',
  '$route',
  '$routeParams',
  'GoodsService',
  function(
    $scope,
    $route,
    $routeParams,
    GoodsService
  ){
    $scope.goodsList = GoodsService.fetchGoodsList();
  }])