$(document).ready(function () {
    $('.product').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1
    })
    $('.slider-review').slick({
        dots: true,
        focusOnSelect: true
    })
    $('.slider-project').slick({
        dots: true,
        focusOnSelect: true
    })
})

