// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','ngDraggable','app.controllers', 'app.routes', 'app.services', 'app.directives','ngCordova','ngDragDrop'])

.run(function($rootScope,$ionicPlatform) {
  $rootScope.appReady = {status:false};
  $ionicPlatform.ready(function() {
    console.log('ionic Ready');
    $rootScope.appReady.status = true;
    $rootScope.$apply();

    console.log('in app.js, appReady is '+$rootScope.appReady.status);
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
