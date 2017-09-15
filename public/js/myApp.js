//try to keep things off global scope when possible

// creation uses a 2nd array argument to import dependencies
//pass in 2 args, create new module.  module called myApp.  array is list of dependencies to pass into module. must pass in second parameter or everything breaks.
angular.module( 'myApp', [ 'ngRoute' ] );

// retrieval has only one argument
//retrieve created module from angular.
angular.module('myApp')
//bootstrapping process.
    .config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ){
      // config
      $routeProvider //how you do react router in NG
      .when( '/', { //at this route, use this view and controller.
        templateUrl: 'home.html',
        controller: 'myController'
      } )
      .when( '/books', {
        templateUrl: 'books.html',
        controller: 'booksController'
      } )
      .when( '/movies', {
        templateUrl: 'movies.html',
        controller: 'moviesController'
      } )
      .when( '/others', {
        templateUrl: 'others.html',
        controller: 'othersController'
      } )
      .otherwise( {
        template: '<h1><center>nope</center></h1>'
      } );

      $locationProvider.html5Mode(true);
    } ] ) //rootScope is visible to all scopes
    .run( [ 'APP_VERSION', '$rootScope', function( APP_VERSION, $rootScope ){
        // initialize
        $rootScope.version = APP_VERSION;
    } ] );