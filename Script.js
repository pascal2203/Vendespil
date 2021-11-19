










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
var CardNumberOld = 0;
var score = 0;

var CardSignatures = [1,2,3,4,5,1,2,3,4,5];
var Cards = [Card1,Card2,Card3,Card4,Card5,Card6,Card7,Card8,Card9,Card10];


CardShuffler();
function CardShuffler(){
    var CardSignaturesSkabelon = [1,2,3,4,5,1,2,3,4,5];
    var iii = 10;
    var ii = 0;
    CardSignatures = CardSignaturesSkabelon;

    for (i = 0; i < Cards.length; i++){

        var MAX = iii;
    
        var initialRandom = Math.random();
    
        var multiplied = initialRandom * MAX;
    
        var iiii = Math.floor(multiplied);
        Cards[ii] = CardSignatures[iiii];
        console.log(Cards)
        //console.log(Cards[ii])
        CardSignatures.splice(iiii,1);
        ii++;
        iii--;
        
    }
}
//function GameRestart()

function CardsCharacterChecker(CardNumber){

        if (Cards[CardNumber] == 1 ||Cards[CardNumber] == 'BigTurtleDude.jpg'){
            Cards[CardNumber] = 'BigTurtleDude.jpg'
            return 'BigTurtleDude.jpg'
        }
    
        else if (Cards[CardNumber] == 2||Cards[CardNumber] == 'Flyveting.jpg'){
            Cards[CardNumber] = 'Flyveting.jpg'
            return 'Flyveting.jpg'
        }
        else if (Cards[CardNumber] == 3||Cards[CardNumber] == 'Stego.jpg'){
            Cards[CardNumber] = 'Stego.jpg'
            return 'Stego.jpg'
        }
        else if (Cards[CardNumber] == 4||Cards[CardNumber] == 'TRex.jpg'){
            Cards[CardNumber] = 'TRex.jpg'
            return 'TRex.jpg'
        }
        else if (Cards[CardNumber] == 5||Cards[CardNumber] == 'Langhals.jpg'){
            Cards[CardNumber] = 'Langhals.jpg'
            return 'Langhals.jpg'
        }
    }

function RemoveCard(IdName, IdNameOld){
    Remover = document.getElementById(IdName);
    Remover2 = document.getElementById(IdNameOld);
    Remover.style.display = 'none';  
    Remover2.style.display = 'none';

    /*Remover.remove();
    Remover2.remove();*/
}

var CardsID = ['Card1Picture','Card2Picture','Card3Picture','Card4Picture','Card5Picture','Card6Picture','Card7Picture','Card8Picture','Card9Picture','Card10Picture']
var audio = new Audio('LynLyd.mp3')
audio.currentTime = 1; 


function ShowCardAgain(){
    debugger
    CardShuffler();

    for (i = 0; i <CardsID.length; i++){
        Adder = document.getElementById(CardsID[i]);
        Adder.style.display = 'initial'; 
        ChangeImage(CardsID[i],'BagsideKort.jpg')          

    }
}
let AngryCloudChecker = 0;
var ClearBoardChecker = 0;
function CheckMatch(CardNumber,CardNumberOld,IdName,IdNameOld){

    if (Cards[CardNumber] == Cards[CardNumberOld]){
        score++
        Score.innerHTML = score;
        setTimeout(() => {
            RemoveCard(IdName,IdNameOld)
            FlippedAmount = 0;
        },  1500);
        ClearBoardChecker++
        if (ClearBoardChecker == 5){
            alert("Vent venligst på at brættet genstarter")
            setTimeout(() => {
                ShowCardAgain();
            }, 2000);
            ClearBoardChecker = 0
        }
    }
    
    else if (CardNumber != CardNumberOld){
        ChangeImage('Cloud',"AngryCloud.jpg")   
        audio.play();
        AngryCloudChecker = 1     
        setTimeout(() => {
            FlipCards(IdName,IdNameOld,'BagsideKort.jpg')
            FlippedAmount = 0;
        },  2000);
        setTimeout(() =>{
            ChangeImage('Cloud',"Cloud.jpg")        
            audio.pause(); 
            audio.currentTime = 1; 
            AngryCloudChecker = 0  

        }, 3000);

    }

}






var FlippedAmount = 0;
var DobbeltTapChecker = 0;
function CardClicked(IdName, NewPicture,CardNumber){
    if (IdName == DobbeltTapChecker){
        alert("Vælg et andet kort")
    }
    else if (FlippedAmount == 2){
        alert ("vent til kortene er vendt med at klikke igen")
    }
    else if (FlippedAmount < 2){
        DobbeltTapChecker = 0;
        NewPicture = CardsCharacterChecker(CardNumber)
        ChangeImage(IdName,NewPicture)
        FlippedAmount++


        if (FlippedAmount == 1){
            IdNameOld = IdName;
            DobbeltTapChecker = IdName;
            CardNumberOld = CardNumber;
        }
        if (FlippedAmount == 2){
            CheckMatch(CardNumber,CardNumberOld,IdNameOld,IdName)
        }
    }
    
    else alert("Vent lige til kortene har vendt")

}




function FlipCards(IdName, IdNameOld){
    ChangeImage(IdName,'BagsideKort.jpg')          
    ChangeImage(IdNameOld,'BagsideKort.jpg')
}


var cardamount = 10;
var knapnr = 0;
function CreateCardButtons(){

    for (i = 0; i <= cardamount; i++){
        let i = document.createElement("button");
        i.onclick = function () {
            alert("Button is clicked");
    };
    document.body.appendChild(i);

    }
}
CreateCardButtons()
