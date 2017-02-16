/**
 * Created by lvyongfei on 16/11/8.
 */
require.config({
  baseUrl: './',
  paths: {
    'app': 'js/app',
    'appConfig':'js/app-config',
    'routes': 'js/routes',
    'ionic': 'lib/ionic/js/ionic.bundle',
    'ngcordova': 'lib/ngCordova/dist/ng-cordova',
    'bootstrap':'js/bootstrap',
    'zepto':'lib/zepto/zepto.min',
    'asyncLoader': 'lib/async-loader/angular-async-loader',
    'services':'js/services',
    'directives':'js/directives',
    'controllers':'js/controllers'

  },
  shim: {
    'app': {
      deps: ['ionic']
    },
    'routes': {
      deps: ['ionic','app']
    },
    'appConfig':{
      deps: ['app']
    },
    'ionic' : {exports : 'ionic'}
  },
  priority: [
    'ionic',
    'ngcordova',
    'app',
    'routes',
    'appConfig',
    'services',
    'directives'
  ],
  deps: [
    'bootstrap'
  ]
});

