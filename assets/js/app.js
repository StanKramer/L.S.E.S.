/* ===================================================
   DOCX APP — Bulle, couleurs par sujet, persistance
   Nécessite: docx_quotes.js (ESM import)
   =================================================== */

/* ---------- Chargement dynamique (footer) — optionnel ----------
   Place simplement un <div id="footer-container"></div> dans tes pages
   et décommente la fonction + l’appel si tu veux l’utiliser ici.
*/
// (async function loadFooter() {
//   try {
//     // Déduit le chemin d'assets depuis la présence du CSS global
//     const css = document.querySelector('link[href*="assets/css/style.css"]');
//     const base = new URL(css ? css.getAttribute('href') : 'assets/css/style.css', document.baseURI)
//                    .href.replace(/css\/style\.css$/, '');
//     const res = await fetch(base + 'components/footer.html', { cache: 'no-store' });
//     const html = await res.text();
//     const slot = document.getElementById('footer-container');
//     if (slot) slot.innerHTML = html;
//   } catch (e) { console.warn('Footer non chargé:', e); }
// })();

/* ---------- Import des quotes (ESM) ----------
   Sur tes pages, importe comme :
   <script type="module" src="assets/js/app.js"></script>
   (et adapte le chemin relatif si page dans un sous-dossier)
*/
import { getAllDocxQuotes } from './docx_quotes.js';

/* ---------- Thèmes par sujet (couleurs d’émotion) ---------- */
const SUBJECT_THEME = {
  general:  { border: '#73e5ff', glow: 'rgba(115,229,255,0.35)', text: '#cfe8ff' },
  system:   { border: '#7cf7d1', glow: 'rgba(124,247,209,0.35)', text: '#dffef2' },
  PiouPiou: { border: '#53c7ff', glow: 'rgba(83,199,255,0.40)',  text: '#d7f1ff' },
  "69":     { border: '#ffd166', glow: 'rgba(255,209,102,0.35)', text: '#fff1cc' },
  "01":     { border: '#e0b3ff', glow: 'rgba(224,179,255,0.35)', text: '#f3e6ff' },
  Tutur:    { border: '#8fd3ff', glow: 'rgba(143,211,255,0.35)', text: '#e9f6ff' },
  Volley:   { border: '#9ae6ff', glow: 'rgba(154,230,255,0.35)', text: '#e4f9ff' },
  Canasson: { border: '#ffa7a7', glow: 'rgba(255,167,167,0.35)', text: '#ffe3e3' },
  "63":     { border: '#ffb6e6', glow: 'rgba(255,182,230,0.35)', text: '#ffe8f6' },
  Loris:    { border: '#ffcc99', glow: 'rgba(255,204,153,0.35)', text: '#fff0e0' },
  chalet:   { border: '#86f7ff', glow: 'rgba(134,247,255,0.35)', text: '#e6fdff' },
};

/* ---------- Création de la bulle DocX ---------- */
function createBubble() {
  let bubble = document.getElementById('docxBubble');
  if (bubble) return bubble;

  bubble = document.createElement('div');
  bubble.id = 'docxBubble';
  Object.assign(bubble.style, {
    position: 'fixed',
    right: '20px',
    bottom: '85px', // laisse la place au footer fixe
    maxWidth: '360px',
    padding: '14px 16px',
    borderRadius: '12px',
    border: '1px solid rgba(115,229,255,0.4)',
    background: 'rgba(0,15,30,0.92)',
    color: '#cfe8ff',
    boxShadow: '0 0 14px rgba(115,229,255,0.28)',
    fontFamily: 'Oxanium, system-ui, sans-serif',
    fontSize: '14px',
    lineHeight: '1.5',
    zIndex: 1000,
    transition: 'opacity .45s ease, box-shadow .3s ease, border-color .3s ease, color .3s ease',
    cursor: 'default',
    userSelect: 'none',
  });

  const tag = document.createElement('div');
  tag.textContent = '[DocX]';
  Object.assign(tag.style, {
    fontWeight: '800',
    letterSpacing: '.02em',
    marginBottom: '6px',
    opacity: .9,
    fontSize: '12px',
  });

  const text = document.createElement('div');
  text.id = 'docxText';

  bubble.appendChild(tag);
  bubble.appendChild(text);
  document.body.appendChild(bubble);
  return bubble;
}

/* ---------- Application du thème selon le sujet ---------- */
function applyTheme(bubble, subject = 'general') {
  const t = SUBJECT_THEME[subject] || SUBJECT_THEME.general;
  bubble.style.borderColor = t.border;
  bubble.style.boxShadow = `0 0 14px ${t.glow}`;
  bubble.style.color = t.text;
}

/* ---------- Rotation des quotes (pause on hover, click to next) ---------- */
const STORAGE_KEY_INDEX = 'docx_quote_index_v2';
let QUOTES = getAllDocxQuotes();  // objets {text, subject, mood}
let idx = parseInt(localStorage.getItem(STORAGE_KEY_INDEX) || '0', 10);
if (Number.isNaN(idx) || idx < 0 || idx >= QUOTES.length) idx = 0;

const bubble = createBubble();
const textBox = bubble.querySelector('#docxText');

let timer = null;
function showQuote(i) {
  const q = QUOTES[i];
  applyTheme(bubble, q.subject);
  bubble.style.opacity = '0';
  setTimeout(() => {
    textBox.textContent = q.text;
    bubble.style.opacity = '1';
  }, 200);
  localStorage.setItem(STORAGE_KEY_INDEX, String(i));
}

function nextQuote() {
  idx = (idx + 1) % QUOTES.length;
  showQuote(idx);
}

function startRotation() {
  stopRotation();
  timer = setInterval(nextQuote, 9000);
}

function stopRotation() {
  if (timer) clearInterval(timer);
  timer = null;
}

bubble.addEventListener('mouseenter', stopRotation);
bubble.addEventListener('mouseleave', startRotation);
bubble.addEventListener('click', nextQuote);

/* ---------- Démarrage ---------- */
showQuote(idx);
startRotation();

/* ---------- Optionnel : cacher proprement un écran de boot s'il existe ---------- */
const boot = document.getElementById('boot-screen');
if (boot) {
  // Si ta page utilise un écran d’amorçage, on s’assure qu’il se masque bien
  setTimeout(() => boot.classList.add('hide'), 3000);
}
