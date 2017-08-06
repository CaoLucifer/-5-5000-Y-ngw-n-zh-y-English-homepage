//动态加载事件函数
function addloadEvent(func){
	var oldonload =window.onload;
	if(typeof window.onload !='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
} 

//鼠标滑过链接时箭头变向
var first_link = document.getElementsByClassName("first_link");
for(var i=0;i<first_link.length;i++){
	 first_link[i].index = i;
	first_link[i].onmouseover = function(){
		first_link[this.index].style.color = "#ffce6f";
		first_link[this.index].style.background = "url(../images/up.jpg) no-repeat right";
		var list = document.getElementsByClassName("list")[this.index];
		var ul = list.getElementsByTagName('ul')[0];
		ul.style.display = "block";
	
	}
	first_link[i].onmouseout = function(){
		first_link[this.index].style.color = "white";
		first_link[this.index].style.background = "url(../images/Down.jpg) no-repeat right";
		var list = document.getElementsByClassName("list")[this.index];
		var ul = list.getElementsByTagName('ul')[0];
		ul.style.display = "none";
	}
}

//隐藏的下拉框
var ul_list = document.getElementsByClassName("ul_list");
for (var i = 0; i< ul_list.length ; i++){
	ul_list[i].index = i;
	ul_list[i].onmouseover = function(){
		ul_list[this.index].style.display = "block";
	}
	ul_list[i].onmouseout = function(){
		ul_list[this.index].style.display = "none";
	}
}

//轮播图
function zidong(){
	var lunbo = document.getElementById("lunbo");
	if(!lunbo.style.left)
		lunbo.style.left = "0px";
	var xpos = parseInt(lunbo.style.left);
	if(xpos==-1200)
	{
		xpos=0;
	}
	else
	{
	xpos = xpos -1200;
	}
	lunbo.style.left = xpos + 'px';
}
setInterval("zidong()",10000);

function clickEvent(){
	var a = setInterval(zidong(),1000);
	window.clearInterval(a);

}

//图片区的箭头
var banner = document.getElementById("banner");
banner.onmouseover = function(){
	var tubiao = document.getElementsByClassName("tubiao");
	for(var i = 0 ;i<tubiao.length; i++){
		tubiao[i].style.visibility = "visible";
	}
}
banner.onmouseout = function(){
	var tubiao = document.getElementsByClassName("tubiao");
	for(var i = 0 ;i<tubiao.length; i++){
		tubiao[i].style.visibility = "hidden";
	}
}


