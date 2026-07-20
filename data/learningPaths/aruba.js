window.learningPaths = {
  aruba: {
    id: 'aruba',
    title: 'One Happy Island',
    guide: 'Ana',

    levels: [
      {
        id: 'biahero',
        title: 'Biahero',
        subtitle: 'Reiziger',

        chapters: [

          {
            id: 'arrival',
            title: 'Aankomst',
            order: 1,

            locations: [
              {
				  id: 'airport',

				  title: 'Reina Beatrix Airport',

				  chapter: 1,

				  shortTitle: 'Aankomst',

				  subtitle: 'Eerste stappen op Aruba',

				  description:
					'Leer begroeten, jezelf voorstellen en de eerste woorden van het Papiamento.',

				  icon: '✈️',

				  map:{
					x:120,
					y:100
				  },

				  lessons: [
                  {
                    id: 'airport-1',
                    title: 'Bon Bini na Aruba'
                  },
                  {
                    id: 'airport-2',
                    title: 'Mi Nomber Ta...'
                  },
                  {
                    id: 'airport-3',
                    title: 'Con Ta Bay?'
                  },
                  {
                    id: 'airport-challenge',
                    title: 'Airport Challenge',
                    challenge: true
                  }
                ]
              }
            ]
          },

          {
            id: 'discover',
            title: 'Ontdekken',
            order: 2,

            locations: [
              {
				  id: 'tanki-flip',

				  title: 'Tanki Flip',

				  chapter: 2,

				  shortTitle: 'Familie',

				  subtitle: 'Wela Ana neemt je mee naar haar jeugd',

				  description:
					'Leer praten over familie, bezoek en het gevoel van dushi tera.',

				  icon: '🏠',

				  map:{
					x:150,
					y:420
				  },

				  lessons: [
                  {
                    id: 'tanki-flip-1',
                    title: 'Kas di Rosa'
                  },
                  {
                    id: 'tanki-flip-2',
                    title: 'Un Bishita Serka Rosa'
                  },
                  {
                    id: 'tanki-flip-3',
                    title: 'Yiu di Rosa'
                  },
                  {
                    id: 'tanki-flip-challenge',
                    title: 'Tanki Flip Challenge',
                    challenge: true
                  }
                ]
              }
            ]
          }

        ]
      }
    ]
  }
};