/* =========================================================================
   script.js — seluruh interaksi website
   Tidak memakai library apa pun. Aman dibuka lewat file:// maupun GitHub Pages.
   ========================================================================= */

(function () {
  "use strict";

  /* ----------------------------- HELPERS ------------------------------ */
  const CONFIG = window.CONFIG || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const escapeHtml = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c]));

  const fmt = (str, name) =>
    String(str == null ? "" : str)
      .replace(/\{name\}/g, name || "")
      .replace(/\{fullName\}/g, CONFIG.fullName || name || "");

  const setText = (sel, value) => {
    const el = $(sel);
    if (el && value != null) el.textContent = value;
  };

  const random = (min, max) => Math.random() * (max - min) + min;

  /* ------------------------------ TOAST ------------------------------- */
  let toastTimer = null;
  function toast(message, duration = 3400) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = message;
    el.classList.add("is-shown");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-shown"), duration);
  }

  /* --------------------------- CONTENT HYDRATION ---------------------- */
  const NAME = CONFIG.name || "Angela";

  function hydrateContent() {
    document.title = `Happy Birthday, ${NAME}! 🎂`;

    // Opening
    setText("#openingEyebrow", CONFIG.opening && CONFIG.opening.eyebrow);
    setText("#openingTitle", CONFIG.opening && CONFIG.opening.title);
    setText("#openingSub", CONFIG.opening && CONFIG.opening.subtitle);
    const openBtn = $("#openSurprise");
    if (openBtn && CONFIG.opening && CONFIG.opening.button) {
      openBtn.lastElementChild.textContent = CONFIG.opening.button;
    }

    // Hero
    setText("#heroEyebrow", CONFIG.hero && CONFIG.hero.eyebrow);
    const heroTitle = $("#heroTitle");
    if (heroTitle && CONFIG.hero && CONFIG.hero.title) {
      heroTitle.innerHTML = escapeHtml(CONFIG.hero.title).replace(
        /\{name\}/g,
        `<span class="hero__name">${escapeHtml(NAME)}</span>`
      );
    }
    setText("#heroSub", CONFIG.hero && CONFIG.hero.subtitle);
    const wishBtn = $("#wishBtn");
    if (wishBtn && CONFIG.hero && CONFIG.hero.wishButton) {
      wishBtn.lastElementChild.textContent = CONFIG.hero.wishButton;
    }
    const letterLink = $(".hero__actions .btn--ghost");
    if (letterLink && CONFIG.hero && CONFIG.hero.letterButton) {
      letterLink.textContent = CONFIG.hero.letterButton;
    }
    const wishMsg = $("#wishMessage");
    if (wishMsg && CONFIG.hero) wishMsg.textContent = CONFIG.hero.wishMessage || "";

    // Letter
    setText("#letterEyebrow", CONFIG.letter && CONFIG.letter.eyebrow);
    setText("#letterTitle", CONFIG.letter && CONFIG.letter.title);
    setText("#letterSub", CONFIG.letter && CONFIG.letter.subtitle);
    setText("#envelopeHint", CONFIG.letter && CONFIG.letter.hint);
    setText("#letterGreeting", fmt(CONFIG.letter && CONFIG.letter.greeting, NAME));
    setText("#letterSign", CONFIG.letter && CONFIG.letter.signature);

    // Gallery headings
    setText("#galleryEyebrow", CONFIG.gallery && CONFIG.gallery.eyebrow);
    setText("#galleryTitle", CONFIG.gallery && CONFIG.gallery.title);
    setText("#gallerySub", CONFIG.gallery && CONFIG.gallery.subtitle);

    // Timeline headings
    setText("#timelineEyebrow", CONFIG.timeline && CONFIG.timeline.eyebrow);
    setText("#timelineTitle", CONFIG.timeline && CONFIG.timeline.title);
    setText("#timelineSub", CONFIG.timeline && CONFIG.timeline.subtitle);

    // Finale
    setText("#finaleEyebrow", CONFIG.finale && CONFIG.finale.eyebrow);
    setText("#finaleTitle", CONFIG.finale && CONFIG.finale.title);
    setText("#finaleText", CONFIG.finale && CONFIG.finale.text);
    setText("#finaleSign", fmt(CONFIG.finale && CONFIG.finale.sign, NAME));
    const surpriseBtn = $("#surpriseBtn");
    if (surpriseBtn && CONFIG.finale && CONFIG.finale.button) {
      surpriseBtn.lastElementChild.textContent = CONFIG.finale.button;
    }

    // Secret modal
    setText("#secretEyebrow", CONFIG.secret && CONFIG.secret.eyebrow);
    setText("#secretTitle", CONFIG.secret && CONFIG.secret.title);
    setText("#secretSign", CONFIG.secret && CONFIG.secret.sign);
    const secretBody = $("#secretBody");
    if (secretBody && CONFIG.secret && Array.isArray(CONFIG.secret.body)) {
      secretBody.innerHTML = "";
      CONFIG.secret.body.forEach((text) => {
        const p = document.createElement("p");
        p.textContent = fmt(text, NAME);
        secretBody.appendChild(p);
      });
    }
    const secretClose = $("#secretModal .btn");
    if (secretClose && CONFIG.secret && CONFIG.secret.closeButton) {
      secretClose.textContent = CONFIG.secret.closeButton;
    }

    // Footer
    setText("#footerName", CONFIG.fullName || NAME);
    const footerText = $(".site-footer__text");
    if (footerText && CONFIG.footer && CONFIG.footer.text) {
      // biarkan ikon hati tetap berupa markup
      footerText.innerHTML = fmt(CONFIG.footer.text, NAME)
        .replace(/♥/g, '<span class="site-footer__heart" aria-hidden="true">♥</span>')
        .replace(
          escapeHtml(CONFIG.fullName || NAME),
          `<span id="footerName">${escapeHtml(CONFIG.fullName || NAME)}</span>`
        );
    }
    const replayBtn = $("#replayBtn");
    if (replayBtn && CONFIG.footer && CONFIG.footer.replay) {
      replayBtn.textContent = CONFIG.footer.replay;
    }
    setText("#yearNow", new Date().getFullYear());

    // Music label
    setText("#musicTitle", CONFIG.music && CONFIG.music.title);
  }

  /* ----------------------------- DECOR -------------------------------- */
  function buildDecor() {
    const decor = $("#decor");
    if (!decor || prefersReduced) return;

    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const total = isMobile ? 9 : 16;
    const glyphs = ["♥", "♥", "✦", "✿", "♥", "✧"];

    for (let i = 0; i < total; i++) {
      const el = document.createElement("span");
      const isStar = i % 3 === 0;
      el.className = "floaty" + (isStar ? " floaty--star" : "");
      el.textContent = glyphs[i % glyphs.length];
      el.style.left = `${random(2, 96)}%`;
      el.style.setProperty("--size", `${random(0.7, 1.5).toFixed(2)}rem`);
      el.style.setProperty("--dur", `${random(16, 30).toFixed(1)}s`);
      el.style.setProperty("--delay", `${(-random(0, 24)).toFixed(1)}s`);
      el.style.setProperty("--drift", `${random(-90, 90).toFixed(0)}px`);
      el.style.setProperty("--op", random(0.25, 0.6).toFixed(2));
      decor.appendChild(el);
    }
  }

  function buildBalloons() {
    const host = $("#balloons");
    if (!host || prefersReduced) return;

    const isMobile = window.matchMedia("(max-width: 780px)").matches;
    const colors = [
      ["#ffc2d7", "#f4779e"],
      ["#e0d3ff", "#a58bf0"],
      ["#ffe6c7", "#e9b46c"],
      ["#ffd3e2", "#e35b86"],
      ["#dbe4ff", "#8f9ff0"],
      ["#ffe3ef", "#f7a8c6"],
    ];
    const total = isMobile ? 4 : 6;

    for (let i = 0; i < total; i++) {
      const b = document.createElement("span");
      const [c1, c2] = colors[i % colors.length];
      b.className = "balloon";
      b.style.setProperty("--w", `${random(42, 78).toFixed(0)}px`);
      b.style.setProperty("--c", c1);
      b.style.setProperty("--c2", c2);
      b.style.setProperty("--dur", `${random(6, 11).toFixed(1)}s`);
      b.style.setProperty("--delay", `${(-random(0, 6)).toFixed(1)}s`);
      b.style.setProperty("--string", `${random(40, 90).toFixed(0)}px`);
      b.style.left = i % 2 === 0 ? `${random(2, 16).toFixed(1)}%` : `${random(82, 96).toFixed(1)}%`;
      b.style.top = `${random(6, 62).toFixed(1)}%`;
      b.style.opacity = random(0.4, 0.7).toFixed(2);
      host.appendChild(b);
    }
  }

  /* ----------------------------- CONFETTI ----------------------------- */
  const Confetti = (function () {
    const canvas = $("#confetti");
    const ctx = canvas ? canvas.getContext("2d") : null;
    if (!canvas || !ctx || prefersReduced) {
      return { burst() {}, rain() {} };
    }

    const COLORS = ["#ffb3cd", "#f4779e", "#cdbcff", "#a58bf0", "#f0d9ab", "#ffffff", "#ffd3e2"];
    let dpr = 1;
    let width = 0;
    let height = 0;
    let particles = [];
    let running = false;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function make(x, y, fromTop) {
      const angle = random(-Math.PI, 0);
      const speed = fromTop ? random(2.5, 6.5) : random(5, 13);
      return {
        x,
        y,
        vx: fromTop ? random(-1.6, 1.6) : Math.cos(angle) * speed,
        vy: fromTop ? random(1.8, 4.2) : Math.sin(angle) * speed,
        size: random(5, 11),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rot: random(0, Math.PI * 2),
        vr: random(-0.16, 0.16),
        wobble: random(0, Math.PI * 2),
        life: 1,
        decay: random(0.0045, 0.011),
        shape: Math.random() > 0.72 ? "circle" : "rect",
      };
    }

    function burst(x, y, count = 90) {
      for (let i = 0; i < count; i++) particles.push(make(x, y, false));
      start();
    }

    function rain(count = 110) {
      for (let i = 0; i < count; i++) {
        const p = make(random(0, width), random(-height * 0.25, 0), true);
        particles.push(p);
      }
      start();
    }

    function start() {
      if (running) return;
      running = true;
      requestAnimationFrame(loop);
    }

    function loop() {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.vy += 0.14;
        p.vx *= 0.992;
        p.wobble += 0.09;
        p.x += p.vx + Math.sin(p.wobble) * 0.6;
        p.y += p.vy;
        p.rot += p.vr;
        p.life -= p.decay;

        if (p.life <= 0 || p.y > height + 60) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.min(1, p.life * 1.6);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.42, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.62);
        }
        ctx.restore();
      }

      if (particles.length) {
        requestAnimationFrame(loop);
      } else {
        running = false;
        ctx.clearRect(0, 0, width, height);
      }
    }

    resize();
    window.addEventListener("resize", resize, { passive: true });

    return { burst, rain };
  })();

  /* ------------------------------ LETTER ------------------------------ */
  const Typing = (function () {
    const state = { nodes: [], pi: 0, ci: 0, timer: null, started: false, done: false };

    function build() {
      const body = $("#letterBody");
      if (!body) return;
      body.innerHTML = "";
      state.nodes = (CONFIG.letter && CONFIG.letter.paragraphs ? CONFIG.letter.paragraphs : []).map(
        (text) => {
          const p = document.createElement("p");
          const span = document.createElement("span");
          p.appendChild(span);
          body.appendChild(p);
          return { span, text, index: 0 };
        }
      );
    }

    function fillAll() {
      state.nodes.forEach((node) => {
        node.span.textContent = fmt(node.text, NAME);
        node.index = node.text.length;
      });
    }

    function finish() {
      clearTimeout(state.timer);
      fillAll();
      state.done = true;
      state.pi = state.nodes.length;
      const skip = $("#skipTyping");
      if (skip) skip.hidden = true;
    }

    function step() {
      const node = state.nodes[state.pi];
      if (!node) {
        finish();
        return;
      }

      const text = fmt(node.text, NAME);
      state.ci += 1;
      node.span.textContent = text.slice(0, state.ci);

      if (state.ci >= text.length) {
        state.pi += 1;
        state.ci = 0;
        state.timer = setTimeout(step, 420);
        return;
      }

      const ch = text.charAt(state.ci - 1);
      let delay = 17;
      if (/[.!?]/.test(ch)) delay = 230;
      else if (/[,;:]/.test(ch)) delay = 120;
      state.timer = setTimeout(step, delay);
    }

    function start() {
      if (state.started) return;
      state.started = true;

      if (prefersReduced) {
        finish();
        return;
      }

      const skip = $("#skipTyping");
      if (skip) skip.hidden = false;
      state.timer = setTimeout(step, 320);
    }

    return { build, start, finish, stop: () => clearTimeout(state.timer) };
  })();

  function initLetter() {
    Typing.build();

    const wrap = $("#letterWrap");
    const envelope = $("#envelope");
    const paper = $("#letterPaper");
    if (!wrap || !envelope || !paper) return;

    let opened = false;

    envelope.addEventListener("click", () => {
      if (opened) return;
      opened = true;

      wrap.classList.add("is-open");
      envelope.setAttribute("aria-expanded", "true");
      paper.hidden = false;
      requestAnimationFrame(() => paper.classList.add("is-open"));

      setTimeout(() => Typing.start(), 420);

      if (!prefersReduced) {
        setTimeout(() => {
          paper.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 650);
      }
    });

    const skip = $("#skipTyping");
    if (skip) skip.addEventListener("click", () => Typing.finish());
  }

  /* ------------------------------ GALLERY ----------------------------- */
  function initGallery() {
    const grid = $("#galleryGrid");
    const photos = (CONFIG.gallery && CONFIG.gallery.photos) || [];
    if (!grid) return;

    const rotations = [-2.4, 1.8, -1.5, 2.2, -2, 1.3, -1.1, 2.6];
    const fallback = "assets/images/placeholder.svg";

    grid.innerHTML = "";

    photos.forEach((photo, index) => {
      const figure = document.createElement("figure");
      figure.className = "polaroid";
      figure.style.setProperty("--rot", `${rotations[index % rotations.length]}deg`);
      figure.setAttribute("data-reveal", "");
      figure.style.setProperty("--delay", `${index * 80}ms`);

      const button = document.createElement("button");
      button.className = "polaroid__btn";
      button.type = "button";
      button.setAttribute("aria-label", `Perbesar foto: ${photo.caption || "kenangan"}`);

      const img = document.createElement("img");
      img.src = photo.src || fallback;
      img.alt = photo.caption || "Kenangan";
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("error", function onError() {
        if (img.dataset.fallback === "1") return;
        img.dataset.fallback = "1";
        img.src = fallback;
      });

      const caption = document.createElement("figcaption");
      caption.textContent = photo.caption || "";

      button.appendChild(img);
      figure.appendChild(button);
      figure.appendChild(caption);
      grid.appendChild(figure);

      button.addEventListener("click", () => Lightbox.open(index));
    });
  }

  /* ----------------------------- LIGHTBOX ----------------------------- */
  const Lightbox = (function () {
    const box = $("#lightbox");
    const imgEl = $("#lightboxImg");
    const capEl = $("#lightboxCaption");
    const photos = (CONFIG.gallery && CONFIG.gallery.photos) || [];
    let current = 0;
    let lastFocus = null;

    function render() {
      const photo = photos[current];
      if (!photo) return;
      imgEl.src = photo.src || "assets/images/placeholder.svg";
      imgEl.alt = photo.caption || "Kenangan";
      capEl.textContent = photo.caption || "";
    }

    function open(index) {
      if (!box || !photos.length) return;
      lastFocus = document.activeElement;
      current = ((index % photos.length) + photos.length) % photos.length;
      render();
      box.hidden = false;
      document.body.classList.add("is-locked");
      const closeBtn = $(".lightbox__close", box);
      if (closeBtn) closeBtn.focus();
    }

    function close() {
      if (!box) return;
      box.hidden = true;
      document.body.classList.remove("is-locked");
      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    }

    function next(dir) {
      if (!photos.length) return;
      current = (current + dir + photos.length) % photos.length;
      render();
    }

    if (box) {
      $$("[data-close-lightbox]", box).forEach((el) => el.addEventListener("click", close));
      const prev = $("#lightboxPrev");
      const nextBtn = $("#lightboxNext");
      if (prev) prev.addEventListener("click", () => next(-1));
      if (nextBtn) nextBtn.addEventListener("click", () => next(1));

      // Swipe di mobile
      let startX = null;
      box.addEventListener("touchstart", (e) => {
        startX = e.changedTouches[0].clientX;
      }, { passive: true });
      box.addEventListener("touchend", (e) => {
        if (startX === null) return;
        const delta = e.changedTouches[0].clientX - startX;
        if (Math.abs(delta) > 45) next(delta < 0 ? 1 : -1);
        startX = null;
      }, { passive: true });
    }

    document.addEventListener("keydown", (e) => {
      if (!box || box.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") next(-1);
      if (e.key === "ArrowRight") next(1);
    });

    return { open, close, next };
  })();

  /* ----------------------------- TIMELINE ----------------------------- */
  function initTimeline() {
    const list = $("#timelineList");
    const items = (CONFIG.timeline && CONFIG.timeline.items) || [];
    if (!list) return;

    list.innerHTML = "";

    items.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "timeline__item";
      li.setAttribute("data-reveal", "");
      li.style.setProperty("--delay", `${index * 90}ms`);

      const dot = document.createElement("span");
      dot.className = "timeline__dot";
      dot.setAttribute("aria-hidden", "true");

      const card = document.createElement("div");
      card.className = "timeline__card";

      if (item.date) {
        const date = document.createElement("span");
        date.className = "timeline__date";
        date.textContent = item.date;
        card.appendChild(date);
      }

      const title = document.createElement("h3");
      title.className = "timeline__title";
      title.textContent = item.title || "";
      card.appendChild(title);

      const text = document.createElement("p");
      text.className = "timeline__text";
      text.textContent = item.text || "";
      card.appendChild(text);

      li.appendChild(dot);
      li.appendChild(card);
      list.appendChild(li);
    });
  }

  /* ---------------------------- SCROLL REVEAL ------------------------- */
  function initReveal() {
    const targets = $$("[data-reveal]").filter((el) => !el.closest(".hero"));
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
  }

  function revealHero() {
    const items = $$("#hero [data-reveal]");
    items.forEach((el, index) => {
      const delay = prefersReduced ? 0 : index * 120 + 80;
      setTimeout(() => el.classList.add("is-revealed"), delay);
    });
  }

  /* ------------------------------ OPENING ----------------------------- */
  function initOpening() {
    const opening = $("#opening");
    const button = $("#openSurprise");
    if (!opening || !button) return;

    let opened = false;

    // Parameter ?open dipakai untuk pratinjau cepat (langsung masuk ke halaman utama)
    if (new URLSearchParams(window.location.search).has("open")) {
      setTimeout(() => button.click(), 600);
    }

    button.addEventListener("click", () => {
      if (opened) return;
      opened = true;

      opening.classList.add("is-closing");
      document.body.classList.remove("is-locked");

      setTimeout(() => {
        opening.hidden = true;
        revealHero();

        const rect = $("#hero") ? $("#hero").getBoundingClientRect() : null;
        const originX = rect ? rect.width * 0.72 : window.innerWidth * 0.7;
        Confetti.burst(originX, window.innerHeight * 0.35, 110);

        tryStartMusic();
      }, 880);

      setTimeout(() => {
        if (!opening.hidden) opening.hidden = true;
      }, 1600);
    });
  }

  /* ------------------------------- WISH ------------------------------- */
  function initWish() {
    const btn = $("#wishBtn");
    const cake = $("#cake");
    const message = $("#wishMessage");
    if (!btn || !cake) return;

    let clicks = 0;

    btn.addEventListener("click", () => {
      clicks += 1;
      cake.classList.add("is-blown");

      $$(".candle", cake).forEach((candle, index) => {
        setTimeout(() => {
          candle.classList.add("is-smoking");
          setTimeout(() => candle.classList.remove("is-smoking"), 2400);
        }, index * 80);
      });

      const rect = cake.getBoundingClientRect();
      Confetti.burst(rect.left + rect.width / 2, rect.top + rect.height * 0.35, 90);

      if (message) {
        let text = CONFIG.hero && CONFIG.hero.wishMessage;
        if (clicks === 2) text = "Sekali lagi: semoga semua doanya terkabul 🌷";
        if (clicks > 2) text = "Doanya banyak-banyak saja, itu justru bagus 🤍";
        message.textContent = text;
        message.classList.add("is-shown");
      }
    });
  }

  /* ------------------------------- MUSIC ------------------------------ */
  const Music = (function () {
    const audio = new Audio();
    const player = $("#musicPlayer");
    const btn = $("#musicBtn");
    let failed = false;
    let triedOnce = false;

    const src = (CONFIG.music && CONFIG.music.src) || "";
    audio.preload = "none";
    audio.loop = true;
    audio.volume = (CONFIG.music && CONFIG.music.volume) || 0.6;
    if (src) audio.src = src;

    function ui() {
      if (!player || !btn) return;
      const playing = !audio.paused && !audio.ended;
      player.classList.toggle("is-playing", playing);
      btn.setAttribute("aria-pressed", String(playing));
      btn.setAttribute("aria-label", playing ? "Jeda musik" : "Putar musik");
    }

    function fail() {
      if (failed) return;
      failed = true;
      ui();
      if (btn) {
        btn.disabled = true;
        btn.setAttribute("aria-label", "Musik belum tersedia");
        btn.title = "File musik belum ditambahkan";
      }
      if (player) player.classList.remove("is-playing");
      toast("File musik belum ditambahkan. Simpan lagu di assets/music/lagu.mp3 🎵", 5200);
    }

    function play() {
      if (failed) return Promise.resolve(false);
      if (!src) {
        fail();
        return Promise.resolve(false);
      }
      return audio
        .play()
        .then(() => {
          ui();
          return true;
        })
        .catch(() => {
          if (audio.error) fail();
          else ui();
          return false;
        });
    }

    audio.addEventListener("play", ui);
    audio.addEventListener("pause", ui);
    audio.addEventListener("error", () => {
      if (!audio.paused) return;
      fail();
    });

    if (btn) {
      btn.addEventListener("click", () => {
        if (failed) {
          toast("Musik masih kosong. Tambahkan file di assets/music/lagu.mp3 🎶");
          return;
        }
        if (audio.paused) play();
        else audio.pause();
      });
    }

    function tryStart() {
      if (triedOnce) return;
      triedOnce = true;
      play();
    }

    return { play, tryStart, isFailed: () => failed };
  })();

  function tryStartMusic() {
    Music.tryStart();
  }

  /* ------------------------------- MODAL ------------------------------ */
  function initModal() {
    const modal = $("#secretModal");
    const opener = $("#surpriseBtn");
    if (!modal || !opener) return;

    let lastFocus = null;

    function focusables() {
      return $$("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])", modal).filter(
        (el) => !el.disabled && el.offsetParent !== null
      );
    }

    function onKeydown(e) {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    function open() {
      lastFocus = document.activeElement;
      modal.hidden = false;
      document.body.classList.add("is-locked");
      const items = focusables();
      if (items.length) items[0].focus();
      document.addEventListener("keydown", onKeydown);
      Confetti.rain(60);
    }

    function close() {
      modal.hidden = true;
      document.body.classList.remove("is-locked");
      document.removeEventListener("keydown", onKeydown);
      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    }

    opener.addEventListener("click", open);
    $$("[data-close-modal]", modal).forEach((el) => el.addEventListener("click", close));
  }

  /* ------------------------------ CURSOR ------------------------------ */
  function initCursor() {
    if (!finePointer || prefersReduced) return;

    const ring = $("#cursor");
    const dot = $("#cursorDot");
    if (!ring || !dot) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let active = false;

    window.addEventListener(
      "mousemove",
      (e) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
        if (!active) {
          active = true;
          ring.classList.add("is-active");
          dot.classList.add("is-active");
        }
      },
      { passive: true }
    );

    (function render() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      requestAnimationFrame(render);
    })();

    document.addEventListener("mouseover", (e) => {
      const interactive = e.target.closest("a, button, .polaroid, input, textarea, [role='button']");
      ring.classList.toggle("is-hover", Boolean(interactive));
    });

    document.addEventListener("mouseleave", () => {
      ring.classList.remove("is-active");
      dot.classList.remove("is-active");
    });
  }

  /* ----------------------------- PARALLAX ----------------------------- */
  function initParallax() {
    if (prefersReduced) return;
    const blobs = $$(".decor__blob");
    const balloons = $$(".balloon");
    if (!blobs.length) return;

    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          blobs.forEach((blob, index) => {
            blob.style.transform = `translate3d(0, ${y * (0.035 + index * 0.02)}px, 0)`;
          });
          if (balloons.length) {
            balloons.forEach((b) => {
              b.style.marginTop = `${Math.round(y * 0.045)}px`;
            });
          }
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  /* ------------------------------ LOADER ------------------------------ */
  function initLoader() {
    const loader = $("#loader");
    if (!loader) return;

    let done = false;
    const hide = () => {
      if (done) return;
      done = true;
      loader.classList.add("is-done");
      setTimeout(() => {
        loader.style.display = "none";
      }, 800);
    };

    window.addEventListener("load", () => setTimeout(hide, 450));
    setTimeout(hide, 2800);
  }

  /* ------------------------------- REPLAY ----------------------------- */
  function initReplay() {
    const btn = $("#replayBtn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
      setTimeout(() => window.location.reload(), prefersReduced ? 60 : 420);
    });
  }

  /* -------------------------------- INIT ------------------------------ */
  function init() {
    hydrateContent();
    buildDecor();
    buildBalloons();

    initLoader();
    initOpening();
    initWish();
    initLetter();
    initGallery();
    initTimeline();
    initModal();
    initReplay();
    initCursor();
    initParallax();

    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
