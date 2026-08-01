/* =========================================================
   Careers page — data + interactivity
   Two modes: Browse (filterable career cards) and
   Quiz (5-question interest match).

   Salary and education figures are approximate national
   medians from the U.S. Bureau of Labor Statistics (BLS),
   Occupational Outlook Handbook, most recent release
   available as of mid-2026. Real pay varies a lot by
   location, employer, and experience — these are meant as
   a starting point for comparison, not a guarantee.
   ========================================================= */

const CAREERS = [
  {
    id: 'rn',
    name: 'Registered Nurse (RN)',
    category: 'nursing',
    emoji: '🩺',
    blurb: 'Monitor patients, administer medications, and act as the main point of contact between patients, families, and the rest of the care team.',
    education: 'Associate\u2019s or Bachelor\u2019s degree in Nursing, plus a licensing exam (NCLEX-RN)',
    salary: '$86,070 median/year',
    traits: ['peoplefocused', 'steady', 'teamwork', 'longpath'],
  },
  {
    id: 'physician',
    name: 'Physician (MD/DO)',
    category: 'medicine',
    emoji: '🧑\u200d⚕️',
    blurb: 'Diagnose and treat illness and injury, often specializing in an area like pediatrics, surgery, or emergency medicine.',
    education: 'Bachelor\u2019s degree, then 4 years of medical school, then 3\u20137 years of residency',
    salary: 'Median well above $230,000/year, varies widely by specialty',
    traits: ['leadership', 'sciencefocused', 'gradpath', 'fastpace'],
  },
  {
    id: 'pa',
    name: 'Physician Assistant (PA)',
    category: 'medicine',
    emoji: '📋',
    blurb: 'Examine, diagnose, and treat patients under a supervising physician, often carrying a caseload similar to a doctor\u2019s.',
    education: 'Bachelor\u2019s degree, then a Master\u2019s-level PA program (about 2\u20133 years), plus a certification exam',
    salary: '$133,260 median/year',
    traits: ['sciencefocused', 'peoplefocused', 'gradpath', 'teamwork'],
  },
  {
    id: 'pharmacist',
    name: 'Pharmacist',
    category: 'medicine',
    emoji: '💊',
    blurb: 'Dispense medications, check for dangerous drug interactions, and counsel patients on how to safely take what they\u2019ve been prescribed.',
    education: 'Doctor of Pharmacy (Pharm.D.) degree, typically about 4 years after a bachelor\u2019s',
    salary: 'About $130,000+ median/year',
    traits: ['sciencefocused', 'techsavvy', 'gradpath', 'steady'],
  },
  {
    id: 'pt',
    name: 'Physical Therapist (PT)',
    category: 'rehab',
    emoji: '🦵',
    blurb: 'Help injured or recovering patients regain movement and manage pain through hands-on exercises and rehab plans.',
    education: 'Doctor of Physical Therapy (DPT) degree, about 3 years after a bachelor\u2019s',
    salary: '$100,510 median/year',
    traits: ['handson', 'sports', 'gradpath', 'peoplefocused'],
  },
  {
    id: 'ot',
    name: 'Occupational Therapist (OT)',
    category: 'rehab',
    emoji: '🧩',
    blurb: 'Help people rebuild the skills needed for daily life and work \u2014 from a stroke patient relearning to get dressed to a child developing motor skills.',
    education: 'Master\u2019s or Doctoral degree in Occupational Therapy',
    salary: '$98,340 median/year',
    traits: ['handson', 'peoplefocused', 'gradpath', 'steady'],
  },
  {
    id: 'at',
    name: 'Athletic Trainer',
    category: 'rehab',
    emoji: '🏃',
    blurb: 'Prevent, evaluate, and treat muscle and bone injuries for athletes and active people, often working the sideline of games and practices.',
    education: 'Master\u2019s degree in Athletic Training, plus certification (BOC)',
    salary: '$60,250 median/year',
    traits: ['sports', 'handson', 'gradpath', 'teamwork'],
  },
  {
    id: 'emt',
    name: 'EMT',
    category: 'ems',
    emoji: '🚑',
    blurb: 'Provide basic emergency medical care and transport, often the first medical responder on the scene of an accident or emergency.',
    education: 'Postsecondary certificate, typically a few months to about a year',
    salary: '$41,340 median/year',
    traits: ['fastpace', 'handson', 'teamwork', 'shortpath'],
  },
  {
    id: 'paramedic',
    name: 'Paramedic',
    category: 'ems',
    emoji: '🚨',
    blurb: 'Provide advanced emergency care \u2014 including medications and airway management \u2014 building on EMT training for more complex situations.',
    education: 'Postsecondary certificate built on EMT training (about 1\u20132 years total)',
    salary: '$58,410 median/year',
    traits: ['fastpace', 'handson', 'teamwork', 'shortpath'],
  },
  {
    id: 'rt',
    name: 'Respiratory Therapist',
    category: 'diagnostic',
    emoji: '🫁',
    blurb: 'Treat patients with breathing problems, from managing asthma in a clinic to running ventilators in the ICU.',
    education: 'Associate\u2019s degree (some Respiratory Therapists have a Bachelor\u2019s)',
    salary: '$80,450 median/year',
    traits: ['techsavvy', 'sciencefocused', 'shortpath', 'teamwork'],
  },
  {
    id: 'radtech',
    name: 'Radiologic Technologist',
    category: 'diagnostic',
    emoji: '📸',
    blurb: 'Operate imaging equipment like X-ray and CT machines to help physicians see what\u2019s happening inside the body.',
    education: 'Associate\u2019s degree in Radiologic Technology',
    salary: '$77,660 median/year',
    traits: ['techsavvy', 'shortpath', 'steady', 'teamwork'],
  },
  {
    id: 'surgtech',
    name: 'Surgical Technologist',
    category: 'diagnostic',
    emoji: '🧤',
    blurb: 'Prepare operating rooms, sterilize instruments, and assist surgeons directly during procedures.',
    education: 'Postsecondary certificate or Associate\u2019s degree',
    salary: '$62,830 median/year',
    traits: ['handson', 'techsavvy', 'shortpath', 'teamwork'],
  },
  {
    id: 'ma',
    name: 'Medical Assistant',
    category: 'nursing',
    emoji: '🗂️',
    blurb: 'Handle a mix of clinical tasks (vitals, injections) and administrative tasks (scheduling, records) in a physician\u2019s office.',
    education: 'Postsecondary certificate, often less than a year',
    salary: '$44,200 median/year',
    traits: ['peoplefocused', 'shortpath', 'teamwork', 'steady'],
  },
  {
    id: 'dh',
    name: 'Dental Hygienist',
    category: 'diagnostic',
    emoji: '🦷',
    blurb: 'Clean teeth, take dental X-rays, and educate patients on oral health, usually working alongside a dentist.',
    education: 'Associate\u2019s degree in Dental Hygiene',
    salary: '$87,530 median/year',
    traits: ['handson', 'techsavvy', 'shortpath', 'steady'],
  },
];

