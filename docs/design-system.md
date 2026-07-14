# Papi na ABC Design System

## Productvisie

Papi na ABC helpt Nederlandstalige en Engelstalige gebruikers op een eenvoudige, vriendelijke en motiverende manier Papiamento en Papiamentu te leren.

De applicatie richt zich op:

- Woordenschat
- Begrijpend leren
- Grammatica
- Dagelijkse motivatie
- Consistente leerervaring

---

# Ontwerpprincipes

## Eenvoud

De gebruiker mag nooit twijfelen wat de volgende stap is.

## Consistentie

Dezelfde acties, kleuren, iconen en patronen betekenen overal hetzelfde.

## Motivatie

Progressie moet zichtbaar zijn zonder overweldigend te worden.

## Mobile First

De primaire ervaring is mobiel.

---

# Talen

## Basistaal

Totdat meertaligheid wordt geïmplementeerd is Nederlands de voertaal.

Alle nieuwe schermen, knoppen en meldingen worden in het Nederlands geschreven.

Engelse labels worden uitsluitend gebruikt via toekomstige vertalingen.

Ondersteunde talen:

- Nederlands
- Engels
- Papiamento / Papiamentu

Toekomstige implementatie:

```js
translations.nl
translations.en
translations.pap
```

Nieuwe schermen mogen geen hardcoded teksten bevatten die later lastig te vertalen zijn.

---

# Hoofdnavigatie

| Scherm | Label | Icoon |
|---------|---------|---------|
| Home | Home | house |
| Learn | Leren | book-open |
| Practice | Oefenen | brain |
| Progress | Voortgang | chart-column |
| Profile | Profiel | user |

---

# Studieonderdelen

| Onderdeel | Icoon |
|------------|---------|
| Flashcards | layers |
| Quiz | help-circle |
| Voorzetsels | move-right |
| Tijdsvormen | clock-3 |
| Vervoegingen | languages |
| Instellingen | settings-2 |

---

# Iconen

Standaard iconenset:

Lucide

Regels:

- Geen emoji's in navigatie
- Geen mix van emoji's en lucide iconen
- Nieuwe schermen gebruiken uitsluitend Lucide

---

# Kleuren

## Primaire kleur

Gebruik voor:

- Navigatie
- Actieve elementen
- Hoofdacties

Hex:

#0F6D73

CSS:

```css
--brand-primary
```

---

## Primaire donkere variant

Hex:

#0A565B

CSS:

```css
--brand-primary-dark
```

---

## Accentkleur

Gebruik voor:

- Progressie
- Highlights
- Call-to-actions

Hex:

#D9A441

CSS:

```css
--brand-accent
```

---

## Accent donker

Hex:

#C88F2B

CSS:

```css
--brand-accent-dark
```

---

## Tekst

Primair:

#17364D

Secundair:

#6B7280

---

# Af te bouwen kleuren

Deze variabelen worden uitgefaseerd:

```css
--flag-blue
--flag-red
--flag-yellow
```

Nieuwe componenten gebruiken deze niet meer.

---

# Componenten

## Radius

Cards:

22px

Buttons:

14px

Stat cards:

18px

Progressbars:

999px

---

# Terminologie

Gebruik:

- Home
- Leren
- Oefenen
- Voortgang
- Profiel

Niet gebruiken:

- Learn
- Practice
- Study
- Progress
- Profile

---

# Prioriteiten

## Fase 1

- Design consistency
- Navigatie
- Iconen
- Kleuren opschonen

## Fase 2

- Woordenlijst verbeteren
- Woorddetailpagina

## Fase 3

- Trainers uitbreiden
- Niveausysteem

## Fase 4

- Profiel
- Statistieken
- Achievements

---

# Beslissingsregel

Nieuwe functionaliteit wordt alleen toegevoegd wanneer deze:

1. Past binnen de productvisie
2. Het leerproces verbetert
3. Consistent is met bestaande patronen

# Consistency Audit

## Navigatie

Huidig:

- Home
- Learn
- Practice
- Progress
- Profile

Doel:

- Home
- Leren
- Oefenen
- Voortgang
- Profiel

Status:
🔄 Nog aanpassen

---

## Iconen

Huidig:

- Emoji's
- SVG's
- Mix van stijlen

Doel:

- Lucide

Status:
🔄 Nog aanpassen

---

## Kleuren

Huidig:

- brand-primary
- brand-accent
- flag-blue
- flag-red
- flag-yellow

Doel:

- brand-primary
- brand-accent

Status:
🔄 Nog aanpassen
