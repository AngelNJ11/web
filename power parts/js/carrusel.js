var c=1;

let banner = document.querySelector('#banner');
let banner2 = document.querySelector('#banner2');

function carrusel(){
    banner.style.transition="all 1s ease";

    setTimeout(cambio, 1000);
}

function cambio(){
    c++;
    if(c>5){c=1;}
    banner.setAttribute("src", "../images/baner"+c+".jpg");
    banner.style.opacity="1";
    banner.style.transition="all 1s ease";
    setTimeout(carrusel, 1000);
}

function carrusel2(){
    banner2.style.transition="all 1s ease";

    setTimeout(cambio2, 1000);
}

function cambio2(){
    c++;
    if(c>5){c=1;}
    banner2.setAttribute("src", "../images/baner"+c+".jpg");
    banner2.style.opacity="1";
    banner2.style.transition="all 1s ease";
    setTimeout(carrusel2, 1000);
}
 carrusel(); 
 carrusel2(); 