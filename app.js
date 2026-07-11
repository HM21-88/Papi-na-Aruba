const weekSelections = {
  weekFilter: ['alle'],
  flashWeek: ['alle'],
  quizWeek: ['alle']
};

function showSection(id){
  ['woordenlijst','flashcards','quiz','oefeningen'].forEach(sectionId=>{
    const el=document.getElementById(sectionId);
    if(el){
      el.classList.toggle('hidden', sectionId!==id);
    }
  });

  updateMainNav(id);
  playFlashSound('nav');

  if(id==='flashcards'){
    renderFlash();
  } else if(id==='quiz'){
    updateQuizStats();
    if(!currentQuiz){
      newQuiz();
    }
  } else if(id==='woordenlijst'){
    renderList();
  }
}

*unction showExercise(id){

  playF*ashSound('nav');

  ['voorzetsels','tijdsvormen']
    .forEach(sectio*Id=>{

      const el =
        do*ument.getElementById(sectionId);

*     if(el){
        el.classList.*oggle(
          'hidden',
       *  sectionId!==id
        );
      *

    });

  if(id === 'voorzetsel*'){

    if(!currentPrepositionExe*cise){

      startPrepositionExer*ise(
        'makkelijk'
      );

    }

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
  const menu=document.getElementById(`${id}Menu`);
  const weeks=getAllWeeks();

  menu.innerHTML = `
    <label class="week-option">
      <input type="checkbox" value="alle" ${weekSelections[id].includes('alle') ? 'checked' : ''} onchange="toggleWeekValue('${id}','alle')">
      <span>Alle weken</span>
    </label>
    ${weeks.map(week => `
      <label class="week-option">
        <input type="checkbox" value="${week}" ${weekSelections[id].includes(String(week)) ? 'checked' : ''} onchange="toggleWeekValue('${id}','${week}')">
        <span>Week ${week}</span>
      </label>
    `).join('')}
  `;

  updateWeekPickerLabel(id);
}

function toggleWeekPicker(id){
  document.querySelectorAll('.week-picker').forEach(picker=>{
    const isCurrent = picker.getAttribute('data-week-picker') === id;
    picker.classList.toggle('open', isCurrent ? !picker.classList.contains('open') : false);
  });
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
let flashGoodCount=0;
let flashHardCount=0;
let flashAnimating=false;
let flashAudioReady=false;
let flashAudioCtx=null;
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
  animateFlashReset(()=>{
    flashProgressCount=0;
    flashGoodCount=0;
    flashHardCount=0;
    buildFlashPool();
    document.getElementById('flashBack').innerHTML='';
    updateFlashCounters();
  });
}

function updateFlashCounters(){
  document.getElementById('flashGoodCount').textContent=`Makkelijk: ${flashGoodCount}`;
  document.getElementById('flashHardCount').textContent=`Moeilijk: ${flashHardCount}`;
}

function updateFlashMeta(){
  const total=flashPool.length;
  document.getElementById('flashProgress').textContent=`Kaart ${flashProgressCount} van ${total}`;

  const selectedWeeks=getSelectedWeeks('flashWeek');
  const typeValue=document.getElementById('flashType').value;
  const orderValue=document.getElementById('flashOrder').value;
  const typeLabel=typeValue==='alle' ? 'alle types' : typeValue;
  const orderLabel=orderValue==='shuffle' ? 'shuffle' : 'lijstvolgorde';

  document.getElementById('flashStatus').textContent=`${getWeekLabel(selectedWeeks)} • ${typeLabel} • ${orderLabel}`;
  updateFlashCounters();
}

function renderFlash(){
  updateFlashMeta();

  if(!flashPool.length){
    document.getElementById('flashWeekLabel').textContent='';
    document.getElementById('flashFront').textContent='Geen woorden.';
    document.getElementById('flashHint').textContent='Pas je filters aan.';
    document.getElementById('flashBack').innerHTML='';
    return;
  }

  const x=flashPool[flashIndex];
  const dir=document.getElementById('flashDir').value;

  document.getElementById('flashWeekLabel').textContent=`Week ${x.week} • ${x.type || 'zonder type'}`;
  document.getElementById('flashFront').textContent=
    flashFlipped
      ? (dir==='nl-pa' ? x.papiamento : x.nederlands)
      : (dir==='nl-pa' ? x.nederlands : x.papiamento);

  document.getElementById('flashHint').textContent=
    flashFlipped ? 'Gebruik Makkelijk of Moeilijk' : 'Tik of druk op spatie om om te draaien';

  if(!flashFlipped){
    document.getElementById('flashBack').innerHTML='';
    return;
  }

  const answer=dir==='nl-pa' ? x.papiamento : x.nederlands;

  document.getElementById('flashBack').innerHTML=`
    <div><strong>Nr. ${x.nummer}</strong></div>
    <div><strong>Antwoord:</strong> ${escapeHtml(answer)}</div>
    <div><strong>Varianten:</strong> ${escapeHtml(x.varianten || '-')}</div>
    <div><strong>Week:</strong> ${x.week}</div>
    <div><strong>Type:</strong> ${escapeHtml(x.type || '-')}</div>
    <div style="margin-top:10px"><strong>Voorbeeldzin:</strong> ${escapeHtml(x.voorbeeld_papiamento || '-')}</div>
    <div><strong>Nederlandse vertaling:</strong> ${escapeHtml(x.voorbeeld_nederlands || '-')}</div>
  `;
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
    flashGoodCount++;
    const card=flashPool.splice(flashIndex,1)[0];
    flashPool.push(card);
    if(flashIndex>=flashPool.length){ flashIndex=0; }
    flashFlipped=false;
    renderFlash();
  }, 'good', 'flash-good');
}

