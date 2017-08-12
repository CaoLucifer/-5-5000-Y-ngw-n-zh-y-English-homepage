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
function trBian(){
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
}
//隐藏的下拉框

function dropDown(){
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
}
//左侧导航框
function leftNav(){
	var nav_a = document.getElementsByClassName("nav_a");
	for(var i=0; i< nav_a.length; i++){
		nav_a[i].index = i;
		nav_a[i].onmouseover = function(){
			nav_a[this.index].style.color = "#F40";
			nav_a[this.index].style.background = "url(../images/rt2.png) no-repeat right center";
		}
		nav_a[i].onmouseout = function(){
			nav_a[this.index].style.color = "#000";
			nav_a[this.index].style.background = "url(../images/rt1.png) no-repeat right center";
		}
	}
}
addloadEvent(leftNav);
addloadEvent(dropDown);
addloadEvent(trBian);