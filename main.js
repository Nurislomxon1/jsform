// var tripMoney = Number(prompt('Alisher qancha pulingiz bor sayohat uchun'));

// var dollarkurs = 10900;
// var euroKurs = 12272.64;
// var planeCost = 500; 
// var hotelCost = 258;
// var museumCost = 120;
// var tripCost = planeCost * dollarkurs + hotelCost * dollarkurs +  museumCost * euroKurs;
// if (tripMoney >= tripCost) {
//     console.log('oq yol Alisher mazza qb aylanib kegin');
// } 
// else{ 
//     console.log('Ozgina sabr qil Puling yetmaydi');
// }

var elFormfizz = document.querySelector(".fizz-form")
var elInputfizz = document.querySelector(".fizz-input")
var elDiv = document.querySelector(".fizz-answer")

elFormfizz.addEventListener("submit", function(evt){
    evt.preventDefault()
    var son = Number(elInputfizz.value)
    
    if(son % 3 == 0 && son % 5 == 0){
        elDiv.textContent = "FizzBuzz";
    }
    
    else if (son % 3 == 0){
        elDiv.textContent = "Fizz";
    }
    else if (son % 5 == 0){
        elDiv.textContent = "Buzz";
    }
    else{
        elDiv.textContent = son + " 3ga ham 5ga ham bo`linmaydi";
    }
})


var elForm = document.querySelector(".user-form");
var elInput = elForm.querySelector(".user-money");
var elAnswer = document.querySelector(".user-answer");
var elSelect = document.querySelector(".user-select");

elForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    var inputValue = Number(elInput.value * elSelect.value);
    elAnswer.textContent = inputValue;
})   