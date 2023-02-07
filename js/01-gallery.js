import { galleryItems } from './gallery-items.js';

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const gallery = document.querySelector('.gallery');

const renderList = galleryItems.reduce((acc, picture) => {
  acc += `<div class="gallery__item">
  <a class="gallery__link" href="${picture.original}">
    <img
      class="gallery__image"
      src="${picture.preview}"
      data-source="${picture.original}"
      alt="${picture.description}"
    />
  </a>
</div>`;
  return acc;
}, '');

gallery.insertAdjacentHTML('beforeend', renderList);

function openModal(event) {
  // заборона поведінки за замовчуванням
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  // Використання готову розмітки модального вікна із зображенням з прикладів бібліотеки
  const instance = basicLightbox.create(
    `<img src='${event.target.dataset.source}' width='1280' height='auto'>`,
    {
      // налаштування бібліотеки
      onShow: instance => {
        gallery.addEventListener('keydown', onEScKeyPress);
      },
      onClose: instance => {
        gallery.removeEventListener('keydown', onEScKeyPress);
      },
    }
  );
  instance.show();

  // додаємо закриття по клавіші Escape
  function onEScKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}

// додаємо слухача подій по кліку на зображення
gallery.addEventListener('click', openModal);
