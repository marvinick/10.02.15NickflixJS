nflix.controller('MoviesCtrl', function MoviesCtrl($scope, MoviesFactory) {
  $scope.movies = MoviesFactory.movies;
  $scope.MoviesFactory = MoviesFactory;
});
