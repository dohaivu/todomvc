'use strict';


// Declare app level module which depends on filters, and services
angular.module('TodoMVC', ['TodoMVC.filters', 'TodoMVC.services', 'TodoMVC.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: 'TaskCtrl'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'TaskDetailCtrl'});
    $routeProvider.otherwise({redirectTo: '/list'});
  }]);
