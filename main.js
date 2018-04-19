// $('.menu-toggle').click(function() {
//   $('.site-nav').toggleClass('site-nav--open')
//   $(this).toggleClass('open')
// })

// on off menu by hamberger-menu
$('.menu-toggle').click(function() {
  $('#nav ul').toggleClass('menu-open')

  // this is .menu-toggle
  $(this).toggleClass('open')
})