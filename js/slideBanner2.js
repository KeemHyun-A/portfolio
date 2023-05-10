$(document).ready(function () {

    var current = 0; //초기에 보이는 메인이미지 인덱스값
    var setIntervalId;
    $(this).eq(current).addClass('on');

    // $('.btns').click(function(){})
    // $('.btns').on('click',function(){})
    $('.btns li').on({
        click: function () {
            var tg = $(this);
            var i = tg.index();

            movie(i);

            // 클릭시 버튼 컬러 변경
            $('.btns li').removeClass('on');
            $(this).addClass('on');
        }
    });

    // 자동실행에 대한 제어
    $('#main_img_area').on({
        mouseover: function () {
            clearInterval(setIntervalId);
        },
        mouseout: function () {
            timer();
        }
    });

    timer();
    function timer() {
        setIntervalId = setInterval(function () {
            var n = current + 1;
            if (n == 3) {
                n = 0;
            }
            movie(n)
            $('.btns li').removeClass('on');
            $('.btns li').eq(n).addClass('on');


        }, 3000)

        // setInterval(); 함수를 정해놓은 시간마다 반복적으로 실행하는 메소드
        // cleatInterval(반복실행함수의 객체명) : setInterval() 함수를 멈추게 하는 메소드
        // var setIntervalId = setInterval(function () { }, 3000)
        // cleatInterval(setIntervalId);

        // var stopFunc = setTimeOut(함수명(), 시간); //정해진 시간에 한번 실행
        // clearTimeOut(stopFunc); setTimeOut()함수를 실행중지
    }

    function movie(i) {
        // 현재 보이는 이미지와 다음에 보이는 이미지가 같다면 애니메이션 중지
        if (current == i) return;
        // 변수를 선언
        var currentEl = $('.imgs_area > ul >li').eq(current);
        var nextEl = $('.imgs_area > ul >li').eq(i);

        currentEl.css({ opacity: 1 }).stop().animate({ opacity: 0 });
        nextEl.css({ opacity: 0 }).stop().animate({ opacity: 1 });




        current = i;
    }
})