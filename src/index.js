import "./style.css";
import { loadInitialPage } from "./home-page-load";
import  { loadMenuTab } from "./menu-tab";

loadInitialPage();

const mainContainer = document.querySelector("div#content");
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");

homeBtn.addEventListener("click", () => {
    mainContainer.textContent = "";
    homeBtn.classList.toggle("not-active");
    menuBtn.classList.toggle("not-active");
    loadInitialPage();
});

menuBtn.addEventListener("click", () => {
    mainContainer.textContent = "";
    menuBtn.classList.toggle("not-active");
    homeBtn.classList.toggle("not-active");
    loadMenuTab();
});

contactBtn.addEventListener("click", () => {
    loadMenuTab();
});


