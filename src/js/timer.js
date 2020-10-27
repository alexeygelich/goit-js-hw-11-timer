class CountdownTimer { 
    constructor(year,month,day) {
    this.selector = Date.now();
    this.targetDate = (new Date(year,month,day)).getTime();
    }
}

const dayRef = document.querySelector('span[data-value="days"]');
const hoursRef = document.querySelector('span[data-value="hours"]');
const minsRef = document.querySelector('span[data-value="mins"]');
const secsRef = document.querySelector('span[data-value="secs"]');


setInterval(()=>{
    const date = new CountdownTimer(2021, 0, 1);
    const time = date.targetDate - date.selector;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    dayRef.textContent = days;
    hoursRef.textContent = hours;
    minsRef.textContent = mins;
    secsRef.textContent = secs;
    }, 1000);