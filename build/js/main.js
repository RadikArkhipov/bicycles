const pageHeader = document.querySelector('.page-header');
const siteNavToggle = document.querySelector('.site-nav__toggle');

pageHeader.classList.remove('page-header--nav-nojs');
siteNavToggle.addEventListener('click', function() {
  pageHeader.classList.toggle('page-header--nav-open');
});

function addMask(currentTelInput) {
  window.iMaskJS(currentTelInput, {mask: '+{7}(000)000-00-00'});
}

//mask
(function () {
  const phone = document.querySelector(`.intro__form-wrapper label input[type="tel"]`);

  if (phone) {
    addMask(phone);
  };
})();
