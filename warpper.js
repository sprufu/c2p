/**
 * ��baseģ����list����ת����to�ж�Ӧ��promise����
 * Created by jcode on 2015-09-01.
 */
var callback2Promise = require('./index');

module.exports = function(base, to, list) {
    for(var api of list) {
        to[api] = callback2Promise(base[api]);
    }
};