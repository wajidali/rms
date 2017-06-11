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
        this.currentCounty = { name: "Estonia", jobs: this.totalOffers };
        // returnPie(){
        //     $.get(this.filteredURL, function(data) {
        //         var context = this
        //         let isco = data.data.suggestions.group.isco
        //         let jobName = Object.keys(isco)
        //         let newData = []
        //
        //         for (let el of isco){
        //             console.log(el)
        //         }
        //
        //         let chart = AmCharts.makeChart("tagCloud", {
        //             "type": "pie",
        //             "theme": "light",
        //             "innerRadius": "40%",
        //             "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
        //             "dataProvider": [{
        //                     "country": "Lithuania",
        //                     "litres": 501.9
        //                 }, {
        //                     "country": "Czech Republic",
        //                     "litres": 301.9
        //                 }, {
        //                     "country": "Ireland",
        //                     "litres": 201.1
        //                 }, {
        //                     "country": "Germany",
        //                     "litres": 165.8
        //                 }, {
        //                     "country": "Australia",
        //                     "litres": 139.9
        //                 }, {
        //                     "country": "Austria",
        //                     "litres": 128.3
        //                 }],
        //             "balloonText": "[[value]]",
        //             "valueField": "numbers",
        //             "titleField": "job",
        //             "balloon": {
        //                 "drop": true,
        //                 "adjustBorderColor": false,
        //                 "color": "#FFFFFF",
        //                 "fontSize": 16
        //             },
        //             // "listeners": [{
        //             //     "event": "init",
        //             //     "method": updateHeatmap
        //             // }]
        //         });
        // function updateHeatmap(event) {
        //
        //     let innstance = event.chart
        //     innstance.dataProvider = {
        //         job: "test",
        //         numbers: 4
        //     }
        //     console.log(innstance.dataProvider)
        // }
        //     }.bind(this))
        // }
        // setDataProvider(arr){
        //     for(let el of arr){
        //         this.chart.dataProvider.push({job: el.job, numbers: el.numbers})
        //     }
        // }
        //
        // returnTop5Matches(){
        //     $.get('https://test.n8rth.online/api/offers?isco=veoautojuht', function(data) {
        //         let arrMode = [];
        //         let mapping = {};
        //         let counter = 0;
        //
        //         for(let obj of data){
        //             arrMode.push(obj.location.county)
        //         }
        //         for(let i = 0;i < arrMode.length; i++){
        //             if (!mapping[arrMode[i]]) mapping[arrMode[i]] = 0;
        //             mapping[arrMode[i]] += 1
        //         }
        //         let keys = Object.keys(mapping)
        //         for(let i = 0;i < 5; i++){
        //             this.top5[i] = keys[i]
        //         }
        //         console.log(this.top5)
        //     }.bind(this))
        // }
        //
        // returnTop5Field(){
        //     $.get(this.filteredURL, function(data) {
        //
        //         let isco = data.data.suggestions.group.isco
        //         let jobName = Object.keys(isco)
        //
        //         let arrMode = [];
        //         let mapping = {};
        //         let counter = 0;
        //
        //         var array = []
        //
        //
        //         for(let name of jobName){
        //             array.push({text: name, weight: isco.name})
        //         }
        //
        //         $('#tagCloud').jQCloud(array);
        //
        //         // for(let obj of isco){
        //         //     arrMode.push(obj)
        //         // }
        //         // for(let i = 0;i < arrMode.length; i++){
        //         //     if (!mapping[arrMode[i]]) mapping[arrMode[i]] = 0;
        //         //     mapping[arrMode[i]] += 1
        //         // }
        //         console.log(mapping)
        //
        //
        //         // console.log(isco);
        //         // console.log(jobName)
        //
        //     }.bind(this))
        // }
        // setMatch(county, num){
        //     let id = $('#'+county.name)
        //     id.css("width", num+"%")
        // }
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.setTotalJobs();
        this.returnMap();
    };
    ResultComponent.prototype.ngAfterViewInit = function () {
        // this.returnPie();
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
                    context.currentCounty.name = event.mapObject.enTitle;
                    context.currentCounty.jobs = event.mapObject.value || 3;
                    var nn = mapping[event.mapObject.enTitle];
                    var url = 'https://settlebetter.eu/api/profile/593d0288c35008000f63216e?location.county=' + encodeURIComponent(nn);
                    context.filteredURL = url;
                    context.returnPie();
                });
            }
            $('.amcharts-chart-div > a').css('visible', 'hidden');
        }.bind(this));
    };
    ResultComponent.prototype.setTotalJobs = function () {
        $.get('https://settlebetter.eu/api/profile/593d0288c35008000f63216e', function (data) {
            console.log(data);
            this.currentCounty.jobs = data.data.suggestions.count;
        }.bind(this));
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