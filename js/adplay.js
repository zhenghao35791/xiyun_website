window.onload = rotate;

var mypic =  new Array("./img/banner/ad1.jpg","./img/banner/ad2.jpg","./img/banner/ad3.jpg",
	"./img/banner/ad4.jpg","./img/banner/ad5.jpg","./img/banner/ad6.jpg",
	"./img/banner/ad7.jpg","./img/banner/ad8.jpg");   /*js中的路径是引入它的html文件所在的路径*/
var thisad = -1;


function rotate(){
	thisad++;
	if(thisad == mypic.length){
		thisad = 0;
	}
	showImg(thisad);

	$('.adPage a').hover(function (){
		thisad = $('.adPage a').index(this);
		showImg(thisad);
	});

	setTimeout(rotate,5500);
}

function showImg( idx ){
	$('.adPage').find('a').eq(idx).addClass("on")
	            .siblings().removeClass("on");
	$('#adbanner').attr("src",mypic[idx]);
}

