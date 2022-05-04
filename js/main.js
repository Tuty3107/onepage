const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
var isCheck = false
//--------------modal-----------------------------------
const modal = $('.modal1')
const modal__overlay = $('.modal__overlay')
const btnPc = $('.btn-pc-only')
const verticalNav = $('.vertical__nav')
const btnVtcNav =$('.vertical__nav--close')

const vid = $('.video')
const btnPlayVid = $('.playvid')
const btnPlayVid_close = $('.btn-vid-close')
vid.style.display ='block'
verticalNav.style.display ='block'

btnPc.onclick = function() {
    if(isCheck) {
        isCheck = false
        modal.style.display = 'none'
        modal__overlay.style.display = 'none'
        verticalNav.style.transform = 'translateX(100%)'
    } 
    modal.style.display = 'block'
    modal__overlay.style.display = 'block'
    verticalNav.style.transform = 'translateX(0%)'
    isCheck = true

    btnVtcNav.onclick = function() {
        verticalNav.style.transform = 'translateX(100%)'
        modal.style.display = 'none'
        modal__overlay.style.display = 'none'
        
        modal__overlay.onclick = function() {
            if(isCheck) {
                isCheck = false
                verticalNav.style.transform = 'translateX(0)';
                modal.style.display = 'block'
                modal__overlay.style.display = 'block'
            } 
            modal.style.display = 'none'
            modal__overlay.style.display = 'none'
            isCheck = true
        }
    }
    modal__overlay.style.backgroundColor = 'rgba(0,0,0, 0.4)'
    vid.style.display ='none'
    verticalNav.style.display ='block'
}
//--------------modal2-----------------------------------
btnPlayVid.onclick = function() {
    if(isCheck) {
        isCheck = false;
        modal.style.display = 'none'
        modal__overlay.style.display = 'none'
    } 
    modal.style.display = 'block'
    modal__overlay.style.display = 'block'      
    vid.style.display ='block'
    modal__overlay.style.backgroundColor = '#333'
    verticalNav.style.display ='none'
            
    btnPlayVid_close.onclick = () => {
        modal.style.display = 'none'
        modal__overlay.style.display = 'none'  
    }
}
//--------------Porfolio---------------------------------
const tabs = $$('.tab')
const pfBox = $$('.content')
const tabActive = $('.tab.active1')
const line = $('.tab__line')
const plusIcons = $$('.iconPlus')
const imgs = $$('.img-pf')
const porf_img = $('.portfolio_img')
//tab active
tabs.forEach((tab, index) => {
    const content = pfBox[index]
    tab.onclick = function(el){
        $('.tab.active1').classList.remove('active1');
        $('.content.active1').classList.remove('active1');
        $('.tab.tab__line').classList.remove('tab__line');

        this.classList.add('active1')
        content.classList.add('active1')  
        this.classList.add('tab__line')    
    }
}) 
//img
plusIcons.forEach((icon, index) => {
    icon.onclick = () => {
        modal.style.display = 'block'
        modal__overlay.style.display = 'block'
        vid.style.display ='none'
        verticalNav.style.display ='none'
        modal__overlay.style.backgroundColor = 'rgba(0,0,0, 0.8)' 

        porf_img.innerHTML = `
        <button class="btn-img-close">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <img class="portfolio-pf" src="${imgs[index].src}" />`
        
        const btnImg = $('.btn-img-close')
        btnImg.onclick = () => {
            modal.style.display = 'none'
            modal__overlay.style.display = 'none'
            btnImg.style.display = 'none'
        }
    }
})
//-------------------Review-------------------------
let slideIndex = 0;
showSlides(slideIndex);
function plusSlide(n) {
    showSlides(slideIndex +=n)
}
function currentDiv(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("line__slider-btn");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }    
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active2", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active2";
    setTimeout(showSlides, 5000);
}
/*--------btnToTop--------*/
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


