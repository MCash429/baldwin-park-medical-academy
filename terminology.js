/* =========================================================
   Medical Terminology — data + interactivity
   Three modes share one data set: Study (flashcards),
   Match (timed matching game), Quiz (multiple choice).
   ========================================================= */

const TERMS = [
  // --- Word roots (the core meaning of a term) ---
  { id: 'r-cardi', term: 'cardi/o', type: 'root', level: 1, meaning: 'heart', example: 'cardiology', exampleMeaning: 'the study of the heart' },
  { id: 'r-gastr', term: 'gastr/o', type: 'root', level: 1, meaning: 'stomach', example: 'gastritis', exampleMeaning: 'inflammation of the stomach' },
  { id: 'r-hepat', term: 'hepat/o', type: 'root', level: 1, meaning: 'liver', example: 'hepatitis', exampleMeaning: 'inflammation of the liver' },
  { id: 'r-nephr', term: 'nephr/o', type: 'root', level: 1, meaning: 'kidney', example: 'nephrology', exampleMeaning: 'the study of the kidneys' },
  { id: 'r-neur', term: 'neur/o', type: 'root', level: 1, meaning: 'nerve', example: 'neuropathy', exampleMeaning: 'disease of the nerves' },
  { id: 'r-oste', term: 'oste/o', type: 'root', level: 1, meaning: 'bone', example: 'osteoporosis', exampleMeaning: 'a condition of porous, weakened bone' },
  { id: 'r-arthr', term: 'arthr/o', type: 'root', level: 1, meaning: 'joint', example: 'arthritis', exampleMeaning: 'inflammation of a joint' },
  { id: 'r-my', term: 'my/o', type: 'root', level: 1, meaning: 'muscle', example: 'myalgia', exampleMeaning: 'muscle pain' },
  { id: 'r-derm', term: 'dermat/o', type: 'root', level: 1, meaning: 'skin', example: 'dermatitis', exampleMeaning: 'inflammation of the skin' },
  { id: 'r-hemat', term: 'hemat/o', type: 'root', level: 1, meaning: 'blood', example: 'hematology', exampleMeaning: 'the study of blood' },
  { id: 'r-rhin', term: 'rhin/o', type: 'root', level: 1, meaning: 'nose', example: 'rhinitis', exampleMeaning: 'inflammation of the nose' },
  { id: 'r-ot', term: 'ot/o', type: 'root', level: 1, meaning: 'ear', example: 'otitis', exampleMeaning: 'inflammation of the ear' },
  { id: 'r-ophthalm', term: 'ophthalm/o', type: 'root', level: 1, meaning: 'eye', example: 'ophthalmology', exampleMeaning: 'the study of the eyes' },
  { id: 'r-cyt', term: 'cyt/o', type: 'root', level: 1, meaning: 'cell', example: 'cytology', exampleMeaning: 'the study of cells' },
  { id: 'r-path', term: 'path/o', type: 'root', level: 1, meaning: 'disease', example: 'pathology', exampleMeaning: 'the study of disease' },
  { id: 'r-pulmon', term: 'pulmon/o', type: 'root', level: 1, meaning: 'lung', example: 'pulmonology', exampleMeaning: 'the study of the lungs' },
  { id: 'r-crani', term: 'crani/o', type: 'root', level: 1, meaning: 'skull', example: 'craniotomy', exampleMeaning: 'a surgical incision into the skull' },
  { id: 'r-enter', term: 'enter/o', type: 'root', level: 1, meaning: 'intestine', example: 'enteritis', exampleMeaning: 'inflammation of the intestine' },

  // --- Prefixes (attach to the front of a term) ---
  { id: 'p-brady', term: 'brady-', type: 'prefix', level: 1, meaning: 'slow', example: 'bradycardia', exampleMeaning: 'an abnormally slow heart rate' },
  { id: 'p-tachy', term: 'tachy-', type: 'prefix', level: 1, meaning: 'fast', example: 'tachycardia', exampleMeaning: 'an abnormally fast heart rate' },
  { id: 'p-hyper', term: 'hyper-', type: 'prefix', level: 1, meaning: 'excessive, above normal', example: 'hypertension', exampleMeaning: 'higher than normal blood pressure' },
  { id: 'p-hypo', term: 'hypo-', type: 'prefix', level: 1, meaning: 'deficient, below normal', example: 'hypotension', exampleMeaning: 'lower than normal blood pressure' },
  { id: 'p-a', term: 'a-/an-', type: 'prefix', level: 1, meaning: 'without, not', example: 'apnea', exampleMeaning: 'the absence of breathing' },
  { id: 'p-dys', term: 'dys-', type: 'prefix', level: 1, meaning: 'difficult, painful, abnormal', example: 'dyspnea', exampleMeaning: 'difficult or labored breathing' },
  { id: 'p-endo', term: 'endo-', type: 'prefix', level: 1, meaning: 'within, inner', example: 'endoscopy', exampleMeaning: 'looking inside the body with a scope' },
  { id: 'p-epi', term: 'epi-', type: 'prefix', level: 1, meaning: 'upon, above', example: 'epidermis', exampleMeaning: 'the outer layer that sits upon the skin' },
  { id: 'p-hemi', term: 'hemi-', type: 'prefix', level: 1, meaning: 'half', example: 'hemiplegia', exampleMeaning: 'paralysis of one half of the body' },
  { id: 'p-poly', term: 'poly-', type: 'prefix', level: 1, meaning: 'many, much', example: 'polyuria', exampleMeaning: 'producing an unusually large amount of urine' },
  { id: 'p-sub', term: 'sub-', type: 'prefix', level: 1, meaning: 'under, below', example: 'subcutaneous', exampleMeaning: 'located under the skin' },
  { id: 'p-inter', term: 'inter-', type: 'prefix', level: 1, meaning: 'between', example: 'intercostal', exampleMeaning: 'located between the ribs' },
  { id: 'p-intra', term: 'intra-', type: 'prefix', level: 1, meaning: 'within', example: 'intravenous', exampleMeaning: 'within, or into, a vein' },
  { id: 'p-peri', term: 'peri-', type: 'prefix', level: 1, meaning: 'around', example: 'pericardium', exampleMeaning: 'the sac surrounding the heart' },
  { id: 'p-anti', term: 'anti-', type: 'prefix', level: 1, meaning: 'against', example: 'antibiotic', exampleMeaning: 'a drug that works against living microbes' },

  // --- Suffixes (attach to the end of a term) ---
  { id: 's-itis', term: '-itis', type: 'suffix', level: 1, meaning: 'inflammation', example: 'appendicitis', exampleMeaning: 'inflammation of the appendix' },
  { id: 's-osis', term: '-osis', type: 'suffix', level: 1, meaning: 'abnormal condition', example: 'necrosis', exampleMeaning: 'the abnormal death of tissue' },
  { id: 's-ectomy', term: '-ectomy', type: 'suffix', level: 1, meaning: 'surgical removal', example: 'appendectomy', exampleMeaning: 'surgical removal of the appendix' },
  { id: 's-otomy', term: '-otomy', type: 'suffix', level: 1, meaning: 'surgical incision into', example: 'tracheotomy', exampleMeaning: 'a surgical incision into the trachea' },
  { id: 's-ostomy', term: '-ostomy', type: 'suffix', level: 1, meaning: 'surgical opening', example: 'colostomy', exampleMeaning: 'a surgically created opening into the colon' },
  { id: 's-ology', term: '-ology', type: 'suffix', level: 1, meaning: 'study of', example: 'cardiology', exampleMeaning: 'the study of the heart' },
  { id: 's-pathy', term: '-pathy', type: 'suffix', level: 1, meaning: 'disease', example: 'neuropathy', exampleMeaning: 'disease of the nerves' },
  { id: 's-algia', term: '-algia', type: 'suffix', level: 1, meaning: 'pain', example: 'arthralgia', exampleMeaning: 'pain in a joint' },
  { id: 's-emia', term: '-emia', type: 'suffix', level: 1, meaning: 'blood condition', example: 'anemia', exampleMeaning: 'a shortage of healthy red blood cells' },
  { id: 's-plasty', term: '-plasty', type: 'suffix', level: 1, meaning: 'surgical repair', example: 'rhinoplasty', exampleMeaning: 'surgical repair of the nose' },
  { id: 's-scopy', term: '-scopy', type: 'suffix', level: 1, meaning: 'visual examination', example: 'endoscopy', exampleMeaning: 'examining inside the body with a scope' },
  { id: 's-gram', term: '-gram', type: 'suffix', level: 1, meaning: 'a recorded image', example: 'electrocardiogram', exampleMeaning: 'a recording of the heart\u2019s electrical activity' },
  { id: 's-megaly', term: '-megaly', type: 'suffix', level: 1, meaning: 'enlargement', example: 'hepatomegaly', exampleMeaning: 'an enlarged liver' },
  { id: 's-rrhea', term: '-rrhea', type: 'suffix', level: 1, meaning: 'discharge, flow', example: 'diarrhea', exampleMeaning: 'abnormally frequent, loose bowel discharge' },
  { id: 's-rrhage', term: '-rrhage', type: 'suffix', level: 1, meaning: 'excessive bleeding', example: 'hemorrhage', exampleMeaning: 'severe or uncontrolled bleeding' },

  // --- Advanced word roots ---
  { id: 'r-angi', term: 'angi/o', type: 'root', level: 2, meaning: 'vessel', example: 'angioplasty', exampleMeaning: 'surgical repair of a blood vessel' },
  { id: 'r-aden', term: 'aden/o', type: 'root', level: 2, meaning: 'gland', example: 'adenitis', exampleMeaning: 'inflammation of a gland' },
  { id: 'r-cerebr', term: 'cerebr/o', type: 'root', level: 2, meaning: 'brain', example: 'cerebral', exampleMeaning: 'relating to the brain' },
  { id: 'r-cyst', term: 'cyst/o', type: 'root', level: 2, meaning: 'bladder, sac', example: 'cystitis', exampleMeaning: 'inflammation of the bladder' },
  { id: 'r-laryng', term: 'laryng/o', type: 'root', level: 2, meaning: 'larynx (voice box)', example: 'laryngitis', exampleMeaning: 'inflammation of the larynx' },

  // --- Advanced prefixes ---
  { id: 'p-contra', term: 'contra-', type: 'prefix', level: 2, meaning: 'against, opposite', example: 'contraindication', exampleMeaning: 'a reason a treatment should be avoided' },
  { id: 'p-dia', term: 'dia-', type: 'prefix', level: 2, meaning: 'through, across', example: 'diagnosis', exampleMeaning: 'identifying disease by examining through the evidence' },
  { id: 'p-ecto', term: 'ecto-', type: 'prefix', level: 2, meaning: 'outside, external', example: 'ectopic', exampleMeaning: 'occurring in an abnormal place, such as an ectopic pregnancy' },
  { id: 'p-neo', term: 'neo-', type: 'prefix', level: 2, meaning: 'new', example: 'neonatal', exampleMeaning: 'relating to a newborn' },
  { id: 'p-retro', term: 'retro-', type: 'prefix', level: 2, meaning: 'backward, behind', example: 'retroperitoneal', exampleMeaning: 'located behind the abdominal cavity' },

  // --- Advanced suffixes ---
  { id: 's-desis', term: '-desis', type: 'suffix', level: 2, meaning: 'surgical fixation, binding', example: 'arthrodesis', exampleMeaning: 'surgical fusion of a joint' },
  { id: 's-lysis', term: '-lysis', type: 'suffix', level: 2, meaning: 'breakdown, destruction', example: 'hemolysis', exampleMeaning: 'the breakdown of red blood cells' },
  { id: 's-oma', term: '-oma', type: 'suffix', level: 2, meaning: 'tumor, mass', example: 'carcinoma', exampleMeaning: 'a cancerous tumor' },
  { id: 's-plegia', term: '-plegia', type: 'suffix', level: 2, meaning: 'paralysis', example: 'quadriplegia', exampleMeaning: 'paralysis of all four limbs' },
  { id: 's-ptosis', term: '-ptosis', type: 'suffix', level: 2, meaning: 'drooping, sagging', example: 'blepharoptosis', exampleMeaning: 'drooping of the eyelid' },
];

