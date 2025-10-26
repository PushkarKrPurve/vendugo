let slideImages = document.querySelectorAll('#hero-images img');
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let dots = document.querySelectorAll('header .dots')
let length = slideImages.length-1
const scroll = document.getElementById('scroll-bar')
var counter = 0;

next.addEventListener('click', slideNext);
prev.addEventListener('click',slidePrev);

function slideNext(){
    if (counter <length){
        slideImages[length-counter].classList.add('left-[100%]');
    }
    if(counter <=length){
        counter++;
    }
    if (counter > slideImages.length-1){
        counter = 0;
        slideImages.forEach((slide)=>{
            slide.classList.remove('left-[100%]')   
        })        
    }
}

function slidePrev(){
    if (counter >0){
        slideImages[length-counter+1].classList.remove('left-[100%]');        
    }
    if(counter >= 0){
        counter--;
    }
    if (counter < 0){
        counter = length;
        slideImages.forEach((slide)=>{
            slide.classList.add('left-[100%]')
        })
        slideImages[length-counter].classList.remove('left-[100%]');        
    }
}

function autoSlide(){
    deleteInterval = setInterval(timer, 2500);
    function timer(){
        slideNext();
    }
}
scroll.addEventListener('mouseover',function(){
    clearInterval(deleteInterval);
})
scroll.addEventListener('mouseout',autoSlide)
autoSlide()