function openFullscreen(imageSrc) {
    let fullscreenContainer = document.getElementById('fullscreenContainer');
    let fullscreenImage = document.getElementById('fullscreenImage');

    if (fullscreenContainer && fullscreenImage) {
        fullscreenImage.src = imageSrc;
        fullscreenContainer.style.display = 'flex';
    }
}

function closeFullscreen() {
    let fullscreenContainer = document.getElementById('fullscreenContainer');

    if (fullscreenContainer) {
        fullscreenContainer.style.display = 'none';
    }
}
