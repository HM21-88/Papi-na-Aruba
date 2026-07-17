window.learningPaths = {
  aruba: {
    id: 'aruba',
    title: 'One Happy Island',
    guide: 'Ana',

    chapters: [
      {
        id: 'arrival',
        title: 'Aankomst',
        order: 1,

        stops: [
          {
            id: 'airport',
            order: 1,
            title: 'Reina Beatrix Airport',
            icon: 'plane',

            description:
              'Je komt aan op Aruba en leert je eerste woorden.',

            categories: [
              'groeten',
              'taal'
            ],

            featuredWords: [
              102, // bon dia
              107, // con ta bay
              110, // ayo
              194  // danki
            ],

            funFact:
              'De luchthaven van Aruba is vernoemd naar koningin Beatrix.',

            subLocations: [],

            unlocked: true
          },

          {
            id: 'oranjestad',
            order: 2,
            title: 'Oranjestad',
            icon: 'city',

            description:
              'Ontdek het centrum van Aruba en leer de weg vragen.',

            categories: [
              'plaatsen',
              'mensen',
              'taal'
            ],

            featuredWords: [],

            funFact:
              'Oranjestad is de hoofdstad van Aruba.',

            subLocations: [],

            unlocked: false
          },

          {
            id: 'hotel',
            order: 3,
            title: 'Hotel',
            icon: 'building',

            description:
              'Check in bij je hotel en leer dagelijkse woorden.',

            categories: [
              'plaatsen',
              'eten_drinken',
              'huishouden'
            ],

            featuredWords: [],

            funFact:
              'Veel bezoekers verblijven rondom Palm Beach en Eagle Beach.',

            subLocations: [],

            unlocked: false
          }
        ]
      },

      {
        id: 'discover',
        title: 'Ontdekken',
        order: 2,

        stops: [
          {
            id: 'main-street',
            order: 4,
            title: 'Main Street',
            icon: 'shopping',

            categories: [
              'winkelen',
              'geld'
            ],

            featuredWords: [],

            subLocations: []
          },

          {
            id: 'tanki-flip',
            order: 5,
            title: 'Tanki Flip',
            icon: 'community',

            categories: [
              'mensen',
              'familie',
              'plaatsen'
            ],

            featuredWords: [],

            subLocations: []
          },

          {
            id: 'eagle-beach',
            order: 6,
            title: 'Eagle Beach',
            icon: 'beach',

            categories: [
              'vrije_tijd',
              'gezondheid',
              'mensen'
            ],

            featuredWords: [],

            subLocations: []
          }
        ]
      },

      {
        id: 'explore',
        title: 'Verkennen',
        order: 3,

        stops: [
          {
            id: 'california-lighthouse',
            order: 7,
            title: 'California Lighthouse',
            icon: 'lighthouse',

            categories: [
              'plaatsen',
              'tijd',
              'mensen'
            ],

            featuredWords: [],

            subLocations: [
              'Alto Vista Chapel'
            ]
          },

          {
            id: 'arikok',
            order: 8,
            title: 'Arikok National Park',
            icon: 'mountain',

            categories: [
              'plaatsen',
              'mensen',
              'vrije_tijd'
            ],

            featuredWords: [],

            subLocations: [
              'Natural Pool',
              'Fontein Cave'
            ]
          }
        ]
      },

      {
        id: 'experience',
        title: 'Beleven',
        order: 4,

        stops: [
          {
            id: 'san-nicolas',
            order: 9,
            title: 'San Nicolas',
            icon: 'art',

            categories: [
              'vrije_tijd',
              'mensen',
              'taal'
            ],

            featuredWords: [],

            subLocations: []
          },

          {
            id: 'baby-beach',
            order: 10,
            title: 'Baby Beach',
            icon: 'swim',

            categories: [
              'vrije_tijd',
              'gezondheid'
            ],

            featuredWords: [],

            subLocations: [
              'Tres Trapi'
            ]
          },

          {
            id: 'savaneta',
            order: 11,
            title: 'Savaneta',
            icon: 'anchor',

            categories: [
              'werk',
              'mensen',
              'familie'
            ],

            featuredWords: [],

            subLocations: [
              'Marinierskazerne'
            ]
          }
        ]
      }
    ]
  }
};
