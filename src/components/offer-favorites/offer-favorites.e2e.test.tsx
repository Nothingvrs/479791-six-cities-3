import * as React from 'react';
import {getTestStore, mockCards} from '../../utils/test-mock';
import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {OffersFavorites} from './offer-favorites';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

describe(`OfferFilter e2e`, () => {

  it(`Should onMount successfully working`, () => {
    const mockOnMount = jest.fn();
    mount(
        <Provider store={getTestStore()}>
          <BrowserRouter>
            <OffersFavorites onMount={mockOnMount} error = {``} favoriteOffersPerCity={[{city: mockCards[0].city.name, cards: mockCards}]}/>
          </BrowserRouter>
        </Provider>
    );

    expect(mockOnMount).toHaveBeenCalledTimes(1);
  });
}
);
