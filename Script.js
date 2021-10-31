


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

var iii = 10;
var ii = 0;
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
function CardsCharacterChecker(CardNumber){
        debugger

        if (Cards[CardNumber] == 1 || Cards[CardNumber] =='CaptainAmericaCard.jpg' ){
            Cards[CardNumber] = 'CaptainAmericaCard.jpg'
            return 'CaptainAmericaCard.jpg'
        }
    
        else if (Cards[CardNumber] == 2|| Cards[CardNumber] =='HulkCard.jpg'){
            Cards[CardNumber] = 'HulkCard.jpg'
            return 'HulkCard.jpg'
        }
        else if (Cards[CardNumber] == 3|| Cards[CardNumber] =='IronManCard.jpg'){
            Cards[CardNumber] = 'IronManCard.jpg'
            return 'IronManCard.jpg'
        }
        else if (Cards[CardNumber] == 4|| Cards[CardNumber] =='SpiderManCard.jpg'){
            Cards[CardNumber] = 'SpiderManCard.jpg'
            return 'SpiderManCard.jpg'
        }
        else if (Cards[CardNumber] == 5|| Cards[CardNumber] =='ThorCard.jpg'){
            Cards[CardNumber] = 'ThorCard.jpg'
            return 'ThorCard.jpg'
        }
    }




var FlippedAmount = 0;

function CardClicked(IdName, NewPicture,CardNumber){
    NewPicture = CardsCharacterChecker(CardNumber)
    ChangeImage(IdName,NewPicture)
    FlippedAmount++
    
    if (FlippedAmount == 2){

        setTimeout(() => {
            FlipCards(IdName,IdNameOld,'BackSideOfCard.jpg')
        },  2000);
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

