import {Action, dataReducer} from "./data-reducer";
import {mockCards} from "../../utils/test-mock";
import {getCities} from "../../utils/utils";

it(`Reducer add hoveredId`, () => {
  expect(dataReducer({
    city: getCities(mockCards)[0],
    mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1
  }, {type: Action.SET_HOVERED, payload: 2})).toEqual({
    city: getCities(mockCards)[0],
    mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: 2
  });
});

it(`Reducer reset hoveredId`, () => {
  expect(dataReducer({
    city: getCities(mockCards)[0],
    mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1
  }, {type: Action.RESET_HOVERED})).toEqual({
    city: getCities(mockCards)[0],
    mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1
  });
});

it(`Reducer set new city`, () => {
  expect(dataReducer({
    city: getCities(mockCards)[0],
    mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1,
  }, {type: Action.SET_CITY, payload: `Barcelona`})).toEqual({
    city: `Barcelona`,
    mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1
  });
});

it(`Reducer set new filter`, () => {
  expect(dataReducer({
    city: getCities(mockCards)[0],
    mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `popular`,
  }, {type: Action.SET_FILTER, payload: `highToLow`})).toEqual({
    city: getCities(mockCards)[0],
    mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `highToLow`,
  });
});

it(`Reset filter`, () => {
  expect(dataReducer({
    city: getCities(mockCards)[0],
    mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `highToLow`,
  }, {type: Action.RESET_FILTER})).toEqual({
    city: getCities(mockCards)[0],
    mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `popular`,
  });
});
