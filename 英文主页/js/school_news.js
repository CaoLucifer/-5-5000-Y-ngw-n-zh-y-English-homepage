
window.onload = function(){
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

}