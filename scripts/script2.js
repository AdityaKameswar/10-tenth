// JavaScript Document
var i, b, bg1,bg2 ,bg3 , bg4, bg5, scTop,pos1,pos2, pos3, pos4, pos5, el, maxWidth, snow, flake, no, bodyWidth, up, down, leftElements, rightElements, speed, stepTime,bubbles, bubble, sinFrame, counter, blurred;


function setWidth(){
	"use strict";
	counter=0;
	speed=5; //autoscroll speed in px per step
	stepTime=1; //auto sroll step time delay in ms
	sinFrame=0;
	blurred=document.getElementById("blur");
	bodyWidth= window.getComputedStyle(document.getElementById('container')).width;//width for wind(); and bubbles
	snow=document.getElementById("snow");//snow id
	bubbles=document.getElementById("bubbles");//snow id
	//document.body.style.height=document.getElementById("container").scrollHeight+"px";
	//el=document.getElementById("film");
	//el.style.width=el.children.length+"00%";
	//maxWidth =(el.children.length-1)+"00%";
}






function paraScroll(){
	"use strict";
	//document.getElementById("container").style.top = "-" + document.body.scrollTop + "px";
	bg1= document.getElementById("background1");
	bg2= document.getElementById("background2");
	bg3= document.getElementById("background3");
	bg4= document.getElementById("background4");
	bg5= document.getElementById("background5");
	scTop= document.getElementsByTagName("body")[0].scrollTop;
	pos1=scTop*0.60;
	pos2=scTop*0.48;
	pos3=scTop*0.36;
	pos4=scTop*0.24;
	pos5=scTop*0.12;
	bg1.setAttribute('style',"transform: translate3d(0px, "+ (pos1-0) +"px, 0px)");
	bg2.setAttribute('style',"transform: translate3d(0px, "+ (pos2-230) +"px, 0px)");
	bg3.setAttribute('style',"transform: translate3d(0px, "+ (pos3-90) +"px, 0px)");
	bg4.setAttribute('style',"transform: translate3d(-10px,"+ (pos4+10) +"px, 0px)");
	bg5.setAttribute('style',"transform: translate3d(0px, "+ (pos5+90) +"px, 0px)");
}

function slide(a){
	"use strict";
	if(a){
		if(el.style.left==="0%"){
			el.style.left="-"+maxWidth;
		}
		else{
			el.style.left=(parseInt(el.style.left)+100)+"%";
		}
	}
	else{
		if(el.style.left==="-"+maxWidth){
			el.style.left="0%";
		}
		else{
			el.style.left=(parseInt(el.style.left)-100)+"%";
		}
	}
}

function scrollChange(){
	"use strict";
	leftElements = document.getElementsByClassName("left-article");
	rightElements = document.getElementsByClassName("right-article");
	
	
	if(document.getElementById("something").offsetTop - document.body.scrollTop < 200){

		for(i=0; i<leftElements.length; i++){
			leftElements[i].style.left="0%";
			leftElements[i].style.opacity="1";
		}
		for(i=0; i<rightElements.length; i++){
			rightElements[i].style.right="0%";
			rightElements[i].style.opacity="1";
		}
	}
	else{
		for(i=0; i<leftElements.length; i++){
			leftElements[i].style.left="-50%";
			leftElements[i].style.opacity="-2";
		}
		for(i=0; i<rightElements.length; i++){
			rightElements[i].style.right="-50%";
			rightElements[i].style.opacity="-2";
		}
	}
	
	leftElements = document.getElementsByClassName("left-article2");
	rightElements = document.getElementsByClassName("right-article2");
	
	
	if(document.getElementById("something2").offsetTop - document.body.scrollTop < 200){

		for(i=0; i<leftElements.length; i++){
			leftElements[i].style.left="0%";
			leftElements[i].style.opacity="1";
		}
		for(i=0; i<rightElements.length; i++){
			rightElements[i].style.right="0%";
			rightElements[i].style.opacity="1";
		}
	}
	else{
		for(i=0; i<leftElements.length; i++){
			leftElements[i].style.left="-50%";
			leftElements[i].style.opacity="-2";
		}
		for(i=0; i<rightElements.length; i++){
			rightElements[i].style.right="-50%";
			rightElements[i].style.opacity="-2";
		}
	}
	
	leftElements = document.getElementsByClassName("left-article3");
	rightElements = document.getElementsByClassName("right-article3");
	
	
	if(document.getElementById("something3").offsetTop - document.body.scrollTop < 200){

		for(i=0; i<leftElements.length; i++){
			leftElements[i].style.left="0%";
			leftElements[i].style.opacity="1";
		}
		for(i=0; i<rightElements.length; i++){
			rightElements[i].style.right="0%";
			rightElements[i].style.opacity="1";
		}
	}
	else{
		for(i=0; i<leftElements.length; i++){
			leftElements[i].style.left="-50%";
			leftElements[i].style.opacity="-2";
		}
		for(i=0; i<rightElements.length; i++){
			rightElements[i].style.right="-50%";
			rightElements[i].style.opacity="-2";
		}
	}
	
	
	if(document.getElementById("else").offsetTop - document.body.scrollTop < 300){
		document.getElementById("else").style.opacity= "1";
	}
	else{
		document.getElementById("else").style.opacity= "0";
	}
	
	if(document.getElementById("else2").offsetTop - document.body.scrollTop < 300){
		document.getElementById("else2").style.opacity= "1";
	}
	else{
		document.getElementById("else2").style.opacity= "0";
	}
	
	if(document.getElementById("else3").offsetTop - document.body.scrollTop < 300){
		document.getElementById("else3").style.opacity= "1";
	}
	else{
		document.getElementById("else3").style.opacity= "0";
	}
}

