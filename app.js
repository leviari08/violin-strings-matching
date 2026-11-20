const ALL_NOTES = ["A", "B", "C", "D", "E", "F", "G"];

// Localization dictionary for English, Hebrew, and Russian
const TRANSLATIONS = {
  en: {
    pageTitle: "Which string is this?",
    brandTitle: "Which string is this?",
    brandSubtitle: "Match note letters to open strings or identify notes that don't exist",
    labelScore: "Score",
    labelBest: "Best",
    reset: "Reset",
    targetNote: "Target Note",
    notExist: "Doesn't exist",
    refTitle: "Open String Reference Guide",
    toggle: "(Toggle)",
    stringWord: "String",
    instruments: {
      violin: "Violin",
      viola: "Viola",
      cello: "Cello",
      bass: "Double Bass"
    },
    instrumentsPrep: {
      violin: "the violin",
      viola: "the viola",
      cello: "the cello",
      bass: "the double bass"
    },
    positions: {
      lowest: "Lowest",
      midLow: "Mid-low",
      midHigh: "Mid-high",
      highest: "Highest"
    },
    feedbackCorrectString: (roman, name) => `Correct! String ${roman} is ${name}.`,
    feedbackIncorrectString: (roman, name, note) => `Not quite — String ${roman} is ${name}, not ${note}. Try again!`,
    feedbackCorrectNotExist: (note, instPrep) => `Correct! ${note} is not an open string on ${instPrep}.`,
    feedbackIncorrectNotExist: (note, roman, instPrep) => `Not quite — ${note} is open String ${roman} on ${instPrep}. Try again!`
  },
  he: {
    pageTitle: "איזה מיתר זה?",
    brandTitle: "איזה מיתר זה?",
    brandSubtitle: "התאם את אות התו למיתר הפתוח או זהה תווים שלא קיימים",
    labelScore: "ניקוד",
    labelBest: "שיא",
    reset: "איפוס",
    targetNote: "תו מטרה",
    notExist: "לא קיים",
    refTitle: "מדריך מיתרים פתוחים",
    toggle: "(הצג)",
    stringWord: "מיתר",
    instruments: {
      violin: "כינור",
      viola: "ויולה",
      cello: "צ'לו",
      bass: "קונטרבס"
    },
    instrumentsPrep: {
      violin: "כינור",
      viola: "ויולה",
      cello: "צ'לו",
      bass: "קונטרבס"
    },
    positions: {
      lowest: "הנמוך ביותר",
      midLow: "בינוני-נמוך",
      midHigh: "בינוני-גבוה",
      highest: "הגבוה ביותר"
    },
    feedbackCorrectString: (roman, name) => `נכון! מיתר ${roman} הוא ${name}.`,
    feedbackIncorrectString: (roman, name, note) => `לא ממש — מיתר ${roman} הוא ${name}, לא ${note}. נסה שוב!`,
    feedbackCorrectNotExist: (note, instPrep) => `נכון! ${note} אינו מיתר פתוח ב${instPrep}.`,
    feedbackIncorrectNotExist: (note, roman, instPrep) => `לא ממש — ${note} הוא מיתר פתוח ${roman} ב${instPrep}. נסה שוב!`
  },
  ru: {
    pageTitle: "Какая это струна?",
    brandTitle: "Какая это струна?",
    brandSubtitle: "Сопоставьте ноты с открытыми струнами или определите ноты, которых нет",
    labelScore: "Счёт",
    labelBest: "Рекорд",
    reset: "Сброс",
    targetNote: "Целевая нота",
    notExist: "Не существует",
    refTitle: "Справочник открытых струн",
    toggle: "(Показать)",
    stringWord: "Струна",
    instruments: {
      violin: "Скрипка",
      viola: "Альт",
      cello: "Виолончель",
      bass: "Контрабас"
    },
    instrumentsPrep: {
      violin: "скрипке",
      viola: "альте",
      cello: "виолончели",
      bass: "контрабасе"
    },
    positions: {
      lowest: "Самая низкая",
      midLow: "Средне-низкая",
      midHigh: "Средне-высокая",
      highest: "Самая высокая"
    },
    feedbackCorrectString: (roman, name) => `Правильно! Струна ${roman} — это ${name}.`,
    feedbackIncorrectString: (roman, name, note) => `Не совсем — струна ${roman} — это ${name}, а не ${note}. Попробуйте ещё раз!`,
    feedbackCorrectNotExist: (note, instPrep) => `Правильно! Нота ${note} не является открытой струной на ${instPrep}.`,
    feedbackIncorrectNotExist: (note, roman, instPrep) => `Не совсем — ${note} — это открытая струна ${roman} на ${instPrep}. Попробуйте ещё раз!`
  }
};

