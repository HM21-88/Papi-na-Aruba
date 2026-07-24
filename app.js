const APP_CONFIG = {
  variant: localStorage.getItem('languageVariant') || 'pao',
  showOtherVariant:
  localStorage.getItem(
    'showOtherVariant'
  ) !== 'false',

  subscription: 'free',

  kidsMode:
    localStorage.getItem(
      'kidsMode'
    ) === 'true'
};

(function(){
  const header = document.querySelector('.screen-bar');
  if(!header) return;

  window.addEventListener('scroll', function(){
    header.classList.toggle('is-scrolled', window.scrollY > 6);
  }, { passive:true });
})();

const data = window.wordsData || [];

data.forEach(word => {

  if(!word.id){

    word.id =
      `${word.papiamento}_${word.nummer}`;

  }

});

function getWordById(id){

  return data.find(
    item =>
      item.id === id
  );

}

function getAcceptedAnswers(word){

  if(
    !word ||
    !word.nederlands
  ){
    return [];
  }

  return word.nederlands
    .split(',')
    .map(answer =>
      answer
        .toLowerCase()
        .trim()
        .replace(/[.,!?]/g,'')
    );

}

function normalizeAnswer(text){
    return text
        .trim()
        .toLowerCase()
        .replace(/[.,!?]/g,'');
}

const sayingsData = window.sayingsData || [];

const holidaysData = window.holidaysData || [];

function speakText(text){

  if(!window.speechSynthesis){
    alert('Spraak wordt niet ondersteund op dit apparaat.');
    return;
  }

  const utterance =
    new SpeechSynthesisUtterance(text);

  utterance.lang = 'es-ES';

  utterance.rate = 0.9;
  utterance.pitch = 1;

  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function speakCurrentFlash(){

  if(!flashPool.length){
    return;
  }

  const card = flashPool[flashIndex];

  if(!card){
    return;
  }

  const word = getPrimaryWord(card);

  speakText(word);
}


function getRandomCompletionMessage(){

const messages = [

  'Hopi bon!',
  'Bon trabou!',
  'Sigue asina!',
  'Masha bon!',
  'Excelente!',
  'Bo ta progresando!',
  'Asina mes!',
  'Bo ta hasi bon!',
  'Bo ta yega leu!'

];

  return messages[
    Math.floor(
      Math.random() *
      messages.length
    )
  ];

}

const UI_TEXT = {

  nl: {

    sessionCompleted:
      'Je woordenschat is weer gegroeid.',

    practiceFinishedLine1:
      'Vandaag heb je goed gewerkt.',

    practiceFinishedLine2:
      'Morgen staan er nieuwe woorden klaar.'

  },

  en: {

    sessionCompleted:
      'Your vocabulary has grown again.',

    practiceFinishedLine1:
      'You did a great job today.',

    practiceFinishedLine2:
      'New words will be waiting tomorrow.'

  }

};

function t(key){

  const language =
    getAppLanguage();

  return (
    UI_TEXT[
      language
    ]?.[key] ||

    UI_TEXT.nl[key] ||

    key
  );

}

function getSessionCompletedText(){

  return t(
    'sessionCompleted'
  );

}


function getAppLanguage(){

  return (
    localStorage.getItem(
      'appLanguage'
    ) || 'nl'
  );

}

function isPapiamento(){
  return APP_CONFIG.variant === 'pao';
}

function isPapiamentu(){
  return APP_CONFIG.variant === 'pau';
}

function getPrimaryWord(word){
 
 return isPapiamento()
    ? (word.papiamento || '')
    : (word.papiamentu || word.papiamento || '');
}

function getPrimaryExample(word){
  return isPapiamento()
    ? (word.voorbeeld_papiamento || '')
    : (
        word.voorbeeld_papiamentu ||
        word.voorbeeld_papiamento ||
        ''
      );
}

function getSecondaryWord(word){
  return isPapiamento()
    ? (word.papiamentu || '')
    : (word.papiamento || '');
}

function hasSecondaryWord(word){

  const secondary =
    getSecondaryWord(word);

  const primary =
    getPrimaryWord(word);

  return (
    secondary &&
    secondary.trim() !== '' &&
    secondary !== primary
  );
}

function shouldShowSecondaryWord(word){

  return (
    APP_CONFIG.showOtherVariant &&
    hasSecondaryWord(word)
  );
}

function toggleLanguageVariant(){

  APP_CONFIG.variant =
    APP_CONFIG.variant === 'pao'
      ? 'pau'
      : 'pao';

  localStorage.setItem(
    'languageVariant',
    APP_CONFIG.variant
  );

  updateLanguageChip();

  renderList();

  renderFlash();
  
  updateHomeStats();

  if(currentQuiz){
    newQuiz();
  }

  updateHomeStats();
}

function setLanguageVariant(
  variant
){

  APP_CONFIG.variant =
    variant;

  localStorage.setItem(
    'languageVariant',
    variant
  );

  updateLanguageChip();

  renderList();

  renderFlash();

  updateHomeStats();

  if(currentQuiz){
    newQuiz();
  }

}

function toggleOtherVariant(){

  APP_CONFIG.showOtherVariant =
    !APP_CONFIG.showOtherVariant;

  localStorage.setItem(
    'showOtherVariant',
    APP_CONFIG.showOtherVariant
  );

  renderList();
  renderFlash();
  updateHomeStats();

}

function toggleKidsMode(){

  APP_CONFIG.kidsMode =
    !APP_CONFIG.kidsMode;

  localStorage.setItem(
    'kidsMode',
    APP_CONFIG.kidsMode
  );

}

function updateLanguageChip(){

  const paoBtn =
    document.getElementById('paoBtn');

  const pauBtn =
    document.getElementById('pauBtn');

  const profilePaoBtn =
    document.getElementById('profilePaoBtn');

  const profilePauBtn =
    document.getElementById('profilePauBtn');

  const isPao =
    APP_CONFIG.variant === 'pao';

  if(paoBtn){
    paoBtn.classList.toggle(
      'active',
      isPao
    );
  }

  if(pauBtn){
    pauBtn.classList.toggle(
      'active',
      !isPao
    );
  }

  if(profilePaoBtn){
    profilePaoBtn.classList.toggle(
      'active',
      isPao
    );
  }

  if(profilePauBtn){
    profilePauBtn.classList.toggle(
      'active',
      !isPao
    );
  }
  
  const paoToggle =
  document.getElementById(
    'profilePaoToggle'
  );

const pauToggle =
  document.getElementById(
    'profilePauToggle'
  );

if(paoToggle){
  paoToggle.checked =
    APP_CONFIG.variant === 'pao';
}

if(pauToggle){
  pauToggle.checked =
    APP_CONFIG.variant === 'pau';
}
  
}

const weekSelections = {
  weekFilter: ['alle'],
  flashWeek: ['alle'],
  quizWeek: ['alle']
};

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
    'Woordenlijst',
    true,
    () => showMainScreen('practiceScreen')
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
  item.papiamento || '',
  item.papiamentu || '',
  item.nederlands || '',
  item.varianten || '',
  item.type || '',
  item.uitspraak || ''
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
  `${data.length} woorden`;

}

  const list=document.getElementById('list');

  if(!filtered.length){
    list.innerHTML='<div class="list-item">Geen woorden gevonden.</div>';
    return;
  }

  list.innerHTML=filtered.map((item,index)=>{
    const dayBlock=Math.floor(index / 15) % 3;
	const group=dayBlock===0 ? 'blue' : dayBlock===1 ? 'red' : 'yellow';
    
	const meaningId =
	`meaning-${index}-${item.week}-${item.nummer}`;

	const exampleId =
	  `example-${index}-${item.week}-${item.nummer}`;
    
	return `
    
	
	  <div class="list-item group-${group}">
        <div class="list-item-top">
          <div class="list-main">
            
	<div class="word-card-header">
		<span class="word-week-badge group-${group}">
			● Week ${item.week}
		</span>

  <span class="word-number">
    #${item.nummer}
  </span>
</div>

<div class="word-type">
  ${escapeHtml(item.type || '-')}
</div>
            
<div class="word">
  ${escapeHtml(
    getPrimaryWord(item) || '-'
  )}
</div>

${
  shouldShowSecondaryWord(item)
    ? `
      <div class="word-secondary">

  <span class="variant-tag">
    ${
      isPapiamento()
        ? 'PAU'
        : 'PAO'
    }
  </span>

  ${escapeHtml(
    getSecondaryWord(item)
  )}

</div>
    `
    : ''
}
            
		<div class="meaning-line">

	  <span
		id="${meaningId}"
		class="meaning-text">

		${escapeHtml(item.nederlands || '-')}

  </span>

</div>
			
 <div class="meta">
  Varianten: ${escapeHtml(item.varianten || '-')}
</div>

<div
  id="${exampleId}"
  class="word-example">
  
	<div class="word-example-pa">
	  ${escapeHtml(getPrimaryExample(item))}
	</div>

  <div class="word-example-nl">
    ${escapeHtml(item.voorbeeld_nederlands)}
  </div>
</div>
           
   ${
	  item.uitspraak
		? `
		  <div class="meta">
			Uitspraak: ${escapeHtml(item.uitspraak)}
		  </div>
		`
		: ''
	}

         
		 </div>

<div class="word-actions">

  <button
    class="audio-btn"
    type="button"
    onclick="speakText('${escapeHtml(
      getPrimaryWord(item)
    )}')">

    <i data-lucide="volume-2"></i>

  </button>

  <button
    class="word-toggle"
    type="button"
    onclick="toggleWordMeaning(
      '${meaningId}',
      '${exampleId}',
      this
    )"
    aria-label="Betekenis tonen of verbergen">

    <i data-lucide="${
      meaningsHidden
        ? 'eye'
        : 'eye-off'
    }"></i>

  </button>

</div>

</div>
</div>

</div>
`;
  }).join('');

  updateWordToggleIcons();
  lucide.createIcons();
}

function toggleWordMeaning(
  meaningId,
  exampleId,
  btn
){
  const meaning =
    document.getElementById(
      meaningId
    );

  const example =
    document.getElementById(
      exampleId
    );

  if(!meaning) return;

  const isHidden =
    meaning.style.display === 'none';

  meaning.style.display =
    isHidden ? '' : 'none';

  if(example){
    example.style.display =
      isHidden ? '' : 'none';
  }

	btn.innerHTML =
	  isHidden
		? '<i data-lucide="chevron-up"></i>'
		: '<i data-lucide="chevron-down"></i>';

  lucide.createIcons();
}

let flashPool=[];
let flashIndex=0;
let flashFlipped=false;
let flashSeen=0;
let flashProgressCount=0;

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

  flashHardCount = 0;

  updateFlashCounters();

}

function updateFlashCounters(){

  localStorage.setItem(
    'flashHardCount',
    flashHardCount
  );

  document.getElementById(
    'flashHardCount'
  ).textContent =
    `🧠 Moeilijk: ${flashHardCount}`;
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
			  : escapeHtml(getPrimaryWord(x))
        }
      </div>
    `;

}else{

const answer =
  dir==='nl-pa'
    ? getPrimaryWord(x)
    : x.nederlands;

  document.getElementById('flashFront').innerHTML =
    `
<div class="flash-answer-word">
  ${escapeHtml(answer)}
</div>

${
  shouldShowSecondaryWord(x)
    ? `
      <div class="flash-secondary-word">

        <span class="variant-tag">
          ${
            isPapiamento()
              ? 'PAU'
              : 'PAO'
          }
        </span>

        ${escapeHtml(
          getSecondaryWord(x)
        )}

      </div>
    `
    : ''
}

<div class="flash-answer-variants">
  Varianten: ${escapeHtml(x.varianten || '-')}
