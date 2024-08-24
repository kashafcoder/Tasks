document.addEventListener('DOMContentLoaded', function() {
    const galleryPictures = document.querySelectorAll('.gallery img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox img');
  
    galleryPictures.forEach(function(picture) {
      picture.addEventListener('click', function() {
        const largeImgSrc = this.src.replace('galleryPictures', 'large');
        lightboxImg.src = largeImgSrc;
        lightbox.style.display = 'block';
      });
    });
  
    lightbox.addEventListener('click', function() {
      lightbox.style.display = 'none';
    });
  });