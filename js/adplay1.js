$(function(){
	var mypic =  new Array("./img/banner/ad1.jpg","./img/banner/ad2.jpg","./img/banner/ad3.jpg",
		"./img/banner/ad4.jpg","./img/banner/ad5.jpg","./img/banner/ad6.jpg",
		"./img/banner/ad7.jpg","./img/banner/ad8.jpg");   /*js中的路径是引入它的html文件所在的路径*/
	var thisad = 0;
	var timer = null;
	timer = setInterval(autoplay,3000);

	$('.adPage a').hover(function (){
		clearInterval(timer);
		thisad = $('.adPage a').index(this);
		showImg(thisad);
	},function(){
		timer = setInterval(autoplay,3000);
	});

	function autoplay(){
		thisad++;
		if(thisad == mypic.length){
			thisad = 0;
		}
		showImg(thisad);
	}

	function showImg( idx ){
		$('.adPage').find('a').eq(idx).addClass("on")
		            .siblings().removeClass("on");
		$('#adbanner').attr("src",mypic[idx]);
	}
})