</div>

      <div class="flash-example">

        <div class="flash-example-title">
          Voorbeeld
        </div>

        <div class="flash-example-pa">
          ${escapeHtml(getPrimaryExample(x) || '-')}
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

  const box=getFlashBox();
  if(box){
    box.classList.remove('is-flipping');
    void box.offsetWidth;
    box.classList.add('is-flipping');
  }

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
      ? `Wat is het Papiaments van: ${currentQuiz.nederlands}?`
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

  const primaryAnswer =
  normalize(
    getPrimaryWord(currentQuiz)
  );

const secondaryAnswer =
  normalize(
    getSecondaryWord(currentQuiz)
  );

const otherAnswers =
  (
    dir === 'nl-pa'
      ? currentQuiz.varianten
      : currentQuiz.nederlands
  )
    .split(',')
    .map(s => normalize(s))
    .filter(Boolean);

const primaryCandidates =
  [primaryAnswer, ...otherAnswers]
    .filter(Boolean);

const secondaryCandidates =
  (
    dir === 'nl-pa' &&
    secondaryAnswer &&
    secondaryAnswer !== primaryAnswer
  )
    ? [secondaryAnswer]
    : [];

const matchResult =
  evaluateAnswer({
    input,
    primaryCandidates,
    secondaryCandidates,
    context:'practice'
  });

const ok = matchResult.ok;
const matchType = matchResult.matchType;
const isTypo = matchType === 'typo';
const isCrossDialect = matchType === 'cross_dialect';

let variantNotice = '';

if(
  dir === 'nl-pa' &&
  isCrossDialect
){

variantNotice = `
	<div class="quiz-variant-warning">

	⚠️ Andere taalvariant gebruikt

	<br><br>

		Je antwoord is goed,

		maar je gebruikte de ${

		isPapiamento()

		? 'PAU'

		: 'PAO'

		}-variant.

</div>

    <div class="quiz-variant-pair">

      <span class="variant-tag">
        ${
          isPapiamento()
            ? 'PAO'
            : 'PAU'
        }
      </span>

      ${escapeHtml(
        getPrimaryWord(currentQuiz)
      )}

      <br>

      <span class="variant-tag">
        ${
          isPapiamento()
            ? 'PAU'
            : 'PAO'
        }
      </span>

      ${escapeHtml(
        getSecondaryWord(currentQuiz)
      )}

    </div>
  `;
}

let typoNotice = '';

if(isTypo){

typoNotice = `
	<div class="quiz-variant-warning">

	✏️ Bijna goed! Let op de spelling.

	<br><br>

		Juiste antwoord: <strong>${escapeHtml(
		  dir==='nl-pa'
		    ? getPrimaryWord(currentQuiz)
		    : currentQuiz.nederlands
		)}</strong>

	</div>
  `;
}

logQuizAttempt({

  word_id:
    currentQuiz.id,

  typed_answer:
    rawInput,

  correct:
    ok,

  match_type:
    matchType,

  category:
    'woordenschat'

});

updateWordProgress(
  currentQuiz.id,
  ok,
  { reducedJump: isTypo }
);

quizAnswered++;

  if(ok){
    registerLearningActivity();
	quizGood++;
    const pepHtml = shouldShowPepTalk() ? getPepTalkHtml() : '';

    document.getElementById('quizF').innerHTML=`
      <div class="feedback good">Goed.</div>
      ${pepHtml}

	  ${variantNotice}
	  ${typoNotice}

      <div><strong>Juiste antwoord:</strong> ${escapeHtml(
  dir==='nl-pa'
    ? getPrimaryWord(currentQuiz)
    : currentQuiz.nederlands
)}</div>
      <div><strong>Voorbeeldzin:</strong> ${escapeHtml(getPrimaryExample(currentQuiz) || '-')}</div>
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
      <div><strong>Juiste antwoord:</strong> ${escapeHtml(dir==='nl-pa' ? getPrimaryWord(currentQuiz) : currentQuiz.nederlands)}</div>
      <div><strong>Voorbeeldzin:</strong> ${escapeHtml( getPrimaryExample(currentQuiz) || '-')}</div>
      <div><strong>Vertaling:</strong> ${escapeHtml(currentQuiz.voorbeeld_nederlands || '-')}</div>
      <div><strong>Nr.:</strong> ${currentQuiz.nummer}</div>
      <div><strong>Week:</strong> ${currentQuiz.week}</div>
    `;
  }

  updateQuizStats();
}

let flashSwipeTracking=false;
let flashSwipeStartX=0;
let flashSwipeStartY=0;
let flashSwipeStartTime=0;

function initFlashSwipe(){
  const box=getFlashBox();
  if(!box) return;

  box.addEventListener('touchstart', function(e){
    if(e.touches.length!==1) return;
    flashSwipeTracking=true;
    flashSwipeStartX=e.touches[0].clientX;
    flashSwipeStartY=e.touches[0].clientY;
    flashSwipeStartTime=Date.now();
  }, {passive:true});

  box.addEventListener('touchend', function(e){
    if(!flashSwipeTracking) return;
    flashSwipeTracking=false;

    if(!flashPool.length || flashAnimating) return;

    const touch=e.changedTouches[0];
    const deltaX=touch.clientX-flashSwipeStartX;
    const deltaY=touch.clientY-flashSwipeStartY;
    const elapsed=Date.now()-flashSwipeStartTime;

    const SWIPE_MIN_DISTANCE=45;
    const SWIPE_MAX_OFFAXIS=60;
    const SWIPE_MAX_TIME=700;

    if(Math.abs(deltaX)<SWIPE_MIN_DISTANCE || Math.abs(deltaY)>SWIPE_MAX_OFFAXIS || elapsed>SWIPE_MAX_TIME){
      return;
    }

    e.preventDefault();

    if(deltaX<0){
      nextFlash();
    } else {
      prevFlash();
    }
  });

  box.addEventListener('touchcancel', function(){
    flashSwipeTracking=false;
  });
}

initFlashSwipe();

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

  const html =
    meaningsHidden
      ? `
        <i data-lucide="chevrons-down"></i>
      `
      : `
        <i data-lucide="chevrons-up"></i>
      `;

  const topBtn =
    document.getElementById(
      'toggleMeaningsBtn'
    );

  if(topBtn){
    topBtn.innerHTML = html;
  }

  lucide.createIcons();
}


function updateWordToggleIcons(){

  document
    .querySelectorAll('.word-toggle')
    .forEach(btn => {

      btn.innerHTML =
        meaningsHidden
          ? `
            <i data-lucide="chevron-down"></i>
          `
          : `
            <i data-lucide="chevron-up"></i>
          `;

    });

  lucide.createIcons();
}

