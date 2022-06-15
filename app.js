import { tags, articles } from "./data.js";
console.log(tags, articles);

const tagsContainer = document.querySelector("#tags");
const main = document.querySelector("main");
const btnsContainer = document.querySelector("#btns");

const btnsDiv = btnsContainer.querySelector("#btnsDiv");
const loadMore = document.querySelector("#loadMore");

let page = 1;
let requiredArticles = [...articles];

for (let i = 0; i < tags.length; i++) {
  tagsContainer.innerHTML += `<p class=${i == 0 && "active"}>${tags[i]}</p>`;
}

btnsContainer.addEventListener("click", function (e) {
  let ele = e.target;
  if (ele.classList.contains("prev")) {
    if (page == 1) return;
    createBtns(--page);
    displayArticles(page);
  } else if (ele.classList.contains("next")) {
    createBtns(++page);
    displayArticles(page);
  } else if (ele.classList.contains("page")) {
    page = +ele.innerHTML;
    displayArticles(page);
    createBtns(+ele.innerHTML);
  }
});

function createBtns(page) {
  btnsDiv.innerHTML = "";
  for (let i = page; i < page + 5; i++) {
    btnsDiv.innerHTML += `<button class="page ${
      i == page && "active"
    }">${i}</button>`;
  }
}

function displayArticles(page) {
  let windowWidth = window.innerWidth;
  if (windowWidth > 600) main.innerHTML = "";
  let len = requiredArticles.length;
  for (let i = (page - 1) * 6; i < (page - 1) * 6 + 6; i++) {
    main.innerHTML += `<div class="single-div">
            <img src="https://source.unsplash.com/random?sig=${
              Math.random() * 1000
            }" alt="">
            <h2>${i + 1}. ${requiredArticles[i % len].title}</h2>
            <p class="author">Author: ${
              requiredArticles[i % len].author
            } || Source: ${requiredArticles[i % len].source}</p>
            <p class="description">${requiredArticles[i % len].description}${
      i % len
    }</p>
            <p class="tags">Tags: ${requiredArticles[i % len].tags.join(" | ")}
            </p>
            <button>Read Now</button>
        </div>`;
  }
}

createBtns(1);
displayArticles(page);

tagsContainer.addEventListener("click", function (e) {
  const tags = tagsContainer.querySelectorAll("p");
  const ele = e.target;
  if (ele.tagName === "P") {
    for (let i = 0; i < tags.length; i++) tags[i].classList.remove("active");
    displayByTags(ele.innerHTML);
    ele.classList.add("active");
  }
});

function displayByTags(tag) {
  main.innerHTML = "";
  requiredArticles = [];
  if (tag === "All") {
    requiredArticles = [...articles];
  } else {
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].tags.includes(tag)) requiredArticles.push(articles[i]);
    }
  }
  page = 1;
  console.log(requiredArticles);
  createBtns(1);
  displayArticles(page);
}

window.addEventListener("resize", function () {
  main.innerHTML = "";
  createBtns(1);
  page = 1;
  displayArticles(page);
});

loadMore.addEventListener("click", function () {
  displayArticles(++page);
});
