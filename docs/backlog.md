Papi na Aruba 3.0

Beta feature - leerpad

------ -------- -------- -------- --------
# Visie Papi na ABC 3.0

Met versie 3.0 maken we de stap van een verzameling losse leerfuncties naar een meer begeleide leerervaring. De bestaande onderdelen zoals de woordenlijst, flashcards, quizzen en trainers blijven 
een belangrijk onderdeel van de applicatie, omdat gebruikers hiermee zelfstandig en doelgericht kunnen oefenen op onderwerpen die voor hen relevant zijn.

Naast deze bestaande functies introduceren we een nieuw leerpad: de **Reis**. Dit leerpad biedt gebruikers structuur, context en een duidelijke route door de taal. 
Hierdoor hoeft een gebruiker niet zelf te bepalen wat de volgende stap is, maar wordt hij of zij stap voor stap begeleid tijdens het leerproces.

Het leerpad heeft meerdere voordelen. Gebruikers krijgen onderweg regelmatig kleine quizzen en kennischecks aangeboden, waardoor de voortgang continu wordt gemeten. 
De resultaten van deze quizzen leveren waardevolle leerdata op. Op basis daarvan kan de app woorden en onderwerpen waarmee een gebruiker moeite heeft vaker aanbieden in flashcards, trainers, quizzen en toekomstige lessen. Op deze manier ontstaat een steeds persoonlijkere leerervaring.

Papi na ABC helpt gebruikers Papiamento en Papiamentu te leren via zowel **vrij leren** als **begeleid leren**. 
Gebruikers kiezen zelf hun hoofdvariant (PAO of PAU), terwijl de andere variant desgewenst zichtbaar kan blijven voor vergelijking en verdieping.

Papi na ABC

├─ Vrij leren
│   ├─ Woordenlijst
│   ├─ Flashcards
│   ├─ Quiz
│   └─ Trainers
│
├─ Reis
│   ├─ Aruba
│   ├─ Curaçao
│   └─ Bonaire
│
└─ Wela Ana Academie

## Vrij leren

Gebruikers kunnen zelfstandig leren via bestaande onderdelen zoals:

- 📖 Woordenlijst
- 🃏 Flashcards
- ❓ Quizzen
- 🏋️ Trainers
- 📊 Voortgang en statistieken

Hiermee bepalen gebruikers zelf wat, wanneer en hoe zij willen oefenen.

## Begeleid leren

Naast het vrije leren biedt Papi na ABC een interactieve reis waarin taal, cultuur en geschiedenis samenkomen.

Tijdens deze reis worden gebruikers begeleid door **Wela Ana**, een warme en vertrouwde gids die stap voor stap helpt bij het ontdekken van de taal en de eilanden. 
De eerste reis speelt zich af op Aruba, maar dezelfde aanpak wordt later uitgebreid naar Curaçao en Bonaire.

Tijdens de reis leren gebruikers de taal in context. Woorden, grammatica, cultuur, geschiedenis en spreekvaardigheid worden gekoppeld aan herkenbare locaties en situaties. 
Hierdoor ontstaat een natuurlijke en betekenisvolle manier van leren.


## Wela Ana Academie

Naast de Reis wordt op termijn ook de **Wela Ana Academie** toegevoegd. Hier kunnen gebruikers extra uitleg en verdieping vinden over grammatica, taalregels en achtergrondinformatie.

Waar de Reis draait om het gebruiken van taal in de praktijk, richt de Academie zich op het begrijpen van de taal. De bestaande trainers zorgen vervolgens voor herhaling en beheersing van de geleerde stof.


## Toekomstvisie

De Reis vormt een belangrijk onderdeel van de leerervaring, maar staat nooit los van de bestaande modules. Woordenlijsten, flashcards, quizzen en trainers 
blijven een essentiële rol spelen bij herhaling, verdieping en persoonlijke leerdoelen.

Samen vormen zij één leerplatform waarin gebruikers kunnen kiezen tussen zelfstandig oefenen en begeleid leren, terwijl beide leerroutes elkaar versterken.

