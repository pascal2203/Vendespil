function drawgame(xpos,ypos,width,height, colour) {
    var c = document.querySelector('#board')

    if (!c.getContext) {
        return;
    }

    var ctx = c.getContext("2d");
    ctx.fillStyle = colour;
    ctx.fillRect(xpos,ypos,width,height);

}

/*
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

}*/


// Mål
/*
Få sat skyer op som classes
Lav en sky class med en move metode som kan kaldes i game draweren
Se om man kan få noget til at komme ud af skyerne som fx regn

*/

class Cloud{

    constructor(cloudXPosition,cloudyPosition, cloudWidth,CloudHeight,speed){

        this.cloudXPosition = cloudXPosition;
        this.cloudyPosition = cloudyPosition;
        this.cloudWidth = cloudWidth;
        this.CloudHeight = CloudHeight;
        this.speed = speed;

    }
    SpeedOfCloud(){
        if (this.cloudXPosition+this.speed >= 1500){
            this.speed = 0;
            return this.cloudXPosition = 0-this.cloudWidth; 
        }
        else if (this.cloudXPosition+this.speed < 1500){
            this.speed++
            return this.speed+this.cloudXPosition; 
        }
    }

    DrawCloud(){
        var c = document.querySelector('#board')

        if (!c.getContext) {
        return;
        }

        var ctx = c.getContext("2d");
        var img = document.getElementById("Cloud");
        ctx.drawImage(img, this.cloudXPosition+this.speed, this.cloudyPosition, this.cloudWidth,this.CloudHeight);

    }
}
let Cloud1 = new Cloud(100,100,280,150,1)
let Cloud2 = new Cloud(970,300,280,150,1)
let Cloud3 = new Cloud(700,100,280,150,1)
let Cloud4 = new Cloud(91,400,280,150,1)
let Cloud5 = new Cloud(270,250,280,150,1)
let Cloud6 = new Cloud(570,300,280,150,1)
let Cloud7 = new Cloud(1400,350,280,150,1)
let Cloud8 = new Cloud(700,430,280,150,1)
let Cloud9 = new Cloud(1450,100,280,150,1)
let Cloud10 = new Cloud(1150,100,280,150,1)

let CloudSpawner =[Cloud1,Cloud2,Cloud3,Cloud4,Cloud5,Cloud6,Cloud7,Cloud8,Cloud9,Cloud10]

window.onload = function () {
    setInterval(Gamedrawer, 1000/60);
};

function Gamedrawer(){
    var c = document.querySelector('#board')

    if (!c.getContext) {
        return;
    }
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 10000, 10000);

    drawgame(0,600,1500,100,"green");// venstre
    drawgame(0,100,1500,500,"blue");// venstre
    /*drawcloud(100+cloudspeed,100,100,100)
    drawcloud(200+cloudspeed,150,300,150)*/
    for (i = 0; i < CloudSpawner.length; i++){

        CloudSpawner[i].SpeedOfCloud();
        CloudSpawner[i].DrawCloud();
    }
    
    drawgame(315,125,870,550, "brown");// venstre

}
