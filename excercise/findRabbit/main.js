let rabbit = document.querySelector('.rabbit');
let rBtn = document.querySelector('#rBtn');

rBtn.addEventListener('click', function(){

    rabbit.scrollIntoView({behavior:'smooth', block:'center'});

})