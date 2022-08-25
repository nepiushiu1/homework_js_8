// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const newElements = galleryItems
  .map(
    value =>
      `
     
  <a class="gallery__link" href="${value.original}">
     <img
       class="gallery__image"
      src="${value.preview}"
       alt="${value.description}"
     />
   </a>
 
 `
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', newElements);

new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
