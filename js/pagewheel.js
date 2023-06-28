$(function () {
    $('.mouse').click(function () {
        var offset = $('#first_port').offset();
        $('html, body').animate({ scrollTop: offset.top }, 1000);
    });
});