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
     GoodsService.fetchGoodsList().then(function(data){
       console.log(data);
       $scope.goodsList = data.data.data;
    });
  }])