document.addEventListener("DOMContentLoaded", () => {

let body = document.querySelector('#body');
let main = document.querySelector('#main');
let header = document.querySelector('#header');
let infoTimers = document.querySelector('#info-timers');
let infoPort = document.querySelector('#info-port');
let infoNumber = document.querySelector('#info-number');
let infoPlus = document.querySelector('#info-plus');
let infoDelete = document.querySelector('#info-delete');


main.addEventListener('mouseover', updateAll)
function updateAll(){
    timerContainer    = document.querySelectorAll('.timer-container');
    timerNumber    = document.querySelectorAll('.timer-number');
    btnStart  = document.querySelectorAll('.btn-start');
    btnDeleteAll = document.querySelectorAll('.btn-delete');
    
    console.log(timerContainer.length);

    infoTimers.innerHTML = 'Таймеров = ' + timerContainer.length;
    infoPort.innerHTML = 'port = ' + port;
    infoNumber.innerHTML = 'таймеров = ' + timerNumber.length;
    infoDelete.innerHTML = 'удалить = ' + btnDeleteAll.length;
}




let btnStart  = document.querySelectorAll('.btn-start');
let btnDeleteAll = document.querySelectorAll('.btn-delete');
let btnAddAll = document.querySelectorAll('.btn-add');
let timerContainer    = document.querySelectorAll('.timer-container');
let timerNumber    = document.querySelectorAll('.timer-number');
let timerContainerNone    = document.querySelector('.timer-container--none');



let port = false;
let timerMain;

infoTimers.innerHTML = 'Таймеров = ' + timerContainer.length;
infoPort.innerHTML = 'port = ' + port;
infoNumber.innerHTML = 'таймеров = ' + timerNumber.length;
infoDelete.innerHTML = 'удалить = ' + btnDeleteAll.length;



for ( let i = 0; i < timerContainer.length; i++ ){
  timerNumber[i].innerHTML = i;
}



for ( let i = 0; i < btnDeleteAll.length; i++ ){
  btnDeleteAll[i].addEventListener('click', deleteTimer);
  function deleteTimer(){

    this.closest('.timer-container').className = 'container container-to-delete-1';

    function delete1this() {
      let thisTimer = document.querySelector('.container-to-delete-1');
      thisTimer.className = 'container container-to-delete-2';
    }
    setTimeout(delete1this, 500);

    function delete2this() {
      let thisTimer = document.querySelector('.container-to-delete-2');
      thisTimer.className = 'container container-to-delete-3';
    }
    setTimeout(delete2this, 800);

    function delete3this() {
      let thisTimer = document.querySelector('.container-to-delete-3');
      thisTimer.remove();
    }
    setTimeout(delete3this, 820);

  }

}
    


for ( let i = 0; i < btnAddAll.length; i++ ){
  btnAddAll[i].addEventListener('click', addTimer);
    function addTimer(){
      plusTimer();
  }
}


function update(){
    timerContainer    = document.querySelectorAll('.timer-container');
    timerNumber    = document.querySelectorAll('.timer-number');
    btnStart  = document.querySelectorAll('.btn-start');
    btnDeleteAll = document.querySelectorAll('.btn-delete');
    
    console.log(timerContainer.length);

    infoTimers.innerHTML = 'Таймеров = ' + timerContainer.length;
    infoPort.innerHTML = 'port = ' + port;
    infoNumber.innerHTML = 'таймеров = ' + timerNumber.length;
    infoDelete.innerHTML = 'удалить = ' + btnDeleteAll.length;
}

infoPlus.addEventListener('click', plusTimer);
function plusTimer(){
  // infoPlus.style.background = 'gold';
  let newTimer = timerContainerNone.cloneNode(true);
  newTimer.className = "container timer-container";
  
  timerNumber    = document.querySelectorAll('.timer-number');
  infoNumber.innerHTML = 'таймеров = ' + timerNumber.length;
  main.append(newTimer);
  update();

  newTimer.querySelector('.timer-number').style.background = "gold";
  newTimer.querySelector('.timer-number').innerHTML = timerContainer.length;

  newTimer.querySelector('.btn-delete').style.background = "red";
  newTimer.querySelector('.btn-delete').addEventListener('click', deleteThisTimer);
  newTimer.querySelector('.btn-add').addEventListener('click', plusTimer);
  newTimer.querySelector('.btn-start').addEventListener('click', startThisTimer);

  btnStart  = document.querySelectorAll('.btn-start');

  function startThisTimer(){
    this.closest('.timer-container').style.background = 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)';
    this.closest('.timer-container').querySelector('.fcs').style.background = 'green';

      let fcs = this.closest('.timer-container').querySelector('.fcs');
      let fcm = this.closest('.timer-container').querySelector('.fcm');
      let fch = this.closest('.timer-container').querySelector('.fch');
      let fcd = this.closest('.timer-container').querySelector('.fcd');
      let tmok = this.closest('.timer-container').querySelector('.timer-end');
      let btnClose = this.closest('.timer-container').querySelector('.btn-close');
      let btnDelete = this.closest('.timer-container').querySelector('.btn-delete');
      let btnAdd = this.closest('.timer-container').querySelector('.btn-add');

      
      let btnPause = this.closest('.timer-container').querySelector('.btn-pause');
      let btnStop = this.closest('.timer-container').querySelector('.btn-stop');

      this.classList.add('btn-invisible');
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

  }

  function deleteThisTimer(){

    this.closest('.timer-container').className = 'container container-to-delete-1';

    function delete1this() {
      let thisTimer = document.querySelector('.container-to-delete-1');
      thisTimer.className = 'container container-to-delete-2';
    }
    setTimeout(delete1this, 500);

    function delete2this() {
      let thisTimer = document.querySelector('.container-to-delete-2');
      thisTimer.className = 'container container-to-delete-3';
    }
    setTimeout(delete2this, 800);

    function delete3this() {
      let thisTimer = document.querySelector('.container-to-delete-3');
      thisTimer.remove();
    }
    setTimeout(delete3this, 820);
  }

}



for (let i = 0; i < btnStart.length; i++) {
  btnStart[i].addEventListener('click', timerStart);
    function timerStart(){

      if ( port == true ){
        port = false;
      }

      timerNumber.innerHTML = i;

      let fcs = this.closest('.timer-container').querySelector('.fcs');
      let fcm = this.closest('.timer-container').querySelector('.fcm');
      let fch = this.closest('.timer-container').querySelector('.fch');
      let fcd = this.closest('.timer-container').querySelector('.fcd');
      let tmok = this.closest('.timer-container').querySelector('.timer-end');
      let btnClose = this.closest('.timer-container').querySelector('.btn-close');
      let btnDelete = this.closest('.timer-container').querySelector('.btn-delete');
      let btnAdd = this.closest('.timer-container').querySelector('.btn-add');

      
      let btnPause = this.closest('.timer-container').querySelector('.btn-pause');
      let btnStop = this.closest('.timer-container').querySelector('.btn-stop');

      this.classList.add('btn-invisible');
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

    if (i == 1){
      btnStart[i].style.background = 'red';
      btnStart[i].closest('.timer-container').querySelector('.timer-end').style.background = 'url("img/bg-01.gif") center center/100% 100% no-repeat';
    }else if (i == 2){
      btnStart[i].style.background = 'green';
      btnStart[i].closest('.timer-container').querySelector('.timer-end').style.background = 'url("img/bg-02.gif") center center/100% 100% no-repeat';
    }else if (i == 3){
      btnStart[i].style.background = 'blue';
      btnStart[i].closest('.timer-container').querySelector('.timer-end').style.background = 'url("img/bg-03.gif") center center/100% 100% no-repeat';
    }else if (i == 4 || i > 4){
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


