/**
 * 转换回调函数成为promise
 * Created by jcode on 2015-09-01.
 */
module.exports = callback2Promise;

function callback2Promise(method) {
    return function (...args) {
        return new Promise(function (resolve, reject) {
            args.push(function (err, ...result) {
                if (err) {
                    reject(err);
                } else if (result.length == 1) {
                    resolve(result[0]);
                } else {
                    resolve(result);
                }
            });
            method.apply(null, args);
        });
    };
}

