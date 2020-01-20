// открытие фильтра
var areaFilterBtn = document.querySelector('.area_btn--filter');
var areaFilter = document.querySelector('.area__wrapper');
var areaMinimizeBtn = document.querySelector('.area_btn--minimize');

areaFilterBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  if (areaFilter.classList.contains('area__wrapper--closed')) {
    areaFilter.classList.remove('area__wrapper--closed');
  } else {
    areaFilter.classList.add('area__wrapper--closed');
  }
});

areaMinimizeBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  areaFilter.classList.add('area__wrapper--closed');
});
