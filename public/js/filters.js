angular.module('myApp')
.filter('beforeYearFilter', [function() {
  return function(movies, year) {
    return movies.filter((movie) => {
      return movie.year < year;
    });
  };
}])
.filter('uppercase', [function() {
  return function(input, uppercase) {
    input = input || '';
    var out = '';
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    // conditional based on optional argument
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
  };
}]);