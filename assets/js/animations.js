/* Progressive enhancement: content stays visible without JavaScript or motion. */
(() => {
  'use strict';
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!('IntersectionObserver' in window) || !Element.prototype.animate) return;

  const selector = [
    '.hero .wrap > *', '.svc-head', '.band .h2', '.about-grid > *',
    '.svc', '.benefit', '.circle', '.member', '.approach > *', '.steps li',
    '.quote', '.faq-grid > *', '.book-grid > *', '.story > *', '.value',
    '.profile > *', '.gallery > *', '.tech > *', '.visit > *', '.tcard',
    '.social-link', '.list-head', '.dblock', '.dside', '.contact-cards > *', '.f-top > *'
  ].join(',');
  const watched = new WeakSet();
  const revealed = new WeakSet();
  const running = new Set();
  const benefits = document.querySelector('#view-home > section[aria-labelledby="ben-h"] .benefits');
  let benefitsPlayed = false;
  function play(element, frames, options) {
    const animation = element.animate(frames, options);
    running.add(animation);
    animation.finished.then(() => running.delete(animation), () => running.delete(animation));
  }
  function revealBenefits() {
    if (!benefits || benefitsPlayed || preference.matches) return;
    benefitsPlayed = true;
    const image = benefits.querySelector('.circle');
    const mobile = window.matchMedia('(max-width:1000px)').matches;
    const center = image.getBoundingClientRect();
    play(image, [
      { opacity: 0, transform: 'scale(.9)' },
      { opacity: 1, transform: 'scale(1)' }
    ], { duration: 900, easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'backwards' });
    benefits.querySelectorAll('.benefit').forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const distance = mobile ? 0 : Math.max(-100, Math.min(100,
        (center.left + center.width / 2) - (rect.left + rect.width / 2)));
      play(item, [
        { opacity: 0, transform: 'translate(' + distance + 'px,20px) scale(.96)' },
        { opacity: 1, transform: 'translate(0,0) scale(1)' }
      ], { duration: 900, delay: 90 + index * 110,
        easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'backwards' });
    });
  }
  const benefitsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !preference.matches) {
        revealBenefits();
        benefitsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting || target.closest('[hidden]')) return;
      observer.unobserve(target);
      watched.delete(target);
      if (preference.matches || revealed.has(target)) return;
      revealed.add(target);
      const siblings = Array.from(target.parentElement.children);
      const delay = Math.min(siblings.indexOf(target) % 4, 3) * 55;
      const animation = target.animate([
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 900, delay, easing: 'cubic-bezier(.2,.65,.3,1)', fill: 'backwards' });
      running.add(animation);
      animation.finished.then(() => running.delete(animation), () => running.delete(animation));
    });
  }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });

  function scan() {
    if (preference.matches) return;
    if (benefits && !benefitsPlayed) benefitsObserver.observe(benefits);
    document.querySelectorAll(selector).forEach(element => {
      if (benefits && benefits.contains(element) && element.matches('.benefit,.circle')) return;
      if (element.closest('[hidden]') || watched.has(element) || revealed.has(element)) return;
      // Reveal a containing panel as a whole to avoid compounded movement.
      if (element.parentElement.closest(selector)) return;
      watched.add(element);
      observer.observe(element);
    });
  }
  let queued = false;
  new MutationObserver(() => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; scan(); });
  }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden'] });

  preference.addEventListener('change', () => {
    if (preference.matches) {
      running.forEach(animation => animation.cancel());
      running.clear();
      observer.disconnect();
      benefitsObserver.disconnect();
      document.querySelectorAll(selector).forEach(element => watched.delete(element));
    } else scan();
  });
  scan();
})();
