# Storage Model
## Papi na ABC 3.0

---

# Doel

Dit document beschrijft welke gegevens lokaal worden opgeslagen voor:

- Reis
- Woorden
- Quizresultaten
- Trainers
- Academie
- Aanbevelingen

---

# Ontwerpprincipe

wordsData.js blijft de enige bron voor woorddata.

Er worden nergens woorden gedupliceerd.

Alle onderdelen verwijzen naar woordnummers.

Voorbeeld:

102 = Bon Dia

De taalvariant (PAO of PAU) wordt pas bepaald tijdens het tonen van de data.

---

# Reis Voortgang

## Structuur

```javascript
travelProgress = {

  aruba: {

    airport: {

      completedLessons: [
        'airport-1'
      ],

      challengeCompleted: false,

      completed: false
    }

  }

};
```

---

# Lesstatus

Elke les heeft:

```text
locked
unlocked
completed
```

Voorbeeld:

```javascript
lessonStatus = {

  'airport-1': 'completed',

  'airport-2': 'unlocked',

  'airport-3': 'locked'
};
```

---

# Woord Statistieken

Per woord houden we prestaties bij.

```javascript
wordStats = {

  102: {

    correct: 12,

    wrong: 3,

    lastSeen: '2026-07-17'
  }
};
```

---

# Moeilijke Woorden

Een woord wordt moeilijk wanneer:

wrong > correct

of

success rate < 70%
```

Deze woorden worden later gebruikt voor:

- Trainers
- Quizzen
- Flashcards
- Aanbevelingen van Wela Ana

---

# Les Resultaten

```javascript
lessonResults = {

  'airport-1': {

    score: 80,

    correct: 8,

    wrong: 2,

    completedAt: '2026-07-17'
  }
};
```

---

# Badges

```javascript
badges = [

  'airport-explorer',

  'navigator-di-oranjestad'
];
```

---

# Academie

```javascript
academyProgress = {

  'personal-pronouns': {

    unlocked: true,

    completed: false
  }
};
```

---

# Aanbevolen Oefeningen

```javascript
recommendedPractice = {

  flashcards: [
    101,
    102,
    107
  ],

  trainer: [
    102,
    194
  ],

  quiz: [
    101,
    102,
    107,
    110
  ]
};
```

---

# Taalinstellingen

```javascript
settings = {

  language: 'PAO',

  showSecondaryVariant: true
};
```

Mogelijke waarden:

PAO = Papiamento

PAU = Papiamentu

---

# Toekomstige Uitbreidingen

- Spaced repetition
- Dagelijkse uitdagingen
- XP systeem
- Streaks
- Persoonlijke leeradviezen
- Synchronisatie via account