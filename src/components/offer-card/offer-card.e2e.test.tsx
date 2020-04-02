import * as React from 'react';
import {findByTestAtr, mockCards} from '../../utils/test-mock';
import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {OfferCard} from './offer-card';
import {BrowserRouter} from 'react-router-dom';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

describe(`OfferCard e2e`, () => {

  const hoverHandler = jest.fn();
  const mouseLeaveHandler = jest.fn();
  const setFavoriteHandler = jest.fn();
  const mockHistory = {push: jest.fn};

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const routeComponentPropsMock = {
    history: mockHistory as any,
    location: {} as any,
    match: {} as any
  };
  const app = mount(
    <BrowserRouter>
      <OfferCard
        card={mockCards[0]}
        {...routeComponentPropsMock}
        nearPlace={false}
        isAuth
        favorite={false}
        onHover={hoverHandler}
        onUnHover={mouseLeaveHandler}
        onSetFavorite={setFavoriteHandler}
      />
    </BrowserRouter>
  );
  const article = findByTestAtr(app, `test-card-hover`);

  it(`Should onHover successfully working`, () => {

    article.simulate(`mouseenter`);
    expect(hoverHandler).toHaveBeenCalledTimes(1);
    expect(hoverHandler).toHaveBeenCalledWith(0);
  });

  it(`Should Mouse leave successfully working`, () => {

    article.simulate(`mouseleave`);
    expect(mouseLeaveHandler).toHaveBeenCalledTimes(1);
  });

  it(`Should add to Favorite successfully working`, () => {

    const favoriteButton = findByTestAtr(app, `test-card-add-to-favorite`);

    favoriteButton.simulate(`click`);
    expect(setFavoriteHandler).toHaveBeenCalledTimes(1);
    expect(setFavoriteHandler).toHaveBeenCalledWith(0, mockCards[0].isInBookmark);
  });
});
