angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('text', {
    url: '/page2',
    templateUrl: 'templates/text.html',
    controller: 'textCtrl'
  })

  .state('image', {
    url: '/page3',
    templateUrl: 'templates/image.html',
    controller: 'imageCtrl'
  })

  .state('video', {
    url: '/page4',
    templateUrl: 'templates/video.html',
    controller: 'videoCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('adCreatorStudio', {
    url: '/page5',
    templateUrl: 'templates/adCreatorStudio.html',
    controller: 'adCreatorStudioCtrl'
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page7',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('welcome', {
    url: '/page8',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('image2', {
    url: '/page9',
    templateUrl: 'templates/image2.html',
    controller: 'image2Ctrl'
  })

  .state('preview', {
    url: '/page10',
    templateUrl: 'templates/preview.html',
    controller: 'previewCtrl'
  })

  .state('adSize', {
    url: '/page11',
    templateUrl: 'templates/adSize.html',
    controller: 'adSizeCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});