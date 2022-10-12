// creo l'array delle immagini

const slidesArray = [
      './assets/img/01.webp',
      './assets/img/02.webp',
      './assets/img/03.webp',
      './assets/img/04.webp',
      './assets/img/05.webp'
]

console.log(slidesArray);

//seleziono l'elemento nel quale inserirà le immagini
const slidesEl = document.querySelector('.slides');
const thumbEl = document.querySelector('.thumbnails');
console.log(thumbEl, 'ci sei');


// creo una variabile per tenere sotto controllo quale immagine è attiva
let activeImage = 0

for (let i = 0; i < slidesArray.length; i++) {
      const slideUrl = slidesArray[i];
      const slideHtml = `<img class="${i === activeImage ? 'active' : ''}" src="${slideUrl}" alt="">`;
      const thumbHtml = `<img class="${i === activeImage ? 'active_thumb' : ''}" src="${slideUrl}" alt="">`;
      console.log(thumbHtml, 'ci sei');

      slidesEl.insertAdjacentHTML('beforeend', slideHtml);
      thumbEl.insertAdjacentHTML('beforeend', thumbHtml);
}

// seleziono i button che userò come next e prev
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

// metto in ascolto il button al click
nextButton.addEventListener('click', function () {
      const slidesImg = document.querySelectorAll('.slides > img');
      const thumbImg = document.querySelectorAll('.thumbnails > img');
      console.log(thumbImg, 'ci sei');


      const currentImage = slidesImg[activeImage];
      const currentImageThumb = thumbImg[activeImage];
      // tolgo la classe active per non mostrarla più
      currentImage.classList.remove('active');
      currentImageThumb.classList.remove('active_thumb');
      // faccio un incremento della mia immagine per selezionare la successiva
      activeImage++;

      // quando sono all'ultima immagine devo tornare alla prima
      if (activeImage === 5){
            activeImage = 0
            console.log(activeImage)
      }
      // ora che ho incrementato devo aggiungere una variabile per l'immagine e metterle la classe active
      const nextImage = slidesImg[activeImage];
      const nextImageThumb = thumbImg[activeImage];

      nextImage.classList.add('active');
      nextImageThumb.classList.add('active_thumb');
      
      
})

prevButton.addEventListener('click', function () {
      const slidesImg = document.querySelectorAll('.slides > img');
      const currentImage = slidesImg[activeImage];
      // tolgo la classe active per non mostrarla più
      currentImage.classList.remove('active');
      // faccio un decremento della mia immagine per selezionare la successiva
      activeImage--;
      
      // quando sono alla prima immagine devo tornare all'ultima
      if (activeImage === -1){
            activeImage = 4
            console.log(activeImage)
      }
      // ora che ho incrementato devo aggiungere una variabile per l'immagine e metterle la classe active
      const nextImage = slidesImg[activeImage];
      nextImage.classList.add('active')
     
})
