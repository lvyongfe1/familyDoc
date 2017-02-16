/**
 * Created by lvyongfei on 16/12/28.
 */
define(['app'],function(app)
{
  app .factory("userService", function($http) {
    var users = [];
    return {
      getUsers: function() {
        return $http.get("https://randomuser.me/api/?results=10").then(function(response) {
          users = response.data.results;
          return response.data.results;
        });
      },
      getUser: function(index) {
        return users[index];
      }
    };
  })


})
