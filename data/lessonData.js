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
      text:'🟨 Laman betekent zee of strand.'
    },
	
	{
      sender:'ana',
      text:'In het papiamentu op Curacao en Bonaire gebruiken ze playa voor strand. Dat mag je ook zeggen hoor, dat begrijpt iedereen.'
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
      text:'🟨 Por betekent kunnen.'
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
    { id:'palo_475', word:'Palo' },
    { id:'calor_520.2', word:'Calor' },
    { id:'por_16', word:'Por' },
    { id:'landa_486', word:'Landa' }
  ],

  wordIds:[
    16, 321, 422, 475, 485, 486
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
      text:'🟨 Nos por keda aki betekent wij kunnen hier blijven.'
    },

    {
      sender:'narration',
      text:'🌙 Langzaam wordt het donker. De eerste sterren verschijnen boven de zee.'
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
      text:'Mooi! De dagen vliegen voorbij op Aruba, dus vergeet niet om af en toe van de zonsondergang te genieten.'
    }

  ],

  miniQuiz:[
    { id:'oraño_325', word:'Oraño' },
    { id:'awe_67', word:'Awe' },
    { id:'keda_76', word:'Keda' },
    { id:'anochi_352', word:'Anochi' },
    { id:'drumi dushi_143.1', word:'Drumi dushi' }
  ],

  wordIds:[
    67, 76, 143.1, 325, 352
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
    { id:'blauw_321', word:'Blauw' },
    { id:'palo_475', word:'Palo' },
    { id:'calor_520.2', word:'Calor' },
    { id:'por_16', word:'Por' },
    { id:'landa_486', word:'Landa' },

    { id:'oraño_325', word:'Oraño' },
    { id:'awe_67', word:'Awe' },
    { id:'keda_76', word:'Keda' },
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

}


};
