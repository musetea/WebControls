"use strict";
const TIMEOUT_SEC = 4000;
const LOAD_SEC = 50;
class Loader {
    constructor() {
        this.init = (main, loader) => {
            setTimeout(() => {
                loader.style.opacity = "0";
                loader.style.display = "none";
                main.style.display = "block";
                setTimeout(() => {
                    main.style.opacity = "1";
                }, LOAD_SEC);
            }, TIMEOUT_SEC);
        };
        console.group("Loading...");
        const $loader = document.querySelector(".loader");
        console.log($loader);
        const $main = document.querySelector("section.main");
        console.log($main);
        this.init($main, $loader);
        console.groupEnd();
    }
}
;
new Loader();
