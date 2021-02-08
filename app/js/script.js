// console.log("hello");
const btnHamburger = document.querySelector('#btnHamburger'); //# selector by id 
const header = document.querySelector('.header'); //. selector by class
const overlay = document.querySelector('.overlay')

btnHamburger.addEventListener("click", function(){
    console.log("click hamburger");

    if(header.classList.contains("open")){ //Close Hamburger Menu
        header.classList.remove("open");
        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");
    }
    else{ //Open Hamburger Menu
        header.classList.add("open");
        overlay.classList.remove("fade-out");
        overlay.classList.add("fade-in");
    }

    // if(btnHamburger.classList.contains("open")){
    //     btnHamburger.classList.remove("open");
    // }
    // else{
    //     btnHamburger.classList.add("open");
    // }
});