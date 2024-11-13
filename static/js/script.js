'use strict';

$(document).ready(function () {
    var data = [];
    var queryCnt = 100;

    function getData() {
        if (data.length > 0)
            data = data.slice(1);

        $.ajax({
            url: "/sensor/getirDetect/" + queryCnt,
            type: "GET",
            dataType: "json",
            success: (res) => {
                data = res;

            },
            error: (error) => {
                console.log(error);
            }
        });

        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]['value']])
        }
        return res;
    }
    var options = {
        colors: ["#30323c"], // 차트 선 색상을 #30323c로 변경
        series: {
            shadowSize: 0,
            lines: {
                show: true,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.5
                    }, {
                        opacity: 0.5
                    }]
                }
            }
        },
        yaxis: {
            min: 0,
            max: 1,
            tickSize: 1
        },
        xaxis: {
            show: false,
        },
        points: {
            show: true
        },
        grid: {
            backgroundColor: '#fff', // 배경색을 하얀색으로 유지
            borderWidth: 1,
            borderColor: '#fff',
            hoverable: true
        }

    };
    // up control widget
    var updateInterval = 100;
    var plot = $.plot($("#realtime"), [getData()], options);

    function update() {
        plot.setData([getData()]);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        setTimeout(update, updateInterval);
    }
    update();   
});
$(document).ready(function () {
    var data = [];
    var queryCnt = 100;

    function getData() {
        if (data.length > 0)
            data = data.slice(1);

        $.ajax({
            url: "/sensor/getTemp/" + queryCnt,
            type: "GET",
            dataType: "json",
            success: (res) => {
                data = res;

            },
            error: (error) => {
                console.log(error);
            }
        });

        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]['value']])
        }
        return res;
    }
    var options = {
        colors: ["#30323c"], // 차트 선 색상을 #30323c로 변경
        series: {
            shadowSize: 0,
            lines: {
                show: true,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.5
                    }, {
                        opacity: 0.5
                    }]
                }
            }
        },
        yaxis: {
            min: 0,
            max: 180,
            tickSize: 90,
            tickFormatter: function(val, axis) {
                return val + ' °C';
            }
        },
        xaxis: {
            show: true,
            min: 0,
            max: 1,
            tickSize : 1
        },
        points: {
            show: true
        },
        grid: {
            backgroundColor: '#fff', // 배경색을 하얀색으로 유지
            borderWidth: 1,
            borderColor: '#fff',
            hoverable: true
        }

    };
    // up control widget
    var updateInterval = 500;
    var plot = $.plot($("#realtime1"), [getData()], options);

    function update() {
        plot.setData([getData()]);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        setTimeout(update, updateInterval);
    }
    update();   
});
$(document).ready(function () {
    var data = [];
    var queryCnt = 100;

    function getData() {
        if (data.length > 0)
            data = data.slice(1);

        $.ajax({
            url: "/sensor/getLightD/" + queryCnt,
            type: "GET",
            dataType: "json",
            success: (res) => {
                data = res;

            },
            error: (error) => {
                console.log(error);
            }
        });

        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]['value']])
        }
        return res;
    }
    var options = {
        colors: ["#30323c"], // 차트 선 색상을 #30323c로 변경
        series: {
            shadowSize: 0,
            lines: {
                show: true,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.5
                    }, {
                        opacity: 0.5
                    }]
                }
            }
        },
        yaxis: {
            min: 400,
            max: 1000,
            tickSize: 200,
            tickFormatter: function(val, axis) {
                return val + ' Lux';
            }
        },
        xaxis: {
            show: true,
            min: 0,
            max: 1,
            tickSize : 1
        },
        points: {
            show: true
        },
        grid: {
            backgroundColor: '#fff', // 배경색을 하얀색으로 유지
            borderWidth: 1,
            borderColor: '#fff',
            hoverable: true
        }

    };
    // up control widget
    var updateInterval = 500;
    var plot = $.plot($("#realtime2"), [getData()], options);

    function update() {
        plot.setData([getData()]);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        setTimeout(update, updateInterval);
    }
    update();   
});