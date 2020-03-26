import {offerAdapter} from '../../utils/utils';

export const getCities = (initialOffers) => {
  const citiesNames = new Set();
  const cities = [];
  initialOffers.forEach((offer) => {
    if (!citiesNames.has(offer.city.name)) {
      citiesNames.add(offer.city.name);
      cities.push(offer.city);
    }
  });
  return cities;
};

export const Action = {
  SET_HOVERED: `set-hovered`,
  RESET_HOVERED: `reset-hovered`,
  SET_CITY: `set-city`,
  SET_FILTER: `set-filter`,
  RESET_FILTER: `reset-filter`,
  GET_OFFERS: `get-offers`
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
  getOffersFromApi() {
    return (dispatch, state, api) => {
      api.get(`/hotels`).then((response) => {
        dispatch({
          type: Action.GET_OFFERS,
          payload: response.data.map((offer) => offerAdapter(offer))
        });
      });
    };
  }
};

const initialState = {
  filterName: `popular`,
  hoveredId: -1
};

export const dataReducer = (state = initialState, action) => {
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
    case Action.GET_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
        city: getCities(action.payload)[0],
        citiesNames: getCities(action.payload),
        isLoaded: true
      });
  }
  return state;
};
