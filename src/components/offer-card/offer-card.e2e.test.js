import Enzyme, {shallow} from 'enzyme';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import {mockCards} from '../../utils/test-mock.js';
import OfferCard from "./offer-card";

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`Card header click is working`, () => {
  const hoverHandler = jest.fn();

  const app = shallow(<OfferCard card={mockCards[0]} onCardHover={hoverHandler}/>);

  const card = app.find(`[data-test='${`test-card`}']`);

  card.simulate(`mouseover`);

  expect(hoverHandler).toHaveBeenCalledTimes(1);
}
);
