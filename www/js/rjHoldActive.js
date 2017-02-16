/**
 * Created by lvyongfei on 16/12/28.
 */
define(['app'], function(app) {
  app.directive('rjHoldActive', ['$ionicGesture', '$timeout', '$ionicBackdrop',
    function($ionicGesture, $timeout, $ionicBackdrop) {
      return {
        scope: false,
        restrict: 'A',
        replace: false,
        link: function(scope, iElm, iAttrs, controller) {
          $ionicGesture.on("hold", function() {
            iElm.addClass('active');
            $timeout(function() {
              iElm.removeClass('active');
            }, 300);
          }, iElm);
        }
      };
    }
  ])

})
