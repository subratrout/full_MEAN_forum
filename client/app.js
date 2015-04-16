var forum_app = angular.module('forum_app', ['ngRoute']);

  // Set up routing
  forum_app.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/users.html'
        })
        .when('/dashboard',{
            templateUrl: 'partials/dashboard.html'
        })
        .when('/answers',{
            templateUrl: 'partials/answers.html'
        })
        .when('/topics',{
            templateUrl: 'partials/topics.html'
        })

        .when('/comments',{
             templateUrl: 'partials/comments.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });