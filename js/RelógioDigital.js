const horas = window.document.getElementById('horas')
const minutos = window.document.getElementById('minutos')
const segundos = window.document.getElementById('segundos')
const dataDia = window.document.getElementById('dia')
const corpo = window.document.getElementsByClassName('relogio')

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();
    let dia = dateToday.getDate();
    let mes = dateToday.getMonth();
    let ano = dateToday.getFullYear();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(seg < 10) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
    dataDia.textContent = `${dia}/${mes}/${ano}`
})




