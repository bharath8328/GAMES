

var x=100;
var y=100;
var xc=+10;
var yc=+7;
var game=document.getElementById('game');
var games=game.getContext("2d");
function line(){
    games.clearRect(0,0,1000,1000);
games.beginPath();
games.arc(x,y,25,0,2*Math.PI);
games.fillStyle="red"
games.fill();
x+=xc;
y+=yc;
    if(x>=990||x<=10)
    xc*=-1;
    if(y>=993||y<=7)
    yc*=-1;
}
window.onload=line;
setInterval(line,1);