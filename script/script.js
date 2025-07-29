const scrollUPBtn = document.querySelector(".scroll__btn");

window.onscroll = ()=> {
    if(window.scrollY > 100){
        scrollUPBtn.style.display = "flex"
    }
    else{
        scrollUPBtn.style.display = "none"
    }
}

const haederMenu = document.querySelector(".header__menu");
const headerNavBar = document.querySelector(".header__navbar");

haederMenu.onclick = function(){
    headerNavBar.classList.toggle("header__navbar--active")
}



