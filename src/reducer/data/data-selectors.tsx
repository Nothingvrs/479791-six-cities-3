import {createSelector} from 'reselect';
import {getCities} from '../../utils/utils';

export const getError = (state) => state.data.error;

export const getFilter = (state) => state.data.filterName;
export const getCity = (state) => state.data.city;
export const getOffers = (state) => state.data.offers;

export const getFavoriteOffers = (state) => state.data.favoriteOffers;

export const getFavoriteOffersPerCity = createSelector(getFavoriteOffers, (offers) => {
  if (!offers) {
    return null;
  }
  const cities = getCities(offers);
  return cities.map((city) => ({
    city: city.name,
    cards: offers.filter((offer) => offer.city.name === city.name)
  }));
});

export const getCitiesFromState = (state) => state.data.citiesNames;

export const getHoveredId = (state) => state.data.hoveredId;

export const getOfferId = (_, props) => props.match.params.id;

export const getIsLoaded = (state) => state.data.isLoaded;

export const getCommentsFromState = (state) => {
  if (state.data && state.data.comments) {
    const newComments = JSON.parse(JSON.stringify(state.data.comments));
    return newComments.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  }
  return null;
};

export const getUpdatedOffer = (state) => {
  if (state.data) {
    return state.data.updatedOffer;
  }
  return null;
};

export const getIsInBookmark = (state, props) => {
  if (getUpdatedOffer(state)) {
    return getUpdatedOffer(state).isInBookmark;
  }
  if (props.card) {
    return props.card.isInBookmark;
  }
  return null;
};

export const getNearOffers = (state) => {
  return state.data.nearOffers;
};

export const getOfferById = createSelector([getOffers, getOfferId], (initialOffers, id) => {
  if (!initialOffers) {
    return null;
  }
  const offer = initialOffers.find((newOffer) => newOffer.id === Number(id));
  if (!offer) {
    return null;
  }

  return Object.assign({}, offer);
});

export const getCards = createSelector([getCity, getFilter, getOffers], (city, filter, offers) => {
  let cards = [];
  if (offers) {
    cards = offers.filter((offer) => offer.city.name === city.name);
  }
  switch (filter) {
    case `lowToHigh`:
      cards = cards.sort((card1, card2) => card1.price - card2.price);
      break;
    case `highToLow`:
      cards = cards.sort((card1, card2) => card2.price - card1.price);
      break;
    case `topRated`:
      cards = cards.sort((card1, card2) => card2.mark - card1.mark);
      break;
  }

  return cards;
});
