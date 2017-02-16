/**
 * Created by lvyongfei on 16/11/10.
 */
define(['ionic',
  'app',
  'routes',
  'appConfig',
  'js/utils/storage',
  'services',
  'directives'
], function(ionic,app,routes,appConfig, storage){
  angular.element(document.getElementsByTagName('html')[0]).ready(function () {
    try {
      angular.bootstrap(document, ['app']);
    } catch (e) {
      console.error(e.stack || e.message || e);
    }
  });
});

