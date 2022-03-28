document.addEventListener("DOMContentLoaded", () => {

let body = document.querySelector('#body');
let main = document.querySelector('#main');
let header = document.querySelector('#header');
let infoTimers = document.querySelector('#info-timers');
let infoPort = document.querySelector('#info-port');
let infoNumber = document.querySelector('#info-number');

let btnStart  = document.querySelectorAll('.btn-start');
let btnDeleteAll = document.querySelectorAll('.btn-delete');
let btnAddAll = document.querySelectorAll('.btn-add');
let timerContainer    = document.querySelectorAll('.timer-container');
let timerNumber    = document.querySelectorAll('.timer-number');

let port = false;
let timerMain;

infoTimers.innerHTML = 'Таймеров = ' + timerContainer.length;
infoPort.innerHTML = 'port = ' + port;
infoNumber.innerHTML = 'port = ' + timerNumber.length;



for ( let i = 0; i < timerContainer.length; i++ ){
  timerNumber.innerHTML = '150';
}


for ( let i = 0; i < btnDeleteAll.length; i++ ){
  btnDeleteAll[i].addEventListener('click', deleteTimer);
  function deleteTimer(){
    btnDeleteAll[i].closest('.timer-container').classList.add('container-to-delete-1');

    function delete1() {
      btnDeleteAll[i].closest('.timer-container').classList.add('container-to-delete-2');
    }
    setTimeout(delete1, 500);

    function delete2() {
      btnDeleteAll[i].closest('.timer-container').classList.add('container-to-delete-3');
    }
    setTimeout(delete2, 800);

    function delete3() {
      btnDeleteAll[i].closest('.timer-container').remove();
      timerContainer    = document.querySelectorAll('.timer-container');
      btnStart  = document.querySelectorAll('.btn-start');
      console.log('удалено. теперь кнопок = ' + btnStart.length + '<br>' + 'контейнеров = ' + timerContainer.length);
      infoTimers.innerHTML = 'Таймеров = ' + timerContainer.length;
      infoPort.innerHTML = 'port = ' + port;

    }
    setTimeout(delete3, 820);

  }

}
    


for ( let i = 0; i < btnAddAll.length; i++ ){
  btnAddAll[i].addEventListener('click', addTimer);
    function addTimer(){
    // btnDeleteAll[i].closest('.timer-container').style.background = 'green';
    var clonedNode = btnDeleteAll[i].closest('.timer-container').cloneNode(true);
    main.appendChild(clonedNode).style.background = 'green';
    timerContainer    = document.querySelectorAll('.timer-container');
    btnStart  = document.querySelectorAll('.btn-start');
    console.log(timerContainer);
    infoTimers.innerHTML = 'Таймеров = ' + timerContainer.length;
    infoPort.innerHTML = 'port = ' + port;
  }
}







for (let i = 0; i < btnStart.length; i++) {
  btnStart[i].addEventListener('click', timerStart);
    function timerStart(){

      if ( port == true ){
        port = false;
      }

      timerNumber.innerHTML = i;

      let fcs = btnStart[i].closest('.timer-container').querySelector('.fcs');
      let fcm = btnStart[i].closest('.timer-container').querySelector('.fcm');
      let fch = btnStart[i].closest('.timer-container').querySelector('.fch');
      let fcd = btnStart[i].closest('.timer-container').querySelector('.fcd');
      let tmok = btnStart[i].closest('.timer-container').querySelector('.timer-end');
      let btnClose = btnStart[i].closest('.timer-container').querySelector('.btn-close');
      let btnDelete = btnStart[i].closest('.timer-container').querySelector('.btn-delete');
      let btnAdd = btnStart[i].closest('.timer-container').querySelector('.btn-add');

      
      let btnPause = btnStart[i].closest('.timer-container').querySelector('.btn-pause');
      let btnStop = btnStart[i].closest('.timer-container').querySelector('.btn-stop');

      btnStart[i].classList.add('btn-invisible');
      btnPause.classList.remove('btn-invisible');
      btnStop.classList.remove('btn-invisible');
      

      fcs.style.background = 'green';
      fcm.style.background = 'cyan';
      fch.style.background = 'gold';
      fcd.style.background = 'red';

      let fcs_value = fcs.value;
      let fcm_value = fcm.value;
      let fch_value = fch.value;
      let fcd_value = fcd.value;

      console.log('клик по кнопке Запуск, сейчас таких кнопок =' + btnStart.length)
            
      func_fcs();
      function func_fcs(){

      timerMain = setTimeout(function(){
            fcs.value = fcs_value;
            fcm.value = fcm_value;
            fch.value = fch_value;
            fcd.value = fcd_value;
              if( fcs_value > 0){
                fcs_value --;
              }else if( fcs_value == 0 && fcm_value > 0){
                fcs_value = 59;
                fcm.value --;
                fcm_value --;
              }else if( fcs_value == 0 && fcm_value == 0 && fch_value > 0){
                fcs_value = 59;
                fcm_value = 59;
                fch.value --;
                fch_value --;
              }else if( fcs_value == 0 && fcm_value == 0 && fch_value == 0 && fcd_value > 0 ){
                fcs_value = 59;
                fcm_value = 59;
                fch_value = 24;
                fcd.value --;
                fcd_value --;
              }else if( fcs_value == 0 && fcm_value == 0 && fch_value == 0 && fcd_value == 0 && port == false ){
                func_timer_stop();
              }
            func_fcs();
        }, 30);  
      }




      btnDelete.addEventListener('click', function() {
        btnDelete.style.background = 'green';
      })





  function func_timer_stop(){

    if (i == 0){
      btnStart[i].style.background = 'red';
      btnStart[i].closest('.timer-container').querySelector('.timer-end').style.background = 'url("img/bg-01.gif") center center/100% 100% no-repeat';
    }else if (i == 1){
      btnStart[i].style.background = 'green';
      btnStart[i].closest('.timer-container').querySelector('.timer-end').style.background = 'url("img/bg-02.gif") center center/100% 100% no-repeat';
    }else if (i == 2){
      btnStart[i].style.background = 'blue';
      btnStart[i].closest('.timer-container').querySelector('.timer-end').style.background = 'url("img/bg-03.gif") center center/100% 100% no-repeat';
    }else if (i == 3 || i > 3){
      btnStart[i].style.background = 'cyan';
      btnStart[i].closest('.timer-container').querySelector('.timer-end').style.background = 'red';
    }
    
    console.log(tmok);
    tmok.classList.add('visible');
    tmok.classList.remove('invisible');


  btnClose.addEventListener('click', function() {
    tmok.classList.remove('visible');
    tmok.classList.add('invisible');
    port = true;
    clearTimeout(timerMain);

    btnStart[i].classList.remove('btn-invisible');
    btnPause.classList.add('btn-invisible');
    btnStop.classList.add('btn-invisible');
  })


    }

  }    

}






window.addEventListener('scroll', function() {
  if ( window.pageYOffset < 50){
    // body.style.background = 'blue';
    header.classList.remove('header-up');
    header.classList.add('header-down');
  }else{
    // body.style.background = 'green';
    header.classList.add('header-up');
    header.classList.remove('header-down');
  }   
  
});



// конец программы
}, false);


