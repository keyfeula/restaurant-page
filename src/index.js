import { loadInitialPage } from "./home-page-load";
import  { loadMenuTab } from "./menu-tab";
import { loadContactTab } from "./contact-tab";

loadInitialPage();

const mainContainer = document.querySelector("div#content");
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");
let activeBtn = homeBtn;

homeBtn.addEventListener("click", () => {
    mainContainer.textContent = "";
    activeBtn.classList.toggle("active");
    activeBtn = homeBtn;
    activeBtn.classList.toggle("active");
    loadInitialPage();
});

menuBtn.addEventListener("click", () => {
    mainContainer.textContent = "";
    activeBtn.classList.toggle("active");
    activeBtn = menuBtn;
    activeBtn.classList.toggle("active");
    loadMenuTab();
});

contactBtn.addEventListener("click", () => {
    mainContainer.textContent = "";
    activeBtn.classList.toggle("active");
    activeBtn = contactBtn;
    activeBtn.classList.toggle("active");
    loadContactTab();
});


