import { Homepage } from "./script.js";
import { Menupage } from "./menu.js";
import { Contactpage } from "./contact.js";

let status = "Home";

console.log("Hoal");

Homepage();

document.querySelectorAll(".link1")[0].addEventListener("click", function () {
    if (status != "Home") {
        Homepage();
        status = "Home";
    }
})

document.querySelectorAll(".link2")[0].addEventListener("click", function () {
    if (status != "Menu") {
        Menupage();
        status = "Menu";
    }
})

document.querySelectorAll(".link3")[0].addEventListener("click", function () {
    if (status != "Contact") {
        Contactpage();
        status = "Contact";
    }
})

document.querySelectorAll(".dealInfo")[0].addEventListener("click", function () {
    if (status != "Contact") {
        Contactpage();
        status = "Contact";
    }
})