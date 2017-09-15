/*var myApp = angular.module('myApp');*/

//name controller, define dependencies in array.
//can only scope from controller in this scope.
//put dependencies before array.  if scope is first in array, scope must be first in function args.

//do this so not on global scope
angular.module('myApp')
.controller( 'myController', [ '$scope', 'mainCharacter', 'CharacterVersionFactory', 'BookService', function( $scope, mainCharacter, CharacterVersionFactory, BookService ) {
  $scope.myFirstName = 'Brandon';
  $scope.myModel= 'Ready Player One';
  $scope.mainCharacter = mainCharacter;
  $scope.charVer =
    CharacterVersionFactory.genCharVersion();
//  $scope.books = BookService.books;
  $scope.BookService = BookService;

  $scope.tempBook = {
    title: '',
    author: ''
  };

  $scope.add = function() {
    let newBook = {
      title: $scope.tempBook.title,
      author: $scope.tempBook.author
    };
    BookService.addBook( newBook );
    $scope.tempBook.title = '';
    $scope.tempBook.author= '';
  };

}]);