function snowFrame(){
	"use strict";
	//console.log("snow instance");
	flake=snow.children;
	for(i=0; i<flake.length; i++){
		//console.log(parseInt((window.getComputedStyle(flake[i]).top)));
		//console.log (parseInt((window.getComputedStyle(flake[i]).top))>500);
		if(parseInt((window.getComputedStyle(flake[i]).top)) > 600){
			
			flake[i].style.transitionDuration="0s";
			//console.log("td 0");
			flake[i].style.top="0px";
			//console.log("top 1");
			
			assignValues(flake[i]);
			
			pullDown(flake[i]);
		}
	}
}


function assignValues(a){
	"use strict";
	setTimeout(function(){
		assignValues2(a);
	},5);
}

function assignValues2(a){
	"use strict";
	no=Math.random();
	//console.log("r no");
	a.style.width=((10*no)+5)+"px";
	//console.log("wid r");
	a.style.height=((10*no)+5)+"px";
	//console.log("height r");
	
	no=Math.random();
	//console.log("r no");
	a.style.opacity=no+0.1;
	//console.log("opacity r");
	
	no=Math.random();
	//console.log("r no");
	a.style.left=(no*100)+"%";
	//console.log("left r");
}

function pullDown(a){
	"use strict";
	
	setTimeout(function(){
		pullDown2(a);
	},50);
}

function pullDown2(a){
	"use strict";
	
	no=Math.random();
	//console.log("r no");
	a.style.transitionDuration=(no*3+2)+"s";
	//console.log("td r");
	
	a.style.top="601px";
	//console.log("top 501-------------------------------");
}

function wind(e){
	"use strict";
	snow.setAttribute('style','transform: rotate('+ (-(((parseFloat(e.offsetX)/parseFloat(bodyWidth))*20)-10)) +'deg)');
}

function goTop(){
	
	clearTimeout(up);
	clearTimeout(down);
	
	up=setTimeout(function(){
		window.scrollTo(0,document.body.scrollTop - speed);
		document.getElementById("container").style.transitionDuration="0s";
		document.getElementById("container").style.top= -(document.body.scrollTop - speed);
		setTimeout(function(){document.getElementById("container").style.transitionDuration="2s";},1);
		if(document.body.scrollTop>1){
			goTop();
		}
	},stepTime);	
}

function goDown(){
	"use strict";
	clearTimeout(up);
	clearTimeout(down);
	down=setTimeout(function(){
		window.scrollTo(0,document.body.scrollTop + speed);
		document.getElementById("container").style.transitionDuration="0s";
		document.getElementById("container").style.top= -(document.body.scrollTop + speed);
		setTimeout(function(){document.getElementById("container").style.transitionDuration="2s";},1);
		if(document.body.scrollTop < (document.body.scrollHeight - window.innerHeight/*target height*/)){
			goDown();
		}
	},stepTime);	
}

function stopMove(){
	"use strict";
	clearTimeout(up);
	clearTimeout(down);
}

function makeBubble(){
	"use strict";
	b=document.createElement("bubble");
	b.style.left= (Math.random() * (parseInt(bodyWidth)/2) + (parseInt(bodyWidth)/5)) + "px";
	b.style.bottom= "0px";
	b.setAttribute("onMouseDown","breakBubble(this);");
	b.dataset.speed=Math.random()*2+1;
	b.dataset.freq=2 + Math.random()*1.5;
	b.dataset.ampl=1 + Math.random()*2;
	bubbles.appendChild(b);
}

function removeElement(a){
	"use strict";
	a.parentNode.removeChild(a);
}

function breakBubble(a){
	"use strict";
	a.parentNode.removeChild(a);
	counter++;
	if(counter<0){counter=0;}
	else{document.getElementById("score").innerHTML=counter;}
	makeBubble();
}

function bubbleFrame(){
	"use strict";
	sinFrame++;
	if(sinFrame>360){sinFrame=0;}
	bubble=bubbles.children;
	for(i=0; i<bubble.length; i++){
		if(parseInt(bubble[i].style.bottom)>500){
			
			bubble[i].parentNode.removeChild(bubble[i]);
			counter--;
			if(counter<0){counter=0;}
			else{document.getElementById("score").innerHTML=counter;}
			makeBubble();
			
		}
			
		else{
			bubble[i].style.bottom=(parseFloat(bubble[i].style.bottom) + parseFloat(bubble[i].dataset.speed)) +"px";
			bubble[i].style.left=(((Math.cos((sinFrame/360) * Math.PI * parseFloat(bubble[i].dataset.freq)))* parseFloat(bubble[i].dataset.ampl))+parseFloat(bubble[i].style.left)) +"px";
		}
	}
}

function setBlur(a){
	"use strict";
	console.log(a.offsetX,a.offsetY);
	blurred.style.clipPath="circle(100px at "+a.offsetX+"px "+a.offsetY+"px)";
}

function removeBlur(){
	"use strict";
	blurred.style.clipPath="circle(0px at center)";
}
























