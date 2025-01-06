let ourLoveBtn = document.getElementById('ourLove');
let ourLoveModal = document.getElementById('ourLoveModal');
let ourTimeTogetherBtn = document.getElementById('timeTogether');
let ourTimeTogetherModal = document.getElementById('ourTimeTogetherModal');
let ourFutureBtn = document.getElementById('ourFuture');
let ourFutureModal = document.getElementById('ourFutureModal');
let ourFutureCancelBtn = document.getElementById('ourFutureCancelBtn');
let ourLoveCancelBtn = document.getElementById('ourLoveCancelBtn');
let ourTimeTogetherCancelBtn = document.getElementById('ourTimeTogetherCancelBtn');

ourLoveBtn.onclick = function(){
    ourLoveModal.style.display = 'block';
};

ourLoveCancelBtn.onclick = function(){
    ourLoveModal.style.display = 'none';
}

ourFutureBtn.onclick = function(){
    ourFutureModal.style.display = 'block';
};

ourFutureCancelBtn.onclick = function(){
    ourFutureModal.style.display = 'none';
}

ourTimeTogetherBtn.onclick = function(){
    ourTimeTogetherModal.style.display = 'block';
};

ourTimeTogetherCancelBtn.onclick = function(){
    ourTimeTogetherModal.style.display = 'none';
}

window.onload = dateDiff();

function dateDiff(){
    const date1 = new Date('2021-12-29');
    const date2 = new Date();
    const diffTime = Math.abs(date2-date1);
    const diffDays = Math.floor(diffTime/ (1000 * 60 * 60 * 24));

    years = document.getElementById('date-years');
    years.innerHTML = Math.floor(diffDays/365);

    months = document.getElementById('date-months');
    months.innerHTML = Math.floor(diffDays/(30.44));

    days = document.getElementById('date-days');
    days.innerHTML = diffDays

    hours = document.getElementById('date-hours');
    hours.innerHTML = Math.floor(diffTime/3600000)

}