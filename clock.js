// var HOUR = 8;
// var MINUTE = 50;
// var PERIOD = "AM";

function clock(HOUR, MINUTE, PERIOD) {

    if (MINUTE == 15 && PERIOD == "AM") {

    console.log("It's a quarter past", (HOUR), "in the morning")
    }

    else if (MINUTE == 15 && PERIOD == "PM") {
        console.log("It's a quarter past", (HOUR), "in the evening")
    }
    else if (MINUTE > 30 && PERIOD == "AM") {
        console.log("It's almost", (HOUR + 1), "in the morning")
    }
    else if (MINUTE > 30 && PERIOD == "PM") {
        console.log("It's just after", (HOUR), "in the evening")
    }
    else if (MINUTE < 30 && PERIOD == "AM") {
        console.log("It's just after", (HOUR), "in the morning")
    }
    else if (MINUTE < 30 && PERIOD == "PM") {
        console.log("It's almost", (HOUR + 1), "in the evening")
    }

}
// clock(HOUR, MINUTE, PERIOD)
clock(6, 34, "PM")
clock(6, 14, "PM")
clock(6, 34, "AM")
clock(2, 01, "PM")
clock(3, 15, "AM")
clock(9, 15, "PM")
clock(7,18,"PM")

