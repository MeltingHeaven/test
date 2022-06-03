// Попап
$('.btn').click(function () {
  $('.popup-outer').addClass('active')
});

$('.close').click(function () {
  $('.popup-outer').removeClass('active')
});
// /Попап


// Табы
$('.tab-nav__item').click(function (e) {
  e.preventDefault();

  $('.tab-nav__item').removeClass('tab-nav__item--active');
  $('.tab-content__item').removeClass('tab-content__item--active');

  $(this).addClass('tab-nav__item--active');
  $($(this).attr('href')).addClass('tab-content__item--active');
})
// /Табы