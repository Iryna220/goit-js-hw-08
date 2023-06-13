import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector(".gallery");
const markup = galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
  <a class="gallery__link" href= ${original}>
    <img
      class="gallery__image"
      src= ${preview}
      data-source= ${original}
      alt= ${description}
    />
  </a>
</li>`
)
galleryContainer.insertAdjacentHTML('beforeend', markup.join(" "));
galleryContainer.style.listStyle = "none";
new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });


