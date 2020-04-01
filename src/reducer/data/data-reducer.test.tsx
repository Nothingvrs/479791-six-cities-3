import {Action, dataReducer} from "./data-reducer";
import {
  adaptedMockData,
  mockCards,
  mockCardWithServerFormat, mockCommentAdapted, mockCommentWithServerFormat
} from "../../utils/test-mock";
import {getCities} from "../../utils/utils";


const initialState = {
  city: getCities(mockCards)[0],
  offers: mockCards,
  citiesNames: getCities(mockCards),
  hoveredId: -1,
  filterName: `popular`
};

it(`Reducer add hoveredId`, () => {
  expect(dataReducer(initialState, {type: Action.SET_HOVERED, payload: 2})).toEqual({
    city: getCities(mockCards)[0],
    offers: mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: 2,
    filterName: `popular`
  });
});

it(`Reducer reset hoveredId`, () => {
  expect(dataReducer(initialState, {type: Action.RESET_HOVERED})).toEqual({
    city: getCities(mockCards)[0],
    offers: mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `popular`
  });
});

it(`Reducer set new city`, () => {
  expect(dataReducer(initialState, {type: Action.SET_CITY, payload: `Barcelona`})).toEqual({
    city: `Barcelona`,
    offers: mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `popular`
  });
});

it(`Reducer set new filter`, () => {
  expect(dataReducer(initialState, {type: Action.SET_FILTER, payload: `highToLow`})).toEqual({
    city: getCities(mockCards)[0],
    offers: mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `highToLow`,
  });
});

it(`Reducer get offers`, () => {
  expect(dataReducer(initialState, {type: Action.GET_OFFERS, payload: [mockCardWithServerFormat]})).toEqual({
    city: getCities(mockCards)[0],
    offers: [adaptedMockData],
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `popular`,
    isLoaded: true
  });
});

it(`Reducer get comments`, () => {
  expect(dataReducer(initialState, {type: Action.GET_COMMENTS, payload: [mockCommentWithServerFormat]})).toEqual({
    city: getCities(mockCards)[0],
    offers: mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `popular`,
    comments: [mockCommentAdapted],
    error: ``
  });
});

it(`Reducer get favorites`, () => {
  expect(dataReducer(initialState, {type: Action.LOAD_FAVORITE_OFFERS, payload: [mockCardWithServerFormat]})).toEqual({
    city: getCities(mockCards)[0],
    offers: mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `popular`,
    favoriteOffers: [adaptedMockData]
  });
});

it(`Reducer update favorites`, () => {
  expect(dataReducer(initialState, {type: Action.SET_UPDATED_FAVORITE_OFFER, payload: mockCardWithServerFormat})).toEqual({
    city: getCities(mockCards)[0],
    offers: mockCards.map((card, index) => {
      if (index === 3) {
        return adaptedMockData;
      }
      return card;
    }),
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `popular`,
    updatedOffer: adaptedMockData
  });
});

it(`Reducer GET_NEARBY`, () => {
  expect(dataReducer(initialState, {type: Action.GET_NEARBY, payload: [mockCardWithServerFormat]})).toEqual({
    city: getCities(mockCards)[0],
    offers: mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `popular`,
    nearOffers: [adaptedMockData]
  });
});

it(`Reducer ERROR`, () => {
  expect(dataReducer(initialState, {type: Action.SET_ERROR, payload: `Test Error`})).toEqual({
    city: getCities(mockCards)[0],
    offers: mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `popular`,
    error: `Test Error`
  });
});
