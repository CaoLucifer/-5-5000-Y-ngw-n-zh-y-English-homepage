$(document).ready(function(){
	$(".first_link").mouseover(function(){
		$(this).removeClass("first_link").addClass("first_link1");
	});
	$(".first_link").mouseout(function(){
		$(this).removeClass("first_link1").addClass("first_link");
	});
	
	$(".select_head").bind("click",choose);
	
	$("#banner").mouseover(function(){
		$(".tubiao").css("visibility","visible").click(clickEvent);
	});
	$("#banner").mouseout(function(){
		$(".tubiao").css("visibility","hidden");
	});
	$("#point,#point2").mouseover(clickEvent);

	$(".nav_a").hover(handleIn,handleOut);

	setInterval("zidong()",3000);

	setInterval("zidong2()",1600);
});	
//轮播图
function zidong(){
	var left = $("#lunbo").css("left");
	var xpos = parseInt(left);
	if(xpos==-1200)
		xpos=0;
	else
		xpos = xpos -1200;
	$("#lunbo").css("left",xpos + 'px');
};

function clickEvent(){
	var a = setInterval(zidong(),100);
	window.clearInterval(a);
}
function handleIn(){
	$(this).removeClass("nav_a").addClass("nav_a2");
	$(".nav_a1").removeClass("nav_a1");
}
function handleOut(){
	$(this).removeClass("nav_a2").addClass("nav_a");
}

function zidong2(){
	var left = $("#lunbo_ul").css("left");
	var xpos = parseInt(left);
	if(xpos==-6000)
	{
		xpos=0;
	}
	else
	{
	xpos = xpos -200;
	}
	$("#lunbo_ul").css("left", xpos + 'px');
}
//底部选项卡
function choose(){
	var  selectcard= $(".select-card");
	var index = $(".select_head").index($(this));
	for(var i = 0 ; i < selectcard.length ; i ++){
		selectcard.eq(i).css("display","none");
	}
	$(".select_head a").css("color","#000000").find("em").css("background","url(../images/jt.png) no-repeat center center");
	$(this).find("a").css("color","#FF4400").find("em").css("background","url(../images/jt1.png) no-repeat center center");
	selectcard.eq(index).css("display","block");
	}

