"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Wajid on 5/21/2017.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var config_1 = require("../config");
var SpeciesService = (function () {
    function SpeciesService(http) {
        this.http = http;
        this.API_URL = "";
        this.API_URL = config_1.config.getEnvironmentVariable().endPoint;
    }
    SpeciesService.prototype.getSpecies = function () {
        return this.http.get(this.API_URL + 'api/species').map(function (response) { return response.json(); });
    };
    // getByUserId(id: number): Observable<Contract[]> {
    //     return this.http.get(this.API_URL + 'api/animals/GetByUserId/' + id).map((response: Response) =>  response.json());
    // }
    //
    // getByUserIdForMeterData(id: number): Observable<MeterReadingDataDTO[]> {
    //     return this.http.get(this.API_URL + 'GetByUserIdForMeterData/' + id).map((response: Response) => response.json());
    // }
    //
    // addNewReading(reading: Reading) {
    //     return this.http.post(this.API_URL + 'AddNewReading', reading, this.jwt()).map((response: Response) => response.json());
    // }
    // private helper methods
    SpeciesService.prototype.jwt = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    SpeciesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SpeciesService);
    return SpeciesService;
}());
exports.SpeciesService = SpeciesService;
//# sourceMappingURL=species.service.js.map