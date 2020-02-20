export const mockTestData = {
  numberOfOffers: 32,
  cards: [
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`
  ]
};

export const mockCards = [
  {
    id: 0,
    name: `Wood and stone place`,
    type: `Private room`,
    imgs: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/room.jpg`],
    price: 35,
    isInBookmark: false,
    mark: 2,
    isPremium: false,
    bedroomNo: 1,
    capacity: 1,
    facilities: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,

    ],
    descriptions: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    reviews: 5,
    avgMark: 5,
    hostUser: {
      name: `Angelina`,
      img: `img/avatar-angelina.jpg`,
      status: `pro`
    },
    addressCoords: [52.3909553943508, 4.929309666406198]
  },
  {
    id: 1,
    name: `Beautiful & luxurious apartment at great location `,
    type: `Private room`,
    imgs: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/room.jpg`],
    price: 555,
    isInBookmark: true,
    mark: 3,
    isPremium: false,
    bedroomNo: 1,
    capacity: 1,
    facilities: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`
    ],
    descriptions: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    reviews: 2,
    avgMark: 4.5,
    hostUser: {
      name: `Angelina`,
      img: `img/avatar-angelina.jpg`,
      status: `pro`
    },
    addressCoords: [52.369553943508, 4.85309666406198]
  },
  {
    id: 2,
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
    imgs: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/room.jpg`],
    price: 132,
    isInBookmark: false,
    mark: 4,
    isPremium: false,
    bedroomNo: 1,
    capacity: 1,
    facilities: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`
    ],
    descriptions: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    reviews: 2,
    avgMark: 4.5,
    hostUser: {
      name: `Angelina`,
      img: `img/avatar-angelina.jpg`,
      status: `pro`
    },
    addressCoords: [52.3909553943508, 4.929309666406198]
  },
  {
    id: 3,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    imgs: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/room.jpg`],
    price: 180,
    isInBookmark: false,
    mark: 5,
    isPremium: false,
    bedroomNo: 1,
    capacity: 1,
    facilities: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`
    ],
    descriptions: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    reviews: 2,
    avgMark: 4.5,
    hostUser: {
      name: `Angelina`,
      img: `img/avatar-angelina.jpg`,
      status: `pro`
    },
    addressCoords: [52.3809553943508, 4.939309666406198]
  }
];


export const findByTestAtr = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
};


