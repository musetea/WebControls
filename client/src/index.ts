
const TIMEOUT_SEC: number = 4000;
const LOAD_SEC: number = 50;


class Loader {
   constructor() {
      console.group("Loading...");
      const $loader = document.querySelector(".loader")! as HTMLDivElement;
      console.log($loader)
      const $main = document.querySelector("section.main")! as HTMLElement;
      console.log($main)

      this.init($main, $loader);

      console.groupEnd();
   }

   private init = (main: HTMLElement, loader: HTMLDivElement) => {
      setTimeout(() => {
         loader.style.opacity = "0";
         loader.style.display = "none";

         main.style.display = "block";
         setTimeout(() => {
            main.style.opacity = "1";
         }, LOAD_SEC);
      }, TIMEOUT_SEC);
   }
};


new Loader();