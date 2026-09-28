const keyArtImages = document.querySelectorAll('.key-art-gallery img');

if (keyArtImages.length > 0) {
    const modal = document.createElement('div');
    const modalImage = document.createElement('img');
    const closeButton = document.createElement('button');

    modal.className = 'image-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Expanded key art image');

    closeButton.className = 'image-modal-close';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Close image');
    closeButton.innerHTML = '&times;';

    modal.append(modalImage, closeButton);
    document.body.append(modal);

    const closeModal = () => {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
        modalImage.removeAttribute('src');
    };

    keyArtImages.forEach((image) => {
        image.tabIndex = 0;
        image.addEventListener('click', () => {
            modalImage.src = image.src;
            modalImage.alt = image.alt;
            modalImage.classList.toggle('dark-image', image.classList.contains('dark-image'));
            modal.classList.add('is-open');
            document.body.style.overflow = 'hidden';
        });

        image.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                image.click();
            }
        });
    });

    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}