// Instruments Configuration
const INSTRUMENTS = {
  violin: {
    id: "violin",
    shape: "violin",
    scale: 0.82,
    nutY: 78,
    neckTop: 54,
    neckBottom: 135,
    bridgeY: 265,
    tailY: 304,
    tailEnd: 356,
    saddleY: 362,
    endpinY: 368,
    hasEndpinRod: false,
    varnish: {
      highlight: "#f7ca75",
      mid1: "#e08832",
      mid2: "#a44618",
      dark: "#5c2108",
      stroke: "#381303",
      purfling: "#2b1004"
    },
    strings: [
      { name: "G", roman: "IV", posKey: "lowest", gauge: 3.6, stroke: "#d5dbe2" },
      { name: "D", roman: "III", posKey: "midLow", gauge: 2.8, stroke: "#cbd5e1" },
      { name: "A", roman: "II", posKey: "midHigh", gauge: 2.0, stroke: "#e2e8f0" },
      { name: "E", roman: "I", posKey: "highest", gauge: 1.2, stroke: "#f8fafc" }
    ]
  },
  viola: {
    id: "viola",
    shape: "viola",
    scale: 0.88,
    nutY: 76,
    neckTop: 52,
    neckBottom: 138,
    bridgeY: 267,
    tailY: 308,
    tailEnd: 358,
    saddleY: 364,
    endpinY: 370,
    hasEndpinRod: false,
    varnish: {
      highlight: "#f3be7c",
      mid1: "#cb722d",
      mid2: "#8d3712",
      dark: "#4c1a06",
      stroke: "#300e03",
      purfling: "#220902"
    },
    strings: [
      { name: "C", roman: "IV", posKey: "lowest", gauge: 4.0, stroke: "#d5dbe2" },
      { name: "G", roman: "III", posKey: "midLow", gauge: 3.0, stroke: "#cbd5e1" },
      { name: "D", roman: "II", posKey: "midHigh", gauge: 2.2, stroke: "#e2e8f0" },
      { name: "A", roman: "I", posKey: "highest", gauge: 1.4, stroke: "#f8fafc" }
    ]
  },
  cello: {
    id: "cello",
    shape: "cello",
    scale: 0.94,
    nutY: 74,
    neckTop: 50,
    neckBottom: 140,
    bridgeY: 269,
    tailY: 310,
    tailEnd: 360,
    saddleY: 366,
    endpinY: 372,
    hasEndpinRod: true,
    endpinLength: 26,
    varnish: {
      highlight: "#e9b578",
      mid1: "#b75f28",
      mid2: "#782b0d",
      dark: "#3d1304",
      stroke: "#260a02",
      purfling: "#1c0701"
    },
    strings: [
      { name: "C", roman: "IV", posKey: "lowest", gauge: 4.4, stroke: "#d5dbe2" },
      { name: "G", roman: "III", posKey: "midLow", gauge: 3.3, stroke: "#cbd5e1" },
      { name: "D", roman: "II", posKey: "midHigh", gauge: 2.4, stroke: "#e2e8f0" },
      { name: "A", roman: "I", posKey: "highest", gauge: 1.6, stroke: "#f8fafc" }
    ]
  },
  bass: {
    id: "bass",
    shape: "bass",
    scale: 1.0,
    nutY: 72,
    neckTop: 48,
    neckBottom: 142,
    bridgeY: 271,
    tailY: 312,
    tailEnd: 362,
    saddleY: 368,
    endpinY: 374,
    hasEndpinRod: true,
    endpinLength: 28,
    varnish: {
      highlight: "#d8ab79",
      mid1: "#9d5d2b",
      mid2: "#5e2f12",
      dark: "#331606",
      stroke: "#1f0c03",
      purfling: "#140601"
    },
    strings: [
      { name: "E", roman: "IV", posKey: "lowest", gauge: 5.0, stroke: "#d5dbe2" },
      { name: "A", roman: "III", posKey: "midLow", gauge: 3.8, stroke: "#cbd5e1" },
      { name: "D", roman: "II", posKey: "midHigh", gauge: 2.8, stroke: "#e2e8f0" },
      { name: "G", roman: "I", posKey: "highest", gauge: 1.9, stroke: "#f8fafc" }
    ]
  }
};

