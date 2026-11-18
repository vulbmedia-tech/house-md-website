/* Shared header: edit this template to update every page. */
(() => {
  'use strict';
  const root = new URL('../', document.currentScript.src);
  const markup = "<header class=\"header\">\n  <div class=\"wrap\">\n    <a class=\"brand\" href=\"index.html\" aria-label=\"House MD Aesthetics home\">\n      <img src=\"assets/images/logo_white.png\" alt=\"\">\n      <span>House MD<small>Aesthetics</small></span>\n    </a>\n    <button class=\"menu-btn\" id=\"menuBtn\" aria-expanded=\"false\" aria-controls=\"siteNav\" aria-label=\"Open menu\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M4 8h16M4 16h16\"/></svg></button>\n    <nav class=\"nav\" id=\"siteNav\" data-open=\"false\" aria-label=\"Main\">\n      <a href=\"index.html\" data-nav=\"home\">Home</a>\n      <a href=\"pages/treatments.html\" data-nav=\"treatments\">Treatments</a>\n      <a href=\"pages/concerns.html\" data-nav=\"concerns\">Skin concerns</a>\n      <a href=\"pages/about.html\" data-nav=\"about\">About</a>\n      <a href=\"pages/contact.html\" data-nav=\"contact\">Contact</a>\n      <a class=\"btn btn-primary\" href=\"pages/booking.html\">Book appointment</a>\n    </nav>\n  </div>\n</header>";
  const resolved = markup.replace(/\b(href|src)="([^"]+)"/g, (match, attribute, value) => {
    if (/^(?:#|https?:|mailto:|tel:)/.test(value)) return match;
    return attribute + '="' + new URL(value, root).href + '"';
  });
  const slot = document.getElementById('site-header');
  if (slot) slot.outerHTML = resolved;
  const header = document.querySelector('.header');
  let scrollPending = false;
  const updateGlass = () => {
    scrollPending = false;
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', () => {
    if (scrollPending) return;
    scrollPending = true;
    requestAnimationFrame(updateGlass);
  }, { passive: true });
  updateGlass();
  const view = document.querySelector('.view');
  const page = view ? view.id.replace('view-', '') : 'home';
  document.querySelectorAll('[data-nav]').forEach(link => {
    if (link.getAttribute('data-nav') === page) link.setAttribute('aria-current', 'page');
  });
})();
