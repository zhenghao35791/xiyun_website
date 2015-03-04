$(function(){
	var navLists = $('#1F .tagNav a');
	var showCons = $('#1F .tagCon');
	var index = 0;
	if( showCons.length != navLists.length ){
		return;
	}

	var timer = null;
	timer = setInterval(autoplay,2000) /*setInterval函数的执行方式是先停后执行函数！*/

	$(navLists).hover(function() {
		clearInterval(timer);
		index = $(navLists).index(this);
		show(index);
	}, function() {
		timer = setInterval(autoplay,2000)   //注意，这里的autoplay如果写作autoplay()会出现异常
	});

	function show(index){
		$(navLists).removeClass('selectTag').eq(index).addClass('selectTag');  /*查阅siblings的用法！*/
		$(showCons).hide().eq(index).show();
	}

	function autoplay(){
		index++;
		if( index == navLists.length ){
			index = 0;
		}
		show(index);
	}
})

