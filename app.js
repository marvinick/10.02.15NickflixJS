var nflix = angular.module('nflix', ['ui.router']);

nflix.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('welcome', {
    url: "",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/welcome.html',
      },
    }
  });

});