const TYPE_LABEL = { root: 'Word Root', prefix: 'Prefix', suffix: 'Suffix' };
const LEVEL_LABEL = { 1: 'Beginner', 2: 'Advanced' };

function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getFiltered() {
  return TERMS.filter(t => {
    const categoryMatch = activeCategory === 'all' || t.type === activeCategory;
    const levelMatch = activeLevel === 'all' || t.level === activeLevel;
    return categoryMatch && levelMatch;
  });
}

/* ---------- shared state ---------- */
let activeCategory = 'all';
let activeLevel = 'all';
let activeMode = 'study';

/* ---------- Study (flashcards) state ---------- */
let studyOrder = [];
let studyIndex = 0;
let studyFlipped = false;

/* ---------- Match (game) state ---------- */
let matchTiles = [];
let matchSelected = [];
let matchMatchedCount = 0;
let matchMoves = 0;
let matchSeconds = 0;
let matchTimer = null;
let matchLocked = false;

/* ---------- Quiz state ---------- */
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

/* =========================================================
   Mode + category switching
   ========================================================= */
function setMode(mode) {
  activeMode = mode;
  document.querySelectorAll('.term-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.mode === mode);
    tab.setAttribute('aria-selected', tab.dataset.mode === mode ? 'true' : 'false');
  });
  document.querySelectorAll('.term-mode').forEach(section => {
    section.classList.toggle('active', section.id === `mode-${mode}`);
  });

  if (mode === 'study') startStudy();
  if (mode === 'match') startMatch();
  if (mode === 'quiz') startQuiz();
}

