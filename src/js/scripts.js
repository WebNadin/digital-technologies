//= partials/helper.js
//= partials/modals.js
//= partials/ad.js

document.addEventListener('DOMContentLoaded', () => {
  let fullModal = new Modal(document.querySelector('.js-fullModal'));
  let watchModal =new Modal(document.querySelector('.js-watchModal'));
  setTimeout(() => fullModal.openModal(), 2000);
  document.querySelector('.js-watchBtn').addEventListener('click', () => {
    watchModal.openSmallModal();
  }, true);
});




