function chatBar($rootScope, Settings) {
    'use strict';

    return {
        replace: true,
        restrict: 'AE',
        link: function(scope, elem, attrs) {
            var browseBtn = document.getElementById('browseBtn');

            scope.browseFile = function() {
                browseBtn.click();
            };

            scope.validateMessage = function($event) {
                if ($event.keyCode === 13) {
                    scope.sendMessage();
                }

                return false;
            };

            scope.sendMessage = function() {
                $rootScope.$broadcast('event:message:sent', {
                    txt: scope.chatInput,
                    sender: Settings.name || 'Anonymous'
                });
                scope.chatInput = '';

                return false;
            };

            angular.element(browseBtn)
                .on('change',
                    function(e) {
                        var file = e.target.files[0];

                        angular.element(browseBtn).val('');

                        var fileReader = new FileReader();

                        fileReader.onload = function(event) {
                            $rootScope.$broadcast('event:file:selected', {
                                image: event.target.result,
                                sender: Settings.name || 'Anonymous'
                            });
                        };

                        fileReader.readAsDataURL(file);
                    });
        },
        templateUrl: 'templates/message-detail2.html'
    };
}
//
//chatBar.$inject = ['$rootScope', 'Settings'];
//
//angular
//    .module('app')
//    .directive('chatBar', chatBar);
