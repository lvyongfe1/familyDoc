function chatList($rootScope, SOCKET_URL, Settings, ngAudio) {
    'use strict';

    return {
        replace: true,
        restrict: 'AE',
        link: function(scope, elem, attrs) {
            var socket = io(SOCKET_URL);

            scope.horn = ngAudio.load('assets/audio/bikehorn.mp3');

            scope.messages = [];

            scope.isMyMessage = function(msg) {
                return msg.sender === 'Me' ? 'my-message' : 'incoming-message';
            };

            socket.on('event:incoming:image', function(data) {
                scope.$apply(function() {
                    scope.messages.unshift(data);
                });
                playHorn();
            });

            socket.on('event:incoming:message', function(data) {
                scope.$apply(function() {
                    scope.messages.unshift(data);
                });
                playHorn();
            });

            $rootScope.$on('event:file:selected', function(event, data) {
                socket.emit('event:new:image', data);
                data.sender = 'Me';
                scope.$apply(function() {
                    scope.messages.unshift(data);
                });
            });

            $rootScope.$on('event:message:sent', function(event, data) {
                socket.emit('event:new:message', data);
                data.sender = 'Me';
                scope.messages.unshift(data);
            });

            function playHorn() {
                if (Settings.sound) {
                    return scope.horn.play();
                }
                return false;
            }
        },
        templateUrl: 'templates/message-detail2.html'
    };
}

//chatList.$inject = ['$rootScope', 'SOCKET_URL', 'Settings', 'ngAudio'];
//
//angular
//    .module('app')
//    .directive('chatList', chatList);
