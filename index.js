let images = [
    'image3.jpeg',
    'image4',
    'image5.jpeg',
    'image6.jpg',
    'image7',
    'image8.jpg',
    'image10'
];
let imagesIndex = 0;
let carousel = document.querySelector('.images');
// this is for auto handling
let autoUpdate = () => {
    carousel.innerHTML = `<img src="${images[imagesIndex]}"/>`;
}
autoUpdate();
let autoplay = () => {
    imagesIndex = (imagesIndex + 1) % images.length;
    autoUpdate();
}
let time = setInterval(autoplay, 3000);
// for mannual handling
let arrows = (direction) => {
    clearInterval(time);
    if (direction === 'prev' && imagesIndex > 0) {
        imagesIndex--;
    } else if (direction === 'next' && imagesIndex < images.length - 1) {
        imagesIndex++;
    }
    carousel.innerHTML = `<img src="${images[imagesIndex]}"/>`;
}
// for keyboard handling
document.addEventListener('keydown', (pressed)=>{
    if(pressed.key === "ArrowLeft"){
        arrows('prev');
        console.log('left key pressed');
    }else if(pressed.key === "ArrowRight"){
        arrows('next');
        console.log('right key pressed');
    }
})
document.addEventListener('keyup', ()=>{
    clearInterval(time);
})
