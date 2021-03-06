/**
 * Created by javdev on 3/14/2017.
 */
$(function(){

    // Morris line chart

    Morris.Line({
        element: 'line-example',
        data: [
            { y: '2009', a: 15,  b: 5 },
            { y: '2010', a: 20,  b: 10 },
            { y: '2011', a: 35,  b: 25 },
            { y: '2012', a: 40, b: 30 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors:['#16a085','#FF0066']
    });

    // Morris line area chart

    Morris.Area({
        element: 'line-area-example',
        data: [
            { y: '2009', a: 10,  b: 3 },
            { y: '2010', a: 14,  b: 5 },
            { y: '2011', a: 8,  b: 2 },
            { y: '2012', a: 20, b: 15 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors:['#a2d200','#d2d2d2'],
        lineWidth:'0',
        grid: false,
        fillOpacity:'0.5'
    });

    // Morris bar chart

    Morris.Bar({
        element: 'bar-example',
        data: [
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        barColors:['#ff4a43','#1693A5']
    });

    // Morris donut chart

    Morris.Donut({
        element: 'donut-example',
        data: [
            {label: "Use in Summer", value: 12},
            {label: "use in winter", value: 30},
            {label: "use in spring", value: 20}
        ],
        colors: ['#00a3d8', '#2fbbe8', '#72cae7']
    });

    // Sparkline Line Chart
    $('#sparkline01').sparkline([15,16,18,17,16,18,25,26,23], {
        type: 'line',
        width: '100%',
        height:'250px',
        fillColor: 'rgba(34, 190, 239, .3)',
        lineColor: 'rgba(34, 190, 239, .5)',
        lineWidth: 2,
        spotRadius: 5,
        valueSpots:[5,6,8,7,6,8,5,4,7],
        minSpotColor: '#eaf9fe',
        maxSpotColor: '#00a3d8',
        highlightSpotColor: '#00a3d8',
        highlightLineColor: '#bec6ca',
        normalRangeMin: 0
    });
    $('#sparkline01').sparkline([1,2,1,3,1,2,4,1,3], {
        type: 'line',
        composite: true,
        width: '100%',
        height:'250px',
        fillColor: 'rgba(255, 74, 67, .6)',
        lineColor: 'rgba(255, 74, 67, .8)',
        lineWidth: 2,
        minSpotColor: '#ffeced',
        maxSpotColor: '#d90200',
        highlightSpotColor: '#d90200',
        highlightLineColor: '#bec6ca',
        spotRadius: 5,
        valueSpots:[2,3,4,3,1,2,4,1,3],
        normalRangeMin: 0
    });

    // Sparkline Bar Chart

    var $el = $('#sparkline02');

    var values = $el.data('values').split(',').map(parseFloat);
    var type = $el.data('type') || 'line' ;
    var height = $el.data('height') || 'auto';

    var parentWidth = $el.parent().width();
    var valueCount = values.length;
    var barSpacing = 5;

    var barWidth = Math.round((parentWidth - ( valueCount - 1 ) * barSpacing ) / valueCount);

    $el.sparkline(values, {
        width:'100%',
        type: type,
        height: height,
        barWidth: barWidth,
        barSpacing: barSpacing,
        barColor: '#16a085',
        negBarColor: '#FF0066'
    });

    // Sparkline Pie Chart

    $('#sparkline03').sparkline([5,10,20,15 ], {
        type: 'pie',
        width: 'auto',
        height: '250px',
        sliceColors: ['#22beef','#a2d200','#ffc100','#ff4a43']
    });

    // Line Chart

    var bars = false;
    var lines = true;
    var pie = false;

    var initializeFlot = function(){

        var el = $('table.flot-chart');

        el.each(function(){
            var data = $(this).data();
            var colors = [];
            var gridColor = data.tickColor || 'rgba(0,0,0,.1)';

            $(this).find('thead th:not(:first)').each(function() {
                colors.push($(this).css('color'));
            });

            if(data.type){
                bars = data.type.indexOf('bars') != -1;
                lines = data.type.indexOf('lines') != -1;
                pie = data.type.indexOf('pie') != -1;
            }

            $(this).graphTable({
                    series: 'columns',
                    position: 'replace',
                    colors: colors,
                    width: data.width,
                    height: data.height
                },
                {
                    series: {
                        stack: data.stack,
                        pie: {
                            show: pie,
                            innerRadius: data.innerRadius || 0,
                            label:{
                                show: data.pieLabel=='show' ? true:false
                            }
                        },
                        bars: {
                            show: bars,
                            barWidth: data.barWidth || 0.5,
                            fill: data.fill || 1,
                            align: 'center'
                        },
                        lines: {
                            show: lines,
                            fill: 0.1,
                            lineWidth: 3
                        },
                        shadowSize: 0,
                        points: {
                            radius: 4
                        }
                    },
                    xaxis: {
                        mode: 'categories',
                        tickLength: 0,
                        font :{
                            lineHeight: 24,
                            weight: '300',
                            color: data.fontColor,
                            size: 14
                        }
                    },
                    yaxis: {
                        tickColor: gridColor,
                        tickFormatter: function number(x) {  var num; if (x >= 1000) { num=(x/1000)+'k'; }else{ num=x; } return num; },
                        max: data.yMax,
                        font :{
                            lineHeight: 13,
                            weight: '300',
                            color: data.fontColor
                        }
                    },
                    grid: {
                        borderWidth: {
                            top: 0,
                            right: 0,
                            bottom: 1,
                            left: 1
                        },
                        borderColor: gridColor,
                        margin: 13,
                        minBorderMargin:0,
                        labelMargin:20,
                        hoverable: true,
                        clickable: true,
                        mouseActiveRadius:6
                    },
                    legend: { show: data.legend=='show' ? true:false },
                    tooltip: data.toolTip=='show' ? true:false,
                    tooltipOpts: { content: (pie ? '%p.0%, %s':'<b>%s</b> :  %y') }
                });
        });

        // tooltips showing
        $('.flot-graph').bind("plothover", function (event, pos, item) {
            if (item) {
                var x = item.datapoint[0],
                    y = item.datapoint[1];
                $("#flotTip").css({top: item.pageY-30});
            } else {
                $("#flotTip").hide();
            }
        });

    };

    // Pie Chart custom labels

    $('.custom-labels').each(function () {
        var el= $(this);
        var data = el.data();
        var colors = [];
        var info = [];
        var item = '';

        $(data.targetFlot).find('thead th:not(:first)').each(function() {
            colors.push($(this).css('color'));
            info.push($(this).text());
        });

        for(var i=0;i<info.length;i++){
            item += '<li><span class="badge badge-outline" style="border-color:' + colors[i] + '"></span>' + info[i] + ' ' + '<small>' + $(data.targetFlot).find("tbody td").eq(i).text() + '%' + '</small>' + '</li>';
        }

        el.append('<ul class="nolisttypes chart-legend">'+item+'</ul>');

    });

    initializeFlot();

    // Combined flot chart
    var d1 = [['JAN', 150], ['FEB', 181], ['Mar', 252], ['APR', 356],['MAY', 851], ['JUN', 1589], ['JUL', 951], ['AUG', 651],['SEP', 591], ['OCT', 382], ['NOV', 951], ['DEC', 741]];
    var d2 = [['JAN', 145], ['FEB', 178], ['Mar', 200], ['APR', 350],['MAY', 212], ['JUN', 486], ['JUL', 841], ['AUG', 546],['SEP', 571], ['OCT', 300], ['NOV', 854], ['DEC', 685]];
    $.plot('#combined-chart', [
            {
                label: 'Last Year',
                data: d1,
                bars: {
                    show: true,
                    barWidth:  0.5,
                    fill:  1,
                    align: 'center'
                }
            },
            {
                label: 'This Year',
                data: d2,
                lines: {
                    show: true,
                    lineWidth: 3
                }
            }],
        {
            colors: ['#418bca' ,'#22beef'],
            xaxis: {
                mode: 'categories',
                tickLength: 0,
                font :{
                    lineHeight: 24,
                    weight: '300',
                    color: 'rgba(255,255,255,.8)',
                    size: 14
                }
            },
            yaxis: {
                tickColor: 'rgba(255,255,255,.2)' ,
                tickFormatter: function number(x) {  var num; if (x >= 1000) { num=(x/1000)+'k'; }else{ num=x; } return num; },
                font :{
                    lineHeight: 13,
                    weight: '300',
                    color: 'rgba(255,255,255,.8)'
                }
            },
            grid: {
                borderWidth: {
                    top: 0,
                    right: 0,
                    bottom: 1,
                    left: 1
                },
                margin: 13,
                labelMargin:20,
                hoverable: true,
                clickable: true,
                mouseActiveRadius:6,
                color : 'rgba(255,255,255,.2)'
            },
            legend: { show: true },
            tooltip: true
        });

    $("#combined-chart div.legend >div").css("background", "transparent");
    $("#combined-chart div.legend table").css("color", "rgba(255,255,255,.8)");

    // tooltips showing
    $('#combined-chart').bind("plothover", function (event, pos, item) {
        if (item) {
            var x = item.datapoint[0],
                y = item.datapoint[1];
            $("#flotTip").css({top: item.pageY-30});
        } else {
            $("#flotTip").hide();
        }
    });

    // Real-Time flot chart
    var realTimeData = [];
    var totalPoints = 30;
    var updateInterval = 3000;

    function getData() {
        realTimeData.shift();

        while (realTimeData.length<totalPoints) {
            var y = Math.random() * 100;
            var temp = [];
            realTimeData.push(y);
        }

        var temp = [];
        for (var i = 0; i<realTimeData.length; ++i) {
            temp.push([i, realTimeData[i]])
        }
        return temp;

    }

    var plot = $.plot('#realtime-chart', [getData()],
        {
            colors: ['#a2d200'],
            series: {
                lines: {
                    show: true,
                    fill: 0.1
                },
                shadowSize: 0
            },
            yaxis: {
                tickColor: 'rgba(255,255,255,.2)',
                min: 0,
                max: 100,
                font :{
                    color: 'rgba(255,255,255,.8)'
                }
            },
            grid: {
                borderWidth: {
                    top: 0,
                    right: 0,
                    bottom: 1,
                    left: 1
                },
                color :  'rgba(255,255,255,.2)'
            },
            tooltip: false,
            xaxis: {
                show: false
            }
        });

    function update() {
        plot.setData([getData()]);
        plot.draw();
        setTimeout(update, updateInterval);
    };

    update();

    //server load rickshaw chart
    var graph;

    var seriesData = [ [], []];
    var random = new Rickshaw.Fixtures.RandomData(50);

    for (var i = 0; i < 50; i++) {
        random.addData(seriesData);
    }

    graph = new Rickshaw.Graph( {
        element: document.querySelector("#rickshaw-chart"),
        height: 150,
        renderer: 'area',
        series: [
            {
                data: seriesData[0],
                color: '#6e6e6e',
                name:'File Server'
            },{
                data: seriesData[1],
                color: '#fff',
                name:'Mail Server'
            }
        ]
    } );

    var hoverDetail = new Rickshaw.Graph.HoverDetail( {
        graph: graph
    });

    setInterval( function() {
        random.removeData(seriesData);
        random.addData(seriesData);
        graph.update();

    },1000);


    // Generate easy-pie charts
    var charts = $('.easypiechart .percentage');
    charts.easyPieChart({
        animate: 2000,
        onStart: function(value) {
            $(this.el).find('span').animateNumbers(Math.floor(100*Math.random()));
        }
    });

    //update instance every 5 sec
    window.setInterval(function() {

        // refresh easy pie chart
        charts.each(function() {
            $(this).data('easyPieChart').update(Math.floor(100*Math.random()));
        });

    }, 5000);

    // Generate justGage charts

    var g01 = new JustGage({
        id: "gauge01",
        value: 67,
        min: 0,
        max: 100,
        title: "New Users",
        titleFontColor : "rgba(255,255,255,.6)",
        valueFontColor:  "rgba(255,255,255,.8)"
    });

    var g02 = new JustGage({
        id: "gauge02",
        value : 30,
        title : "Custom Width",
        min: 0,
        max: 100,
        gaugeWidthScale: .3,
        titleFontColor : "rgba(255,255,255,.6)",
        valueFontColor:  "rgba(255,255,255,.8)"
    });

    var g03 = new JustGage({
        id: "gauge03",
        value : 92,
        title : "Animation",
        min: 0,
        max: 100,
        startAnimationType: 'bounce',
        refreshAnimationType: 'bounce',
        refreshAnimationTime: 2500,
        titleFontColor : "rgba(255,255,255,.6)",
        valueFontColor:  "rgba(255,255,255,.8)"
    });

    var g04 = new JustGage({
        id: "gauge04",
        value : 72,
        title : "Donut Style",
        min: 0,
        max: 100,
        donut: true,
        titleFontColor : "rgba(255,255,255,.6)",
        valueFontColor:  "rgba(255,255,255,.8)"
    });

    //update instance every 5 sec
    window.setInterval(function() {

        // refresh justGage charts
        g01.refresh(getRandomInt(0, 100));
        g02.refresh(getRandomInt(0, 100));
        g03.refresh(getRandomInt(0, 100));
        g04.refresh(getRandomInt(0, 100));

    }, 5000);

})
