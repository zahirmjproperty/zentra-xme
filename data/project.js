/* ============================================================================
   ZENTRA Project — XME Business Park 2, Nilai Impian
   Project data (layout separate from data)
   Source of figures: developer's appointed-agency sales kit (Phase 3B) and
   Availability Chart dated 24 September 2026. All figures subject to change by
   the developer without notice. See LAMPIRAN / data notes on the page.
   ========================================================================== */

const projectConfig = {
  brand: "ZENTRA Property Group",
  tagline: "ONE PLATFORM. SMARTER SOLUTION. GREATER VALUE.",
  project: "XME Business Park 2, Nilai Impian",
  projectShort: "XME Business Park 2",
  eyebrow: "Freehold Light Industrial · Phase 3B",
  location: "Nilai Impian, Nilai, Negeri Sembilan",
  developer: "Sime Darby Property Berhad",
  marketingAgency: "Esprit Estate Agent Sdn Bhd (appointed project agency)",
  whatsapp: "60163119076",
  whatsappName: "Mr Tanah",
  phone: "016-3119076",
  dataAsOf: "24 September 2026",
  whatsappMessage:
    "Hello ZENTRA Property Group. I would like to know more about XME Business Park 2, Nilai Impian (freehold factory units)."
};

/* ---- Hero benefits (right column, desktop) ---- */
const heroBenefits = [
  { n: "01", title: "Freehold Light Industrial", sub: "Converted land with full infrastructure" },
  { n: "02", title: "Nilai Impian Township", sub: "Nilai, Negeri Sembilan" },
  { n: "03", title: "~23 km to KLIA", sub: "Via Route 32 — logistics & distribution" },
  { n: "04", title: "Triple-Volume 9 m Warehouse", sub: "40-ft container access (semi-D)" },
  { n: "05", title: "Eco & Future Ready", sub: "Rainwater harvesting, solar & EV infra ready" }
];

/* ---- Bottom-of-hero specification strip ---- */
const heroSpecs = [
  { label: "FREEHOLD", sub: "Light industrial title" },
  { label: "59 UNITS", sub: "Phase 3B — 20 Semi-D + 39 Linked" },
  { label: "FROM RM 1.64M", sub: "Linked factories" },
  { label: "9 M EAVES", sub: "Triple-volume warehouse" },
  { label: "EST. VP Q3 2029", sub: "3 years from June 2026" }
];

/* ---- Project highlights (cards) ---- */
const highlights = [
  { icon: "shield", title: "FREEHOLD, LIGHT INDUSTRIAL", text: "Freehold light industrial title on converted land with full infrastructure — individual ownership, not a tenancy." },
  { icon: "factory", title: "TWO FACTORY TYPES", text: "20 semi-detached units (6,554 – 7,286 sq ft built-up) and 39 linked units (3,422 – 4,399 sq ft built-up) in Phase 3B." },
  { icon: "layers", title: "9 M TRIPLE-VOLUME WAREHOUSE", text: "Minimum 9 m (29.5 ft) eaves height for stacking, plus an open-plan office on the first floor." },
  { icon: "road", title: "CONTAINER TRUCK ACCESS", text: "Multiple loading bays for semi-D (40-ft containers); rear and front loading for linked units (20-ft trucks)." },
  { icon: "pin", title: "KLIA LOGISTICS CORRIDOR", text: "About 23 km to KLIA via Route 32, with access from NSE, ELITE and NLE and high visibility near the Nilai toll plaza." },
  { icon: "leaf", title: "ECO & FUTURE READY", text: "Rainwater harvesting (300 L tank for irrigation), solar-ready, EV-charger-ready and optimised window openings." }
];

