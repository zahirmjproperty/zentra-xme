/* ============================================================================
   ZENTRA Project — XME Business Park 2, Nilai Impian — app.js
   Renders project + availability data; nav, filters, estimator, gallery,
   lightbox and WhatsApp enquiry hand-off.
   ========================================================================== */
(function () {
  "use strict";

  const C = projectConfig;
  const A = (typeof availability !== "undefined") ? availability : { units: [], totals: {}, summaries: [], asOf: "" };
  const RM = (n) => "RM " + Math.round(n).toLocaleString("en-MY");
  const SQM = (n) => n.toLocaleString("en-MY", { maximumFractionDigits: 2 });

  /* ---------- SVG icon set ---------- */
  const ICONS = {
    shield:  '<path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z"/><path d="M9.2 12.2l2 2 3.6-4"/>',
    building:'<path d="M4 21V6l8-3 8 3v15"/><path d="M9 21v-5h6v5"/><path d="M8 9h.01M12 9h.01M16 9h.01M8 12.5h.01M12 12.5h.01M16 12.5h.01"/>',
    layers:  '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
    pin:     '<path d="M12 22s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10.5" r="2.6"/>',
    road:    '<path d="M6 21L9 3M18 21L15 3"/><path d="M12 5v3M12 11v3M12 17v2"/>',
    factory: '<path d="M3 21V10l5 3V10l5 3V7l8 4v10z"/><path d="M7 17h3M13 17h3M8 21v-4h3v4"/>',
    home:    '<path d="M3 10l9-7 9 7v11H3z"/><path d="M9 21v-6h6v6"/>',
    phone:   '<path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a16 16 0 0 1-16-16z"/>',
    file:    '<path d="M14 3H7v18h10V8z"/><path d="M14 3v5h3"/>',
    check:   '<path d="M4.5 12.5l5 5 10-11"/>',
    leaf:    '<path d="M20 4s-8.5-.6-12.4 3.3C4.6 10.3 5 15 5 15s4.7.4 7.7-2.6C16.6 8.5 20 4 20 4z"/><path d="M5 19c2-4 6-7 11-9"/>',
    sun:     '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/>',
    bolt:    '<path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13z"/>'
  };
  const svg = (k) => '<span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[k] || ICONS.check) + "</svg></span>";

  /* ---------- WhatsApp ---------- */
  const waUrl = (msg) => "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(msg || C.whatsappMessage);

  /* ---------- render: hero ---------- */
  document.getElementById("heroBenefits").innerHTML = heroBenefits
    .map((b) => '<div class="hb"><span class="hb-n">' + b.n + '</span><div><p class="hb-t">' + b.title + '</p><p class="hb-s">' + b.sub + "</p></div></div>")
    .join("");
  document.getElementById("heroSpecs").innerHTML = heroSpecs
    .map((s) => '<div class="hs"><p class="hs-l">' + s.label + '</p><p class="hs-s">' + s.sub + "</p></div>")
    .join("");

  /* ---------- render: about ---------- */
  document.getElementById("aboutFeatures").innerHTML = [
    "59 units in Phase 3B — 20 semi-detached, 39 linked",
    "Freehold light industrial title, individual ownership",
    "Triple-volume warehouse — minimum 9 m clear height",
    "First-floor open-plan office, ground-floor production / warehouse",
    "Floor loading 1.0 t/m&sup2; (semi-D) and 0.5 t/m&sup2; (linked)",
    "Utilities provision: 150 amp (semi-D) and 100 amp (linked)",
    "Developer: Sime Darby Property Berhad"
  ].map((t) => "<li>" + t + "</li>").join("");
  document.getElementById("aboutNote").textContent =
    "Stated completion: three years from June 2026, estimated Q3 2029. Availability, prices and the purchase package in this page reflect the developer's availability chart as at " +
    C.dataAsOf + ".";

  /* ---------- render: highlights ---------- */
  document.getElementById("highlightGrid").innerHTML = highlights
    .map((h, i) => '<article class="card travel rv up" style="transition-delay:' + i * 70 + 'ms">' +
      svg(h.icon) + "<h3>" + h.title + "</h3><p>" + h.text + "</p></article>")
    .join("");

  /* ---------- render: property types ---------- */
  document.getElementById("typeGrid").innerHTML = propertyTypes
    .map((t, i) => {
      const rows = t.specs.map((s) => '<div class="pt-row"><dt>' + s[0] + "</dt><dd>" + s[1] + "</dd></div>").join("");
      return '<article class="card travel rv up" style="transition-delay:' + i * 70 + 'ms">' +
        '<p class="pt-code">' + t.code + "</p>" +
        "<h3>" + t.name + "</h3>" +
        '<p class="pt-units">' + t.units + " &middot; " + t.priceNote + "</p>" +
        '<dl class="pt-rows" style="margin-top:16px">' + rows + "</dl>" +
        "</article>";
    })
    .join("");

  document.getElementById("unitFeatures").innerHTML = [
    "Reinforced concrete structure with masonry walls",
    "Triple-volume warehouse, minimum 9 m eaves height",
    "Open-plan first-floor office",
    "Front loading bays — 40-ft containers (semi-D), 20-ft trucks (linked)",
    "2.2 m column-less covered front corridor (linked units)",
    "Optimised window openings designed as required",
    "Provision for solar panels and EV chargers",
    "Rainwater harvesting with a 300 L tank for irrigation"
  ].map((t) => "<li>" + t + "</li>").join("");

  document.getElementById("suitableFor").innerHTML = [
    "Light manufacturing", "Assembly", "Warehousing &amp; distribution",
    "Logistics &amp; freight forwarding", "E-commerce fulfilment",
    "Electrical &amp; engineering workshops", "Building materials trade",
    "Furniture &amp; fit-out works", "Cold-chain ready space (subject to fit-out)",
    "Business HQ with showroom and office"
  ].map((t) => '<span class="pin-tag">' + t + "</span>").join("");

  document.getElementById("siteFeatures").innerHTML = siteFeatures
    .map((f) => '<div class="fg">' + svg(f.icon) + "<div><h4>" + f.title + "</h4><p>" + f.text + "</p></div></div>")
    .join("");

  /* ---------- availability ---------- */
  const t = A.totals || {};
  document.getElementById("availLead").textContent =
    "Phase 3B has " + (t.units || 0) + " units in total. As at " + A.asOf + ", " + (t.available || 0) +
    " are still available at the developer's release prices — " + (t.avail_sd || 0) + " semi-detached and " +
    (t.avail_linked || 0) + " linked. Unit-by-unit detail below; sold units are kept visible so the release pattern is clear.";

  const pctAvail = t.units ? Math.round((t.available / t.units) * 100) : 0;
  document.getElementById("availSummary").innerHTML = [
    ["Units in Phase 3B", t.units || 0, "20 semi-D + 39 linked"],
    ["Still available", t.available || 0, pctAvail + "% of the phase"],
    ["Taken up", t.sold || 0, "Sold / booked"],
    ["Value of available units", t.value_avail_list ? "RM " + (t.value_avail_list / 1e6).toFixed(2) + "m" : "—", "At release prices, before rebates"]
  ].map((c) => '<div class="as"><b>' + c[1] + '</b><span>' + c[0] + "</span><i>" + c[2] + "</i></div>").join("");

  const body = document.getElementById("availBody");
  const onlyAvail = document.getElementById("onlyAvail");
  const typeFilter = document.getElementById("typeFilter");
  const dirFilter = document.getElementById("dirFilter");
  const availCount = document.getElementById("availCount");

  function renderTable() {
    const rows = A.units.filter((u) => {
      if (onlyAvail.checked && u.sold) return false;
      if (typeFilter.value && u.segment !== typeFilter.value) return false;
      if (dirFilter.value && u.direction !== dirFilter.value) return false;
      return true;
    });
    body.innerHTML = rows.map((u) => {
      const status = u.sold ? '<span class="pill no">Sold</span>' : '<span class="pill ok">Available</span>';
      const dir = u.direction === "NORTH WEST" ? "North West" : "South East";
      const seg = u.segment === "Semi-Detached" ? "Semi-D" : "Linked";
      return '<tr class="' + (u.sold ? "sold" : "") + '"><td><strong>' + u.no + "</strong></td><td>" + u.type +
        "</td><td>" + seg + "</td><td>" + dir + '</td><td class="num">' + SQM(u.land_sqft) +
        '</td><td class="num">' + SQM(u.total_bu_sqft) + '</td><td class="num">' +
        (u.price ? u.price.toLocaleString("en-MY") : "—") + '</td><td class="num">' +
        (u.psf_bu ? u.psf_bu.toFixed(0) : "—") + "</td><td>" + status + "</td></tr>";
    }).join("");
    availCount.textContent = rows.length + " unit" + (rows.length === 1 ? "" : "s") + " shown";
  }
  [onlyAvail, typeFilter, dirFilter].forEach((el) => el.addEventListener("change", renderTable));
  renderTable();

  document.getElementById("availNote").innerHTML =
    "Source: the developer's appointed-agency availability chart dated " + A.asOf +
    ". Prices are the developer's release prices before the early-bird rebate and before any credit note. " +
    "Sold / booked units are listed for the release pattern only; the developer does not publish a price for every unit released, " +
    "which is why some rows show &ldquo;&mdash;&rdquo;. Prices, packages and availability can be revised or withdrawn by the developer " +
    "at any time without notice; confirm the current position in writing before a booking.";

  /* ---------- package + estimator ---------- */
  document.getElementById("pkgList").innerHTML = packageItems
    .map((p) => '<div class="pk"><span class="tick">&#10003;</span><div><h4>' + p.t + "</h4><p>" + p.d + "</p></div></div>")
    .join("");

  const calcSel = document.getElementById("calcUnit");
  const calcOut = document.getElementById("calcOut");
  calcSel.innerHTML = A.units.filter((u) => !u.sold && u.price)
    .map((u) => '<option value="' + u.no + '">Unit ' + u.no + " — " + u.type + " · " + SQM(u.total_bu_sqft) +
      " sq ft · " + u.price.toLocaleString("en-MY") + "</option>").join("");

  function calc() {
    const u = A.units.find((x) => String(x.no) === calcSel.value) || A.units.find((x) => !x.sold && x.price);
    if (!u) { calcOut.innerHTML = "<p>No available unit with a published price.</p>"; return; }
    const P = u.price;
    const after9 = P * 0.91;
    const after91 = after9 * 0.99;
    const rebate = P - after91;
    const booking = u.segment === "Semi-Detached" ? 30000 : 10000;
    const creditNote = after91 * 0.10;
    const net = after91 - creditNote;
    const rows = [
      ["Unit", "No " + u.no + " · " + u.type + " · " + SQM(u.total_bu_sqft) + " sq ft built-up"],
      ["SPA price (before rebate)", RM(P)],
      ["Early-bird rebate — 9% + 1%", "&minus; " + RM(rebate)],
      ["Price after rebate", RM(after91)],
      ["Booking fee", RM(booking)],
      ["Balance after booking fee", RM(after91 - booking)],
      ["10% credit note on SPA signing (estimate)", "&minus; " + RM(creditNote)],
    ];
    const eff = ((P - net) / P) * 100;
    calcOut.innerHTML =
      rows.map((r) => '<div class="row"><span>' + r[0] + "</span><span>" + r[1] + "</span></div>").join("") +
      '<div class="row big"><span>Indicative balance to fund</span><span>' + RM(after91 - booking - creditNote) + "</span></div>" +
      '<p class="hint">Effective reduction against the SPA price, if the credit note is applied as stated: ' + eff.toFixed(1) +
      "%. Rebate maths follows the developer's own worked example (RM 4,024,888 &rarr; RM 3,626,021.60). " +
      "The credit note is stated as issued &ldquo;upon signing of the SPA, after deducting the booking fee&rdquo; — get the mechanism confirmed in writing.</p>";
  }
  calcSel.addEventListener("change", calc);
  calc();

  /* ---------- drawings (tabs + lightbox) ---------- */
  const drawings = [
    { id: "plan", label: "Site Plan — Phase 3B", src: "assets/img/site-plan.svg",
      note: "All 59 plots of Phase 3B shaded by status as at " + A.asOf + ". Indicative only — not to scale, not the developer's approved layout plan." },
    { id: "section", label: "Cross-Section", src: "assets/img/cross-section.svg",
      note: "Schematic section showing the 9 m triple-volume warehouse, the first-floor open-plan office and the loading bay. Own drawing from the specification figures; not the developer's drawing." }
  ];
  const planTabs = document.getElementById("planTabs");
  const planImg = document.getElementById("planImg");
  const planNote = document.getElementById("planNote");
  planTabs.innerHTML = drawings
    .map((d, i) => '<button class="tab' + (i === 0 ? " on" : "") + '" role="tab" data-i="' + i + '" aria-selected="' + (i === 0) + '">' + d.label + "</button>")
    .join("");
  function showDrawing(i) {
    const d = drawings[i];
    planImg.src = d.src;
    planImg.alt = d.label;
    planNote.textContent = d.note;
    planTabs.querySelectorAll(".tab").forEach((b, j) => {
      b.classList.toggle("on", j === i);
      b.setAttribute("aria-selected", String(j === i));
    });
  }
  planTabs.querySelectorAll(".tab").forEach((b) => b.addEventListener("click", () => showDrawing(+b.dataset.i)));
  showDrawing(0);

  /* ---------- location ---------- */
  document.getElementById("connList").innerHTML = connectivity
    .map((c, i) => '<div class="conn"><span class="conn-n">' + String(i + 1).padStart(2, "0") + '</span><div><p class="conn-k">' + c[0] + '</p><p class="conn-t">' + c[1] + "</p></div><span class=\"conn-dot\"></span></div>")
    .join("");
  document.getElementById("locHighlights").innerHTML = [
    "Nilai toll plaza frontage", "NSE / PLUS", "ELITE", "NLE", "~23 km to KLIA",
    "Nilai 3 wholesale city", "Nilai Industrial Estate", "Nilai Impian township"
  ].map((t) => '<span class="pin-tag">' + t + "</span>").join("");

  /* ---------- due diligence ---------- */
  document.getElementById("ddList").innerHTML = ddQuestions.map((q) => "<li>" + q + "</li>").join("");

  /* ---------- gallery + lightbox ---------- */
  const gal = document.getElementById("gal");
  gal.innerHTML = gallery
    .map((g, i) => '<a class="gal-item' + (i === 0 ? " wide" : "") + (i === 1 ? " tall" : "") + '" href="#" data-i="' + i + '"><img src="' + g.src + '" alt="' + g.cap + '" loading="lazy"><span class="gal-cap">' + g.cap + "</span></a>")
    .join("");
  const lb = document.getElementById("lb"), lbImg = document.getElementById("lbImg"), lbCap = document.getElementById("lbCap");
  function openLb(src, cap) {
    lbImg.src = src; lbCap.textContent = cap || "";
    lb.classList.add("open"); document.body.style.overflow = "hidden";
  }
  function closeLb() { lb.classList.remove("open"); document.body.style.overflow = ""; }
  gal.querySelectorAll(".gal-item").forEach((f) => f.addEventListener("click", () => openLb(gallery[+f.dataset.i].src, gallery[+f.dataset.i].cap)));
  document.getElementById("lbX").addEventListener("click", closeLb);
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target === lbImg) closeLb(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });
  document.getElementById("planZoom").addEventListener("click", () => {
    const tabs = [].slice.call(planTabs.querySelectorAll(".tab"));
    const idx = Math.max(0, tabs.findIndex((b) => b.classList.contains("on")));
    openLb(drawings[idx].src, drawings[idx].note);
  });
  document.getElementById("galTabs").innerHTML = '<button class="tab on">All graphics</button>';

  /* ---------- FAQ ---------- */
  document.getElementById("faqList").innerHTML = faq
    .map((f) => "<details><summary>" + f[0] + '</summary><div class="ans">' + f[1] + "</div></details>")
    .join("");

  /* ---------- nav / drawer / reveal ---------- */
  const nav = document.getElementById("nav"), mcta = document.getElementById("mcta");
  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 40);
    mcta.classList.toggle("show", y > window.innerHeight * 0.7);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const drawer = document.getElementById("drawer"), burger = document.getElementById("burger");
  function setDrawer(open) {
    drawer.classList.toggle("open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    burger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  }
  burger.addEventListener("click", () => setDrawer(true));
  document.getElementById("drawerClose").addEventListener("click", () => setDrawer(false));
  drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setDrawer(false)));

  const rvs = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    rvs.forEach((el) => io.observe(el));
  } else { rvs.forEach((el) => el.classList.add("in")); }

  /* ---------- contact wiring ---------- */
  const waHref = waUrl();
  ["waFloat", "mctaWa", "footWa"].forEach((id) => { const el = document.getElementById(id); if (el) el.href = waHref; });
  const tel = "tel:+60" + C.phone.replace(/[^0-9]/g, "").replace(/^0/, "");
  const footTel = document.getElementById("footTel");
  footTel.textContent = C.phone; footTel.href = tel;
  document.getElementById("footContact").innerHTML =
    "WhatsApp / Call: <a href=\"" + waHref + "\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--gold)\">" + C.phone + "</a>";
  document.getElementById("yr").textContent = new Date().getFullYear();
  document.getElementById("srcNote").innerHTML =
    "<strong>Source of figures:</strong> developer appointed-agency sales kit for XME Business Park 2 Phase 3B and the availability chart dated " +
    A.asOf + ". Presented by " + C.brand + " (marketing) · appointed project agency: " + C.marketingAgency +
    ". Unit numbers, prices and status are reproduced from that chart and remain subject to the developer's confirmation.";

  document.getElementById("contactPoints").innerHTML = [
    "Current unit-by-unit availability and price list",
    "The written package, rebate and booking terms",
    "Site visit and sales gallery appointment",
    "Guidance on financing a factory unit under construction"
  ].map((t) => "<li>" + t + "</li>").join("");

  /* ---------- enquiry form (hand-off to WhatsApp) ---------- */
  const form = document.getElementById("enqForm"), btn = document.getElementById("submitBtn"), msg = document.getElementById("formMsg");
  const RE = {
    name: /^.{3,}$/,
    phone: /^(\+?60|0)1[0-9][\s-]?[0-9]{3,4}[\s-]?[0-9]{3,4}$/,
    email: /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i
  };
  const fieldOf = (i) => i.closest(".field");
  const mark = (i, ok) => { fieldOf(i).classList.toggle("bad", !ok); return ok; };
  function validate() {
    let ok = true;
    const n = document.getElementById("f-name"), p = document.getElementById("f-phone"),
          m = document.getElementById("f-email"), a = document.getElementById("f-agree");
    ok = mark(n, RE.name.test(n.value.trim())) && ok;
    ok = mark(p, RE.phone.test(p.value.trim())) && ok;
    ok = mark(m, RE.email.test(m.value.trim())) && ok;
    if (!a.checked) {
      ok = false;
      msg.className = "form-msg no";
      msg.textContent = "Please tick the consent checkbox before submitting.";
    }
    return ok;
  }
  ["f-name", "f-phone", "f-email"].forEach((id) => {
    document.getElementById(id).addEventListener("blur", () => {
      const el = document.getElementById(id);
      const k = id === "f-name" ? "name" : id === "f-phone" ? "phone" : "email";
      if (el.value.trim()) mark(el, RE[k].test(el.value.trim()));
    });
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.className = "form-msg"; msg.textContent = "";
    if (document.getElementById("f-website").value.trim() !== "") {
      msg.className = "form-msg ok";
      msg.textContent = "Thank you. Your enquiry has been received.";
      return;
    }
    if (!validate()) return;
    const d = {
      name: document.getElementById("f-name").value.trim(),
      phone: document.getElementById("f-phone").value.trim(),
      email: document.getElementById("f-email").value.trim(),
      company: document.getElementById("f-company").value.trim(),
      interest: document.getElementById("f-interest").value,
      message: document.getElementById("f-msg").value.trim()
    };
    btn.disabled = true;
    const label = btn.innerHTML;
    btn.innerHTML = "Preparing&hellip;";
    const text = "Enquiry — " + C.project + "\n\nName: " + d.name + "\nPhone: " + d.phone + "\nEmail: " + d.email +
      (d.company ? "\nCompany: " + d.company : "") + (d.interest ? "\nInterested in: " + d.interest : "") +
      (d.message ? "\n\nMessage: " + d.message : "");
    setTimeout(() => {
      window.open(waUrl(text), "_blank", "noopener");
      msg.className = "form-msg ok";
      msg.textContent = "Thank you — your enquiry has been prepared in WhatsApp. Please press send to reach us.";
      btn.disabled = false; btn.innerHTML = label; form.reset();
    }, 400);
  });
})();
