/**
 * Created by lvyongfei on 16/11/16.
 */
define(['app'],function (app) {
  app.controller('SignmedicalCtrl', ['$scope','$ionicPlatform',function($scope,$ionicPlatform) {
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      console.log("navigator.geolocation works well");
  };
    $scope.getpoint = function() {

         add();


      if($ionicPlatform.is("android")){

        baidu_location.getCurrentPosition(function(data){
          //$scope.locateData = data;
          $scope.ret = {longitude:data.longitude, latitude:data.latitude};

          var map = new BMap.Map("allmap"); // 创建Map实例
          var point = new BMap.Point(data.longitude, data.latitude); // 创建点坐标
          map.centerAndZoom(point,19);
          var marker = new BMap.Marker(point); // 创建标注
          map.addOverlay(marker); // 将标注添加到地图中

          //  BMap.Convertor.translate(point,0,translateCallback1);


        }, function(err){ alert("错误："+ err) });

      }else if($ionicPlatform.is("ios")){

        //$scope.locateData = "";

        //定位数据获取成功响应
        var onSuccess = function(position) {
          //iosMap = new BMap.Map("allmap"); // 创建Map实例
          var point = new BMap.Point(position.coords.longitude, position.coords.latitude); // 创建点坐标
          var convertor = new BMap.Convertor();
          var pointArr = [];
          pointArr.push(point);
          convertor.translate(pointArr, 1, 5, translateCallback);
        };

        //定位数据获取失败响应
        function onError(error) {
          alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
        }
        //开始获取定位数据
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
      };


    };

    function add(){

      var iosMap = new BMap.Map("allmap");
      var point = new BMap.Point(116.331398,39.897445); // 创建点坐标
      var convertor = new BMap.Convertor();
      var pointArr = [];
      pointArr.push(point);
      iosMap.centerAndZoom(point,19);

      //translateCallback(1);
       //convertor.translate(pointArr, 1, 5, translateCallback);
    };


    //坐标转换完之后的回调函数
    function translateCallback(data){
      if(data.status === 0) {
        var iosMap = new BMap.Map("allmap");
        var marker = new BMap.Marker(data.points[0]);
        //alert(data.points[0].lng + "," + data.points[0].lat+"111");
        $scope.ret = {longitude:data.points[0].lng, latitude:data.points[0].lat};
        iosMap.addOverlay(marker);
        var label = new BMap.Label(data.points[0].lng + "，" + data.points[0].lat,{offset:new BMap.Size(20,-10)});
        marker.setLabel(label); //添加百度label
        iosMap.centerAndZoom(data.points[0],19);
      }
    };

  }]);
});


