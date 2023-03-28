addDays = function(date, days) {
    var date = new Date(date);
    date.setDate(date.getDate() + days);
    return date;
}