// Realistic body paths
const BODY_PATHS = {
  violin: "M 150 130 C 130 130, 92 144, 90 172 C 88 186, 95 192, 102 195 C 106 197, 114 207, 112 222 C 110 236, 104 246, 100 250 C 92 258, 76 278, 78 305 C 80 338, 112 365, 150 366 C 188 365, 220 338, 222 305 C 224 278, 208 258, 200 250 C 196 246, 190 236, 188 222 C 186 207, 194 197, 198 195 C 205 192, 212 186, 210 172 C 208 144, 170 130, 150 130 Z",
  viola: "M 150 128 C 126 128, 88 142, 86 174 C 84 188, 92 194, 100 197 C 104 200, 113 210, 111 224 C 109 238, 102 248, 97 252 C 88 260, 72 282, 74 310 C 76 342, 110 369, 150 370 C 190 369, 224 342, 226 310 C 228 282, 212 260, 203 252 C 198 248, 191 238, 189 224 C 187 210, 196 200, 200 197 C 208 194, 216 188, 214 174 C 212 142, 174 128, 150 128 Z",
  cello: "M 150 125 C 124 126, 84 140, 80 174 C 76 193, 89 201, 98 204 C 103 207, 110 216, 108 229 C 106 242, 98 252, 93 256 C 83 266, 67 288, 71 316 C 75 350, 108 373, 150 374 C 192 373, 225 350, 229 316 C 233 288, 217 266, 207 256 C 202 252, 194 242, 192 229 C 190 216, 197 207, 202 204 C 211 201, 224 193, 220 174 C 216 140, 176 126, 150 125 Z",
  bass: "M 150 122 L 96 170 C 82 184, 78 204, 90 228 C 96 240, 106 248, 104 259 C 102 270, 91 282, 86 290 C 73 308, 71 334, 88 358 C 104 374, 138 378, 150 378 C 162 378, 196 374, 212 358 C 229 334, 227 308, 214 290 C 209 282, 198 270, 196 259 C 194 248, 204 240, 210 228 C 222 204, 218 184, 204 170 L 150 122 Z"
};

// Spaced string coordinates: exactly 28px spacing at Bridge
const NUT_X = [117, 139, 161, 183];
const BRIDGE_X = [108, 136, 164, 192];
const TAIL_X = [112, 137, 163, 188];

// State
let currentLang = loadLanguage();
let currentInstId = "violin";
let currentNote = "";
let score = 0;
let best = loadBest();
let isLocked = false;
let roundToken = 0;

// DOM Elements
const pageTitleEl = document.getElementById("page-title");
const brandTitleEl = document.getElementById("brand-title");
const brandSubtitleEl = document.getElementById("brand-subtitle");
const labelScoreEl = document.getElementById("label-score");
const labelBestEl = document.getElementById("label-best");
const resetBtn = document.getElementById("reset-btn");
const labelTargetNoteEl = document.getElementById("label-target-note");
const targetNoteEl = document.getElementById("target-note");
const feedbackEl = document.getElementById("feedback");
const labelNotExistEl = document.getElementById("label-not-exist");
const labelRefTitleEl = document.getElementById("label-ref-title");
const labelRefToggleEl = document.getElementById("label-ref-toggle");
const scoreEl = document.getElementById("score");
const bestEl = document.getElementById("best");
const canvasContainer = document.getElementById("canvas-container");
const stringButtonsEl = document.getElementById("string-buttons");
const notExistBtn = document.getElementById("not-exist-btn");
const refContentEl = document.getElementById("ref-content");
const srAnnouncements = document.getElementById("sr-announcements");
const navButtons = document.querySelectorAll(".nav-btn");
const langButtons = document.querySelectorAll(".lang-btn");

