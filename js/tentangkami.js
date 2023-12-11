document.addEventListener("DOMContentLoaded", function () {
    function handleScrollAnimation() {
        var elements = document.querySelectorAll('.fade-in-on-scroll-1, .fade-in-on-scroll-2, .fade-in-on-scroll-3, .text-appear');

        elements.forEach(function (element) {
            if (isElementInViewport(element)) {
                if (!element.classList.contains('visible')) {
                    element.classList.add('visible');
                }
            } else {
                // Hapus kelas 'visible' jika elemen tidak lagi dalam viewport
                element.classList.remove('visible');
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', handleScrollAnimation);

    // Panggil fungsi untuk memastikan elemen yang terlihat saat halaman dimuat
    handleScrollAnimation();
});