/* ---- Property types (official data only) ---- */
const propertyTypes = [
  {
    code: "SEMI-D",
    name: "Semi-Detached Factory",
    units: "20 units in Phase 3B",
    land: "11,744 – 25,956 sq ft",
    builtUp: "6,554 – 7,286 sq ft",
    config: "2-storey factory with open-plan office",
    priceNote: "Available from RM 4,230,888",
    specs: [
      ["Tenure", "Freehold, light industrial"],
      ["Land area", "11,744 – 25,956 sq ft"],
      ["Built-up area", "6,554 – 7,286 sq ft"],
      ["Eaves height", "9 m (29.5 ft), triple volume"],
      ["Floor loading", "1.0 ton/m² (10 kN/m²)"],
      ["Electricity supply", "150 amp"],
      ["Truck access", "Multiple loading bays — 40-ft containers"],
      ["Booking fee", "RM 30,000"],
      ["Indicative price", "RM 4,230,888 – RM 5,080,888"]
    ]
  },
  {
    code: "LINKED",
    name: "Linked Factory (Type A / AM)",
    units: "39 units in Phase 3B",
    land: "2,370 sq ft",
    builtUp: "3,422 sq ft",
    config: "2-storey linked factory with first-floor office",
    priceNote: "Available from RM 1,648,888",
    specs: [
      ["Tenure", "Freehold, light industrial"],
      ["Land area", "2,370.21 sq ft (28 ft × 75 ft)"],
      ["Built-up area", "3,422.50 sq ft"],
      ["Eaves height", "9 m (29.5 ft), triple volume"],
      ["Floor loading", "0.5 ton/m² (5 kN/m²)"],
      ["Electricity supply", "100 amp"],
      ["Front corridor", "2.2 m wide, column-less covered corridor"],
      ["Truck access", "Front and rear loading — 20-ft trucks"],
      ["Booking fee", "RM 10,000"],
      ["Indicative price", "RM 1,648,888 – RM 1,801,888"]
    ]
  },
  {
    code: "CORNER / END LOT",
    name: "Linked Corner & End Lot",
    units: "8 units (4 corner + 4 end lot)",
    land: "2,370 – 3,059 sq ft",
    builtUp: "3,422 – 4,399 sq ft",
    config: "2-storey linked factory, wider frontage",
    priceNote: "Corner units — fully taken up",
    specs: [
      ["Tenure", "Freehold, light industrial"],
      ["Land area", "Corner 3,059 sq ft · End lot 2,370.21 sq ft"],
      ["Built-up area", "Corner 4,399 sq ft · End lot 3,422.50 sq ft"],
      ["Eaves height", "9 m (29.5 ft), triple volume"],
      ["Floor loading", "0.5 ton/m² (5 kN/m²)"],
      ["Electricity supply", "100 amp"],
      ["Truck access", "Front and rear loading — 20-ft trucks"],
      ["Booking fee", "RM 10,000"],
      ["Indicative price", "RM 1,683,888 – RM 2,526,888"]
    ]
  }
];

/* ---- Package & incentives (as stated in the sales kit) ---- */
const packageItems = [
  { t: "Early bird rebate — 9% + 1%", d: "Applied to the SPA price (9% then a further 1%)." },
  { t: "10% credit note on SPA signing", d: "Issued upon signing of the SPA, after deducting the booking fee. Exact mechanism to be confirmed in writing by the developer." },
  { t: "Free SPA legal fees & disbursements", d: "Borne by the developer." },
  { t: "Free loan legal fees & disbursements", d: "Plus loan stamp duty — borne by the developer." },
  { t: "Free MOT (Memorandum of Transfer)", d: "Transfer instrument cost borne by the developer." },
  { t: "Refund of excess", d: "If the loan amount exceeds the rebate, the excess is refunded by the developer upon vacant possession." }
];

