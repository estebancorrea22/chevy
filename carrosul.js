document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#heroCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        ride: 'carousel'
    });
});
