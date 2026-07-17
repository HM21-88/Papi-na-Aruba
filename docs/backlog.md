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