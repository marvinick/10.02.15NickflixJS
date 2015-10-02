nflix.factory('MoviesFactory', function MoviesFactory() {
  var factory = {};
  factory.movies = [];
  factory.addMovie = function() {
    factory.movies.push({ name: factory.movieTitle, id: factory.movies.length + 1, reviews: [] });
    factory.movieTitle = null;
  };

  return factory;
});
