// Опрос ———————————————————————————————————————————————————

// Переключение слайдов опроса

const prev = document.getElementById('wrapper-prev');
      next = document.getElementById('wrapper-next');
      slides = document.querySelectorAll('.wrapper__slider');

let index = 0;

const activeSlide = n => {
    for(slider__img of slides) {
        slider__img.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const currentSlide = ind => {
    activeSlide(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        //index = 0;
        currentSlide(index);
    }else {
        index++;
        currentSlide(index);
    }
}

next.addEventListener('click', nextSlide);


const prevSlide = () => {
    if(index == 0) {
        //index = slides.length - 1;
        currentSlide(index);
    }else {
        index--;
        currentSlide(index);
    }
}

prev.addEventListener('click', prevSlide);

// Модальное окно для кнопки «консультация» ——————————————————

const btnOpen  = document.getElementById('btn-open');
const popUp = document.getElementById('pop-up');
const btnClose = document.getElementById('btn-close')
const overlay = document.getElementById('overlay');

btnOpen.addEventListener('click', () => {
    popUp.classList.add('active');
});

const closePopUp = () => {
    popUp.classList.remove('active');
}

btnClose.addEventListener('click', closePopUp);
overlay.addEventListener('click', closePopUp);

// Отзывы ———————————————————————————————————————————————————

const swiper = new Swiper('.swiper', {
    direction : 'horizontal',
    loop : true,
    slidesPerView : 1,
    stopOnLastSlide : false,
    autoplay : {
      delay : 4500
    }
  
});


// Модальное окно для кнопки «консультация» ——————————————————

const openCall  = document.getElementById('open-call');
const modalCall = document.getElementById('modal-call');
const closeCall = document.getElementById('btn-close-call')
const overlayCall = document.getElementById('modal-call-overlay');
const openCall2 = document.getElementById('open-call-2');

openCall.addEventListener('click', () => {
    modalCall.classList.add('active');
});

openCall2.addEventListener('click', () => {
    modalCall.classList.add('active');
});

const closeModal = () => {
    modalCall.classList.remove('active');
};

closeCall.addEventListener('click', closeModal);
overlayCall.addEventListener('click', closeModal);

// Слайдер в разделе услуг—————————————————————————————

document.addEventListener('DOMContentLoaded', function () {
    // инициализация слайдера
    var slider2 = new SimpleAdaptiveSlider('#slider-2', {
      loop: true,
      autoplay: true,
      interval: 3500,
      swipe: true,
    });
    // назначим обработчик при нажатии на кнопку .slider__btn_prev
    document.querySelector('.slider__btn_prev').onclick = function () {
    // перейдём к предыдущему слайду
    slider2.prev();
    }
    // назначим обработчик при нажатии на кнопку .slider__btn_next
    document.querySelector('.slider__btn_next').onclick = function () {
    // перейдём к следующему слайду
    slider2.next();
    } 
}); 



