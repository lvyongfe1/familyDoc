
define(['ionic','asyncLoader','ngcordova'],function (ionic,asyncLoader) {


  var app = angular.module('app', ['ui.router', 'ionic', 'ngCordova']);
  asyncLoader.configure(app);
  return app;


});


angular.module('wechat', ['ionic', 'wechat.controllers', 'wechat.routes',
  'wechat.services', 'wechat.directives', 'monospaced.elastic'
])

  .config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

  }])

  .run(function($ionicPlatform, $http, messageService, dateService) {

    var url = "";
    if (ionic.Platform.isAndroid()) {
      url = "/android_asset/www/";
    }

    // if (localStorage.getItem("messageID") === null) {

    $http.get(url + "data/json/messages.json").then(function(response) {
      // localStorageService.update("messages", response.data.messages);
      messageService.init(response.data.messages);

    });
    $http.get(url + "data/json/friends.json").then(function(response){
      console.log(response.data.results);
    });
    // }
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });


angular.module('app', ['ionic', 'ngAudio'])
  .value('SOCKET_URL', '192.168.128.78:3000')
  .value('Settings', {
    name: '',
    sound: true
  })
  .config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }])
  .run(['$ionicPlatform', 'Settings', 'LocalStorage', function($ionicPlatform, Settings, LocalStorage) {

    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });

    if (LocalStorage.isAvailable()) {
      try {
        LocalStorage.get('chat-settings')
          .then(function(data) {
            angular.extend(Settings, angular.fromJson(data));
          });
      } catch (e) {
        console.log(e);
      }
    }
  }]);

