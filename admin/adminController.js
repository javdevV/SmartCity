/**
 * Created by javdev on 3/14/2017.
 */
(function (angular) {
    'use strict';

    function adminCtrlFN($scope) {

        $scope.myJson = {
            gui: {
                contextMenu: {
                    button: {
                        visible: 0
                    }
                }
            },
            backgroundColor: "transparent",
            globals: {
                shadow: false,
                fontFamily: "Helvetica"
            },
            type: "area",

            legend: {
                layout: "x4",
                backgroundColor: "transparent",
                borderColor: "transparent",
                marker: {
                    borderRadius: "50px",
                    borderColor: "transparent"
                },
                item: {
                    fontColor: "white"
                }

            },
            scaleX: {
                maxItems: 8,
                transform: {
                    type: 'date'
                },
                zooming: true,
                values: [
            1442905200000, 1442908800000,
            1442912400000, 1442916000000,
            1442919600000, 1442923200000,
            1442926800000, 1442930400000,
            1442934000000, 1442937600000,
            1442941200000, 1442944800000,
            1442948400000
          ],
                lineColor: "white",
                lineWidth: "1px",
                tick: {
                    lineColor: "white",
                    lineWidth: "1px"
                },
                item: {
                    fontColor: "white"
                },
                guide: {
                    visible: false
                }
            },
            scaleY: {
                lineColor: "white",
                lineWidth: "1px",
                tick: {
                    lineColor: "white",
                    lineWidth: "1px"
                },
                guide: {
                    lineStyle: "solid",
                    lineColor: "#626262"
                },
                item: {
                    fontColor: "white"
                },
            },
            tooltip: {
                visible: false
            },
            crosshairX: {
                scaleLabel: {
                    backgroundColor: "#566",
                    fontColor: "black"
                },
                plotLabel: {
                    backgroundColor: "#434343",
                    fontColor: "transparent",
                    _text: "Number of hits : %v"
                }
            },
            plot: {
                lineWidth: "2px",
                aspect: "spline",
                marker: {
                    visible: false
                }
            },
            series: [{
                text: "All Sites",
                values: [2596, 2626, 4480,
                   6394, 7488, 14510,
                   7012, 10389, 20281,
                   25597, 23309, 22385,
                   25097, 20813, 20510],
                backgroundColor1: "#77d9f8",
                backgroundColor2: "#272822",
                lineColor: "#40beeb"
      }, {
                text: "Site 1",
                values: [479, 199, 583,
                   1624, 2772, 7899,
                   3467, 3227, 12885,
                   17873, 14420, 12569,
                   17721, 11569, 7362],
                backgroundColor1: "#4AD8CC",
                backgroundColor2: "#272822",
                lineColor: "#4AD8CC"
      }, {
                text: "Site 2",
                values: [989, 1364, 2161,
                   2644, 1754, 2015,
                   818, 77, 1260,
                   3912, 1671, 1836,
                   2589, 1706, 1161],
                backgroundColor1: "#1D8CD9",
                backgroundColor2: "#1D8CD9",
                lineColor: "#1D8CD9"
      }, {
                text: "Site 3",
                values: [408, 343, 410,
                   840, 1614, 3274,
                   2092, 914, 5709,
                   6317, 6633, 6720,
                   6504, 6821, 4565],
                backgroundColor1: "#D8CD98",
                backgroundColor2: "#272822",
                lineColor: "#D8CD98"
      }]
        };

        $scope.myJson1 = {
            globals: {
                shadow: false,
                fontFamily: "Verdana",
                fontWeight: "100"
            },
            type: "pie",
            backgroundColor: "transparent",

            legend: {
                layout: "x5",
                position: "50%",
                borderColor: "transparent",
                marker: {
                    borderRadius: 10,
                    borderColor: "transparent"
                }
            },
            tooltip: {
                text: "%v user"
            },
            plot: {
                refAngle: "-90",
                borderWidth: "0px",
                valueBox: {
                    placement: "in",
                    text: "%npv %",
                    fontSize: "15px",
                    textAlpha: 1,
                }
            },
            series: [{
                text: "Musées",
                values: [4660],
                backgroundColor: "#FA6E6E #FA9494",
        }, {
                text: "Ciné",
                values: [1807],
                backgroundColor: "#F1C795 #feebd2"
        }, {
                text: "Sport",
                values: [1611],
                backgroundColor: "#FDAA97 #FC9B87"
        }, {
                text: "Restaurants",
                values: [1341],
                backgroundColor: "#28C2D1"
        }, {
                text: "Théatre",
                values: [1269],
                backgroundColor: "#D2D6DE",
        }]
        };
        $scope.myJson2 = {
            title: {
                text: new Date(),
                fontSize: 16,
                fontColor: "#fff"
            },
            backgroundColor: "transparent",
            globals: {
                shadow: false,
                fontFamily: "Arial"
            },
            type: "line",
            scaleX: {
                maxItems: 8,
                lineColor: "white",
                lineWidth: "1px",
                tick: {
                    lineColor: "white",
                    lineWidth: "1px"
                },
                item: {
                    fontColor: "white"
                },
                guide: {
                    visible: false
                }
            },
            scaleY: {
                lineColor: "white",
                lineWidth: "1px",
                tick: {
                    lineColor: "white",
                    lineWidth: "1px"
                },
                guide: {
                    lineStyle: "solid",
                    lineColor: "#249178"
                },
                item: {
                    fontColor: "white"
                },
            },
            tooltip: {
                visible: false
            },
            crosshairX: {
                lineColor: "#fff",
                scaleLabel: {
                    backgroundColor: "#fff",
                    fontColor: "#323232"
                },
                plotLabel: {
                    backgroundColor: "#fff",
                    fontColor: "#323232",
                    text: "%v",
                    borderColor: "transparent"
                }
            },
            plot: {
                lineWidth: "2px",
                lineColor: "#FFF",
                aspect: "spline",
                marker: {
                    visible: false
                }
            },
            series: [{
                values: [989, 1364, 2161, 2644, 1754, 2015, 818, 77, 1260, 3912, 1671, 1836, 1901]
    }]
        }
//          $scope.myJson3 = {
//    type: "pie",
//    title: {
//      textAlign: 'center',
//      text: ""
//    },
//                          backgroundColor: "transparent",
//
//    plot: {
//      slice: 50 //to make a donut
//    },
//    series: [{
//      values: [3],
//      text: "Total Commits"
//
//    }, {
//      values: [4],
//      text: "Issues Solved"
//
//    }, {
//      values: [8],
//      text: "Issues Submitted"
//    }, {
//      values: [7],
//      text: "Number of Clones"
//
//    }],
//              
//  };
           

              $scope.myJson3 = {
        gui: {
          contextMenu: {
            button: {
              visible: false
            }
          }
        },
      globals: {
        shadow:false
      },
      "background-color":"#FFF",
      shapes: [
        {
          type: 'zingchart.maps',
          options: {
            name: 'fra',
            style: {
              label: {
                visible:false
              },
              "background-color":"#7CA82B",
              "border-color":"#FFF",
              items: {
                "CA": {
                  "background-color":"#C30"
                },
                "VA": {
                  "background-color":"#00BAF0"
                },
                "TX": {
                  "background-color":"#003849"
                },
                "MT": {
                  "background-color":"#333"
                },
                "IL": {
                  "background-color":"#F0F0F0"
                },
                "FL": {
                  "background-color":"#D9D9D9"
                }
              }
            }
          }
        }
      ]
    };



    }    
   
    angular.module("guideME").controller("adminCtrl", adminCtrlFN);

}

)(angular)
