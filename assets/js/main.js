const track = document.querySelector('.carousel__track');
const items = document.querySelectorAll('.carousel__item');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

nextBtn.addEventListener('click', () => {

  if(index < items.length - 3){
    index++;
  }

  track.style.transform = `translateX(-${index * 34}%)`;

});

prevBtn.addEventListener('click', () => {

  if(index > 0){
    index--;
  }

  track.style.transform = `translateX(-${index * 34}%)`;

});