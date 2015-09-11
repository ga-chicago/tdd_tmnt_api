// app.js
var turtlesApp = angular.module('turtlesApp', []);

turtlesApp.controller('turtlesCtrl', function($scope, $http) {

  //www.someplace.net/api/turtles
  $scope.url = '/turtles'; // api for our turtles

  $scope.fetch = function() {
    $http.get($scope.url).success(function(data) {
      $scope.data = data;
    });
  }

  $scope.fetch();

});