const CATEGORY_LABEL = {
  nursing: 'Nursing & Patient Care',
  medicine: 'Medicine & Advanced Practice',
  rehab: 'Rehabilitation & Sports Medicine',
  ems: 'Emergency Medical Services',
  diagnostic: 'Diagnostic & Technical Services',
};

const TRAIT_LABEL = {
  fastpace: 'Fast-paced, high-pressure moments',
  steady: 'Steady, ongoing patient relationships',
  handson: 'Hands-on physical work',
  techsavvy: 'High-tech tools & precision',
  sciencefocused: 'Science & medication-focused work',
  peoplefocused: 'Emotional, people-focused care',
  sports: 'Movement, sports & the body',
  teamwork: 'Team-based, protocol-driven work',
  leadership: 'Diagnosing & directing care',
  shortpath: 'A shorter training path',
  longpath: 'About a 4-year degree path',
  gradpath: 'A graduate-level training path',
};

const QUIZ_QUESTIONS = [
  {
    question: 'How many years of school after high school sound realistic for you right now?',
    options: [
      { label: '1\u20132 years (a certificate or associate\u2019s degree)', trait: 'shortpath' },
      { label: 'About 4 years (a bachelor\u2019s degree)', trait: 'longpath' },
      { label: '6+ years (a master\u2019s or doctoral degree)', trait: 'gradpath' },
      { label: 'I\u2019m honestly not sure yet', trait: null },
    ],
  },
  {
    question: 'Which environment sounds most appealing to you?',
    options: [
      { label: 'Fast-moving: the ER, an ambulance, the sideline of a game', trait: 'fastpace' },
      { label: 'Calm, ongoing relationships in a clinic', trait: 'steady' },
      { label: 'Working with high-tech equipment like scans or lab tools', trait: 'techsavvy' },
      { label: 'Active work involving movement and the body', trait: 'handson' },
    ],
  },
  {
    question: 'What kind of problems do you enjoy solving?',
    options: [
      { label: 'Quick decisions made under pressure', trait: 'fastpace' },
      { label: 'Precise, science-based problems (medications, chemistry, biology)', trait: 'sciencefocused' },
      { label: 'Helping someone feel better emotionally, not just physically', trait: 'peoplefocused' },
      { label: 'Physical movement and rehab challenges', trait: 'sports' },
    ],
  },
  {
    question: 'How do you like to work?',
    options: [
      { label: 'As part of a team, following clear protocols', trait: 'teamwork' },
      { label: 'Taking the lead on diagnosing and directing care', trait: 'leadership' },
      { label: 'One-on-one with the same patients over time', trait: 'steady' },
      { label: 'Hands directly on patients, adjusting technique', trait: 'handson' },
    ],
  },
  {
    question: 'Which subject sounds most interesting to study in depth?',
    options: [
      { label: 'Anatomy and how the body moves', trait: 'sports' },
      { label: 'Chemistry and pharmacology', trait: 'sciencefocused' },
      { label: 'Technology, imaging, and precise measurement', trait: 'techsavvy' },
      { label: 'Communication and the psychology of care', trait: 'peoplefocused' },
    ],
  },
];

