$(function(){
	var navLists = [$('#1F .tagNav a'),$('#2F .tagNav a'),$('#3F .tagNav a')];
	var showCons = [$('#1F .tagCon'),$('#2F .tagCon'),$('#3F .tagCon')];
	var timer = [null,null,null];
	var index = [0,0,0];

	for (var i = 0; i < navLists.length; i++) {
		timer[i] = setInterval(autoplay,2000,i); /*setInterval函数的执行方式是先停后执行函数！*/
		/*setInterval函数带参数时应该这样使用，第一个参数传函数名或匿名函数*/
		for (var j = 0,len = navLists[i].length; j < len; j++) {
			navLists[i][j].fid = i;
			navLists[i][j].sid = j;
			$(navLists[i][j]).hover(function() {
				clearInterval(timer[this.fid]);
				index[this.fid] = this.sid;
				show(index[this.fid],this.fid);
			}, function() {
				timer[this.fid] = setInterval(autoplay,2000,this.fid);
			});
		};
	};
	
	function show(index,i){
		$(navLists[i]).removeClass('selectTag').eq(index).addClass('selectTag');  /*查阅siblings的用法！*/
		$(showCons[i]).hide().eq(index).show();
	}

	function autoplay(i){
		index[i]++;
		if( index[i] == navLists[i].length ){
			index[i] = 0;
		}
		show(index[i],i);
	}
})

