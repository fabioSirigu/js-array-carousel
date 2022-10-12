// creo l'array delle immagini

const slidesArray = [
      /* '<img src="./assets/img/01.webp" alt="">', // 0
      '<img src="./assets/img/02.webp" alt="">', // 1
      '<img src="./assets/img/03.webp" alt="">', // 2
      '<img src="./assets/img/04.webp" alt="">', // 3
      '<img src="./assets/img/05.webp" alt="">', // 4 */
      './assets/img/01.webp',
      './assets/img/02.webp',
      './assets/img/03.webp',
      './assets/img/04.webp',
      './assets/img/05.webp'
]

console.log(slidesArray);

//seleziono l'elemento nel quale inserirà le immagini

let slidesEl = document.querySelector('.slides');
/* slidesEl.insertAdjacentHTML('beforeend', slidesArray[2]) */

// creo una variabile per tenere sotto controllo quale immagine è attiva

let activeImage = 0

for (let i = 0; i < slidesArray.length; i++) {
      const slideUrl = slidesArray[i];
      const slideHtml = `<img class="${i === activeImage ? 'active' : ''}" src="${slideUrl}" alt="">`;

      slidesEl.insertAdjacentHTML('beforeend', slideHtml)
      console.log(slidesEl)
}


// seleziono i button che userò come next e prev
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

// metto in ascolto il button al click
nextButton.addEventListener('click', function () {
      const slidesImg = document.querySelectorAll('.slides > img');
      const currentImage = slidesImg[activeImage];
      // tolgo la classe active per non mostrarla più
      currentImage.classList.remove('active');
      // faccio un incremento della mia immagine per selezionare la successiva
      activeImage++;
      // ora che ho incrementato devo aggiungere una variabile per l'immagine e metterle la classe active
      const nextImage = slidesImg[activeImage];
      nextImage.classList.add('active')
      
      // quando sono all'ultima immagine devo tornare alla prima
      
})

prevButton.addEventListener('click', function () {
      const slidesImg = document.querySelectorAll('.slides > img');
      const currentImage = slidesImg[activeImage];
      // tolgo la classe active per non mostrarla più
      currentImage.classList.remove('active');
      // faccio un decremento della mia immagine per selezionare la successiva
      activeImage--;
      // ora che ho incrementato devo aggiungere una variabile per l'immagine e metterle la classe active
      const nextImage = slidesImg[activeImage];
      nextImage.classList.add('active')
     
})
