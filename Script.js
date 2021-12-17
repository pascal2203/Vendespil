// Variabler til funkionen ShowCardAgain
var audio = new Audio('LynLyd.mp3')
audio.currentTime = 1; 

// Variabler til funkionen CardClicked
var CardNumberOld = 0;
var score = 0;

// Variabler til funkionen CheckMatch
let AngryCloudChecker = 0;
var ClearBoardChecker = 0;

// Variabler til funkionen CardClicked
var FlippedAmount = 0;
var DobbeltTapChecker = -1;

// Variabler til funkionen OddCardChecker
var FUckhead = 0;
var AntalKort = prompt("Skriv hvor mange kort du vil have, Det skal være minimum 10 og et lige tal", "");

// Variabler til funkionen CreateCardButtons
var knapnr = 0;
var IdGiver = [];
var jj = 1
var jjj = 1

// Variabler til funkionen BetterCardShufller
var AntalStik = AntalKort/2;
var CardNumberGiverr = []
var CardNumberr = []

// Kalder start funktioner
OddCardChecker(AntalKort)
CreateCardButtons()
BetterCardShuffler()

//Her starter jeg med at tjekke for om den givne værdi i prompten er lige og om den er over 10
function OddCardChecker(AntalKort){
    debugger
 
    var EqualChecker = AntalKort;
    var EqualChecker2 = AntalKort;    

    if (EqualChecker % 2 != 1){

        FUckhead = AntalKort
         return AntalKort

    }
    else if (EqualChecker2 % 2 == 1){

         AntalKort++
         FUckhead = AntalKort
    }   
}

function CreateCardButtons(){
    AntalKort = FUckhead;
    AntalKort++
    for (j = 0; j < AntalKort; j++){
        IdGiver.push(j)
    }
    AntalKort--
    for (i = 0; i < AntalKort; i++){
        let i = document.createElement("button");

            i.id= IdGiver[jj]
            i.name = "CardCardCard"

            CardNumberGiver = IdGiver[jj]
            i.onclick = function () {
            CardClicked(this.id,1,this.id) 
              }
        document.getElementById("CardStacker").appendChild(i);
        jj++

    }
    for (ii = 1; ii <= AntalKort; ii++){
        
        let img = document.createElement("img");
        img.src = "Logo.jpg";
        img.id = -jjj
        img.width = 138.5
        img.height = img.width

        document.getElementById(jjj).appendChild(img);
        jjj++

    }  
    var checker = 0;
    for (i = 1; i <=AntalKort; i++){
        checker = document.getElementById(i)
        Cardnumberchecker = checker.id

    }
}

function BetterCardShuffler(){
    
    var c = 1;
    var u = 1;
    CardNumberGiverr = []
    CardNumberr = []
    AntalStik = AntalKort/2;
    if (AntalStik >= 5){
        
        for (uu = 1; uu <= AntalKort; uu++){
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
        AntalStik -= 5;
        console.log("Antallet af stik tilbage"+ AntalStik)
    }
    if (AntalStik < 5){
        
        for (uu = 1; uu <= AntalKort; uu++){
            if (u == AntalStik){
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
        AntalStik -= AntalStik
        console.log("Antallet af stik tilbage"+ AntalStik)
    }
    var CardSignaturesSkabelon = CardNumberGiverr;
    var iii = AntalKort
    var ii = 0;
    CardNumberGiverr = CardSignaturesSkabelon;

    for (i = 0; i < CardNumberr.length; i++){

        var MAX = iii;
    
        var initialRandom = Math.random();
    
        var multiplied = initialRandom * MAX;
    
        var iiii = Math.floor(multiplied);
        CardNumberr[ii] = CardNumberGiverr[iiii];
        CardNumberGiverr.splice(iiii,1);
        ii++;
        iii--;
        
    }
}
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
function CheckMatch(CardNumber,CardNumberOld,IdName,IdNameOld){
    if (CardNumberr[CardNumber] == CardNumberr[CardNumberOld]){
        score++
        Score.innerHTML = score;
        setTimeout(() => {
            RemoveCard(IdName,IdNameOld)
            FlippedAmount = 0;
        },  1500);
        ClearBoardChecker++
        if (ClearBoardChecker == AntalKort/2){
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
function RemoveCard(IdName, IdNameOld){
    Remover = document.getElementById(IdName);
    Remover2 = document.getElementById(IdNameOld);
    Remover.style.display = 'none';  
    Remover2.style.display = 'none';
}
function ShowCardAgain(){
    BetterCardShuffler();
    var CardSpawner = [];
    for (ii = 0; ii <= AntalKort; ii++){
        CardSpawner.push(ii)
    }
    for (i = 1; i < CardSpawner.length; i++){ 
        Adder = document.getElementById(CardSpawner[i]);
        Adder.style.display = 'initial'; 
        ChangeImage(-CardSpawner[i],'Logo.jpg')          
    }
}

function FlipCards(IdName, IdNameOld){
    ChangeImage(IdName,'Logo.jpg')          
    ChangeImage(IdNameOld,'Logo.jpg')
}

