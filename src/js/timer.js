class CountdownTimer { 
    constructor(timerID,year,month,day) {
    this.selector = timerID;
    this.targetDate = (new Date(year,month,day)).getTime();
    }
}
const date = new CountdownTimer('#timer-1', 2021, 0, 1);
const timerRef = document.querySelector(date.selector)
const dayRef = timerRef.querySelector('span[data-value="days"]');
const hoursRef = timerRef.querySelector('span[data-value="hours"]');
const minsRef = timerRef.querySelector('span[data-value="mins"]');
const secsRef = timerRef.querySelector('span[data-value="secs"]');


setInterval(()=>{
    const time = date.targetDate - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    dayRef.textContent = days;
    hoursRef.textContent = hours;
    minsRef.textContent = mins;
    secsRef.textContent = secs;
    }, 1000);