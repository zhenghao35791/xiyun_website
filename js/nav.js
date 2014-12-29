$(function (){
	var logoboxCol = [4,5,6,3,3,3,3,3,3];
	var submenuH = [626,578,659,533,496,496,302,496,471];
	
	$('.bigClass').hover(function(){
		var temp = $(this).find('.submenu');
		if( temp.length ){
			var newid = temp[0].id;
			var idIdx = parseInt(newid.substr(newid.length-1))-1;
			var getCol = logoboxCol[idIdx];
			var getH = submenuH[idIdx];
			$(this).addClass('bigClass_on');
			$(this).find('.className i').hide();
			temp.css('height',getH + 'px');
			$(this).find('.leftsubm').css('height',getH + 'px');
			temp.show();
			$(this).find('.logoBox').css('height',41*getCol + 'px');
		}
	},function(){
		var temp = $(this).find('.submenu');
		if( temp.length ){
			$(this).removeClass('bigClass_on');
			$(this).find('i').show();
			temp.hide();
		}
	})
})