function loadLanguage() {
  try {
    const saved = localStorage.getItem("which_string_lang");
    if (saved && TRANSLATIONS[saved]) return saved;
  } catch (e) {}
  return "en";
}

function saveLanguage(lang) {
  try {
    localStorage.setItem("which_string_lang", lang);
  } catch (e) {}
}

function loadBest() {
  try {
    return Number(localStorage.getItem("which_string_best_streak")) || 0;
  } catch (e) {
    return 0;
  }
}

function saveBest(val) {
  try {
    localStorage.setItem("which_string_best_streak", String(val));
  } catch (e) {}
}

function updateStats() {
  scoreEl.textContent = String(score);
  bestEl.textContent = String(best);
}

// Compact realistic F-hole
function renderFHole(x, y, flip) {
  const transform = flip ? 'transform="translate(' + x + ',' + y + ') scale(-0.85, 0.85)"' : 'transform="translate(' + x + ',' + y + ') scale(0.85, 0.85)"';
  return (
    '<g ' + transform + '>' +
      '<path d="M 0 0 C 4 -10, 12 -15, 18 -12 C 24 -8, 22 2, 14 8 C 6 13, 2 24, 4 40 C 6 52, 12 62, 18 72 C 24 80, 20 90, 12 90 C 4 90, -4 80, 0 70 C 4 60, -2 48, -5 36 C -8 24, -5 12, 0 0 Z" fill="#140803" opacity="0.95"/>' +
      '<circle cx="16" cy="-6" r="3.5" fill="#0d0401"/>' +
      '<circle cx="6" cy="82" r="4.5" fill="#0d0401"/>' +
      '<polygon points="-2,38 -6,38 -3,42" fill="#2a1408"/>' +
      '<polygon points="4,40 8,40 5,44" fill="#2a1408"/>' +
    '</g>'
  );
}

// Bridge spanning 28px-spaced strings
function renderBridge(y) {
  return (
    '<g class="bridge-group" transform="translate(150, ' + y + ')">' +
      '<ellipse cx="0" cy="15" rx="52" ry="5" fill="rgba(0,0,0,0.25)"/>' +
      '<path d="M -52 12 C -52 6, -44 3, -34 2 C -24 1, -12 0, 0 0 C 12 0, 24 1, 34 2 C 44 3, 52 6, 52 12 L 46 16 C 36 16, 28 13, 20 13 C 12 13, 8 15, 0 15 C -8 15, -12 13, -20 13 C -28 13, -36 16, -46 16 Z" fill="#e0bc87" stroke="#9d7443" stroke-width="0.9"/>' +
      '<path d="M 0 4 C -2.5 2, -5 4, 0 9.5 C 5 4, 2.5 2, 0 4 Z" fill="#3c2612"/>' +
      '<ellipse cx="-23" cy="6.5" rx="3.2" ry="1.9" fill="#3c2612" transform="rotate(-15 -23 6.5)"/>' +
      '<ellipse cx="23" cy="6.5" rx="3.2" ry="1.9" fill="#3c2612" transform="rotate(15 23 6.5)"/>' +
    '</g>'
  );
}

// Tailpiece supporting 28px-spaced strings
function renderTailpiece(startY, endY, saddleY, endpinY, hasEndpinRod, endpinLength) {
  const rod = hasEndpinRod
    ? '<rect x="148.5" y="' + endpinY + '" width="3" height="' + endpinLength + '" fill="#cbd5e1" stroke="#64748b" stroke-width="0.8"/><circle cx="150" cy="' + (endpinY + endpinLength) + '" r="4" fill="#475569"/>'
    : '';

  return (
    '<g class="tailpiece-group">' +
      '<path d="M 104 ' + startY + ' L 196 ' + startY + ' L 163 ' + endY + ' L 137 ' + endY + ' Z" fill="rgba(0,0,0,0.3)" transform="translate(1.5, 3)"/>' +
      '<path d="M 104 ' + startY + ' C 122 ' + (startY - 3) + ', 178 ' + (startY - 3) + ', 196 startY L 163 ' + endY + ' C 161 ' + (endY + 2) + ', 139 ' + (endY + 2) + ', 137 endY Z" fill="#181412" stroke="#2d2522" stroke-width="1.2"/>' +
      '<path d="M 142 ' + endY + ' L 145 ' + saddleY + ' M 158 ' + endY + ' L 155 ' + saddleY + '" stroke="#0f0c0b" stroke-width="2" stroke-linecap="round"/>' +
      '<circle cx="150" cy="' + endpinY + '" r="4" fill="#140f0c" stroke="#4a3b32" stroke-width="0.8"/>' +
      '<circle cx="188" cy="' + (startY + 8) + '" r="2.2" fill="#d4af37" stroke="#997b1a" stroke-width="0.6"/>' +
      rod +
    '</g>'
  );
}

