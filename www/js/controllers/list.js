/**
 * Created by lvyongfei on 16/11/16.
 */
define(['app'],function (app) {
  app.controller('listCtrl', ['$scope', function($scope) {
    var type = ['friend', 'group'];
    $scope.type = type[0];
    $scope.changeType = function(num) {
      $scope.type = type[num];
    };

  }]);
});
