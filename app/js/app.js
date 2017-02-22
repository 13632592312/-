/** 
 *@class index 
 *@description App主模块,所有的模块被主模块引用 
 *@time 2014-09-20 10:53 
 *@author StarZou 
 **/

var bookStoreApp = angular.module('bookStoreApp', [
	'ngRoute', 'ngAnimate', 'bookStoreCtrls', 'bookStoreFilters',
	'bookStoreServices', 'bookStoreDirectives'
]);

bookStoreApp.config(function($routeProvider) {
	$routeProvider.when('/Example', {
		templateUrl: 'tpls/Example.html',
		controller: 'ExampleCtrl'
	}).when('/Advanced', {
		templateUrl: 'tpls/Advanced.html',
	}).when('/Grasp', {
		templateUrl: 'tpls/Grasp.html',
	}).when('/Master', {
		templateUrl: 'tpls/Master.html',
	}).otherwise({
		redirectTo: '/Example'
	})
});

bookStoreApp.controller('indexCtrl', function($scope) {
	var data = $scope.data = {};
	data.items = [{
		"id": 0,
		"link":"Example",
		"name": "基础",
		"isActive":true
	}, {
		"id": 1,
		"link":"Advanced",
		"name": "进阶",
		"isActive":false
	}, {
		"id": 2,
		"link":"Grasp",
		"name": "掌握",
		"isActive":false
	}, {
		"id": 3,
		"link":"Master",
		"name": "精通",
		"isActive":false
	}]
	data.isActive = function isActive(id){
 		for (var k in data.items) {
			data.items[k].isActive = false
		}
		data.items[id].isActive = true;
	}
	
	
	
	 $scope.printInfo = function () {
        for (var i = 0; i < $scope.showVBs.length; i++) {
            console.log($scope.showVBs[i]);
        }
    };

    $scope.showVBs = [{
        "Tag": "Tag1",
        "NO": "No1",
        "remarks": "remarks1"
    }, {
        "Tag": "Tag2",
        "NO": "No2",
        "remarks": "remarks2"
    }];
    $scope.BDetailsAdd = function () {
        $scope.showVBs.push({});
    };
    $scope.BDetailsDel = function (Count) {
        $scope.showVBs.splice(Count, 1);
    };
	
});