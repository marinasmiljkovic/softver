var controllers = 
/**
* appControllers Module
*
* Description
*/
angular.module('appControllers', [])
.controller('osnovniPojmovi', function($scope){
	$scope.test = "proba";
		var width  = $(window).width();
		var height = $(window).height();
		$('.full_width').css({'width' : width, 'height' : height});
});