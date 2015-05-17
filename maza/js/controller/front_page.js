var controllers = 
/**
* appControllers Module
*
* Description
*/
angular.module('appControllers', [])
.controller('osnovniPojmovi', function($scope){
		var width  = $(window).width();
		var height = $(window).height();
		$('.full_width').css({'width' : width, 'min-height' : height});
		$('.page_back').css({'width' : width, 'min-height' : height});
    

});