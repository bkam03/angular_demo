angular.module( 'myApp' )
.service( 'BookService', ['$http', function( $http ){
  var books = [
    {
      title: 'Ready Player One',
      author: 'Ernest Clyne'
    },
    {
      title: 'The Subtle Knife',
      author: 'Phillip Pullman'
    },
    {
      title: 'Old man\'s War',
      author: 'John Scalzi'
    }
  ];

/*  $http.get('/api/users/books/3')
  .then((serverBooks) => {
    console.log(serverBooks);
    books = serverBooks;
  });
*/

  return {
    books: books,
    getBooks: function() { return books; },
    getBook: function(index) { return books[index]; },
    addBook: function(book) { books.push(book); }
  };
} ] )