function setCategory(category) {
  activeCategory = category;
  document.querySelectorAll('.term-chip[data-category]').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.category === category);
  });
  setMode(activeMode);
}

function setLevel(level) {
  activeLevel = level === 'all' ? 'all' : Number(level);
  document.querySelectorAll('.term-chip[data-level]').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.level === level);
  });
  setMode(activeMode);
}

/* =========================================================
   Study mode (flashcards)
   ========================================================= */
function startStudy() {
  studyOrder = shuffle(getFiltered());
  studyIndex = 0;
  studyFlipped = false;
  renderStudy();
}

function renderStudy() {
  const wrap = document.getElementById('study-empty');
  const cardWrap = document.getElementById('study-card-wrap');

  if (studyOrder.length === 0) {
    wrap.hidden = false;
    cardWrap.hidden = true;
    return;
  }
  wrap.hidden = true;
  cardWrap.hidden = false;

  const item = studyOrder[studyIndex];
  const card = document.getElementById('flashcard');
  card.classList.toggle('flipped', studyFlipped);
  card.setAttribute('aria-label', studyFlipped
    ? `${item.term} means ${item.meaning}. Tap to show the term.`
    : `${item.term}. Tap to reveal the meaning.`);

  document.getElementById('flashcard-type-front').textContent = `${TYPE_LABEL[item.type]} · ${LEVEL_LABEL[item.level]}`;
  document.getElementById('flashcard-type-front').className = `term-badge badge-${item.type}`;
  document.getElementById('flashcard-term').textContent = item.term;

  document.getElementById('flashcard-type-back').textContent = `${TYPE_LABEL[item.type]} · ${LEVEL_LABEL[item.level]}`;
  document.getElementById('flashcard-type-back').className = `term-badge badge-${item.type}`;
  document.getElementById('flashcard-meaning').textContent = item.meaning;
  document.getElementById('flashcard-example').innerHTML =
    `Example: <strong>${item.example}</strong> — ${item.exampleMeaning}`;

  document.getElementById('study-progress').textContent = `Card ${studyIndex + 1} of ${studyOrder.length}`;
}

