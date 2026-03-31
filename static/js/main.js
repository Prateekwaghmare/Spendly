// main.js — students will add JavaScript here as features are built

(function () {
    var btn = document.getElementById('how-it-works-btn');
    var modal = document.getElementById('video-modal');
    var closeBtn = document.getElementById('modal-close-btn');
    var iframe = document.getElementById('modal-video');
    var videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

    if (!btn || !modal || !closeBtn || !iframe) return;

    function openModal() {
        iframe.src = videoUrl;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        iframe.src = '';
        document.body.style.overflow = '';
    }

    btn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
})();
