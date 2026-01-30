$('#burger-btn').on('click', () => {
    $('#burger-menu').toggleClass('show-hide')

})

$('.a').on('click', function () {
    $('.a').removeClass('clicked')
    $(this).addClass('clicked')

})

$('.h-a').on('click', function () {
    $('.h-a').removeClass('checked')
    $(this).toggleClass('checked')

})
$('.h-a').on('focusout', function () {
    $(this).removeClass('checked');
});
