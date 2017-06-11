import { Component, OnInit} from '@angular/core';

declare var AmCharts:any;
declare var TweenMax:any;

declare var $:any;
declare var jQCloud:any;
@Component({
    selector: 'result-cmp',
    moduleId: module.id,
    templateUrl: 'result.component.html'
})

export class ResultComponent implements OnInit{
    totalOffers;
    top5=[];
    downloadButtonVisible= false;
    currentCounty = {name: "Estonia", jobs: this.totalOffers};
    filteredURL;

    ngOnInit(){
        //console.log(jQCloud)

        setTimeout(()=>{
            this.setTotalJobs();
            this.returnMap();
        },250)


        // this.returnTop5Field();
        // this.returnTop5Matches();
    }
    ngAfterViewInit(){
        this.returnPie();   
    }
    setMatch(county, num){

        let id = $('#'+county.name)
        id.css("width", num+"%")
    }

    returnMap(){
        $.get('https://settlebetter.eu/api/profile/593d0288c35008000f63216e', function(data) {

                var context = this
                let profile = data.data.profile
                let suggestions = data.data.suggestions
                let county = suggestions.group["location.county"]

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

                        $.each(keys, function(i2, e) {
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

                    map.addListener("clickMapObject", function(event){
                        context.downloadButtonVisible =true;

                        context.currentCounty.name = event.mapObject.enTitle;
                        context.currentCounty.jobs = event.mapObject.value;
                        var nn = mapping[event.mapObject.enTitle]

                        let url = 'https://settlebetter.eu/api/profile/593d0288c35008000f63216e?location.county='+ encodeURIComponent(nn)
                        context.filteredURL = url
                        context.returnTop5Field();
                    });
                }

            }.bind(this));
    }

    setTotalJobs(){
        $.get('https://settlebetter.eu/api/profile/593d0288c35008000f63216e', function(data) {
            console.log(data);
            this.currentCounty.jobs = data.data.suggestions.count
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
    returnTop5Field(){

        $.get(this.filteredURL, function(data) {

            let isco = data.data.suggestions.group.isco
            let jobName = Object.keys(isco)

            let arrMode = [];
            let mapping = {};
            let counter = 0;

            var array = []


            for(let name of jobName){
                array.push({text: name, weight: isco.name})
            }

            $('#tagCloud').jQCloud(array);

            // for(let obj of isco){
            //     arrMode.push(obj)
            // }
            // for(let i = 0;i < arrMode.length; i++){
            //     if (!mapping[arrMode[i]]) mapping[arrMode[i]] = 0;
            //     mapping[arrMode[i]] += 1
            // }
            console.log(mapping)


            // console.log(isco);
            // console.log(jobName)

        }.bind(this))
    }

    returnPie(){
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
    }
}
