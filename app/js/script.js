// console.log("hello");
const btnHamburger = document.querySelector('#btnHamburger'); //# selector by id 
const body = document.querySelector('body'); //. selector by class
const header = document.querySelector('.header'); //. selector by class
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade'); //selects all elements with class has-fade, without All selects only first element

btnHamburger.addEventListener("click", function(){
    console.log("click hamburger");

    if(header.classList.contains("open")){ //Close Hamburger Menu
        body.classList.remove("noscroll");
        header.classList.remove("open");
        fadeElems.forEach(function(element){ //element because it is looping for each element which has "has-fade" class
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        });
    }
    else{ //Open Hamburger Menu
        body.classList.add("noscroll");
        header.classList.add("open");
        fadeElems.forEach(function(element){
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        });
    }
});