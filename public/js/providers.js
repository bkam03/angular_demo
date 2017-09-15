angular.module('myApp')
.provider('Movies', function() {
  this.movies = [];

  //this is required, creates service provided.
  this.$get = ['$http', function($http) {
    return {
      getMovies: function() {
        //$http
        return $http.get('/api/movies')
        .then((movies) => {
          console.log(movies);
          return movies.data;
        });
      }
    };
  }];
});