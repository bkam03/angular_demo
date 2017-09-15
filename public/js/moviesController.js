angular.module('myApp')
.controller( 'moviesController', [ '$scope','Movies', function( $scope, Movies ) {
  $scope.movies = [];
  Movies.getMovies()
  .then( ( movies ) => {
    $scope.movies = movies;
  });

}]);