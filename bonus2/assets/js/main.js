// creo l'array delle immagini

const thumbsArray = [
      './assets/img/01.webp',
      './assets/img/02.webp',
      './assets/img/03.webp',
      './assets/img/04.webp',
      './assets/img/05.webp'
]

console.log(thumbsArray);

//seleziono l'elemento nel quale inserirà le immagini

let thumbEl = document.querySelector('.thumbnails');
/* thumbEl.insertAdjacentHTML('beforeend', thumbsArray[2]) */

// creo una variabile per tenere sotto controllo quale immagine è attiva

let activeThumb = 0

for (let i = 0; i < thumbsArray.length; i++) {
      const thumbUrl = thumbsArray[i];
      const thumbMarkup = `<img class="${i === activeThumb ? 'active_thumb' : ''}" src="${thumbUrl}" alt="">`;

      thumbEl.insertAdjacentHTML('beforeend', thumbMarkup)
      console.log(thumbEl)
}


// seleziono i button che userò come next e prev
const nextButtonThumb = document.querySelector('.next');
const prevButtonThumb = document.querySelector('.prev');

// metto in ascolto il button al click
nextButtonThumb.addEventListener('click', function () {
      const slidesThumb = document.querySelectorAll('.thumbnails > img');
      const currentThumb = slidesThumb[activeThumb];
      // tolgo la classe active per non mostrarla più
      currentThumb.classList.remove('active_thumb');
      // faccio un incremento della mia immagine per selezionare la successiva
      activeThumb++;
      // ora che ho incrementato devo aggiungere una variabile per l'immagine e metterle la classe active
      const nextThumb = slidesThumb[activeThumb];
      nextThumb.classList.add('active_thumb')
      
      // quando sono all'ultima immagine devo tornare alla prima
      
})

prevButtonThumb.addEventListener('click', function () {
      const slidesThumb = document.querySelectorAll('.thumbnails > img');
      const currentThumb = slidesThumb[activeThumb];
      // tolgo la classe active per non mostrarla più
      currentThumb.classList.remove('active_thumb');
      // faccio un decremento della mia immagine per selezionare la successiva
      activeThumb--;
      // ora che ho incrementato devo aggiungere una variabile per l'immagine e metterle la classe active
      const nextThumb = slidesThumb[activeThumb];
      nextThumb.classList.add('active_thumb')
     
})
