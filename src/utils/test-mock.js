export const mockTestData = {
  numberOfOffers: 32,
  cards: [`Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`]
};

export const mockCards = [
  {
    id: 0,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    previewImg: `/img/apartment-01.jpg`,
    imgs: [
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-03.jpg`,
      `/img/studio-01.jpg`,
      `/img/room.jpg`
    ],
    price: 120,
    isInBookmark: true,
    mark: 4,
    isPremium: true,
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
      img: `/img/avatar-angelina.jpg`,
      isPro: true
    },
    addressCoords: [52.3909553943508, 4.85309666406198],
    comments: [
      {
        id: 1,
        author: `Max`,
        authorImg: `/img/avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        mark: 4,
        date: `2020-01-26T13:51:50.417Z`
      },
      {
        id: 2,
        author: `Max`,
        authorImg: `/img/avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        mark: 4,
        date: `2020-01-26T13:51:50.417Z`
      }
    ],
    nearOffers: [1, 2, 3],
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    }
  },
  {
    id: 1,
    name: `Wood and stone place`,
    type: `Private room`,
    previewImg: `/img/apartment-01.jpg`,
    imgs: [
      `/img/room.jpg`,
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-03.jpg`,
      `/img/studio-01.jpg`,
      `/img/room.jpg`
    ],
    price: 80,
    isInBookmark: true,
    mark: 0,
    isPremium: false,
    bedroomNo: 3,
    capacity: 4,
    facilities: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`
    ],
    descriptions: [
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    reviews: 2,
    avgMark: 4.5,
    hostUser: {
      name: `Natalia`,
      img: `/img/avatar-angelina.jpg`,
      isPro: true
    },
    addressCoords: [52.369553943508, 4.85309666406198],
    comments: [
      {
        id: 2,
        author: `Max`,
        authorImg: `/img/avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        mark: 4,
        date: `2020-01-26T13:51:50.417Z`
      }
    ],
    nearOffers: [0, 2, 3],
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    }
  },
  {
    id: 2,
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
    previewImg: `/img/apartment-01.jpg`,
    imgs: [
      `/img/apartment-02.jpg`,
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-03.jpg`,
      `/img/studio-01.jpg`,
      `/img/room.jpg`
    ],
    price: 132,
    isInBookmark: false,
    mark: 4,
    isPremium: false,
    bedroomNo: 3,
    capacity: 4,
    facilities: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cabel TV`
    ],
    descriptions: [
      `Chalets Alpins- 15 Chemin des Skieurs is located in Stoneham, 9.7 km from Les Marais du Nord, 9.7 km from Camping Stoneham, as well as 19.3 km from Nordique Spa Stoneham. The air-conditioned accommodation is an 8-minute walk from Halte O Spa, and guests benefit from private parking available on site and free WiFi.`,
      `Aventures Nord-Bec is 24.1 km from the chalet, while Jacques-Cartier National Park is 48.3 km from the property. The nearest airport is Québec City Jean Lesage International Airport, 40.2 km from Chalets Alpins- 15.`
    ],
    reviews: 2,
    avgMark: 4.5,
    hostUser: {
      name: `Olga`,
      img: `/img/avatar-angelina.jpg`,
      isPro: true
    },
    addressCoords: [52.3909553943508, 4.929309666406198],
    comments: [
      {
        id: 1,
        author: `Max`,
        authorImg: `/img/avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        mark: 4,
        date: `2020-01-26T13:51:50.417Z`
      },
      {
        id: 2,
        author: `Max`,
        authorImg: `/img/avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        mark: 4,
        date: `2020-01-26T13:51:50.417Z`
      }
    ],
    nearOffers: [0, 1, 3],
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    }
  },
  {
    id: 3,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    previewImg: `/img/apartment-01.jpg`,
    imgs: [
      `/img/apartment-03.jpg`,
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-03.jpg`,
      `/img/studio-01.jpg`,
      `/img/room.jpg`
    ],
    price: 180,
    isInBookmark: false,
    mark: 5,
    isPremium: false,
    bedroomNo: 3,
    capacity: 4,
    facilities: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cabel TV`
    ],
    descriptions: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      `The chalet features 5 separate bedrooms, 1 bathroom, a fully equipped kitchen with a dining area and dishwasher, and a living room with a TV.`
    ],
    reviews: 2,
    avgMark: 4.5,
    hostUser: {
      name: `Natalia`,
      img: `/img/avatar-angelina.jpg`,
      isPro: true
    },
    addressCoords: [52.3809553943508, 4.939309666406198],
    comments: [
      {
        id: 1,
        author: `Alex`,
        authorImg: `/img/avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        mark: 1,
        date: `2020-03-26T13:51:50.417Z`
      },
      {
        id: 2,
        author: `Max`,
        authorImg: `/img/avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        mark: 4,
        date: `2020-01-26T13:51:50.417Z`
      }
    ],
    nearOffers: [0, 1, 2],
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    }
  }
];


export const mockCities = [{
  name: `Amsterdam`,
  location: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  }
}, {
  name: `Dusseldorf`,
  location: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13
  }
}];

export const logInMockData = {
  password: `123`,
  email: `1513@123.ru`
};

export const userData = {
  id: 1,
  email: `laura@example.com`,
  name: `laura`,
  avatarUrl: `/static/avatar/7.jpg`,
  isPro: false
};

export const findByTestAtr = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
};
