// Users Controller
forum_app.controller('UsersController', function($scope, UsersFactory)
{

	$scope.addUser = function(){
		UsersFactory.addUser($scope.new_user, function(data){
			
		})

			$scope.new_user = {};

	}

})