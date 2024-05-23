import { getPhotos } from './js/pixabay-api.js';
import { imagesTemplate } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formEl = document.querySelector('.js-form');
const galleryEl = document.querySelector('.js-gallery-list');
const loader = document.querySelector('.loader');
console.log(loader);

formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const inputQuery = e.currentTarget.elements.search.value;
  loader.classList.remove('visually-hidden');

  getPhotos(inputQuery)
    .then(response => {
      if (response.hits.length === 0) {
      }
      galleryEl.innerHTML = imagesTemplate(response.hits);
      refresh();
      lightbox = new SimpleLightbox('.gallery a', {
        /* options */
      });
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => loader.classList.add('visually-hidden'));

  e.target.reset();
}
