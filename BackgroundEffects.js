function drawgame(xpos,ypos,width,height, colour) {
    var c = document.querySelector('#board')

    if (!c.getContext) {
        return;
    }

    var ctx = c.getContext("2d");
    ctx.fillStyle = colour;
    ctx.fillRect(xpos,ypos,width,height);

}
function DrawCanvasline() {
    const canvas = document.querySelector('#board');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    // set line stroke and line width
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(1500, 100);
    ctx.stroke();

}


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

        if (AngryCloudChecker == 0)[
            ctx.drawImage(img, this.cloudXPosition+this.speed, this.cloudyPosition, this.cloudWidth,this.CloudHeight)

        ]
        else if (AngryCloudChecker == 1)[
            ctx.drawImage(img, this.cloudXPosition+this.speed, this.cloudyPosition, this.cloudWidth+this.cloudWidth,this.CloudHeight+this.CloudHeight)

        ]

    }
}

let CloudSpawner =[
    new Cloud(100,100,280,150,1),
    new Cloud(970,300,280,150,1),
    new Cloud(91,400,280,150,1),
    new Cloud(91,400,280,150,1),
    new Cloud(270,250,280,150,1),
    new Cloud(570,300,280,150,1),
    new Cloud(1400,350,280,150,1),
    new Cloud(700,430,280,150,1),
    new Cloud(1450,100,280,150,1),
    new Cloud(1150,100,280,150,1)
]

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
    for (i = 0; i < CloudSpawner.length; i++){

        CloudSpawner[i].SpeedOfCloud();
        CloudSpawner[i].DrawCloud();
    }
    DrawCanvasline();

    //drawgame(315,125,870,550, "brown");// venstre

}


