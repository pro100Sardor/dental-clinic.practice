var elSiteNav = document.querySelector('.site-nav');

var elSiteNavToggler = document.querySelector('.site-nav__toggler-button');

elSiteNavToggler.addEventListener('click', function () {

  elSiteNav.classList.toggle('site-nav--open');

});