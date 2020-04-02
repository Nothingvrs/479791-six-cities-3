import {CardModel, CityModel, commentAdapter, getCities, offerAdapter} from '../../utils/utils';
import {UNAUTHORIZED_CODE} from '../user/user-reducer';

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
  getOffersFromApi() {
    return (dispatch, state, api) => {
      api
        .get(`/hotels`)
        .then((response) => {
          dispatch(ActionCreator.setOffers(response.data));
        })
        .catch((error) => {
          if (error.response && error.response.status === UNAUTHORIZED_CODE) {
            return null;
          } else {
            dispatch(ActionCreator.setError(error.message));
          }
          return null;
        });
    };
  },
  loadComments(id) {
    return (dispatch, state, api) => {
      api
        .get(`/comments/${id}`)
        .then((response) => {
          dispatch(ActionCreator.setComments(response.data));
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            return null;
          } else {
            dispatch(ActionCreator.setError(error.message));
          }
          return null;
        });
    };
  },
  loadNearOffers(id) {
    return (dispatch, state, api) => {
      api
        .get(`hotels/${id}/nearby`)
        .then((response) => {
          dispatch(ActionCreator.setNearBy(response.data));
        })
        .catch((error) => {
          if (error.response && error.response.status === UNAUTHORIZED_CODE) {
            return null;
          } else {
            dispatch(ActionCreator.setError(error.message));
          }
          return null;
        });
    };
  },
  addCommentToApi(id, data) {
    return (dispatch, state, api) => {
      api
        .post(`/comments/${id}`, data)
        .then((response) => {
          dispatch(ActionCreator.setComments(response.data));
          dispatch(ActionCreator.addComment(true));
        })
        .catch((error) => {
          if (error.response && error.response.status === UNAUTHORIZED_CODE) {
            return null;
          } else {
            dispatch(ActionCreator.setError(error.message));
          }
          return null;
        });
    };
  },
  addToFavoriteOffer(offerId, status) {
    return (dispatch, state, api) => {
      api
        .post(`/favorite/${offerId}/${status ? Favorite.DELETE : Favorite.ADD}`)
        .then((response) => {
          dispatch(ActionCreator.setUpdatedFavoriteOffer(response.data));
        })
        .then(() => api.get(`/favorite`))
        .then((response) => {
          dispatch(ActionCreator.setFavoritesOffers(response.data));
        })
        .catch((error) => {
          if (error.response && error.response.status === UNAUTHORIZED_CODE) {
            return null;
          } else {
            dispatch(ActionCreator.setError(error.message));
          }
          return null;
        });
    };
  },
  loadFavoriteOffers() {
    return (dispatch, state, api) => {
      api
        .get(`/favorite`)
        .then((response) => {
          dispatch(ActionCreator.setFavoritesOffers(response.data));
        })
        .catch((error) => {
          if (error.response && error.response.status === UNAUTHORIZED_CODE) {
            return null;
          } else {
            dispatch(ActionCreator.setError(error.message));
          }
          return null;
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
  setOffers(offers) {
    return {type: Action.GET_OFFERS, payload: offers};
  },
  setError(error) {
    return {type: Action.SET_ERROR, payload: error};
  },
  setComments(comments) {
    return {type: Action.GET_COMMENTS, payload: comments};
  },
  setNearBy(offers) {
    return {type: Action.GET_NEARBY, payload: offers};
  },
  addComment(isAdded) {
    return {type: Action.ADD_COMMENT, payload: isAdded};
  },
  setUpdatedFavoriteOffer(offer) {
    return {type: Action.SET_UPDATED_FAVORITE_OFFER, payload: offer};
  },
  setFavoritesOffers(offers) {
    return {type: Action.LOAD_FAVORITE_OFFERS, payload: offers};
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
        isCommentAdded: false,
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
      return Object.assign({}, state, {isCommentAdded: action.payload});
    case Action.SET_ERROR:
      return Object.assign({}, state, {error: action.payload});
  }
  return state;
};
