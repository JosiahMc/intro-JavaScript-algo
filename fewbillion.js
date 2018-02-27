

// var penny = .01;
// var dayEnd = 30;
// var dayStart

function fewbillion (penny,dayStart,dayEnd) {
    while(dayStart < dayEnd) {
        penny = penny * 2;
        dayStart++;
        if(penny > 10000) {
            console.log(dayStart)
            break;
        }
   
    }
    console.log(penny);
}


fewbillion (.01,1,Infinity);