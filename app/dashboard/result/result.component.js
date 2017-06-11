"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ResultComponent = (function () {
    function ResultComponent() {
        this.top5 = [];
        this.downloadButtonVisible = false;
        this.currentCounty = { name: "Estonia", jobs: this.totalOffers };
    }
    ResultComponent.prototype.ngOnInit = function () {
        //console.log(jQCloud)
        var _this = this;
        setTimeout(function () {
            _this.setTotalJobs();
            _this.returnMap();
        }, 250);
        // this.returnTop5Field();
        // this.returnTop5Matches();
    };
    ResultComponent.prototype.ngAfterViewInit = function () {
        this.returnPie();
    };
    ResultComponent.prototype.setMatch = function (county, num) {
        var id = $('#' + county.name);
        id.css("width", num + "%");
    };
    ResultComponent.prototype.returnMap = function () {
        $.get('https://settlebetter.eu/api/profile/593d0288c35008000f63216e', function (data) {
            var context = this;
            var profile = data.data.profile;
            var suggestions = data.data.suggestions;
            var county = suggestions.group["location.county"];
            var map;
            var keys = Object.keys(suggestions.group["location.county"]);
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
            for (var i = 0; i < keys.length; i++) {
                str += keys[i] + "\n";
            }
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                total += county[key];
                max = Math.max(max, county[key]);
            }
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
                    $.each(keys, function (i2, e) {
                        if (e != mapping[c] || !county[e]) {
                            return;
                        }
                        map.dataProvider.areas[i].value = county[e];
                    });
                    str += map.dataProvider.areas[i].enTitle + "\n";
                }
                //test
                map.autoZoomReal = false;
                map.autoResize = false;
                map.mouseEnabled = false;
                map.balloon.enabled = false;
                map.dataGenerated = true;
                map.validateNow();
                map.addListener("clickMapObject", function (event) {
                    context.downloadButtonVisible = true;
                    context.currentCounty.name = event.mapObject.enTitle;
                    context.currentCounty.jobs = event.mapObject.value;
                    var nn = mapping[event.mapObject.enTitle];
                    var url = 'https://settlebetter.eu/api/profile/593d0288c35008000f63216e?location.county=' + encodeURIComponent(nn);
                    context.filteredURL = url;
                    context.returnTop5Field();
                });
            }
        }.bind(this));
    };
    ResultComponent.prototype.setTotalJobs = function () {
        $.get('https://settlebetter.eu/api/profile/593d0288c35008000f63216e', function (data) {
            console.log(data);
            this.currentCounty.jobs = data.data.suggestions.count;
        }.bind(this));
    };
    ResultComponent.prototype.returnTop5Matches = function () {
        $.get('https://test.n8rth.online/api/offers?isco=veoautojuht', function (data) {
            var arrMode = [];
            var mapping = {};
            var counter = 0;
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var obj = data_1[_i];
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
    ResultComponent.prototype.returnTop5Field = function () {
        $.get(this.filteredURL, function (data) {
            var isco = data.data.suggestions.group.isco;
            var jobName = Object.keys(isco);
            var arrMode = [];
            var mapping = {};
            var counter = 0;
            var array = [];
            for (var _i = 0, jobName_1 = jobName; _i < jobName_1.length; _i++) {
                var name_1 = jobName_1[_i];
                array.push({ text: name_1, weight: isco.name });
            }
            $('#tagCloud').jQCloud(array);
            // for(let obj of isco){
            //     arrMode.push(obj)
            // }
            // for(let i = 0;i < arrMode.length; i++){
            //     if (!mapping[arrMode[i]]) mapping[arrMode[i]] = 0;
            //     mapping[arrMode[i]] += 1
            // }
            console.log(mapping);
            // console.log(isco);
            // console.log(jobName)
        }.bind(this));
    };
    ResultComponent.prototype.returnPie = function () {
        // $.get(this.filteredURL, function(data) {
        var chart = AmCharts.makeChart("tagCloud", {
            "type": "pie",
            "theme": "light",
            "innerRadius": "40%",
            "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
            "dataProvider": [{
                    "country": "Lithuania",
                    "litres": 501.9
                }, {
                    "country": "Czech Republic",
                    "litres": 301.9
                }, {
                    "country": "Ireland",
                    "litres": 201.1
                }, {
                    "country": "Germany",
                    "litres": 165.8
                }, {
                    "country": "Australia",
                    "litres": 139.9
                }, {
                    "country": "Austria",
                    "litres": 128.3
                }],
            "balloonText": "[[value]]",
            "valueField": "litres",
            "titleField": "country",
            "balloon": {
                "drop": true,
                "adjustBorderColor": false,
                "color": "#FFFFFF",
                "fontSize": 16
            },
            "export": {
                "enabled": true
            }
        });
        // }.bind(this))
    };
    return ResultComponent;
}());
ResultComponent = __decorate([
    core_1.Component({
        selector: 'result-cmp',
        moduleId: module.id,
        templateUrl: 'result.component.html'
    })
], ResultComponent);
exports.ResultComponent = ResultComponent;
//# sourceMappingURL=result.component.js.map