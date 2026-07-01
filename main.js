/* ═══════════════════════════════════════════════════════════════
   NatMesh · CORE INTERACTIONS
═══════════════════════════════════════════════════════════════ */

/* ─── Nav scroll state ─────────────────────────────────────── */
(function() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ─── Mobile drawer ────────────────────────────────────────── */
(function() {
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('mobile-drawer');
  if (!burger || !drawer) return;
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    drawer.classList.toggle('open');
  });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    drawer.classList.remove('open');
  }));
})();

/* ─── Scroll reveal ────────────────────────────────────────── */
(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

/* ─── FAQ accordion ────────────────────────────────────────── */
(function() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
})();

/* ─── Classification bar live UTC clock ────────────────────── */
(function() {
  const els = document.querySelectorAll('[data-utc-clock]');
  if (!els.length) return;
  const pad = (n) => String(n).padStart(2, '0');
  function tick() {
    const d = new Date();
    const t = `${d.getUTCFullYear()}-${pad(d.getUTCMonth()+1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`;
    els.forEach(el => el.textContent = t);
  }
  tick();
  setInterval(tick, 1000);
})();

/* ─── Animated count-up for fact numbers ───────────────────── */
(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-count]').forEach(el => el.textContent = el.dataset.count + (el.dataset.suffix || ''));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const dur = 1100;
      const start = performance.now();
      function step(now) {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('[data-count]').forEach(el => io.observe(el));
})();

/* ─── Gauge sweep on view ──────────────────────────────────── */
(function() {
  const gauges = document.querySelectorAll('[data-gauge]');
  if (!gauges.length) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const svg = e.target;
      const val = parseFloat(svg.dataset.gauge);
      const max = parseFloat(svg.dataset.max);
      const needle = svg.querySelector('.gauge-needle');
      const arc = svg.querySelector('.gauge-arc-fill');
      if (!needle || !arc) return;
      const arcLen = arc.getTotalLength();
      arc.style.strokeDasharray = arcLen;
      arc.style.strokeDashoffset = arcLen;
      const targetPct = Math.min(1, val / max);
      const rotMin = -90, rotMax = 90;
      const targetRot = rotMin + (rotMax - rotMin) * targetPct;
      if (reduce) {
        needle.style.transform = `rotate(${targetRot}deg)`;
        arc.style.strokeDashoffset = arcLen * (1 - targetPct);
      } else {
        const dur = 1600, start = performance.now();
        function step(now) {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          needle.style.transform = `rotate(${rotMin + (targetRot - rotMin) * eased}deg)`;
          arc.style.strokeDashoffset = arcLen * (1 - targetPct * eased);
          if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }
      io.unobserve(svg);
    });
  }, { threshold: 0.4 });
  gauges.forEach(g => io.observe(g));
})();

/* ─── Drift chart draw-in ──────────────────────────────────── */
(function() {
  const charts = document.querySelectorAll('[data-drift-chart]');
  if (!charts.length) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const svg = e.target;
      const bars = svg.querySelectorAll('.drift-bar');
      bars.forEach((b, i) => {
        const h = parseFloat(b.dataset.h || '0');
        if (reduce) { b.setAttribute('height', h); b.setAttribute('y', 110 - h); return; }
        const dur = 700, delay = i * 70, start = performance.now() + delay;
        function step(now) {
          if (now < start) return requestAnimationFrame(step);
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          const cur = h * eased;
          b.setAttribute('height', cur);
          b.setAttribute('y', 110 - cur);
          if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
      io.unobserve(svg);
    });
  }, { threshold: 0.4 });
  charts.forEach(c => io.observe(c));
})();
