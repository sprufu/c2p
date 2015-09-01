/**
 * Created by jcode on 2015-09-01.
 */
var warp = require('./warpper');

warp(require('child_process'), exports, [
    'exec',
    'execFile',
]);