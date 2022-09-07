'use strict';

const supertest = require( 'supertest' );
const server = require( '../server' );
const request = supertest( server.app );

describe( 'API server', () => {
    it( 'should respond with 404 on an invalid route', async () => {
        const response = await request.get( '/foo' );
        expect( response.status ).toBe( 404 );
    } );
    it( 'Home page works', async () => {
        const res = await request.get( '/' );
        expect( res.status ).toEqual( 200 );
        expect( res.text ).toEqual( 'Hello World' );
    } );
    it( 'Square route works', async () => {
        const res = await request.get( '/square?num=9' );
        expect( res.status ).toEqual( 200 );
        expect( res.text ).toEqual( 'the square of 9 is 81' );
    } );
 
} );