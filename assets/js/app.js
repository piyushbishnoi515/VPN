const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");


menuicon.addEventListener("click", function () {
    menulist.classList.toggle("showlist");
})


$('.slider').slick({
    dots: true,
    infinite: true,
    // speed: 300,
    // autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: ".errow",
    nextArrow: ".next",

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                  dots: false,
            }
        }
        
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});