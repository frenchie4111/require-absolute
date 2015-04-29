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
})();