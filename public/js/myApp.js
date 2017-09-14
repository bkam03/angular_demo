

// creation uses a 2nd array argument to import dependencies
//pass in 2 args, create new module.  module called myApp.  array is list of dependencies to pass into module. must pass in second parameter or everything breaks.
angular.module('myApp', []);

// retrieval has only one argument
//retrieve created module from angular.
angular.module('myApp')
//bootstrapping process.
    .config(function(){
        // config
    })
    .run(function(){
        // initialize
    });