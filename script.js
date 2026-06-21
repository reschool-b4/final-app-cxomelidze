const POPULAR = [
  { ext: ".com", bg: "#101828", fg: "#60a5fa", label: "COM" },
  { ext: ".io", bg: "#0d1f12", fg: "#4ade80", label: "IO" },
  { ext: ".co", bg: "#1c1007", fg: "#fb923c", label: "CO" },
  { ext: ".app", bg: "#140d28", fg: "#a78bfa", label: "APP" },
  { ext: ".dev", bg: "#0f1e26", fg: "#38bdf8", label: "DEV" },
  { ext: ".net", bg: "#1a1207", fg: "#fbbf24", label: "NET" },
];

const ALL = [
  { ext: ".design", bg: "#1a0a1e", fg: "#e879f9", label: "DSN" },
  { ext: ".studio", bg: "#0d1a20", fg: "#22d3ee", label: "STU" },
  { ext: ".xyz", bg: "#1a1a0a", fg: "#bef264", label: "XYZ" },
  { ext: ".site", bg: "#100a1a", fg: "#a78bfa", label: "SITE" },
  { ext: ".online", bg: "#0a1a0e", fg: "#34d399", label: "ONL" },
  { ext: ".tech", bg: "#0a1220", fg: "#60a5fa", label: "TCH" },
  { ext: ".me", bg: "#1a0a14", fg: "#f472b6", label: "ME" },
  { ext: ".org", bg: "#0d1a12", fg: "#4ade80", label: "ORG" },
  { ext: ".store", bg: "#1a1000", fg: "#fcd34d", label: "STR" },
  { ext: ".shop", bg: "#0e1a14", fg: "#6ee7b7", label: "SHP" },
  { ext: ".digital", bg: "#160a1a", fg: "#c084fc", label: "DIG" },
  { ext: ".agency", bg: "#1a0c0a", fg: "#f87171", label: "AGY" },
  { ext: ".media", bg: "#0a141a", fg: "#7dd3fc", label: "MED" },
  { ext: ".creative", bg: "#1a1020", fg: "#d8b4fe", label: "CRE" },
  { ext: ".pro", bg: "#14180a", fg: "#a3e635", label: "PRO" },
  { ext: ".ai", bg: "#0e0a1a", fg: "#818cf8", label: "AI" },
  { ext: ".cloud", bg: "#0a1020", fg: "#93c5fd", label: "CLD" },
  { ext: ".space", bg: "#0a0d18", fg: "#6366f1", label: "SPC" },
  { ext: ".world", bg: "#0a1a0d", fg: "#4ade80", label: "WLD" },
  { ext: ".life", bg: "#0a180d", fg: "#86efac", label: "LFE" },
  { ext: ".works", bg: "#1a1600", fg: "#fde68a", label: "WRK" },
  { ext: ".info", bg: "#0a1418", fg: "#bae6fd", label: "INF" },
  { ext: ".link", bg: "#0f1a1a", fg: "#2dd4bf", label: "LNK" },
  { ext: ".group", bg: "#1a0e10", fg: "#fda4af", label: "GRP" },
  { ext: ".team", bg: "#0d160d", fg: "#6ee7b7", label: "TEM" },
  { ext: ".solutions", bg: "#0f0a1a", fg: "#a5b4fc", label: "SOL" },
  { ext: ".services", bg: "#1a0e00", fg: "#fed7aa", label: "SRV" },
  { ext: ".build", bg: "#0e1400", fg: "#d9f99d", label: "BLD" },
  { ext: ".network", bg: "#080e1a", fg: "#7dd3fc", label: "NET" },
  { ext: ".business", bg: "#1a0806", fg: "#fca5a5", label: "BIZ" },
  { ext: ".systems", bg: "#0c0c1a", fg: "#a5b4fc", label: "SYS" },
  { ext: ".blog", bg: "#0a1a14", fg: "#34d399", label: "BLG" },
];

