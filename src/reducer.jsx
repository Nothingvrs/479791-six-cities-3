import offers from './mocks/offers';

export const getCities = (initialOffers) => {
  const cities = new Set();
  initialOffers.forEach((offer) => cities.add(offer.city));
  return [...cities];
};

export const Action = {
  SET_HOVERED: `set-hovered`,
  RESET_HOVERED: `reset-hovered`,
  SET_CITY: `set-city`,
  SET_FILTER: `set-filter`,
  RESET_FILTER: `reset-filter`
};

export const ActionCreator = {
  setHovered(id) {
    return {type: Action.SET_HOVERED, payload: id};
  },
  resetHovered() {
    return {type: Action.RESET_HOVERED};
  },
  setFilter(filterName) {
    return {type: Action.SET_FILTER, payload: filterName};
  },
  resetFilter() {
    return {type: Action.RESET_FILTER};
  },
  setCity(cityName) {
    return {type: Action.SET_CITY, payload: cityName};
  },
};


const initialState = {
  city: getCities(offers)[0],
  offers,
  citiesNames: getCities(offers),
  filterName: `popular`,
  hoveredId: -1
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.SET_HOVERED:
      return Object.assign({}, state, {hoveredId: action.payload});
    case Action.RESET_HOVERED:
      return Object.assign({}, state, {hoveredId: -1});
    case Action.SET_FILTER:
      return Object.assign({}, state, {filterName: action.payload});
    case Action.RESET_FILTER:
      return Object.assign({}, state, {filterName: `popular`});
    case Action.SET_CITY:
      return Object.assign({}, state, {city: action.payload});
  }
  return state;
};
