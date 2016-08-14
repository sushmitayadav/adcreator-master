angular.module('app.controllers', [])

.controller('textCtrl', function($scope) {
  $scope.onDragComplete=function(data,evt){
       console.log("drag success, data:", data);
    }
    $scope.onDropComplete=function(data,evt){
        console.log("drop success, data:", data);
    }
})

.controller('imageCtrl', ['$scope', '$rootScope', '$cordovaCamera', function($scope, $rootScope, $cordovaCamera,Captionname,$timeout,$cordovaFileTransfer)  {
  $scope.data={};
    $scope.ready = false;
	$rootScope.images = '';
    $rootScope.buttonDisable = false;
    var startimg = '';
	$rootScope.$watch('appReady.status', function() {
		console.log('watch fired '+$rootScope.appReady.status);
		if($rootScope.appReady.status) $scope.ready = true;
	});

	$scope.selImages = function() {
    $rootScope.buttonDisable = true;
		window.imagePicker.getPictures(
			function(results) {
      for (var i = 0; i < results.length; i++) {
					console.log('Image URI: ' + results[0]);
					$rootScope.images = results[0];
           startimg=results[0];
        $rootScope.images=startimg;
        }
				if(!$rootScope.$$phase) {
					$rootScope.$apply();
				}
			}, function (error) {
				console.log('Error: ' + error);
			}
		);
	};


          var canvas = document.getElementById('tempCanvas');
          var context = canvas.getContext('2d');

  $scope.retcap = function(data) {
    name = data.caption;
    $scope.textOverlay=data.caption;
    $rootScope.captionnameforall = name;
    console.log(data.name);
    console.log(name);
    console.log($rootScope.captionnameforall);
    $scope.overlay();

  };
  $scope.overlay = function(){

                  var source =  new Image();
                  source.src = startimg;
                  canvas.width = source.width;
                  canvas.height = source.height;

                  console.log(canvas);

                  context.drawImage(source,0,0);

                  context.font = "100px impact";
                  textWidth = context.measureText($scope.frase).width;

                  if (textWidth > canvas.offsetWidth) {
                      context.font = "40px impact";
                  }
                  context.textAlign = 'center';
                  context.fillStyle = 'white';

                  context.fillText($scope.textOverlay,canvas.width/2,canvas.height*0.8);

                    var imgURI = canvas.toDataURL();
                    $rootScope.images =  imgURI;

        var options = {
            fileKey: "avatar",
            fileName: "image.jpeg",
            chunkedMode: false,
            mimeType: "image/jpeg"
        };
        $cordovaFileTransfer.upload("http://192.168.56.1:1337/file/upload", imgURI , options).then(function(result) {
            console.log("SUCCESS: " + JSON.stringify(result.response));
        }, function(err) {
            console.log("ERROR: " + JSON.stringify(err));
        }, function (progress) {
            // constant progress updates
        });

  };
}])

.controller('videoCtrl', function($scope, $cordovaCamera) {
  $scope.pickVideo = function() {

       var options = {

         mediaType: Camera.MediaType.VIDEO,
         sourceType: Camera.PictureSourceType.PHOTOLIBRARY

         };

       $cordovaCamera.getPicture(options).then(function(results) {

       $scope.videoUrl = results;
       for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[0]);
          $rootScope.videos=results[0];
         }
      // alert('$scope.videoUrl: '+ videoUrl);
       });

     };
})

.controller('adCreatorStudioCtrl', function($scope) {

})

.controller('loginCtrl', function ($scope ) {

 })


.controller('signupCtrl', function ($scope) {

})

.controller('welcomeCtrl', function($scope) {

})

.controller('image2Ctrl', function($scope,$rootScope) {

})

.controller('previewCtrl', function($scope,$rootScope) {

})

.controller('adSizeCtrl', function($scope) {

})
