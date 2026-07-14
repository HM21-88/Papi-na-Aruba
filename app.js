const APP_CONFIG = {
variant: 'aw',
subscription: 'free'
};

const data = window.wordsData || [];

const weekSelections = {
  weekFilter: ['alle'],
  flashWeek: ['alle'],
  quizWeek: ['alle']
};

function toggleFlashSettingsButton(show){

  const btn =
    document.getElementById(
      'flashSettingsHeaderBtn'
    );

  if(!btn){
    return;
  }

  btn.style.display =
    show ? 'flex' : 'none';
}

function updateScreenBar(
  title,
  showBack = true,
  backAction = null
){

  const titleEl =
    document.getElementById(
      'screenTitle'
    );

  const backBtn =
    document.getElementById(
      'backBtn'
    );

  if(titleEl){
    titleEl.textContent = title;
  }

  if(backBtn){

    backBtn.style.display =
      showBack ? 'flex' : 'none';

    backBtn.onclick =
      backAction || null;
  }
  
toggleFlashSettingsButton(
  title === 'Flashcards' ||
  title === 'Quiz' ||
  title === 'Learn'
);

}

function showSection(id){

	document
  .querySelectorAll(
    '.flash-settings-panel'
  )
  .forEach(panel => {
    panel.classList.add('hidden');
  });

	const practiceScreen =
  document.getElementById(
    'practiceScreen'
  );

if(practiceScreen){
  practiceScreen.classList.add(
    'hidden'
  );
}
	
  ['woordenlijst','flashcards','quiz','oefeningen'].forEach(sectionId=>{
    const el=document.getElementById(sectionId);
    if(el){
      el.classList.toggle('hidden', sectionId!==id);
    }
  });

  updateMainNav(id);
  playFlashSound('nav');

if(id==='flashcards'){
	
	updateScreenBar(
		'Flashcards',
		true,
	() => showMainScreen('practiceScreen')
	);

  renderFlash();

} else if(id==='quiz'){

  updateScreenBar(
    'Quiz',
    true,
    () => showMainScreen('practiceScreen')
  );

  updateQuizStats();

  if(!currentQuiz){
    newQuiz();
  }

} else if(id==='woordenlijst'){

  updateScreenBar(
    'Learn',
    true,
    () => showMainScreen('homeScreen')
  );

  renderList();

} else if(id==='oefeningen'){

  updateScreenBar(
    'Trainers',
    true,
    () => showMainScreen('practiceScreen')
  );

  showExercise('voorzetsels');

}

}

function showExercise(id){

  playFlashSound('nav');
  
  document
  .getElementById(
    'exercisePrepositionsBtn'
  )
  .classList.remove('active');

document
  .getElementById(
    'exerciseTensesBtn'
  )
  .classList.remove('active');

if(id === 'voorzetsels'){
  document
    .getElementById(
      'exercisePrepositionsBtn'
    )
    .classList.add('active');
}

if(id === 'tijdsvormen'){
  document
    .getElementById(
      'exerciseTensesBtn'
    )
    .classList.add('active');
}

  ['voorzetsels','tijdsvormen']
    .forEach(sectionId=>{

      const el=document.getElementById(sectionId);

      if(el){
        el.classList.toggle(
          'hidden',
          sectionId!==id
        );
      }

    });

  if(
    id === 'voorzetsels' &&
    !currentPrepositionExercise
  ){
    startPrepositionExercise(
      'makkelijk'
    );
  }

  if(
    id === 'tijdsvormen' &&
    !currentTenseExercise
  ){
    startTenseExercise(
      'makkelijk'
    );
  }

}

