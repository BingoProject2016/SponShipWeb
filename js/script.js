var PAGE = (function(){
	var fn = {
			// popVideo : function(url,width,height){
			// 	var encodeUrl = encodeURIComponent(url),
			// 		videoURL = 'http://jx3.xoyo.com/zt/preindex/video.html?src=http%3A%2F%2F9.xoyo.com%2Fweb%2Fflash%2FT3%2Fflv_pro1.swf%3FUrl%3D' + encodeUrl + '%26replay%3D0%26autoplay%3D1&width='+width+'&height='+height
			//
			// 	$('#dialogVideo .bd').html('<iframe width="'+width+'" height="'+height+'" scrolling="no"  frameborder="0" style="background-color:transparent" allowtransparency="true" src=""></iframe>')
			// 	$('#dialogVideo iframe').attr('src',videoURL);
			// 	fn.popWindow('dialogVideo');
			// },

			switchNav : function(hideID,showID) {
	            $("#"+hideID).hide();
	            $("#"+showID).show();
	        },

			popWindow : function() {
				$(".popWindow").show();
			},

			popClose : function() {
				$(".popWindow").hide();
				$(this).hide();
			},
		},

		init = function(){
			// fn.switchNav();
		};

	return {
		fn : fn,
		init : init
	}
})();

$(function(){
	PAGE.init();
});
