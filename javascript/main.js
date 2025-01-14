$(function () {

    //2차메뉴
    $('.nav .gnb > li').mouseenter(function () {
        //$('.depth02_wrap').slideDown();
        $(this).find('.depth02_wrap').stop().slideDown();
    });//gnb>li.mouseenteer()

    $('.depth02_wrap').mouseleave(function () {
        $(this).stop().slideUp();
    });//depth02_wrap.mouseleave()

    //검색창
    $('.search img').click(function () {
        $('.search_box').slideToggle();
    });//search.mouseenter()

    //메인이미지 슬라이드
    var swiper = new Swiper(".main_slide", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    //헤더스크롤
    let header = document.querySelector('.header');
    
     //탑버튼
     let topBtn = $('.top_btn');
     
    window.addEventListener('scroll', () => {
        let scrollBar = window.scrollY
        console.log(scrollBar)

        if (scrollBar > 0) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }

        if(scrollBar > 1400) {
            topBtn.addClass('on')
        } else {
            topBtn.removeClass('on')
        }
    })//scroll

    //탭메뉴 슬라이드
    var swiper = new Swiper(".item_wrap", {
        slidesPerView: 5, /* 화면에 보여지는 개수 */
        spaceBetween: 30, /* 간격 */
    });
    var swiper = new Swiper(".item_wrap", {
        slidesPerView: 5, /* 화면에 보여지는 개수 */
        spaceBetween: 30, /* 아이템 간격 */
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
    window.onload = () => {
        let tabMenu = document.querySelectorAll('.tabmenu ul li')
        let itemWrap = document.querySelectorAll('.tabmenu .item_wrap');

        for(let i = 0; i < tabMenu.length; i++) {
            tabMenu[i].addEventListener('click', () => {
                tabMenu.forEach(item => {
                    item.classList.remove('active');
                });
                tabMenu[i].classList.add('active');

                itemWrap.forEach(item => {
                    item.classList.remove('active');
                });
                itemWrap[i].classList.add('active');
            });//tabMenu.click()
        }
       };//script end

    //이벤트 슬라이드
    var swiper = new Swiper(".event_slide", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    //리뷰 슬라이드
    var swiper = new Swiper(".review_wrap", {
        slidesPerView: 3, /* 화면에 보여지는 개수 */
        spaceBetween: 30, /* 아이템 간격 */
        loop: true, /* 처음으로 돌아가기 */
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    //공지사항 슬라이드
    var swiper = new Swiper(".notice_slide", {
        direction: "vertical",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    //탑버튼
    topBtn.click(function() {
        $('html, body').animate({
            scrollTop : 0
        });//html,body.animate()
    });//topBtn.click()
});//script end