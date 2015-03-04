$(function(){
	var moveItems = $('.itemHigh img');
	console.log(moveItems.length);

	for (var i = 0; i < moveItems.length; i++) {
		var destination = moveItems[i].offsetLeft;
		moveItems[i].style.position = 'relative';
		moveItems[i].style.left = '0px';
		moveItems[i].timer = null;
		moveItems[i].onmouseover = function(){
			startMove(this,'-10px');
		}
		moveItems[i].onmouseout = function(){
			startMove(this,'0px');
		}
	};
})

function startMove(obj,des){
	clearInterval(obj.timer);
	var intDes = parseInt(des);
	var speed = 0;
	var curLeft = parseInt(getStyle(obj,'left'));
	if(curLeft > intDes){
		speed = -2;
	}
	else{
		speed = 2;
	}
	obj.timer = setInterval(function(){
		curLeft = parseInt(getStyle(obj,'left'));
		if(obj.style.left == des){
			clearInterval(obj.timer);
		}
		else{
			obj.style.left = curLeft + speed +'px';
		}
	},30)
	console.log(getStyle(obj,'left'));

}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}

