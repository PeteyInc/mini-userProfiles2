angular.module('userProfiles').service('mainService', function($http) {

  this.getUsers = function() {
    return $http({
			method: "GET",
			url: "http://swapi.co/api/people/"
		});
  };

});
