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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var ResultComponent = (function () {
    function ResultComponent(http) {
        this.http = http;
        this.top5 = [];
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.returnMap();
        // this.returnJobOffers();
        this.returnTotalJobOffers();
        this.returnTop5Matches();
    };
    ResultComponent.prototype.setMatch = function (county, num) {
        var id = $('#' + county.name);
        id.css("width", num + "%");
    };
    ResultComponent.prototype.returnMap = function () {
        $.get('https://test.n8rth.online/api/aggr/offers/county', function (data) {
            var map;
            var mapping = {
                // map => tootukassa
                "Viljandimaa": "Viljandi maakond",
                "Põlvamaa": "Põlva maakond",
                "Ida-Virumaa": "Ida-Viru maakond",
                "Tartumaa": "Tartu maakond",
                "Järvamaa": "Järva maakond",
                "Võrumaa": "Võru maakond",
                "Pärnumaa": "Pärnu maakond",
                "Lääne-Virumaa": "Lääne-Viru maakond",
                "Hiiumaa": "Hiiu maakond",
                "Läänemaa": "Lääne maakond",
                "Valgamaa": "Valga maakond",
                "Jõgevamaa": "Jõgeva maakond",
                "Raplamaa": "Rapla maakond",
                "Saaremaa": "Saare maakond",
                "Harjumaa": "Harju maakond"
            };
            var total = 0;
            var max = 0;
            var str = '';
            var listValues = {};
            $.each(data, function (i, e) {
                if (e._id.county == 'unknown') {
                    return;
                }
                max = Math.max(max, e.count);
                total += e.count;
                str += e._id.county + "\n";
            });
            // calculate which map to be used
            var currentMap = "estoniaHigh";
            var titles = {
                "text": "Estonia"
            };
            AmCharts.makeChart("chartdiv", {
                "type": "map",
                "theme": "light",
                "colorSteps": 10,
                "dataProvider": {
                    "mapURL": "/assets/img/" + currentMap + ".svg",
                    "getAreasFromMap": true,
                    "zoomLevel": 0.9,
                    "areas": []
                },
                "areasSettings": {
                    "autoZoom": true,
                    "balloonText": "[[title]]: <strong>[[value]]</strong>"
                },
                "zoomControl": {
                    "minZoomLevel": 0.9
                },
                "titles": titles,
                "listeners": [{
                        "event": "init",
                        "method": updateHeatmap
                    }]
            });
            function updateHeatmap(event) {
                var map = event.chart;
                if (map.dataGenerated)
                    return;
                if (map.dataProvider.areas.length === 0) {
                    setTimeout(updateHeatmap, 100);
                    return;
                }
                var str = '';
                for (var i = 0; i < map.dataProvider.areas.length; i++) {
                    var c = map.dataProvider.areas[i].enTitle;
                    map.dataProvider.areas[i].value = 0;
                    $.each(data, function (i2, e) {
                        if (e._id.county != mapping[c] || !e.count) {
                            return;
                        }
                        map.dataProvider.areas[i].value = e.count;
                    });
                    str += map.dataProvider.areas[i].enTitle + "\n";
                }
                map.dataGenerated = true;
                map.validateNow();
            }
        });
    };
    ResultComponent.prototype.returnTotalJobOffers = function () {
        $.get('https://test.n8rth.online/api/aggr/offers/county', function (data) {
            var total = 0;
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var obj = data_1[_i];
                total += obj.count;
            }
            this.totalOffers = total;
        }.bind(this));
    };
    ResultComponent.prototype.returnTop5Matches = function () {
        $.get('https://test.n8rth.online/api/offers?isco=veoautojuht', function (data) {
            var arrMode = [];
            var mapping = {};
            var counter = 0;
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var obj = data_2[_i];
                arrMode.push(obj.location.county);
            }
            for (var i = 0; i < arrMode.length; i++) {
                if (!mapping[arrMode[i]])
                    mapping[arrMode[i]] = 0;
                mapping[arrMode[i]] += 1;
            }
            var keys = Object.keys(mapping);
            for (var i = 0; i < 5; i++) {
                this.top5[i] = keys[i];
            }
            console.log(this.top5);
        }.bind(this));
    };
    ResultComponent = __decorate([
        core_1.Component({
            selector: 'result-cmp',
            moduleId: module.id,
            templateUrl: 'result.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ResultComponent);
    return ResultComponent;
}());
exports.ResultComponent = ResultComponent;
//# sourceMappingURL=result.component.js.map