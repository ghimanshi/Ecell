const rightArrow = document.getElementById('rightArrow');
const leftArrow = document.getElementById('leftArrow');

rightArrow.onclick = function () {
      document.getElementById('speakersContainer').scrollLeft += 300;
    };
leftArrow.onclick = function () {
      document.getElementById('speakersContainer').scrollLeft -= 300;
    };