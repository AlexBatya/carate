const swiper = new Swiper('.baner', {
    parallax: true,
    navigation: {
        nextEl: '.baner__next',
        prevEl: '.baner__prev',
    },
    pagination: {
        el: '.baner__pagination',
        clickable: true
    },
    mousewheel: { 
        releaseOnEdges: true 
    },
});

// const masters = new Swiper('.ourMasters__slider', {
//     parallax: true,
//     navigation: {
//         nextEl: '.our__arrow__next',
//         prevEl: '.our__arrow__prev'
//     },
//     pagination: {
//         el: '.our__pagination',
//         clickable: true
//     },
//     mousewheel: { 
//         releaseOnEdges: true 
//     },
// })