/**
 * Created by lvyongfei on 16/11/16.
 */
define(['app'],function (app) {
  app.controller('tab-doctorinquiryCtrl', ['$scope', function($scope) {
    var activity = ['activity', 'personal', 'group','message'];
    $scope.act = activity[0];
    $scope.changeAct = function(num) {
      $scope.act = activity[num];
    };

  }]);
});
