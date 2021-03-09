//var selecti=(Math.floor(Math.random()*4))+1;
    var selecti=0;
	var mouseX;
	var mouseY;
	var wide=70;
	var inc=0;
	var interval;
	var allow=0;// addition
	var count;
	var xo;
	var yo;
	var dist;
	var dx;
	var dy;
	
	var radi;
	
    // Cache a reference to the html element
    var canvas = document.getElementById('canvas');

    // Set the drawing surface dimensions to match the canvas
    canvas.width  = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;

    // Get a reference to the 2d drawing context / api
    var ctx = canvas.getContext('2d');
	
	//will be used in 3rd weber's law program...>>
	//give a color to the canvas but in drawing surface:--->
	ctx.fillStyle='blue';
    //for circle.....
    ctx.beginPath();
    
	function start_func()
	{
	if(allow==0)
	{
		//document.getElementById("output").innerHTML="Started the TIMER";
	if (allow==0)
	{
		selecti=(Math.floor(Math.random()*4))+1;
	}
			
	count=0;
	interval=setInterval(function(){
	/*if (count>5)
	{
	  clearInterval(interval);
	}*/
	count++;
	inc=inc+0.25;
	
	if (selecti==1)
	{
		xo=50;
		yo=100;
		ctx.beginPath();
		radi=25+inc;
		ctx.arc(xo, yo, radi, 0, 2 * Math.PI,false);
		ctx.fill();
		document.getElementById("munu").innerHTML="A=34t+5600"+"<br/>"+"A="+((34*count)+5600)+"<br/>"+"..A..diff..%="+((17/28)*count).toFixed(2);
		
	//ctx.fillRect(20, 20, wide+inc, 40);
	}
	
	if (selecti==2)
	{
		xo=150;
		yo=100;
		radi=25+inc;
		ctx.beginPath();
		ctx.arc(xo, yo, radi, 0, 2 * Math.PI,false);
		ctx.fill();
		document.getElementById("munu").innerHTML="A=34t+5600"+"<br/>"+"A="+((34*count)+5600)+"<br/>"+"..A..diff..%="+((17/28)*count).toFixed(2);
	//ctx.fillRect(130, 20, wide+inc, 40);
	}
	
	if (selecti==3)
	{
		xo=250;
		yo=100;
		radi=25+inc;
		ctx.beginPath();
		ctx.arc(xo, yo, radi, 0, 2 * Math.PI,false);
		ctx.fill();
		document.getElementById("munu").innerHTML="A=34t+5600"+"<br/>"+"A="+((34*count)+5600)+"<br/>"+"..A..diff..%="+((17/28)*count).toFixed(2);
	//ctx.fillRect(240, 20, wide+inc, 40);
	}
	
	if (selecti==4)
	{
		xo=350;
		yo=100;
		radi=25+inc;
		ctx.beginPath();
		ctx.arc(xo, yo, radi, 0, 2 * Math.PI,false);
		ctx.fill();
		document.getElementById("munu").innerHTML="A=34t+5600"+"<br/>"+"A="+((34*count)+5600)+"<br/>"+"..A..diff..%="+((17/28)*count).toFixed(2);
	//ctx.fillRect(350, 20, wide+inc, 40);
	}
	
	
	//timer.......previouslee..
	
	
	document.getElementById("raju").innerHTML=count+" s ";
	
	},1000);
		
		}
	}
	
	
	//some correction needed later...
	//ctx.fillRect(20, 20,  wide, 40);
	
	ctx.arc(50, 100, 25, 0, 2 * Math.PI,false);
	ctx.fill();
	
	//ctx.fillRect(130, 20,  wide, 40);
	ctx.arc(150, 100, 25, 0, 2 * Math.PI,false);
	ctx.fill();
	
	
	//ctx.fillRect(240, 20, wide, 40);
	ctx.arc(250, 100, 25, 0, 2 * Math.PI,false);
	ctx.fill();
	
	ctx.arc(350, 100, 25, 0, 2 * Math.PI,false);
	ctx.fill();
	
	
	
	
		function reset_func()
		{
		//document.getElementById("output").innerHTML="Reset_rajdeep";
		 
		  selecti=0;//for selecting rectangular blocks....
		 
		 //reloading the page........
		 
		 allow=0;
		 location.reload(true);
		 
		}
		//.......
		//start of stop_func
		//.......
		function stop_func()
		{
		//document.getElementById("output").innerHTML="Stop the watch";
		//to remove the string start_rajdeep 
		//document.getElementById("output").innerHTML=""; 
			ctx.canvas.addEventListener('click',function(event){
			mouseX=event.clientX - ctx.canvas.offsetLeft;
			mouseY=event.clientY - ctx.canvas.offsetTop;
		
		
		//document.getElementById("munu").innerHTML=mouseX;
		
		if(selecti==1)//just for checking purpose i am keeping that....
		{
			dx=mouseX-xo;
			dy=mouseY-yo;
		 
		 dist=Math.sqrt((dx*dx)+(dy*dy));
		 //alert(mouseX+"  "+mouseY);
		 //alert("xo="+xo+"yo="+yo);
		 //alert("radius="+radi);
		 //alert(dx+" || "+dy);
		 
		 //alert(dist);
		 //alert(dx+" "+dy);
		 
		 //dist=Math.sqrt((dx*dx)+(dy*dy));
		 
		 //alert(dist+" || "+radi);
		 
		 if(dist<radi)
		 {
			 alert("success");
			 //document.write("success");
			 alert("A=34t+5600 :: A="+((34*count)+5600)+"..A..diff..%="+((17/28)*count).toFixed(2));
			 //document.getElementById("munu").innerHTML="A=34t+5600"+"<br/>"+"A="+((34*count)+5600)+"<br/>"+"..A..diff..%="+((17/28)*count).toFixed(2);
			 clearInterval(interval);
			 
			  alert("dist: "+dist+"radi :"+radi);
			 
			 alert("allow :"+allow);
			 
			 alert("mouseX"+mouseX+"mouseY"+mouseY+"select"+selecti);
			 
			document.getElementById("munu").innerHTML="A=34t+5600"+"<br/>"+"A="+((34*count)+5600)+"<br/>"+"..A..diff..%="+((17/28)*count).toFixed(2);

		 }
		 else
		 {
			 alert("unsuccess");
			 
			 alert("mouseX"+mouseX+"mouseY"+mouseY+"select"+selecti);
			 
			 alert("dist: "+dist+"radi :"+radi);
		 }
		}
		else if(selecti==2)
		{
			
			dx=mouseX-xo;
			dy=mouseY-yo;
			
			dist=Math.sqrt((dx*dx)+(dy*dy));
			/*alert(mouseX+"  "+mouseY);
		 alert("xo="+xo+"yo="+yo);
			alert("radius="+radi);
			
			alert(dx+" || "+dy);*/
			
			if(dist<radi)
		 {
			 alert("success");
			 
			 alert("A=34t+5600 :: A="+((34*count)+5600)+"..A..diff..%="+((17/28)*count).toFixed(2));
			 
			  alert("dist: "+dist+"radi :"+radi);
			 document.getElementById("munu").innerHTML="A=34t+5600"+"<br/>"+"A="+((34*count)+5600)+"<br/>"+"..A..diff..%="+((17/28)*count).toFixed(2);
			 clearInterval(interval);
			 
			 alert("mouseX"+mouseX+"mouseY"+mouseY+"select"+selecti);
			 
			 alert("allow :"+allow);
		//	 document.getElementById("munu").innerHTML="A=34t+5600"+"<br/>"+"A="+((34*count)+5600)+"<br/>"+"..A..diff..%="+((17/28)*count).toFixed(2);
		 
		 }
		 else
		 {
			 alert("unsuccess");
			 
			 alert("mouseX"+mouseX+"mouseY"+mouseY+"select"+selecti);
			 
			 alert("dist: "+dist+"radi :"+radi);
		 }
		}
		
		else if(selecti==3)
		{
			
			dx=mouseX-xo;
			dy=mouseY-yo;
			
			dist=Math.sqrt((dx*dx)+(dy*dy));
			/*alert(mouseX+"  "+mouseY);
		 alert("xo="+xo+"yo="+yo);
			alert("radius="+radi);
			
			alert(dx+" || "+dy);
			*/
			
			if(dist<radi)
		 {
			 alert("success");
			 
			 document.getElementById("munu").innerHTML="A=34t+5600"+"<br/>"+"A="+((34*count)+5600)+"<br/>"+"..A..diff..%="+((17/28)*count).toFixed(2);
			 alert("A=34t+5600 :: A="+((34*count)+5600)+"..A..diff..%="+((17/28)*count).toFixed(2));
			 clearInterval(interval);
			 
			 alert("allow :"+allow);
			 
			  alert("dist: "+dist+"radi :"+radi);
			  
			  alert("mouseX"+mouseX+"mouseY"+mouseY+"select"+selecti);
	//		 document.getElementById("munu").innerHTML="A=34t+5600"+"<br/>"+"A="+((34*count)+5600)+"<br/>"+"..A..diff..%="+((17/28)*count).toFixed(2);
		 }
		 else
		 {
			 alert("unsuccess");
			
			alert("dist: "+dist+"radi :"+radi);
			
			alert("mouseX"+mouseX+"mouseY"+mouseY+"select"+selecti);
		 }
		}
		
		else if(selecti==4)
		{
		   
			dx=mouseX-xo;
			dy=mouseY-yo;
			
			dist=Math.sqrt((dx*dx)+(dy*dy));
			/*alert(mouseX+"  "+mouseY);
		 alert("xo="+xo+"yo="+yo);
			alert("radius="+radi);
			
			alert(dx+" || "+dy);
			
			*/
			if(dist<radi)
		 {
			 alert("success");
			 
			 document.getElementById("munu").innerHTML="A=34t+5600"+"<br/>"+"A="+((34*count)+5600)+"<br/>"+"..A..diff..%="+((17/28)*count).toFixed(2);
			 
			 alert("A=34t+5600 :: A="+((34*count)+5600)+"..A..diff..%="+((17/28)*count).toFixed(2));
			 
			 clearInterval(interval);
			 
			  alert("dist: "+dist+"radi :"+radi);
			 alert("mouseX"+mouseX+"mouseY"+mouseY+"select"+selecti);
			 alert("allow :"+allow);
//document.getElementById("munu").innerHTML="A=34t+5600"+"<br/>"+"A="+((34*count)+5600)+"<br/>"+"..A..diff..%="+((17/28)*count).toFixed(2);
		 }
		 else
		 {
			 alert("unsuccess");
			 alert("dist: "+dist+"radi :"+radi);
			 alert("mouseX"+mouseX+"mouseY"+mouseY+"select"+selecti);
		 }
		 
		 
		}
		
		});
		
		 
		 
		 
		allow=1;
		//addition
		 
		}//end of stop_func...
	
	
	
	
	
