// kilometer to meter
function kilometerToMeter(kilo){
    var meter = 1000*kilo;
    return meter;
}

var result = kilometerToMeter(5); 
console.log(result);


// budget calculator
function budgetCalculator(watch,mobile,laptop){
    var totalBudget = (10*watch + 100*mobile + 500*laptop);
    return totalBudget;
}

var result = budgetCalculator(1,1,1);
console.log(result);

// hotel cost
function hotelCost(days){
    
    if(days<=10){
        var first = 100*days;
        return first;
    }
    
    else if(days<=20){
        var second = 100*10+(days-10)*80;
         return second;
    }
    else {
        var remain = 100*10+80*10+(days-10)*60;
        return remain;
    }
}

var result = hotelCost(21);
console.log(result);

// searching mega friend
function megaFriend(nameList){
    var big = nameList[0];

    for(var i=0; i<nameList.length ; i++){
        if(big.length <= nameList[i].length){
            big = nameList[i];
        }
    }
    return big;

}
var nameList = ['Ahmed', 'Mahmud' , 'Abbas', 'Khalid' , 'Raju', "pathan",'Shamsuddin'];
var output = megaFriend(nameList)
console.log(output);