Papi na ABC ontwikkelt zich daarmee van een verzameling leerhulpmiddelen naar een compleet leerplatform voor Papiamento en Papiamentu, waarin taal, cultuur, geschiedenis en persoonlijke voortgang samenkomen.

-------- -------- -------- -------- --------
📖 Hoofdstuk 1 Aankomst
1 Airport
2 Oranjestad
3 Hotel

📖 Hoofdstuk 2 Ontdekken
4 Main Street
5 Tanki Flip
6 Eagle Beach

📖 Hoofdstuk 3 Verkennen
7 California Lighthouse
   └ Alto Vista Chapel

8 Arikok National Park
   └ Natural Pool
   └ Fontein Cave

📖 Hoofdstuk 4 Beleven
9 San Nicolas

10 Baby Beach
    └ Tres Trapi

11 Savaneta
    └ Marinierskazerne

#Architectuurregel
wordsData.js = enige bron van woorden
aruba.js =curriculum
bonaire.js =curriculum
curacao.js =curriculum
Curriculum → verwijst naar woorden

#Regels
1. Stops zijn locaties
2. Tags zijn leerdoelen
3. Sub-locaties zijn nooit hoofdstops.

#Structuur van een stop
1. Intro verhaal
2. Wela Ana moment
3. Woorden ontdekken
4. Woorden oefenen
5. Mini quiz
6. Beloning
7. Vooruitblik





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
              margin:8px 0 16px;
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
  class="chat-avatar ${
  message.avatar || 'customs'
}">


  ${
    message.avatar === 'traveler'
      ? '🧑'
      : message.avatar === 'taxi'
      ? '🚕'
      : message.avatar === 'hotel'
      ? '🏨'
      : '👮'
  }

</div>

            <div
              class="chat-bubble local">

              <div
                class="chat-name local">

                ${message.speaker}

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
        onclick="
          toggleTranslation(${index})
        ">

        💡 ${message.translation}

      </div>
    `

    :

    `
      <div
        class="translation-link"
        onclick="
          toggleTranslation(${index})
        ">

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

        html += `
          <div class="chat-row">

            <div
              class="chat-avatar ana">

              👵🏻

            </div>

            <div
              class="chat-bubble ana">

              <div
                class="chat-name ana">

                Wela Ana

              </div>

<div>

  ${message.text}

</div>

${
  message.translation

  ?

  `
    <div
      class="translation-link">

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
  message.sender === 'miniQuizStart'
){

  html += `

    <div
      style="
        text-align:center;
        margin:24px 0;
      ">

      <button
        class="btn"
        onclick="startMiniQuiz()">

        ${message.text}

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

        👵🏻

      </div>

      <div
        class="chat-bubble ana">

        <div
          class="chat-name ana">

          Wela Ana

        </div>

        <div
          style="
            text-align:center;
          ">

          <div
            style="
              font-size:40px;
              margin-bottom:8px;
            ">

            🏆

          </div>

          <div
            style="
              font-size:22px;
              font-weight:bold;
              margin-bottom:12px;
            ">

            Bon trabou!

          </div>

        </div>

        <div
          style="
            white-space:pre-line;
            line-height:1.5;
          ">

          ${message.text}

        </div>

        <button
          class="btn"
          onclick="completeLesson()"
          style="
            width:100%;
            margin-top:16px;
          ">

          ✅ Les voltooien

        </button>

      </div>

    </div>

  `;

}

      else if(
        message.sender === 'question'
      ){

        html += `
          <div class="panel">

            <p
              style="
                font-size:28px;
                font-weight:bold;
                text-align:center;
                margin:0;
              ">
              ${message.text}
            </p>

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

          👵🏻

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

const hasSummary =
  challengeMessages.some(
    message =>
      message.sender ===
      'lessonSummary'
  );

if(
  !hasSummary
){

  html += `

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

  document.getElementById(
    'challengeChat'
  ).innerHTML = html;

  const challengeChat =
    document.getElementById(
      'challengeChat'
    );

setTimeout(() => {

  if(
    autoScroll
  ){

    challengeChat.scrollTop =
      challengeChat.scrollHeight;

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

  }

}, 120);

}