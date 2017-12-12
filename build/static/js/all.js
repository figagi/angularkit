var app = angular.module('starkapp',[
  'ngRoute',
  'controllers',
  'services'
])

// 注入子模块
angular.module('controllers',[]);
angular.module('services',[]);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
      template: '<h1>今天好冷哦！{{msg}}</h1>',
      controller: function ($scope) {
        $scope.msg = "是捏，就是好冷！";
      }
    })
      .when('/stark', {
        template: '<h1>this is stark page</h1>',
        controller: function ($scope) {
          $scope.msg = "是捏，就是好冷！";
        }
      })
      .when('/starkwang', {
        template: '<h1>this is starkwang page</h1>',
        controller: function ($scope) {
          $scope.msg = "是捏，嘿嘿！";
        }
      })
      .when('/shudong', {
        templateUrl: 'tpl.html',
        controller: function ($scope) {
          $scope.msg = "是捏，就是好冷！";
        }
      })
      .when('/goodslist', {
        templateUrl: 'view/goodsList.html',
        controller: 'GoodsController'
      })

    // 需要在localhost下面运行
  })
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
angular.module('starkapp')
    .factory('GoodsService',['$http',function($http) {
      return{
        fetchGoodsList:function(){
          return $http.get('https://easy-mock.com/mock/59664d4d58618039284c7710/example/goods/list').then(function(data){
            return data;
          })
        }
      }
  
}])