// Compact realistic Chinrest
function renderChinrest() {
  return (
    '<g class="chinrest-group">' +
      '<path d="M 82 322 C 90 308, 118 312, 126 328 C 131 342, 123 358, 108 361 C 93 362, 78 346, 82 322 Z" fill="rgba(0,0,0,0.28)"/>' +
      '<path d="M 80 319 C 88 305, 116 309, 124 325 C 129 339, 121 355, 106 358 C 91 359, 76 343, 80 319 Z" fill="#1c1613" stroke="#362923" stroke-width="1.2"/>' +
      '<rect x="98" y="361" width="3.5" height="6" rx="1" fill="#cbd5e1" stroke="#64748b" stroke-width="0.6"/>' +
      '<rect x="108" y="360" width="3.5" height="6" rx="1" fill="#cbd5e1" stroke="#64748b" stroke-width="0.6"/>' +
    '</g>'
  );
}

// Well-framed SVG Renderer (viewBox: 48 0 204 416) so all instruments stay 100% inside container
function renderSvg(inst) {
  const gidVarnish = "varnish-" + inst.id;
  const gidFingerboard = "fb-" + inst.id;
  const v = inst.varnish;
  const bodyPath = BODY_PATHS[inst.shape];

  const topY = inst.nutY - 6;
  const bY = inst.bridgeY;
  const botY = inst.tailEnd + 14;

  const hitPolygons = [
    `48,${topY} 128,${topY} 122,${bY} 124.5,${botY} 48,${botY} 48,${bY}`,
    `128,${topY} 150,${topY} 150,${bY} 150,${botY} 124.5,${botY} 122,${bY}`,
    `150,${topY} 172,${topY} 178,${bY} 175.5,${botY} 150,${botY} 150,${bY}`,
    `172,${topY} 252,${topY} 252,${bY} 252,${botY} 175.5,${botY} 178,${bY}`
  ];

  const stringsSvg = inst.strings.map((s, i) => {
    const nX = NUT_X[i];
    const bX = BRIDGE_X[i];
    const tX = TAIL_X[i];

    return (
      '<g class="str" data-index="' + i + '" tabindex="0" role="button" aria-label="String ' + s.roman + '">' +
        '<polygon class="str-hit" points="' + hitPolygons[i] + '" fill="transparent"/>' +
        '<polyline class="str-line" points="' + nX + ',' + (inst.nutY + 3) + ' ' + bX + ',' + inst.bridgeY + ' ' + tX + ',' + inst.tailY + '" fill="none" stroke="' + s.stroke + '" stroke-width="' + s.gauge + '" stroke-linejoin="round" stroke-linecap="round"/>' +
      '</g>'
    );
  }).join("");

  return (
    '<svg viewBox="48 0 204 416" role="img" aria-label="' + inst.id + ' illustration">' +
      '<defs>' +
        '<radialGradient id="' + gidVarnish + '" cx="50%" cy="60%" r="55%" fx="50%" fy="52%">' +
          '<stop offset="0%" stop-color="' + v.highlight + '"/>' +
          '<stop offset="38%" stop-color="' + v.mid1 + '"/>' +
          '<stop offset="76%" stop-color="' + v.mid2 + '"/>' +
          '<stop offset="100%" stop-color="' + v.dark + '"/>' +
        '</radialGradient>' +
        '<linearGradient id="' + gidFingerboard + '" x1="0" y1="0" x2="1" y2="0">' +
          '<stop offset="0%" stop-color="#14110f"/>' +
          '<stop offset="50%" stop-color="#2a2522"/>' +
          '<stop offset="100%" stop-color="#14110f"/>' +
        '</linearGradient>' +
      '</defs>' +

      /* Neck back */
      '<rect x="114" y="' + inst.neckTop + '" width="72" height="' + (inst.neckBottom - inst.neckTop) + '" rx="5" fill="#9e6638" stroke="#523218" stroke-width="1.2"/>' +

      /* Scroll & Pegbox */
      '<g class="scroll-group">' +
        '<rect x="127" y="38" width="46" height="34" rx="6" fill="#a46938" stroke="#4e2c14" stroke-width="1.6"/>' +
        '<rect x="131" y="40" width="38" height="30" rx="3" fill="#201108"/>' +
        '<circle cx="150" cy="24" r="14" fill="#b87a42" stroke="#4e2c14" stroke-width="1.6"/>' +
        '<path d="M 144 19 C 153 10, 161 18, 156 27 C 153 32, 145 29, 147 24" fill="none" stroke="#4e2c14" stroke-width="2" stroke-linecap="round"/>' +
        '<circle cx="150" cy="24" r="2.8" fill="#4e2c14"/>' +
        '<rect x="105" y="44" width="24" height="5.5" rx="2.7" fill="#18120e" stroke="#382920" stroke-width="0.8" transform="rotate(-15 117 46)"/>' +
        '<rect x="105" y="57" width="24" height="5.5" rx="2.7" fill="#18120e" stroke="#382920" stroke-width="0.8" transform="rotate(-8 117 59)"/>' +
        '<rect x="171" y="44" width="24" height="5.5" rx="2.7" fill="#18120e" stroke="#382920" stroke-width="0.8" transform="rotate(15 183 46)"/>' +
        '<rect x="171" y="57" width="24" height="5.5" rx="2.7" fill="#18120e" stroke="#382920" stroke-width="0.8" transform="rotate(8 183 59)"/>' +
      '</g>' +

      /* Body */
      '<path d="' + bodyPath + '" fill="url(#' + gidVarnish + ')" stroke="' + v.stroke + '" stroke-width="2.5"/>' +

      /* Purfling */
      '<path d="' + bodyPath + '" fill="none" stroke="' + v.purfling + '" stroke-width="1" transform="translate(150, 248) scale(0.96) translate(-150, -248)" opacity="0.8"/>' +
      '<path d="' + bodyPath + '" fill="none" stroke="' + v.purfling + '" stroke-width="1" transform="translate(150, 248) scale(0.94) translate(-150, -248)" opacity="0.8"/>' +

      /* Sheen */
      '<ellipse cx="150" cy="225" rx="26" ry="54" fill="rgba(255, 255, 255, 0.08)"/>' +

      /* F-Holes */
      renderFHole(88, inst.bridgeY - 34, false) +
      renderFHole(212, inst.bridgeY - 34, true) +

      /* Fingerboard */
      '<polygon points="112,' + inst.nutY + ' 188,' + inst.nutY + ' 198,' + (inst.neckBottom + 70) + ' 102,' + (inst.neckBottom + 70) + '" fill="url(#' + gidFingerboard + ')" stroke="#110d0a" stroke-width="1"/>' +
      '<path d="M 102 ' + (inst.neckBottom + 70) + ' Q 150 ' + (inst.neckBottom + 76) + ' 198 ' + (inst.neckBottom + 70) + '" stroke="#0d0a08" stroke-width="1.6" fill="none"/>' +

      /* Nut */
      '<rect x="112" y="' + inst.nutY + '" width="76" height="4.5" rx="1.2" fill="#eedcc4" stroke="#a48c6e" stroke-width="0.6"/>' +

      /* Tailpiece & Saddle */
      renderTailpiece(inst.tailY, inst.tailEnd, inst.saddleY, inst.endpinY, inst.hasEndpinRod, inst.endpinLength || 25) +

      /* Chinrest (violin / viola) */
      (inst.id === "violin" || inst.id === "viola" ? renderChinrest() : "") +

      /* Bridge */
      renderBridge(inst.bridgeY) +

      /* 4 Strings */
      stringsSvg +
    '</svg>'
  );
}

