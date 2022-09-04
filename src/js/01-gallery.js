import { galleryItems } from './gallery-items';
import SimpleLightbox from '../../node_modules/simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
const items = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(
  item => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.original}" alt='Image description' title='${item.description}'" />
</a>`
);
items.insertAdjacentHTML('beforeend', galleryMarkup.join(' '));
console.log(items);
let imageShow = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionDelay: 250,
});
imageShow.on('show.simplelightbox', function () {
  return;
});
