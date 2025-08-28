document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');
    const lightbox = document.getElementById('lightbox');
    const closeButton = document.querySelector('.close-button');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const type = item.getAttribute('data-type');
            const src = item.getAttribute('data-src');

            lightbox.style.display = 'flex';

            if (type === 'image') {
                lightboxImg.src = src;
                lightboxImg.style.display = 'block';
                lightboxVideo.style.display = 'none';
            } else if (type === 'video') {
                lightboxVideo.src = src;
                lightboxVideo.style.display = 'block';
                lightboxImg.style.display = 'none';
                lightboxVideo.play();
            }
        });
    });

    const closeLightbox = () => {
        lightbox.style.display = 'none';
        // Stop the video from playing in the background
        lightboxImg.src = ""; 
        lightboxVideo.src = "";
    };

    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        // Close only if the dark background is clicked, not the content
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});
