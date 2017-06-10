"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Wajid on 5/19/2017.
 */
var config = (function () {
    function config() {
    }
    config.getEnvironmentVariable = function () {
        var environment;
        var data = { endPoint: '' };
        environment = window.location.hostname;
        switch (environment) {
            case 'localhost':
                data.endPoint = 'http://localhost:51364/';
                break;
            case 'fitsme.azurewebsites.net':
                data.endPoint = 'http://fitsmeservice.azurewebsites.net/';
                break;
            default:
                data.endPoint = 'http://localhost:51364/';
        }
        return data;
    };
    return config;
}());
exports.config = config;
//# sourceMappingURL=config.js.map