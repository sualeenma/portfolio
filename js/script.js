const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    speed: 200,
    slidesPerView: 5,
    // spaceBetween: 20,
    simulateTouch: true,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },

    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 5
        },
        // when window width is <= 480px
        425: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is <= 640px
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
}); /*http://idangero.us/swiper/api/*/

