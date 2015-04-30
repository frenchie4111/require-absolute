/**
 * Copyright of Mark One Lifestyle Inc.
 *
 * Authors:
 *     - Mike Lyons (m@mkone.co)
 */

(function() {
    'use strict';

    var require_absolute = require( '../../' ),
        assert = require( 'chai' ).assert;

    it( 'should require absolute', function() {
        var file = __dirname + '/test_require/require_me.js';
        var required = require_absolute( file );
        assert.isDefined( required );
        assert.propertyVal( required, 'test', 'test' );
    } );

    it( 'should require absolute, back one directory', function() {
        var file = __dirname;
        var file_array = file.split( '/' );
        file_array.pop();
        file = file_array.join( '/' );
        file += '/require_me.js';

        var required = require_absolute( file );
        assert.isDefined( required );
        assert.propertyVal( required, 'test', 'test' );
    } )
})();