function flipCard() {
  if (studyOrder.length === 0) return;
  studyFlipped = !studyFlipped;
  renderStudy();
}

function nextCard(direction) {
  if (studyOrder.length === 0) return;
  studyIndex = (studyIndex + direction + studyOrder.length) % studyOrder.length;
  studyFlipped = false;
  renderStudy();
}

/* =========================================================
   Match mode (timed matching game)
   ========================================================= */
function startMatch() {
  clearInterval(matchTimer);
  const pool = shuffle(getFiltered());
  const pairCount = Math.min(6, pool.length);
  const chosen = pool.slice(0, pairCount);

  const emptyEl = document.getElementById('match-empty');
  const boardWrap = document.getElementById('match-board-wrap');

  if (pairCount === 0) {
    emptyEl.hidden = false;
    boardWrap.hidden = true;
    return;
  }
  emptyEl.hidden = true;
  boardWrap.hidden = false;

  const tiles = [];
  chosen.forEach(item => {
    tiles.push({ pairId: item.id, kind: 'term', label: item.term, type: item.type });
    tiles.push({ pairId: item.id, kind: 'meaning', label: item.meaning, type: item.type });
  });

  matchTiles = shuffle(tiles);
  matchSelected = [];
  matchMatchedCount = 0;
  matchMoves = 0;
  matchSeconds = 0;
  matchLocked = false;

  renderMatchBoard();
  updateMatchStats();
  document.getElementById('match-complete').hidden = true;

  matchTimer = setInterval(() => {
    matchSeconds += 1;
    updateMatchStats();
  }, 1000);
}

