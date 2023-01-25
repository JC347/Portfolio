"use strict";
console.log("hi");
/*
const filterBtns = document.querySelectorAll("#filter-btn");
console.log(filterBtns);

const applications = document.querySelectorAll("#JS-Application");
console.log(applications);
const components = document.querySelectorAll("#Tailwind-Component");
console.log(components);
const singlepages = document.querySelectorAll("#Tailwind-Singlepage");
console.log(singlepages);

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.category;
    console.log(category);
  });
});
*/

//items
const projects = [
  {
    id: 1,
    title: "Bankist",
    category: "JS-Application",
    img: "images/bankist.png",
    descr: "Modern SPA with JS made Animations",
    link: "Bankist/index.html",
  },
  {
    id: 2,
    title: "Mapty",
    category: "JS-Application",
    img: "images/Mapty.png",
    descr: "Workout application that renders your workouts on a map",
    link: "Mapty/index.html",
  },

  {
    id: 4,
    title: "Loopstudios",
    category: "Tailwind-Singlepage",
    img: "images/Loopstudios.png",
    descr: "Responsive Single-Page UI with Tailwind CSS",
    link: "Loopstudios/index.html",
  },
  {
    id: 5,
    title: "Pricing Cards",
    category: "Tailwind-Component",
    img: "images/priceUI.png",
    descr: "UI-Component with Tailwind CSS",
    link: "Pricing Cards/index.html",
  },
  {
    id: 6,
    title: "Clipboard",
    category: "Tailwind-Singlepage",
    img: "images/clipboard.png",
    descr: "Responsive Single-Page UI with Tailwind CSS",
    link: "clipboard/index.html",
  },
  {
    id: 7,
    title: "Guess My Number",
    category: "JS-Application",
    img: "images/guessmynumber.jpg",
    descr: "Guessing Game using the Basics of JS",
    link: "GuessMyNumber/index.html",
  },
  {
    id: 8,
    title: "Product Modal",
    category: "Tailwind-Component",
    img: "images/productUI.png",
    descr: "UI-Component with Tailwind CSS",
    link: "product-modal/index.html",
  },
  {
    id: 3,
    title: "Newsletter",
    category: "Tailwind-Component",
    img: "images/Newsletter.png",
    descr: "UI-Component with Tailwind CSS",
    link: "Email-Subscribe/index.html",
  },
];

const sectionCenter = document.getElementById("project-container");
const filterBtns = document.querySelectorAll("#filter-btn");

//load items
window.addEventListener("DOMContentLoaded", function () {
  /*
  let displayMenu = menu.map(function (item) {
    

    return `<article class="menu-item">
    <img src="${item.img}" class="photo" alt="${item.title} />
    <div class="item-info">
      <header>
        <h3>${item.title}</h3>
        <h3 class="price">${item.category}</h3>
      </header>
      <p>
        ${item.desc}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
  console.log(displayMenu);
  */
  displayProjectItems(projects);
});
//filter items
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.category;

    const projectCategory = projects.filter(function (projectItem) {
      //console.log(projectItem.category);
      if (projectItem.category === category) {
        return projectItem;
      }
    });
    if (category === "all") {
      displayProjectItems(projects);
    } else {
      displayProjectItems(projectCategory);
    }
  });
});

function displayProjectItems(projectItems) {
  let displayProject = projectItems.map(function (item) {
    //console.log(item);

    return `<a href="${item.link}" target="_blank"><div class="relative group" id="${item.category}">
    <img src="${item.img}" alt="" class="w-72" />
    <div
      class="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
    >
      <div class="flex justify-between w-full">
        <div class="font-normal">
          <p class="text-sm">${item.title} - ${item.category}</p>
          <p class="text-xs">${item.descr}</p>
        </div>
        <div class="flex items-center">
          <img src="images/bookmark.svg" alt="bookmark" />
        </div>
      </div>
    </div>
  </div></a>`;
  });
  displayProject = displayProject.join("");
  sectionCenter.innerHTML = displayProject;
}
