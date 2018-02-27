





function birthday (daysuntilmybirthday) {

    while (daysuntilmybirthday > 30) {
    console.log(daysuntilmybirthday + " days until my birthday, OH THE UNFATHOMABLE SADDNESS!!!")
    break;
    }
    while (daysuntilmybirthday <= 30 && daysuntilmybirthday > 5) {
    console.log("WOW ONLY " + daysuntilmybirthday + "until my bday!")
    break;
    }
    while (daysuntilmybirthday <= 5 && daysuntilmybirthday > 0) {
    console.log(daysuntilmybirthday+" days until the best day like everrr!!")
        break; 
    }
    while (daysuntilmybirthday == 0) {
        console.log("FINALLY HASHTAG-blessed!!!")
        break;
    }

    
}
birthday(60);
birthday(30);
birthday(4);
birthday (0);

