import {ActionType, reducer, getCities, getOffersByCity, getOfferById} from './reducer';
import {mockCards} from './utils/test-mock.js';

it(`Reducer should change city`, () => {
  expect(
      reducer({
        city: getCities(mockCards)[0],
        offers: getOffersByCity(mockCards, getCities(mockCards)[0]),
        citiesNames: getCities(mockCards)
      },
      {
        type: ActionType.CHANGE_CITY,
        payload: {offers: getOffersByCity(mockCards, `Hamburg`), city: `Hamburg`}
      })
  ).toEqual({
    city: `Hamburg`,
    offers: [mockCards[1], mockCards[2]],
    citiesNames: [`Amsterdam`, `Hamburg`]
  });
});

it(`Reducer should change offer`, () => {
  expect(
      reducer({
        city: getCities(mockCards)[0],
        offers: getOffersByCity(mockCards, getCities(mockCards)[0]),
        citiesNames: getCities(mockCards)
      },
      {type: ActionType.GET_OFFER, payload: getOfferById(mockCards, 0)})
  ).toEqual({
    city: getCities(mockCards)[0],
    offers: getOffersByCity(mockCards, getCities(mockCards)[0]),
    citiesNames: getCities(mockCards),
    offer: getOfferById(mockCards, 0)
  });
});

it(`Reducer should clear offer`, () => {
  expect(reducer(
      {
        city: getCities(mockCards)[0],
        offers: getOffersByCity(mockCards, getCities(mockCards)[0]),
        citiesNames: getCities(mockCards),
        offer: getOfferById(mockCards, 0)
      },
      {type: ActionType.CLEAR_OFFER, payload: ``}
  )
  ).toEqual({
    city: getCities(mockCards)[0],
    offers: getOffersByCity(mockCards, getCities(mockCards)[0]),
    citiesNames: getCities(mockCards),
    offer: ``
  });
});
