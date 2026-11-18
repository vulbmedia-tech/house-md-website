/* Shared footer: edit this template to update every page. */
(() => {
  'use strict';
  const root = new URL('../', document.currentScript.src);
  const markup = "<footer class=\"footer\">\n  <div class=\"wrap\">\n    <div class=\"f-top\">\n      <div class=\"f-brand\">\n        <img src=\"assets/images/logo_white.png\" alt=\"House MD Aesthetics\">\n        <p>A doctor-led aesthetic clinic in Tunasan, Muntinlupa, focused on clear guidance, natural-looking results and ongoing patient support.</p>\n      </div>\n      <div class=\"f-col\"><h4>Clinic</h4><ul><li><a href=\"pages/about.html\">About us</a></li><li><a href=\"pages/treatments.html\">Treatments</a></li><li><a href=\"pages/concerns.html\">Skin concerns</a></li><li><a href=\"index.html#team\">Team</a></li></ul></div>\n      <div class=\"f-col\"><h4>Support</h4><ul><li><a href=\"https://app.acuityscheduling.com/schedule.php?owner=40833385&amp;ref=booking_button\" target=\"_blank\" rel=\"noopener noreferrer\">Book appointment</a></li><li><a href=\"pages/contact.html\">Contact &amp; visit</a></li><li><a href=\"pages/contact.html#faqs\">FAQs</a></li><li><a href=\"pages/treatments.html#aftercare\">Aftercare guides</a></li></ul></div>\n      <div class=\"f-col\"><h4>Follow</h4><ul><li><a href=\"https://www.instagram.com/housemd_aesthetics/\" target=\"_blank\" rel=\"noopener\">Instagram</a></li><li><a href=\"https://www.facebook.com/houseMDaesthetics2023/\" target=\"_blank\" rel=\"noopener\">Facebook</a></li></ul></div>\n    </div>\n    <p class=\"disclaimer\">Results vary from person to person. Suitability for any treatment is determined after consultation and assessment by our doctors.</p>\n    <div class=\"f-bottom\"><span>© 2026 House M.D. Aesthetics. All rights reserved.</span><span>Powered by <a href=\"https://vulbmedia.com\" target=\"_blank\" rel=\"noopener noreferrer\">Vulb Media</a></span></div>\n  </div>\n</footer>";
  const resolved = markup.replace(/\b(href|src)="([^"]+)"/g, (match, attribute, value) => {
    if (/^(?:#|https?:|mailto:|tel:)/.test(value)) return match;
    return attribute + '="' + new URL(value, root).href + '"';
  });
  const slot = document.getElementById('site-footer');
  if (slot) slot.outerHTML = resolved;
})();