const PRICES = {
  ".com": "$12/yr after",
  ".io": "$40/yr after",
  ".co": "$28/yr after",
  ".app": "$18/yr after",
  ".dev": "$12/yr after",
  ".net": "$15/yr after",
  ".design": "$35/yr after",
  ".studio": "$25/yr after",
  ".xyz": "$5/yr after",
  ".site": "$10/yr after",
  ".online": "$8/yr after",
  ".tech": "$18/yr after",
  ".me": "$18/yr after",
  ".org": "$12/yr after",
  ".store": "$20/yr after",
  ".shop": "$20/yr after",
  ".digital": "$25/yr after",
  ".agency": "$25/yr after",
  ".media": "$28/yr after",
  ".creative": "$30/yr after",
  ".pro": "$16/yr after",
  ".ai": "$80/yr after",
  ".cloud": "$22/yr after",
  ".space": "$12/yr after",
  ".world": "$25/yr after",
  ".life": "$20/yr after",
  ".works": "$22/yr after",
  ".info": "$10/yr after",
  ".link": "$8/yr after",
  ".group": "$22/yr after",
  ".team": "$20/yr after",
  ".solutions": "$28/yr after",
  ".services": "$28/yr after",
  ".build": "$22/yr after",
  ".network": "$25/yr after",
  ".business": "$20/yr after",
  ".systems": "$25/yr after",
  ".blog": "$15/yr after",
};

const FAQS = [
  {
    q: "Can I get more than 1 free domain?",
    a: "This offer can be redeemed once per site subscription. So each site you upgrade to any yearly plan for the first time is eligible for a free domain.",
  },
  {
    q: "Can I get a free domain when I upgrade to monthly?",
    a: "This offer is available only for sites on a yearly plan.",
  },
  {
    q: "What happens to my domain after 1 year?",
    a: "Your domain will automatically renew at the standard rate.",
  },
  {
    q: "Can I get a refund on my site and keep my domain?",
    a: "Redeeming this offer forfeits the option to request a refund.",
  },
  {
    q: "Can I combine this with a Framer discount code?",
    a: "This offer is not valid in combination with a 100% discount code.",
  },
  {
    q: "Where do I manage my domain?",
    a: 'Your domain and its subscription will be managed through <a href="https://hover.com" target="_blank">Hover</a>.',
  },
];

function makeName(term, ext) {
  if (!term) return "yoursite" + ext;
  const clean = term
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return (clean || "yoursite") + ext;
}

function renderItem(d, name) {
  const price = PRICES[d.ext] || "$20/yr after";
  return `
      <div class="di">
        <div class="di-l">
          <div class="di-icon" style="background:${d.bg}">
            <span style="color:${d.fg};font-size:9.5px;font-weight:700;letter-spacing:0.04em">${d.label}</span>
          </div>
          <div class="di-info">
            <div class="di-name">${name}</div>
            <div class="di-ext">${d.ext}</div>
          </div>
        </div>
        <div class="di-r">
          <div class="di-price">
            <div class="free-tag">
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                <path d="M2 5l2 2 4-4" stroke="#1db954" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Free first year
            </div>
            <div class="yr-price">${price}</div>
          </div>
          <a href="https://framer.com/projects/?showUpgrade=true&upgradeTo=basicSite2025" class="btn btn-blue-sm" target="_blank">Free Upgrade</a>
        </div>
      </div>`;
}

function render(term) {
  const t = term ? term.trim() : "";
  document.getElementById("popularList").innerHTML = POPULAR.map((d) =>
    renderItem(d, makeName(t, d.ext))
  ).join("");
  document.getElementById("allList").innerHTML = ALL.map((d) =>
    renderItem(d, makeName(t, d.ext))
  ).join("");
}

const inp = document.getElementById("sInput");
inp.addEventListener("input", () => render(inp.value));
inp.addEventListener("keydown", (e) => {
  if (e.key === "Enter") render(inp.value);
});
document
  .getElementById("sBtn")
  .addEventListener("click", () => render(inp.value));

const faqEl = document.getElementById("faqList");

FAQS.forEach((item) => {
  const el = document.createElement("div");
  el.className = "fi";
  el.innerHTML = `
      <div class="fq">
        <span>${item.q}</span>
        <svg class="chev" viewBox="0 0 16 16" fill="none">
          <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="fa">
        <div class="fa-inner">${item.a}</div>
      </div>`;

  el.querySelector(".fq").addEventListener("click", () => {
    document.querySelectorAll(".fi.open").forEach((x) => {
      if (x !== el) x.classList.remove("open");
    });
    el.classList.toggle("open");
  });

  faqEl.appendChild(el);
});

render("");
