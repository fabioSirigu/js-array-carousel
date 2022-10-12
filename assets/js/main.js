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
activeImage = 0

for (let i = 0; i < slidesArray.lenght; i++) {
      const slideUrl = slidesArray[i];
      const slideHtml = `<img class="${i === activeImage ? 'active' : ''} src="${slideUrl}" alt="">`

      slidesEl.insertAdjacentHTML('beforeend', slideHtml)
}