/* ---------- shared state ---------- */
let activeCareerMode = 'browse';
let activeCareerCategory = 'all';
let expandedCareerId = null;

/* ---------- Quiz state ---------- */
let quizStep = 0;
let quizProfile = [];

/* =========================================================
   Mode switching
   ========================================================= */
function setCareerMode(mode) {
  activeCareerMode = mode;
  document.querySelectorAll('.term-tab[data-career-mode]').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.careerMode === mode);
    tab.setAttribute('aria-selected', tab.dataset.careerMode === mode ? 'true' : 'false');
  });
  document.querySelectorAll('.career-mode-section').forEach(section => {
    section.classList.toggle('active', section.id === `career-mode-${mode}`);
  });

  if (mode === 'browse') renderCareerList();
  if (mode === 'quiz') startCareerQuiz();
}

function setCareerCategory(category) {
  activeCareerCategory = category;
  document.querySelectorAll('.term-chip[data-career-category]').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.careerCategory === category);
  });
  renderCareerList();
}

/* =========================================================
   Browse mode
   ========================================================= */
function renderCareerList() {
  const list = document.getElementById('career-list');
  list.innerHTML = '';

  const filtered = activeCareerCategory === 'all'
    ? CAREERS
    : CAREERS.filter(c => c.category === activeCareerCategory);

  filtered.forEach(career => {
    const card = document.createElement('article');
    card.className = 'career-card';

    const isOpen = expandedCareerId === career.id;

    card.innerHTML = `
      <div class="career-card-top">
        <span class="career-emoji" aria-hidden="true">${career.emoji}</span>
        <div>
          <span class="term-badge badge-root">${CATEGORY_LABEL[career.category]}</span>
          <h3>${career.name}</h3>
        </div>
      </div>
      <p class="career-blurb">${career.blurb}</p>
      <dl class="career-facts ${isOpen ? '' : 'hidden'}">
        <div><dt>Typical education</dt><dd>${career.education}</dd></div>
        <div><dt>Median pay</dt><dd>${career.salary}</dd></div>
      </dl>
      <button type="button" class="text-link career-toggle" data-career-id="${career.id}">
        ${isOpen ? 'Show less \u2191' : 'Education & pay \u2193'}
      </button>
    `;
    list.appendChild(card);
  });

  document.querySelectorAll('.career-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      expandedCareerId = expandedCareerId === btn.dataset.careerId ? null : btn.dataset.careerId;
      renderCareerList();
    });
  });

  document.getElementById('career-empty').hidden = filtered.length !== 0;
  document.getElementById('career-list').hidden = filtered.length === 0;
}

