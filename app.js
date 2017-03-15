/**
 * Created by javdev on 3/14/2017.
 */
(function(angular){
    configFN.$inject = ["$stateProvider","$urlRouterProvider","$routeProvider"]; //"$stateProvider","$urlRouterProvider",
    function configFN($stateProvider,$urlRouterProvider,$routeProvider){ //$stateProvider,$urlRouterProvider,
        $routeProvider
            .when('/users',{
            templateUrl :'admin/views/viewsByMonth.html'
        })  
            .when('/usersInterests',{
            templateUrl :'admin/views/viewsByYear.html'
        }).when('/activeUsers',{
            templateUrl :'admin/views/activeUsers.html'
        }).when('/usersByPlaces',{
            templateUrl :'admin/views/usersByPlaces.html'
        });
        
//        $routeProvider.otherwise("/404");
//        $stateProvider
//            .state('users',{
//            url:'/users',
//            templateUrl:'admin/views/viewsByMonth.html',
//            //controller:'adminCtrl'
//        });
//         zingchart.MODULESDIR = "https://cdn.zingchart.com/modules/";
//    ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "ee6b7db5b51705a13dc2339db3edaf6d"];
    }

    angular
        .module("guideME", ["ui.router","ngRoute",'zingchart-angularjs','ng-fusioncharts'])
        .config(configFN);
    
})(angular)