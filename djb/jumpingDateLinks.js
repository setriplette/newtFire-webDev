function makeHrefDate() {
    /*
     *  Variables:
     *
     *  anchorLink: element that will get the new @href
     *  today: today's date as a string in yyyy-mm-dd format
     *  sessions: all <tr> elements (some of which are don't include dates; these get filtered out later)
     *  dates: array of all dates as strings in yyyy-mm-dd format
     *  target: eventual value of @href attribute
     *
     *  To fix:
     *  Currently push all dates onto sessions array; could filter out late ones first
     *  Currently generates "dnope" as the @href value is the current date is before the beginning of the semester
     *  Currently jumps to the end after the end of the semester; is this what you want?
     *  */
    var anchorLink = document.getElementById('dateRef');
    //var today = new Date().toISOString().split("T")[0];
    //Comment out the preceding line and uncomment the following one for testing
    var today = '2015-10-02';
    var sessions = document.getElementsByTagName('tr');
    var dates =[];
    for (var i = 0, count = sessions.length; i < count; i++) {
        if (sessions[i].id != '') {
            dates.push(sessions[i].id.substr(1));
        }
    }
    if (dates.indexOf(today) != -1) {
        var target = today;
    } else {
        dates.reverse();
        for (i = 0, count = dates.length; i < count; i++) {
            if (dates[i] < today) {
                target = dates[i];
                break;
            }
        }
        if (typeof target === 'undefined') {
            target = 'nope';
        }
    }
    console.log('today  = ' + today + ' (type = ' + typeof today + ')');
    console.log('target = ' + target + ' (type = ' + typeof target + ')');
    console.log('dates = ' + dates + ' (type = ' + typeof dates + ')');
    console.log(dates.indexOf(today));
    anchorLink.setAttribute('href', '#d' + target);
}
window.addEventListener('DOMContentLoaded', makeHrefDate, false);