function signin(){
	document.getElementById("demo").innerHTML="Your username is: "+document.getElementById("username").value;
    	document.getElementById("demo1").innerHTML="Your username is: "+document.getElementById("password").value;
	window.location.href = "./homepage.html";
	}
function generate(){
    	document.getElementById("currprice").value= (Math.random() * 100).toFixed(2);
	xvalues.push(document.getElementById("currprice").value);
	}
    
function buy(){
    	document.getElementById("wallet").value=(document.getElementById("wallet").value)-(document.getElementById("currprice").value);
    }
    
function sell(){
    	(document.getElementById("wallet").value)= parseFloat(document.getElementById("currprice").value)+ parseFloat(document.getElementById("wallet").value);
    }

const xValues = [];
const yValues = [10,20,30,40,50,60,70,80,,90,100];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});
const container = document.getElementById('container');

const registerBtn = document.getElementById('register');

const loginBtn = document.getElementById('login');



registerBtn.addEventListener('click', () => 
{
    container.classList.add("active");
});
loginBtn.addEventListener('click', () => 
{
    container.classList.remove("active");
});
