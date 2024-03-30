let elements = [
  {
    cityText: "Rostov-on-Don\nLCD admiral",
    img: "sliderimg1.jpg",
    areaText: "81 m2",
    repairText: "3.5 months",
  },
  {
    cityText: "Sochi\nThieves",
    img: "sliderimg2.jpg",
    areaText: "105 m2",
    repairText: "4 months",
  },
  {
    cityText: "Rostov-on-Don\nPatriotic",
    img: "sliderimg3.jpg",
    areaText: "93 m2",
    repairText: "3 months",
  },
];

function initSlider() {
  if (!elements || !elements.length) return;

  let cityText = document.getElementById("city-text");
  let img = document.getElementById("slider-photo");
  let areaText = document.getElementById("area-text");
  let repairText = document.getElementById("repair-text");

  const setElement = (index) => {
    cityText.innerText = elements[index].cityText;
    img.src = `./img/${elements[index].img}`;
    areaText.innerText = elements[index].areaText;
    repairText.innerText = elements[index].repairText;
  };

  function setChosenCity(currentIndex) {
    citySelector.forEach(function (item, index) {
      if (currentIndex !== index) {
        item.classList.remove("city-selector_active");
      } else {
        item.classList.add("city-selector_active");
      }
    });
  }
  function setChosenPoint(currentIndex) {
    pointSelector.forEach(function (item, index) {
      if (currentIndex !== index) {
        item.classList.remove("point-selector_active");
      } else {
        item.classList.add("point-selector_active");
      }
    });
  }

  let prev = document.querySelector(".left");
  let next = document.querySelector(".right");
  let pointSelector = document.querySelectorAll(".point-selector");
  let citySelector = document.querySelectorAll(".city-selector");

  let currentIndex = 0;

  prev.addEventListener("click", () => {
    if (currentIndex <= 0) {
      currentIndex = elements.length - 1;
    } else {
      currentIndex -= 1;
    }
    setElement(currentIndex);
    setChosenCity(currentIndex);
    setChosenPoint(currentIndex);
  });
  next.addEventListener("click", () => {
    if (currentIndex >= elements.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    setElement(currentIndex);
    setChosenCity(currentIndex);
    setChosenPoint(currentIndex);
  });

  pointSelector.forEach((item, index) => {
    item.addEventListener("click", function () {
      currentIndex = index;
      setElement(currentIndex);
      setChosenCity(currentIndex);
      setChosenPoint(currentIndex);
    });
  });

  citySelector.forEach((item, index) => {
    item.addEventListener("click", function () {
      currentIndex = index;
      setElement(currentIndex);
      setChosenCity(currentIndex);
      setChosenPoint(currentIndex);
    });
  });
}

addEventListener("DOMContentLoaded", initSlider);