/* ---- Site & sustainability features ---- */
const siteFeatures = [
  { icon: "leaf", title: "Rainwater Harvesting", text: "300 L tank capacity, for gardening and landscape irrigation." },
  { icon: "sun", title: "Solar System Infra Ready", text: "Provision for future solar panel installation." },
  { icon: "bolt", title: "EV Charger Infra Ready", text: "Provision for future EV charger installation." },
  { icon: "check", title: "Optimised Window Opening", text: "Opening sizes designed as required for ventilation and light." },
  { icon: "shield", title: "Reinforced Concrete Structure", text: "Reinforced concrete frame with masonry walls." },
  { icon: "layers", title: "Open-Plan Office", text: "First-floor open-plan office, flexible for growing businesses." }
];

/* ---- Due-diligence questions to confirm with the developer ---- */
const ddQuestions = [
  "Development licence (DL) and advertising & selling permit (APDL) numbers — to be obtained in writing before any booking.",
  "Exact liquidated-damages clause for late delivery, and the definition of the completion date (3 years from June 2026).",
  "Does the industrial unit fall outside the Housing Development Act (HDA)? Which SPA schedule applies and which protections carry over?",
  "Payment schedule: lump sum or progressive billing, and the milestone certification required before each call.",
  "The precise mechanics of the 10% credit note (basis of computation and when it is credited).",
  "Bumiputera quota / release mechanism, and whether the discount is reflected in the SPA price or as a rebate.",
  "Individual strata or individual land title for each factory unit, and the estimated issuance timing.",
  "Approved earthworks and soil conditions, plus the current progress of infrastructure for Phase 3B.",
  "Utility readiness: TNB supply point, water and sewerage (IWK) connection status for Phase 3B."
];

/* ---- Location & connectivity (developer claims in italics; verification notes kept honest) ---- */
const connectivity = [
  ["KLIA / KLIA2", "About 23 km via Route 32 (developer's figure)"],
  ["Nilai toll plaza (NSE/PLUS)", "Adjacent — high-visibility frontage along the corridor"],
  ["Main highways", "NSE (PLUS), ELITE, North-South Expressway Link (NLE)"],
  ["Seremban", "Neighbouring district in the same corridor"],
  ["Kuala Lumpur", "Via North-South Expressway"],
  ["Surrounding industrial ecosystem", "Nilai 3 wholesale city, Nilai Industrial Estate, Bandar Enstek area"]
];

/* ---- Gallery (illustrative imagery — see caption note) ---- */
const gallery = [
  { src: "assets/img/render-aerial.svg", cap: "Aerial impression — industrial park layout (illustration, not to scale)" },
  { src: "assets/img/render-front.svg", cap: "Factory frontage impression — 9 m clear height, covered loading (illustration)" },
  { src: "assets/img/render-interior.svg", cap: "Triple-volume warehouse interior impression (illustration)" },
  { src: "assets/img/site-plan.svg", cap: "Indicative site plan — Phase 3B (illustration, not to scale)" }
];

/* ---- FAQ ---- */
const faq = [
  ["What exactly is being sold?", "Freehold light industrial factory units in Phase 3B of XME Business Park 2, Nilai Impian, Negeri Sembilan — 20 semi-detached and 39 linked units, developed by Sime Darby Property Berhad."],
  ["Is the land freehold?", "Yes. The sales kit states a freehold light industrial title on converted land with full infrastructure. Confirm the individual title position with the developer before signing."],
  ["When is vacant possession?", "The stated timeline is three years from June 2026, an estimate of Q3 2029. Verify the contractual completion date in the SPA."],
  ["Can a 40-ft container truck enter?", "Semi-detached units are designed for 40-ft container trucks with multiple loading bays. Linked units cater to 20-ft trucks with front and rear loading."],
  ["Are foreigners or foreign companies eligible?", "Ownership conditions for industrial land are subject to state authority policy and developer approval. Ask the developer to confirm in writing for your structure."],
  ["What documentation does a bank need?", "Banks normally require SSM registration, financial statements or tax returns, director guarantees and, for investment purchases, an assessment of the tenant or intended use. Have these ready."]
];
