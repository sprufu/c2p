/**
 * Created by jcode on 2015-09-01.
 */
var warp = require('./warpper');

warp(require('fs'), exports, [
    'rename',
    'ftruncate',
    'chown',
    'fchown',
    'lchown',
    'chmod',
    'fchmod',
    'stat',
    'lstat',
    'fstat',
    'link',
    'symlink',
    'readlink',
    'realpath',
    'unlink',
    'rmdir',
    'mkdir',
    'readdir',
    'close',
    'open',
    'utimes',
    'futimes',
    'fsync',
    'write',
    'read',
    'readFile',
    'writeFile',
    'appendFile',
    'access'
]);