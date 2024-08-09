document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach(slider => {
        const slides = slider.querySelector('.slides');
        let currentIndex = 0;
        let slideInterval;

        const startSlideShow = () => {
            slideInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % slides.children.length;
                slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            }, 3000);
        };

        const stopSlideShow = () => {
            clearInterval(slideInterval);
        };

        slider.addEventListener('mouseenter', stopSlideShow);
        slider.addEventListener('mouseleave', startSlideShow);

        startSlideShow();
    });
});