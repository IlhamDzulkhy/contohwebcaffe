(function () {
  "use strict";
  const C = CAFE;
  const $ = (id) => document.getElementById(id);

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");
  const waLink = (text) =>
    "https://wa.me/" + C.whatsapp + (text ? "?text=" + encodeURIComponent(text) : "");

  /* ---------- Isi teks dasar ---------- */
  document.title = C.name + " | " + C.tagline;
  $("brand").textContent = C.name;
  $("heroTitle").textContent = C.tagline;
  $("heroSub").textContent = C.description;
  $("aboutText").textContent = C.description;
  $("addr").textContent = C.address;
  $("mapName").textContent = C.name;
  $("footName").textContent = C.name;
  $("footName2").textContent = C.name;
  $("footTag").textContent = C.tagline;
  $("year").textContent = new Date().getFullYear();

  const hello = waLink("Halo " + C.name + ", saya mau tanya/pesan.");
  ["navWa", "heroWa", "waFloat"].forEach((id) => ($(id).href = hello));
  $("mapBtn").href = C.mapUrl;
  $("igBtn").href = "https://instagram.com/" + C.instagram;

  /* ---------- Keunggulan ---------- */
  C.features.forEach((f) => {
    const card = el("article", "feature reveal");
    card.appendChild(el("div", "ic", f.icon));
    card.appendChild(el("h3", "", f.title));
    card.appendChild(el("p", "", f.text));
    $("features").appendChild(card);
  });

  /* ---------- Menu + filter kategori ---------- */
  const cats = ["Semua"].concat(
    C.menu.map((m) => m.cat).filter((c, i, a) => a.indexOf(c) === i)
  );
  let activeCat = "Semua";

  function renderMenu() {
    const grid = $("menuGrid");
    grid.replaceChildren();
    C.menu
      .filter((m) => activeCat === "Semua" || m.cat === activeCat)
      .forEach((m) => {
        const card = el("article", "item");
        card.appendChild(el("div", "em", m.emoji));
        const info = el("div", "info");
        const h = el("h3", "", m.name);
        if (m.best) h.appendChild(el("span", "badge", "Favorit"));
        info.appendChild(h);
        info.appendChild(el("p", "", m.desc));
        const row = el("div", "row");
        row.appendChild(el("span", "price", rupiah(m.price)));
        const a = el("a", "btn btn-sm", "Pesan");
        a.href = waLink("Halo " + C.name + ", saya mau pesan 1x " + m.name + " (" + rupiah(m.price) + ").");
        a.target = "_blank";
        a.rel = "noopener";
        row.appendChild(a);
        info.appendChild(row);
        card.appendChild(info);
        grid.appendChild(card);
      });
  }

  cats.forEach((c) => {
    const b = el("button", "tab" + (c === activeCat ? " active" : ""), c);
    b.type = "button";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", c === activeCat ? "true" : "false");
    b.addEventListener("click", () => {
      activeCat = c;
      document.querySelectorAll(".tab").forEach((t) => {
        const on = t === b;
        t.classList.toggle("active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      renderMenu();
    });
    $("tabs").appendChild(b);
  });
  renderMenu();

  /* ---------- Testimoni ---------- */
  C.testimonials.forEach((t) => {
    const q = el("article", "quote reveal");
    q.appendChild(el("div", "stars", "★★★★★"));
    q.appendChild(el("p", "", "“" + t.text + "”"));
    const who = el("div", "who");
    who.appendChild(el("b", "", t.name));
    who.appendChild(document.createTextNode(t.role));
    q.appendChild(who);
    $("testi").appendChild(q);
  });

  /* ---------- Jam buka ---------- */
  C.hoursLabel.forEach((h) => {
    const li = el("li");
    li.appendChild(el("span", "", h.days));
    li.appendChild(el("span", "", h.time));
    $("hours").appendChild(li);
  });

  // Status buka/tutup berdasarkan waktu Jakarta (WIB)
  function jakartaNow() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Jakarta", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false
    }).formatToParts(new Date());
    const get = (t) => parts.find((p) => p.type === t).value;
    const days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return { day: days[get("weekday")], min: (parseInt(get("hour"), 10) % 24) * 60 + parseInt(get("minute"), 10) };
  }
  const toMin = (s) => { const [h, m] = s.split(":"); return parseInt(h, 10) * 60 + parseInt(m, 10); };

  function updateStatus() {
    const now = jakartaNow();
    const today = C.hours[now.day];
    const box = $("status");
    const txt = box.querySelector("span");
    if (today && now.min >= toMin(today[0]) && now.min < toMin(today[1])) {
      box.className = "status open";
      txt.textContent = "Buka sekarang · tutup " + today[1].replace(":", ".");
    } else {
      box.className = "status closed";
      txt.textContent = "Sedang tutup" + (today && now.min < toMin(today[0]) ? " · buka " + today[0].replace(":", ".") : "");
    }
  }
  updateStatus();
  setInterval(updateStatus, 60000);

  /* ---------- Navigasi ---------- */
  const nav = $("nav");
  const links = $("links");
  const burger = $("burger");

  function onScroll() { nav.classList.toggle("solid", window.scrollY > 40); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function setMenu(open) {
    links.classList.toggle("open", open);
    nav.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  }
  burger.addEventListener("click", () => setMenu(!links.classList.contains("open")));
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  /* ---------- Animasi muncul saat scroll ---------- */
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach((i) => io.observe(i));
  } else {
    items.forEach((i) => i.classList.add("show"));
  }
})();