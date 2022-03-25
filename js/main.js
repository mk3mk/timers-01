document.addEventListener("DOMContentLoaded", () => {


let btnStart = document.querySelectorAll('.btn-start');
let btnStop = document.querySelectorAll('.btn-stop');
let btnDelete = document.querySelectorAll('.btn-delete');
let btnAdd = document.querySelectorAll('.btn-add');



for (let i = 0; i < btnStart.length; i++) {
  btnStart[i].addEventListener('click', timerStart);
    function timerStart(){

      let fcs = btnStart[i].closest('.timer-container').querySelectorAll('.fcs');
        for (let y = 0; y < fcs.length; y++) {
            fcs[y].style.background = 'green';
        }

      let fcm = btnStart[i].closest('.timer-container').querySelectorAll('.fcm');
        for (let y = 0; y < fcm.length; y++) {
            fcm[y].style.background = 'blue';
        }

      let fch = btnStart[i].closest('.timer-container').querySelectorAll('.fch');
        for (let y = 0; y < fch.length; y++) {
            fch[y].style.background = 'gold';
        }

      let fcd = btnStart[i].closest('.timer-container').querySelectorAll('.fcd');
        for (let y = 0; y < fcd.length; y++) {
            fcd[y].style.background = 'red';
        }
      
    }
}




// конец программы
}, false);