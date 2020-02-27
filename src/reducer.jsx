import offers from './mocks/offers';

export const ActionType = {
  CHANGE_CITY: `change-city`,
  GET_OFFER: `get-offer`,
  CLEAR_OFFER: `clear-offer`
};

export const getOffersByCity = (initialOffers, cityName) =>
  initialOffers.filter((offer) => offer.city === cityName);

export const getCities = (initialOffers) => {
  const cities = new Set();
  initialOffers.forEach((offer) => cities.add(offer.city));
  return [...cities];
};

export const getOfferById = (initialOffers, id) => {
  const offer = initialOffers.find((newOffer) => newOffer.id === Number(id));
  if (!offer) {
    return null;
  }
  const newOffer = Object.assign({}, offer);
  newOffer.nearOffers = offer.nearOffers.map((offerId) =>
    initialOffers.find((offerItem) => offerItem.id === offerId)
  );
  return newOffer;
};

const initialState = {
  city: getCities(offers)[0],
  offers: getOffersByCity(offers, getCities(offers)[0]),
  citiesNames: getCities(offers)
};

export const ActionCreator = {
  changeCity: (cityName) => {
    const newOffers = getOffersByCity(offers, cityName);

    return {type: ActionType.CHANGE_CITY, payload: {offers: newOffers, city: cityName}};
  },
  getCardDetails(id) {

    const newOffer = getOfferById(offers, id);

    return {type: ActionType.GET_OFFER, payload: newOffer};
  },
  clearOffer() {
    return {type: ActionType.CLEAR_OFFER, payload: ``};
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload.city, offers: action.payload.offers});
    case ActionType.GET_OFFER:
      return Object.assign({}, state, {offer: action.payload});
    case ActionType.CLEAR_OFFER:
      return Object.assign({}, state, {offer: action.payload});
  }

  return state;
};