function renderStage() {
  const inst = INSTRUMENTS[currentInstId];
  const t = TRANSLATIONS[currentLang];

  // Render SVG and apply proportional scale
  canvasContainer.innerHTML = renderSvg(inst);
  canvasContainer.style.transform = 'scale(' + inst.scale + ')';

  // Render 4 String Buttons (IV, III, II, I) - Localized labels, NO note letters
  stringButtonsEl.innerHTML = "";
  inst.strings.forEach((s, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "string-btn";
    btn.dataset.index = index;
    const posLabel = t.positions[s.posKey] || "";
    btn.setAttribute("aria-label", t.stringWord + " " + s.roman + " (" + posLabel + ")");

    btn.innerHTML =
      '<div class="btn-info">' +
        '<span class="btn-num">' + t.stringWord + ' ' + s.roman + '</span>' +
        '<span class="btn-sub">' + posLabel + '</span>' +
      '</div>' +
      '<span class="btn-key" aria-hidden="true">' + (index + 1) + '</span>';

    btn.addEventListener("click", () => handleSelectString(index));

    btn.addEventListener("mouseenter", () => toggleHoverState(index, true));
    btn.addEventListener("mouseleave", () => toggleHoverState(index, false));
    btn.addEventListener("focus", () => toggleHoverState(index, true));
    btn.addEventListener("blur", () => toggleHoverState(index, false));

    stringButtonsEl.appendChild(btn);
  });

  // SVG Click handlers & Hover sync
  const svg = canvasContainer.querySelector("svg");
  svg.querySelectorAll(".str").forEach((strGroup) => {
    const idx = Number(strGroup.dataset.index);

    strGroup.addEventListener("click", () => handleSelectString(idx));
    strGroup.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSelectString(idx);
      }
    });

    strGroup.addEventListener("mouseenter", () => toggleHoverState(idx, true));
    strGroup.addEventListener("mouseleave", () => toggleHoverState(idx, false));
  });

  // Render Open String Reference Guide
  renderReferenceGuide(inst);
}

