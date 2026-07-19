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
                icon: 'plane',

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
                icon: 'house',

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