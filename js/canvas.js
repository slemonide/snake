var c = document.querySelector('canvas');
c.width = window.innerWidth;
c.height = window.innerHeight;


var ctx = c.getContext("2d");

ctx.arc(50,50,20,0,Math.PI*2);
ctx.fillStyle = "green";
ctx.fill();