function renderMatchBoard() {
  const board = document.getElementById('match-board');
  board.innerHTML = '';
  matchTiles.forEach((tile, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `match-tile badge-${tile.type}`;
    btn.textContent = tile.label;
    btn.dataset.index = String(index);
    if (tile.matched) {
      btn.classList.add('matched');
      btn.disabled = true;
    }
    if (matchSelected.includes(index)) {
      btn.classList.add('selected');
    }
    btn.addEventListener('click', () => onTileClick(index));
    board.appendChild(btn);
  });
}

function updateMatchStats() {
  const mins = String(Math.floor(matchSeconds / 60)).padStart(2, '0');
  const secs = String(matchSeconds % 60).padStart(2, '0');
  document.getElementById('match-time').textContent = `${mins}:${secs}`;
  document.getElementById('match-moves').textContent = String(matchMoves);
}

function onTileClick(index) {
  if (matchLocked) return;
  const tile = matchTiles[index];
  if (tile.matched || matchSelected.includes(index)) return;

  matchSelected.push(index);
  renderMatchBoard();

  if (matchSelected.length === 2) {
    matchMoves += 1;
    updateMatchStats();
    const [firstIndex, secondIndex] = matchSelected;
    const isMatch = matchTiles[firstIndex].pairId === matchTiles[secondIndex].pairId;

    if (isMatch) {
      matchTiles[firstIndex].matched = true;
      matchTiles[secondIndex].matched = true;
      matchMatchedCount += 1;
      matchSelected = [];
      renderMatchBoard();

      if (matchMatchedCount === matchTiles.length / 2) {
        clearInterval(matchTimer);
        const summary = document.getElementById('match-complete');
        summary.hidden = false;
        summary.textContent = `Nice work! You matched everything in ${document.getElementById('match-time').textContent} and ${matchMoves} moves.`;
      }
    } else {
      matchLocked = true;
      setTimeout(() => {
        matchSelected = [];
        matchLocked = false;
        renderMatchBoard();
      }, 700);
    }
  }
}

/* =========================================================
   Quiz mode (multiple choice)
   ========================================================= */
function startQuiz() {
  const pool = shuffle(getFiltered());
  quizQuestions = pool.slice(0, Math.min(10, pool.length));
  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;

  document.getElementById('quiz-results').hidden = true;
  const emptyEl = document.getElementById('quiz-empty');
  const bodyEl = document.getElementById('quiz-body');

  if (quizQuestions.length === 0) {
    emptyEl.hidden = false;
    bodyEl.hidden = true;
    return;
  }
  emptyEl.hidden = true;
  bodyEl.hidden = false;

  renderQuizQuestion();
}

