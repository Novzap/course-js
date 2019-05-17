$(document).ready(function() {
    showPopup('.main_btna');
    showPopup('.main_btn');
    showPopup('nav ul li:eq(1)');

    $('.close').on('click', function() {
        $('.modal').animate({height: 'hide'}, 1000)
        $('.overlay').fadeOut(1000);
    });

    function showPopup(sel) {
        $(sel).on('click', function() {
            $('.modal').animate({height: 'show'}, 1000)
            $('.overlay').fadeIn(1000);
        });   
    }
});