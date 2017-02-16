define(['app'],function (app) {
  app.controller('MainCtrl', ['$scope', function($scope, $cordovaDatePicker) {


    var options = {
      date: new Date(),
      mode: 'date', // or 'time'
      minDate: new Date() - 10000,
      allowOldDates: true,
      allowFutureDates: false,
      doneButtonLabel: 'DONE',
      doneButtonColor: '#F2F3F4',
      cancelButtonLabel: 'CANCEL',
      cancelButtonColor: '#000000'
    };


    document.addEventListener("deviceready", function () {

      $cordovaDatePicker.show(options).then(function(date){
        alert(date);
      });

    }, false);
   $scope.getdataStr = function(name){

     document.addEventListener("deviceready",function(){

       $cordovaDatePicker.show(ENV.options).then(function(data){


         $scope.visit[name] = data.format("yyyy-MM-dd");

       });
     },false);
   }

  }]);
});