function renderReferenceGuide(inst) {
  const t = TRANSLATIONS[currentLang];

  refContentEl.innerHTML =
    '<div class="ref-grid">' +
      inst.strings.map(s => (
        '<div class="ref-item">' +
          '<strong>' + t.stringWord + ' ' + s.roman + ': ' + s.name + '</strong>' +
          '<span>(' + (t.positions[s.posKey] || "") + ')</span>' +
        '</div>'
      )).join("") +
    '</div>';
}

function applyLanguage(lang) {
  currentLang = lang;
  saveLanguage(lang);
  const t = TRANSLATIONS[lang];

  // Set RTL for Hebrew, LTR for English and Russian
  document.documentElement.dir = (lang === "he") ? "rtl" : "ltr";
  document.documentElement.lang = lang;

  // Update Language Buttons active state
  langButtons.forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("active", isActive);
  });

  // Update Static Texts
  pageTitleEl.textContent = t.pageTitle;
  brandTitleEl.textContent = t.brandTitle;
  brandSubtitleEl.textContent = t.brandSubtitle;
  labelScoreEl.textContent = t.labelScore;
  labelBestEl.textContent = t.labelBest;
  resetBtn.textContent = t.reset;
  resetBtn.title = t.reset;
  labelTargetNoteEl.textContent = t.targetNote;
  labelNotExistEl.textContent = t.notExist;
  labelRefTitleEl.textContent = t.refTitle;
  labelRefToggleEl.textContent = t.toggle;

  // Update Instrument Nav buttons text
  navButtons.forEach(btn => {
    const instId = btn.dataset.inst;
    if (t.instruments[instId]) {
      btn.textContent = t.instruments[instId];
    }
  });

  // Re-render stage and reference guide for localized labels
  renderStage();
}

function toggleHoverState(index, isHovering) {
  const strGroup = canvasContainer.querySelector('.str[data-index="' + index + '"]');
  const btn = stringButtonsEl.querySelector('.string-btn[data-index="' + index + '"]');
  if (strGroup) strGroup.classList.toggle("active-hover", isHovering);
  if (btn) btn.classList.toggle("active-hover", isHovering);
}