let currentQuiz=null;
let quizGood=0;
let quizBad=0;
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
  document.getElementById('quizScoreGood').textContent=`Goed: ${quizGood}`;
  document.getElementById('quizScoreBad').textContent=`Fout: ${quizBad}`;
  document.getElementById('quizQueueInfo').textContent=`Herhaling: ${quizRepeatQueue.length}`;
}

function resetQuizScore(){
  quizGood=0;
  quizBad=0;
  quizAnswered=0;
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

// data voor pagina voorzetseltrainer
const prepositionExercises = [

{
  level:'makkelijk',
  question:'Mi ta bai ___ kas.',
  translation:'Ik ga naar huis.',
  choices:['na','pa','ku'],
  answer:'na',
  explanation:'"na" wordt gebruikt voor naar/bij/in een plaats.'
},

{
  level:'makkelijk',
  question:'Esaki ta ___ bo.',
  translation:'Dit is voor jou.',
  choices:['pa','na','di'],
  answer:'pa',
  explanation:'"pa" betekent hier "voor".'
},

{
  level:'makkelijk',
  question:'E libro ta ___ mesa.',
  translation:'Het boek ligt op tafel.',
  choices:['den','riba','ku'],
  answer:'riba',
  explanation:'"riba" betekent op of bovenop.'
},

{
  level:'gemiddeld',
  question:'Mi ta papia ___ mi ruman ___ kas.',
  translation:'Ik praat met mijn broer thuis.',
  choices:['ku','na','pa','di'],
  answer:['ku','na'],
  explanation:'Je praat MET iemand (ku) en bent BIJ/THUIS (na kas).'
},

{
  level:'gemiddeld',
  question:'E regalo ta ___ mi mama ___ Aruba.',
  translation:'Het cadeau is voor mijn moeder uit Aruba.',
  choices:['pa','di','na','ku'],
  answer:['pa','di'],
  explanation:'Voor = pa, van/uit = di.'
},

{
  level:'moeilijk',
  question:'Mi ta bin ___ Hulanda ___ Aruba ___ mi famia.',
  translation:'Ik kom van Nederland naar Aruba met mijn familie.',
  choices:['di','pa','ku','na'],
  answer:['di','pa','ku'],
  explanation:'Van = di, naar = pa, met = ku.'
}

];

let currentPrepositionExercise = null;

function startPrepositionExercise(level){

  document
    .querySelectorAll('#prepDifficultyNav button')
    .forEach(btn => btn.classList.remove('active'));

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

  renderPrepositio*Exercise();
}

function renderPrepositionExercise(){

  if(!currentPrepositionExercise)
    return;

  selectedPrepositions = [];

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
        class="btn secondary"
        onclick="checkPreposition('${choice}')">
        ${choice}
      </button>
    `;

  });

  document.getElementById('prepFeedback').innerHTML='';

}

let selectedPrepositions = [];

function checkPreposition(choice){

  const answer =
    currentPrepositionExercise.answer;

  // Eén antwoord

  if(!Array.isArray(answer)){

    const correct =
      choice === answer;

    document.getElementById(
      'prepFeedback'
    ).innerHTML =
      correct
      ? `
        <div class="feedback good">
          ✅ Goed!<br>
          ${currentPrepositionExercise.explanation}
        </div>
      `
      : `
        <div class="feedback bad">
          ❌ Niet juist.<br>
          ${currentPrepositionExercise.explanation}
        </div>
      `;

    return;
  }

  // Meerdere antwoorden

  if(
    selectedPrepositions.includes(choice)
  ){
    return;
  }

  selectedPrepositions.push(choice);

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

  document.getElementById(
    'prepFeedback'
  ).innerHTML =
    allCorrect
    ? `
      <div class="feedback good">
        ✅ Helemaal goed!<br>
        ${currentPrepositionExercise.explanation}
      </div>
    `
    : `
      <div class="feedback bad">
        ❌ Niet helemaal goed.<br>
        Correcte volgorde:
        ${answer.join(' → ')}
        <br><br>
        ${currentPrepositionExercise.explanation}
      </div>
    `;
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

function init(){
  document.getElementById('wordCount').textContent=data.length;

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
  updateMainNav('woordenlijst');
}

init();