window.onload = function () {
    var startMatch = document.getElementById('startMatch');
    var timeSeconds = document.getElementById("timeSeconds");
    var timeMinutes = document.getElementById("timeMinutes");
    var timeTenths = document.getElementById("timeTenths");
    var start;
    var elapsed;
    var Interval;

    startMatch.onclick = function () {
        start = new Date().getTime()
        elapsed = '0';
        Interval = setInterval(startTimer, 100);
    }
    function startTimer() {
        var time = new Date().getTime() - start;
        elapsed = Math.floor(time / 1000);
        if (Math.round(elapsed) == elapsed) {
            elapsed += '.0';
        }
        elapsedminutes = Math.floor(elapsed / 60);
        elapsedseconds = elapsed - elapsedminutes * 60;
        if (elapsedseconds < 10) {
            clockseconds = "0" + elapsedseconds;
        } else {
            clockseconds = elapsedseconds;
        }
        if (elapsedminutes < 10) {
            clockminutes = "0" + elapsedminutes;
        } else {
            clockminutes = elapsedminutes;
        }

        if (elapsedminutes == 2 && elapsedseconds == 30) {
            clearInterval(Interval);
        }
        timeTenths.innerHTML = Math.floor(time / 100) % 10;
        timeSeconds.innerHTML = clockseconds;
        timeMinutes.innerHTML = clockminutes;
    }
}