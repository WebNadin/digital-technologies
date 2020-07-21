class Ad {
  constructor(item) {
    this.item = item;
  }

  init() {
    gsap.to(".js-watch", {duration: .1, autoAlpha: 0});
    gsap.to(".js-startCup", {duration: .9, delay: .3, y: 60});
    gsap.to(".js-startCup", {duration: .6, delay: .3, onComplete: this.startSweets});
    gsap.to(".js-startCup", {duration: .6, delay: 3.3, onComplete: this.startPeople});
    gsap.to(".js-startCup", {duration: .6, delay: 5.3, onComplete: this.startTextGlory});
    gsap.to(".js-startCup", {duration: .6, delay: 10, onComplete: this.finishPeople});
  }

  startSweets() {
    gsap.to(".js-sweets-left", {duration: 1, y: 0, x: 50});
    gsap.to(".js-sweets-right", {duration: 1, y: -50, x: -50});
    gsap.to(".js-sweets-bottom", {duration: 1, y: 300, x: 0});
    gsap.to(".js-sweets", {duration: 7, delay: 1, y: 500});
    gsap.to(".js-sweets-left", {duration: 3, delay: 1, x: -50});
    gsap.to(".js-sweets-left", {duration: 3, delay: 4, x: 50});
  }

  startPeople() {
    gsap.to(".js-blackening", {duration: 2, delay: .3, ease: Power1.easeOut, opacity: 1});
    gsap.to(".js-peopleLeft", {duration: 2, ease: Power1.easeOut, x: 0});
    gsap.to(".js-peopleLeft", {duration: .3, opacity: 1});
    gsap.to(".js-peopleRight", {duration: 2, ease: Power1.easeOut, x: 0});
    gsap.to(".js-peopleRight", {duration: .3, opacity: 1});
  }

  startTextGlory() {
    gsap.to(".js-one", {duration: .7, opacity: 1, scale: 1, ease: Expo.easeOut});
    gsap.to(".js-game", {duration: .5, delay: 1, opacity: 1, ease: Back.easeOut.config(1.1), y: 0});

    gsap.to(".js-one", {duration: .2, delay: 1.2, y: -30, ease: Back.easeOut.config(1.1)});
    gsap.to(".js-one", {duration: 1, delay: 1.4, y: 0});
    gsap.to(".js-one", {duration: .2, delay: 1.4, rotate: 5});
    gsap.to(".js-one", {duration: .2, delay: 1.6, rotate: -5});
    gsap.to(".js-one", {duration: .2, delay: 1.8, rotate: 3});
    gsap.to(".js-one", {duration: .2, delay: 2, rotate: -3});
    gsap.to(".js-one", {duration: .2, delay: 2.2, rotate: 0});
    gsap.to(".js-one", {duration: .2, delay: 2.4, rotate: 0});

    gsap.to(".js-glory", {duration: .6, delay: 2.2, opacity: 1, scale: 1});

    gsap.to(".js-logos", {duration: .1, delay: 2.2, opacity: .3});
    gsap.to(".js-logos", {duration: 1.5, delay: 2.2, opacity: 1, scale: 1, ease: Expo.easeOut});

    gsap.to(".js-glory-copyLeft", {duration: .3, delay: 3.2, opacity: .1, scale: 1.4});
    gsap.to(".js-glory-copyRight", {duration: .3, delay: 3.2, opacity: .1, scale: 1.4});
    gsap.to(".js-glory-copyLeft", {duration: 3, delay: 3.3, opacity: 0});
    gsap.to(".js-glory-copyRight", {duration: 3, delay: 3.3, opacity: 0});
    gsap.to(".js-glory-copyLeft", {duration: 3, delay: 3.3, x: 200, y: 30});
    gsap.to(".js-glory-copyRight", {duration: 3, delay: 3.3, x: -200, y: 30});
    gsap.to(".js-textGlory", {duration: 2, delay: 3.3, opacity: 0});
    gsap.to(".js-blackening", {duration: .1, delay: 1, opacity: 1});
  }

  finishPeople() {
    gsap.to(".js-schedule", {duration: .1, opacity: 1});
    gsap.to(".js-startCup", {duration: .1, opacity: 0});
    gsap.to(".js-sweets", {duration: .1, opacity: 0});
    gsap.to(".js-peopleLeft", {duration: 6, ease: Power1.easeOut, x: -2000});
    gsap.to(".js-logosLeft", {duration: 6, ease: Power1.easeOut, x: -2000});
    gsap.to(".js-peopleRight", {duration: 6, ease: Power1.easeOut, x: 2000});
    gsap.to(".js-logosRight", {duration: 6, ease: Power1.easeOut, x: 2000});
    gsap.to(".js-blackening", {duration: 6, opacity: 0, autoAlpha: 0});
    gsap.to(".js-people", {duration: .1, delay: 6.1, autoAlpha: 0});
    gsap.to(".js-watch", {duration: .1, autoAlpha: 1});
  }
}
