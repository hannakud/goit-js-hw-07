import { galleryItems } from "./gallery-items.js";
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const gallery = document.querySelector(".gallery");

const renderList = galleryItems.reduce((acc, picture) => {
  acc += `<div class="gallery__item"> <a class="gallery__item" href="${picture.original}">
  <img class="gallery__image" src="${picture.preview}"   alt="${picture.description}" />
</a> </div>`;
  return acc;
}, "");

gallery.insertAdjacentHTML("beforeend", renderList);

// Ініціалізація бібліотеки після створення і додання елементів галереї
const lightbox = new SimpleLightbox(".gallery a", {
  //  додаємо відображення підписів до зображень з атрибута alt, підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
