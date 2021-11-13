// Mål
/*
Få sat skyer op som classes
Lav en sky class med en move metode som kan kaldes i game draweren
Se om man kan få noget til at komme ud af skyerne som fx regn

*/


//to set up canvas and context:
function drawgame(xpos,ypos,width,height, colour) {
    var c = document.querySelector('#board')

    if (!c.getContext) {
        return;
    }

    var ctx = c.getContext("2d");
    ctx.fillStyle = colour;
    ctx.fillRect(xpos,ypos,width,height);

}

window.onload = function () {
    setInterval(Gamedrawer, 1000/60);
};
let cloudspeed = 0;
function drawcloud(cloudXPosition,cloudyPosition, cloudWidth,CloudHeight){
    var c = document.querySelector('#board')

    if (!c.getContext) {
        return;
    }

    var ctx = c.getContext("2d");
    var img = document.getElementById("Cloud");
    debugger
    cloudspeed++;
    ctx.drawImage(img, cloudXPosition, cloudyPosition, cloudWidth,CloudHeight);

}

function Gamedrawer(){
    var c = document.querySelector('#board')

    if (!c.getContext) {
        return;
    }
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 10000, 10000);

    drawgame(0,600,1500,100,"green");// venstre
    //drawgame(1165,600,335,100,"green");// højre
    //drawgame(315,600,870,100,"green"); // midten
    drawgame(0,100,330,500,"blue");// venstre
    drawgame(1165,100,335,500,"blue");// midten
    drawgame(315,100,870,500,"blue"); // højre
    drawcloud(100+cloudspeed,100,100,100)
    drawcloud(200+cloudspeed,150,300,150)
    drawgame(315,125,870,550, "brown");// venstre

}
/*drawgame(0,600,330,100,"green");// venstre
drawgame(1165,600,335,100,"green");// højre
drawgame(315,600,870,100,"green"); // midten

drawgame(0,100,330,500,"blue");// venstre
drawgame(1165,100,335,500,"blue");// midten
drawgame(315,100,870,500,"blue"); // højre

drawgame(315,125,870,550, "brown");// venstre*/




/*function drawcloud() {
    const canvas = document.querySelector('#board');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = colour;
    ctx.fillRect(xpos,ypos,width,height);

}*/

