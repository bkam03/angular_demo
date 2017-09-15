const express = require( 'express' );

const PORT =  process.env.PORT || 3000;
const app = express();

app.use( express.static( 'public' ) );

app.get( '/api', ( req, res ) => {
  return res.json( [
  {
    title: 'The Other Guys',
    year: 2008
  },
  {
    title: 'It',
    year: 1990
  },
  {
    title: 'Wolf of Wall Street',
    year: 2015
  }
  ] );
} );


const server = app.listen( PORT, () => {
  console.log( `server running on ${ PORT }` );
} );