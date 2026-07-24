// CONTENTREGEL VOOR 🟨-CHIPS
//
// Een chip mag één woord of één volledige uitdrukking bevatten:
//
// ✅ 🟨 Famia betekent familie.
// ✅ 🟨 Ruman homber betekent broer.
// ✅ 🟨 Yiu homber betekent zoon.
// ✅ 🟨 Con ta bay cu bo? betekent hoe gaat het met jou?
//
// In één betekenisregel staat maximaal één 🟨-chip.
//
// ✅ 🟨 Cu betekent met. 🟨 Bo betekent jij of jou.
// ✅ 🟨 Dushi betekent lief, lekker of zoet. 🟨 Tera betekent land of aarde.
//
// ❌ 🟨 Cu betekent met en 🟨 Bo betekent jij of jou.
// ❌ 🟨 Ruman muhe betekent zus en 🟨 Ruman homber betekent broer.

window.lessonData = {


'airport-1': {

  title:'Bon Bini na Aruba',

scene:[

  {
    sender:'narration',
    text:'🛬 Na een lange vlucht land je op Aruba. Het vliegtuig rolt langzaam naar de terminal.'
  },

  {
    sender:'narration',
    text:'🌴 Door het raampje zie je de zon schijnen boven het eiland.'
  },

  {
    sender:'ana',
    text:'Bon bini! Mijn naam is Wela Ana. Tijdens je reis ga ik je helpen met Papiamento en laat ik je kennismaken met Aruba.'
  },

  {
    sender:'ana',
    text:'Veel mensen noemen Aruba One Happy Island. Straks ontdek je waarom.'
  },

  {
    sender:'narration',
    text:'🚶 Samen met de andere passagiers loop je richting de aankomsthal.'
  },

  {
    sender:'narration',
    text:'🛂 Voor de paspoortcontrole staat een vriendelijke douanebeambte.'
  },

  {
    sender:'dialogue',
    speaker:'Douanebeambte',
    avatar:'customs',
    text:'Bon dia!',
    translation:'Goedendag!'
  },

  {
    sender:'ana',
    text:'🟨 Bon dia betekent goedendag en gebruik je in de ochtend. Later leer je ook Bon tardi en Bonochi.'
  },

  {
    sender:'dialogue',
    speaker:'Douanebeambte',
    avatar:'customs',
    text:'Bon bini na Aruba.',
    translation:'Welkom op Aruba.'
  },

  {
    sender:'ana',
    text:'🟨 Bon bini betekent welkom. Je zult deze woorden overal op Aruba zien en horen.'
  },

  {
    sender:'dialogue',
    speaker:'Douanebeambte',
    avatar:'customs',
    text:'Con ta bay?',
    translation:'Hoe gaat het?'
  },

  {
    sender:'ana',
    text:'🟨 Con betekent hoe.'
  },

  {
  sender:'ana',
  text:'🟨 Bay betekent gaan.'
	},

	{
	  sender:'ana',
	  text:'🟨 Con ta bay? betekent letterlijk: Hoe gaat het?'
	},

  {
    sender:'ana',
    text:'Je kunt antwoorden met 🟨 ta bon.'
  },

  {
    sender:'ana',
    text:'🟨 Ta bon betekent het gaat goed.'
  },

	{
	  sender:'ana',
	  text:'Je kunt ook terugvragen: 🟨 Con ta bay cu bo?'
	},

	{
	  sender:'ana',
	  text:'🟨 Cu betekent met.'
	},
	
	{
	  sender:'ana',
	  text:'🟨 Bo betekent jij of jou.'
	},

	{
	  sender:'ana',
	  text:'🟨 Cu bo betekent dus met jou.'
	},

	{
	  sender:'ana',
	  text:'🟨 Con ta bay cu bo? betekent letterlijk: hoe gaat het met jou?'
	},

	{
	  sender:'dialogue',
	  speaker:'Douanebeambte',
	  avatar:'customs',
	  text:'Ta bon, danki.',
	  translation:'Het gaat goed, bedankt.'
	},

  {
    sender:'dialogue',
    speaker:'Douanebeambte',
    avatar:'customs',
    text:'Promé biaha na Aruba?',
    translation:'Eerste keer op Aruba?'
  },

  {
    sender:'ana',
    text:'🟨 Promé betekent eerste.'
  },

  {
    sender:'ana',
    text:'Als dit je eerste bezoek is kun je antwoorden met 🟨 Si.'
  },

  {
    sender:'ana',
    text:'🟨 Si betekent ja.'
  },

  {
    sender:'ana',
    text:'En als je al eerder op Aruba bent geweest kun je antwoorden met 🟨 No.'
  },

  {
    sender:'ana',
    text:'🟨 No betekent nee.'
  },

  {
    sender:'dialogue',
    speaker:'Douanebeambte',
    avatar:'customs',
    text:'Danki.',
    translation:'Bedankt.'
  },

  {
    sender:'ana',
    text:'🟨 Danki betekent bedankt. Een klein woord dat je iedere dag zult horen op Aruba.'
  },

  {
    sender:'ana',
    text:'Mooi! Je hebt je eerste woorden op Aruba geleerd. Laten we kijken wat je hebt onthouden.'
  }

],

miniQuiz:[

  { id:'bon dia!_102', word:'Bon dia' },
  { id:'bon bini_73.1', word:'Bon bini' },
  { id:'con?_24', word:'Con' },
  { id:'cu_37', word:'Cu' },
  { id:'bo_2', word:'Bo' },
  { id:'con ta bay cu bo?_107.1', word:'Con ta bay cu bo?' },
  { id:'danki_194', word:'Danki' },
  { id:'ta bon_82.1', word:'Ta bon' },
  { id:'si_25', word:'Si' },
  { id:'no_26', word:'No' }

],

wordIds:[
  2,
  24,
  25,
  26,
  37,
  73.1,
  82.1,
  102,
  107.1,
  194
]

},


'airport-2': {

  title:'Mi Nomber Ta...',

  scene:[

    {
      sender:'narration',
      text:'🧳 Je wacht bij de bagageband terwijl de laatste koffers voorbij rollen.'
    },

    {
      sender:'ana',
      text:'Toen ik jong was ontmoette ik op de luchthaven mensen van over de hele wereld.'
    },

    {
      sender:'dialogue',
      speaker:'Carlos',
      avatar:'traveler',
      text:'Bon dia!',
      translation:'Goedendag!'
    },

    {
      sender:'dialogue',
      speaker:'Carlos',
      avatar:'traveler',
      text:'Mi nomber ta Carlos.',
      translation:'Mijn naam is Carlos.'
    },

    {
      sender:'ana',
      text:'🟨 Nomber betekent naam.'
    },

    {
      sender:'ana',
      text:'🟨 Mi betekent ik.'
    },

    {
      sender:'ana',
      text:'Dat is één van de meest gebruikte woorden in het Papiamento.'
    },

    {
      sender:'ana',
      text:'Nog twee handige woorden zijn 🟨 Bo (jij) en 🟨 Nos (wij).'
    },

    {
      sender:'ana',
      text:'Bijvoorbeeld: 🟨 Nos ta bin di Aruba. Dat betekent wij komen uit Aruba.'
    },

    {
      sender:'dialogue',
      speaker:'Carlos',
      avatar:'traveler',
      text:'Con ta bo nomber?',
      translation:'Hoe heet jij?'
    },

    {
      sender:'ana',
      text:'Je kent con en bo al uit de vorige les.'
    },

    {
      sender:'ana',
      text:'🟨 Con ta bo nomber? betekent hoe heet jij?'
    },

    {
      sender:'dialogue',
      speaker:'Carlos',
      avatar:'traveler',
      text:'Mi ta bin di Aruba.',
      translation:'Ik kom uit Aruba.'
    },

    {
      sender:'ana',
      text:'🟨 Bin betekent komen.'
    },

    {
      sender:'ana',
      text:'🟨 Di betekent uit of van.'
    },

    {
      sender:'ana',
      text:'Carlos zegt: 🟨 Mi ta bin di Aruba.'
    },

    {
      sender:'ana',
      text:'Jij kunt straks zeggen: 🟨 Mi ta bin di Hulanda.'
    },

    {
      sender:'dialogue',
      speaker:'Carlos',
      avatar:'traveler',
      text:'Bo ta bin di Hulanda?',
      translation:'Kom jij uit Nederland?'
    },

    {
      sender:'ana',
      text:'Hier hoor je opnieuw 🟨 Bo, 🟨 Bin, 🟨 Di.'
    },

    {
      sender:'dialogue',
      speaker:'Carlos',
      avatar:'traveler',
      text:'Bo ta papia Papiamento?',
      translation:'Spreek jij Papiamento?'
    },

    {
      sender:'ana',
      text:'🟨 Papia betekent praten of spreken.'
    },

    {
      sender:'dialogue',
      speaker:'Carlos',
      avatar:'traveler',
      text:'Si?'
    },

    {
      sender:'dialogue',
      speaker:'Carlos',
      avatar:'traveler',
      text:'No?'
    },

    {
      sender:'ana',
      text:'Je kent si en no al uit les 1.'
    },

    {
      sender:'dialogue',
      speaker:'Carlos',
      avatar:'traveler',
      text:'Un poco?',
      translation:'Een beetje?'
    },

    {
      sender:'ana',
      text:'🟨 Poco betekent een beetje.'
    },

    {
      sender:'ana',
      text:'Veel mensen beginnen met 🟨 un poco Papiamento.'
    },

    {
      sender:'ana',
      text:'Mooi! Je kunt nu iemand begroeten, jezelf voorstellen en vertellen waar je vandaan komt.'
    }

  ],

  miniQuiz:[

    {
      id:'mi_1',
      word:'Mi'
    },

    {
      id:'bo_2',
      word:'Bo'
    },

    {
      id:'nos_4',
      word:'Nos'
    },

    {
      id:'con?_24',
      word:'Con'
    },

    {
      id:'di_59',
      word:'Di'
    },

    {
      id:'bin_73',
      word:'Bin'
    },

    {
      id:'poco_87',
      word:'Poco'
    },

    {
      id:'papia_93',
      word:'Papia'
    },

    {
      id:'nomber_98',
      word:'Nomber'
    }

  ],

  wordIds:[
    1,
    2,
    4,
    24,
    59,
    73,
    87,
    93,
    98
  ]

},


'airport-3': {

  title:'Bon Tardi!',

  scene:[

    {
      sender:'narration',
      text:'🚕 Buiten de terminal staat een rij taxi’s te wachten in de warme zon.'
    },

    {
      sender:'ana',
      text:'Nu begint je eerste rit over Aruba. Kijk goed om je heen.'
    },

    {
      sender:'dialogue',
      speaker:'Taxichauffeur',
      avatar:'taxi',
      text:'Bon tardi!',
      translation:'Goedemiddag!'
    },

    {
      sender:'ana',
      text:'🟨 Bon tardi betekent goedenmiddag. Dat gebruik je in de middag.'
    },

    {
      sender:'dialogue',
      speaker:'Taxichauffeur',
      avatar:'taxi',
      text:'Con ta bay?',
      translation:'Hoe gaat het?'
    },

    {
      sender:'ana',
      text:'Die vraag ken je al uit les 1.'
    },

    {
      sender:'ana',
      text:'Je zou nu kunnen antwoorden met 🟨 Ta bon.'
    },

    {
      sender:'dialogue',
      speaker:'Taxichauffeur',
      avatar:'taxi',
      text:'Nos ta bay.',
      translation:'Wij gaan.'
    },

    {
      sender:'ana',
      text:'🟨 Bay betekent gaan.'
    },

    {
      sender:'ana',
      text:'🟨 Nos betekent wij. Dat woord ken je al uit de vorige les.'
    },

    {
      sender:'ana',
      text:'🟨 Nos ta bay betekent wij gaan.'
    },

    {
      sender:'narration',
      text:'🌞 Het is warm. De chauffeur ziet dat je net uit het vliegtuig komt.'
    },

    {
      sender:'dialogue',
      speaker:'Taxichauffeur',
      avatar:'taxi',
      text:'Bo kier awa?',
      translation:'Wil jij water?'
    },

    {
      sender:'ana',
      text:'🟨 Kier betekent willen.'
    },

    {
      sender:'ana',
      text:'🟨 Awa betekent water.'
    },

    {
      sender:'ana',
      text:'Bo kier awa? betekent wil jij water?'
    },

    {
      sender:'ana',
      text:'Je kunt ook zeggen: 🟨 Mi kier awa. Dat betekent ik wil water.'
    },

    {
      sender:'dialogue',
      speaker:'Taxichauffeur',
      avatar:'taxi',
      text:'Ata bo awa.',
      translation:'Hier is je water.'
    },

    {
      sender:'ana',
      text:'🟨 Ata betekent hier heb je.'
    },

    {
      sender:'ana',
      text:'Je zou kunnen zeggen: 🟨 Masha danki.'
    },

    {
      sender:'ana',
      text:'🟨 Masha betekent heel of erg.'
    },

    {
      sender:'ana',
      text:'Met Masha danki zeg je: heel erg bedankt.'
    },

    {
      sender:'dialogue',
      speaker:'Taxichauffeur',
      avatar:'taxi',
      text:'No tin problema.',
      translation:'Geen probleem.'
    },

    {
      sender:'ana',
      text:'🟨 Tin betekent hebben of er is.'
    },

    {
      sender:'ana',
      text:'🟨 Problema betekent probleem.'
    },

    {
      sender:'ana',
      text:'Je kent no al uit les 1. Daar betekende het nee.'
    },

    {
      sender:'ana',
      text:'Maar no wordt ook gebruikt voor niet of geen.'
    },

    {
      sender:'ana',
      text:'Het Papiamento heeft ongeveer achtduizend woorden. Daarom kom je woorden vaak in verschillende situaties tegen.'
    },

    {
      sender:'ana',
      text:'🟨 No tin problema betekent letterlijk: geen probleem.'
    },

    {
      sender:'narration',
      text:'🌴 Terwijl jullie rijden zie je kleurrijke huizen, hoge cactussen en de blauwe Caribische zee.'
    },

    {
      sender:'dialogue',
      speaker:'Taxichauffeur',
      avatar:'taxi',
      text:'Aruba ta masha bunita.',
      translation:'Aruba is heel mooi.'
    },

    {
      sender:'ana',
      text:'Hier hoor je opnieuw 🟨 Masha.'
    },

    {
      sender:'ana',
      text:'De chauffeur zegt: Aruba is heel mooi.'
    },

    {
      sender:'narration',
      text:'🏨 Na een korte rit komen jullie aan bij je hotel.'
    },

    {
      sender:'dialogue',
      speaker:'Taxichauffeur',
      avatar:'taxi',
      text:'Ayo!',
      translation:'Doei!'
    },

    {
      sender:'ana',
      text:'🟨 Ayo betekent doei.'
    },

    {
      sender:'dialogue',
      speaker:'Taxichauffeur',
      avatar:'taxi',
      text:'Te mayan!',
      translation:'Tot morgen!'
    },

    {
      sender:'ana',
      text:'🟨 Mayan betekent morgen.'
    },

    {
      sender:'ana',
      text:'🟨 Te mayan betekent tot morgen.'
    },

    {
      sender:'ana',
      text:'Mooi gedaan! Je hebt je eerste echte gesprek in een Arubaanse taxi gevoerd.'
    }

  ],

  miniQuiz:[

    {
      id:'bon tardi!_103',
      word:'Bon tardi'
    },

    {
      id:'bay_74',
      word:'Bay'
    },

    {
      id:'kier_15',
      word:'Kier'
    },

    {
      id:'awa_172',
      word:'Awa'
    },

    {
      id:'ata_54',
      word:'Ata'
    },

    {
      id:'tin_13',
      word:'Tin'
    },

    {
      id:'problema_302.2',
      word:'Problema'
    },

    {
      id:'masha_302',
      word:'Masha'
    },

    {
      id:'ayo!_110',
      word:'Ayo'
    },

    {
      id:'mayan_68',
      word:'Mayan'
    }

  ],

  wordIds:[
    13,
    15,
    54,
    60,
    68,
    103,
    110,
    172,
    302,
    302.2
  ]

},


'airport-challenge': {

  title:'Airport Challenge',

  scene:[

    {
      sender:'narration',
      text:'🏆 Je hebt de luchthaven van Aruba succesvol doorlopen.'
    },

    {
      sender:'ana',
      text:'Van de douane tot de taxistandplaats heb je al veel woorden geleerd.'
    },

    {
      sender:'ana',
      text:'Laten we kijken hoeveel je hebt onthouden voordat we verder reizen.'
    }

  ],

  questions:[

    { id:'bon dia!_102', word:'Bon dia' },
    { id:'bon bini_73.1', word:'Bon bini' },

    { id:'con?_24', word:'Con' },
    { id:'cu_37', word:'Cu' },
    { id:'bo_2', word:'Bo' },

    { id:'bay_74', word:'Bay' },

    { id:'con ta bay cu bo?_107.1', word:'Con ta bay cu bo?' },

    { id:'danki_194', word:'Danki' },
    { id:'ta bon_82.1', word:'Ta bon' },

    { id:'si_25', word:'Si' },
    { id:'no_26', word:'No' },

    { id:'mi_1', word:'Mi' },
    { id:'nos_4', word:'Nos' },

    { id:'di_59', word:'Di' },

    { id:'bin_73', word:'Bin' },

    { id:'poco_87', word:'Poco' },

    { id:'papia_93', word:'Papia' },

    { id:'nomber_98', word:'Nomber' },

    { id:'bon tardi!_103', word:'Bon tardi' },

    { id:'kier_15', word:'Kier' },

    { id:'awa_172', word:'Awa' },

    { id:'ata_54', word:'Ata' },

    { id:'tin_13', word:'Tin' },

    { id:'problema_302.2', word:'Problema' },

    { id:'masha_302', word:'Masha' },

    { id:'ayo!_110', word:'Ayo' },

    { id:'mayan_68', word:'Mayan' }

  ],
  
 summary:`

	Je hebt niet alleen woorden geleerd, maar ook gezien hoe ze worden gebruikt in echte gesprekken.

	🟨 Mi ta papia Papiamento un poco.

	Een paar lessen geleden was dat nog abracadabra.

	Nu herken je al:

	🟨 Mi = ik
	🟨 Papia = spreken
	🟨 Poco = beetje

	Dat betekent:

	Ik spreek een beetje Papiamento.

	🌴 Klaar voor het volgende avontuur op Aruba?

	`

},


'tanki-flip-1': {

  title:'Kas di Rosa',

  scene:[

    {
      sender:'narration',
      text:'🚕 De taxi rijdt richting de rotonde di Tanki Flip. Ana wijst uit het raam.'
    },

    {
      sender:'ana',
      text:'Wela Ana noemen de mensen mij hier — maar ik ben niet echt jouw oma, hoor.'
    },

    {
      sender:'ana',
      text:'Ik ben een beetje de oma van heel Aruba. Ik woon hier al mijn hele leven, en ik ken zo ongeveer iedereen.'
    },

    {
      sender:'ana',
      text:'Op Aruba wonen ongeveer 108.000 mensen — best klein voor een heel eiland. Kom, ik laat je mijn oude straat zien.'
    },

    {
      sender:'narration',
      text:'🔄 De taxi neemt de rotonde di Tanki Flip en rijdt een rustige zijstraat in.'
    },

    {
      sender:'ana',
      text:'Is het je al opgevallen? Bijna alle huizen hier hebben maar één verdieping.'
    },

    {
      sender:'ana',
      text:'Dat komt vooral door de wind. Het waait hier het hele jaar door stevig, en een laag huis staat steviger dan een hoog huis.'
    },

    {
      sender:'ana',
      text:'En als een gezin groeide, bouwde je er vroeger gewoon een kamer bij — niet omhoog, maar opzij.'
    },

    {
      sender:'ana',
      text:'Als je met mij meekomt, ben je trouwens overal welkom. Dat is gewoon hoe het hier gaat.'
    },

    {
      sender:'narration',
      text:'👵 Voor een klein huis met een grote schaduwrijke boom zit een vrouw op een stoel. Ze zwaait meteen.'
    },

    {
      sender:'dialogue',
      speaker:'Rosa',
      avatar:'neighbor',
      text:'Ana! Con ta bay, dushi?',
      translation:'Ana! Hoe gaat het, lieverd?'
    },

    {
      sender:'ana',
      text:'Rosa woont hier al sinds ik klein was. We zijn geen familie van bloed, maar wel van hart.'
    },

    {
      sender:'ana',
      text:'Con ta bay ken je al van het vliegveld. Rosa vraagt me hoe het gaat.'
    },

    {
      sender:'dialogue',
      speaker:'Rosa',
      avatar:'neighbor',
      text:'Ta bo famia esaki?',
      translation:'Is dit jouw familie?'
    },

    {
      sender:'ana',
      text:'🟨 Famia betekent familie.'
    },

    {
      sender:'dialogue',
      speaker:'Rosa',
      avatar:'neighbor',
      text:'Bo ta biba serca di aki?',
      translation:'Woon jij dichtbij hier?'
    },

    {
      sender:'ana',
      text:'🟨 Biba betekent wonen of leven.'
    },
	
	{
      sender:'ana',
      text:'🟨 Aki betekent hier'
    },

    {
      sender:'ana',
      text:'Je zou kunnen antwoorden: Mi no ta biba aki. Dat betekent Ik woon hier niet.'
    },

    {
      sender:'dialogue',
      speaker:'Rosa',
      avatar:'neighbor',
      text:'Con ta bo wela y bo welo?',
      translation:'Hoe gaat het met jouw oma en opa?'
    },

    {
      sender:'ana',
      text:'🟨 Wela betekent oma.'
    },
	
	{
      sender:'ana',
      text:'🟨 y betekent en.'
    },

    {
      sender:'ana',
      text:'🟨 Welo betekent opa.'
    },

    {
      sender:'dialogue',
      speaker:'Rosa',
      avatar:'neighbor',
      text:'Y bo tata y bo mama?',
      translation:'En jouw vader en moeder?'
    },

    {
      sender:'ana',
      text:'🟨 Tata betekent vader.'
    },

    {
      sender:'ana',
      text:'🟨 Mama betekent moeder.'
    },

    {
      sender:'narration',
      text:'🌴 Rosa klopt op een lege stoel naast haar en wenkt je om te gaan zitten.'
    },

    {
      sender:'dialogue',
      speaker:'Rosa',
      avatar:'neighbor',
      text:'Bo tin ruman muhe of ruman homber?',
      translation:'Heb jij een zus of een broer?'
    },

	{
      sender:'ana',
      text:'Herken je al wat woorden? Bo en tin heb je in de vorige les al geleerd.'
    },

    {
      sender:'ana',
      text:'🟨 Ruman betekent broer of zus. Zeg je erbij welk geslacht, dan weet je precies wie je bedoelt.'
    },

    {
      sender:'ana',
      text:'🟨 Ruman muhe betekent zus.'
    },
	
	 {
      sender:'ana',
      text:'🟨 Ruman homber betekent broer.'
    },
	
	 {
      sender:'ana',
      text:'In de volgende les zal je zien dat we dat voor zoon en dochter ook zo doen.'
    },

    {
      sender:'ana',
      text:'Zo bouw je het hier steeds op: één basiswoord en er komt telkens iets bij dat het preciezer maakt.'
    },

    {
      sender:'dialogue',
      speaker:'Rosa',
      avatar:'neighbor',
      text:'Mi omo y mi tanta tabata biba einan.',
      translation:'Mijn oom en mijn tante woonden daar.'
    },

    {
      sender:'ana',
      text:'🟨 Omo betekent oom.'
    },

    {
      sender:'ana',
      text:'🟨 Tanta betekent tante.'
    },

    {
      sender:'ana',
      text:'Je hoort biba opnieuw. Rosa gebruikt het net zoals bij "wonen" — alleen dan in het verleden.'
    },

    {
      sender:'ana',
      text:'Mooi! Nu ken je de basiswoorden voor familie, en weet je hoe je zelf broer en zus kunt maken.'
    }

  ],

  miniQuiz:[
    { id:'famia_112', word:'Famia' },
	{ id:'aki_28', word:'aki' },
    { id:'biba_316', word:'Biba' },
    { id:'wela_121', word:'Wela' },
	{ id:'y_61', word:'y' },
    { id:'welo_121', word:'Welo' },
    { id:'tata_116', word:'Tata' },
    { id:'mama_115', word:'Mama' },
    { id:'ruman muhe_119', word:'Ruman muhe' },
    { id:'ruman homber_120', word:'Ruman homber' },
    { id:'omo_129', word:'Omo' },
    { id:'tanta_129.1', word:'Tanta' }
  ],

  wordIds:[
    28, 61, 112, 115, 116, 119, 120, 121, 129, 129.1, 316
  ]

},


'tanki-flip-2': {

  title:'Un Bishita Serka Rosa',

  scene:[

    {
      sender:'narration',
      text:'☕ Rosa staat op en loopt naar binnen. Ze gebaart dat je haar moet volgen.'
    },

    {
      sender:'dialogue',
      speaker:'Rosa',
      avatar:'neighbor',
      text:'Drenta, drenta! Mi ta duna bo algo pa bebe.',
      translation:'Kom binnen, kom binnen! Ik geef je iets te drinken.'
    },

    {
      sender:'ana',
      text:'🟨 Duna betekent geven.'
    },

    {
      sender:'ana',
      text:'🟨 Bebe betekent drinken.'
    },

    {
      sender:'ana',
      text:'Op Aruba krijg je bijna nooit niets aangeboden als je op bezoek bent. Dat hoort erbij.'
    },

    {
      sender:'narration',
      text:'🏠 Binnen hangen overal foto\'s aan de muur. Rosa wijst naar een foto van een jongeman met een koffer.'
    },

    {
      sender:'dialogue',
      speaker:'Rosa',
      avatar:'neighbor',
      text:'Esaki ta mi nieto, Marvin.',
      translation:'Dit is mijn kleinzoon, Marvin.'
    },

    {
      sender:'ana',
      text:'🟨 Nieto betekent kleinzoon.'
    },

    {
      sender:'dialogue',
      speaker:'Rosa',
      avatar:'neighbor',
      text:'E ta studia na Hulanda awor.',
      translation:'Hij studeert nu in Nederland.'
    },

    {
      sender:'ana',
      text:'Veel jonge mensen van Aruba gaan studeren in Nederland. Het eiland is klein, en niet alle opleidingen zijn hier.'
    },

    {
      sender:'dialogue',
      speaker:'Rosa',
      avatar:'neighbor',
      text:'Pero e ta yama mi tur siman ainda.',
      translation:'Maar hij belt mij nog steeds elke week.'
    },

    {
      sender:'ana',
      text:'🟨 Yama betekent hier bellen in andere zinnen kan yama roepen betekenen.'
    },

    {
      sender:'ana',
      text:'🟨 Tur betekent elk of alle.'
    },

    {
      sender:'ana',
      text:'🟨 Ainda betekent nog of nog steeds.'
    },

    {
      sender:'ana',
      text:'🟨 Tur siman betekent dus: elke week.'
    },

    {
      sender:'ana',
      text:'Zo blijft het gevoel voor het eiland, ook van ver weg. Wij noemen dat dushi tera.'
    },

    {
      sender:'ana',
      text:'🟨 Dushi betekent lief, lekker of zoet.'
    },
	
    {
      sender:'ana',
      text:'🟨 Tera betekent land of aarde.'
    },

    {
      sender:'ana',
      text:'🟨Dushi tera betekent dus: het lieve land. Het is zelfs de titel van ons volkslied.'
    },

    {
      sender:'ana',
      text:'Luistertip: de zanger Jeon heeft een nummer waarin "Oo Aruba, dushi tera" telkens terugkomt. Zoek het maar eens op.'
    },

    {
      sender:'narration',
      text:'🌳 Rosa kijkt door het raam naar het cunucu achter haar huis, waar geiten rondlopen tussen de cactussen.'
    },

    {
      sender:'dialogue',
      speaker:'Rosa',
      avatar:'neighbor',
      text:'Ora mi tabata mucha, nos tur tabata hunga den e cunucu.',
      translation:'Toen ik een kind was, speelden we allemaal in het cunucu.'
    },

    {
      sender:'ana',
      text:'🟨 Cunucu betekent platteland, het onbebouwde land buiten de stad.'
    },

    {
      sender:'ana',
      text:'Vroeger waren er veel minder auto\'s op het eiland. Kinderen konden overal vrij spelen, met vrienden en familie tegelijk.'
    },

    {
      sender:'ana',
      text:'Nu is dat anders, maar de herinnering blijft. Zo praat Rosa nog steeds het liefst.'
    },

    {
      sender:'ana',
      text:'Mooi! Je hebt nu een echt gesprek gevolgd — over familie ver weg, en over hoe dushi tera hier voelt.'
    }

  ],

  miniQuiz:[
    { id:'duna_201', word:'Duna' },
    { id:'bebe_171', word:'Bebe' },
    { id:'nieto_122', word:'Nieto' },
    { id:'yama_97', word:'Yama' },
    { id:'tur_401', word:'Tur' },
    { id:'ainda_409', word:'Ainda' },
    { id:'dushi_163', word:'Dushi' },
    { id:'tera_520.1', word:'Tera' },
    { id:'cunucu_473', word:'Cunucu' }
  ],

  wordIds:[
    97, 122, 163, 171, 201, 401, 409, 473, 520.1
  ]

},


'tanki-flip-3': {

  title:'Yiu di Rosa',

  scene:[

    {
      sender:'narration',
      text:'🚗 Buiten stopt een auto. Een man stapt uit met een plastic tas vol boodschappen.'
    },

    {
      sender:'dialogue',
      speaker:'Ramon',
      avatar:'local',
      text:'Bon tardi! Mi ta yiu homber di Rosa.',
      translation:'Goedemiddag! Ik ben de zoon van Rosa.'
    },

    {
      sender:'ana',
      text:'🟨 Yiu homber betekent zoon.'
    },

    {
      sender:'ana',
      text:'Ramon zegt dus letterlijk: ik ben de zoon van Rosa.'
    },

    {
      sender:'ana',
      text:'Had Rosa een dochter gehad die dit zei, dan was het 🟨 yiu muhe.'
    },

    {
      sender:'ana',
      text:'Dat is net iets anders dan mucha, wat gewoon kind in het algemeen betekent — elk kind, van wie dan ook.'
    },

    {
      sender:'ana',
      text:'🟨 Mucha betekent kind.'
    },

    {
      sender:'ana',
      text:'En als je het over meerdere kinderen hebt, zeg je 🟨 muchanan.'
    },
	
	{
      sender:'ana',
      text:'🟨 Muchanan betekent kinderen.'
    },

    {
      sender:'ana',
      text:'Dat -nan aan het eind zie je op Aruba vaker terug. Hoe dat precies werkt, leer ik je later.'
    },

    {
      sender:'dialogue',
      speaker:'Ramon',
      avatar:'local',
      text:'Rosa, mi tabatin hopi trabou awe.',
      translation:'Rosa, ik heb vandaag veel werk gehad.'
    },

    {
      sender:'ana',
      text:'🟨 Trabou betekent werk.'
    },

    {
      sender:'dialogue',
      speaker:'Rosa',
      avatar:'neighbor',
      text:'Ramon ta traha hopi. E ta traha e hotel chikito na e otro banda di caya.',
      translation:'Ramon werkt veel. Hij bouwde het kleine hotel aan de overkant van de straat.'
    },

    {
      sender:'ana',
      text:'🟨 Traha betekent werken, maar ook bouwen of maken. Dat zal je vaker zien, op Aruba gaan we slim met woorden om.'
    },

    {
      sender:'ana',
      text:'Trabou is het werk zelf, traha is wat je dóét, het werkwoord. Twee verschillende woorden die op elkaar lijken.'
    },

    {
      sender:'narration',
      text:'🏨 Door het raam wijst Rosa naar een klein hotel verderop. Een keurig geschilderd huis met drie appartementen'
    },

    {
      sender:'ana',
      text:'Kijk, dat is nu een klein hotel. Maar dat huis en die appartementen heeft haar jongste zoon zelf gebouwd.'
    },

    {
      sender:'ana',
      text:'🟨 Chikito betekent klein.'
    },

    {
      sender:'ana',
      text:'🟨 Yiu homber chikito betekent dus: de jongste zoon.'
    },

    {
      sender:'dialogue',
      speaker:'Ramon',
      avatar:'local',
      text:'Ta un cas chikito, pero e ta bunita, no?',
      translation:'Het is een klein huis, maar het is mooi, toch?'
    },

    {
      sender:'ana',
      text:'🟨 pero betekent maar.' 
    },
	
    {
      sender:'ana',
      text:'🟨 Bunita betekent mooi.' 
    },

    {
      sender:'ana',
      text:'Zo is het vaak hier: iets kleins, met veel liefde gebouwd, wordt iets groots.'
    },

    {
      sender:'ana',
      text:'Mooi! Nu ken je het verschil tussen mucha en yiu, en je hebt gezien hoe familie hier ook betekent samen bouwen.'
    }

  ],

  miniQuiz:[
    { id:'yiu homber_118.2', word:'Yiu homber' },
    { id:'yiu muhe_118.1', word:'Yiu muhe' },
    { id:'mucha_117', word:'Mucha' },
    { id:'trabou_238', word:'Trabou' },
    { id:'traha_237', word:'Traha' },
    { id:'chikito_85', word:'Chikito' },
	{ id:'pero_395', word:'Pero' },
    { id:'bunita_367', word:'Bunita' }
  ],

  wordIds:[
    85, 117, 118.1, 118.2, 237, 238, 367, 395
  ]

},


'tanki-flip-challenge': {

  title:'Tanki Flip Challenge',

  scene:[

    {
      sender:'narration',
      text:'🏆 Je hebt een middag doorgebracht in Wela Ana\'s oude straat.'
    },

    {
      sender:'ana',
      text:'Je hebt Rosa ontmoet, iets gedronken, en gehoord over Marvin, ver weg in Hulanda.'
    },

    {
      sender:'ana',
      text:'Laten we kijken wat je hebt onthouden van familie, bezoek, en het gevoel van dushi tera.'
    }

  ],

  questions:[

    { id:'famia_112', word:'Famia' },
	{ id:'aki_28', word:'aki' },
    { id:'biba_316', word:'Biba' },
    { id:'wela_121', word:'Wela' },
	{ id:'y_61', word:'y' },
    { id:'welo_121', word:'Welo' },
    { id:'tata_116', word:'Tata' },
    { id:'mama_115', word:'Mama' },
    { id:'ruman muhe_119', word:'Ruman muhe' },
    { id:'ruman homber_120', word:'Ruman homber' },
    { id:'omo_129', word:'Omo' },
    { id:'tanta_129.1', word:'Tanta' },

    { id:'duna_201', word:'Duna' },
    { id:'bebe_171', word:'Bebe' },
    { id:'nieto_122', word:'Nieto' },
    { id:'yama_97', word:'Yama' },
    { id:'tur_401', word:'Tur' },
    { id:'ainda_409', word:'Ainda' },
    { id:'dushi_163', word:'Dushi' },
    { id:'tera_520.1', word:'Tera' },
    { id:'cunucu_473', word:'Cunucu' },

    { id:'yiu homber_118.2', word:'Yiu homber' },
    { id:'yiu muhe_118.1', word:'Yiu muhe' },
    { id:'mucha_117', word:'Mucha' },
    { id:'trabou_238', word:'Trabou' },
    { id:'traha_237', word:'Traha' },
    { id:'chikito_85', word:'Chikito' },
	{ id:'pero_395', word:'Pero' },
    { id:'bunita_367', word:'Bunita' }

  ],

summary:`

  Je hebt niet alleen woorden geleerd, maar ook een kijkje gekregen in het leven van Wela Ana en haar familie.

  🟨 Mi famia ta hopi importante pa mi.

  Je kent nu de belangrijkste familieleden in het Papiamento: wela, welo, tata, mama, ruman muhe, ruman homber, omo en tanta.

  Je hebt gehoord hoe families vroeger vaak dicht bij elkaar woonden, hoe bezoekers altijd welkom zijn, en waarom Aruba voor veel mensen een echte dushi tera blijft.

  🌴 Awor bo por bisa - nu kun jij zeggen:
  Mi famia ta hopi importante pa mi.

  Dat is een zin die veel mensen op Aruba meteen zullen begrijpen.

  Klaar voor de volgende halte van je reis?

`

},


'eagle-beach-1': {

  title:'Bon Bini na Bo Hotel',

  scene:[

    {
      sender:'narration',
      text:'🚕 De taxi stopt voor een laag, wit hotel. Palmbomen wuiven boven de ingang.'
    },

    {
      sender:'ana',
      text:'Welkom bij Eagle Beach. Dit stuk kust noemen wij hier de Low-Rise Area.'
    },

    {
      sender:'ana',
      text:'In Aruba hebben we de low-rise en high-rise area. Hier heb je lage hotels en daar veel hogere. Laten we daar een andere keer langs gaan.'
    },

    {
      sender:'narration',
      text:'🏨 Bij de balie staat een vrouw met een brede glimlach.'
    },

    {
      sender:'dialogue',
      speaker:'Sofia',
      avatar:'receptionist',
      text:'Bon tardi! Con ta bay?',
      translation:'Goedemiddag! Hoe gaat het?'
    },

    {
      sender:'ana',
      text:'Bon tardi en con ta bay ken je al — dat zei de taxichauffeur ook.'
    },

    {
      sender:'dialogue',
      speaker:'Sofia',
      avatar:'receptionist',
      text:'Bo tin un reservacion?',
      translation:'Heb je een reservering?'
    },

    {
      sender:'ana',
      text:'Tin herken je ook alweer — dat leerde je bij de taxi, met No tin problema.'
    },

    {
      sender:'dialogue',
      speaker:'Sofia',
      avatar:'receptionist',
      text:'Con bo yama?',
      translation:'Hoe heet je?'
    },

    {
      sender:'ana',
      text:'Dat vroeg Carlos je ook al bij de bagageband.'
    },

    {
      sender:'dialogue',
      speaker:'Sofia',
      avatar:'receptionist',
      text:'Bon, mi ta mira... Si, mi tin bo aki.',
      translation:'Goed, ik kijk even... Ja, ik heb je hier.'
    },

    {
      sender:'ana',
      text:'🟨 Mira betekent zien of kijken.'
    },
	
	{
      sender:'ana',
      text:'🟨 Wak betekent ook zien of kijken.'
    },

    {
      sender:'dialogue',
      speaker:'Sofia',
      avatar:'receptionist',
      text:'Bo cuarto ta cla.',
      translation:'Jouw kamer is klaar.'
    },

    {
      sender:'ana',
      text:'🟨 Cla betekent klaar of helder.'
    },

    {
      sender:'ana',
      text:'🟨 Ta betekent is, ben of zijn. Het kleinste woordje van het Papiamento, maar je hoort het de hele dag door.'
    },

    {
      sender:'dialogue',
      speaker:'Sofia',
      avatar:'receptionist',
      text:'Unda bo kier bay prome? E playa ta net dilanti.',
      translation:'Waar wil je eerst naartoe? Het strand is vlak voor de deur.'
    },

    {
      sender:'ana',
      text:'🟨 Unda betekent waar.'
    },

    {
      sender:'ana',
      text:'Kier en bay ken je alweer — die zag je al bij het vliegveld.'
    },

    {
      sender:'dialogue',
      speaker:'Sofia',
      avatar:'receptionist',
      text:'Nos hotel ta na Eagle Beach.',
      translation:'Ons hotel is aan Eagle Beach.'
    },

    {
      sender:'ana',
      text:'🟨 Na betekent bij, in of op — een woordje dat je overal tegenkomt als je een plek noemt.'
    },

    {
      sender:'ana',
      text:'Ik heb hier zo vaak gestaan, jaren geleden, om vrienden op te halen die op vakantie kwamen.'
    },

    {
      sender:'ana',
      text:'Weet je zoveel mooie herinneringen. Mijn nieta heeft hier haar man ontmoet, gewoon hier recht voor op het strand. Ze wonen nu in Nederland met mijn achterkleinkinderen.'
    },
	
	 {
      sender:'ana',
      text:'🟨Mi nieta ta biba na Hulanda cu su casa y yiunan'
    },
	
	 {
      sender:'ana',
      text:'Kijk heel veel woorden ken jij al van die zin.'
    },
	
	 {
      sender:'ana',
      text:'🟨 Nieta betekent kleindochter.'
    },
	
	 {
      sender:'ana',
      text:'🟨 su betekent van hem of van haar.'
    },
	
	 {
      sender:'ana',
      text:'🟨 casa betekent echtgenoot.'
    },
	
	{
      sender:'ana',
      text:'Dus bij elkaar: mijn kleindochter woont in Nederland met haar echtgenoot en kinderen. '
    },

    {
      sender:'dialogue',
      speaker:'Sofia',
      avatar:'receptionist',
      text:'Mi gusta e playa aki masha hopi.',
      translation:'Ik hou heel erg van dit strand.'
    },

    {
      sender:'ana',
      text:'🟨 Gusta betekent leuk vinden of houden van.'
    },

    {
      sender:'ana',
      text:'🟨 Hopi betekent veel. Je hebt het al vaker gehoord, bijvoorbeeld bij Ramon zijn hopi trabou.'
    },

    {
      sender:'ana',
      text:'Mooi! Je bent ingecheckt. Kom, ik laat je het strand zien — het is grandi, heel groot.'
    },

    {
      sender:'ana',
      text:'🟨 Grandi betekent groot.'
    }

  ],

  miniQuiz:[
    { id:'ta_7', word:'Ta' },
    { id:'unda_19', word:'Unda' },
    { id:'na_36', word:'Na' },
    { id:'grandi_84', word:'Grandi' },
    { id:'hopi_86', word:'Hopi' },
    { id:'gusta_162', word:'Gusta' },
    { id:'cla_178', word:'Cla' },
	{ id:'nieta_122', word:'nieta' },
	{ id:'su_63', word:'su' },
	{ id:'casa_313', word:'casa' },
    { id:'mira_187', word:'Mira' }
  ],

  wordIds:[
    7, 19, 36, 63, 84, 86, 122, 162, 178, 187, 313
  ]

},


'eagle-beach-2': {

  title:'Playa Eagle Beach',

  scene:[

    {
      sender:'narration',
      text:'🌊 Jullie lopen tussen twee gebouwen door, en dan zie je het: wit zand, en water in een blauw dat je nog niet eerder zag.'
    },

    {
      sender:'ana',
      text:'🟨 Laman betekent zee.'
    },
	
	 {
      sender:'ana',
      text:'🟨 Playa betekent zee.'
    },

    {
      sender:'ana',
      text:'🟨 Blauw betekent blauw. E laman ta blauw — de zee is blauw.'
    },
	
    {
      sender:'narration',
      text:'🌳 Vlak bij het water staat een kromme boom, alsof hij altijd naar één kant waait.'
    },

    {
      sender:'ana',
      text:'Dat is een divi-divi. Zie je hoe hij helemaal krom staat, richting het zuidwesten?'
    },

    {
      sender:'ana',
      text:'🟨 Palo betekent boom.'
    },

    {
      sender:'ana',
      text:'Dat komt door de wind — dezelfde wind waar ik je bij Tanki Flip over vertelde. Die waait hier al duizenden jaren uit dezelfde hoek.'
    },

    {
      sender:'ana',
      text:'Wij noemen hem soms het kompas van Aruba. Verdwaal je, kijk dan gewoon welke kant de divi-divi opwijst.'
    },

    {
      sender:'narration',
      text:'👩 Een vrouw met een strandtas loopt voorbij en groet vriendelijk.'
    },

    {
      sender:'dialogue',
      speaker:'Iris',
      avatar:'local',
      text:'Ta hopi calor awe, no?',
      translation:'Het is vandaag erg warm, hè?'
    },

    {
      sender:'ana',
      text:'🟨 Calor betekent warm.'
    },

    {
      sender:'dialogue',
      speaker:'Iris',
      avatar:'local',
      text:'Bo por landa aki, e awa ta trankil.',
      translation:'Je kunt hier zwemmen, het water is rustig.'
    },

    {
      sender:'ana',
      text:'🟨 Por betekent kunnen of mogen.'
    },

    {
      sender:'ana',
      text:'🟨 Landa betekent zwemmen.'
    },

    {
      sender:'ana',
      text:'Bo por landa aki betekent letterlijk: jij kunt hier zwemmen.'
    },

    {
      sender:'dialogue',
      speaker:'Iris',
      avatar:'local',
      text:'Ayo! Dushi dia pa bo.',
      translation:'Doei! Een fijne dag voor jou.'
    },

    {
      sender:'ana',
      text:'Ayo ken je al, en dushi hoorde je bij Rosa — hier betekent het gewoon fijn of lekker, niet per se lief.'
    },

    {
      sender:'ana',
      text:'Mooi! Je kunt nu over de zee praten, over warm weer, en zeggen dat je kunt zwemmen.'
    }

  ],

  miniQuiz:[
    { id:'laman_485', word:'Laman' }, 
    { id:'blauw_321', word:'Blauw' },
	{ id:'playa_469.1', word:'Playa' },
    { id:'palo_475', word:'Palo' },
    { id:'calor_520.2', word:'Calor' },
    { id:'por_16', word:'Por' },
    { id:'landa_486', word:'Landa' }
  ],

  wordIds:[
    16, 321, 422, 469.1, 475, 485, 486
  ]

},


'eagle-beach-3': {

  title:'Anochi na Eagle Beach',

  scene:[

    {
      sender:'narration',
      text:'🌅 De zon zakt langzaam naar de horizon. De lucht kleurt fel.'
    },

    {
      sender:'dialogue',
      speaker:'Ana',
      avatar:'ana',
      text:'Mira, e solo ta baha.',
      translation:'Kijk, de zon gaat onder.'
    },

    {
      sender:'ana',
      text:'🟨 Solo betekent zon.'
    },

    {
      sender:'ana',
      text:'🟨 Baha betekent naar beneden gaan.'
    },

    {
      sender:'ana',
      text:'Dus e solo ta baha betekent letterlijk: de zon gaat naar beneden.'
    },

    {
      sender:'ana',
      text:'🟨 Oraño betekent oranje. Kijk, e shelu ta oraño — de lucht is oranje.'
    },

    {
      sender:'ana',
      text:'Op Aruba zeggen we vaak dat awe niet zomaar een dag is. Elke zonsondergang is weer anders.'
    },

    {
      sender:'ana',
      text:'🟨 Awe betekent vandaag.'
    },

    {
      sender:'narration',
      text:'🪑 Jullie gaan zitten op het zand, met uitzicht op het water.'
    },

    {
      sender:'ana',
      text:'Ik kom hier soms nog steeds zitten, alleen, aan het einde van de dag. Sommige dingen veranderen nooit.'
    },

    {
      sender:'ana',
      text:'🟨 Keda betekent blijven.'
    },

    {
      sender:'ana',
      text:'🟨 Nos por keda aki betekent: wij kunnen hier blijven.'
    },

    {
      sender:'narration',
      text:'🌙 Langzaam wordt het donker. De eerste sterren verschijnen boven de zee.'
    },

    {
      sender:'dialogue',
      speaker:'Local',
      avatar:'local',
      text:'Mira e luna y e streanan.',
      translation:'Kijk naar de maan en de sterren.'
    },

    {
      sender:'ana',
      text:'🟨 Luna betekent maan.'
    },

    {
      sender:'ana',
      text:'🟨 Strea betekent ster.'
    },

    {
      sender:'ana',
      text:'Die zin betekende: kijk naar de maan en de sterren.'
    },

    {
      sender:'dialogue',
      speaker:'Local',
      avatar:'local',
      text:'Bonochi!',
      translation:'Goedenavond!'
    },

    {
      sender:'ana',
      text:'🟨 Bonochi betekent goedenavond.'
    },

    {
      sender:'ana',
      text:'Nu ken je alle drie: bon dia, bon tardi en bonochi.'
    },

    {
      sender:'ana',
      text:'🟨 Anochi betekent \'s avonds of \'s nachts.'
    },

    {
      sender:'ana',
      text:'Het is tijd om terug te gaan naar het hotel. Morgen wacht er weer een nieuw stukje Aruba op je.'
    },

    {
      sender:'ana',
      text:'Nos ta bay Oranjestad mayan — wij gaan morgen naar Oranjestad.'
    },

    {
      sender:'ana',
      text:'Mayan en bay ken je alweer, van het vliegveld en de taxi.'
    },

    {
      sender:'ana',
      text:'Voor nu wens ik je drumi dushi.'
    },

    {
      sender:'ana',
      text:'🟨 Drumi dushi betekent slaap lekker.'
    },

    {
      sender:'ana',
      text:'Dat hoor je hier bijna elke avond, van ouders tegen kinderen, en tussen geliefden. We gebruiken het woord dushi vaak liefkozend, net als bij Dushi tera weet je nog?'
    },

    {
      sender:'ana',
      text:'Mooi! Je eerste dag op Aruba zit erop. Van de zon boven Eagle Beach tot de sterren boven zee.'
    }

  ],

  miniQuiz:[
    { id:'solo_520.3', word:'Solo' },
    { id:'baha_180', word:'Baha' },
    { id:'oraño_325', word:'Oraño' },
    { id:'awe_67', word:'Awe' },
    { id:'keda_76', word:'Keda' },
    { id:'luna_520.4', word:'Luna' },
    { id:'strea_430', word:'Strea' },
    { id:'bonochi_104', word:'Bonochi' },
    { id:'anochi_352', word:'Anochi' },
    { id:'drumi dushi_143.1', word:'Drumi dushi' }
  ],

  wordIds:[
    67,
    76,
    104,
    143.1,
    180,
    325,
    352,
    430,
    521,
    522
  ]

},



'eagle-beach-challenge': {

  title:'Eagle Beach Challenge',

  scene:[

    {
      sender:'narration',
      text:'🏆 Je hebt je eerste hele dag op Aruba beleefd — van de balie tot het strand, tot de sterren boven zee.'
    },

    {
      sender:'ana',
      text:'Je hebt ingecheckt, gezwommen in gedachten, en geleerd hoe wij hier de dag afsluiten.'
    },

    {
      sender:'ana',
      text:'Laten we kijken wat je hebt onthouden voordat de zon morgen weer opkomt.'
    }

  ],

  questions:[

    { id:'ta_7', word:'Ta' },
    { id:'unda_19', word:'Unda' },
    { id:'na_36', word:'Na' },
    { id:'grandi_84', word:'Grandi' },
    { id:'hopi_86', word:'Hopi' },
    { id:'gusta_162', word:'Gusta' },
    { id:'cla_178', word:'Cla' },
	{ id:'nieta_122', word:'nieta' },
	{ id:'su_63', word:'su' },
	{ id:'casa_313', word:'casa' },
    { id:'mira_187', word:'Mira' },

    { id:'laman_485', word:'Laman' },
	{ id:'playa_469.1', word:'Playa' },
    { id:'blauw_321', word:'Blauw' },
    { id:'palo_475', word:'Palo' },
    { id:'calor_520.2', word:'Calor' },
    { id:'por_16', word:'Por' },
    { id:'landa_486', word:'Landa' },

	{ id:'solo_520.3', word:'Solo' },
    { id:'baha_180', word:'Baha' },
    { id:'oraño_325', word:'Oraño' },
    { id:'awe_67', word:'Awe' },
    { id:'keda_76', word:'Keda' },
    { id:'luna_520.4', word:'Luna' },
    { id:'strea_430', word:'Strea' },
    { id:'bonochi_104', word:'Bonochi' },
    { id:'anochi_352', word:'Anochi' },
    { id:'drumi dushi_143.1', word:'Drumi dushi' }

  ],

  summary:`

    Je hebt je eerste hele dag op Aruba afgerond.

    🟨 Awe mi ta mira laman blauw, y mi ta bay drumi dushi.

    Van inchecken (bo cuarto ta cla) tot zwemmen (bo por landa), tot de oranje lucht boven Eagle Beach.

    Je weet nu ook waarom de divi-divi altijd naar het zuidwesten wijst, en waarom bijna elk hotel hier laag blijft.

    🌴 Mayan nos ta bay Oranjestad — morgen gaan we naar Oranjestad.

    Klaar voor de volgende halte van je reis?

  `

},

'oranjestad-1': {

  title:'Mainstreet Oranjestad',

  scene:[

    {
      sender:'narration',
      text:'☀️ De volgende ochtend rijden jullie het centrum van Oranjestad in. De straten zijn al vol leven.'
    },

    {
      sender:'ana',
      text:'Nos ta bay Oranjestad — dat had ik je gisteravond al beloofd.'
    },
	
	{
      sender:'ana',
      text:'We zijn nu in playa. Niet het strand, maar wij noemen Oranjestad soms ook playa.'
    },

    {
      sender:'narration',
      text:'🏛️ Overal om je heen staan gebouwen in felle kleuren: roze, groen, geel, blauw — als een tropische grachtengordel.'
    },

    {
      sender:'ana',
      text:'🟨 Cora betekent rood. Kijk, e edificio ey ta cora — dat gebouw daar is rood.'
    },

    {
      sender:'ana',
      text:'🟨 Geel betekent geel.'
    },

    {
      sender:'ana',
      text:'Deze gevels zijn gebouwd in Nederlandse koloniale stijl, met balkonnetjes en luiken. Maar de kleuren, die zijn helemaal van ons.'
    },

    {
      sender:'narration',
      text:'🏰 Wela Ana wijst naar een oud, laag fort met dikke muren.'
    },

    {
      sender:'ana',
      text:'🟨 Mustra betekent wijzen of tonen. Mira, mi ta mustra bo Fort Zoutman.'
    },

    {
      sender:'ana',
      text:'Dat is het oudste gebouw van Aruba, gebouwd in 1798. Vroeger beschermde het ons tegen piraten.'
    },

    {
      sender:'ana',
      text:'Oranjestad was ooit maar een klein vissersdorp, weet je. Pas later, door goudkoorts en later door de olie-industrie, werd het een echte stad.'
    },

    {
      sender:'narration',
      text:'🛍️ Jullie lopen verder, het 🟨 centro in, langs winkels vol sieraden en parfum.'
    },

    {
      sender:'ana',
      text:'🟨 Centro betekent centrum.'
    },

    {
      sender:'ana',
      text:'Toen ik een jong meisje was, had ik hier mijn eerste baantje. Een klein stofjeswinkeltje, van een vrouw die we Doña Elena noemden.'
    },

    {
      sender:'ana',
      text:'Zij leerde mij alles over klanten, over geduld, en over geld tellen zonder ooit een fout te maken.'
    },

    {
      sender:'narration',
      text:'🚢 In de verte, bij de haven, ligt een enorm cruiseschip aangemeerd. Honderden mensen stromen de straat in.'
    },

    {
      sender:'ana',
      text:'🟨 Ey betekent daar. Mira, ey na haber ta un barco grandi — kijk, daar bij de haven ligt een groot schip.'
    },

    {
      sender:'ana',
      text:'Toen ik klein was kwamen hier bijna geen schepen. Nu komen er bijna elke dag, en de straat verandert mee.'
    },

    {
      sender:'ana',
      text:'Doña Elena\'s winkeltje bestaat niet meer. Maar als ik hier loop, zie ik het nog precies voor me.'
    },

    {
      sender:'ana',
      text:'Mooi! Je kent nu een stukje van de geschiedenis van Oranjestad — en een stukje van mijn eigen geschiedenis.'
    }

  ],

  miniQuiz:[
    { id:'cora_324', word:'Cora' },
    { id:'geel_323', word:'Geel' },
    { id:'mustra_300', word:'Mustra' },
    { id:'centro_468', word:'Centro' },
    { id:'ey_29', word:'Ey' }
  ],

  wordIds:[
    29, 300, 323, 324, 468
  ]

},

'oranjestad-2': {

  title:'Kumpra na Mainstreet',

  scene:[

    {
      sender:'narration',
      text:'👜 Voor een klein winkeltje met kleurrijke sjaals in de etalage blijft Wela Ana staan.'
    },

    {
      sender:'ana',
      text:'Dit doet me nog steeds denken aan Doña Elena\'s winkeltje. Laten we naar binnen gaan.'
    },

    {
      sender:'narration',
      text:'🧣 Binnen groet een jonge verkoper vriendelijk vanachter de toonbank.'
    },

    {
      sender:'dialogue',
      speaker:'Verkoper',
      avatar:'shopkeeper',
      text:'Bon dia! Bo kier cumpra algo?',
      translation:'Goedendag! Wil je iets kopen?'
    },

    {
      sender:'ana',
      text:'🟨 Cumpra betekent kopen.'
    },

    {
      sender:'dialogue',
      speaker:'Verkoper',
      avatar:'shopkeeper',
      text:'Mi ta bende artesania local.',
      translation:'Ik verkoop lokale ambachtelijke producten.'
    },

    {
      sender:'ana',
      text:'🟨 Bende betekent verkopen.'
    },

    {
      sender:'dialogue',
      speaker:'Verkoper',
      avatar:'shopkeeper',
      text:'Por fabor, mira esaki.',
      translation:'Alsjeblieft, kijk eens naar deze.'
    },

    {
      sender:'ana',
      text:'🟨 Por fabor betekent alsjeblieft.'
    },

	{
      sender:'ana',
      text:'🟨 Esaki betekent dit of deze. Marvin op Tanki flip gebruikte dat woord al eerder.'
    },

    {
      sender:'dialogue',
      speaker:'Verkoper',
      avatar:'shopkeeper',
      text:'E sjaal aki ta masha bunita, no?',
      translation:'Deze sjaal is heel mooi, toch?'
    },

    {
      sender:'ana',
      text:'Bunita ken je van Rosa, en masha van Ramon. Ik denk dat je dit al zelf '
    },

    {
      sender:'dialogue',
      speaker:'Verkoper',
      avatar:'shopkeeper',
      text:'E ta costa binti florin.',
      translation:'Hij kost twintig florin.'
    },

    {
      sender:'ana',
      text:'Op Aruba betalen we met de Arubaanse florin. Vroeger hoorde Aruba bij de Nederlandse Antillen, daarom lijkt onze munt nog steeds op de oude gulden.'
    },
	
	 {
      sender:'ana',
      text:'🟨 Placa betekent geld.'
    },

    {
      sender:'dialogue',
      speaker:'Verkoper',
      avatar:'shopkeeper',
      text:'Un tiki caro, pero e ta original.',
      translation:'Een beetje duur, maar hij is origineel.'
    },

	{
      sender:'ana',
      text:'🟨 Tiki betekent beetje.'
    },
	
	{
      sender:'ana',
      text:'Je hebt eerder al poco gehoord en ook dat betekent een beetje. Je kunt dus tiki of poco gebruiken.'
    },

    {
      sender:'ana',
      text:'🟨 Caro betekent duur.'
    },


    {
      sender:'dialogue',
      speaker:'Verkoper',
      avatar:'shopkeeper',
      text:'Bo por duna mi diesocho, ta basta pa mi.',
      translation:'Je mag me achttien geven, dat is genoeg voor mij.'
    },

    {
      sender:'ana',
      text:'🟨 Basta betekent genoeg.'
    },

    {
      sender:'ana',
      text:'Zo onderhandelen wij hier soms. Niet hard, maar vriendelijk.'
    },

    {
      sender:'dialogue',
      speaker:'Verkoper',
      avatar:'shopkeeper',
      text:'Danki, y bon bishita na Aruba!',
      translation:'Bedankt en een fijn verblijf op Aruba!'
    },

    {
      sender:'ana',
      text:'Mooi! Je hebt je eerste aankoop gedaan in het Papiamento.'
    }

  ],

  miniQuiz:[
    { id:'cumpra_454', word:'Cumpra' },
    { id:'bende_453', word:'Bende' },
    { id:'esaki_31', word:'Esaki' },
    { id:'por fabor_387', word:'Por fabor' },
    { id:'placa_457', word:'Placa' },
    { id:'caro_455', word:'Caro' },
	{ id:'poco_87', word:'Tiki' },
    { id:'basta_499', word:'Basta' }
  ],

  wordIds:[
    16, 87, 387, 453, 454, 455, 457, 499
  ]

},

'oranjestad-3': {

  title:'Mercado di Oranjestad',

  scene:[

    {
      sender:'narration',
      text:'🎁 Naast de cruisehaven staan kleine marktkraampjes vol souvenirs, nummerborden en handgemaakt houtwerk.'
    },

    {
      sender:'ana',
      text:'Hier komen veel toeristen voor een persoonlijk aandenken aan Aruba.'
    },

    {
      sender:'dialogue',
      speaker:'Verkoper',
      avatar:'local',
      text:'Bon dia, shon.',
      translation:'Goedendag meneer/mevrouw.'
    },

    {
      sender:'ana',
      text:'🟨 Shon betekent meneer of mevrouw. Het is een beleefde manier om iemand aan te spreken, zoals u in Nederland. Noem mij maar gewoon Ana hoor.'
    },

    {
      sender:'dialogue',
      speaker:'Verkoper',
      avatar:'local',
      text:'Con bo yama?',
      translation:'Hoe heet je?'
    },

    {
      sender:'ana',
      text:'Die vraag ken je nog van de luchthaven.'
    },

    {
      sender:'dialogue',
      speaker:'Verkoper',
      avatar:'local',
      text:'Mi por scirbi bo nomber riba e plachi di number.',
      translation:'Ik kan jouw naam op de kentekenplaat schrijven.'
    },

    {
      sender:'ana',
      text:'🟨 Scirbi betekent schrijven.'
    },

    {
      sender:'ana',
      text:'🟨 Nomber betekent naam.'
    },
	
	 {
      sender:'ana',
      text:'🟨 Plachi di number betekent kentekenplaat.'
    },

	{
      sender:'ana',
      text:'In Aruba koop je elk jaar een nieuwe kentekenplaat. Dat is gelijk je voertuigenbelasting. Best makkelijk toch?'
    },

    {
      sender:'dialogue',
      speaker:'Verkoper',
      avatar:'local',
      text:'Por fabor, bisa mi bo nomber.',
      translation:'Zeg me alsjeblieft je naam.'
    },

    {
      sender:'ana',
      text:'Bisa betekent zeggen. Dat ken je al.'
    },

    {
      sender:'dialogue',
      speaker:'Verkoper',
      avatar:'local',
      text:'Mi por haci un bestel pa bo.',
      translation:'Ik kan een bestelling voor je maken.'
    },

    {
      sender:'ana',
      text:'🟨 Haci betekent doen of maken.'
    },

    {
      sender:'ana',
      text:'🟨 Bestel betekent bestelling.'
    },

    {
      sender:'dialogue',
      speaker:'Verkoper',
      avatar:'local',
      text:'Mayan bo por bin busca dje.',
      translation:'Morgen kun je hem ophalen.'
    },

    {
      sender:'ana',
      text:'🟨 Busca betekent zoeken of ophalen.'
    },

    {
      sender:'ana',
      text:'Hier gebruikt hij busca in de betekenis ophalen.'
    },

    {
      sender:'dialogue',
      speaker:'Verkoper',
      avatar:'local',
      text:'Danki, shon!'
    },

    {
      sender:'ana',
      text:'Mooi! Nu kun je niet alleen iets kopen, maar ook iets laten maken en later ophalen.'
    }

  ],

  miniQuiz:[
    { id:'shon_312', word:'Shon' },
    { id:'nomber_98', word:'Nomber' },
	{ id:'plachi di number_520.5', word:'Plachi di number' },
    { id:'scirbi_443', word:'Scirbi' },
    { id:'haci_247', word:'Haci' },
    { id:'bestel_456', word:'Bestel' },
    { id:'busca_214', word:'Busca' }
  ],

  wordIds:[
    98,
    214,
    247,
    312,
    443,
    456,
	520.5
  ]

},

'oranjestad-challenge': {

  title:'Oranjestad Challenge',

  scene:[

    {
      sender:'narration',
      text:'🏆 Je hebt door de kleurrijke straten van Oranjestad gewandeld, langs Fort Zoutman, gewinkeld op Main Street en zelfs een persoonlijk souvenir besteld.'
    },

    {
      sender:'ana',
      text:'Je hebt ook een stukje van mijn eigen verhaal gehoord — over Doña Elena, mijn eerste baantje en hoe deze stad veranderde.'
    },

    {
      sender:'ana',
      text:'En je hebt geleerd hoe je jezelf kunt redden in een winkel of op een markt.'
    },

    {
      sender:'ana',
      text:'Laten we kijken wat je hebt onthouden.'
    }

  ],

  questions:[

    // Les 1

    { id:'cora_324', word:'Cora' },
    { id:'geel_323', word:'Geel' },
    { id:'mustra_300', word:'Mustra' },
    { id:'centro_468', word:'Centro' },
    { id:'ey_29', word:'Ey' },

    // Les 2

    { id:'cumpra_454', word:'Cumpra' },
    { id:'bende_453', word:'Bende' },
    { id:'esaki_31', word:'Esaki' },
    { id:'por fabor_387', word:'Por fabor' },
    { id:'placa_457', word:'Placa' },
	{ id:'poco_87', word:'Tiki' },
    { id:'caro_455', word:'Caro' },
    { id:'basta_499', word:'Basta' },

    // Les 3

    { id:'shon_312', word:'Shon' },
    { id:'nomber_98', word:'Nomber' },
    { id:'scirbi_443', word:'Scirbi' },
    { id:'haci_247', word:'Haci' },
    { id:'bestel_456', word:'Bestel' },
    { id:'busca_214', word:'Busca' }

  ],

  summary:`

    Je hebt Oranjestad ontdekt — niet alleen de kleurrijke gevels en de winkels, maar ook een klein stukje van mijn eigen verleden.

    🟨 Mi tabatin mi promé trabou aki, serka Doña Elena.

    Van een klein stofjeswinkeltje tot de drukke Main Street van vandaag, met cruiseschepen, marktkraampjes en toeristen uit de hele wereld.

    Je hebt geleerd hoe je kunt praten over kleuren, prijzen, kopen en verkopen.

    🟨 Mi por cumpra algo, por fabor.
    
    Je kunt nu zelfs een eenvoudige bestelling plaatsen, je naam laten opschrijven en later je souvenir ophalen.

    🌴 Nos ta sigui nos biahe — de reis gaat verder.

    Klaar voor de volgende halte van je reis?

  `

},


'arikok-1': {

  title:'Ayera, Awe y Mayan',

  scene:[

    {
      sender:'narration',
      text:'🚙 De volgende ochtend rijden jullie Oranjestad uit, de kustweg op richting het binnenland.'
    },

    {
      sender:'ana',
      text:'Ayera nos tabata Oranjestad. Awe nos ta bay den naturalesa, cana den mondi y cerca Conchi.'
    },

    {
      sender:'ana',
      text:'🟨 Ayera betekent gisteren.'
    },

    {
      sender:'ana',
      text:'Awe en mayan ken je al. Samen vormen ze een mooi drietal: gisteren, vandaag, morgen.'
    },

    {
      sender:'narration',
      text:'🌵 De weg wordt smaller. Cactussen en droge cunucu strekken zich uit aan beide kanten.'
    },

    {
      sender:'ana',
      text:'Voordat we verder gaan, wil ik je iets leren dat je hier de hele reis nog gaat gebruiken: de dagen van de week.'
    },

    {
      sender:'ana',
      text:'🟨 Dia betekent dag.'
    },

    {
      sender:'ana',
      text:'🟨 Siman betekent week.'
    },

    {
      sender:'ana',
      text:'🟨 Dianan di siman betekent dagen van de week.'
    },

    {
      sender:'narration',
      text:'🚧 Bij een klein hek naar het park staat een man met een verweerde hoed te wachten.'
    },

    {
      sender:'dialogue',
      speaker:'Mito',
      avatar:'local',
      text:'Bon dia! Ki dia di siman ta awe?',
      translation:'Goedendag! Welke dag van de week is het vandaag?'
    },

    {
      sender:'ana',
      text:'Laten we samen de hele week doorlopen, dan kun je hem straks zelf beantwoorden.'
    },

    {
      sender:'ana',
      text:'🟨 Dialuna betekent maandag.'
    },

    {
      sender:'ana',
      text:'🟨 Diamars betekent dinsdag.'
    },

    {
      sender:'ana',
      text:'🟨 Diaranzon betekent woensdag.'
    },

    {
      sender:'ana',
      text:'🟨 Diahuebs betekent donderdag.'
    },

    {
      sender:'ana',
      text:'🟨 Diabierna betekent vrijdag. Voor veel mensen hier begint het weekend al op vrijdagmiddag.'
    },

    {
      sender:'ana',
      text:'🟨 Diasabra betekent zaterdag.'
    },

    {
      sender:'ana',
      text:'🟨 Diadumingo betekent zondag.'
    },

    {
      sender:'dialogue',
      speaker:'Mito',
      avatar:'local',
      text:'Awe ta diaranzon. Un bon dia pa cana den mondi!',
      translation:'Vandaag is het woensdag. Een goede dag om door de natuur te wandelen!'
    },

    {
      sender:'ana',
      text:'Mooi! Je kent nu de dagen van de week, en je weet hoe gisteren, vandaag en morgen zich tot elkaar verhouden.'
    }

  ],

  miniQuiz:[
    { id:'ayera_69', word:'Ayera' },
    { id:'dia_339', word:'Dia' },
    { id:'siman_338', word:'Siman' },
    { id:'dianan di siman_340', word:'Dianan di siman' },
    { id:'dialuna_341', word:'Dialuna' },
    { id:'diamars_342', word:'Diamars' },
    { id:'diaranzon_343', word:'Diaranzon' },
    { id:'diahuebs_344', word:'Diahuebs' },
    { id:'diabierna_345', word:'Diabierna' },
    { id:'diasabra_346', word:'Diasabra' },
    { id:'diadumingo_347', word:'Diadumingo' }
  ],

  wordIds:[
    69, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347
  ]

},


'arikok-2': {

  title:'Cana Den Mondi',

  scene:[

    {
      sender:'narration',
      text:'🥾 Jullie parkeren bij de ingang van Parke Nacional Arikok en beginnen te wandelen.'
    },

    {
      sender:'ana',
      text:'🟨 Cana betekent lopen.'
    },

    {
      sender:'ana',
      text:'We cana nu door de naturalesa — Aruba\'s wildernis.'
    },

    {
      sender:'ana',
      text:'🟨 Naturalesa betekent natuur.'
    },

    {
      sender:'narration',
      text:'🐕 Een verdwaalde hond komt kwispelend aangelopen en snuffelt aan je schoenen.'
    },

    {
      sender:'ana',
      text:'Op Aruba loopt hopi cacho vrij rond. Bijna iedereen kent wel een zwerfhond in de buurt.'
    },

    {
      sender:'ana',
      text:'🟨 Cacho betekent hond.'
    },

    {
      sender:'narration',
      text:'🐴 Verderop staat een ezel rustig te grazen tussen de cactussen.'
    },

    {
      sender:'dialogue',
      speaker:'Mito',
      avatar:'local',
      text:'Mira, un buriku! Nan ta cana liber aki den mondi.',
      translation:'Kijk, een ezel! Ze lopen hier vrij rond in de natuur.'
    },

    {
      sender:'ana',
      text:'🟨 Buriku betekent ezel.'
    },

    {
      sender:'narration',
      text:'🐐 Iets verderop springen een paar geiten behendig tussen de rotsen.'
    },

    {
      sender:'dialogue',
      speaker:'Mito',
      avatar:'local',
      text:'E cabritunan ta gusta e mondi seco.',
      translation:'De geiten houden van de droge natuur.'
    },

    {
      sender:'ana',
      text:'🟨 Cabritu betekent geit.'
    },

    {
      sender:'narration',
      text:'🐍 Mito steekt zijn hand op en wijst voorzichtig naar een steen naast het pad.'
    },

    {
      sender:'dialogue',
      speaker:'Mito',
      avatar:'local',
      text:'Cuidao — tin cascabel den e mondi aki.',
      translation:'Voorzichtig — er is een ratelslang in deze natuur.'
    },

    {
      sender:'ana',
      text:'🟨 Cascabel betekent ratelslang. Hij leeft nergens anders ter wereld dan hier op Aruba.'
    },

    {
      sender:'ana',
      text:'De mensen hier noemen hem ook wel Cuidadó di Cunucu — bewaker van het cunucu. Weet je nog wat cunucu betekent?'
    },

    {
      sender:'narration',
      text:'🦉 Bij een klein hol in de grond zit een bruin vogeltje roerloos op wacht.'
    },

    {
      sender:'ana',
      text:'🟨 Shoco betekent uil. Dit is onze nationale vogel.'
    },

    {
      sender:'narration',
      text:'🦎 Op een warme rots flitst iets helderblauws voorbij.'
    },

    {
      sender:'ana',
      text:'Kijk, een cododo!'
    },

    {
      sender:'ana',
      text:'🟨 Cododo betekent de blauwe mannetjeshagedis.'
    },

    {
      sender:'ana',
      text:'De vrouwtjes en de jongen zien er anders uit — die noemen we lagadishi.'
    },

    {
      sender:'ana',
      text:'🟨 Lagadishi betekent hagedis, voor het vrouwtje of het jong.'
    },

    {
      sender:'ana',
      text:'Net als bij yiu homber en yiu muhe: één basiswoord, en de vorm vertelt je meer.'
    },

    {
      sender:'ana',
      text:'Mooi! Je hebt nu de dieren van het mondi leren herkennen — van buriku tot cododo.'
    }

  ],

  miniQuiz:[
    { id:'cana_149', word:'Cana' },
    { id:'naturalesa_474', word:'Naturalesa' },
    { id:'cacho_388', word:'Cacho' },
    { id:'buriku_520.8', word:'Buriku' },
    { id:'cabritu_520.9', word:'Cabritu' },
    { id:'cascabel_520.18', word:'Cascabel' },
    { id:'shoco_520.11', word:'Shoco' },
    { id:'cododo_520.12', word:'Cododo' },
    { id:'lagadishi_520.13', word:'Lagadishi' }
  ],

  wordIds:[
    149, 388, 474, 520.8, 520.9, 520.18, 520.11, 520.12, 520.13
  ]

},


'arikok-3': {

  title:'Conchi, e Poza Natural',

  scene:[

    {
      sender:'narration',
      text:'🌋 In de verte, tussen de rotsen, doemt een vertrouwde vorm op boven de horizon.'
    },

    {
      sender:'ana',
      text:'Kijk daar — dat is de Hooiberg.'
    },

    {
      sender:'ana',
      text:'🟨 Cero betekent berg of heuvel.'
    },

    {
      sender:'ana',
      text:'We beklimmen hem vandaag niet, maar ik ben er als kind vaak boven geweest.'
    },

    {
      sender:'narration',
      text:'🪨 Het pad daalt via ruwe, natuurlijke rotsblokken naar beneden.'
    },

    {
      sender:'ana',
      text:'🟨 Trapi betekent trap of treden. Deze is door de natuur zelf gemaakt, niet door mensen.'
    },

    {
      sender:'narration',
      text:'☁️ Boven jullie pakken een paar wolken samen.'
    },

    {
      sender:'ana',
      text:'🟨 Nubia betekent wolk.'
    },

    {
      sender:'dialogue',
      speaker:'Mito',
      avatar:'local',
      text:'Awor lo yobe un tiki.',
      translation:'Nu gaat het een beetje regenen.'
    },

    {
      sender:'ana',
      text:'🟨 Yobe betekent regenen.'
    },

    {
      sender:'ana',
      text:'En als het eenmaal valt, noemen we het awacero.'
    },

    {
      sender:'ana',
      text:'🟨 Awacero betekent regen. Goed voor de naturalesa — na een bui wordt alles hier ineens fris.'
    },

    {
      sender:'ana',
      text:'🟨 Biento betekent wind. Herken je dat woord nog? Dezelfde wind boog de divi-divi krom bij Eagle Beach.'
    },

    {
      sender:'narration',
      text:'🌿 Na de korte bui kleurt het dorre mondi ineens frisser.'
    },

    {
      sender:'ana',
      text:'🟨 Berde betekent groen.'
    },

    {
      sender:'narration',
      text:'🌊 Tussen zwarte vulkanische rotsen ligt ineens een verrassend kalm, blauw zwembad van zeewater.'
    },

    {
      sender:'ana',
      text:'Welkom bij Conchi.'
    },

    {
      sender:'ana',
      text:'🟨 Conchi betekent kom of schaal — precies de vorm van dit natuurzwembad.'
    },

    {
      sender:'ana',
      text:'Sommigen noemen het ook Cura di Tortuga — de kooi van de schildpad.'
    },

    {
      sender:'ana',
      text:'🟨 Tortuga betekent schildpad.'
    },

    {
      sender:'ana',
      text:'Vroeger zwommen hier schildpadden rond, beschut tussen de rotsen. Ze komen nog steeds naar Aruba om eieren te leggen.'
    },

    {
      sender:'narration',
      text:'🪨 Jullie gaan even zitten op een warme rots, met uitzicht over het water.'
    },

    {
      sender:'ana',
      text:'🟨 Sinta betekent zitten.'
    },

    {
      sender:'dialogue',
      speaker:'Mito',
      avatar:'local',
      text:'Ta bunita, no? Kico bo ta bay haci mayan?',
      translation:'Mooi, toch? Wat ga je morgen doen?'
    },

    {
      sender:'ana',
      text:'Antwoord maar met wat je al kent: mayan mi ta bay... en vul zelf aan.'
    },

    {
      sender:'ana',
      text:'Mooi! Van de Hooiberg in de verte tot Conchi hier beneden — je hebt een heel stuk natuur leren beschrijven, in weer, dieren en tijd.'
    }

  ],

  miniQuiz:[
    { id:'cero_520.6', word:'Cero' },
    { id:'trapi_520.7', word:'Trapi' },
    { id:'nubia_427', word:'Nubia' },
    { id:'yobe_520.15', word:'Yobe' },
    { id:'awacero_520.14', word:'Awacero' },
    { id:'biento_426', word:'Biento' },
    { id:'berde_318', word:'Berde' },
    { id:'conchi_520.16', word:'Conchi' },
    { id:'tortuga_520.17', word:'Tortuga' },
    { id:'sinta_147', word:'Sinta' }
  ],

  wordIds:[
    147, 318, 426, 427, 520.6, 520.7, 520.14, 520.15, 520.16, 520.17
  ]

},


'arikok-challenge': {

  title:'Arikok Challenge',

  scene:[

    {
      sender:'narration',
      text:'🏆 Je hebt Parke Nacional Arikok doorkruist — van de dagen van de week tot de rustige poza bij Conchi.'
    },

    {
      sender:'ana',
      text:'Je hebt buriku\'s en cabritu\'s gezien, een cascabel en een shoco herkend, en zelfs het verschil geleerd tussen een cododo en een lagadishi.'
    },

    {
      sender:'ana',
      text:'Laten we kijken wat je hebt onthouden van dit stuk wilde Aruba.'
    }

  ],

  questions:[

    // Les 1

    { id:'ayera_69', word:'Ayera' },
    { id:'dia_339', word:'Dia' },
    { id:'siman_338', word:'Siman' },
    { id:'dianan di siman_340', word:'Dianan di siman' },
    { id:'dialuna_341', word:'Dialuna' },
    { id:'diamars_342', word:'Diamars' },
    { id:'diaranzon_343', word:'Diaranzon' },
    { id:'diahuebs_344', word:'Diahuebs' },
    { id:'diabierna_345', word:'Diabierna' },
    { id:'diasabra_346', word:'Diasabra' },
    { id:'diadumingo_347', word:'Diadumingo' },

    // Les 2

    { id:'cana_149', word:'Cana' },
    { id:'naturalesa_474', word:'Naturalesa' },
    { id:'cacho_388', word:'Cacho' },
    { id:'buriku_520.8', word:'Buriku' },
    { id:'cabritu_520.9', word:'Cabritu' },
    { id:'cascabel_520.18', word:'Cascabel' },
    { id:'shoco_520.11', word:'Shoco' },
    { id:'cododo_520.12', word:'Cododo' },
    { id:'lagadishi_520.13', word:'Lagadishi' },

    // Les 3

    { id:'cero_520.6', word:'Cero' },
    { id:'trapi_520.7', word:'Trapi' },
    { id:'nubia_427', word:'Nubia' },
    { id:'yobe_520.15', word:'Yobe' },
    { id:'awacero_520.14', word:'Awacero' },
    { id:'biento_426', word:'Biento' },
    { id:'berde_318', word:'Berde' },
    { id:'conchi_520.16', word:'Conchi' },
    { id:'tortuga_520.17', word:'Tortuga' },
    { id:'sinta_147', word:'Sinta' }

  ],

  summary:`

    Je hebt een dag in de natuur van Aruba beleefd — van de dagen van de week tot de rustige poza bij Conchi.

    🟨 Ayera Oranjestad, awe naturalesa, mayan... kico bo ta bay haci?

    Je hebt geleerd hoe je een week beschrijft, dieren herkent in het mondi, en praat over wolken, wind en regen.

    Je weet nu ook waarom de cascabel hier Cuidadó di Cunucu wordt genoemd, en waarom Conchi zijn naam draagt.

    🌴 Klaar voor de volgende halte van je reis?

  `

}

};