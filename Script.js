


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

        if (Cards[CardNumber] == 1 ||Cards[CardNumber] == 'CaptainAmericaHead.jpg'){
            Cards[CardNumber] = 'CaptainAmericaHead.jpg'
            return 'CaptainAmericaHead.jpg'
        }
    
        else if (Cards[CardNumber] == 2||Cards[CardNumber] == 'HulkCard.jpg'){
            Cards[CardNumber] = 'HulkCard.jpg'
            return 'HulkCard.jpg'
        }
        else if (Cards[CardNumber] == 3||Cards[CardNumber] == 'IronManHead.jpg'){
            Cards[CardNumber] = 'IronManHead.jpg'
            return 'IronManHead.jpg'
        }
        else if (Cards[CardNumber] == 4||Cards[CardNumber] == 'SpiderManCard.jpg'){
            Cards[CardNumber] = 'SpiderManCard.jpg'
            return 'SpiderManCard.jpg'
        }
        else if (Cards[CardNumber] == 5||Cards[CardNumber] == 'ThorCard.jpg'){
            Cards[CardNumber] = 'ThorCard.jpg'
            return 'ThorCard.jpg'
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

function ShowCardAgain(){
    debugger
    CardShuffler();

    for (i = 0; i <CardsID.length; i++){
        Adder = document.getElementById(CardsID[i]);
        Adder.style.display = 'initial'; 
        ChangeImage(CardsID[i],'BackSideOfCard.jpg')          

    }
}
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
        
        setTimeout(() => {
            FlipCards(IdName,IdNameOld,'BackSideOfCard.jpg')
            FlippedAmount = 0;
        },  1500);

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
    ChangeImage(IdName,'BackSideOfCard.jpg')          
    ChangeImage(IdNameOld,'BackSideOfCard.jpg')
}

