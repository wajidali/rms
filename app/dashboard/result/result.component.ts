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
    public counties = [];
    // public data = [
    //     {id:0, name:"Harju", match: 30},
    //     {id:1, name:"Hiiu", match: 30},
    //     {id:2, name:"Ida-Viru", match: 30},
    //     {id:3, name:"Jõgeva", match: 30},
    //     {id:4, name:"Järva" , match: 30},
    //     {id:5, name:"Lääne" , match: 30},
    //     {id:6, name:"Lääne-Viru", match: 30},
    //     {id:7, name:"Põlva", match: 30},
    //     {id:8, name:"Pärnu", match: 30},
    //     {id:9, name:"Rapla", match: 30},
    //     {id:10, name:"Saare", match: 30},
    //     {id:11, name:"Tartu", match: 30},
    //     {id:12, name:"Valga", match: 30},
    //     {id:13, name:"Viljandi", match: 30},
    //     {id:14, name:"Võru", match: 30},
    // ]
    constructor(private http: Http){

    }

    ngOnInit(){

        this.returnMap();
        this.returnJobOffers();
        // this.counties = [
        //     {id:0, name:"Harju"},
        //     {id:1, name:"Hiiu"},
        //     {id:2, name:"Ida-Viru"},
        //     {id:3, name:"Jõgeva"},
        //     {id:4, name:"Järva"},
        //     {id:5, name:"Lääne"},
        //     {id:6, name:"Lääne-Viru"},
        //     {id:7, name:"Põlva"},
        //     {id:8, name:"Pärnu"},
        //     {id:9, name:"Rapla"},
        //     {id:10, name:"Saare"},
        //     {id:11, name:"Tartu"},
        //     {id:12, name:"Valga"},
        //     {id:13, name:"Viljandi"},
        //     {id:14, name:"Võru"},
        // ]
        // setTimeout(function() {
        //     for(let county of this.counties ){
        //         this.setMatch(county, 50)
        //     }
        // }.bind(this), 1000);
    }
    setMatch(county, num){
        let id = $('#'+county.name)
        id.css("width", num+"%")
    }

    returnMap(){
            $.get('https://test.n8rth.online/api/aggr/offers/county', function(data) {
                console.log( AmCharts )
                console.log( TweenMax )
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
                    map.dataGenerated = true;
                    map.validateNow();
                }
            });

    }

    returnJobOffers(){
        $.get('https://test.n8rth.online/api/offers?isco=veoautojuht', function(data) {
            $('#numberOfJobOffers').append("Job Offeres: " + data.length)
        })
    }


}
