var daysBetweenDates = function (date1, date2) {

    let a = new Date(date1);
    let b = new Date(date2);
    let millisecondBetweenTwoDay = a.getTime() - b.getTime();
    return Math.abs(millisecondBetweenTwoDay) / 1000 / 60 / 60 / 24;

};