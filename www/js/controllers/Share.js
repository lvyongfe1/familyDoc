/**
 * Created by lvyongfei on 16/11/16.
 */
//define(['app'],function (app) {
//  app.controller('ShareCtrl', ['$scope', function($scope,$ionicActionSheet) {
//
//  }]);
//});

define(['app'],function (app) {
  app.controller('ShareCtrl', ['$scope','$ionicActionSheet','$timeout' ,function($scope,$ionicActionSheet,$timeout) {


    var hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: '朋友圈' },
        { text: '微信好友' },
        { text: 'QQ好友' },
        { text: 'QQ空间' },
        { text: '新浪微博' },
        { text: '腾讯微博' }
      ],
      destructiveText: '删除',
      titleText: '分享至',
      cancelText: '取消',
      cancel: function() {
      },
      buttonClicked: function(index) {
        return true;
      }
    });

    $timeout(function() {
      hideSheet();
    }, 3000);


  }]);
});
