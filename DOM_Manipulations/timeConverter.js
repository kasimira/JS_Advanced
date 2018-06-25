function attachEventsListeners() {

    let inputDays = document.getElementById("days");
    let inputHours = document.getElementById("hours");
    let inputMinutes = document.getElementById("minutes");
    let inputSeconds = document.getElementById("seconds");

    document.getElementById("daysBtn").addEventListener("click",convertDays);
    document.getElementById("hoursBtn").addEventListener("click",convertHours);
    document.getElementById("minutesBtn").addEventListener("click",convertMinutes);
    document.getElementById("secondsBtn").addEventListener("click",convertSeconds);

    function convertDays () {
        let days = Number(inputDays.value);
        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        inputHours.value = hours;
        inputMinutes.value = minutes;
        inputSeconds.value = seconds;
    }

    function  convertHours() {

        let hours = Number(inputHours.value);
        let days = hours / 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        inputDays.value = days;
        inputMinutes.value = minutes;
        inputSeconds.value = seconds;
    }

    function convertMinutes() {

        let minutes = Number(inputMinutes.value);
        let hours = minutes/60;
        let days= hours /24 ;
        let seconds = minutes * 60;
        inputDays.value = days;
        inputHours.value = hours;
        inputSeconds.value = seconds;
    }


    function convertSeconds() {
        let seconds = Number(inputSeconds.value);
        let minutes = seconds/60;
        let hours = minutes/60;
        let days = hours/24;

        inputDays.value = days;
        inputHours.value = hours;
        inputMinutes.value=minutes;
    }
}