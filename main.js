const toggleMobNav = () => {
    document.getElementById('mob-nav-menu').classList.add('active')
}

const hideMobNav = () => {
    document.getElementById('mob-nav-menu').classList.remove('active')
}

const sliderImg = document.getElementsByClassName('slider-img-mob');
const sliderImgDesk = document.getElementsByClassName('slider-img-desk');
const heroCont = document.getElementsByClassName('hero-content')


const slideRight = () => {
    for(let i = 0 ; i < sliderImg.length ; i++){
        if(sliderImg[i].classList.contains('active') && i !== sliderImg.length - 1){
            
            heroCont[i].classList.remove('active');
            heroCont[i+1].classList.add('active');
            sliderImg[i].classList.remove('active');
            sliderImg[i+1].classList.add('active'); 
            sliderImgDesk[i].classList.remove('active');
            sliderImgDesk[i+1].classList.add('active'); 

            break;
        }
    };
}

const slideLeft = () => {
    for(let i = 0 ; i < sliderImg.length ; i++){
        if(sliderImg[i].classList.contains('active') && i !== 0){
            
            heroCont[i].classList.remove('active');
            heroCont[i-1].classList.add('active');
            sliderImg[i].classList.remove('active');
            sliderImg[i-1].classList.add('active');
            sliderImgDesk[i].classList.remove('active');
            sliderImgDesk[i-1].classList.add('active');            
                        
            break;
            
        }
    };
}

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll > 100){
        document.getElementById('nav-bar').classList.add('scrolled')
    }else{
        document.getElementById('nav-bar').classList.remove('scrolled')
    }
});

// let y = window.scrollTop;
// console.log(y)
