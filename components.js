/**
 * Garden Home Plumbing & Drain LLC
 * components.js — shared nav and footer injection
 *
 * Each HTML page needs two placeholder elements and this script:
 *
 *   <div id="nav-placeholder"></div>    ← first child of <body>
 *   ...page content...
 *   <div id="footer-placeholder"></div>
 *   <script src="components.js"></script>
 *   </body>
 */

(function () {
  /* --------------------------------------------------
     Active page detection
     Works for both file:// paths and served paths.
  -------------------------------------------------- */
  const filename = window.location.pathname.split('/').pop() || 'index.html';

  const pages = [
    { href: 'index.html',        label: 'Home' },
    { href: 'services.html',     label: 'Services' },
    { href: 'about.html',        label: 'About' },
    { href: 'reviews.html',      label: 'Reviews' },
    { href: 'service-area.html', label: 'Service Area' },
    { href: 'contact.html',      label: 'Contact' },
  ];

  function navLinkHTML(isMobile) {
    return pages
      .map(function (p) {
        const active = (filename === p.href || (filename === '' && p.href === 'index.html'))
          ? ' class="active"'
          : '';
        return '<a href="' + p.href + '"' + active + '>' + p.label + '</a>';
      })
      .join('');
  }

  /* --------------------------------------------------
     NAV HTML
  -------------------------------------------------- */
  const navHTML =
    '<header class="site-header">' +
      '<div class="nav-inner">' +
        '<a href="index.html" class="nav-brand">Garden Home Plumbing &amp; Drain</a>' +
        '<nav class="nav-links" aria-label="Main navigation">' +
          navLinkHTML(false) +
        '</nav>' +
        '<div class="nav-phone">' +
          '<a href="tel:+15037530225" aria-label="Call Garden Home Plumbing at (503) 753-0225">Call Now &nbsp;(503) 753-0225</a>' +
        '</div>' +
        '<button class="nav-hamburger" id="ghp-hamburger" aria-label="Open navigation menu" aria-expanded="false" aria-controls="ghp-mobile-menu">' +
          '<span></span>' +
          '<span></span>' +
          '<span></span>' +
        '</button>' +
      '</div>' +
      '<nav class="nav-mobile-menu" id="ghp-mobile-menu" aria-label="Mobile navigation">' +
        navLinkHTML(true) +
        '<a href="tel:+15037530225" class="nav-mobile-phone" aria-label="Call Garden Home Plumbing at (503) 753-0225">Call Now &nbsp;(503) 753-0225</a>' +
      '</nav>' +
    '</header>';

  /* --------------------------------------------------
     FOOTER HTML
  -------------------------------------------------- */
  const footerHTML =
    '<footer class="site-footer">' +
      '<div class="footer-main">' +

        '<div class="footer-col">' +
          '<h4>Garden Home Plumbing &amp; Drain LLC</h4>' +
          '<address>' +
            '6725 SW Florence Ln<br>' +
            'Portland, OR 97223<br><br>' +
            '<a href="tel:+15037530225">(503) 753-0225</a><br>' +
            '<a href="mailto:gardenhomeplumbingndrain@yahoo.com">gardenhomeplumbingndrain@yahoo.com</a><br><br>' +
            'CCB#198010 &nbsp;|&nbsp; Licensed, Bonded &amp; Insured' +
          '</address>' +
        '</div>' +

        '<div class="footer-col">' +
          '<h4>Quick Links</h4>' +
          '<ul>' +
            '<li><a href="index.html">Home</a></li>' +
            '<li><a href="services.html">Services</a></li>' +
            '<li><a href="about.html">About</a></li>' +
            '<li><a href="reviews.html">Reviews</a></li>' +
            '<li><a href="service-area.html">Service Area</a></li>' +
            '<li><a href="contact.html">Contact</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="footer-col footer-trust">' +
          '<h4>Why Choose Us</h4>' +
          '<ul>' +
            '<li>Veteran-Owned &amp; Operated</li>' +
            '<li>BBB A+ Rated</li>' +
            '<li>Angi Super Service Award</li>' +
            "<li>Serving Portland's West Side Since 2012</li>" +
          '</ul>' +
        '</div>' +

      '</div>' +
      '<div class="footer-bottom">' +
        '<p>&copy; 2026 Garden Home Plumbing &amp; Drain LLC. All Rights Reserved.</p>' +
      '</div>' +
    '</footer>';

  /* --------------------------------------------------
     Inject nav and footer
  -------------------------------------------------- */
  var navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = navHTML;

  var footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = footerHTML;

  /* --------------------------------------------------
     Hamburger menu toggle
     Uses event delegation so it works after injection.
  -------------------------------------------------- */
  function closeMenu() {
    var hamburger = document.getElementById('ghp-hamburger');
    var mobileMenu = document.getElementById('ghp-mobile-menu');
    if (!hamburger || !mobileMenu) return;
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
  }

  document.addEventListener('click', function (e) {
    var hamburger = document.getElementById('ghp-hamburger');
    var mobileMenu = document.getElementById('ghp-mobile-menu');

    if (!hamburger || !mobileMenu) return;

    if (e.target === hamburger || hamburger.contains(e.target)) {
      var isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      hamburger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    }
  });

  /* Close mobile menu on Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var mobileMenu = document.getElementById('ghp-mobile-menu');
      if (mobileMenu && mobileMenu.classList.contains('open')) {
        closeMenu();
        var hamburger = document.getElementById('ghp-hamburger');
        if (hamburger) hamburger.focus();
      }
    }
  });

})();
