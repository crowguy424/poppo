//close
const close = document.getElementById('close');
//open
const open = document.getElementById("open");
//modal
const modal = document.getElementById("modal");

/*
console.log(close);
console.log(open);
console.log(modal);
*/
open.addEventListener('click', () => modal.classList.add('show-modal'));
close.addEventListener('click', () => modal.classList.remove('show-modal'));
modal.addEventListener('click', () => modal.classList.remove('show-modal'));
