function signin(){
	document.getElementById("demo").innerHTML="Your username is: "+document.getElementById("username").value;
    	document.getElementById("demo1").innerHTML="Your username is: "+document.getElementById("password").value;
	window.location.href = "./homepage.html";
	}
function generate(){
    	document.getElementById("currprice").value= (Math.random() * 100).toFixed(2);
	}
    
function buy(){
    	document.getElementById("wallet").value=(document.getElementById("wallet").value)-(document.getElementById("currprice").value);
    }
    
function sell(){
    	(document.getElementById("wallet").value)= parseFloat(document.getElementById("currprice").value)+ parseFloat(document.getElementById("wallet").value);
    }
