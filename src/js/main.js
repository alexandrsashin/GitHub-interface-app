(function() {
  'use strict';

  angular
    .module('app', ['ui.router'])
    .config(config);
  
    /* @ngInject */
    function config($stateProvider, $urlRouterProvider) {
  
      $stateProvider
        .state('main', {
          url: '/main',
          views: {
            'header': {
              templateUrl: 'js/components/header/headerTmpl.html'
            },
            'content': {
              templateUrl: 'js/components/main/mainTmpl.html',
              controller: 'MainCtrl',
              controllerAs: '$ctrl'       
            }
          } 
        })
        .state('add-info', {
          url: '/add-info/issue/:index',
          views: {
            'header': {
              templateUrl: 'js/components/header/headerTmpl.html'
            },
            'content': {
              templateUrl: 'js/components/add-info/AddInfoTmpl.html',
              controller: 'AddInfoCtrl',
              controllerAs: '$ctrl'         
            }
          }  
        })
  
      $urlRouterProvider.otherwise('/main');
    }
})();