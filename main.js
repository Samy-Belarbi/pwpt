"use strict";

const body = document.querySelector("body");
const section = document.querySelector("section");
const numberOfSection = document.querySelectorAll("section");

let x = 0;

const main = () => {
    addEventListener("keydown", (event) => scrollPage(event));
}

const scrollPage = (e) => {

    if (e.key === "ArrowDown" && x < section.offsetHeight * (numberOfSection.length - 1)) {
        x = x + section.offsetHeight;
        body.scroll(0, x);
    }

    if (e.key === "ArrowUp" && x > 0) {
        x = x - section.offsetHeight;
        body.scroll(0, x);
    }

}

addEventListener("load", main);