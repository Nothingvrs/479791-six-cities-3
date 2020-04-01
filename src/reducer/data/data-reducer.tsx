import {CardModel, CityModel, commentAdapter, getCities, offerAdapter} from '../../utils/utils';

const Favorite = {
  ADD: 1,
  DELETE: 0
};

export const getUpdatedOffers = (offers, updatedOffer) => {
  const newOffers = JSON.parse(JSON.stringify(offers));
  return newOffers.map((offer) => {
    if (offer.id === updatedOffer.id) {
      return updatedOffer;
    }
    return offer;
  });
};

export const Action = {
  SET_HOVERED: `set-hovered`,
  RESET_HOVERED: `reset-hovered`,
  SET_CITY: `set-city`,
  SET_FILTER: `set-filter`,
  RESET_FILTER: `reset-filter`,
  GET_OFFERS: `get-offers`,
  GET_COMMENTS: `get-comments`,
  SET_UPDATED_FAVORITE_OFFER: `set-updated-favorite-offer`,
  LOAD_FAVORITE_OFFERS: `load-updated-offer`,
  GET_NEARBY: `get-nearby`,
  SET_ERROR: `set-error`,
  ADD_COMMENT: `add-comment`
};

export const DataOperation = {
  loadComments(id) {
    return (dispatch, state, api) => {
      api
        .get(`/comments/${id}`)
        .then((response) => {
          dispatch({
            type: Action.GET_COMMENTS,
            payload: response.data
          });
        })
        .catch((error) => {
          if (error.responce.status !== 401) {
            dispatch({
              type: Action.SET_ERROR,
              payload: error.message
            });
          }
        });
    };
  },
  loadNearOffers(id) {
    return (dispatch, state, api) => {
      api
        .get(`hotels/${id}/nearby`)
        .then((response) => {
          dispatch({
            type: Action.GET_NEARBY,
            payload: response.data
          });
        })
        .catch((error) => {
          if (error.responce.status !== 401) {
            dispatch({
              type: Action.SET_ERROR,
              payload: error.message
            });
          }
        });
    };
  },
  addCommentToApi(id, data) {
    return (dispatch, state, api) => {
      api
        .post(`/comments/${id}`, data)
        .then((response) => {
          dispatch({
            type: Action.GET_COMMENTS,
            payload: response.data
          });
          dispatch({
            type: Action.ADD_COMMENT,
            payload: true
          });
        })
        .catch((error) => {
          if (error.responce.status !== 401) {
            dispatch({
              type: Action.SET_ERROR,
              payload: error.message
            });
          }
        });
    };
  },
  addToFavoriteOffer(offerId, status) {
    return (dispatch, state, api) => {
      api
        .post(`/favorite/${offerId}/${status ? Favorite.DELETE : Favorite.ADD}`)
        .then((response) => {
          dispatch({
            type: Action.SET_UPDATED_FAVORITE_OFFER,
            payload: response.data
          });
        })
        .then(() => api.get(`/favorite`))
        .then((response) => {
          dispatch({
            type: Action.LOAD_FAVORITE_OFFERS,
            payload: response.data
          });
        })
        .catch((error) => {
          if (error.responce.status !== 401) {
            dispatch({
              type: Action.SET_ERROR,
              payload: error.message
            });
          }
        });
    };
  },
  loadFavoriteOffers() {
    return (dispatch, state, api) => {
      api
        .get(`/favorite`)
        .then((response) => {
          dispatch({
            type: Action.LOAD_FAVORITE_OFFERS,
            payload: response.data
          });
        })
        .catch((error) => {
          if (error) {
            dispatch({
              type: Action.SET_ERROR,
              payload: error.message
            });
          }
        });
    };
  }
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
  setCity(cityName) {
    return {type: Action.SET_CITY, payload: cityName};
  },
  getOffersFromApi() {
    return (dispatch, state, api) => {
      api
        .get(`/hotels`)
        .then((response) => {
          dispatch({
            type: Action.GET_OFFERS,
            payload: response.data
          });
        })
        .catch((error) => {
          if (error) {
            dispatch({
              type: Action.SET_ERROR,
              payload: error.message
            });
          }
        });
    };
  }
};

interface StateModel {
  city?: CityModel;
  filterName?: string;
  hoveredId?: number;
  offers?: CardModel[];
  citiesNames?: string[];
}

const initialState: StateModel = {
  filterName: `popular`,
  hoveredId: -1,
  offers: []
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.SET_HOVERED:
      return Object.assign({}, state, {hoveredId: action.payload});
    case Action.RESET_HOVERED:
      return Object.assign({}, state, {hoveredId: -1});
    case Action.SET_FILTER:
      return Object.assign({}, state, {filterName: action.payload});
    case Action.SET_CITY:
      return Object.assign({}, state, {city: action.payload});
    case Action.GET_OFFERS:
      const newOffers = action.payload.map((offer) => offerAdapter(offer));
      return Object.assign({}, state, {
        offers: newOffers,
        city: getCities(newOffers)[0],
        citiesNames: getCities(newOffers),
        isLoaded: true
      });
    case Action.GET_COMMENTS:
      return Object.assign({}, state, {
        error: ``,
        comments: action.payload.map((comment) => commentAdapter(comment))
      });
    case Action.LOAD_FAVORITE_OFFERS:
      return Object.assign({}, state, {
        favoriteOffers: action.payload.map((offer) => offerAdapter(offer))
      });
    case Action.SET_UPDATED_FAVORITE_OFFER:
      return Object.assign({}, state, {
        offers: getUpdatedOffers(state.offers, offerAdapter(action.payload)),
        updatedOffer: offerAdapter(action.payload)
      });
    case Action.GET_NEARBY:
      return Object.assign({}, state, {
        nearOffers: action.payload.map((offer) => offerAdapter(offer))
      });
    case Action.ADD_COMMENT:
      return Object.assign({}, state, {commentAdded: action.payload});
    case Action.SET_ERROR:
      return Object.assign({}, state, {error: action.payload});
  }
  return state;
};
