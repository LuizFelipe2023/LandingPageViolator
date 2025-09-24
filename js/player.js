document.addEventListener('DOMContentLoaded', function () {
    const spotifyPopupBtn = document.getElementById('spotifyPopupBtn');
    const spotifyPopup = document.getElementById('spotifyPopup');
    const closePopup = document.getElementById('closePopup');
    const overlay = document.getElementById('overlay');


    spotifyPopupBtn.addEventListener('click', function () {
        spotifyPopup.classList.add('active');
        overlay.classList.add('active');
    });

    closePopup.addEventListener('click', function () {
        spotifyPopup.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', function () {
        spotifyPopup.classList.remove('active');
        overlay.classList.remove('active');
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            spotifyPopup.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
});