function escapeHtml(value){
  return String(value ?? '')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

function getTypeGroup(type=''){
  const t=(type||'').toLowerCase();
  if(t.includes('werkwoord') || t.includes('vraag') || t.includes('uitdrukking')) return 'red';
  if(t.includes('kleur') || t.includes('tijd') || t.includes('dag') || t.includes('wind')) return 'yellow';
  return 'blue';
}

function getAllWeeks(){
  return [...new Set(data.map(x=>Number(x.week)))].sort((a,b)=>a-b);
}

function fillWeekPicker(id){

  const menu =
    document.getElementById(
      `${id}Menu`
    );

  if(!menu){
    return;
  }

  const weeks =
    getAllWeeks();

  menu.innerHTML = '';

  const allButton =
    document.createElement(
      'button'
    );

  allButton.type = 'button';

  allButton.className =
    `week-chip ${
      weekSelections[id].includes('alle')
        ? 'active'
        : ''
    }`;

  allButton.textContent =
    'Alle';

  allButton.onclick = () =>
    toggleWeekValue(
      id,
      'alle'
    );

  menu.appendChild(
    allButton
  );

  weeks.forEach(week => {

    const button =
      document.createElement(
        'button'
      );

    button.type = 'button';

    button.className =
      `week-chip ${
        weekSelections[id].includes(
          String(week)
        )
          ? 'active'
          : ''
      }`;

    button.textContent =
      week;

    button.onclick = () =>
      toggleWeekValue(
        id,
        String(week)
      );

    menu.appendChild(
      button
    );

  });

}

function toggleWeekPicker(id){
  document.querySelectorAll('.week-picker').forEach(picker=>{
    const isCurrent = picker.getAttribute('data-week-picker') === id;
    picker.classList.toggle('open', isCurrent ? !picker.classList.contains('open') : false);
  });
}

function toggleFlashSettings(){

  const flash =
    document.getElementById(
      'flashSettingsPanel'
    );

  const quiz =
    document.getElementById(
      'quizSettingsPanel'
    );

  const list =
    document.getElementById(
      'listSettingsPanel'
    );

  if(
    flash &&
    !document
      .getElementById('flashcards')
      .classList.contains('hidden')
  ){
    flash.classList.toggle('hidden');
  }

  if(
    quiz &&
    !document
      .getElementById('quiz')
      .classList.contains('hidden')
  ){
    quiz.classList.toggle('hidden');
  }

  if(
    list &&
    !document
      .getElementById('woordenlijst')
      .classList.contains('hidden')
  ){
    list.classList.toggle('hidden');
  }

}

function closeWeekPickers(){
  document.querySelectorAll('.week-picker').forEach(picker=>{
    picker.classList.remove('open');
  });
}

function toggleWeekValue(id, value){
  let selected=[...weekSelections[id]];

  if(value==='alle'){
    selected=['alle'];
  } else {
    selected=selected.filter(v=>v!=='alle');

    if(selected.includes(value)){
      selected=selected.filter(v=>v!==value);
    } else {
      selected.push(value);
    }

    if(selected.length===0){
      selected=['alle'];
    }
  }

  weekSelections[id]=selected;
  fillWeekPicker(id);

  if(id==='weekFilter'){
    renderList();
  } else if(id==='flashWeek'){
    resetFlash();
  } else if(id==='quizWeek'){
    resetQuizSession();
  }
}

function getSelectedWeeks(id){
  const selected=weekSelections[id] || ['alle'];
  if(selected.includes('alle')) return 'alle';
  return selected.map(Number).sort((a,b)=>a-b);
}

function weekMatches(item, selectedWeeks){
  if(selectedWeeks==='alle') return true;
  return selectedWeeks.includes(Number(item.week));
}

function getWeekLabel(selectedWeeks){
  if(selectedWeeks==='alle') return 'Alle weken';
  if(selectedWeeks.length===1) return `Week ${selectedWeeks[0]}`;
  if(selectedWeeks.length===2) return `Week ${selectedWeeks[0]} + ${selectedWeeks[1]}`;
  return `${selectedWeeks.length} weken`;
}

function updateWeekPickerLabel(id){
  const selectedWeeks=getSelectedWeeks(id);
  const labelText=getWeekLabel(selectedWeeks);

  const map = {
    weekFilter: 'weekFilterLabel',
    flashWeek: 'flashWeekLabelBtn',
    quizWeek: 'quizWeekLabel'
  };

  const label=document.getElementById(map[id]);
  if(label){
    label.textContent=labelText;
  }
}

function byWeek(selectedWeeks){
  return data.filter(item => weekMatches(item, selectedWeeks));
}

function fillTypeSelect(id){
  const el=document.getElementById(id);
  const types=[...new Set(data.map(x => (x.type || '').trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'nl'));
  el.innerHTML = `
    <option value="alle">Alle types</option>
    ${types.map(type => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`).join('')}
  `;
}

function filterByWeekAndType(source, selectedWeeks, typeValue){
  return source.filter(item => {
    const weekOk = weekMatches(item, selectedWeeks);
    const typeOk = typeValue === 'alle' || (item.type || '') === typeValue;
    return weekOk && typeOk;
  });
}

function renderList(){
  const q=document.getElementById('search').value.toLowerCase().trim();
  const selectedWeeks=getSelectedWeeks('weekFilter');

  const filtered=data.filter(item=>{
    const haystack=[
      item.nummer,
      item.papiamento,
      item.nederlands,
      item.varianten,
      item.type,
      item.uitspraak,
      item.voorbeeld_papiamento,
      item.voorbeeld_nederlands
    ].join(' ').toLowerCase();

    return weekMatches(item, selectedWeeks) && (!q || haystack.includes(q));
  });

/* ===== WOORDENTELLER ===== */

const wordCountCard =
  document.getElementById(
    'wordCountCard'
  );

if(wordCountCard){
  wordCountCard.textContent =
    `📘 Woorden: ${data.length}`;
}

  const list=document.getElementById('list');

  if(!filtered.length){
    list.innerHTML='<div class="list-item">Geen woorden gevonden.</div>';
    return;
  }

  list.innerHTML=filtered.map((item,index)=>{
    const dayBlock=Math.floor(index / 15) % 3;
const group=dayBlock===0 ? 'blue' : dayBlock===1 ? 'red' : 'yellow';
    const meaningId=`meaning-${index}-${item.week}-${item.nummer}`;
    return `
      <div class="list-item group-${group}">
        <div class="list-item-top">
          <div class="list-main">
            <div class="meta">Week ${item.week} • Nr. ${item.nummer} • ${escapeHtml(item.type || '-')}</div>
            <div class="word">${escapeHtml(item.papiamento || '-')}</div>
            <div class="meaning-line">
              <span id="${meaningId}" class="meaning-text">${escapeHtml(item.nederlands || '-')}</span>
              <span class="meaning-placeholder">Betekenis verborgen</span>
            </div>
            <div class="meta">Varianten: ${escapeHtml(item.varianten || '-')}</div>
            <div class="meta">Uitspraak: ${escapeHtml(item.uitspraak || '-')}</div>
          </div>
          <button class="word-toggle" type="button" onclick="toggleWordMeaning('${meaningId}', this)" aria-label="Betekenis tonen of verbergen">
            ${meaningsHidden ? '🙈' : '👁️'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  updateWordToggleIcons();
}

function toggleWordMeaning(id, btn){
  const el=document.getElementById(id);
  if(!el) return;
  const isHidden=el.style.display==='none';
  el.style.display=isHidden ? '' : 'none';
  btn.textContent=isHidden ? '👁️' : '🙈';
}

let flashPool=[];
let flashIndex=0;
let flashFlipped=false;
let flashSeen=0;
let flashProgressCount=0;

let flashGoodCount =
  Number(
    localStorage.getItem(
      'flashGoodCount'
    )
  ) || 0;

let flashHardCount =
  Number(
    localStorage.getItem(
      'flashHardCount'
    )
  ) || 0;

let currentDailyStreak =
  Number(
    localStorage.getItem(
      'currentDailyStreak'
    )
  ) || 0;

let bestDailyStreak =
  Number(
    localStorage.getItem(
      'bestDailyStreak'
    )
  ) || 0;

let lastLearningDate =
  localStorage.getItem(
    'lastLearningDate'
  ) || null;
  
let weeklyLearningDays =
  JSON.parse(
    localStorage.getItem(
      'weeklyLearningDays'
    ) || '[]'
  );

let storedWeekNumber =
  Number(
    localStorage.getItem(
      'storedWeekNumber'
    )
  ) || 0;  

let flashAnimating = false;
let flashAudioReady = false;
let flashAudioCtx = null;
function getFlashBox(){
  return document.getElementById('flashBox');
}

function ensureFlashAudio(){
  if(flashAudioCtx) return flashAudioCtx;
  const AudioCtx=window.AudioContext || window.webkitAudioContext;
  if(!AudioCtx) return null;
  flashAudioCtx=new AudioCtx();
  return flashAudioCtx;
}

function unlockFlashAudio(){
  const ctx=ensureFlashAudio();
  if(!ctx) return;
  if(ctx.state==='suspended'){
    ctx.resume();
  }
  flashAudioReady=true;
}

function playTone(freq=440,duration=0.08,type='sine',volume=0.03,delay=0){
  const ctx=ensureFlashAudio();
  if(!ctx) return;
  const now=ctx.currentTime + delay;
  const osc=ctx.createOscillator();
  const gain=ctx.createGain();

  osc.type=type;
  osc.frequency.setValueAtTime(freq, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + duration + 0.02);
}

function playFlashSound(kind){
  unlockFlashAudio();

  if(kind==='next'){
    playTone(520,0.07,'triangle',0.028,0);
  } else if(kind==='prev'){
    playTone(390,0.07,'triangle',0.028,0);
  } else if(kind==='good'){
    playTone(520,0.08,'triangle',0.03,0);
    playTone(700,0.11,'triangle',0.026,0.07);
  } else if(kind==='hard'){
    playTone(320,0.09,'sawtooth',0.022,0);
    playTone(250,0.1,'triangle',0.022,0.08);
  } else if(kind==='flip'){
    playTone(460,0.05,'sine',0.018,0);
  } else if(kind==='reset'){
    playTone(300,0.06,'triangle',0.022,0);
    playTone(450,0.08,'triangle',0.022,0.06);
    playTone(620,0.12,'sine',0.02,0.13);
  } else if(kind==='nav'){
    playTone(480,0.05,'triangle',0.022,0);
    playTone(620,0.07,'sine',0.016,0.05);
  }
}

function animateFlashTransition(direction, updateFn, soundKind, effectClass=''){
  if(flashAnimating) return;
  const box=getFlashBox();
  if(!box){
    updateFn();
    return;
  }

  flashAnimating=true;

  box.classList.remove('swipe-left','swipe-right','is-entering','reset-bounce','flash-good','flash-hard');

  if(effectClass){
    box.classList.add(effectClass);
  }

  playFlashSound(soundKind);

  requestAnimationFrame(()=>{
    box.classList.add(direction==='right' ? 'swipe-right' : 'swipe-left');
  });

  setTimeout(()=>{
    updateFn();
    box.classList.remove('swipe-left','swipe-right','flash-good','flash-hard');
    box.classList.add('is-entering');

    setTimeout(()=>{
      box.classList.remove('is-entering');
      flashAnimating=false;
    }, 320);
  }, 230);
}

function animateFlashReset(updateFn){
  if(flashAnimating) return;
  const box=getFlashBox();
  if(!box){
    updateFn();
    return;
  }

  flashAnimating=true;
  playFlashSound('reset');

  box.classList.remove('swipe-left','swipe-right','is-entering','reset-bounce','flash-good','flash-hard');
  box.classList.add('reset-bounce');

  setTimeout(()=>{
    updateFn();
  }, 120);

  setTimeout(()=>{
    box.classList.remove('reset-bounce');
    flashAnimating=false;
  }, 520);
}

function animateFlashChange(direction, updateFn){
  if(flashAnimating) return;
  const box=getFlashBox();
  if(!box){
    updateFn();
    return;
  }

  flashAnimating=true;
  playFlashSound(direction==='left' ? 'prev' : 'next');

  box.classList.remove('swipe-left','swipe-right','is-entering','reset-bounce','flash-good','flash-hard');
  box.classList.add(direction==='left' ? 'swipe-left' : 'swipe-right');

  setTimeout(()=>{
    updateFn();
    box.classList.remove('swipe-left','swipe-right');
    box.classList.add('is-entering');
  }, 210);

  setTimeout(()=>{
    box.classList.remove('is-entering');
    flashAnimating=false;
  }, 560);
}

function buildFlashPool(){
  const selectedWeeks=getSelectedWeeks('flashWeek');
  const typeValue=document.getElementById('flashType').value;
  const orderValue=document.getElementById('flashOrder').value;

  flashPool=[...filterByWeekAndType(data, selectedWeeks, typeValue)];

  if(orderValue==='shuffle'){
    flashPool.sort(()=>Math.random()-.5);
  }

flashIndex=0;
flashFlipped=false;
flashSeen=flashPool.length ? 1 : 0;
flashProgressCount=flashPool.length ? 1 : 0;
renderFlash();
}

function resetFlash(){

  animateFlashReset(() => {

    flashProgressCount=0;

    buildFlashPool();

    updateFlashCounters();

  });
}

function resetFlashStats(){

  flashGoodCount = 0;
  flashHardCount = 0;

  updateFlashCounters();

}

function updateFlashCounters(){

  localStorage.setItem(
    'flashGoodCount',
    flashGoodCount
  );

  localStorage.setItem(
    'flashHardCount',
    flashHardCount
  );

  document.getElementById(
    'flashGoodCount'
  ).textContent =
    `Makkelijk: ${flashGoodCount}`;

  document.getElementById(
    'flashHardCount'
  ).textContent =
    `Moeilijk: ${flashHardCount}`;
}

function updateFlashMeta(){

  const total = flashPool.length;

  const flashProgressEl =
    document.getElementById('flashProgress');

  if(flashProgressEl){
    flashProgressEl.textContent =
      `Kaart ${flashProgressCount} van ${total}`;
  }

  const selectedWeeks=getSelectedWeeks('flashWeek');
  const typeValue=document.getElementById('flashType').value;
  const orderValue=document.getElementById('flashOrder').value;
  const typeLabel=typeValue==='alle' ? 'alle types' : typeValue;
  const orderLabel=orderValue==='shuffle' ? 'shuffle' : 'lijstvolgorde';

  updateFlashCounters();
}

function renderFlash(){
	
	console.log('renderFlash uitgevoerd');
	
  updateFlashMeta();

  if(!flashPool.length){
	  
	document.getElementById('flashContextWeek').textContent =
		'Week';

	document.getElementById('flashContextTopic').textContent =
		'Geen woorden gevonden';

	document.getElementById('flashContextProgress').textContent =
		'Kaart 0 van 0';
	  
    document.getElementById('flashWeekLabel').textContent='';
    document.getElementById('flashFront').textContent='Geen woorden.';
    document.getElementById('flashHint').textContent='Pas je filters aan.';
 
	const progressFill =
  document.querySelector(
    '.flash-progress-fill'
	  );

	if(progressFill){
	  progressFill.style.width='0%';
	}
	
    return;
  }

  const x=flashPool[flashIndex];
  const dir=document.getElementById('flashDir').value;
  
  document.getElementById('flashContextWeek').textContent =
  `Week ${x.week}`;

document.getElementById('flashContextTopic').textContent =
  x.type || 'Woordenlijst';

document.getElementById('flashContextProgress').textContent =
  `Kaart ${flashIndex + 1} van ${flashPool.length}`;
  
  const progressFill =
  document.querySelector(
    '.flash-progress-fill'
  );

if(progressFill){

  const progress =
    ((flashIndex + 1) /
      flashPool.length) * 100;

  progressFill.style.width =
    `${progress}%`;
}


  const flashWeekLabel =
  document.getElementById('flashWeekLabel');

if(flashWeekLabel){
  flashWeekLabel.textContent =
    `Week ${x.week} • ${x.type || 'zonder type'}`;
}
  if(!flashFlipped){

  document.getElementById('flashFront').innerHTML =
    `
      <div class="flash-front-word">
        ${
          dir==='nl-pa'
            ? escapeHtml(x.nederlands)
            : escapeHtml(x.papiamento)
        }
      </div>
    `;

}else{

  const answer =
    dir==='nl-pa'
      ? x.papiamento
      : x.nederlands;

  document.getElementById('flashFront').innerHTML =
    `
      <div class="flash-answer-word">
        ${escapeHtml(answer)}
      </div>

      <div class="flash-answer-variants">
        Varianten: ${escapeHtml(x.varianten || '-')}
      </div>

      <div class="flash-example">

        <div class="flash-example-title">
          Voorbeeld
        </div>

        <div class="flash-example-pa">
          ${escapeHtml(x.voorbeeld_papiamento || '-')}
        </div>

        <div class="flash-example-nl">
          ${escapeHtml(x.voorbeeld_nederlands || '-')}
        </div>

      </div>
    `;
}

  document.getElementById('flashHint').textContent=
    flashFlipped 
		? '' 
		: 'Tik of druk op spatie om om te draaien';

}

function flipFlash(){
  if(!flashPool.length || flashAnimating) return;
  flashFlipped=!flashFlipped;
  playFlashSound('flip');
  renderFlash();
}

function prevFlash(){
  if(!flashPool.length || flashAnimating) return;

  animateFlashChange('left', ()=>{
    flashIndex=(flashIndex-1+flashPool.length)%flashPool.length;
    flashFlipped=false;
    renderFlash();
  });
}

function nextFlash(){
  if(!flashPool.length || flashAnimating) return;

  animateFlashChange('right', ()=>{
    flashProgressCount++;
    flashIndex=(flashIndex+1)%flashPool.length;
    flashFlipped=false;
    renderFlash();
  });
}

function markFlashHard(){
  if(!flashPool.length || flashAnimating) return;

  animateFlashTransition('left', ()=>{
    flashProgressCount++;
    registerLearningActivity();
	flashHardCount++;
    const card=flashPool.splice(flashIndex,1)[0];
    const insertAt=Math.min(flashIndex+3, flashPool.length);
    flashPool.splice(insertAt,0,card);
    flashFlipped=false;
    renderFlash();
  }, 'hard', 'flash-hard');
}

function markFlashGood(){
  if(!flashPool.length || flashAnimating) return;

  animateFlashTransition('left', ()=>{
    flashProgressCount++;
    registerLearningActivity();
	flashGoodCount++;
    const card=flashPool.splice(flashIndex,1)[0];
    flashPool.push(card);
    if(flashIndex>=flashPool.length){ flashIndex=0; }
    flashFlipped=false;
    renderFlash();
  }, 'good', 'flash-good');
}

let currentQuiz=null;

let quizGood =
  Number(
    localStorage.getItem(
      'quizGood'
    )
  ) || 0;

let quizBad =
  Number(
    localStorage.getItem(
      'quizBad'
    )
  ) || 0;

let quizAnswered=0;
let quizRepeatQueue=[];
let quizRepeatMinGap=3;
let quizRepeatMaxGap=5;
const quizPepTalks = [
  {
    pa: 'Bo merece un pastechi.',
    nl: 'Jij verdient een pastechi.'
  },
  {
    pa: 'Bo merece dos pastechi, no uno so.',
    nl: 'Jij verdient twee pastechi, niet maar één.'
  },
  {
    pa: 'Shoco mes ta mira bo cu respeto.',
    nl: 'Zelfs de shoco kijkt met respect naar je.'
  },
  {
    pa: 'Bo ta un tiki loco, pero correcto.',
    nl: 'Je bent een beetje gek, maar wel correct.'
  },
  {
    pa: 'Bo ta papia manera bo a nace na Aruba.',
    nl: 'Je praat alsof je op Aruba bent geboren.'
  },
  {
    pa: 'Aruba ta yama: laga e turista, manda bo!',
    nl: 'Aruba roept: laat die toerist maar, stuur jou!'
  },
  {
    pa: 'Bo por hasi un waiter bira nervioso awor.',
    nl: 'Je kunt nu een ober zenuwachtig maken.'
  },
  {
    pa: 'Un tiki mas i bo ta pidi pastechi sin stress.',
    nl: 'Nog even en je bestelt pastechi zonder stress.'
  }
];

function getRandomPepTalk(){
  return quizPepTalks[Math.floor(Math.random() * quizPepTalks.length)];
}
function shouldShowPepTalk(){
  return quizGood > 0 && quizGood % 5 === 0;
}

function createQuizConfetti(){
  return `
    <div class="quiz-confetti" aria-hidden="true">
      <span></span><span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span><span></span>
      <span></span><span></span>
    </div>
  `;
}

function getPepTalkHtml(){
  const pep = getRandomPepTalk();
  return `
    <div class="quiz-pep">
      ${createQuizConfetti()}
      <div class="quiz-pep-badge">🎉 ${quizGood} vragen goed</div>
      <div class="quiz-pep-pa">${escapeHtml(pep.pa)}</div>
      <div class="quiz-pep-nl">${escapeHtml(pep.nl)}</div>
    </div>
  `;
}
function updateQuizStats(){

  localStorage.setItem(
    'quizGood',
    quizGood
  );

  localStorage.setItem(
    'quizBad',
    quizBad
  );

  document.getElementById(
    'quizScoreGood'
  ).textContent =
    `Goed: ${quizGood}`;

  document.getElementById(
    'quizScoreBad'
  ).textContent =
    `Fout: ${quizBad}`;

  document.getElementById(
    'quizQueueInfo'
  ).textContent =
    `Herhaling: ${quizRepeatQueue.length}`;
}

function resetQuizScore(){

  quizGood = 0;
  quizBad = 0;
  quizAnswered = 0;

  localStorage.removeItem(
    'quizGood'
  );

  localStorage.removeItem(
    'quizBad'
  );

  updateQuizStats();

}

function resetQuizSession(){
  quizGood=0;
  quizBad=0;
  quizAnswered=0;
  quizRepeatQueue=[];
  updateQuizStats();
  newQuiz();
}

function scheduleQuizRepeat(item){
  const exists=quizRepeatQueue.some(entry => entry.item.nummer===item.nummer && entry.item.week===item.week);
  if(exists) return;

  const stepsAway=Math.floor(Math.random()*(quizRepeatMaxGap-quizRepeatMinGap+1))+quizRepeatMinGap;
  quizRepeatQueue.push({ item, dueAfter: stepsAway });
  updateQuizStats();
}

function tickQuizRepeatQueue(){
  quizRepeatQueue.forEach(entry => entry.dueAfter--);
}

function newQuiz(){
  const selectedWeeks=getSelectedWeeks('quizWeek');
  const pool=byWeek(selectedWeeks);

  if(!pool.length){
    currentQuiz=null;
    document.getElementById('quizQ').textContent='Geen woorden voor deze weekselectie.';
    document.getElementById('quizA').value='';
    document.getElementById('quizF').innerHTML='';
    updateQuizStats();
    return;
  }

  const dueIndex=quizRepeatQueue.findIndex(entry => entry.dueAfter<=0 && weekMatches(entry.item, selectedWeeks));
  if(dueIndex>=0){
    currentQuiz=quizRepeatQueue.splice(dueIndex,1)[0].item;
  } else {
    currentQuiz=pool[Math.floor(Math.random()*pool.length)];
    tickQuizRepeatQueue();
  }

  const dir=document.getElementById('quizDir').value;
  document.getElementById('quizQ').textContent=
    dir==='nl-pa'
      ? `Wat is het Papiamento van: ${currentQuiz.nederlands}?`
      : `Wat is de Nederlandse betekenis van: ${currentQuiz.papiamento}?`;

  document.getElementById('quizA').value='';
  document.getElementById('quizF').innerHTML='';
  updateQuizStats();
}

function normalize(s){
  return (s||'')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g,'')
    .replace(/[^a-z0-9 ]/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}

function handleQuizEnter(event){
  if(event.key === 'Enter'){
    event.preventDefault();
    checkQuiz();
  }
}

function checkQuiz(){
  if(!currentQuiz) return;

  const dir=document.getElementById('quizDir').value;
  const rawInput=document.getElementById('quizA').value;
  const input=normalize(rawInput);

  const answers=(dir==='nl-pa'
    ? [currentQuiz.papiamento, currentQuiz.varianten]
    : [currentQuiz.nederlands, currentQuiz.varianten]
  )
    .join(',')
    .split(',')
    .map(s=>normalize(s))
    .filter(Boolean);

  const hasInput=input.length>0;
  const ok = hasInput && answers.some((a) => a && a.trim() === input.trim());

  quizAnswered++;

  if(ok){
    registerLearningActivity();
	quizGood++;
    const pepHtml = shouldShowPepTalk() ? getPepTalkHtml() : '';

    document.getElementById('quizF').innerHTML=`
      <div class="feedback good">Goed.</div>
      ${pepHtml}
      <div><strong>Juiste antwoord:</strong> ${escapeHtml(dir==='nl-pa' ? currentQuiz.papiamento : currentQuiz.nederlands)}</div>
      <div><strong>Voorbeeldzin:</strong> ${escapeHtml(currentQuiz.voorbeeld_papiamento || '-')}</div>
      <div><strong>Vertaling:</strong> ${escapeHtml(currentQuiz.voorbeeld_nederlands || '-')}</div>
      <div><strong>Nr.:</strong> ${currentQuiz.nummer}</div>
      <div><strong>Week:</strong> ${currentQuiz.week}</div>
    `;
  } else {
    registerLearningActivity();
	quizBad++;
    const pepHtml = shouldShowPepTalk() ? getPepTalkHtml() : '';
    scheduleQuizRepeat(currentQuiz);

    document.getElementById('quizF').innerHTML=`
      <div class="feedback bad">Fout.</div>
      ${pepHtml}
      <div><strong>Juiste antwoord:</strong> ${escapeHtml(dir==='nl-pa' ? currentQuiz.papiamento : currentQuiz.nederlands)}</div>
      <div><strong>Voorbeeldzin:</strong> ${escapeHtml(currentQuiz.voorbeeld_papiamento || '-')}</div>
      <div><strong>Vertaling:</strong> ${escapeHtml(currentQuiz.voorbeeld_nederlands || '-')}</div>
      <div><strong>Nr.:</strong> ${currentQuiz.nummer}</div>
      <div><strong>Week:</strong> ${currentQuiz.week}</div>
    `;
  }

  updateQuizStats();
}

document.addEventListener('keydown', function(e){
  const flashVisible=!document.getElementById('flashcards').classList.contains('hidden');
  if(!flashVisible) return;

  const tag=(document.activeElement && document.activeElement.tagName) ? document.activeElement.tagName.toLowerCase() : '';
  if(tag==='input' || tag==='textarea' || tag==='select' || document.activeElement.closest('.week-picker')) return;

  if(e.code==='Space'){
    e.preventDefault();
    flipFlash();
  } else if(e.key==='ArrowLeft'){
    e.preventDefault();
    prevFlash();
  } else if(e.key==='ArrowRight'){
    e.preventDefault();
    nextFlash();
  } else if(e.key==='m' || e.key==='M'){
    e.preventDefault();
    markFlashHard();
  } else if(e.key==='g' || e.key==='G'){
    e.preventDefault();
    markFlashGood();
  }
});

document.addEventListener('click', function(e){
  unlockFlashAudio();

  if(!e.target.closest('.week-picker')){
    closeWeekPickers();
  }
});

let meaningsHidden = false;

function updateMeaningButtons(){
  const html = meaningsHidden
    ? '<span aria-hidden="true">🙈</span><span class="toggle-text">Betekenis tonen</span>'
    : '<span aria-hidden="true">👁️</span><span class="toggle-text">Betekenis verbergen</span>';

  const topBtn = document.getElementById('toggleMeaningsBtn');
  const bottomBtn = document.getElementById('toggleMeaningsBtnBottom');

  if(topBtn) topBtn.innerHTML = html;
  if(bottomBtn) bottomBtn.innerHTML = html;
}

function updateWordToggleIcons(){
  document.querySelectorAll('.word-toggle').forEach(btn=>{
    btn.textContent = meaningsHidden ? '🙈' : '👁️';
  });
}

function toggleMeanings(){
  meaningsHidden = !meaningsHidden;
  document.getElementById('woordenlijst').classList.toggle('meaning-hidden', meaningsHidden);
  updateMeaningButtons();
  updateWordToggleIcons();
}
function updateMainNav(sectionId){
  const nav=document.getElementById('mainNav');
  if(!nav) return;

  const buttons=nav.querySelectorAll('button');
  buttons.forEach(btn=>{
    const onclickValue=btn.getAttribute('onclick') || '';
    const isActive=onclickValue.includes(`showSection('${sectionId}')`);
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
}

function updateBottomNav(screenId){

  const nav =
    document.getElementById(
      'bottomNav'
    );

  if(!nav){
    return;
  }

  const buttons =
    nav.querySelectorAll(
      'button'
    );

  buttons.forEach(btn => {

    const onclickValue =
      btn.getAttribute(
        'onclick'
      ) || '';

    const isActive =
      onclickValue.includes(
        `'${screenId}'`
      );

    btn.classList.toggle(
      'active',
      isActive
    );

  });

  if(screenId === 'woordenlijst'){

    const learnBtn =
      nav.querySelector(
        `button[onclick*="learnScreen"]`
      );

    if(learnBtn){
      learnBtn.classList.add('active');
    }

  }

}

// data voor pagina voorzetseltrainer
const prepositionExercises =
  window.prepositionExercises || [];

let currentPrepositionExercise = null;

let prepGood = 0;
let prepBad = 0;
let prepStreak = 0;

let prepBestStreak =
  Number(
    localStorage.getItem(
      'prepBestStreak'
    )
  ) || 0;

let currentTenseExercise = null;
let selectedTenses = [];
let originalTenseQuestion = '';

let tenseGood = 0;
let tenseBad = 0;
let tenseStreak = 0;

let tenseBestStreak =
  Number(
    localStorage.getItem(
      'tenseBestStreak'
    )
  ) || 0;

function startPrepositionExercise(level){

  document
    .querySelectorAll('#prepDifficultyNav button')
    .forEach(btn => {
      btn.classList.remove('active');
    });

  if(level === 'makkelijk'){
    document
      .getElementById('prepEasyBtn')
      .classList.add('active');
  }

  if(level === 'gemiddeld'){
    document
      .getElementById('prepMediumBtn')
      .classList.add('active');
  }

  if(level === 'moeilijk'){
    document
      .getElementById('prepHardBtn')
      .classList.add('active');
  }

  const pool =
    prepositionExercises.filter(
      x => x.level === level
    );

  currentPrepositionExercise =
    pool[Math.floor(Math.random()*pool.length)];

  renderPrepositionExercise();

}

function renderPrepositionExercise(){

  if(!currentPrepositionExercise)
    return;

  selectedPrepositions = [];
  
  originalPrepositionQuestion =
	currentPrepositionExercise.question;

  document.getElementById('prepQuestion').textContent =
    currentPrepositionExercise.question;

  document.getElementById('prepTranslation').textContent =
    currentPrepositionExercise.translation;

  const choices =
    document.getElementById('prepChoices');

  choices.innerHTML='';

  currentPrepositionExercise.choices.forEach(choice=>{

	choices.innerHTML += `
  <button
    class="btn white-outline prep-choice"
    onclick="selectPrepositionChoice(this,'${choice}')">
    ${choice}
  </button>
`;

  });

  document.getElementById('prepFeedback').innerHTML='';

}

let selectedPrepositions = [];
let originalPrepositionQuestion = '';

function checkPreposition(choice){

  const answer =
    currentPrepositionExercise.answer;

  // Eén antwoord

 if(!Array.isArray(answer)){

  const correct =
    choice === answer;
	
	const previewQuestion =
  originalPrepositionQuestion.replace(
    '___',
    `[${choice}]`
  );

document.getElementById(
  'prepQuestion'
).textContent =
  previewQuestion;

  if(correct){

    prepGood++;
    prepStreak++;
	
	if(prepStreak > prepBestStreak){

  prepBestStreak =
    prepStreak;

  localStorage.setItem(
    'prepBestStreak',
    prepBestStreak
  );

}

    document.getElementById(
      'prepFeedback'
    ).innerHTML =
      `
      <div class="feedback good">
        ✅ Goed!<br>
        ${currentPrepositionExercise.explanation}
      </div>
      `;

  }else{

    prepBad++;
    prepStreak = 0;

    document.getElementById(
      'prepFeedback'
    ).innerHTML =
      `
      <div class="feedback bad">
        ❌ Niet juist.<br>
        ${currentPrepositionExercise.explanation}
      </div>
      `;
  }

  updatePrepositionStats();

  return;
}

  // Meerdere antwoorden

  selectedPrepositions.push(choice);
  
  let previewQuestion =
  originalPrepositionQuestion;

selectedPrepositions.forEach(answer => {

  previewQuestion =
    previewQuestion.replace(
      '___',
      `[${answer}]`
    );

});

document.getElementById(
  'prepQuestion'
).textContent =
  previewQuestion;

  const totalNeeded =
    answer.length;

  if(
    selectedPrepositions.length <
    totalNeeded
  ){

    document.getElementById(
      'prepFeedback'
    ).innerHTML =
      `
      <div class="feedback">
        Kies nog ${
          totalNeeded -
          selectedPrepositions.length
        } antwoord(en).
      </div>
      `;

    return;
  }

  const allCorrect =
    JSON.stringify(answer) ===
    JSON.stringify(selectedPrepositions);

if(allCorrect){

  prepGood++;
  prepStreak++;
  
  if(prepStreak > prepBestStreak){

  prepBestStreak =
    prepStreak;

  localStorage.setItem(
    'prepBestStreak',
    prepBestStreak
  );

}

  document.getElementById(
    'prepFeedback'
  ).innerHTML =
    `
    <div class="feedback good">
      ✅ Helemaal goed!<br>
      ${currentPrepositionExercise.explanation}
    </div>
    `;

}else{

  prepBad++;
  prepStreak = 0;

  document.getElementById(
    'prepFeedback'
  ).innerHTML =
    `
    <div class="feedback bad">
      ❌ Niet helemaal goed.<br>
      Correcte volgorde:
      ${answer.join(' → ')}
      <br><br>
      ${currentPrepositionExercise.explanation}
    </div>
    `;
}

updatePrepositionStats();
}

function selectPrepositionChoice(button, choice){

  button.classList.add('prep-selected');

  setTimeout(() => {
    button.classList.remove('prep-selected');
  }, 250);

  checkPreposition(choice);

}

function nextPrepositionExercise(){

  console.log('NEXT BUTTON');

  if(!currentPrepositionExercise){
    return;
  }

  const level =
    currentPrepositionExercise.level;

  const pool =
    prepositionExercises.filter(
      x => x.level === level
    );

  let nextQuestion =
    pool[Math.floor(
      Math.random() * pool.length
    )];

  let attempts = 0;

  while(
    nextQuestion.question ===
      currentPrepositionExercise.question
    &&
    attempts < 10
  ){

    nextQuestion =
      pool[Math.floor(
        Math.random() * pool.length
      )];

    attempts++;
  }

  currentPrepositionExercise =
    nextQuestion;

  renderPrepositionExercise();
}

function updatePrepositionStats(){

  document.getElementById(
    'prepGood'
  ).textContent =
    `✅ ${prepGood}`;

  document.getElementById(
    'prepBad'
  ).textContent =
    `❌ ${prepBad}`;

  document.getElementById(
    'prepStreak'
  ).textContent =
    `🔥 ${prepStreak}`;

  document.getElementById(
    'prepBest'
  ).textContent =
    `🏆 ${prepBestStreak}`;

}

function updateTenseStats(){

  document.getElementById(
    'tenseGood'
  ).textContent =
    `✅ ${tenseGood}`;

  document.getElementById(
    'tenseBad'
  ).textContent =
    `❌ ${tenseBad}`;

  document.getElementById(
    'tenseStreak'
  ).textContent =
    `🔥 ${tenseStreak}`;

  document.getElementById(
    'tenseBest'
  ).textContent =
    `🏆 ${tenseBestStreak}`;

}

function resetTenseStats(){

  tenseGood = 0;
  tenseBad = 0;
  tenseStreak = 0;

  updateTenseStats();

}

function startTenseExercise(level){

  document
    .querySelectorAll('#tenseDifficultyNav button')
    .forEach(btn => btn.classList.remove('active'));

  if(level === 'makkelijk'){
    document.getElementById('tenseEasyBtn')
      .classList.add('active');
  }

  if(level === 'gemiddeld'){
    document.getElementById('tenseMediumBtn')
      .classList.add('active');
  }

  if(level === 'moeilijk'){
    document.getElementById('tenseHardBtn')
      .classList.add('active');
  }

  const pool =
    tenseExercises.filter(
      x => x.level === level
    );

  currentTenseExercise =
    pool[Math.floor(
      Math.random() * pool.length
    )];

  renderTenseExercise();

}

function renderTenseExercise(){

if(!currentTenseExercise){
  return;
}

selectedTenses = [];

originalTenseQuestion =
  currentTenseExercise.question;

  document.getElementById(
    'tenseQuestion'
  ).textContent =
    currentTenseExercise.question;

  document.getElementById(
    'tenseTranslation'
  ).textContent =
    currentTenseExercise.translation;

  const choices =
    document.getElementById(
      'tenseChoices'
    );

  choices.innerHTML='';

  currentTenseExercise.choices
    .forEach(choice=>{

      choices.innerHTML += `
        <button
          class="btn white-outline prep-choice"
          onclick="checkTense('${choice}')">

          ${choice}

        </button>
      `;

    });

  document.getElementById(
    'tenseFeedback'
  ).innerHTML='';

}

function checkTense(choice){

  const answer =
    currentTenseExercise.answer;

  // Eén antwoord

  if(!Array.isArray(answer)){

    const correct =
      choice === answer;

const previewQuestion =
  originalTenseQuestion.replace(
    '___',
    `[${choice}]`
  );

document.getElementById(
  'tenseQuestion'
).textContent =
  previewQuestion;

    if(correct){

      tenseGood++;
      tenseStreak++;
	  
	  if(tenseStreak > tenseBestStreak){

  tenseBestStreak =
    tenseStreak;

  localStorage.setItem(
    'tenseBestStreak',
    tenseBestStreak
  );

}

      document.getElementById(
        'tenseFeedback'
      ).innerHTML =
        `
        <div class="feedback good">
          ✅ Goed!<br>
          ${currentTenseExercise.explanation}
        </div>
        `;

    }else{

      tenseBad++;
      tenseStreak = 0;

      document.getElementById(
        'tenseFeedback'
      ).innerHTML =
        `
        <div class="feedback bad">
          ❌ Niet juist.<br>
          Correct antwoord:
          ${answer}
          <br><br>
          ${currentTenseExercise.explanation}
        </div>
        `;
    }

    updateTenseStats();

    return;

  }

  // Meerdere antwoorden

  selectedTenses.push(choice);
  
  let previewQuestion =
  originalTenseQuestion;

selectedTenses.forEach(answer => {

  previewQuestion =
    previewQuestion.replace(
      '___',
      `[${answer}]`
    );

});

document.getElementById(
  'tenseQuestion'
).textContent =
  previewQuestion;

  const totalNeeded =
    answer.length;

  if(
    selectedTenses.length <
    totalNeeded
  ){

    document.getElementById(
      'tenseFeedback'
    ).innerHTML =
      `
      <div class="feedback">
        Kies nog ${
          totalNeeded -
          selectedTenses.length
        } antwoord(en).
      </div>
      `;

    return;

  }

  const allCorrect =
    JSON.stringify(answer) ===
    JSON.stringify(selectedTenses);

  if(allCorrect){

    tenseGood++;
    tenseStreak++;
	
	if(tenseStreak > tenseBestStreak){

  tenseBestStreak =
    tenseStreak;

  localStorage.setItem(
    'tenseBestStreak',
    tenseBestStreak
  );

}

    document.getElementById(
      'tenseFeedback'
    ).innerHTML =
      `
      <div class="feedback good">
        ✅ Helemaal goed!<br>
        ${currentTenseExercise.explanation}
      </div>
      `;

  }else{

    tenseBad++;
    tenseStreak = 0;

    document.getElementById(
      'tenseFeedback'
    ).innerHTML =
      `
      <div class="feedback bad">
        ❌ Niet helemaal goed.<br>
        Correcte volgorde:
        ${answer.join(' → ')}
        <br><br>
        ${currentTenseExercise.explanation}
      </div>
      `;

  }

  updateTenseStats();

}

function nextTenseExercise(){

  if(!currentTenseExercise){
    return;
  }

  const level =
    currentTenseExercise.level;

  const pool =
    tenseExercises.filter(
      x => x.level === level
    );

  let nextQuestion =
    pool[Math.floor(
      Math.random() * pool.length
    )];

  let attempts = 0;

  while(
    nextQuestion.question ===
      currentTenseExercise.question
    &&
    attempts < 10
  ){

    nextQuestion =
      pool[Math.floor(
        Math.random() * pool.length
      )];

    attempts++;

  }

  currentTenseExercise =
    nextQuestion;

  renderTenseExercise();

}

function resetPrepositionStats(){

  prepGood = 0;
  prepBad = 0;
  prepStreak = 0;

  updatePrepositionStats();

}

// tijdsvormen trainer

const tenseExercises =
  window.tenseExercises || [];

function updateProgressScreen(){

  document.getElementById(
    'progressFlashGood'
  ).textContent =
    flashGoodCount;

  document.getElementById(
    'progressFlashHard'
  ).textContent =
    flashHardCount;

  document.getElementById(
    'progressQuizGood'
  ).textContent =
    quizGood;

  document.getElementById(
    'progressQuizBad'
  ).textContent =
    quizBad;

  document.getElementById(
    'progressPrepBest'
  ).textContent =
    prepBestStreak;

  document.getElementById(
    'progressTenseBest'
  ).textContent =
    tenseBestStreak;

document.getElementById(
  'progressWords'
).textContent =
  data.length;

document.getElementById(
  'progressPrepBestOverview'
).textContent =
  prepBestStreak;

document.getElementById(
  'progressTenseBestOverview'
).textContent =
  tenseBestStreak;

}

function getWeekNumber(date){

  const startOfYear =
    new Date(
      date.getFullYear(),
      0,
      1
    );

  const days =
    Math.floor(
      (date - startOfYear) /
      86400000
    );

  return Math.ceil(
    (days +
      startOfYear.getDay() +
      1) / 7
  );

}

function registerLearningActivity(){

const now = new Date();

const currentWeekNumber =
  getWeekNumber(now);

if(
  storedWeekNumber !==
  currentWeekNumber
){

  weeklyLearningDays = [];

  storedWeekNumber =
    currentWeekNumber;

  localStorage.setItem(
    'storedWeekNumber',
    storedWeekNumber
  );

}

  const today =
    now
      .toISOString()
      .split('T')[0];
	  
	if(
  !weeklyLearningDays.includes(
    today
  )
){
  weeklyLearningDays.push(
    today
  );
}

  if(!lastLearningDate){

    currentDailyStreak = 1;

  }else{

    const last =
      new Date(lastLearningDate);

    const current =
      new Date(today);

    const diffDays =
      Math.floor(
        (current - last) /
        (1000 * 60 * 60 * 24)
      );

    if(diffDays === 1){

      currentDailyStreak++;

    }else if(diffDays > 1){

      currentDailyStreak = 1;

    }

  }

  lastLearningDate =
    today;

  if(
    currentDailyStreak >
    bestDailyStreak
  ){
    bestDailyStreak =
      currentDailyStreak;
  }

  localStorage.setItem(
    'currentDailyStreak',
    currentDailyStreak
  );

  localStorage.setItem(
    'bestDailyStreak',
    bestDailyStreak
  );

  localStorage.setItem(
    'lastLearningDate',
    lastLearningDate
  );
  
  localStorage.setItem(
  'weeklyLearningDays',
  JSON.stringify(
    weeklyLearningDays
  )
);
  
  updateHomeStats();

}

function getWordOfDay(){

  const today =
    new Date()
      .toISOString()
      .split('T')[0];

  const hash =
    today
      .split('')
      .reduce(
        (a, c) => a + c.charCodeAt(0),
        0
      );

  return data[
    hash % data.length
  ];

}

function updateHomeStats(){

  const weeklyProgress =
    Math.round(
      (weeklyLearningDays.length / 7) * 100
    );

  document.getElementById(
    'homeWordCount'
  ).textContent =
    data.length;

  document.getElementById(
    'homeCurrentStreak'
  ).textContent =
    currentDailyStreak;

  document.getElementById(
    'homeBestStreak'
  ).textContent =
    bestDailyStreak;

  document.getElementById(
    'homeHeroSubtitle'
  ).textContent =
    `${weeklyLearningDays.length} van 7 dagen deze week`;

  document.getElementById(
    'homeHeroProgress'
  ).style.width =
    `${weeklyProgress}%`;

document.getElementById(
  'homeHeroScore'
).textContent =
  `${weeklyLearningDays.length}/7`;

const word =
  getWordOfDay();

if(word){

  document.getElementById(
    'wordOfDay'
  ).innerHTML =
    `
      <div class="word">
        ${word.papiamento}
      </div>

      <div class="meta">
        ${word.nederlands}
      </div>
    `;

} 

renderWeekTracker();

}

function renderWeekTracker(){

  const days = [
    'Ma',
    'Di',
    'Wo',
    'Do',
    'Vr',
    'Za',
    'Zo'
  ];

  const completed =
    weeklyLearningDays.length;

  document.getElementById(
    'weekTracker'
  ).innerHTML =
    days.map(
      (day, index) => `
        <div class="week-day">

          <div class="week-day-label">
            ${day}
          </div>

          <div class="
            week-day-dot
            ${index < completed ? 'active' : ''}
          ">
          </div>

        </div>
      `
    ).join('');

}

function init(){
  const wordCount =
  document.getElementById('wordCount');

if(wordCount){
  wordCount.textContent =
    data.length;
}

  fillWeekPicker('weekFilter');
  fillWeekPicker('flashWeek');
  fillWeekPicker('quizWeek');
  fillTypeSelect('flashType');

  renderList();
  updateMeaningButtons();
  updateWordToggleIcons();
  resetFlash();
  updateQuizStats();
  newQuiz();
  showMainScreen('homeScreen');
  updatePrepositionStats();
  updateTenseStats();
  updateHomeStats();
}

console.log(window.wordsData);

function showMainScreen(screenId){

	updateBottomNav(screenId);

  [
  'homeScreen',
  'woordenlijst',
  'practiceScreen',
  'progressScreen',
  'profileScreen',
  'flashcards',
  'quiz',
  'oefeningen'
]

.forEach(id => {

    const el = document.getElementById(id);

    if(el){
      el.classList.add('hidden');
    }

  });

  if(screenId === 'homeScreen'){
	  
	 updateScreenBar(
		'Home',
		false
	);
	  
    document
      .getElementById('homeScreen')
      .classList.remove('hidden');
  }

  if(screenId === 'learnScreen'){

  updateScreenBar(
    'Learn',
    true,
    () => showMainScreen('homeScreen')
  );

  document
    .getElementById('woordenlijst')
    .classList.remove('hidden');

  renderList();
}

  if(screenId === 'practiceScreen'){
	  
	 updateScreenBar(
		'Study',
		true,
	() => showMainScreen('homeScreen')
	);
	  
    document
      .getElementById('practiceScreen')
      .classList.remove('hidden');
  }
  
if(screenId === 'progressScreen'){

  updateScreenBar(
    'Progress',
    true,
    () => showMainScreen('homeScreen')
  );

  document
    .getElementById('progressScreen')
    .classList.remove('hidden');

  updateProgressScreen();

}

if(screenId === 'profileScreen'){

  updateScreenBar(
    'Profile',
    true,
    () => showMainScreen('homeScreen')
  );

  document
    .getElementById('profileScreen')
    .classList.remove('hidden');

}
  
}

init();