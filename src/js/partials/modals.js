class Modal {
  constructor(item) {
    this.item = item;
    this.closeBtns = [...document.querySelectorAll('.js-closeBtn')];
    this.closeBtns.forEach((item, i) => item.addEventListener('click', () => {
      this.closeModal('.js-watchModal');
    }));
  }

  openModal() {
    document.body.classList.add('_fixed');
    gsap.to(".js-watch", {duration: .3, autoAlpha: 0});
    gsap.to(".js-watchModal", {duration: .3, opacity: 1, scale: 1});
    gsap.to(".js-watchModal", {duration: .1, zIndex: 100});
  }

  closeModal(elem) {
    gsap.to(elem, {duration: .3, opacity: 0, scale: .3});
    document.body.classList.remove('_fixed');
    gsap.to(".js-watch", {duration: .3, autoAlpha: 1});
    gsap.to(".js-watchModal", {duration: .1, zIndex: 0});
  }

}

