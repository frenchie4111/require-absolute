/**
 * This file is licensed under the MIT license
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var absolute = require( 'absolute' ),
        path = require( 'path' );

    var requireAbsolute = function( absolute_path ) {
        var relative = path.relative( __dirname, removeExtension( absolute_path ) );
        require( './' + relative );
    };

    module.exports = function( absolute_path ) {
        if( !absolute( absolute_path ) ) throw new Error( 'Requires absolute path' );
        var relative = path.resolve( './', path.relative( __dirname, absolute_path ) );
        return require( relative );
    };
})();