function nextNote() {
  const inst = INSTRUMENTS[currentInstId];
  const openNotes = inst.strings.map(s => s.name);
  const notOpenNotes = ALL_NOTES.filter(n => !openNotes.includes(n));

  // ~60% chance for an open string, ~40% for a non-open note
  let pool = Math.random() < 0.6 ? openNotes : notOpenNotes;

  let candidates = pool.filter(n => n !== currentNote);
  if (candidates.length === 0) candidates = ALL_NOTES.filter(n => n !== currentNote);
  if (candidates.length === 0) candidates = ALL_NOTES;

  currentNote = candidates[Math.floor(Math.random() * candidates.length)];
  targetNoteEl.textContent = currentNote;

  isLocked = false;
  clearHighlights();
  feedbackEl.className = "feedback-banner";
  feedbackEl.textContent = "";

  srAnnouncements.textContent = currentNote;
}

function clearHighlights() {
  canvasContainer.querySelectorAll(".state-correct, .state-error").forEach(el => {
    el.classList.remove("state-correct", "state-error");
  });
  stringButtonsEl.querySelectorAll(".state-correct, .state-error").forEach(el => {
    el.classList.remove("state-correct", "state-error");
  });
  notExistBtn.classList.remove("state-correct", "state-error");
}

function handleSelectString(index) {
  if (isLocked) return;

  const inst = INSTRUMENTS[currentInstId];
  const selectedString = inst.strings[index];
  const strGroup = canvasContainer.querySelector('.str[data-index="' + index + '"]');
  const btn = stringButtonsEl.querySelector('.string-btn[data-index="' + index + '"]');
  const t = TRANSLATIONS[currentLang];

  if (selectedString.name === currentNote) {
    handleSuccess(
      [strGroup, btn],
      t.feedbackCorrectString(selectedString.roman, selectedString.name)
    );
  } else {
    handleFailure(
      [strGroup, btn],
      t.feedbackIncorrectString(selectedString.roman, selectedString.name, currentNote)
    );
  }
}

function handleSelectNotExist() {
  if (isLocked) return;

  const inst = INSTRUMENTS[currentInstId];
  const match = inst.strings.find(s => s.name === currentNote);
  const t = TRANSLATIONS[currentLang];
  const instPrep = t.instrumentsPrep[inst.id] || t.instruments[inst.id];

  if (!match) {
    handleSuccess(
      [notExistBtn],
      t.feedbackCorrectNotExist(currentNote, instPrep)
    );
  } else {
    handleFailure(
      [notExistBtn],
      t.feedbackIncorrectNotExist(currentNote, match.roman, instPrep)
    );
  }
}

function handleSuccess(elements, message) {
  isLocked = true;
  score += 1;
  if (score > best) {
    best = score;
    saveBest(best);
  }
  updateStats();

  elements.forEach(el => el && el.classList.add("state-correct"));
  feedbackEl.textContent = message;
  feedbackEl.className = "feedback-banner success show";

  const thisToken = ++roundToken;
  setTimeout(() => {
    if (thisToken === roundToken) {
      nextNote();
    }
  }, 650);
}

function handleFailure(elements, message) {
  score = 0; // Streak resets to 0
  updateStats();

  elements.forEach(el => el && el.classList.add("state-error"));
  feedbackEl.textContent = message;
  feedbackEl.className = "feedback-banner error show";

  setTimeout(() => {
    elements.forEach(el => el && el.classList.remove("state-error"));
  }, 480);
}

function setInstrument(instId) {
  if (!INSTRUMENTS[instId]) return;
  currentInstId = instId;

  navButtons.forEach(btn => {
    const isActive = btn.dataset.inst === instId;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  renderStage();
  nextNote();
}

// Event Listeners
navButtons.forEach(btn => {
  btn.addEventListener("click", () => setInstrument(btn.dataset.inst));
});

langButtons.forEach(btn => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

notExistBtn.addEventListener("click", handleSelectNotExist);

resetBtn.addEventListener("click", () => {
  score = 0;
  updateStats();
  nextNote();
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
  const key = e.key;

  if (key >= "1" && key <= "4") {
    e.preventDefault();
    const index = Number(key) - 1;
    handleSelectString(index);
  } else if (key === "0" || key === " " || key.toLowerCase() === "n" || key.toLowerCase() === "x") {
    e.preventDefault();
    handleSelectNotExist();
  }
});

// Initialize
updateStats();
applyLanguage(currentLang);
nextNote();
