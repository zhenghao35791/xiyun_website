$(function (){
	var endTime = new Date();
	endTime.setHours(endTime.getHours()+2);
	function freshTime(){
		var curTime = new Date();
		var leftTime = (endTime.getTime() -curTime.getTime())/1000;
		var h = parseInt(leftTime/60/60%24);
		var m = parseInt(leftTime/60%60);
		var s = parseInt(leftTime%60);
		h=checkTime(h);
		m=checkTime(m);
		s=checkTime(s);
		var $sh = $('.showNumber');
		$sh.eq(0).text(h);
		$sh.eq(1).text(m);
		$sh.eq(2).text(s);
		setTimeout(freshTime,500);
	}
	freshTime();
})

function checkTime(i){
	if(i<10){
		i = '0'+i;
	}
	return i;
}