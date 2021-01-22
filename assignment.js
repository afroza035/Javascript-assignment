
 function kilometerToMeter(km){
    if(km >= 1){
        var meter = km * 1000;
        
    }
    else{
        meter = "Error";
    }
    return meter;
}
var meter = kilometerToMeter(5);
console.log(meter);







function budgetCalculator(Watch, Mobile, Laptop){
    if(Watch >= 1 && Mobile >= 1 && Laptop >= 1){
        var price1 = Watch*50;
        var price2 = Mobile*100;
        var price3 = Laptop*500;
        var totalPrice = price1 + price2 + price3;
    }
    else{
        totalPrice = "Error";
    }

    return totalPrice;
}
var totalPrice = budgetCalculator(4, 5, 3);
console.log(totalPrice);






function hotelCost(stayHotel) {
    var rate = 0;
    if (stayHotel <= 10 && stayHotel >= 1) {
        rate = stayHotel * 100;
    }
    else if(stayHotel <= 20 && stayHotel >= 11) {
        var firstStep = 10 * 100;
        var remaining = stayHotel - 10;
        var secondStep = remaining * 80;
        rate = firstStep + secondStep;
    }
    else if(stayHotel <= 0){
        rate = "Error";
    }
    else {
        var firstStep = 10 * 100;
        var secondStep = 10 * 80;
        var remaining = stayHotel - 20;
        var thirdStep = remaining * 50;
        rate = firstStep + secondStep + thirdStep;
    }
    return rate;
}
var count = hotelCost(15);
console.log(count);






function megaFriend(buddyName) {
    var largeElement = [];
    for (var i = 0; i < buddyName.length; i++) {

        if (buddyName[i].length > largeElement.length) {
            largeElement = buddyName[i];
        }
    }
    return largeElement;
}
var largeName = megaFriend(["Fahim", "Farabe", "Sadia", "Laboni", "Tanha", "Moontaha"]);
console.log(largeName);