function renderQuizQuestion() {
  document.getElementById('quiz-feedback').textContent = '';
  document.getElementById('quiz-feedback').className = 'quiz-feedback';
  document.getElementById('quiz-next').hidden = true;
  quizAnswered = false;

  const item = quizQuestions[quizIndex];
  document.getElementById('quiz-progress').textContent =
    `Question ${quizIndex + 1} of ${quizQuestions.length} · Score: ${quizScore}`;
  document.getElementById('quiz-type').textContent = `${TYPE_LABEL[item.type]} · ${LEVEL_LABEL[item.level]}`;
  document.getElementById('quiz-type').className = `term-badge badge-${item.type}`;
  document.getElementById('quiz-question').textContent = `What does "${item.term}" mean?`;

  const distractorPool = TERMS.filter(t => t.id !== item.id).map(t => t.meaning);
  const distractors = shuffle(distractorPool).slice(0, 3);
  const options = shuffle([item.meaning, ...distractors]);

  const optionsWrap = document.getElementById('quiz-options');
  optionsWrap.innerHTML = '';
  options.forEach(optionText => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'quiz-option';
    btn.textContent = optionText;
    btn.addEventListener('click', () => onQuizAnswer(optionText === item.meaning, btn));
    optionsWrap.appendChild(btn);
  });
}

function onQuizAnswer(isCorrect, button) {
  if (quizAnswered) return;
  quizAnswered = true;

  const buttons = document.querySelectorAll('#quiz-options .quiz-option');
  const item = quizQuestions[quizIndex];
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === item.meaning) btn.classList.add('correct');
  });
  if (!isCorrect) button.classList.add('incorrect');

  const feedback = document.getElementById('quiz-feedback');
  if (isCorrect) {
    quizScore += 1;
    feedback.textContent = `Correct — ${item.term} means "${item.meaning}."`;
    feedback.classList.add('correct');
  } else {
    feedback.textContent = `Not quite — ${item.term} means "${item.meaning}."`;
    feedback.classList.add('incorrect');
  }

  document.getElementById('quiz-progress').textContent =
    `Question ${quizIndex + 1} of ${quizQuestions.length} · Score: ${quizScore}`;

  const nextBtn = document.getElementById('quiz-next');
  nextBtn.hidden = false;
  nextBtn.textContent = quizIndex === quizQuestions.length - 1 ? 'See results' : 'Next question';
}

function advanceQuiz() {
  if (quizIndex < quizQuestions.length - 1) {
    quizIndex += 1;
    renderQuizQuestion();
  } else {
    document.getElementById('quiz-body').hidden = true;
    const results = document.getElementById('quiz-results');
    results.hidden = false;
    const pct = Math.round((quizScore / quizQuestions.length) * 100);
    document.getElementById('quiz-score-text').textContent =
      `You scored ${quizScore} out of ${quizQuestions.length} (${pct}%).`;
  }
}

/* =========================================================
   Wire up the page
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.term-tab').forEach(tab => {
    tab.addEventListener('click', () => setMode(tab.dataset.mode));
  });

  document.querySelectorAll('.term-chip[data-category]').forEach(chip => {
    chip.addEventListener('click', () => setCategory(chip.dataset.category));
  });

  document.querySelectorAll('.term-chip[data-level]').forEach(chip => {
    chip.addEventListener('click', () => setLevel(chip.dataset.level));
  });

  const flashcard = document.getElementById('flashcard');
  if (flashcard) {
    flashcard.addEventListener('click', flipCard);
    flashcard.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        flipCard();
      }
    });
  }
  const prevBtn = document.getElementById('study-prev');
  const nextBtn = document.getElementById('study-next');
  if (prevBtn) prevBtn.addEventListener('click', () => nextCard(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => nextCard(1));

  const shuffleBtn = document.getElementById('study-shuffle');
  if (shuffleBtn) shuffleBtn.addEventListener('click', startStudy);

  const newRoundBtn = document.getElementById('match-new-round');
  if (newRoundBtn) newRoundBtn.addEventListener('click', startMatch);

  const quizNextBtn = document.getElementById('quiz-next');
  if (quizNextBtn) quizNextBtn.addEventListener('click', advanceQuiz);

  const quizRetryBtn = document.getElementById('quiz-retry');
  if (quizRetryBtn) quizRetryBtn.addEventListener('click', startQuiz);

  setMode('study');
});
