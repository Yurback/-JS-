function timer() {
    let deadline = "2019-10-09 23:00:00";
    console.log(new Date(Date.parse(deadline)));
    console.log(new Date(Date.parse(deadline) - 1000 * 60 * 60 * 3));
    console.log(Date.parse(new Date()));
    console.log(new Date());


    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - new Date(),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60));

        if (seconds < 10) seconds = "0" + seconds;
        if (minutes < 10) minutes = "0" + minutes;
        if (hours < 10) hours = "0" + hours;

        return {
            total: t,
            seconds: seconds,
            minutes: minutes,
            hours: hours
        }
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector(".seconds"),
            timerInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timerInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        }
    }

    setClock('timer', deadline)
}

module.exports = timer;