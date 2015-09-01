/**
 * Created by jcode on 2015-09-01.
 */
var warp = require('./warpper');

warp(require('zlib'), exports, [
    'deflate',
    'deflateRaw',
    'gzip',
    'gunzip',
    'inflate',
    'inflateRaw',
    'unzip',
]);