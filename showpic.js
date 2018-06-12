function showpics(){
	var ul = document.getElementById("wrap").getElementsByTagName("ul")[0];
	var lis = ul.getElementsByTagName("li");
	var btn1 = document.getElementById("button1");
	var btn2 = document.getElementById("button2");
	var imgs = ul.getElementsByTagName("img");
	var speed = 3;
	var time = null;
	ul.innerHTML += ul.innerHTML;
	ul.style.width = (lis[0].offsetWidth+20)*lis.length + "px";
	time = setInterval(function(){
			ul.style.left = ul.offsetLeft - speed + "px";
			if(ul.offsetLeft <= -ul.offsetWidth/2)	ul.style.left ="0px";
			else if(ul.offsetLeft >=0)ul.style.left = -ul.offsetWidth/2 + "px";
		},30);
	btn1.onmouseover = function(){speed = 3;}
	btn2.onmouseover = function(){speed = -3;}
	for(var i in imgs){
		imgs[i].onmouseover = function(){
				clearInterval(time);
				for(var i = 0;i<imgs.length;i++)imgs[i].className = "none";
				this.className = "active";
			}
		imgs[i].onmouseout = function(){
				time = setInterval(function(){
					ul.style.left = ul.offsetLeft - speed + "px";
					if(ul.offsetLeft <= -ul.offsetWidth/2)ul.style.left ="0px";
					else if(ul.offsetLeft >=0)ul.style.left = -ul.offsetWidth/2 + "px";
					},30);
				for(var i = 0;i<imgs.length;i++)imgs[i].className = "none";
			}
		}
}