import {createSelector} from "reselect";

export const getFilter = (state) => state.filterName;
export const getCity = (state) => state.city;
export const getOffers = (state) => state.offers;

export const getCitiesFromState = (state) => state.citiesNames;

export const getHoveredId = (state) => state.hoveredId;

export const getOfferId = (_, props) => props.match.params.id;

export const getIsLoaded = (state) => state.isLoaded;

export const getOfferById = createSelector([getOffers, getOfferId], (initialOffers, id) => {
  if (!initialOffers) {
    return null;
  }
  const offer = initialOffers.find((newOffer) => newOffer.id === Number(id));
  if (!offer) {
    return null;
  }
  const newOffer = Object.assign({}, offer);

  newOffer.nearOffers = initialOffers.filter((filterOffer) => filterOffer.id !== offer.id && filterOffer.city.name === offer.city.name).slice(0, 3);
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
