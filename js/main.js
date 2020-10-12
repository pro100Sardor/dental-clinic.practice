var elSiteBody = document.querySelector('.page__body');
var elSiteNav = document.querySelector('.site-nav');
var elSiteNavToggler = document.querySelector('.site-nav__toggler-button');

elSiteBody.classList.remove('page__body--nojs');

elSiteNavToggler.addEventListener('click', function () {

  elSiteNav.classList.toggle('site-nav--open');

});