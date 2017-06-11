import { Component, OnInit} from '@angular/core';

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
    currentCounty = {name: "Estonia", jobs: this.totalOffers};

    ngOnInit(){
        this.setTotalJobs();
        this.returnMap();
        this.returnTop5Matches();
    }
    setMatch(county, num){
        let id = $('#'+county.name)
        id.css("width", num+"%")
    }

    returnMap(){
        $.get('https://settlebetter.eu/api/profile/593d0288c35008000f63216e', function(data) {
        // $.get('https://test.n8rth.online/api/aggr/offers/county', function(data) {

                var context = this

                let profile = data.data.profile
                let suggestions = data.data.suggestions

                let map;
                var keys = Object.keys(suggestions.group["location.county"])
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
                let county = suggestions.group["location.county"]

                for(let i = 0;i < keys.length; i++){
                    str += keys[i]  + "\n"
                }

                for (let key of keys){
                    total += county[key]
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
                        // console.log(mapping[c])
                        // console.log(keys[i])
                        // console.log(suggestions.group["location.county"][keys[i]])
                        //
                        // map.dataProvider.areas[i].value = 0;
                        //
                        // if (keys[i] != mapping[c] || !suggestions.group["location.county"][keys[i]]) {
                        //     return;
                        // }
                        // map.dataProvider.areas[i].value = suggestions.group["location.county"][keys[i]];
                        // $.each(data, function(i2, e) {
                        //     // console.log(keys[num])
                        //     // console.log(mapping[c])
                        //     // console.log(e.suggestions.group["location.county"]._id)
                        //
                        //
                        //     num ++
                        // });

                        $.each(keys, function(i2, e) {
                            console.log(suggestions[e])
                            if (e != mapping[c] || !e.count) {
                                return;
                            }
                            map.dataProvider.areas[i].value = e.count;
                        });
                        str += map.dataProvider.areas[i].enTitle + "\n";
                    }
                    //test
                    map.autoZoomReal = false;
                    map.autoResize = false;
                    map.mouseEnabled = false;
                    map.balloon.enabled = false;
                    console.log(map);

                    map.dataGenerated = true;
                    map.validateNow();

                    map.addListener("clickMapObject", function(event){
                        console.log('enTitle', event.mapObject);
                        context.currentCounty.name = event.mapObject.enTitle;
                        context.currentCounty.jobs = event.mapObject.value;
                    });
                }
            }.bind(this));
    }

    // returnMap(){
    // $.get('https://test.n8rth.online/api/aggr/offers/county', function(data) {
    //         var context = this
    //         let map;
    //         var mapping = {
    //             // map => tootukassa
    //             "Viljandimaa": "Viljandi maakond",
    //             "Põlvamaa": "Põlva maakond",
    //             "Ida-Virumaa": "Ida-Viru maakond",
    //             "Tartumaa": "Tartu maakond",
    //             "Järvamaa": "Järva maakond",
    //             "Võrumaa": "Võru maakond",
    //             "Pärnumaa": "Pärnu maakond",
    //             "Lääne-Virumaa": "Lääne-Viru maakond",
    //             "Hiiumaa": "Hiiu maakond",
    //             "Läänemaa": "Lääne maakond",
    //             "Valgamaa": "Valga maakond",
    //             "Jõgevamaa": "Jõgeva maakond",
    //             "Raplamaa": "Rapla maakond",
    //             "Saaremaa": "Saare maakond",
    //             "Harjumaa": "Harju maakond"
    //         };
    //
    //         var total = 0;
    //         var max = 0;
    //         var str = '';
    //         var listValues = {};
    //         $.each(data, function(i, e) {
    //             if (e._id.county == 'unknown') {
    //                 return;
    //             }
    //             max = Math.max(max, e.count);
    //             total += e.count;
    //             str += e._id.county + "\n";
    //         });
    //         // calculate which map to be used
    //         var currentMap = "estoniaHigh";
    //         var titles = {
    //             "text": "Estonia"
    //         };
    //         AmCharts.makeChart("chartdiv", {
    //                 "type": "map",
    //                 "theme": "light",
    //                 "colorSteps": 10,
    //                 "dataProvider": {
    //                     "mapURL": "/assets/img/" + currentMap + ".svg",
    //                     "getAreasFromMap": true,
    //                     "zoomLevel": 0.9,
    //                     "areas": []
    //                 },
    //                 "areasSettings": {
    //                     "autoZoom": true,
    //                     "balloonText": "[[title]]: <strong>[[value]]</strong>"
    //                 },
    //                 "zoomControl": {
    //                     "minZoomLevel": 0.9
    //                 },
    //                 "titles": titles,
    //                 "listeners": [{
    //                     "event": "init",
    //                     "method": updateHeatmap
    //                 }]
    //         });
    //         function updateHeatmap(event) {
    //             var map = event.chart;
    //             if (map.dataGenerated)
    //                 return;
    //             if (map.dataProvider.areas.length === 0) {
    //                 setTimeout(updateHeatmap, 100);
    //                 return;
    //             }
    //             var str = '';
    //             for (var i = 0; i < map.dataProvider.areas.length; i++) {
    //                 var c = map.dataProvider.areas[i].enTitle;
    //                 map.dataProvider.areas[i].value = 0;
    //                 $.each(data, function(i2, e) {
    //                     console.log(e)
    //                     if (e._id.county != mapping[c] || !e.count) {
    //                         return;
    //                     }
    //                     map.dataProvider.areas[i].value = e.count;
    //                 });
    //
    //                 str += map.dataProvider.areas[i].enTitle + "\n";
    //             }
    //             //test
    //             map.autoZoomReal = false;
    //             map.autoResize = false;
    //             map.mouseEnabled = false;
    //             map.balloon.enabled = false;
    //             console.log(map);
    //
    //             map.dataGenerated = true;
    //             map.validateNow();
    //
    //             map.addListener("clickMapObject", function(event){
    //                 console.log('enTitle', event.mapObject);
    //                 context.currentCounty.name = event.mapObject.enTitle;
    //                 context.currentCounty.jobs = event.mapObject.value;
    //             });
    //         }
    //     }.bind(this));
    // }

    setTotalJobs(){
        $.get('https://settlebetter.eu/api/profile/593d0288c35008000f63216e', function(data) {

            console.log(data);
            this.currentCounty.jobs = data.data.suggestions.count
        }.bind(this))

        // $.get('https://test.n8rth.online/api/aggr/offers/county', function(data) {
        //     let total = 0
        //     for (let obj of data){
        //         total += obj.count
        //     }
        //     this.currentCounty.jobs = total
        // }.bind(this))
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
