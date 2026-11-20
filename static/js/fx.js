/* Small UI effects: scroll reveal, count-up stats, reading progress bar.
   Everything is progressive: without JS (or with reduced motion) the page is fully visible. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1) Scroll reveal with a small stagger */
  var sel = '.stat-card, .about-stat, .area-card, .proj-card, .post-card, .about-card, .about-mini, .about-timeline > li, .topic-row';
  var items = Array.prototype.slice.call(document.querySelectorAll(sel));
  if (!reduce && 'IntersectionObserver' in window && items.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    items.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) { return; }           /* already on screen: no animation */
      el.classList.add('fx-reveal');
      var sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.transitionDelay = Math.min(sib, 6) * 60 + 'ms';
      io.observe(el);
    });
  }

  /* 2) Count-up on numeric stats ("7+", "8") */
  if (!reduce && 'IntersectionObserver' in window) {
    document.querySelectorAll('.stat-card strong, .about-stat strong').forEach(function (el) {
      var m = el.textContent.trim().match(/^(\d+)(\+?)$/);
      if (!m) { return; }
      var end = parseInt(m[1], 10), suffix = m[2];
      var co = new IntersectionObserver(function (es) {
        if (!es[0].isIntersecting) { return; }
        co.disconnect();
        var t0 = null;
        (function step(t) {
          if (t0 === null) { t0 = t; }
          var p = Math.min((t - t0) / 900, 1), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
          el.textContent = v + suffix;
          if (p < 1) { requestAnimationFrame(step); }
        })(performance.now());
      });
      co.observe(el);
    });
  }

  /* 3) Reading progress bar on blog posts and articles */
  var post = document.querySelector('.post-body');
  if (post) {
    var bar = document.createElement('div');
    bar.className = 'read-progress';
    document.body.appendChild(bar);
    var tick = false;
    var upd = function () {
      var r = post.getBoundingClientRect();
      var total = r.height - window.innerHeight * 0.6;
      var p = total > 0 ? Math.min(Math.max(-r.top / total, 0), 1) : 0;
      bar.style.transform = 'scaleX(' + p + ')';
      tick = false;
    };
    window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
  }
})();
