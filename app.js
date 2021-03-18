const timer = document.querySelector('.timer__show');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let second =0;
let minute =0;
let houre = 0;
start.addEventListener('click', () => {
    const Interval = setInterval(() => {
        second +=1;
    
        if (second > 59) {
            minute += 1;
            second = 0;
        }
        if (minute > 59) {
            houre += 1;
            minute = 0;
        }
        
        if (minute < 10 && second < 10 && houre < 10) {
            timer.innerText = "0" + houre + ":" + "0" + minute + ":" + "0" + second;
        } else if (minute < 10 && second > 10 && houre < 10) {
             timer.innerText = "0" + houre + ":" + "0" + minute + ":" + second;
        } else if (minute > 10 && second > 10 && houre < 10) {
             timer.innerText = "0" + houre + ":" + minute + ":" + second;
        } else if (minute > 10 && second > 10 || houre > 10) {
             timer.innerText =  houre + ":" + minute + ":" + second;
        };
        
        
    }, 1000);
    pause.addEventListener('click', () => {
        clearInterval(Interval);
    });
    reset.addEventListener('click', () => {
        second = 0;
        minute = 0;
        houre = 0;
        timer.innerText = "0" + houre + ":" + "0" + minute + ":" + "0" + second;
        clearInterval(Interval);
    })
});



