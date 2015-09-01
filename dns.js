/**
 * Created by jcode on 2015-09-01.
 */
var warp = require('./warpper');

warp(require('dns'), exports, [
    'lookup',
    'resolve',
    'resolve4',
    'resolve6',
    'resolveMx',
    'resolveTxt',
    'resolveSrv',
    'resolveNs',
    'resolveCname',
    'reverse',
]);