import Enzyme, {shallow} from 'enzyme';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import {findByTestAtr, mockCards} from '../../utils/test-mock';
import OfferCard from './offer-card';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

const setUp = (props) => {
  const component = shallow(<OfferCard {...props} />);
  return component;
};

describe(`OfferCard e2e testing`, () => {
  it(`Card header click is working`, () => {
    const hoverHandler = () => {};
    const cardUnHoverHandler = () => {};
    const headerClickHandler = jest.fn();
    const app = setUp({
      card: mockCards[0],
      onHover: hoverHandler,
      onUnHover: cardUnHoverHandler,
      onHeaderClick: headerClickHandler
    });

    const cardHeader = findByTestAtr(app, `test-header-click`);
    const event = {
      preventDefault: () => {}
    };

    cardHeader.simulate(`click`, event);
    expect(headerClickHandler).toHaveBeenCalledTimes(1);
  });

  it(`Card hover is working`, () => {
    const hoverHandler = jest.fn();
    const headerClickHandler = () => {};
    const cardUnHoverHandler = () => {};
    const app = setUp({
      card: mockCards[0],
      onHover: hoverHandler,
      onUnHover: cardUnHoverHandler,
      onHeaderClick: headerClickHandler
    });

    const card = findByTestAtr(app, `test-card-hover`);
    card.simulate(`mouseenter`);
    expect(hoverHandler).toHaveBeenCalledTimes(1);
  });

  it(`Card unhover is working`, () => {
    const hoverHandler = () => {};
    const headerClickHandler = () => {};
    const cardUnHoverHandler = jest.fn();
    const app = setUp({
      card: mockCards[0],
      onHover: hoverHandler,
      onUnHover: cardUnHoverHandler,
      onHeaderClick: headerClickHandler
    });

    const card = findByTestAtr(app, `test-card-hover`);
    card.simulate(`mouseleave`);
    expect(cardUnHoverHandler).toHaveBeenCalledTimes(1);
  });
});
