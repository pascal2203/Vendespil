/*class Cards{

    constructor(CardNumber){
        this.CardNumber = CardNumber;




    }



}
*/
var Card1 = 0;
var Card2 = 0;
var Card3 = 0;
var Card4 = 0;
var Card5 = 0;
var Card6 = 0;
var Card7 = 0;
var Card8 = 0;
var Card9 = 0;
var Card10 = 0;


var CardSignatures = [1,2,3,4,5,1,2,3,4,5];
var Cards = [Card1,Card2,Card3,Card4,Card5,Card6,Card7,Card8,Card9,Card10];

for (i = 0; i < Cards.length; i++){
    for(ii = 0; ii < CardSignatures.length;){
        iii = 10;
        //iiii = Math.round(Math.random(0,iii)*10)
        //iiii = random(0,iii)
        var MAX = iii;

        var initialRandom = Math.random();

        var multiplied = initialRandom * MAX;

        var iiii = Math.floor(multiplied);
        console.log(CardSignatures[iiii])
        CardSignatures.pop(iiii)
        Cards.pop(i)
        iii--
        //console.log(iiii)
    }
}



var FlippedAmount = 0;

function CardClicked(IdName, NewPicture){
    ChangeImage(IdName,NewPicture)
    FlippedAmount++
    
    if (FlippedAmount == 2){

        setTimeout(() => {
            FlipCards(IdName,IdNameOld,'BackSideOfCard.jpg')
        },  2000);

        //FlipCards(IdName,IdNameOld,'BackSideOfCard.jpg')
        /*ChangeImage(IdName,'BackSideOfCard.jpg')          
        ChangeImage(IdNameOld,'BackSideOfCard.jpg')*/
        FlippedAmount = 0
    

    }
    else if (FlippedAmount == 1){
        return IdNameOld = IdName;
    } 

    


}




function FlipCards(IdName, IdNameOld){
    ChangeImage(IdName,'BackSideOfCard.jpg')          
    ChangeImage(IdNameOld,'BackSideOfCard.jpg')
}
/*function FlipBack(IdName,Oldpicture,IdNameOld){
    ChangeImage(IdName,Oldpicture)
    ChangeImage(IdNameOld,Oldpicture)
}*/


/*function ChangeImage(OriginalPicture,NewPicture,UpgradeAmount, UpgradesNeeded){// Her har vi en funktion der fanger billedets id og ændrer det til et nyt når man har nok af upgraden
    var image = document.getElementById(OriginalPicture);//Her fanger vi det billed vi starter med
if (UpgradeAmount === UpgradesNeeded) {// Her tjekker vi for om man har nok upgrades
    image.src = NewPicture;// Her ændrer vi billedet til det nye
    }
}*/

























/* class Cards {
    constructor(Xpos,Ypos,width,height, picture){
        this.Xpos = Xpos;
        this.Ypos = Ypos;
        this.width = width;
        this.height = height;
        //this.picture = picture;
    }


    function draw(Xpos,Ypos,width,height, picture) {

        //Setting variables
        Xpos = 20;
        Ypos = 150;
        width = 150;
        height = 200;


        const canvas = document.querySelector('#canvas');

        if (!canvas.getContext) {
            return;
        }
        const ctx = canvas.getContext('2d');

        for (i = 34;i < 800; i+=Xpos+width){

            ctx.fillRect(i,Ypos,width,height)
            ctx.fillRect(i,Ypos*3,width,height)

            

        }
        
        
        if (Xpos+width<900){
            ctx.fillRect(Xpos,Ypos,width,height)
            ctx.fillRect(Xpos,Ypos,width,height)


        }
    
    }
draw();

}
let Card1 = new Cards(0,0,0,0)

function draw(){

    const canvas = document.querySelector('#canvas');

            if (!canvas.getContext) {
                return;
            }
            const ctx = canvas.getContext('2d');
}

draw(Card1)
*/

