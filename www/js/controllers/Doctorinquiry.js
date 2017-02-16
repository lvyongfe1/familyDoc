/**
 * Created by lvyongfei on 16/11/16.
 */
define(['app'],function (app) {
  app.controller('DoctorinquiryCtrl', ['$scope','$ionicPopover','$timeout', function($scope, $ionicPopover,$timeout) {
    $scope.popover = $ionicPopover.fromTemplateUrl('my-popover.html', {
      scope: $scope
    });
    // .fromTemplateUrl() 方法
    $ionicPopover.fromTemplateUrl('my-popover.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });
    $scope.openPopover = function($event) {
      $scope.popover.show($event);
    };
    $scope.closePopover = function() {
      $scope.popover.hide();
    };
    // 清除浮动框
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });
    // 在隐藏浮动框后执行
    $scope.$on('popover.hidden', function() {
      // 执行代码
    });
    // 移除浮动框后执行
    $scope.$on('popover.removed', function() {
      // 执行代码
    });
    var type = ['all', 'doc','family','friends','message'];
    $scope.type = type[0];
    $scope.changeType = function(num) {
      $scope.type = type[num];
    };


    $scope.onSwipeLeft = function() {
      $state.go("tab.account");
    };
    //
    $scope.popupMessageOpthins = function(message) {
      $scope.popup.index = $scope.messages.indexOf(message);
      $scope.popup.optionsPopup = $ionicPopup.show({
        templateUrl: "templates/popup.html",
        scope: $scope,
      });
      $scope.popup.isPopup = true;
    };
    //标记 读过还是未读
    $scope.markMessage = function() {
      var index = $scope.popup.index;
      var message = $scope.messages[index];
      if (message.showHints) {
        message.showHints = false;
        message.noReadMessages = 0;
      } else {
        message.showHints = true;
        message.noReadMessages = 1;
      }
      $scope.popup.optionsPopup.close();
      $scope.popup.isPopup = false;
      messageService.updateMessage(message);
    };
    //删除消息
    $scope.deleteMessage = function() {
      var index = $scope.popup.index;
      var message = $scope.messages[index];
      $scope.messages.splice(index, 1);
      $scope.popup.optionsPopup.close();
      $scope.popup.isPopup = false;
      messageService.deleteMessageId(message.id);
      messageService.clearMessage(message);
    };
    //置顶消息
    $scope.topMessage = function() {
      var index = $scope.popup.index;
      var message = $scope.messages[index];
      if (message.isTop) {
        message.isTop = 0;
      } else {
        message.isTop = new Date().getTime();
      }
      $scope.popup.optionsPopup.close();
      $scope.popup.isPopup = false;
      messageService.updateMessage(message);
    };
    //跳转到详情
    $scope.messageDetils = function(message) {
      $state.go("messageDetail", {
        "messageId": message.id
      });
    };

    $scope.$on("$ionicView.beforeEnter", function(){
      // console.log($scope.messages);
      $scope.messages = messageService.getAllMessages();
      $scope.popup = {
        isPopup: false,
        index: 0
      };
    });
  }]);
});
