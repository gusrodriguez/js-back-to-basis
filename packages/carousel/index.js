document.getElementById('previous-btn').addEventListener('click', e => {
  previous(e);
})

document.getElementById('next-btn').addEventListener('click', e => {
  next(e);
})

const loadCarousel = () => {
  const carouselItems = document.getElementsByClassName('carousel-item');
  let index = 1;
  Array.prototype.forEach.call(carouselItems, item => {
    item.setAttribute('data-index', index);
    item.style.left = (index-1) * 600 + (index-1) * 20;
    if (index === 1) {
      item.classList.add('active');
    }
    index++;
    item.classList.remove('hidden');
  });
}

const next = (e) => {
  const carouselItems = document.getElementsByClassName('carousel-item');
  Array.prototype.forEach.call(carouselItems, item => {
    const left = Number(item.style.left.split('px')[0]);
    item.style.left = (left-620);
  });
  const activeElement = document.getElementsByClassName('active')[0];
  activeElement.nextElementSibling.classList.add('active');
  activeElement.classList.remove('active');
  if (checkIfLast()) {
    e.target.setAttribute('disabled', true);
  } else {
    document.getElementById('previous-btn').removeAttribute('disabled');
  }
}

const previous = (e) => {
  const carouselItems = document.getElementsByClassName('carousel-item');
  Array.prototype.forEach.call(carouselItems, item => {
    const left = Number(item.style.left.split('px')[0]);
    item.style.left = (left+620);
  });
  const activeElement = document.getElementsByClassName('active')[0];
  activeElement.previousElementSibling.classList.add('active');
  activeElement.classList.remove('active');
  if (checkIfFirst()) {
    e.target.setAttribute('disabled', true);
  } else {
    document.getElementById('next-btn').removeAttribute('disabled');
  }
}

const checkIfLast = () => {
  const activeElement = document.getElementsByClassName('active')[0];
  const carouselItems = document.getElementsByClassName('carousel-item').length;
  return activeElement.getAttribute('data-index') == carouselItems;
}

const checkIfFirst = () => {
  const activeElement = document.getElementsByClassName('active')[0];
  return activeElement.getAttribute('data-index') == 1;
}