import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';

declare var AmCharts:any;
declare var TweenMax:any;
declare var $:any;
@Component({
    selector: 'result-cmp',
    moduleId: module.id,
    templateUrl: 'result.component.html'
})

export class ResultComponent implements OnInit{
    totalOffers;
    top5=[];
    constructor(private http: Http){
    }

    ngOnInit(){
        this.returnMap();
        // this.returnJobOffers();
        this.returnTotalJobOffers();
        this.returnTop5Matches();
    }
    setMatch(county, num){
        let id = $('#'+county.name)
        id.css("width", num+"%")
    }

    returnMap(){
        $.get('https://test.n8rth.online/api/aggr/offers/county', function(data) {

                let map;
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
                $.each(data, function(i, e) {
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
                        $.each(data, function(i2, e) {
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
    }
    returnTotalJobOffers(){
        $.get('https://test.n8rth.online/api/aggr/offers/county', function(data) {
            let total = 0
            for (let obj of data){
                total += obj.count
            }
            this.totalOffers = total
        }.bind(this))
    }
    returnTop5Matches(){
        $.get('https://test.n8rth.online/api/offers?isco=veoautojuht', function(data) {
            let arrMode = [];
            let mapping = {};
            let counter = 0;

            for(let obj of data){
                arrMode.push(obj.location.county)
            }
            for(let i = 0;i < arrMode.length; i++){
                if (!mapping[arrMode[i]]) mapping[arrMode[i]] = 0;
                mapping[arrMode[i]] += 1
            }

            let keys = Object.keys(mapping)
            for(let i = 0;i < 5; i++){
                this.top5[i] = keys[i]
            }
            console.log(this.top5)
        }.bind(this))
    }
}