function toggleMeanings(){

  meaningsHidden = !meaningsHidden;

  document
    .querySelectorAll('.meaning-text')
    .forEach(el => {
      el.style.display =
        meaningsHidden
          ? 'none'
          : '';
    });

  document
    .querySelectorAll('.meaning-placeholder')
    .forEach(el => {
      el.style.display =
        meaningsHidden
          ? 'inline'
          : 'none';
    });

  document
    .querySelectorAll('.word-example')
    .forEach(el => {
      el.style.display =
        meaningsHidden
          ? 'none'
          : '';
    });

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

  const words =
    document.getElementById(
      'progressWords'
    );

  if(words){
    words.textContent =
      data.length;
  }

  const prep =
    document.getElementById(
      'progressPrepBestOverview'
    );

  if(prep){
    prep.textContent =
      prepBestStreak;
  }

  const tense =
    document.getElementById(
      'progressTenseBestOverview'
    );

  if(tense){
    tense.textContent =
      tenseBestStreak;
  }

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

function getSayingTranslation(
  saying
){

  const appLanguage =
    localStorage.getItem(
      'appLanguage'
    ) || 'nl';

  if(appLanguage === 'en'){

    return (
      saying.en_gezegde ||
      saying.en
    );

  }

  return (
    saying.nl_gezegde ||
    saying.nl
  );
}

//Test functie om te dwingen holiday te laten zien in home-tegel
///function getHolidayToday(){return holidaysData[0];}

function getHolidayToday(){

  const today = new Date();

  const month =
    today.getMonth() + 1;

  const day =
    today.getDate();

  return holidaysData.find(
    holiday =>
      holiday.month === month &&
      holiday.day === day
  );

}

function getIslandFlag(
  island
){

  switch(island){

    case 'Aruba':
      return '🇦🇼';

    case 'Curaçao':
      return '🇨🇼';

    case 'Bonaire':
      return '🇧🇶';

    case 'ABC':
      return '🌴';

    default:
      return '🏝️';

  }

}

function renderSayingOfDay(){

  const container =
    document.getElementById(
      'sayingOfDay'
    );

  const title =
    document.getElementById(
      'sayingCardTitle'
    );

  if(!container || !title){
    return;
  }

  const holiday =
    getHolidayToday();

  if(holiday){

    title.innerHTML =
      '<i data-lucide="party-popper"></i> Feestdag';

    container.innerHTML = `
      <div class="saying-text">
        ${holiday.title}
      </div>

      <div class="saying-translation">
        ${getIslandFlag(
          holiday.island
        )}
        ${holiday.island}
        ·
        ${holiday.nl}
      </div>
    `;

    lucide.createIcons();

    return;
  }

  title.innerHTML =
    '<i data-lucide="message-circle"></i> Dicho';

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

  const saying =
    sayingsData[
      hash % sayingsData.length
    ];

  const text =
    APP_CONFIG.variant === 'pao'
      ? saying.pao
      : saying.pau;

  container.innerHTML = `
    <div class="saying-text">
      "${text}"
    </div>

    <div class="saying-translation">
      ${getSayingTranslation(
        saying
      )}
    </div>
  `;

  lucide.createIcons();
}

function getReviewWords(
  limit = 3
){

  return data
    .slice()
    .sort(
      () => Math.random() - 0.5
    )
    .slice(0, limit)
    .map(word => [
      word.id,
      {}
    ]);

}

function renderDifficultWords(){

  const container =
    document.getElementById(
      'difficultWordsCard'
    );

  if(!container){
    return;
  }

if(
  !difficultWordQueue.length
){

  difficultWordQueue =
    getDifficultWords(3);

  if(
    !difficultWordQueue.length
  ){
    difficultWordQueue =
      getReviewWords(3);
  }

}

  if(
    !difficultWordQueue.length
  ){

    container.innerHTML = `
  <div class="meta">
    🎉 Geen oefenwoorden beschikbaar.
  </div>
`;


    return;

  }

  const [
    wordId
  ] =
    difficultWordQueue[
      currentDifficultIndex
    ];

	const word =
	  data.find(
		item =>
		  item.id === wordId
	  );

  container.innerHTML = `
    <div class="difficult-word">
      ${getPrimaryWord(word)}
    </div>

    <div class="meta">
      ${word.nederlands}
    </div>

    <div class="difficult-actions">

      <button
	  class="btn-know"
	  onclick="handleDifficultWord(true)">
        ✅ Wist ik
      </button>

      <button
	  class="btn-hard"
	  onclick="handleDifficultWord(false)">
        ❌ Nog moeilijk
      </button>

    </div>

    <div class="difficult-counter">
      Palabra
		${currentDifficultIndex + 1}
		di
		${difficultWordQueue.length}
    </div>
  `;
}


let difficultWordQueue = [];

let currentDifficultIndex = 0;

function handleDifficultWord(
  knewIt
){

  const [
    wordId
  ] =
    difficultWordQueue[
      currentDifficultIndex
    ];

  updateWordProgress(
    wordId,
    knewIt
  );

  currentDifficultIndex++;

  if(
    currentDifficultIndex >=
    difficultWordQueue.length
  ){
	 difficultWordQueue = [];
	
	currentDifficultIndex = 0;

    const container =
      document.getElementById(
        'difficultWordsCard'
      );

container.innerHTML = `
  <div class="difficult-word">
    🎉 ${getRandomCompletionMessage()}
  </div>

  <div class="meta">
    ${getSessionCompletedText()}
  </div>

  <div class="difficult-actions">

    <button
      class="btn-know"
      onclick="startNextDifficultWords()">

      🚀 3 palabra mas

    </button>

    <button
	  class="btn-hard"
	  onclick="finishPracticeSession()">

	  👍 Kla pa awe

	</button>

  </div>
`;

    return;

  }

  renderDifficultWords();

}

function startNextDifficultWords(){

  difficultWordQueue = [];

  currentDifficultIndex = 0;

  renderDifficultWords();

}

function finishPracticeSession(){

  const container =
    document.getElementById(
      'difficultWordsCard'
    );

  if(!container){
    return;
  }

  container.innerHTML = `
    <div class="difficult-word">
      🌴 Te aworaki!
    </div>

    <div class="meta">
      ${t(
	  'practiceFinishedLine1'
	)}

	<br><br>

	${t(
	  'practiceFinishedLine2'
	)}
    </div>

    <div class="difficult-actions">

      <button
        class="btn-know"
        onclick="startNextDifficultWords()">

        🚀 3 palabra mas

      </button>

    </div>
  `;
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
<div class="word-of-day-header">

  <div class="word">
    ${getPrimaryWord(word)}
  </div>

  <button
    class="audio-btn"
    type="button"
    onclick="speakText('${getPrimaryWord(word)}')">

    <i data-lucide="volume-2"></i>

  </button>

</div>

${
  shouldShowSecondaryWord(word)
    ? `
      <div class="word-secondary">

        <span class="variant-tag">
          ${
            isPapiamento()
              ? 'PAU'
              : 'PAO'
          }
        </span>

        ${getSecondaryWord(word)}

      </div>
    `
    : ''
}

<div class="meta">
  ${word.nederlands}
</div>
`;

} 

lucide.createIcons();

renderWeekTracker();

renderSayingOfDay();

renderDifficultWords();

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

  const activeDays =
    weeklyLearningDays.map(dateStr => {

      const date =
        new Date(dateStr);

      const day =
        date.getDay();

      // JS:
      // 0=Zo
      // 1=Ma
      // 2=Di
      // ...
      // wij willen:
      // 0=Ma
      // 1=Di
      // ...
      // 6=Zo

      return day === 0
        ? 6
        : day - 1;
    });

  document.getElementById(
    'weekTracker'
  ).innerHTML =
    days.map((day, index) => `
      <div class="week-day">

        <div class="week-day-label">
          ${day}
        </div>

        <div class="
          week-day-dot
          ${
            activeDays.includes(index)
              ? 'active'
              : ''
          }
        ">
        </div>

      </div>
    `).join('');
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
  updateLanguageChip();
  
  const toggle =
  document.getElementById(
    'showOtherVariantToggle'
  );

if(toggle){
  toggle.checked =
    APP_CONFIG.showOtherVariant;
}

const kidsToggle =
  document.getElementById(
    'kidsModeToggle'
  );

if(kidsToggle){
  kidsToggle.checked =
    APP_CONFIG.kidsMode;
}
}

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
  'oefeningen',
  'travelScreen',
  'locationOverviewScreen',
  'airportLessonScreen'
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

    updateHomeStats();
  }

// Woordenlijst is vanuit Oefenen bereikbaar.
// Terugnavigeert naar practiceScreen.

if(screenId === 'learnScreen'){

  updateScreenBar(
    'Woordenlijst',
    true,
    () => showMainScreen('practiceScreen')
  );

  document
    .getElementById('woordenlijst')
    .classList.remove('hidden');

  renderList();

}

  if(screenId === 'practiceScreen'){
	  
	 updateScreenBar(
		'Oefenen',
		true,
	() => showMainScreen('homeScreen')
	);
	  
    document
      .getElementById('practiceScreen')
      .classList.remove('hidden');
  }
  
if(screenId === 'progressScreen'){

  updateScreenBar(
    'Voortgang',
    true,
    () => showMainScreen('homeScreen')
  );

  document
    .getElementById('progressScreen')
    .classList.remove('hidden');

  updateProgressScreen();
  
  renderSouvenirs();

}

if(screenId === 'profileScreen'){

  updateScreenBar(
    'Profiel',
    true,
    () => showMainScreen('homeScreen')
  );

  document
    .getElementById('profileScreen')
    .classList.remove('hidden');

}

if(screenId === 'travelScreen'){

  updateScreenBar(
    'Reis',
    true,
    () => showMainScreen('homeScreen')
  );

  document
    .getElementById('travelScreen')
    .classList.remove('hidden');
	
} 

if(screenId === 'locationOverviewScreen'){

	document
	  .getElementById(
		'locationOverviewScreen'
	  )
    .classList.remove(
      'hidden'
    );
}

 if(screenId === 'airportLessonScreen'){

  document
    .getElementById(
      'airportLessonScreen'
    )
    .classList.remove(
      'hidden'
    );
}

if(
  screenId ===
  'travelScreen'
){
  renderTravelRoute();
}
 
}


function getAirportStatus(){

  const learnerData =
    getLearnerData();

  const completed =
    learnerData
      .travel_progress?.[
        'airport-1'
      ];

  return completed
    ? '✅ Voltooid'
    : '📚 Nog niet gestart';

}

function isLessonCompleted(
  lessonId
){

  const learnerData =
    getLearnerData();

  return !!(
    learnerData
      .travel_progress?.[
        lessonId
      ]
  );

}

function openAirportOverview(){

	const lesson1Done =
	  isLessonCompleted(
		'airport-1'
	  );
	  
	 const lesson2Done =
  isLessonCompleted(
    'airport-2'
  );

const lesson3Done =
  isLessonCompleted(
    'airport-3'
  );

  showMainScreen(
    'airportOverviewScreen'
  );

  updateScreenBar(
    'Airport',
    true,
    () => showMainScreen(
      'travelScreen'
    )
  );

  document
    .getElementById(
      'airportLessonsList'
    )
    .innerHTML =

    `
	<button
	  class="practice-card"
	  onclick="openLesson('airport-1')">

	  <div class="practice-title">
		${
  lesson1Done
    ? '✅ Les 1 - Bon Bini na Aruba'
    : '📚 Les 1 - Bon Bini na Aruba'
}
	  </div>

	</button>	

<button
  class="practice-card"
  onclick="openLesson('airport-2')">

  <div class="practice-title">

${
  lesson2Done
    ? '✅ Les 2 - Mi Nomber Ta...'
    : lesson1Done
      ? '🔓 Les 2 - Mi Nomber Ta...'
      : '🔒 Les 2 - Mi Nomber Ta...'
}

  </div>

</button>

	<button
	  class="practice-card"
	  onclick="openLesson('airport-3')">


        <div class="practice-title">
${
  lesson3Done
    ? '✅ Les 3 - Con Ta Bay?'
    : lesson2Done
      ? '🔓 Les 3 - Con Ta Bay?'
      : '🔒 Les 3 - Con Ta Bay?'
}

        </div>

      </button>

      <button
  class="practice-card"
  onclick="openLesson('airport-challenge')">


        <div class="practice-title">
          ${
  lesson1Done &&
  lesson2Done &&
  lesson3Done
    ? '🏆 Airport Challenge'
    : '🔒 Airport Challenge'
}
        </div>

      </button>
    `;

}

function openTankiFlipOverview(){

  showMainScreen(
    'airportOverviewScreen'
  );

  updateScreenBar(
    'Tanki Flip',
    true,
    () => showMainScreen(
      'travelScreen'
    )
  );

  document
    .getElementById(
      'airportLessonsList'
    )
    .innerHTML = `

      <button
        class="practice-card"
        onclick="openLesson('tanki-flip-1')">

        <div class="practice-title">
          📚 Les 1 - Kas di Rosa
        </div>

      </button>

      <button
        class="practice-card"
        onclick="openLesson('tanki-flip-2')">

        <div class="practice-title">
          📚 Les 2 - Un Bishita Serka Rosa
        </div>

      </button>

      <button
        class="practice-card"
        onclick="openLesson('tanki-flip-3')">

        <div class="practice-title">
          📚 Les 3 - Yiu di Rosa
        </div>

      </button>

      <button
        class="practice-card"
        onclick="openLesson('tanki-flip-challenge')">

        <div class="practice-title">
          🏆 Tanki Flip Challenge
        </div>

      </button>

    `;
}

function renderTravelRoute(){

  const container =
    document.getElementById(
      'travelRouteContainer'
    );

  if(!container){
    return;
  }
  
  document.getElementById(
  'travelHero'
).innerHTML = `

  <div
    style="
      background:
        linear-gradient(
          135deg,
          #0F7C82,
          #1E5F74
        );

      color:white;
      padding:24px;
      border-radius:24px;
      margin-bottom:16px;
    "
  >

    <div
      style="
        font-size:28px;
        font-weight:700;
      "
    >
      🌴 Reis door Aruba
    </div>

    <div
      style="
        opacity:.85;
        margin-top:4px;
        font-style:italic;
      "
    >
      One Happy Island
    </div>

    <div
      style="
        margin-top:14px;
      "
    >
      Leer Aruba kennen door de ogen van Wela Ana.
    </div>

  </div>

`;

  let html = '';

  const chapters =
    window.learningPaths
      .aruba
      .levels[0]
      .chapters;

  chapters.forEach(
    chapter => {

      chapter.locations.forEach(
        location => {

          const completed =
            location.lessons.filter(
              lesson =>
                isLessonCompleted(
                  lesson.id
                )
            ).length;
			
			const isCompleted =
			completed ===
			location.lessons.length;

html += `

<div
  style="
    margin-bottom:16px;
    padding:20px;
    border-radius:24px;
    background:${location.theme.background};

    border-left:6px solid
      ${location.theme.progress};

    box-shadow:
      0 6px 18px
      rgba(0,0,0,.08);
  "
>

    <div
      style="
        display:flex;
        align-items:center;
        gap:12px;
        margin-bottom:10px;
      "
    >

      <div
        style="
          font-size:28px;
        "
      >
        ${location.icon}
      </div>

<div
  style="
    flex:1;
  "
>

  <div
    style="
      font-size:12px;
      color:#6B7280;
      font-weight:600;
    "
  >
    Hoofdstuk ${location.chapter}
  </div>

  <div
    style="
      font-size:22px;
      font-weight:700;
    "
  >
    ${location.shortTitle}
  </div>

</div>

<div
  style="
    text-align:center;
    min-width:70px;
  "
>

  <div
    style="
      font-size:30px;
      filter:${
        isCompleted
          ? 'none'
          : 'grayscale(100%) opacity(50%)'
      };
    "
  >
    ${location.souvenir.icon}
  </div>

  <div
    style="
      font-size:11px;
	  font-weight:600;
      margin-top:4px;
      opacity:.8;
    "
  >
    ${location.souvenir.title}
  </div>

</div>

    </div>

	<button
	  onclick="
		openLocationOverview(
		  '${location.id}'
		)
	  "

	style="
	  width:100%;
	  text-align:left;
	  border:none;
	  background:transparent;
	  padding:0;
	  cursor:pointer;

	  box-shadow:
		0 2px 8px
		rgba(0,0,0,.04);
	"
	>

      <div class="practice-title">
        ${location.title}
      </div>

      <div class="practice-subtitle">
        ${location.subtitle}
      </div>

      <div
        style="
          margin-top:10px;
          font-size:12px;
          opacity:.75;
        "
      >
        ${location.description}
      </div>

      <div
        style="
          margin-top:12px;
          height:8px;
          background:#E5E7EB;
          border-radius:999px;
          overflow:hidden;
        "
      >

        <div
          style="
            width:${
              (
                completed /
                location.lessons.length
              ) * 100
            }%;
            height:100%;
            background:${location.theme.progress};
          "
        >
        </div>

      </div>

      <div
        style="
          margin-top:8px;
          font-size:12px;
          opacity:.7;
        "
      >
        ${completed}
        van
        ${location.lessons.length}
        ontmoetingen voltooid
      </div>

    </button>

  </div>

`;


        }
      );

    }
  );

  container.innerHTML =
    html;

}

function openLocationOverview(
  locationId
){

  currentLocationId =
    locationId;

  const location =
    window.learningPaths
      .aruba
      .levels
      .flatMap(level => level.chapters)
      .flatMap(chapter => chapter.locations)
      .find(
        location =>
          location.id === locationId
      );

  if(!location){
    console.error(
      'Location niet gevonden:',
      locationId
    );
    return;
  }

  showMainScreen(
    'locationOverviewScreen'
  );

  updateScreenBar(
    location.title,
    true,
    () =>
      showMainScreen(
        'travelScreen'
      )
  );

  const completedLessons =
    location.lessons.filter(
      lesson =>
        isLessonCompleted(
          lesson.id
        )
    ).length;

  const totalWords =
    location.lessons
      .filter(
        lesson => !lesson.challenge
      )
      .reduce(
        (total, lesson) => {

          const lessonInfo =
            window.lessonData[
              lesson.id
            ];

          return (
            total +
            (
              lessonInfo?.wordIds?.length || 0
            )
          );

        },
        0
      );

  const progressPercent =
    Math.round(
      (
        completedLessons /
        location.lessons.length
      ) * 100
    );

  let html = `

    <div
      style="
        background:white;
        border-radius:24px;
        padding:20px;
        margin-bottom:24px;
      "
    >

      <div
        style="
          display:flex;
          align-items:center;
          gap:12px;
          margin-bottom:10px;
        "
      >

        <div
          style="
            font-size:40px;
            flex-shrink:0;
          "
        >
          ${location.icon}
        </div>

        <div
          style="
            font-size:24px;
            font-weight:700;
            color:#0A2E57;
          "
        >
          ${location.title}
        </div>

      </div>

<p
  style="
    margin:0;
    opacity:.8;
    line-height:1.5;
  "
>
  ${location.description}
</p>

<div
  style="
    margin-top:12px;
    font-size:14px;
    font-weight:600;
    color:#0F6D73;
  "
>
  🎁 Beloning: ${location.souvenir.title}
</div>

      <div
        style="
          display:flex;
          gap:10px;
          margin-top:16px;
        "
      >

        <div
          style="
            flex:1;
            background:#F3EFE2;
            border-radius:16px;
            padding:12px;
            text-align:center;
          "
        >
          <div
            style="
              font-weight:bold;
              font-size:22px;
            "
          >
            ${
              location.lessons.filter(
                lesson => !lesson.challenge
              ).length
            }
          </div>

          <div
            style="
              font-size:12px;
            "
          >
            ontmoetingen
          </div>
        </div>

        <div
          style="
            flex:1;
            background:#F3EFE2;
            border-radius:16px;
            padding:12px;
            text-align:center;
          "
        >
          <div
            style="
              font-weight:bold;
              font-size:22px;
            "
          >
            ${totalWords}
          </div>

          <div
            style="
              font-size:12px;
            "
          >
            woorden
          </div>
        </div>

        <div
          style="
            flex:1;
            background:#F3EFE2;
            border-radius:16px;
            padding:12px;
            text-align:center;
          "
        >
          <div
            style="
              font-weight:bold;
              font-size:22px;
            "
          >
            ${progressPercent}%
          </div>

          <div
            style="
              font-size:12px;
            "
          >
            voortgang
          </div>
        </div>

      </div>

    </div>

  `;

  const nextLesson =
    location.lessons.find(
      lesson =>
        !isLessonCompleted(
          lesson.id
        )
    );

  location.lessons.forEach(
    (lesson,index) => {

      const done =
        isLessonCompleted(
          lesson.id
        );

      const active =
        nextLesson &&
        nextLesson.id === lesson.id;

      const lessonInfo =
        window.lessonData[
          lesson.id
        ];

      const estimatedMinutes =
        lesson.challenge
          ? Math.max(
              2,
              Math.ceil(
                (
                  lessonInfo?.questions?.length || 0
                ) / 15
              )
            )
          : Math.max(
              1,
              Math.ceil(
                (
                  lessonInfo?.scene?.length || 0
                ) / 5
              )
            );

      html += `

        <button
          onclick="openLesson('${lesson.id}')"
          style="
            width:100%;
            border:none;
            background:transparent;
            text-align:left;
            padding:0;
            margin-bottom:8px;
            cursor:pointer;
          "
        >

<div
  style="
    display:flex;
    align-items:flex-start;
    gap:14px;

    background:#FCFAF7;
    border-radius:18px;
    padding:12px;

    ${
      active
        ? `
          outline:2px solid rgba(217,164,65,.35);
          background:rgba(217,164,65,.12);
        `
        : ''
    }
  "
>

            <div
              style="
                display:flex;
                flex-direction:column;
                align-items:center;
                flex-shrink:0;
              "
            >

              <div
                style="
                  width:48px;
                  height:48px;
                  border-radius:50%;
                  display:flex;
                  align-items:center;
                  justify-content:center;
                  font-weight:bold;

                  background:${
                    done
                      ? '#45B36B'
                      : active
                        ? location.theme.progress
                        : '#F3EFE2'
                  };

                  color:${
                    done
                      ? 'white'
                      : active
                        ? 'white'
                        : '#0A2E57'
                  };
                "
              >
                ${
                  lesson.challenge
                    ? '🏆'
                    : done
                      ? '✓'
                      : index + 1
                }
              </div>

              ${
                index <
                location.lessons.length - 1
                  ? `
                  <div
                    style="
                      width:3px;
                      height:34px;
                      background:#D6D3D1;
                      margin-top:6px;
                    "
                  >
                  </div>
                  `
                  : ''
              }

            </div>

            <div>

              <div
                style="
                  font-weight:700;
                  color:#0A2E57;
                "
              >
                ${
                  lesson.challenge
                    ? '🏆 '
                    : `Les ${index+1} - `
                }
                ${lesson.title}
              </div>

              <div
                style="
                  font-size:13px;
                  opacity:.7;
                "
              >
		${
		  done
			? (
				lesson.challenge
				  ? '🎉 Challenge voltooid'
				  : 'Voltooid'
			  )
			: `⏱ ±${estimatedMinutes} min`
		}
              </div>

            </div>

          </div>

        </button>

      `;
    }
  );

  document.getElementById(
    'locationLessonsList'
  ).innerHTML =
    html;
}


let challengeIndex = 0;
let currentChallenge =
  null;
let challengeScore = 0;
let challengeMessages = [];
let challengeMistakes = [];
let challengeReviewQuestions = [];
let challengeReviewIndex = 0;
let visibleTranslations = {};
let anaTyping = false;
let currentLessonId = null;

let currentStoryIndex = 0;

function openLesson(
  lessonId
){

  currentLessonId =
    lessonId;

let lesson = null;

window.learningPaths
  .aruba
  .levels
  .forEach(level => {

    level.chapters.forEach(
      chapter => {

        chapter.locations.forEach(
          location => {

            const found =
              location.lessons.find(
                item =>
                  item.id === lessonId
              );

            if(found){
              lesson = found;
            }

          }
        );

      }
    );

  });

	if(!lesson){
  console.error(
    'Les niet gevonden:',
    lessonId
  );
  return;
}

  const lessonInfo =
    window.lessonData[
      lesson.id
    ];
	

  document.getElementById(
    'airportLessonTitle'
  ).textContent =
    lessonInfo.title || '';

  document.getElementById(
    'airportLessonContent'
  ).innerHTML = '';

challengeMessages = [];

currentChallenge = null;

currentStoryIndex = 0;

// Verlaat je een les midden in een minispel (bijv. via de terugknop), dan mag
// dat spel niet blijven "hangen" wanneer je hierna een (andere) les opent.
clearTimeout(balloonPlaneTimer);
clearTimeout(buggyRoundTimer);
clearInterval(miniGameCountdownTimer);

document.getElementById(
  'buggyGame'
).classList.add('hidden');

document.getElementById(
  'miniGameIntro'
).classList.add('hidden');

document.getElementById(
  'balloonWarmupEnd'
).classList.remove('show');

const scene =
  lessonInfo.scene || [];
  if(
    scene.length
  ){

    document.getElementById(
      'lessonCompleteButton'
    ).style.display = 'none';

	showNextStoryMessage();

    document.getElementById(
      'challengeChat'
    ).classList.remove(
      'hidden'
    );

    document.getElementById(
      'balloonWarmup'
    ).classList.add(
      'hidden'
    );

    document.getElementById(
      'airportWords'
    ).innerHTML = '';

    renderChallenge();

  }

  else{

    document.getElementById(
      'lessonCompleteButton'
    ).style.display = 'block';

    document.getElementById(
      'challengeChat'
    ).classList.add(
      'hidden'
    );

    const words =
      data.filter(
        word =>
          lesson.wordIds.includes(
            word.nummer
          )
      );

    document.getElementById(
      'airportWords'
    ).innerHTML =

      words.map(word => `

        <div class="list-item">

          <div class="word">
            ${getPrimaryWord(word)}
          </div>

          <div class="meta">
            ${word.nederlands}
          </div>

        </div>

      `).join('');

  }

  showMainScreen(
    'airportLessonScreen'
  );
  
  window.scrollTo(
  0,
  0
);

updateScreenBar(

  lesson.title,

  true,

  () =>
    openLocationOverview(
      currentLocationId
    )

);

}


function showNextStoryMessage(){

  const scene =
    lessonData[
      currentLessonId
    ].scene || [];

  if(
    currentStoryIndex >=
    scene.length
  ){

    const lessonInfo =
      lessonData[
        currentLessonId
      ];

    if(
      (
        lessonInfo.questions ||
        lessonInfo.miniQuiz
      ) &&
      !challengeMessages.some(
        message =>
          message.sender ===
          'practiceModeChoice'
      )
    ){

      challengeMessages.push({
        sender:'practiceModeChoice',
        mode:
          lessonInfo.questions
            ? 'challenge'
            : 'miniQuiz'
      });

    }

    renderChallenge();
    return;
  }

  challengeMessages.push(
    scene[currentStoryIndex]
  );

  currentStoryIndex++;

renderChallenge();

setTimeout(() => {

  const chat =
    document.getElementById(
      'challengeChat'
    );

  chat.scrollTop =
    chat.scrollHeight;

}, 100);
}


function createWordChip(word){

  return `
    <span
      style="
        display:inline-flex;
        align-items:center;
        gap:6px;
        background:#F4B74A;
        color:#23395B;
        font-weight:700;
        padding:4px 10px;
        border-radius:999px;
        margin-right:4px;
      "
    >

      ${word}

      <button
        type="button"
        onclick="speakText('${word}')"
        style="
          border:none;
          background:rgba(255,255,255,.55);
          border-radius:50%;
          width:22px;
          height:22px;
          cursor:pointer;
          font-size:11px;
          display:flex;
          align-items:center;
          justify-content:center;
        "
      >
        🔊
      </button>

    </span>
  `;

}


function renderChallenge(
  autoScroll = true
){

  let html = '';

  challengeMessages.forEach(
    (message, index) => {

      if(
        message.sender === 'narration'
      ){

        html += `
          <div
            style="
              text-align:center;
              color:#6B7280;
              font-size:13px;
              font-style:italic;
              margin:10px 0 16px;
            ">
            ${message.text}
          </div>
        `;

      }

      else if(
        message.sender === 'dialogue'
      ){

        html += `

          <div class="chat-row">

            <div
              class="chat-avatar ${message.avatar || 'customs'}">

	${
	  message.avatar === 'traveler'
		? '🧑🏽'
		: message.avatar === 'neighbor'
		? '👵🏽'
		: message.avatar === 'local'
		? '🧑🏽'
		: message.avatar === 'taxi'
		? '🚕'
		: message.avatar === 'hotel'
		? '🏨'
		: '👮🏽'
	}

            </div>

            <div class="chat-bubble local">

<div
  class="chat-name ${message.avatar || 'local'}"
  style="
    display:flex;
    justify-content:space-between;
    align-items:center;
  "
>

  <span>
    ${message.speaker}
  </span>

  <button
    type="button"
    onclick="speakText('${message.text.replace(/'/g, "\\'")}')"
    style="
      border:none;
      background:#EEF2FF;
      border-radius:50%;
      width:24px;
      height:24px;
      cursor:pointer;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:12px;
    "
  >
    🔊
  </button>

</div>

              <div>
                ${message.text}
              </div>

              ${
                message.translation

                ?

                visibleTranslations[index]

                  ?

                  `
                    <div
                      class="translation-link"
                      onclick="toggleTranslation(${index})">

                      💡 ${message.translation}

                    </div>
                  `

                  :

                  `
                    <div
                      class="translation-link"
                      onclick="toggleTranslation(${index})">

                      👁 Toon vertaling

                    </div>
                  `

                : ''
              }

            </div>

          </div>

        `;

      }

      else if(
        message.sender === 'ana'
      ){
		  
		let anaText =
  message.text;  
  
const chipMatch =
  anaText.match(
    /^🟨\s(.+?)\sbetekent\s(.+)$/
  );
  
if(chipMatch){

  const word =
    chipMatch[1];

  const meaning =
    chipMatch[2];

  anaText = `
    <span
      style="
        display:inline-flex;
        align-items:center;
        gap:6px;
        background:#F4B74A;
        color:#23395B;
        font-weight:700;
        padding:4px 10px;
        border-radius:999px;
        margin-right:4px;
      "
    >

      ${word}

      <button
        type="button"
        onclick="speakText('${word}')"
        style="
          border:none;
          background:rgba(255,255,255,.55);
          border-radius:50%;
          width:22px;
          height:22px;
          cursor:pointer;
          font-size:11px;
          display:flex;
          align-items:center;
          justify-content:center;
        "
      >
        🔊
      </button>

    </span>

    betekent ${meaning}
  `;
}

anaText =
  anaText.replace(
    /🟨\s?([A-Za-zÀ-ÿ' -]+)/g,
    (_, word) =>
      createWordChip(
        word.trim()
      )
  );



        html += `

          <div class="chat-row">

            <div
              class="chat-avatar ana">

              👵🏼

            </div>

            <div
              class="chat-bubble ana">

              <div
                class="chat-name ana">

                Wela Ana

              </div>

              <div>
                ${anaText}
              </div>

              ${
                message.translation

                ?

                `
                  <div class="translation-link">

                    💡 ${message.translation}

                  </div>
                `

                : ''
              }

            </div>

          </div>

        `;

      }

      else if(
        message.sender === 'question'
      ){

        html += `

          <div class="chat-row">

            <div
              class="chat-avatar ana">

              👵🏼

            </div>

            <div
              class="chat-bubble ana">

              <div
                class="chat-name ana">

                Wela Ana

              </div>

              <div
                style="
                  margin-bottom:6px;
                ">

                Wat betekent:

              </div>

              <div
                style="
                  font-size:18px;
                  font-weight:700;
                ">

                ${message.text}

              </div>

            </div>

          </div>

        `;

      }

else if(
  message.sender === 'practiceModeChoice'
){

  const gameFirst =
    APP_CONFIG.kidsMode;

  const typedLabel =
    message.mode === 'challenge'
      ? '📝 Challenge starten →'
      : '📝 Mini-quiz starten →';

  html += `
    <div class="story-action-bar">
      <button
        class="btn ${gameFirst ? 'story-primary-action' : 'story-action-btn'}"
        onclick="beginMiniGameFlow('${message.mode}')">
        🎮 ${gameFirst ? 'Start het spel' : 'Speel als spel'}
      </button>
    </div>
    <div class="story-action-bar">
      <button
        class="btn ${gameFirst ? 'story-action-btn' : 'story-primary-action'}"
        onclick="startTypedChallenge('${message.mode}')">
        ${gameFirst ? '📝 Liever de gewone quiz?' : typedLabel}
      </button>
    </div>
  `;
}

else if(
  message.sender === 'reviewWords'
){
  html += `
    <div class="story-action-bar">
      <button
        class="btn story-action-btn"
        onclick="startChallengeReview()">
        📚 Moeilijke woorden oefenen
      </button>
    </div>
  `;

}

else if(
  message.sender === 'restartLesson'
){
  html += `
    <div class="story-action-bar">
      <button
        class="btn story-action-btn"
        onclick="openLesson(currentLessonId)">
        🔄 Les opnieuw doen
      </button>
    </div>

	<div class="story-action-bar">
	<button
	  class="btn story-primary-action"
	  onclick="completeLesson()">
	  ✅ Verder reizen
	</button>
	</div>	
  
  `;
}

else if(
  message.sender === 'reviewFinished'
){
  html += `
    <div class="story-action-bar">

      <button
        class="btn story-primary-action"
        onclick="completeLesson()">

        ✅ Verder reizen

      </button>

    </div>
  `;
}

      else if(
        message.sender === 'lessonSummary'
      ){

        html += `

          <div class="chat-row">

            <div
              class="chat-avatar ana">

              👵🏼

            </div>

            <div
              class="chat-bubble ana">

              <div
                class="chat-name ana">

                Wela Ana

              </div>

		<div
		  style="
			line-height:1.5;
		  ">

			⭐ ${message.text}

		</div>


            </div>

          </div>

        `;

      }

      else{

        html += `

          <div
            class="
              panel
              chat-user
            ">

            ${message.text}

          </div>

        `;

      }

    }

  );

  if(
    anaTyping
  ){

    html += `

      <div class="chat-row">

        <div
          class="chat-avatar ana">

          👵🏼

        </div>

        <div
          class="chat-bubble ana">

          <div
            class="chat-name ana">

            Wela Ana

          </div>

          Ana is aan het typen...

        </div>

      </div>

    `;

  }

	const lessonInfo =
	  lessonData[currentLessonId];

	const scene =
	  lessonInfo?.scene || [];

const showStoryButton =
  currentStoryIndex <= scene.length &&
  !currentChallenge &&
  !challengeMessages.some(
    message =>
      message.sender ===
      'practiceModeChoice'
  ) &&
  !challengeMessages.some(
    message =>
      message.sender ===
      'reviewFinished'
  );

  const hasSummary =
    challengeMessages.some(
      message =>
        message.sender ===
        'lessonSummary'
    );

  const showingTypedInput =
    !hasSummary &&
    currentChallenge;

  let footerHtml = '';

if(
  showingTypedInput
){

    footerHtml += `

      <div
        style="
          display:flex;
          gap:8px;
          margin-top:12px;
          margin-bottom:24px;
        ">

        <input
          id="challengeAnswer"
          type="text"
          placeholder="Typ je antwoord"
          ${anaTyping ? 'disabled' : ''}
          onkeypress="
            if(event.key === 'Enter'){
              submitChallengeAnswer();
            }
          "
          style="
            flex:1;
          ">

        <button
          class="btn"
          onclick="submitChallengeAnswer()"
          ${anaTyping ? 'disabled' : ''}
          style="
            width:56px;
            min-width:56px;
            padding:0;
          ">

          ➤

        </button>

      </div>

    `;

  }

if(
  showStoryButton
){

footerHtml += `
  <div class="story-action-bar">
    <button
      class="btn story-action-btn"
      onclick="showNextStoryMessage()"
    >
      Verder →
    </button>
  </div>
`;
}

  const isFullscreen =
    !showingTypedInput;

  const challengeChat =
    document.getElementById(
      'challengeChat'
    );

  challengeChat.classList.toggle(
    'fullscreen',
    isFullscreen
  );

  const messagesEl =
    document.getElementById(
      'challengeMessages'
    );

  messagesEl.innerHTML = html;

  document.getElementById(
    'challengeFooter'
  ).innerHTML = footerHtml;

setTimeout(() => {

  if(isFullscreen){

    messagesEl.scrollTop =
      messagesEl.scrollHeight;

  }else{

    if(
      challengeMessages.length > 1
    ){
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior:'smooth'
      });
    }

  }

  const answerInput =
    document.getElementById(
      'challengeAnswer'
    );

  if(
    answerInput &&
    !anaTyping
  ){
    answerInput.focus();
  }

}, 120);

}


function toggleTranslation(
  index
){

  visibleTranslations[index] =
    !visibleTranslations[index];

  renderChallenge(
    false
  );

}


function startTypedChallenge(mode){

  const lessonInfo =
    lessonData[
      currentLessonId
    ];

  challengeMistakes = [];

  currentChallenge =
    mode === 'challenge'
      ? lessonInfo
      : {
          questions:
            lessonInfo.miniQuiz
        };

  // Onderscheid voor de matchfunctie: in de Challenge telt een
  // bijna-goed (typo/andere variant) als kleinere sprong; in de
  // mini-quiz telt dat als volle sprong, net als bij Oefenen.
  currentChallenge.contextType =
    mode === 'challenge'
      ? 'challenge'
      : 'miniquiz';

  challengeIndex = 0;
  challengeScore = 0;

  // Verwijder een eventuele afronding van een vorige poging (spel of typ-versie),
  // anders denkt renderChallenge() dat deze sessie al klaar is en verschijnt het
  // typveld niet.
  challengeMessages =
    challengeMessages.filter(
      m =>
        m.sender !== 'lessonSummary' &&
        m.sender !== 'reviewWords' &&
        m.sender !== 'restartLesson'
    );

  challengeMessages.push({

    sender:'ana',

    text:
      'Bo ta cla? Laten we kijken wat je hebt onthouden.'

  });

  challengeMessages.push({

    sender:'question',

    text:
      currentChallenge
        .questions[0]
        .word

  });

  renderChallenge();

}


const BALLOON_LIVES_MINIQUIZ = 3;
const BALLOON_LIVES_CHALLENGE = 5;

// Hoe lang (in seconden) een vliegtuigje over het scherm doet, per moeilijkheidsniveau.
// Niveau 1 is het bestaande, ongewijzigde tempo.
const BALLOON_FLIGHT_SECONDS = {
  1: { min: 5.5, max: 8.0 },
  2: { min: 3.5, max: 4.6 },
  3: { min: 2.1, max: 2.9 }
};

let balloonWarmupPool = [];
let balloonWarmupIndex = 0;
let balloonWarmupScore = 0;
let balloonRoundLocked = false;
let balloonPlaneTimer = null;
let balloonCurrentTarget = null;
let balloonTotalLives = 0;
let balloonLives = 0;

function renderBalloonLives(){

  const container =
    document.getElementById(
      'balloonLives'
    );

  container.innerHTML = '';

  for(
    let i = 0;
    i < balloonTotalLives;
    i++
  ){

    const heart =
      document.createElement('span');

    heart.className =
      'balloon-life' +
      (
        i < balloonTotalLives - balloonLives
          ? ' lost'
          : ''
      );

    heart.textContent = '❤️';

    container.appendChild(heart);

  }

}

function playMiniGameWrongSound(){

  try{

    const AudioCtx =
      window.AudioContext ||
      window.webkitAudioContext;

    const ctx = new AudioCtx();

    const osc =
      ctx.createOscillator();

    const gain =
      ctx.createGain();

    osc.type = 'sine';

    osc.frequency.setValueAtTime(
      220,
      ctx.currentTime
    );

    osc.frequency.exponentialRampToValueAtTime(
      110,
      ctx.currentTime + 0.25
    );

    gain.gain.setValueAtTime(
      0.2,
      ctx.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
      0.001,
      ctx.currentTime + 0.3
    );

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.3);

  }catch(e){
    // Web Audio niet beschikbaar — geluid is niet essentieel
  }

}

function shuffleBalloonArray(arr){

  const a = [...arr];

  for(
    let i = a.length - 1;
    i > 0;
    i--
  ){

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [a[i], a[j]] =
      [a[j], a[i]];

  }

  return a;

}

// ===== Welk minispel hoort bij welke les? =====
// Vliegtuig en buggy wisselen elkaar af op basis van de positie van de les
// binnen zijn hoofdstuk: les 1/3 = vliegtuig, les 2/challenge = buggy.
// Geldt voor elk hoofdstuk (huidige en toekomstige).

function getMiniGameTypeForLesson(lessonId){

  let result = 'plane';

  window.learningPaths.aruba.levels.forEach(level => {

    level.chapters.forEach(chapter => {

      chapter.locations.forEach(location => {

        const index =
          location.lessons.findIndex(
            item => item.id === lessonId
          );

        if(index !== -1){
          result =
            index % 2 === 0
              ? 'plane'
              : 'buggy';
        }

      });

    });

  });

  return result;

}

// ===== Gedeelde startflow: moeilijkheidsniveau + aftellen =====
// Wordt door beide minispellen gebruikt, bij elke start (ook bij "nog een keer spelen").

let selectedGameDifficulty = 1;
let miniGameMode = null;
let miniGameCountdownTimer = null;

function beginMiniGameFlow(mode){

  miniGameMode = mode;

  document.getElementById(
    'challengeChat'
  ).classList.add('hidden');

  document.getElementById(
    'balloonWarmup'
  ).classList.add('hidden');

  document.getElementById(
    'buggyGame'
  ).classList.add('hidden');

  document.getElementById(
    'balloonWarmupEnd'
  ).classList.remove('show');

  document.getElementById(
    'miniGameIntro'
  ).classList.remove('hidden');

  document.getElementById(
    'miniGameDifficultyStep'
  ).classList.remove('hidden');

  document.getElementById(
    'miniGameCountdownStep'
  ).classList.add('hidden');

}

function chooseMiniGameDifficulty(level){

  selectedGameDifficulty = level;

  document.getElementById(
    'miniGameDifficultyStep'
  ).classList.add('hidden');

  document.getElementById(
    'miniGameCountdownStep'
  ).classList.remove('hidden');

  runMiniGameCountdown();

}

function runMiniGameCountdown(){

  let n = 3;

  const numEl =
    document.getElementById(
      'miniGameCountdownNumber'
    );

  numEl.textContent = n;

  clearInterval(
    miniGameCountdownTimer
  );

  miniGameCountdownTimer =
    setInterval(() => {

      n--;

      if(n > 0){

        numEl.textContent = n;

      }else{

        clearInterval(
          miniGameCountdownTimer
        );

        document.getElementById(
          'miniGameIntro'
        ).classList.add('hidden');

        if(
          getMiniGameTypeForLesson(
            currentLessonId
          ) === 'buggy'
        ){
          startBuggyGame(miniGameMode);
        }else{
          startBalloonWarmup(miniGameMode);
        }

      }

    }, 1000);

}

function startBalloonWarmup(mode){

  const lessonInfo =
    lessonData[
      currentLessonId
    ];

  const questions =
    mode === 'challenge'
      ? lessonInfo.questions
      : lessonInfo.miniQuiz;

  balloonWarmupPool =
    questions
      .map(q => getWordById(q.id))
      .filter(Boolean);

  miniGameMode = mode;
  balloonWarmupIndex = 0;
  balloonWarmupScore = 0;
  challengeMistakes = [];

  balloonTotalLives =
    mode === 'challenge'
      ? BALLOON_LIVES_CHALLENGE
      : BALLOON_LIVES_MINIQUIZ;

  balloonLives =
    balloonTotalLives;

  renderBalloonLives();

  document.getElementById(
    'challengeChat'
  ).classList.add('hidden');

  document.getElementById(
    'balloonWarmup'
  ).classList.remove('hidden');

  document.getElementById(
    'balloonWarmupEnd'
  ).classList.remove('show');

  nextBalloonWarmupRound();

}

function nextBalloonWarmupRound(){

  clearTimeout(
    balloonPlaneTimer
  );

  const sky =
    document.getElementById(
      'balloonSky'
    );

  sky.querySelectorAll(
    '.balloon-plane'
  ).forEach(p => p.remove());

  if(
    balloonWarmupIndex >=
    balloonWarmupPool.length
  ){
    showBalloonWarmupEnd();
    return;
  }

  balloonRoundLocked = false;

  balloonCurrentTarget =
    balloonWarmupPool[
      balloonWarmupIndex
    ];

  document.getElementById(
    'balloonProgress'
  ).textContent =
    `Woord ${balloonWarmupIndex + 1} van ${balloonWarmupPool.length}`;

  document.getElementById(
    'balloonScoreValue'
  ).textContent =
    balloonWarmupScore;

  document.getElementById(
    'balloonPromptWord'
  ).textContent =
    balloonCurrentTarget
      .nederlands
      .split(',')[0]
      .trim();

  const distractorPool =
    shuffleBalloonArray(
      balloonWarmupPool.filter(
        w =>
          w.id !== balloonCurrentTarget.id &&
          getPrimaryWord(w) !== getPrimaryWord(balloonCurrentTarget)
      )
    ).slice(
      0,
      Math.min(
        2,
        balloonWarmupPool.length - 1
      )
    );

  const planes =
    shuffleBalloonArray([
      balloonCurrentTarget,
      ...distractorPool
    ]);

  const laneCount =
    planes.length;

  const flyDistance =
    sky.clientHeight + 150;

  const flightRange =
    BALLOON_FLIGHT_SECONDS[
      selectedGameDifficulty
    ] || BALLOON_FLIGHT_SECONDS[1];

  planes.forEach((word, i) => {

    const plane =
      document.createElement('div');

    plane.className =
      'balloon-plane';

    plane.innerHTML =
      `<span class="balloon-plane-emoji">✈️</span><span class="balloon-plane-word">${escapeHtml(getPrimaryWord(word))}</span>`;

    const laneWidth =
      sky.clientWidth / laneCount;

    plane.style.left =
      (
        Math.round(laneWidth * i) +
        Math.round(
          Math.random() * (laneWidth * 0.3)
        )
      ) + 'px';

    plane.style.setProperty(
      '--balloon-fly-distance',
      flyDistance + 'px'
    );

    plane.style.animationDuration =
      (
        flightRange.min +
        Math.random() *
          (flightRange.max - flightRange.min)
      ) + 's';

    plane.style.animationDelay =
      (Math.random() * 0.6) + 's';

    plane.addEventListener(
      'animationend',
      () => plane.remove()
    );

    plane.addEventListener(
      'click',
      () =>
        handleBalloonPlaneTap(
          plane,
          word
        )
    );

    sky.appendChild(plane);

    requestAnimationFrame(
      () =>
        plane.classList.add('flying')
    );

  });

  balloonPlaneTimer =
    setTimeout(() => {

      if(!balloonRoundLocked){
        gradeBalloonRound(
          null,
          false
        );
      }

    }, (flightRange.max + 0.5) * 1000);

}

function handleBalloonPlaneTap(
  planeEl,
  tappedWord
){

  if(balloonRoundLocked){
    return;
  }

  gradeBalloonRound(
    tappedWord,
    tappedWord.id === balloonCurrentTarget.id,
    planeEl
  );

}

function gradeBalloonRound(
  tappedWord,
  correct,
  tappedPlaneEl
){

  balloonRoundLocked = true;

  clearTimeout(
    balloonPlaneTimer
  );

  updateWordProgress(
    balloonCurrentTarget.id,
    correct
  );

  logQuizAttempt({
    word_id: balloonCurrentTarget.id,
    typed_answer: null,
    correct: correct,
    match_type: 'plane_tap',
    category: 'ballonspel'
  });

  document.querySelectorAll(
    '#balloonSky .balloon-plane'
  ).forEach(p => {

    if(p !== tappedPlaneEl){
      p.remove();
    }

  });

  if(correct){

    balloonWarmupScore++;

    if(tappedPlaneEl){
      tappedPlaneEl.classList.add(
        'correct-pop'
      );
    }

    speakText(
      getPrimaryWord(
        balloonCurrentTarget
      )
    );

  }else{

    if(tappedPlaneEl){
      tappedPlaneEl.classList.add(
        'wrong-pop'
      );
    }

    playMiniGameWrongSound();

    balloonLives =
      Math.max(
        0,
        balloonLives - 1
      );

    renderBalloonLives();

    if(
      !challengeMistakes.includes(
        balloonCurrentTarget.id
      )
    ){
      challengeMistakes.push(
        balloonCurrentTarget.id
      );
    }

  }

  document.getElementById(
    'balloonScoreValue'
  ).textContent =
    balloonWarmupScore;

  balloonWarmupIndex++;

  setTimeout(
    nextBalloonWarmupRound,
    700
  );

}

function showBalloonWarmupEnd(){

  const lessonInfo =
    lessonData[
      currentLessonId
    ];

  currentChallenge =
    miniGameMode === 'challenge'
      ? lessonInfo
      : {
          questions:
            lessonInfo.miniQuiz
        };

  challengeScore =
    balloonWarmupScore;

  finishChallengeQuestions();

  const learnerData =
    getLearnerData();

  if(
    !learnerData.travel_progress
  ){
    learnerData.travel_progress = {};
  }

  learnerData.travel_progress[
    currentLessonId
  ] = true;

  saveLearnerData(
    learnerData
  );

  document.getElementById(
    'balloonWarmupEndScore'
  ).textContent =
    `${balloonWarmupScore} van de ${balloonWarmupPool.length} goed`;

  document.getElementById(
    'balloonWarmupEnd'
  ).classList.add('show');

}

// ===== Buggy-spel (leguaan op de zandweg) — zelfde opzet als het vliegtuigspel =====
// gebruikt voor Tanki Flip en Oranjestad (zie getMiniGameTypeForLesson).

const BUGGY_TIME_SECONDS = { 1: 6, 2: 4, 3: 2.5 };
const BUGGY_OPTION_COUNT = 4;

let buggyPool = [];
let buggyIndex = 0;
let buggyScore = 0;
let buggyRoundLocked = false;
let buggyRoundTimer = null;
let buggyCurrentTarget = null;
let buggyTotalLives = 0;
let buggyLives = 0;

function renderBuggyLives(){

  const container =
    document.getElementById(
      'buggyLives'
    );

  container.innerHTML = '';

  for(
    let i = 0;
    i < buggyTotalLives;
    i++
  ){

    const heart =
      document.createElement('span');

    heart.className =
      'balloon-life' +
      (
        i < buggyTotalLives - buggyLives
          ? ' lost'
          : ''
      );

    heart.textContent = '❤️';

    container.appendChild(heart);

  }

}

function startBuggyGame(mode){

  const lessonInfo =
    lessonData[
      currentLessonId
    ];

  const questions =
    mode === 'challenge'
      ? lessonInfo.questions
      : lessonInfo.miniQuiz;

  buggyPool =
    questions
      .map(q => getWordById(q.id))
      .filter(Boolean);

  buggyIndex = 0;
  buggyScore = 0;
  challengeMistakes = [];

  buggyTotalLives =
    mode === 'challenge'
      ? BALLOON_LIVES_CHALLENGE
      : BALLOON_LIVES_MINIQUIZ;

  buggyLives =
    buggyTotalLives;

  renderBuggyLives();

  document.getElementById(
    'buggyGame'
  ).classList.remove('hidden');

  document.getElementById(
    'balloonWarmupEnd'
  ).classList.remove('show');

  resetBuggyVehiclePosition();

  nextBuggyRound();

}

function resetBuggyVehiclePosition(){

  const vehicle =
    document.getElementById(
      'buggyVehicle'
    );

  const road =
    document.getElementById(
      'buggyRoad'
    );

  vehicle.style.transition = 'none';

  vehicle.style.left =
    (
      (road.clientWidth / 2) -
      (vehicle.offsetWidth / 2)
    ) + 'px';

  vehicle.style.top =
    (
      road.clientHeight -
      vehicle.offsetHeight -
      14
    ) + 'px';

  vehicle.classList.remove(
    'buggy-crash'
  );

}

function nextBuggyRound(){

  clearTimeout(
    buggyRoundTimer
  );

  resetBuggyVehiclePosition();

  const lanesEl =
    document.getElementById(
      'buggyLanes'
    );

  lanesEl.innerHTML = '';

  if(
    buggyIndex >=
    buggyPool.length
  ){
    showBuggyGameEnd();
    return;
  }

  buggyRoundLocked = false;

  buggyCurrentTarget =
    buggyPool[buggyIndex];

  document.getElementById(
    'buggyProgress'
  ).textContent =
    `Woord ${buggyIndex + 1} van ${buggyPool.length}`;

  document.getElementById(
    'buggyScoreValue'
  ).textContent =
    buggyScore;

  document.getElementById(
    'buggyPromptWord'
  ).textContent =
    buggyCurrentTarget
      .nederlands
      .split(',')[0]
      .trim();

  const distractorPool =
    shuffleBalloonArray(
      buggyPool.filter(
        w =>
          w.id !== buggyCurrentTarget.id &&
          getPrimaryWord(w) !== getPrimaryWord(buggyCurrentTarget)
      )
    ).slice(
      0,
      Math.min(
        BUGGY_OPTION_COUNT - 1,
        buggyPool.length - 1
      )
    );

  const options =
    shuffleBalloonArray([
      buggyCurrentTarget,
      ...distractorPool
    ]);

  options.forEach(word => {

    const post =
      document.createElement('div');

    post.className = 'buggy-signpost';

    const sign =
      document.createElement('button');

    sign.type = 'button';
    sign.className = 'buggy-sign';
    sign.textContent = getPrimaryWord(word);

    sign.addEventListener(
      'click',
      () =>
        handleBuggySignTap(
          word,
          sign
        )
    );

    const pole =
      document.createElement('div');

    pole.className = 'buggy-signpost-pole';

    post.appendChild(sign);
    post.appendChild(pole);

    lanesEl.appendChild(post);

  });

  const seconds =
    BUGGY_TIME_SECONDS[
      selectedGameDifficulty
    ] ||
    BUGGY_TIME_SECONDS[1];

  startBuggyTimer(seconds);

}

function startBuggyTimer(seconds){

  const fill =
    document.getElementById(
      'buggyTimerFill'
    );

  fill.style.transition = 'none';
  fill.style.width = '100%';

  // Forceer een reflow zodat de overgang hieronder echt vanaf 100% animeert.
  void fill.offsetWidth;

  fill.style.transition =
    `width ${seconds}s linear`;

  fill.style.width = '0%';

  buggyRoundTimer =
    setTimeout(() => {

      if(!buggyRoundLocked){
        gradeBuggyRound(
          null,
          false,
          null
        );
      }

    }, seconds * 1000);

}

function handleBuggySignTap(
  word,
  signEl
){

  if(buggyRoundLocked){
    return;
  }

  buggyRoundLocked = true;

  clearTimeout(
    buggyRoundTimer
  );

  const road =
    document.getElementById(
      'buggyRoad'
    );

  const vehicle =
    document.getElementById(
      'buggyVehicle'
    );

  const signRect =
    signEl.getBoundingClientRect();

  const roadRect =
    road.getBoundingClientRect();

  const targetX =
    signRect.left -
    roadRect.left +
    (signRect.width / 2) -
    (vehicle.offsetWidth / 2);

  const targetY =
    signRect.top -
    roadRect.top +
    (signRect.height / 2) -
    (vehicle.offsetHeight / 2);

  vehicle.style.transition =
    'left .6s cubic-bezier(.3,.6,.4,1), top .6s cubic-bezier(.3,.6,.4,1)';

  vehicle.style.left =
    targetX + 'px';

  vehicle.style.top =
    targetY + 'px';

  const correct =
    word.id === buggyCurrentTarget.id;

  setTimeout(() => {
    gradeBuggyRound(
      word,
      correct,
      signEl
    );
  }, 600);

}

function spawnBuggyConfetti(signEl){

  const road =
    document.getElementById(
      'buggyRoad'
    );

  const roadRect =
    road.getBoundingClientRect();

  const signRect =
    signEl.getBoundingClientRect();

  const originX =
    signRect.left -
    roadRect.left +
    (signRect.width / 2);

  const originY =
    signRect.top -
    roadRect.top;

  const colors = [
    'var(--brand-accent)',
    'var(--brand-primary)',
    'var(--bad)'
  ];

  for(
    let i = 0;
    i < 10;
    i++
  ){

    const piece =
      document.createElement('span');

    piece.className =
      'buggy-confetti-piece';

    piece.style.left =
      (originX + (Math.random() * 60 - 30)) + 'px';

    piece.style.top =
      originY + 'px';

    piece.style.background =
      colors[i % colors.length];

    piece.style.animationDelay =
      (Math.random() * 0.15) + 's';

    road.appendChild(piece);

    setTimeout(
      () => piece.remove(),
      1000
    );

  }

}

function gradeBuggyRound(
  word,
  correct,
  signEl
){

  updateWordProgress(
    buggyCurrentTarget.id,
    correct
  );

  logQuizAttempt({
    word_id: buggyCurrentTarget.id,
    typed_answer: null,
    correct: correct,
    match_type: 'sign_tap',
    category: 'buggyspel'
  });

  if(correct){

    buggyScore++;

    if(signEl){
      spawnBuggyConfetti(signEl);
      signEl.classList.add(
        'buggy-sign-passed'
      );
    }

    speakText(
      getPrimaryWord(
        buggyCurrentTarget
      )
    );

  }else{

    const vehicle =
      document.getElementById(
        'buggyVehicle'
      );

    vehicle.classList.add(
      'buggy-crash'
    );

    playMiniGameWrongSound();

    buggyLives =
      Math.max(
        0,
        buggyLives - 1
      );

    renderBuggyLives();

    if(
      !challengeMistakes.includes(
        buggyCurrentTarget.id
      )
    ){
      challengeMistakes.push(
        buggyCurrentTarget.id
      );
    }

  }

  document.getElementById(
    'buggyScoreValue'
  ).textContent =
    buggyScore;

  buggyIndex++;

  setTimeout(
    nextBuggyRound,
    700
  );

}

function showBuggyGameEnd(){

  const lessonInfo =
    lessonData[
      currentLessonId
    ];

  currentChallenge =
    miniGameMode === 'challenge'
      ? lessonInfo
      : {
          questions:
            lessonInfo.miniQuiz
        };

  challengeScore =
    buggyScore;

  finishChallengeQuestions();

  const learnerData =
    getLearnerData();

  if(
    !learnerData.travel_progress
  ){
    learnerData.travel_progress = {};
  }

  learnerData.travel_progress[
    currentLessonId
  ] = true;

  saveLearnerData(
    learnerData
  );

  document.getElementById(
    'balloonWarmupEndScore'
  ).textContent =
    `${buggyScore} van de ${buggyPool.length} goed`;

  document.getElementById(
    'balloonWarmupEnd'
  ).classList.add('show');

}

function switchToTypedFromMiniGame(){

  clearTimeout(
    balloonPlaneTimer
  );

  clearTimeout(
    buggyRoundTimer
  );

  document.getElementById(
    'balloonWarmup'
  ).classList.add('hidden');

  document.getElementById(
    'buggyGame'
  ).classList.add('hidden');

  document.getElementById(
    'balloonWarmupEnd'
  ).classList.remove('show');

  document.getElementById(
    'challengeChat'
  ).classList.remove('hidden');

  startTypedChallenge(
    miniGameMode
  );

}

function finishChallengeQuestions(){

  const total =
    currentChallenge.questions.length;

  let summaryText = '';

  if(
    challengeScore === total
  ){

    summaryText =
      `${challengeScore} van de ${total} vragen goed.\n\nMi ta orguyoso di bo! 🌴`;

  }
  else if(
    challengeScore >=
    Math.ceil(
      total * 0.8
    )
  ){

    summaryText =
      `${challengeScore} van de ${total} vragen goed.\n\nJe bent klaar voor de volgende stap van je reis.`;

  }
  else if(
    challengeScore >=
    Math.ceil(
      total * 0.5
    )
  ){

    summaryText =
      `${challengeScore} van de ${total} vragen goed.\n\nMet een beetje oefenen kom je er wel.`;

  }
  else{

    summaryText =
      `${challengeScore} van de ${total} vragen goed.\n\nTalen leer je stap voor stap.`;

  }

  let finalSummary =
    summaryText;

  const learnerData =
    getLearnerData();

  if(
    !learnerData.challengeScores
  ){
    learnerData.challengeScores = {};
  }

  learnerData.challengeScores[
    currentLessonId
  ] = {
    score: challengeScore,
    total: total
  };

  saveLearnerData(
    learnerData
  );

  if(
    currentChallenge.summary
  ){

    finalSummary +=
      '\n\n' +
      currentChallenge.summary;

  }

  challengeMessages =
    challengeMessages.filter(
      m =>
        m.sender !== 'lessonSummary' &&
        m.sender !== 'reviewWords' &&
        m.sender !== 'restartLesson'
    );

  challengeMessages.push({
    sender:'lessonSummary',
    text:finalSummary
  });

  challengeMessages.push({
    sender:'ana',
    text:'Wil je nog even oefenen? We kunnen de woorden herhalen die je lastig vond of de les opnieuw doen.'
  });

  challengeMessages.push({
    sender:'reviewWords'
  });

  challengeMessages.push({
    sender:'restartLesson'
  });

  renderChallenge();

}


function submitChallengeAnswer(){

  const input =
    document.getElementById(
      'challengeAnswer'
    );

const rawUserAnswer =
  input.value.trim();

if(
  challengeReviewQuestions.length
){
  submitChallengeReviewAnswer(
    rawUserAnswer
  );

  input.value = '';

  return;
}

  if(
    !rawUserAnswer
  ){
    return;
  }

  const question =
    currentChallenge.questions[
      challengeIndex
    ];

  challengeMessages.push({

    sender:'user',

    text:rawUserAnswer

  });

  input.value = '';

let displayAnswers = [];

if(question.id){

  const word =
    getWordById(
      question.id
    );

  displayAnswers =
    getAcceptedAnswers(
      word
    );

}
else{

  displayAnswers = [

    question.answer
      .toLowerCase()
      .replace(/[.,!?]/g,'')
      .trim()

  ];

}

const primaryCandidates =
  displayAnswers.map(a => normalize(a));

const contextType =
  currentChallenge.contextType || 'challenge';

const matchResult =
  evaluateAnswer({
    input: normalize(rawUserAnswer),
    primaryCandidates,
    secondaryCandidates: [],
    context: contextType
  });

  anaTyping = true;

  renderChallenge();

  setTimeout(() => {

    anaTyping = false;

if (matchResult.ok) {

    if(question.id){

      const reducedJump =
        matchResult.matchType === 'typo' ||
        (
          contextType === 'challenge' &&
          matchResult.matchType === 'cross_dialect'
        );

      updateWordProgress(
        question.id,
        true,
        { reducedJump }
      );

      logQuizAttempt({
        word_id: question.id,
        typed_answer: rawUserAnswer,
        correct: true,
        match_type: matchResult.matchType,
        category: contextType
      });

    }

    challengeScore++;

    if(matchResult.matchType === 'typo'){

      const matchedIndex =
        primaryCandidates.indexOf(
          matchResult.matchedAnswer
        );

      const niceAnswer =
        matchedIndex >= 0
          ? displayAnswers[matchedIndex]
          : displayAnswers[0];

      challengeMessages.push({
        sender:'ana',
        text: `☑️ Bijna goed! Je bedoelde vast "${niceAnswer}". Dat tellen we goed.`
      });

    } else {

      challengeMessages.push({
        sender:'ana',
        text:'☑️ Hopi bon! Dat is correct.'
      });

    }

} else {

	if(question.id){

	  updateWordProgress(
		question.id,
		false
	  );

	  logQuizAttempt({
	    word_id: question.id,
	    typed_answer: rawUserAnswer,
	    correct: false,
	    match_type: 'incorrect',
	    category: contextType
	  });

	  if(
		!challengeMistakes.includes(
		  question.id
		)
	  ){
		challengeMistakes.push(
		  question.id
		);
	  }

	}

    challengeMessages.push({
        sender:'ana',
        text: question.id
            ? '❌ Niet helemaal. Mogelijke antwoorden zijn: ' +
              displayAnswers.join(', ')
            : '❌ Niet helemaal. Het juiste antwoord is: ' +
              question.answer
    });

}

    challengeIndex++;

    if(
      challengeIndex >=
      currentChallenge.questions.length
    ){

      finishChallengeQuestions();

      return;

    }

    challengeMessages.push({

      sender:'question',

      text:
        currentChallenge
          .questions[
            challengeIndex
          ]
          .word

    });

    renderChallenge();

  }, 900);

}


function startChallengeReview(){

  challengeReviewQuestions =
    challengeMistakes.map(id => {

      const word =
        getWordById(id);

      return {
        id: word.id,
        word: getPrimaryWord(word)
      };

    });

  challengeReviewIndex = 0;

  challengeMessages = [];

  challengeMessages.push({
    sender:'ana',
    text:'Deze woorden vond je nog lastig. Laten we ze nog één keer oefenen.'
  });

  challengeMessages.push({
    sender:'question',
    text:
      challengeReviewQuestions[0]
        .word
  });

  renderChallenge();

}


function submitChallengeReviewAnswer(
  rawUserAnswer
){

  const question =
    challengeReviewQuestions[
      challengeReviewIndex
    ];

  const word =
    getWordById(
      question.id
    );

  const displayAnswers =
    getAcceptedAnswers(
      word
    );

  const primaryCandidates =
    displayAnswers.map(a => normalize(a));

  const contextType =
    (currentChallenge && currentChallenge.contextType) || 'challenge';

  const matchResult =
    evaluateAnswer({
      input: normalize(rawUserAnswer),
      primaryCandidates,
      secondaryCandidates: [],
      context: contextType
    });

  const answers = displayAnswers;
  const correct = matchResult.ok;

  challengeMessages.push({
    sender:'user',
    text:rawUserAnswer
  });

  anaTyping = true;

  renderChallenge();

  setTimeout(() => {

    anaTyping = false;

    if(correct){

      if(matchResult.matchType === 'typo'){

        const matchedIndex =
          primaryCandidates.indexOf(
            matchResult.matchedAnswer
          );

        const niceAnswer =
          matchedIndex >= 0
            ? displayAnswers[matchedIndex]
            : displayAnswers[0];

        challengeMessages.push({
          sender:'ana',
          text: `☑️ Bijna goed! Je bedoelde vast "${niceAnswer}". Dat tellen we goed.`
        });

      } else {

        challengeMessages.push({
          sender:'ana',
          text:'☑️ Hopi bon!'
        });

      }

      const reducedJump =
        matchResult.matchType === 'typo' ||
        (
          contextType === 'challenge' &&
          matchResult.matchType === 'cross_dialect'
        );

      updateWordProgress(
        question.id,
        true,
        { reducedJump }
      );

      logQuizAttempt({
        word_id: question.id,
        typed_answer: rawUserAnswer,
        correct: true,
        match_type: matchResult.matchType,
        category: contextType
      });

    }else{

      challengeMessages.push({
        sender:'ana',
        text:
          '❌ Mogelijke antwoorden zijn: ' +
          answers.join(', ')
      });

      updateWordProgress(
        question.id,
        false
      );

      logQuizAttempt({
        word_id: question.id,
        typed_answer: rawUserAnswer,
        correct: false,
        match_type: 'incorrect',
        category: contextType
      });

    }

    challengeReviewIndex++;

    if(
      challengeReviewIndex >=
      challengeReviewQuestions.length
    ){

	challengeReviewQuestions = [];

	currentChallenge = null;

      challengeMessages.push({
        sender:'ana',
        text:'🎉 Hopi bon! Je hebt de moeilijke woorden opnieuw geoefend.'
      });

      challengeMessages.push({
        sender:'reviewFinished'
      });

      renderChallenge();

      return;
    }

    challengeMessages.push({
      sender:'question',
      text:
        challengeReviewQuestions[
          challengeReviewIndex
        ].word
    });

    renderChallenge();

  }, 900);

}


function renderChallengeReview(){

  const [
    wordId
  ] =
    difficultWordQueue[
      currentDifficultIndex
    ];

  const word =
    getWordById(
      wordId
    );

  if(!word){
    return;
  }

  document.getElementById(
    'challengeChat'
  ).innerHTML = `

    <div class="chat-row">

      <div
        class="chat-avatar ana">
        👵🏼
      </div>

      <div
        class="chat-bubble ana">

        <div
          class="chat-name ana">
          Wela Ana
        </div>

        Laten we deze woorden nog
        even oefenen.

      </div>

    </div>

    <div class="panel">

      <div class="difficult-word">
        ${getPrimaryWord(word)}
      </div>

	<div class="meta">
	  ${word.nederlands}
	</div>

	<div class="difficult-counter">
	  Woord
	  ${currentDifficultIndex + 1}
	  van
	  ${difficultWordQueue.length}
	</div>

      <div class="difficult-actions">

        <button
          class="btn-know"
          onclick="handleChallengeReview(true)">
          ✅ Wist ik
        </button>

        <button
          class="btn-hard"
          onclick="handleChallengeReview(false)">
          ❌ Nog moeilijk
        </button>

      </div>

    </div>
  `;
}


function handleChallengeReview(
  knewIt
){

  const [
    wordId
  ] =
    difficultWordQueue[
      currentDifficultIndex
    ];

  updateWordProgress(
    wordId,
    knewIt
  );

  currentDifficultIndex++;

  if(
    currentDifficultIndex >=
    difficultWordQueue.length
  ){

challengeReviewQuestions = [];
currentChallenge = null;

    document.getElementById(
      'challengeChat'
    ).innerHTML = `

      <div class="panel">

        <h3>
          🎉 Hopi bon!
        </h3>

        <p>
          Je hebt de moeilijke woorden
          opnieuw geoefend.
        </p>

        <button
          class="btn"
          onclick="completeLesson()">

          ✅ Verder reizen

        </button>

      </div>

    `;

    return;
  }

  renderChallengeReview();

}


function showAirportCompletion(){

const learnerData =
  getLearnerData();

if(
  !learnerData.souvenirs
){
  learnerData.souvenirs = [];
}

if(
  !learnerData.souvenirs.includes(
    'airport-boarding-pass'
  )
){
  learnerData.souvenirs.push(
    'airport-boarding-pass'
  );

  saveLearnerData(
    learnerData
  );
}

  document.getElementById(
    'challengeChat'
  ).innerHTML =

    `
      <div class="panel">

        <h2>
          🎉 Bon Trabou!
        </h2>

        <p>
          Airport voltooid.
        </p>

        <p>
          🏆 Airport Explorer
        </p>

        <p>
          🎫 Souvenir ontvangen:
          Instapkaart Aruba
        </p>

        <button
          class="btn"
          onclick="showMainScreen(
            'travelScreen'
          )">

          🌴 Terug naar Reis

        </button>

      </div>
    `;
}


function completeLesson(){

  if(
    !currentLessonId
  ){
    return;
  }

  const learnerData =
    getLearnerData();

  if(
    !learnerData
      .travel_progress
  ){
    learnerData
      .travel_progress = {};
  }

  learnerData
    .travel_progress[
      currentLessonId
    ] = true;

  saveLearnerData(
    learnerData
  );

  openLocationOverview(
    currentLocationId
  );

}

function renderSouvenirs(){

  const learnerData =
    getLearnerData();

  let html = `
    <div
      style="
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:12px;
      "
    >
  `;

  const chapters =
    window.learningPaths
      .aruba
      .levels
      .flatMap(
        level => level.chapters
      );

  chapters.forEach(
    chapter => {

      chapter.locations.forEach(
        location => {

const completedCount =
  location.lessons.filter(
    lesson =>
      learnerData
        .travel_progress?.[
          lesson.id
        ]
  ).length;

const progressPercent =
  Math.round(
    (
      completedCount /
      location.lessons.length
    ) * 100
  );
  
  const challengeLesson =
  location.lessons.find(
    lesson => lesson.challenge
  );

const challengeResult =
  challengeLesson
    ? learnerData.challengeScores?.[
        challengeLesson.id
      ]
    : null;

const completed =
  progressPercent === 100;

          html += `
            <div
              style="
                background:#FCFAF7;
                border-radius:18px;
                padding:14px;
                text-align:center;

                opacity:${
                  completed
                    ? '1'
                    : '.45'
                };

                filter:${
                  completed
                    ? 'none'
                    : 'grayscale(100%)'
                };
              "
            >

              <div
                style="
                  font-size:34px;
                  margin-bottom:8px;
                "
              >
                ${location.souvenir.icon}
              </div>

              <div
                style="
                  font-size:13px;
                  font-weight:700;
                  line-height:1.3;
                  min-height:34px;
                "
              >
                ${location.souvenir.title}
              </div>

<div
  style="
    margin-top:8px;
    font-size:14px;
    font-weight:700;
    color:
      ${
        progressPercent === 100
          ? '#0F6D73'
          : progressPercent >= 50
            ? '#D9A441'
            : '#9CA3AF'
      };
  "
>
  ● ${progressPercent}%
</div>

${
  challengeResult
    ? `
      <div
        style="
          font-size:12px;
          margin-top:4px;
          color:#6B7280;
        "
      >
        ${challengeResult.score}/${challengeResult.total} woorden
      </div>
    `
    : ''
}

            </div>
          `;

        }
      );

    }
  );

  html += `</div>`;

  document.getElementById(
    'souvenirList'
  ).innerHTML =
    html;
}

init();

document.addEventListener(
  'visibilitychange',
  () => {
    if(document.visibilityState === 'visible'){
      updateHomeStats();
    }
  }
);