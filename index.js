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
    /**
     * Requires the file with the given absolute path. Throws error if specified is not an absolute path
     * @param absolute_path The path to require
     * @returns {*} The required file
     */
    module.exports = function( absolute_path ) {
        if( !absolute( absolute_path ) ) throw new Error( 'Requires absolute path' );
        var relative = path.resolve( './', path.relative( __dirname, absolute_path ) );
        return require( relative );
    };
})();