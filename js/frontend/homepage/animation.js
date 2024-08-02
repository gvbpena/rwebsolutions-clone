document.addEventListener('DOMContentLoaded', function() {
    var mainBanner = document.querySelector('.main-image-banner');
    var mainLeftBox = document.querySelector('.main-left-box');
    var mainRightBox = document.querySelector('.main-right-box');
    var sliderContainer = document.querySelector('.slider-container');
    var mainTitleContainer = document.querySelector('.main-title-container');
    var titleLeftContainer = document.querySelector('.title-left-container');
    var titleRightContainer = document.querySelector('.title-right-container');
    var processContainer = document.querySelector('.process-container');
    var thirdBanner = document.querySelector('.third-image-banner');
    var thirdLeftBanner = document.querySelector('.third-left-container');
    var thirdCarouselContainer = document.querySelector('.carousel-box');
    var fourthTitle = document.querySelector('.fourth-title');
    var fourthLinkBox = document.querySelector('.fourth-link-box');
    var fourthBanner = document.querySelector('.fourth-image-banner');
    var tabLeftBox1 = document.querySelector('.tab-pane-left-1');
    var tabRightBox1 = document.querySelector('.tab-pane-right-1');
    var tabLeftBox2 = document.querySelector('.tab-pane-left-2');
    var tabRightBox2 = document.querySelector('.tab-pane-right-2');
    var tabLeftBox3 = document.querySelector('.tab-pane-left-3');
    var tabRightBox3 = document.querySelector('.tab-pane-right-3');
    var tabLeftBox4 = document.querySelector('.tab-pane-left-4');
    var tabRightBox4 = document.querySelector('.tab-pane-right-4');
    var blogLeftBox = document.querySelector('.stick-container');
    var blogRightBox = document.querySelector('.blog-box');

    var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    var observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    var observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(mainBanner);
    observer.observe(mainLeftBox);
    observer.observe(mainRightBox);
    observer.observe(sliderContainer);
    observer.observe(mainTitleContainer);
    observer.observe(titleLeftContainer);
    observer.observe(titleRightContainer);
    observer.observe(processContainer);
    observer.observe(thirdBanner);
    observer.observe(thirdLeftBanner);
    observer.observe(thirdCarouselContainer);
    observer.observe(fourthTitle);
    observer.observe(fourthLinkBox);
    observer.observe(fourthBanner);
    observer.observe(tabLeftBox1);
    observer.observe(tabRightBox1);
    observer.observe(tabLeftBox2);
    observer.observe(tabRightBox2);
    observer.observe(tabLeftBox3);
    observer.observe(tabRightBox3);
    observer.observe(tabLeftBox4);
    observer.observe(tabRightBox4);
    observer.observe(blogLeftBox);
    observer.observe(blogRightBox);
});

// Card Counter Number
