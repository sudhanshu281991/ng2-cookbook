"use strict";
var observable_1 = require('rxjs/observable');
require('rxjs/add/observable/of');
var CustomPreloadingStrategy = (function () {
    function CustomPreloadingStrategy() {
    }
    CustomPreloadingStrategy.prototype.preload = function (route, fn) {
        if (route.data['preload']) {
            return fn();
        }
        else {
            return observable_1.Observable.of(null);
        }
    };
    return CustomPreloadingStrategy;
}());
exports.CustomPreloadingStrategy = CustomPreloadingStrategy;
//# sourceMappingURL=custom-preloading-strategy.js.map