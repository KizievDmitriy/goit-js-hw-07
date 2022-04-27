import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(".gallery");

const createGalleryItems = ({preview, original, description}) => {
    const galleryEl = document.createElement("div");
    galleryEl.insertAdjacentHTML("afterbegin",
    `<a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        />
    </a>`);
  
  return galleryEl;
}

const galleryElements = galleryItems.map(createGalleryItems);
galleryList.append(...galleryElements);