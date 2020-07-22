document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('mousemove', (e) => {
    parallaxIt(e, ".js-parallaxCard", -60);
    parallaxIt(e, ".js-parallaxHand", -40);
    parallaxIt(e, ".js-parallaxCoin", -20);
  });

});

function parallaxIt(e, target, movement) {
  let container = document.querySelector('.js-parallaxCard');
  let relX = e.pageX - container.offsetLeft;
  let relY = e.pageY - container.offsetTop;
  gsap.to(target, 1, {
    x: (relX - container.offsetWidth / 2) / container.offsetWidth * movement,
    y: (relY - container.offsetHeight / 2) / container.offsetHeight * movement
  })
}