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

	$("#banner").mouseover(function(){
		$(".tubiao").css("visibility","visible").click(clickEvent);
	});
	$("#banner").mouseout(function(){
		$(".tubiao").css("visibility","hidden");
	});
	$("#point,#point2").mouseover(clickEvent);

	$(".nav_a").hover(handleIn,handleOut);

	setInterval("zidong()",10000);

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


