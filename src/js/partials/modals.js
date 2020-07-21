class Modal {
  constructor(item) {
    this.item = item;
    this.closeBtns = [...document.querySelectorAll('.js-closeBtn')];
    this.closeBtns.forEach((item, i) => item.addEventListener('click', (btn) => {
      let currentModal = null;
      if (btn.target.parentNode.classList.contains('btn_watch')) {
        currentModal = '.js-watchModal';
      } else currentModal = '.js-fullModal';
      this.closeModal(currentModal);
    }));
  }

  openModal() {
    gsap.to(".js-fullModal", {duration: .3, opacity: 1, scale: 1});
    document.body.classList.add('_fixed');
    let ad = new Ad();
    ad.init();
  }

  openSmallModal() {
    document.body.classList.add('_fixed');
    gsap.to(".js-watch", {duration: .3, autoAlpha: 0});
    gsap.to(".js-watchModal", {duration: .3, opacity: 1, scale: 1});
  }


  closeModal(elem) {
    gsap.to(elem, {duration: .3, opacity: 0, scale: .3});
    if (elem == '.js-fullModal') {
      document.body.classList.remove('_fixed')
    } else gsap.to(".js-watch", {duration: .3, autoAlpha: 1});
  }

}

