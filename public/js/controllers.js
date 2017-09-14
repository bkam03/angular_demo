/*var myApp = angular.module('myApp');*/

//name controller, define dependencies in array.
//can only scope from controller in this scope.
//put dependencies before array.  if scope is first in array, scope must be first in function args.

//do this so not on global scope
angular.module('myApp')
.controller( 'myController', [ '$scope', function( $scope ) {
  $scope.myFirstName = 'Brandon';
  $scope.myModel= 'Ready Player One';
} ] );
