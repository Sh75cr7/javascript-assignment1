                             // kilometerToMeter


function kilometerToMeter(kilometer) {
    var meter;
    if (kilometer < 0) {
        return 0;
    }
    else {
        meter = kilometer * 1000;
        return meter;
    }
}
var result = kilometerToMeter(1.5);
console.log(result);




                                        // budgetCalculator



function budgetCalculator(watch, phone, laptop) {
    if (watch < 0) {
        return 0;
    }
    if (phone < 0) {
        return 0;
    }
    if (laptop < 0) {
        return 0;
    }

    var ammountOfWatch = watch * 50;
    var ammountOfPhone = phone * 100;
    var ammountOfLaptop = laptop * 500;
    var totalAmmount = (ammountOfWatch + ammountOfPhone + ammountOfLaptop);

    return totalAmmount;
}
var numberOfWatch = 3;
var numberOfPhone = 3;
var numberOfLaptop = 3;


var resultOfBudget = budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop);
console.log(resultOfBudget);





                            // hotelCost


function hotelCost(totalDay) {
    var totalCost = 0;
    if (totalDay < 0) {
        return "Ammount cannot be zero";
    }
    else if (totalDay <= 10 && totalDay > 0) {
        totalCost = totalDay * 100;
        return totalCost;
    }
    else if (totalDay > 10 && totalDay <= 20) {
        totalCost = (10 * 100) + ((totalDay - 10) * 80);
        return totalCost;
    }
    else {
        totalCost = (10 * 100) + (10 * 80) + ((totalDay - 20) * 50);
        return totalCost;
    }

}
var totalDay = 43;
var totalCost = hotelCost(totalDay);
console.log('Total hotelCost = ' + totalCost);




                         // megaFriend


function megaFriend(name) {
    var result = '';
    for (var i = 0; i < name.length; i++) {
        var nameValue = name[i];
        if (nameValue.length > result.length) {
            result = name[i];
        }
    }
    return result;
}

var freiendsName = ["sulayman ", "md sulayman", "md sulayman hosen", "sulayman hosen abir", "Md Sulayman Hosen Abir"]
var largestName = megaFriend(freiendsName);
console.log("The Largest string = " + largestName);

