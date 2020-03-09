import renderer from 'react-test-renderer';
import React from 'react';
import OffersCityItem from "./offer-city-item.jsx";
import {mockCities} from "../../utils/test-mock";


it(`OffersCities successfully rendered`, () => {
  const tree = renderer.create(<OffersCityItem cityName={mockCities[0]} activeCity={mockCities[0]} hovered={true} onHover={() => {}} onUnHover={() => {}} onCityNameClick={() => {}}/>);
  expect(tree).toMatchSnapshot();
});
