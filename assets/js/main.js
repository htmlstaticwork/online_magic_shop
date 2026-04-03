(() => {
  const storageKeys = {
    theme: "aeTheme",
    dir: "aeDir",
  };

  const getStored = (key, fallback) => {
    try {
      const v = localStorage.getItem(key);
      return v ?? fallback;
    } catch {
      return fallback;
    }
  };

  const setStored = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      return;
    }
  };

  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    document.querySelectorAll("[data-ae-theme-toggle]").forEach((btn) => {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      const icon = btn.querySelector("i");
      if (icon) {
        icon.className = theme === "dark" ? "bi bi-moon-stars-fill" : "bi bi-sun-fill";
      }
    });
  };

  const setDir = (dir) => {
    document.documentElement.dir = dir;
    document.querySelectorAll("[data-ae-dir-toggle]").forEach((btn) => {
      const label = dir === "rtl" ? "RTL" : "LTR";
      btn.textContent = label;
      btn.setAttribute("aria-pressed", dir === "rtl" ? "true" : "false");
    });

    document.querySelectorAll("[data-ae-offcanvas]").forEach((el) => {
      // Bootstrap 5 offcanvas-start is RTL-aware (left in LTR, right in RTL).
      // We'll keep it as offcanvas-start to maintain logical alignment.
      el.classList.add("offcanvas-start");
      el.classList.remove("offcanvas-end");
    });
  };

  const injectChrome = () => {
    const body = document.body;
    if (body.hasAttribute("data-ae-no-chrome")) return;

    const headerHost = document.querySelector("[data-ae-header]");
    const footerHost = document.querySelector("[data-ae-footer]");
    const page = body.dataset.aePage ?? "";

    const navLinks = [
      { key: "home", href: "index.html", label: "Home" },
      { key: "home2", href: "home2.html", label: "Home 2" },
      { key: "shop", href: "services.html", label: "Shop" },
      { key: "catlog", href: "catlog.html", label: "Catalog" },
      { key: "about", href: "about.html", label: "About" },
      { key: "blog", href: "blog.html", label: "Blog" },
      { key: "contact", href: "contact.html", label: "Contact" },
    ];

    const linkHtml = (isMobile) =>
      navLinks
        .map((l) => {
          const current = l.key === page ? ' aria-current="page"' : "";
          return `<a class="ae-navlink" href="${l.href}"${current}>${l.label}</a>`;
        })
        .join(isMobile ? "" : "");

    const headerHtml = `
      <header class="ae-header" role="banner">
        <div class="ae-container ae-header-inner">
          <div class="ae-mobile w-100 align-items-center justify-content-between">
            <a class="ae-logo-wrap" href="index.html" aria-label="The Arcane Emporium home">
              <svg class="ae-logo ae-logo--small" aria-hidden="true" focusable="false">
                <use href="assets/images/logo.svg#ae-logo"></use>
              </svg>
            </a>

            <div class="d-flex align-items-center gap-2">
              <button class="ae-icon-btn" type="button" data-ae-theme-toggle aria-label="Toggle theme" aria-pressed="false">
                <i class="bi bi-sun-fill" aria-hidden="true"></i>
              </button>
              <button class="ae-icon-btn" type="button" data-ae-dir-toggle aria-label="Toggle direction" aria-pressed="false">LTR</button>
              <button class="ae-icon-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#aeNav" aria-controls="aeNav" aria-label="Open navigation">
                <i class="bi bi-list" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          <div class="ae-desktop w-100 align-items-center justify-content-between">
            <a class="ae-logo-wrap" href="index.html" aria-label="The Arcane Emporium home">
              <svg class="ae-logo" aria-hidden="true" focusable="false">
                <use href="assets/images/logo.svg#ae-logo"></use>
              </svg>
            </a>

            <nav aria-label="Primary">
              <div class="d-flex align-items-center justify-content-center flex-wrap gap-2">
                ${linkHtml(false)}
              </div>
            </nav>

            <div class="d-flex align-items-center gap-2">
              <a class="ae-btn ae-btn--header" href="login.html">Login</a>
              <a class="ae-btn ae-btn--header" href="register.html">Register</a>
              <button class="ae-icon-btn" type="button" data-ae-theme-toggle aria-label="Toggle theme" aria-pressed="false">
                <i class="bi bi-sun-fill" aria-hidden="true"></i>
              </button>
              <button class="ae-icon-btn" type="button" data-ae-dir-toggle aria-label="Toggle direction" aria-pressed="false">LTR</button>
            </div>
          </div>
        </div>

        <div class="offcanvas ae-offcanvas offcanvas-start" tabindex="-1" id="aeNav" data-ae-offcanvas>
          <div class="offcanvas-header justify-content-end">
            <button class="ae-icon-btn" type="button" data-bs-dismiss="offcanvas" aria-label="Close navigation">
              <i class="bi bi-x-lg" aria-hidden="true"></i>
            </button>
          </div>
          <div class="offcanvas-body">
            <nav aria-label="Mobile primary">
              <div class="d-grid gap-2">
                ${navLinks
                  .map((l) => {
                    const current = l.key === page ? ' aria-current="page"' : "";
                    return `<a class="ae-navlink" href="${l.href}"${current}>${l.label}</a>`;
                  })
                  .join("")}
                <hr class="m-0" style="border-top:2px solid var(--ae-border);opacity:1" />
                <a class="ae-btn ae-btn--header mt-2" href="login.html">Login</a>
                <a class="ae-btn ae-btn--header mt-2" href="register.html">Register</a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    `;

    const footerHtml = `
      <footer class="ae-footer" role="contentinfo">
        <div class="ae-container">
          <div class="ae-footer-grid">
            <div>
              <a class="ae-logo-wrap" href="index.html" aria-label="The Arcane Emporium home">
                <svg class="ae-logo ae-logo--small" aria-hidden="true" focusable="false">
                  <use href="assets/images/logo.svg#ae-logo"></use>
                </svg>
              </a>
              <p class="mt-3 mb-3" style="max-width:46ch">
                A hidden shop for honest magicians: props, books, and routines described by effect, audience size, and difficulty.
              </p>
              <div class="ae-social" aria-label="Social links">
                <a class="ae-icon-btn" href="coming-soon.html" aria-label="Instagram"><i class="bi bi-instagram" aria-hidden="true"></i></a>
                <a class="ae-icon-btn" href="coming-soon.html" aria-label="YouTube"><i class="bi bi-youtube" aria-hidden="true"></i></a>
                <a class="ae-icon-btn" href="coming-soon.html" aria-label="TikTok"><i class="bi bi-tiktok" aria-hidden="true"></i></a>
              </div>
            </div>
            <div>
              <h3 class="m-0">Shop Categories</h3>
              <div class="mt-3 d-grid gap-2">
                <a href="services.html">Card Magic</a>
                <a href="services.html">Coin &amp; Token</a>
                <a href="services.html">Mentalism</a>
                <a href="services.html">Books &amp; DVDs</a>
              </div>
            </div>
            <div>
              <h3 class="m-0">Support</h3>
              <div class="mt-3 d-grid gap-2">
                <a href="contact.html">Contact</a>
                <a href="blog.html">Performance Notes</a>
                <a href="pricing.html">Inner Circle</a>
                <a href="404.html">Returns Policy</a>
              </div>
            </div>
            <div>
              <h3 class="m-0">Newsletter</h3>
              <p class="mt-3 mb-2">Get one practical routine note each week.</p>
              <form class="d-grid gap-2" data-ae-validate novalidate>
                <label class="fw-bold" for="aeFooterNewsletter">Email</label>
                <input class="ae-form-control" id="aeFooterNewsletter" name="email" type="email" placeholder="you@domain.com" required />
                <div class="invalid-feedback">Enter a valid email address.</div>
                <button class="ae-btn" type="submit">Subscribe</button>
              </form>
            </div>
          </div>

          <div class="mt-4 d-flex align-items-center justify-content-between gap-3 flex-wrap">
            <p class="m-0">© 2026 The Arcane Emporium</p>
            <a class="ae-navlink" href="index.html">Back through the door</a>
          </div>
        </div>
      </footer>

      <a class="ae-backtop" href="#" data-ae-backtop aria-label="Back to top">
        <i class="bi bi-arrow-up" aria-hidden="true"></i>
      </a>
    `;

    if (headerHost) headerHost.innerHTML = headerHtml;
    if (footerHost) footerHost.innerHTML = footerHtml;
  };

  const initThemeAndDir = () => {
    const theme = getStored(storageKeys.theme, "light");
    const dir = getStored(storageKeys.dir, "ltr");
    setTheme(theme === "dark" ? "dark" : "light");
    setDir(dir === "rtl" ? "rtl" : "ltr");

    document.querySelectorAll("[data-ae-theme-toggle]").forEach((themeBtn) => {
      themeBtn.addEventListener("click", () => {
        const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        setStored(storageKeys.theme, next);
        setTheme(next);
      });
    });

    document.querySelectorAll("[data-ae-dir-toggle]").forEach((dirBtn) => {
      dirBtn.addEventListener("click", () => {
        const next = document.documentElement.dir === "rtl" ? "ltr" : "rtl";
        setStored(storageKeys.dir, next);
        setDir(next);
      });
    });
  };

  const initBackToTop = () => {
    const btn = document.querySelector("[data-ae-backtop]");
    if (!btn) return;

    const toggle = () => {
      const show = window.scrollY > 400;
      btn.classList.toggle("is-visible", show);
    };

    toggle();
    window.addEventListener("scroll", toggle, { passive: true });
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const initDoor = () => {
    const door = document.querySelector("[data-ae-door]");
    if (!door) return;
    window.setTimeout(() => {
      door.classList.add("ae-door-open");
    }, 1800);
  };

  const initSkillPathways = () => {
    const buttons = Array.from(document.querySelectorAll("[data-ae-skill]"));
    const region = document.querySelector("[data-ae-skill-region]");
    if (!buttons.length || !region) return;

    const allCards = Array.from(region.querySelectorAll("[data-ae-skill-card]"));
    const setActive = (skill) => {
      buttons.forEach((b) => {
        b.setAttribute("aria-pressed", b.getAttribute("data-ae-skill") === skill ? "true" : "false");
      });
      let shown = 0;
      allCards.forEach((c) => {
        const isMatch = c.getAttribute("data-ae-skill-card") === skill;
        const shouldShow = isMatch && shown < 2;
        c.hidden = !shouldShow;
        if (shouldShow) shown += 1;
      });
    };

    buttons.forEach((b) => {
      b.addEventListener("click", () => {
        const skill = b.getAttribute("data-ae-skill");
        if (!skill) return;
        setActive(skill);
        region.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    setActive(buttons[0].getAttribute("data-ae-skill") ?? "beginner");
  };

  const initQuickView = () => {
    const modalEl = document.getElementById("aeQuickView");
    if (!modalEl || typeof bootstrap === "undefined") return;

    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    document.querySelectorAll("[data-ae-quickview]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const name = btn.getAttribute("data-name") ?? "Mystery Item";
        const effect = btn.getAttribute("data-effect") ?? "A secret effect awaits.";
        const difficulty = btn.getAttribute("data-difficulty") ?? "Apprentice";
        const price = btn.getAttribute("data-price") ?? "$0.00";

        modalEl.querySelector("[data-ae-qv-name]").textContent = name;
        modalEl.querySelector("[data-ae-qv-effect]").textContent = effect;
        modalEl.querySelector("[data-ae-qv-difficulty]").textContent = difficulty;
        modalEl.querySelector("[data-ae-qv-price]").textContent = price;
        modal.show();
      });
    });
  };

  const initValidation = () => {
    document.querySelectorAll("form[data-ae-validate]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      });
    });
  };

  const initPasswordConfirm = () => {
    const pw = document.querySelector("[data-ae-password]");
    const confirm = document.querySelector("[data-ae-password-confirm]");
    if (!pw || !confirm) return;

    const validate = () => {
      const ok = confirm.value.length === 0 || confirm.value === pw.value;
      confirm.setCustomValidity(ok ? "" : "Passwords must match");
    };

    pw.addEventListener("input", validate);
    confirm.addEventListener("input", validate);
    validate();
  };

  const initBlogFilter = () => {
    const list = document.querySelector("[data-ae-blog-list]");
    if (!list) return;

    const posts = Array.from(list.querySelectorAll("[data-ae-post]"));
    const search = document.querySelector("[data-ae-blog-search]");
    const filter = document.querySelector("[data-ae-blog-filter]");
    const count = document.querySelector("[data-ae-blog-count]");

    const apply = () => {
      const q = (search?.value ?? "").trim().toLowerCase();
      const cat = filter?.value ?? "all";

      let visible = 0;
      posts.forEach((p) => {
        const title = (p.getAttribute("data-title") ?? p.textContent ?? "").toLowerCase();
        const pCat = p.getAttribute("data-category") ?? "";
        const matchesCat = cat === "all" || pCat === cat;
        const matchesQ = q.length === 0 || title.includes(q);
        const show = matchesCat && matchesQ;
        p.hidden = !show;
        if (show) visible += 1;
      });

      if (count) count.textContent = `${visible} post${visible === 1 ? "" : "s"} shown`;
    };

    search?.addEventListener("input", apply);
    filter?.addEventListener("change", apply);
    apply();
  };

  const initShopFilter = () => {
    const grid = document.getElementById("shopGrid");
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll(".ae-card"));
    const search = document.getElementById("shopSearch");
    const filter = document.getElementById("shopFilter");

    const apply = () => {
      const q = (search?.value ?? "").trim().toLowerCase();
      const cat = filter?.value ?? "all";

      cards.forEach((card) => {
        const title = (card.querySelector("h3")?.textContent ?? "").toLowerCase();
        const pCat = card.getAttribute("data-category") ?? "";
        const matchesCat = cat === "all" || pCat === cat;
        const matchesQ = q.length === 0 || title.includes(q);
        const show = matchesCat && matchesQ;
        card.style.display = show ? "flex" : "none";
      });
    };

    search?.addEventListener("input", apply);
    filter?.addEventListener("change", apply);
    apply();
  };

  const initCountdown = () => {
    const el = document.querySelector("[data-ae-countdown]");
    if (!el) return;
    const target = el.getAttribute("data-ae-target");
    if (!target) return;

    const targetDate = new Date(target);
    if (Number.isNaN(targetDate.getTime())) return;

    const parts = {
      d: el.querySelector("[data-ae-cd-days]"),
      h: el.querySelector("[data-ae-cd-hours]"),
      m: el.querySelector("[data-ae-cd-mins]"),
      s: el.querySelector("[data-ae-cd-secs]"),
    };

    const pad = (n) => String(n).padStart(2, "0");
    const tick = () => {
      const diff = targetDate.getTime() - Date.now();
      const clamped = Math.max(0, diff);
      const total = Math.floor(clamped / 1000);
      const days = Math.floor(total / 86400);
      const hours = Math.floor((total % 86400) / 3600);
      const mins = Math.floor((total % 3600) / 60);
      const secs = total % 60;

      if (parts.d) parts.d.textContent = String(days);
      if (parts.h) parts.h.textContent = pad(hours);
      if (parts.m) parts.m.textContent = pad(mins);
      if (parts.s) parts.s.textContent = pad(secs);
    };

    tick();
    window.setInterval(tick, 1000);
  };

  const initPasswordToggle = () => {
    document.querySelectorAll("[data-ae-password-toggle]").forEach((btn) => {
      const targetId = btn.getAttribute("aria-controls");
      const input = document.getElementById(targetId);
      if (!input) return;

      btn.addEventListener("click", () => {
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        btn.setAttribute("aria-pressed", isPassword ? "true" : "false");
        const icon = btn.querySelector("i");
        if (icon) {
          icon.className = isPassword ? "bi bi-eye-slash" : "bi bi-eye";
        }
        const label = isPassword ? "Hide password" : "Show password";
        btn.setAttribute("aria-label", label);
      });
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    injectChrome();
    initThemeAndDir();
    initBackToTop();
    initDoor();
    initSkillPathways();
    initQuickView();
    initValidation();
    initPasswordConfirm();
    initBlogFilter();
    initShopFilter();
    initCountdown();
    initPasswordToggle();
  });
})();
