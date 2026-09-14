$(function () {


    // ================================
    // HEADER
    // ================================

    const $header = $('header');
    const $mobileHeader = $('.mobile_header');
    const sc3 = $('.sc3')[0];
    const sc4 = $('.sc4')[0];

    $(window).on('scroll', function () {

        const scrollTop = $(window).scrollTop();

        let changePoint;

        if ($(window).width() <= 968) {

            // 모바일 → SC4 진입하면 헤더 변경
            const sc4Top = sc4.getBoundingClientRect().top + scrollTop;
            changePoint = sc4Top;

        } else {

            // PC → SC3 진입하면 헤더 변경
            changePoint = sc3.offsetTop;

        }

        if (scrollTop >= changePoint) {

            $header.addClass('on');
            $mobileHeader.addClass('on');

        } else {

            $header.removeClass('on');
            $mobileHeader.removeClass('on');

        }

        console.log('HEADER', scrollTop, changePoint, scrollTop >= changePoint);

    });


    // ================================
    // GOTOP
    // ================================

    const $goTop = $('.gotop_wrap');
    const $sc3 = $('.sc3');

    $(window).on('scroll', function () {

        const scrollTop = $(window).scrollTop();

        let changePoint;

        if ($(window).width() <= 968) {

            // 모바일 → SC4보다 200px 먼저 파란색
            const sc4Top = sc4.getBoundingClientRect().top + scrollTop;
            changePoint = sc4Top - 200;

        } else {

            // PC → 기존 그대로
            const sc3Top = $sc3[0].offsetTop;
            changePoint = sc3Top - 800;

        }

        if (scrollTop >= changePoint) {

            $goTop.addClass('on');

        } else {

            $goTop.removeClass('on');

        }

        console.log('GOTOP', scrollTop, changePoint, scrollTop >= changePoint);

    });


    // ================================
    // SC3 스크롤
    // ================================

    let sc3Played = false;


    $(window).on('scroll', function () {

        if (sc3Played) return;


        const windowHeight = $(window).height();


        const $trash = $('.sc3 .trash');
        const $peple = $('.sc3 .peple');
        const $re = $('.sc3 .re');
        const $objc = $('.sc3 .objc');


        const trashTop = $trash[0].getBoundingClientRect().top;
        const pepleTop = $peple[0].getBoundingClientRect().top;
        const reTop = $re[0].getBoundingClientRect().top;
        const objcTop = $objc[0].getBoundingClientRect().top;


        const triggerPoint = windowHeight * 0.8;


        // 01. 분리배출

        if (trashTop <= triggerPoint) {

            $('.sc3 .trash .title_wrap').addClass('active');
            $('.sc3 .trash .tra_img').addClass('active');

        }


        // 02. 수거 및 운반

        if (pepleTop <= triggerPoint) {

            $('.sc3 .peple .title_wrap').addClass('active');
            $('.sc3 .peple .tcar_img').addClass('active');

        }


        // 03. 재처리 공정

        if (reTop <= triggerPoint) {

            $('.sc3 .re .title_wrap').addClass('active');
            $('.sc3 .re .re_img').addClass('active');

        }


        // 04. 새로운 제품으로 탄생

        if (objcTop <= triggerPoint) {

            $('.sc3 .objc .title_wrap').addClass('active');
            $('.sc3 .objc .objc_img').addClass('active');

            sc3Played = true;

        }

    });


    // ================================
    // SC4 스크롤
    // ================================

    const $sc4 = $('.sc4');
    let sc4Played = false;


    $('.sc4 .t1').css(
        'animation-play-state',
        'paused'
    );


    $(window).on('scroll', function () {

        if (sc4Played) return;


        const sc4Top = $sc4[0].getBoundingClientRect().top;
        const triggerPoint = $(window).height() * 0.8;


        if (sc4Top <= triggerPoint) {

            $('.sc4 .t1').css(
                'animation-play-state',
                'running'
            );

            sc4Played = true;

        }

    });


    // ================================
    // SC5 스크롤
    // ================================

    const $sc5 = $('.sc5');
    let sc5Played = false;


    $('.sc5 .flex_box').css(
        'animation-play-state',
        'paused'
    );


    $(window).on('scroll', function () {

        if (sc5Played) return;


        const sc5Top = $sc5[0].getBoundingClientRect().top;
        const triggerPoint = $(window).height() * 0.8;


        if (sc5Top <= triggerPoint) {

            $('.sc5 .flex_box').css(
                'animation-play-state',
                'running'
            );

            sc5Played = true;

        }

    });


    // ================================
    // MOBILE MENU
    // ================================

    // 햄버거 클릭

    $('.mobile_menu_btn').on('click', function () {

        $('.mobile_menu').addClass('active');
        $(this).addClass('active');
        $('.gotop_wrap').hide();

    });


    // X 버튼 클릭

    $('.mobile_close').on('click', function () {

        $('.mobile_menu').removeClass('active');
        $('.mobile_menu_btn').removeClass('active');
        $('.gotop_wrap').show();

    });


    // 메뉴 클릭

    $('.mobile_menu nav a').on('click', function () {

        $('.mobile_menu').removeClass('active');
        $('.mobile_menu_btn').removeClass('active');
        $('.gotop_wrap').show();

    });

    console.log('화면 높이:', window.innerHeight);
    console.log('화면 너비:', $(window).width());
    console.log('스크롤 위치:', window.scrollY);
    console.log('SC4 문서 위치:', sc4.getBoundingClientRect().top + window.scrollY);
    console.log('SC4 화면 위치:', sc4.getBoundingClientRect().top);


});