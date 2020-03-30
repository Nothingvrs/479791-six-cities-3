import {createSelector} from 'reselect';
import {getCities} from "../../utils/utils";

export const getFilter = (state) => state.data.filterName;
export const getCity = (state) => state.data.city;
export const getOffers = (state) => state.data.offers;

export const getFavoriteOffers = (state) => state.data.favoriteOffers;

export const getFavoriteOffersPerCity = createSelector(getFavoriteOffers, (offers) => {
  if (!offers) {
    return null;
  }
  const cities = getCities(offers);
  return cities.map((city) => ({[city.name]: offers.filter((offer) => offer.city.name === city.name)}));
});

export const getCitiesFromState = (state) => state.data.citiesNames;

export const getHoveredId = (state) => state.data.hoveredId;

export const getOfferId = (_, props) => props.match.params.id;

export const getIsLoaded = (state) => state.data.isLoaded;

export const getCommentsFromState = (state) => state.data.comments;

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

export const getOfferById = createSelector([getOffers, getOfferId], (initialOffers, id) => {
  if (!initialOffers) {
    return null;
  }
  const offer = initialOffers.find((newOffer) => newOffer.id === Number(id));
  if (!offer) {
    return null;
  }
  const newOffer = Object.assign({}, offer);

  newOffer.nearOffers = initialOffers
    .filter(
        (filterOffer) => filterOffer.id !== offer.id && filterOffer.city.name === offer.city.name
    )
    .slice(0, 3);
  return newOffer;
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
      cards = cards.sort((card1, card2) => card2.avgMark - card1.avgMark);
      break;
  }

  return cards;
});
