"use strict";

// ----------------------Our Services-----------------------------

const triggers = document.querySelectorAll(
  ".services-item"
);
const contents = document.querySelectorAll(
  ".services-content"
);

triggers.forEach(function (trigger) {
  trigger.addEventListener("click", function () {
    const id = this.getAttribute("data-tab"),
      content = document.querySelector(
        '.services-content[data-tab="' + id + '"]'
      ),
      activeTrigger = document.querySelector(
        ".services-item.active"
      ),
      activeContent = document.querySelector(
        ".services-content.active"
      );

    activeTrigger.classList.remove("active");
    trigger.classList.add("active");

    activeContent.classList.remove("active");
    content.classList.add("active");
  });
});

// ----------------------What People Say-----------------------------
// Load

const loadBtn = document.getElementById("load-btn");
const itemContainer = document.querySelector(".amazing-item-container");
const spinner = document.querySelector(".load-spin");
let amazingItemleng = document.querySelectorAll(".amazing-item");

loadBtn.addEventListener("click", function () {
  spinner.style.display = 'block';
  loadBtn.style.display = 'none';
  const amazingItem = document.querySelectorAll(".amazing-item");

  function loadItems() {
    spinner.style.display = 'none';
    let category = [
      ["Graphic Design", "graphic-design", "./img/ourAmazingWork/graphic_design/graphic-design"],
      ["Landing Pages", "landing-page", "./img/ourAmazingWork/landing_page/landing-page"],
      ["Web Design", "web-design", "./img/ourAmazingWork/web_design/web-design"],
      ["Wordpress", "wordpress", "./img/ourAmazingWork/wordpress/wordpress"],
      ];
         
    for (let i = (amazingItem.length / 4) + 1; i <= (amazingItem.length / 4) + 3; i++) {
        for (const iterator of category) {
      const cloneNode = document.getElementById("item-form").cloneNode(true);
        cloneNode.childNodes[1].childNodes[1].setAttribute('src', `${iterator[2]}${i}.jpg`);
        cloneNode.childNodes[1].childNodes[1].setAttribute('alt', `${iterator[1]}${i}`);
        cloneNode.childNodes[1].childNodes[3].childNodes[5].textContent = iterator[0];
        cloneNode.setAttribute('data-filter', iterator[0])
        cloneNode.removeAttribute("id")
      itemContainer.append(cloneNode)
      };
      amazingItemleng = document.querySelectorAll(".amazing-item");
    };
      if (amazingItem.length <= 12) {
       loadBtn.style.display = 'block';
    }
  };
  setTimeout(loadItems, 1000);
});

// Filter

const filterList = document.querySelector(".amazing-filter-list");
const amazingCategory = document.querySelectorAll(".amazing-category")



filterList.addEventListener("click", function (event) {
  amazingCategory.forEach(item => {
    item.classList.remove("amazing-active")
  })
    event.target.classList.add("amazing-active")

    if (event.target.classList.contains("amazing-parent")) {
        return;
    }
    amazingItemleng.forEach(item => {
        if (event.target.dataset.filter === item.dataset.filter) {
            item.classList.add("amazing-item-active");
        } else if (event.target.dataset.filter === "All"){
            item.classList.add("amazing-item-active");
        }
        else {
            item.classList.remove("amazing-item-active");
        }
    })

})



// ----------------------What People Say-----------------------------

let position = 0;
const track = document.querySelector(".person-info-track");
const btnPrev = document.getElementById("slider-left-btn");
const btnNext = document.getElementById("slider-right-btn");
const sliderItem = document.querySelectorAll(".slider-item");
const sliderLenght = sliderItem.length;

function sliderMotion() {
  const sliderActive = "slider-item slider-active"
  const classReset = sliderItem.forEach(function (params) {
    params.className = "slider-item";
  });
  if (position === 0) {
    classReset
    sliderItem[0].className = sliderActive;
  }
  if (position === -1160) {
    classReset
    sliderItem[1].className = sliderActive;
  }
  if (position === -2320) {
    classReset
    sliderItem[2].className = sliderActive;
  }
  if (position === -3480) {
    classReset
    sliderItem[3].className = sliderActive;
  }
    track.style.transform = `translateX(${position}px)`
};

sliderItem.forEach(function (person) {
  person.addEventListener("click", () => {
    const id = person.getAttribute("data-name"),
      activePerson = document.querySelector(
        ".slider-item.slider-active"
      );

    activePerson.classList.remove("slider-active");
    person.classList.add("slider-active");

    if (id === "persona1") {
      position = 0;
    }
      if (id === "persona2") {
      position = -1160;
    }
      if (id === "persona3") {
      position = -2320;
    }
      if (id === "persona4") {
      position = -3480;
    }
    sliderMotion()
  });
});

btnPrev.addEventListener("click", () => {
  if (position === 0) {
    position = -3480;
  }
  else { position += 1160; }
  sliderMotion()
});
btnNext.addEventListener("click", () => {
   if (position === -3480) {
     position = 0;
  }
  else {position -= 1160;}
sliderMotion()
})