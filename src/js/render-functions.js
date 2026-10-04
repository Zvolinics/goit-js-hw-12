import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image => `
        <li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img
              class="gallery-image"
              src="${image.webformatURL}"
              alt="${image.tags}"
            />

            <div class="info">
              <div class="info-item">
                <span class="info-title">Likes</span>
                <span>${image.likes}</span>
              </div>

              <div class="info-item">
                <span class="info-title">Views</span>
                <span>${image.views}</span>
              </div>

              <div class="info-item">
                <span class="info-title">Comments</span>
                <span>${image.comments}</span>
              </div>

              <div class="info-item">
                <span class="info-title">Downloads</span>
                <span>${image.downloads}</span>
              </div>
            </div>
          </a>
        </li>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-visible');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
}
