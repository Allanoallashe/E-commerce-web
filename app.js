
var bar = document.getElementById('bar');
var close = document.getElementById('close');
var nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}
if (close) {
  close.addEventListener('click', () => {
    close.classList.remove('active');
  })
}



    var mainImg = document.getElementById("MainImg");
    var smallImg = document.getElementsByClassName('small-img');

    smallImg[0].addEventListener('click', () => {
      mainImg.src = smallImg[0].src;
    })
    smallImg[1].addEventListener('click', () => {
      mainImg.src = smallImg[1].src;
    })
    smallImg[2].addEventListener('click', () => {
      mainImg.src = smallImg[2].src;
    })
    smallImg[3].addEventListener('click', () => {
      mainImg.src = smallImg[3].src;
    })