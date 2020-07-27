class Parallax {

  init() {
    this.animationYoyo();
    window.addEventListener('mousemove', (e) => {
      this.mouseMoveElement(e, ".js-parallaxCard", -60);
      this.mouseMoveElement(e, ".js-parallaxHand", -40);
      this.mouseMoveElement(e, ".js-parallaxCoin", -20);
    });
    window.addEventListener('mouseover', (e) => {
      gsap.killTweensOf(".js-parallaxCard");
      gsap.killTweensOf(".js-parallaxCoin");
      gsap.killTweensOf(".js-parallaxHand");
    });
    window.addEventListener('mouseout', (e) => {
      this.animationYoyo();
    });
  }

  animationYoyo() {
    gsap.to(".js-parallaxCard", {y: 20, x: 20, duration: 2, repeat: 100, yoyoEase: true});
    gsap.to(".js-parallaxCoin", {y: -10, x: 15, delay: .3, duration: 2, repeat: 100, yoyoEase: true});
    gsap.to(".js-parallaxHand", {y: 10, x: 30, delay: .1, duration: 3, repeat: 100, yoyoEase: true});
  }

  mouseMoveElement(e, target, movement) {
    let container = document.querySelector('.js-parallaxContainer');
    let relX = e.pageX - container.offsetLeft;
    let relY = e.pageY - container.offsetTop;
    gsap.to(target, 1, {
      x: (relX - container.offsetWidth / 2) / container.offsetWidth * movement,
      y: (relY - container.offsetHeight / 2) / container.offsetHeight * movement
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let parallaxImg = new Parallax(document.querySelector('.js-parallaxContainer'));
  parallaxImg.init();
});
