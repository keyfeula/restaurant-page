import "./style.css";
import { loadInitialPage } from "./home-page-load";
import  { loadMenuTab } from "./menu-tab";

const mainContainer = document.querySelector("div#content");
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector("contact-btn");

homeBtn.addEventListener("click", () => {
    mainContainer.textContent = "";
    loadInitialPage();
});

menuBtn.addEventListener("click", () => {
    mainContainer.textContent = "";
    loadMenuTab();
});

contactBtn.addEventListener("click", () => {
    
});

loadInitialPage();


