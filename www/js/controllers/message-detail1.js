/**
 * Created by lvyongfei on 16/12/15.
 */
define(['app'],function (app) {
  app.controller('message-detail1Ctrl', ['$scope', function($scope) {

    //
    //var viewScroll = $ionicScrollDelegate.$getByHandle('messageDetailsScroll');
    //// console.log("enter");
    //$scope.doRefresh = function() {
    //  // console.log("ok");
    //  $scope.messageNum += 5;
    //  $timeout(function() {
    //    $scope.messageDetils = messageService.getAmountMessageById($scope.messageNum,
    //      $stateParams.messageId);
    //    $scope.$broadcast('scroll.refreshComplete');
    //  }, 200);
    //};
    //
    //$scope.$on("$ionicView.beforeEnter", function() {
    //  $scope.message = messageService.getMessageById($stateParams.messageId);
    //  $scope.message.noReadMessages = 0;
    //  $scope.message.showHints = false;
    //  messageService.updateMessage($scope.message);
    //  $scope.messageNum = 10;
    //  $scope.messageDetils = messageService.getAmountMessageById($scope.messageNum,
    //    $stateParams.messageId);
    //  $timeout(function() {
    //    viewScroll.scrollBottom();
    //  }, 0);
    //});


    $scope.ret = {};
    $scope.send = function(){
      $scope.ret.ab =$scope.send_content;
    };
    window.addEventListener("native.keyboardshow", function(e){
      viewScroll.scrollBottom();
    });
  }]);
});
