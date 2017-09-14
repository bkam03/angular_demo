const express = require( 'express' );

const PORT =  process.env.PORT || 3000;
const app = express();

app.use( express.static( 'public' ) );


const server = app.listen( PORT, () => {
  console.log( `server running on ${ PORT }` );
} );