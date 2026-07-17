# 🌴 Travel Progress Design
## Papi na ABC 3.0

## Doel

Dit document beschrijft hoe voortgang binnen de Reis werkt.

De Reis is een begeleide leerroute die naast de bestaande onderdelen (woordenlijst, flashcards, quizzen en trainers) bestaat.

Voortgang binnen de Reis wordt gebruikt om:

- lessen te ontgrendelen
- locaties te ontgrendelen
- badges toe te kennen
- persoonlijke aanbevelingen te doen
- moeilijke woorden te herkennen
- trainers en quizzen aan te bevelen

---

# Hiërarchie

De Reis bestaat uit meerdere lagen.

```text
Eiland
  ↓
Hoofdstuk
  ↓
Locatie
  ↓
Les
  ↓
Opdrachten
```

Voorbeeld:

```text
Aruba

└── Hoofdstuk 1 Aankomst

    ├── Airport

        ├── Les 1 Bon Bini na Aruba
        ├── Les 2 Mi Nomber Ta
        ├── Les 3 Con Ta Bay
        └── Airport Challenge
```

---

# Les Voortgang

Een les heeft drie mogelijke statussen.

```text
Locked
Unlocked
Completed
```

### Locked

De les is nog niet beschikbaar.

### Unlocked

De les is beschikbaar maar nog niet afgerond.

### Completed

De les is succesvol afgerond.

---

# Challenge Voortgang

Elke locatie eindigt met een Challenge.

Voorbeeld:

```text
Airport Challenge
```

Een Challenge wordt pas ontgrendeld wanneer:

```text
Les 1 afgerond
Les 2 afgerond
Les 3 afgerond
```

De gebruiker hoeft niet perfect te scoren.

---

# Locatie Voortgang

Een locatie is voltooid wanneer:

```text
Alle lessen voltooid
+
Challenge voltooid
```

Voorbeeld:

```text
Airport ✅
```

Na voltooiing:

- badge vrijspelen
- volgende locatie ontgrendelen

---

# Hoofdstuk Voortgang

Een hoofdstuk is voltooid wanneer:

```text
Alle locaties voltooid
```

Voorbeeld:

```text
Hoofdstuk 1 - Aankomst ✅
```

Beloning:

- hoofdstukbadge
- nieuwe academielessen

---

# Eiland Voortgang

Een eiland is voltooid wanneer:

```text
Alle hoofdstukken voltooid
```

Voorbeeld:

```text
🏆 Aruba voltooid
```

Beloningen:

- Aruba Badge
- Certificaat
- Curaçao ontgrendelen (indien beschikbaar)

---

# Quiz Scores

Tijdens elke les worden quizresultaten opgeslagen.

Per les bewaren we:

```text
Aantal vragen
Correcte antwoorden
Foute antwoorden
Score %
```

Voorbeeld:

```text
Airport Les 1

Score: 80%
8 van 10 goed
```

---

# Moeilijke Woorden

Per woord houden we prestaties bij.

Voorbeeld:

```text
Bon Dia

12 keer goed
4 keer fout
```

Hiermee kan de app bepalen:

```text
Welke woorden lastig zijn
Welke woorden vaker terug moeten komen
Welke trainers aanbevolen worden
```

---

# Aanbevolen Oefeningen

Na een les worden automatisch oefeningen aanbevolen.

Voorbeeld:

```text
✅ Les voltooid

Aanbevolen:

🃏 Flashcards
❓ Quiz
🏋️ Trainer
```

Alleen de woorden van die les worden gebruikt.

---

# Wela Ana Aanbevelingen

Op termijn kan Wela Ana persoonlijke suggesties geven.

Voorbeeld:

"Bo ta hasi bon.

Mi ta mira cu bo tin un tiki problema cu:

- Bon dia
- Con ta bay
- Compronde

Kier purba un trainer?"
```

---

# Badges

## Lesbadges

Voorbeeld:

```text
Airport Explorer
Hotel Guest
Beach Explorer
```

---

## Hoofdstukbadges

Voorbeeld:

```text
Arrival Master
Island Explorer
```

---

## Eilandbadges

Voorbeeld:

```text
One Happy Island Master
```

---

# Wela Ana Academie

Academielessen worden gekoppeld aan de voortgang.

Voorbeeld:

```text
Airport afgerond

→ Persoonlijke Voornaamwoorden beschikbaar
```

```text
Oranjestad afgerond

→ Plaatsbepalingen beschikbaar
```

```text
Hotel afgerond

→ Werkwoorden beschikbaar
```

---

# Toekomstige Uitbreidingen

Mogelijke uitbreidingen voor versie 3.x:

- Dagelijkse uitdagingen
- XP systeem
- Leerstreaks
- Rangniveaus
- Certificaten
- Adaptief leren
- Persoonlijke leeradviezen van Wela Ana
- Wereldkaart met Aruba, Curaçao en Bonaire