// Only put 1 vaiable into Global Name Space to avoid polluting:
var childApp = angular.module('childApp', ['ngAnimate', 'ngRoute', 'ui.router']);

childApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // route to show our basic form (/form)
    .state('form', {
        url: '/form',
        templateUrl: 'pages/form.html',
        controller: 'formController'
    })

    // nested states
    // each of these sections will have their own view
    // url will be nested (/form/main)
    .state('form.main', {
        url: '/main',
        templateUrl: 'pages/form-main.html'
    })

    // url will be /form/second
    .state('form.second', {
        url: '/second',
        templateUrl: 'pages/form-second.html'
    })

    // url will be /form/third
    .state('form.third', {
        url: '/third',
        templateUrl: 'pages/form-third.html'
    })

     // url will be /form/last
    .state('form.last', {
        url: '/last',
        templateUrl: 'pages/form-last.html'
    })

    // url will be /form/lastboy
    .state('form.lastboy', {
        url: '/lastboy',
        templateUrl: 'pages/form-lastboy.html'
    });

// catch all route
// send users to the form page
$urlRouterProvider.otherwise('/form/main');
});




// name service to update name to the next page:

childApp.service('nameService', function() {
    this.name = '';
})


// our controller for the form
// =============================================================================
childApp.controller('formController', ['$scope', 'nameService', function($scope, nameService) {

    //nameService function for name input:
    $scope.name = nameService.name;
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });

    // function to process the form
    $scope.processForm = function() {
        alert('Thank you for signing up!');
    };

 }]);

childApp.controller('nameController', function($scope, nameService) {

    //nameService function for name output:
    $scope.name = nameService.name;
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });
});
