import * as renderer from 'react-test-renderer';
import * as React from 'react';
import OffersCities from "./offers-cities";
import {mockCities} from "../../utils/test-mock";


it(`OffersCities successfully rendered`, () => {
  const mockFunc = jest.fn();
  const tree = renderer.create(<OffersCities citiesNames={mockCities} onCityNameClick={mockFunc} activeCity = {mockCities[0]}/>);
  expect(tree).toMatchSnapshot();
});
