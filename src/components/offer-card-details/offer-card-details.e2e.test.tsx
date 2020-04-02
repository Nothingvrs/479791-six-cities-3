import * as React from 'react';
import {
  findByTestAtr,
  getTestStore,
  mockCards,
  mockComment,
  userData
} from '../../utils/test-mock';
import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {OfferCardDetail} from './offer-card-details';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

describe(`OfferCard e2e`, () => {
  const mockOnMount = jest.fn();
  const setFavoriteHandler = jest.fn();
  const mockHistory = {push: jest.fn};
  const mockMatch = {
    params: {
      id: 0
    }
  };
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const routeComponentPropsMock = {
    history: mockHistory as any,
    location: {} as any,
    match: mockMatch as any
  };
  const app = mount(
      <Provider store={getTestStore()}>
        <BrowserRouter>
          <OfferCardDetail
            card={mockCards[0]}
            isAuth={true}
            isLoaded={true}
            comments={[mockComment]}
            user={userData}
            onSetFavorite={setFavoriteHandler}
            error={``}
            nearOffers={mockCards}
            onMount={mockOnMount}
            {...routeComponentPropsMock}
            hoveredId={0}
          />
        </BrowserRouter>
      </Provider>
  );

  it(`Should onMount successfully working`, () => {
    expect(mockOnMount).toHaveBeenCalledTimes(1);
    expect(mockOnMount).toHaveBeenCalledWith(0);
  });

  it(`Should onSetFavorite successfully working`, () => {
    const article = findByTestAtr(app, `test-add-to-favorite`);
    article.simulate(`click`);
    expect(setFavoriteHandler).toHaveBeenCalledTimes(1);
    expect(setFavoriteHandler).toHaveBeenCalledWith(mockCards[0].id, mockCards[0].isInBookmark);
  });
});
