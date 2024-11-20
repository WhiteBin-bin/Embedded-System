'use strict';

$(document).ready(function () {
    var data = [];
    var queryCnt = 100;

    function getData() {
        $.ajax({
            url: "/sensor/getSensor/" + queryCnt, // 하나의 요청에서 모든 데이터 가져오기
            type: "GET",
            dataType: "json",
            success: (res) => {
                // res는 IR:0, Light:1, TILT:0, But:0 형식으로 가정
                data = res;
                updateCharts(data); // 데이터가 성공적으로 받아지면 차트 업데이트
            },
            error: (error) => {
                console.log(error);
            }
        });
    }

    function updateCharts(data) {
        // 데이터를 두 개씩 묶어서 {'IR': 0, 'Light': 1, ...} 형태로 변환
        var sensorData = {};
        var pairs = data.split(", ");
        for (var i = 0; i < pairs.length; i++) {
            var keyValue = pairs[i].split(":");
            sensorData[keyValue[0]] = parseFloat(keyValue[1]);
        }
        console.log(sensorData);
        // 각 센서 데이터에 맞게 차트를 업데이트
        updateIRChart(sensorData['IR']);
        updateTempChart(sensorData['TILT']);
        updateLightChart(sensorData['Light']);
    }

    function updateIRChart(irValue) {
        var irData = [[0, irValue]]; // IR 데이터
        var irOptions = {
            colors: ["#30323c"],
            series: {
                shadowSize: 0,
                lines: {
                    show: true,
                    fill: true,
                    fillColor: { colors: [{ opacity: 0.5 }, { opacity: 0.5 }] }
                }
            },
            yaxis: { min: 0, max: 1, tickSize: 1 },
            xaxis: { show: false },
            points: { show: true },
            grid: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#fff', hoverable: true }
        };

        var plot = $.plot($("#realtime1"), [irData], irOptions);
        plot.draw();
    }

    function updateTempChart(tempValue) {
        var tempData = [[0, tempValue]]; // TILT 데이터 (온도와 비슷한 형태로 가정)
        var tempOptions = {
            colors: ["#30323c"],
            series: {
                shadowSize: 0,
                lines: {
                    show: true,
                    fill: true,
                    fillColor: { colors: [{ opacity: 0.5 }, { opacity: 0.5 }] }
                }
            },
            yaxis: {
                min: 0,
                max: 180,
                tickSize: 90,
                tickFormatter: function (val, axis) {
                    return val + ' °C';
                }
            },
            xaxis: { show: true, min: 0, max: 1, tickSize : 1 },
            points: { show:true },
            grid:{backgroundColor:'#fff',borderWidth :1,borderColor:'#fff',hoverable:true}
        };

        var plot = $.plot($("#realtime2"), [tempData], tempOptions);
        plot.draw();
    }

    function updateLightChart(lightValue) {
        var lightData = [[0, lightValue]]; // Light 데이터
        var lightOptions = {
            colors:["#30323c"],
            series:{
                shadowSize :0,
                lines:{
                    show:true,
                    fill:true,
                    fillColor:{colors:[{opacity:.5},{opacity:.5}]}
                 }
             },
             yaxis:{
                 min :400,
                 max :1000,
                 tickSize :200,
                 tickFormatter:function(val){return val+' Lux';}
              },
              xaxis:{show:true,min :0,max :1,tickSize :1},
              points:{show:true},
              grid:{backgroundColor:'#fff',borderWidth :1,borderColor:'#fff',hoverable:true}
         };

         var plot = $.plot($("#realtime3"), [lightData], lightOptions);
         plot.draw();
     }

    // 주기적으로 데이터를 가져와서 업데이트
    function update() {
        getData(); // 데이터를 가져오고 차트를 업데이트
        setTimeout(update, 1000); // 매 초마다 업데이트
    }

    update(); // 첫 업데이트 시작
});