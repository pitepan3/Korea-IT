// 스크롤버튼
var topBtn = document.getElementById("top-btn");
var bottomBtn = document.getElementById("bottom-btn");
var bottomBtn2 = document.getElementById("bottom-btn2");
var bottomBtn3 = document.getElementById("bottom-btn3");
var bottomBtn4 = document.getElementById("bottom-btn4");

window.addEventListener("scroll", function () {
    var scrollTop = document.documentElement.scrollTop;

    topBtn.addEventListener("click", function () {
        var scrollTop = document.documentElement.scrollTop;

        topBtn.addEventListener("click", function () {
            document.documentElement.scrollTop = 0;

            bottomBtn.addEventListener("click", function () {
                document.documentElement.scrollTop = 5001;  
                
                })
            })
        })
    })

window.addEventListener("scroll", function () {
    var scrollTop = document.documentElement.scrollTop;
  
    bottomBtn2.addEventListener("click", function () {
        document.documentElement.scrollTop = 17475;
    })
})
window.addEventListener("scroll", function () {
    var scrollTop = document.documentElement.scrollTop;
    
    bottomBtn3.addEventListener("click", function () {
        document.documentElement.scrollTop = 9932;
    })
})

window.addEventListener("scroll", function () {
    var scrollTop = document.documentElement.scrollTop;

    console.log(scrollTop)
    bottomBtn4.addEventListener("click", function () {
        document.documentElement.scrollTop = 1918;
    })
})
// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    spaceBetween: 6,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
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
  });
  
  
