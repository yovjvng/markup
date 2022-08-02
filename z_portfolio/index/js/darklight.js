const body = document.querySelector('body');
const toggleSwitch = document.querySelector('.switch');
const opt1 = document.querySelector('.opt-1');
const opt2 = document.querySelector('.opt-2');

function checkActive(){
  body.classList.toggle('is-active');
  toggleSwitch.classList.toggle('is-active');
  opt1.classList.toggle('is-active');
  opt2.classList.toggle('is-active');
  console.log('checked');
}
