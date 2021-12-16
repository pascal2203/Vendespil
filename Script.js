
var CardNumberOld = 0;
var score = 0;


function CardsCharacterChecker(CardNumber){

        if (CardNumberr[CardNumber] == 1 ||CardNumberr[CardNumber] == 'BigTurtleDude.jpg'){
            CardNumberr[CardNumber] = 'BigTurtleDude.jpg'
            return 'BigTurtleDude.jpg'
        }
    
        else if (CardNumberr[CardNumber] == 2||CardNumberr[CardNumber] == 'Flyveting.jpg'){
            CardNumberr[CardNumber] = 'Flyveting.jpg'
            return 'Flyveting.jpg'
        }
        else if (CardNumberr[CardNumber] == 3||CardNumberr[CardNumber] == 'Stego.jpg'){
            CardNumberr[CardNumber] = 'Stego.jpg'
            return 'Stego.jpg'
        }
        else if (CardNumberr[CardNumber] == 4||CardNumberr[CardNumber] == 'TRex.jpg'){
            CardNumberr[CardNumber] = 'TRex.jpg'
            return 'TRex.jpg'
        }
        else if (CardNumberr[CardNumber] == 5||CardNumberr[CardNumber] == 'Langhals.jpg'){
            CardNumberr[CardNumber] = 'Langhals.jpg'
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
    
    BetterCardShuffler();
    
    var CardSpawner = [];
    for (ii = 0; ii <= cardamount; ii++){
        CardSpawner.push(ii)
    }

    for (i = 1; i < CardSpawner.length; i++){
        
        Adder = document.getElementById(CardSpawner[i]);
        Adder.style.display = 'initial'; 
        ChangeImage(-CardSpawner[i],'Logo.jpg')          

    }
}
let AngryCloudChecker = 0;
var ClearBoardChecker = 0;
function CheckMatch(CardNumber,CardNumberOld,IdName,IdNameOld){

    if (CardNumberr[CardNumber] == CardNumberr[CardNumberOld]){
        score++
        Score.innerHTML = score;
        setTimeout(() => {
            RemoveCard(IdName,IdNameOld)
            FlippedAmount = 0;
        },  1500);
        ClearBoardChecker++
        if (ClearBoardChecker == cardamount/2){
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
            FlipCards(-IdName,-IdNameOld,'Logo.jpg')
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
var DobbeltTapChecker = -1;
function CardClicked(IdName, NewPicture,CardNumber){
    
    
    if (IdName == DobbeltTapChecker){
        alert("Vælg et andet kort")
    }
    else if (FlippedAmount == 2){
        alert ("vent til kortene er vendt med at klikke igen")
    }
    else if (FlippedAmount < 2){
        DobbeltTapChecker = -1;
        NewPicture = CardsCharacterChecker(CardNumber-1)
        ChangeImage(-IdName,NewPicture)
        FlippedAmount++


        if (FlippedAmount == 1){
            IdNameOld = IdName;
            DobbeltTapChecker = IdName;
            CardNumberOld = CardNumber-1;
        }
        if (FlippedAmount == 2){
            CheckMatch(CardNumber-1,CardNumberOld,IdNameOld,IdName)
        }
    }
    
    else alert("Vent lige til kortene har vendt")

}




function FlipCards(IdName, IdNameOld){
    ChangeImage(IdName,'Logo.jpg')          
    ChangeImage(IdNameOld,'Logo.jpg')
}






var cardamount = 0;
var AntalKort = prompt("Skriv hvor mange kort du vil have, Det skal være minimum 10 og et lige tal", "");

    if (AntalKort < 10){
        cardamount = 10;
    }
    else if (AntalKort > 10){
        debugger
        
        OddCardChecker(AntalKort)
    }
function OddCardChecker(AntalKort){
 
    var EqualChecker = AntalKort;
    var EqualChecker2 = AntalKort;    

    if (EqualChecker % 2 != 1){

         return cardamount = AntalKort
    }
    else if (EqualChecker2 % 2 == 1){

         AntalKort++
         return cardamount = AntalKort
    }
    
}
    
    

var knapnr = 0;
var IdGiver = [];
var jj = 1
var jjj = 1
function CreateCardButtons(){
    
    for (j = 0; j <= cardamount; j++){
        IdGiver.push(j)
    }

    
    for (i = 0; i <= cardamount-1; i++){
        let i = document.createElement("button");

            i.id= IdGiver[jj]
            i.name = "CardCardCard"

            CardNumberGiver = IdGiver[jj]
            i.onclick = function () {
            CardClicked(this.id,1,this.id) 
              }
        document.getElementById("CardStacker").appendChild(i);
        jj++


    };
    for (ii = 1; ii <= cardamount; ii++){
        
        let img = document.createElement("img");
        img.src = "Logo.jpg";
        img.id = -jjj
        img.width = 138.5
        img.height = img.width

        document.getElementById(jjj).appendChild(img);
        jjj++

    };  
    var checker = 0;
    for (i = 1; i <=cardamount; i++){
        checker = document.getElementById(i)
        Cardnumberchecker = checker.id
        console.log(Cardnumberchecker)

}

}
CreateCardButtons()
var CardNumberGiverr = []
var CardNumberr = []
function BetterCardShuffler(){
    var c = 1;
    var u = 1;
    for (uu = 1; uu <= cardamount; uu++){
        if (u == 5){
            CardNumberGiverr.push(u);
            CardNumberr.push(c);
            var c = 1;
            var u = 1;

        }
        else {
            CardNumberGiverr.push(u);
            CardNumberr.push(c);
            c++;
            u++;
        }
    }
    var CardSignaturesSkabelon = CardNumberGiverr;
    var iii = cardamount;
    var ii = 0;
    CardNumberGiverr = CardSignaturesSkabelon;

    for (i = 0; i < CardNumberr.length; i++){

        var MAX = iii;
    
        var initialRandom = Math.random();
    
        var multiplied = initialRandom * MAX;
    
        var iiii = Math.floor(multiplied);
        CardNumberr[ii] = CardNumberGiverr[iiii];
        console.log(CardNumberr)
        CardNumberGiverr.splice(iiii,1);
        ii++;
        iii--;
        
    }
    console.log(CardNumberGiverr)
    console.log(CardNumberr)
    
}
BetterCardShuffler()

