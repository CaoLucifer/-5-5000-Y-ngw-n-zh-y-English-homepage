//下拉框的显示
$(document).ready(function(){
	$(".first_link").mouseover(function(){
		$(this).removeClass("first_link").addClass("first_link1");
		$(this).siblings("ul").show();
	});
	$(".first_link").mouseout(function(){
		$(this).removeClass("first_link1").addClass("first_link");
			$(this).siblings("ul").hide();
	});
	
	$(".ul_list").mouseenter(function(){
		$(this).css("display","block");
	});
	$(".ul_list").mouseleave(function(){
		$(this).slideUp("fast");
	});
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
var tt=setInterval("zidong()",10000);
window.onload = tt;
function clickEvent(){
	var a = setInterval(zidong(),1000);
	window.clearInterval(a);
}
//图片区的箭头
$(document).ready(function(){
	$("#banner").mouseover(function(){
		$(".tubiao").css("visibility","visible").click(clickEvent);
	});
	$("#banner").mouseout(function(){
		$(".tubiao").css("visibility","hidden");
	});
	$("#point,#point2").mouseover(clickEvent);
});
//左侧导航框
$(document).ready(function(){
	$(".nav_a").mouseover(function(){
		$(this).css({
			"color": "#f40",
			"background": "url(../images/rt2.png) no-repeat right center"
		});
	});
	$(".nav_a").mouseout(function(){
		$(this).css({
			"color": "#000",
			"background": "url(../images/rt1.png) no-repeat right center"
		});
	});
});

function zidong2(){
	var lunbo = document.getElementById("lunbo_ul");
	if(!lunbo.style.left)
		lunbo.style.left = "0px";
	var xpos = parseInt(lunbo.style.left);
	if(xpos==-6000)
	{
		xpos=0;
	}
	else
	{
	xpos = xpos -200;
	}
	lunbo.style.left = xpos + 'px';
}
setInterval("zidong2()",1600);

