var headerNav = document.querySelector('.page-header__nav');
var navToggle = document.querySelector('.page-header__toggle');

headerNav.classList.remove('page-header__nav--nojs');

navToggle.addEventListener('click', function() {
  if (headerNav.classList.contains('page-header__nav--closed')) {
    headerNav.classList.remove('page-header__nav--closed');
    navToggle.classList.remove('page-header__toggle--closed');
  } else {
    headerNav.classList.add('page-header__nav--closed');
    navToggle.classList.add('page-header__toggle--closed');
  }
});
