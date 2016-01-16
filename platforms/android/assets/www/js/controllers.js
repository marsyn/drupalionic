angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $http) {
   
    $http.get('http://forapp/list-articles').
    success(function (data, status, headers, config) {
        
        $scope.title = data.title;
    }).
    error(function (data, status, headers, config) {
        
    });

});
