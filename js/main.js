document.addEventListener("DOMContentLoaded", () => {

let body = document.querySelector('#body');
let header = document.querySelector('#header');

let btnStart  = document.querySelectorAll('.btn-start');
let btnStop   = document.querySelectorAll('.btn-stop');
let btnDelete = document.querySelectorAll('.btn-delete');
let btnAdd    = document.querySelectorAll('.btn-add');

let timerContainer    = document.querySelectorAll('.timer-container');


for (let i = 0; i < btnStart.length; i++) {
  btnStart[i].addEventListener('click', timerStart);
    function timerStart(){

      let fcs = btnStart[i].closest('.timer-container').querySelector('.fcs');
      let fcm = btnStart[i].closest('.timer-container').querySelector('.fcm');
      let fch = btnStart[i].closest('.timer-container').querySelector('.fch');
      let fcd = btnStart[i].closest('.timer-container').querySelector('.fcd');
      let tmok = btnStart[i].closest('.timer-container').querySelector('.timer-end');
      let btnClose = btnStart[i].closest('.timer-container').querySelector('.btn-close');
      let port = false;

      fcs.style.background = 'green';
      fcm.style.background = 'blue';
      fch.style.background = 'gold';
      fcd.style.background = 'red';

      let fcs_value = fcs.value;
      let fcm_value = fcm.value;
      let fch_value = fch.value;
      let fcd_value = fcd.value;
            
      func_fcs();
      function func_fcs(){
        setTimeout(function(){
            fcs.value = fcs_value;
              if( fcs_value > 0){
                fcs_value = fcs_value - 1;
              }else if( fcs_value == 0 && fcm_value > 0){
                fcs_value = 10;
                fcm.value = fcm_value - 1;
                fcm_value --;
              }else if( fcs_value == 0 && fcm_value == 0 && port == false ){
                func_timer_stop();
              }
            func_fcs();
        }, 300);  
      }









  function func_timer_stop(){
    btnStart[i].style.background = 'red';
    console.log(tmok);
    tmok.classList.add('visible');
    tmok.classList.remove('invisible');


  btnClose.addEventListener('click', function() {
    tmok.classList.remove('visible');
    tmok.classList.add('invisible');
    port = true;
  })


    }

  }    

}






window.addEventListener('scroll', function() {
  if ( window.pageYOffset < 50){
    body.style.background = 'blue';
    header.classList.remove('header-up');
    header.classList.add('header-down');
  }else{
    body.style.background = 'green';
    header.classList.add('header-up');
    header.classList.remove('header-down');
  }   
  
});



// конец программы
}, false);



