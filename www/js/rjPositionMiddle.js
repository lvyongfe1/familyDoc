/**
 * Created by lvyongfei on 16/12/28.
 */
define(['app'], function(app) {
  app .directive('rjPositionMiddle', ['$window', function($window){
    return{
      replace: false,
      link: function(scope, iElm, iAttrs, controller){
        var height = $window.innerHeight - 44 - 49 - iElm[0].offsetHeight;
        if (height >= 0) {
          iElm[0].style.top = (height / 2 + 44) + 'px';
        }else{
          iElm[0].style.top = 44 + 'px';
        }
      }
    }
  }])

})
