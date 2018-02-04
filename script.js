function startTimer(duration, display) {
    var start = Date.now(),
        delta,
        seconds,
        minutes;

    function timer() {
        delta = duration - (Math.round((Date.now() - start) / 1000));

        minutes = Math.floor(delta / 60);
        seconds = Math.floor(delta % 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (delta <= 0) {
            start = Date.now() + 1000;
        }
    }

    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var duration = (+prompt("на сколько минут запустить таймер?") * 60);
    var display = document.getElementById("timer");
    startTimer(duration, display);
};