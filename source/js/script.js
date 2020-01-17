var headerNav = document.querySelector('.page-header__nav');
var navToggle = document.querySelector('.page-header__toggle');
var pageHeader = document.querySelector('.page-header');

if (headerNav.classList.contains('page-header__nav--nojs')) {
  headerNav.classList.remove('page-header__nav--nojs');
  headerNav.classList.add('page-header__nav--closed');
  pageHeader.classList.add('page-header--dark');
  navToggle.classList.add('page-header__toggle--closed');
};

navToggle.addEventListener('click', function() {
  if (headerNav.classList.contains('page-header__nav--closed')) {
    headerNav.classList.remove('page-header__nav--closed');
    navToggle.classList.remove('page-header__toggle--closed');
    pageHeader.classList.remove('page-header--dark');
  } else {
    headerNav.classList.add('page-header__nav--closed');
    navToggle.classList.add('page-header__toggle--closed');
    pageHeader.classList.add('page-header--dark');
  }
});


var ratesLink = document.querySelector(".rates__link");
var ratesPopup = document.querySelector(".biz-rates");
var ratesCloseBtn = document.querySelector(".biz-rates__btn");

ratesLink.addEventListener("click", function(evt){
  evt.preventDefault();
  ratesPopup.classList.add("biz-rates--show");
});

ratesCloseBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  ratesPopup.classList.remove("biz-rates--show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    ratesPopup.classList.remove("biz-rates--show");
  }
});