/* =========================================================
   Quiz mode
   ========================================================= */
function startCareerQuiz() {
  quizStep = 0;
  quizProfile = [];
  document.getElementById('career-quiz-results').hidden = true;
  document.getElementById('career-quiz-body').hidden = false;
  renderQuizStep();
}

function renderQuizStep() {
  const q = QUIZ_QUESTIONS[quizStep];
  document.getElementById('career-quiz-progress').textContent =
    `Question ${quizStep + 1} of ${QUIZ_QUESTIONS.length}`;
  document.getElementById('career-quiz-question').textContent = q.question;

  const optionsWrap = document.getElementById('career-quiz-options');
  optionsWrap.innerHTML = '';
  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'quiz-option';
    btn.textContent = option.label;
    btn.addEventListener('click', () => answerQuizStep(option.trait));
    optionsWrap.appendChild(btn);
  });
}

function answerQuizStep(trait) {
  if (trait) quizProfile.push(trait);

  if (quizStep < QUIZ_QUESTIONS.length - 1) {
    quizStep += 1;
    renderQuizStep();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  document.getElementById('career-quiz-body').hidden = true;
  const results = document.getElementById('career-quiz-results');
  results.hidden = false;

  const scored = CAREERS.map(career => {
    const score = quizProfile.filter(trait => career.traits.includes(trait)).length;
    const matchedTraits = [...new Set(quizProfile.filter(trait => career.traits.includes(trait)))];
    return { career, score, matchedTraits };
  }).sort((a, b) => b.score - a.score);

  const top = scored.slice(0, 3);

  const wrap = document.getElementById('career-quiz-matches');
  wrap.innerHTML = '';
  top.forEach(({ career, matchedTraits }) => {
    const card = document.createElement('article');
    card.className = 'career-card career-match';
    card.innerHTML = `
      <div class="career-card-top">
        <span class="career-emoji" aria-hidden="true">${career.emoji}</span>
        <div>
          <span class="term-badge badge-root">${CATEGORY_LABEL[career.category]}</span>
          <h3>${career.name}</h3>
        </div>
      </div>
      <p class="career-blurb">${career.blurb}</p>
      <p class="career-match-reason">
        ${matchedTraits.length
          ? `Matched: ${matchedTraits.map(t => TRAIT_LABEL[t]).join(' \u00b7 ')}`
          : 'A broad fit based on your answers.'}
      </p>
    `;
    wrap.appendChild(card);
  });
}

/* =========================================================
   Wire up the page
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.term-tab[data-career-mode]').forEach(tab => {
    tab.addEventListener('click', () => setCareerMode(tab.dataset.careerMode));
  });

  document.querySelectorAll('.term-chip[data-career-category]').forEach(chip => {
    chip.addEventListener('click', () => setCareerCategory(chip.dataset.careerCategory));
  });

  const retryBtn = document.getElementById('career-quiz-retry');
  if (retryBtn) retryBtn.addEventListener('click', startCareerQuiz);

  setCareerMode('browse');
});
