/**
 * Created by lvyongfei on 16/12/28.
 */
define(['app'], function(app) {
  app.directive('rjCloseBackDrop', [function() {
    return {
      scope: false,
      restrict: 'A',
      replace: false,
      link: function(scope, iElm, iAttrs, controller) {
        var htmlEl = angular.element(document.querySelector('html'));
        htmlEl.on("click", function(event) {
          if (event.target.nodeName === "HTML" &&
            scope.popup.optionsPopup &&
            scope.popup.isPopup) {
            scope.popup.optionsPopup.close();
            scope.popup.isPopup = false;
          }
        });
      }
    };
  }])

})
