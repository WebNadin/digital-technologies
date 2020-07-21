//= partials/modals.js
//= partials/animations.js

document.addEventListener('DOMContentLoaded', () => {
  let watchModal =new Modal(document.querySelector('.js-watchModal'));
  document.querySelector('.js-watchBtn').addEventListener('click', () => {
    watchModal.openSmallModal();
  }, true);
});




