document.addEventListener("DOMContentLoaded", () => {

let body = document.querySelector('#body');
let header = document.querySelector('#header');

let btnStart  = document.querySelectorAll('.btn-start');
let btnStop   = document.querySelectorAll('.btn-stop');
let btnDelete = document.querySelectorAll('.btn-delete');
let btnAdd    = document.querySelectorAll('.btn-add');

for (let i = 0; i < btnStart.length; i++) {
  btnStart[i].addEventListener('click', timerStart);
    function timerStart(){

      let fcs = btnStart[i].closest('.timer-container').querySelectorAll('.fcs');
        for (let y = 0; y < 1; y++) {
            fcs[y].style.background = 'green';
            let fcs_value = fcs[y].value;
            func_fcs();
            function func_fcs(){
              setTimeout(function(){
                  fcs[y].value = fcs_value - 1;
                  fcs_value = fcs_value - 1;
                  func_fcs();
              }, 1000);  
            }
            
        }

      let fcm = btnStart[i].closest('.timer-container').querySelectorAll('.fcm');
        for (let y = 0; y < fcm.length; y++) {
            fcm[y].style.background = 'blue';
            let fcm_value = fcm[y].value;
            func_fcm();
            function func_fcm(){
              setTimeout(function(){
                  fcm[y].value = fcm_value - 1;
                  fcm_value = fcm_value - 1;
                  func_fcm();
              }, 1000);  
            }
        }

      let fch = btnStart[i].closest('.timer-container').querySelectorAll('.fch');
        for (let y = 0; y < fch.length; y++) {
            fch[y].style.background = 'gold';
            let fch_value = fch[y].value;
            func_fch();
            function func_fch(){
              setTimeout(function(){
                  fch[y].value = fch_value - 1;
                  fch_value = fch_value - 1;
                  func_fch();
              }, 1000);  
            }
        }

      let fcd = btnStart[i].closest('.timer-container').querySelectorAll('.fcd');
        for (let y = 0; y < fcd.length; y++) {
            fcd[y].style.background = 'red';
            let fcd_value = fcd[y].value;
            func_fcd();
            function func_fcd(){
              setTimeout(function(){
                  fcd[y].value = fcd_value - 1;
                  fcd_value = fcd_value - 1;
                  func_fcd();
              }, 1000);  
            }
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



