/**
 * Created by lvyongfei on 16/11/16.
 */
define(['app'],function (app) {
  app.controller('AccountCtrl', ['$scope','$ionicActionSheet', function($scope, $ionicActionSheet) {

    $scope.settings = {
      enableFriends: true
    };

    $scope.changeImg = function(){
      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '从相册中选择' },
          { text: '拍照' }
        ],
        titleText: '确认修改图片',
        cancelText: '取消',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          return true;
        }
      });
    }
  }]);
});
