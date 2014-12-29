$(function(){
	var moveItems = $('.itemHigh img');
	for (var i = 0; i < moveItems.length; i++) {
		moveItems[i].timer = null;
		moveItems[i].onmouseover = function(){
			startMove(this,-10,'margin-left');
		}
		moveItems[i].onmouseout = function(){
			startMove(this,0,'margin-left');
		}
	};

	var saleItems = $('.itemLow img');
	for (var i = 0; i < saleItems.length; i++) {
		$(saleItems[i]).hover(function(){
			$(this).css('opacity','0.7');
		},function(){
			$(this).css('opacity','1');
		});
	};
})

function startMove(obj,des,attr){       /*针对opacity属性，需要单独设置if语句进行设置;此外还可扩展为链式动画和同时动画*/
	clearInterval(obj.timer);
	var speed = 0;
	var curLeft = parseInt(getStyle(obj,attr));
	speed = (curLeft > des)?-2:2;             /*速度可设置为可变速度*/
	obj.timer = setInterval(function(){
		curLeft = parseInt(getStyle(obj,attr));
		if(curLeft == des){
			clearInterval(obj.timer);
		}
		else{
			obj.style[attr] = curLeft + speed +'px';
		}
	},30)
}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}

