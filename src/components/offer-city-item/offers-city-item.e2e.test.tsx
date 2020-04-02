import * as Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import {findByTestAtr} from '../../utils/test-mock';
import {mockCities} from '../../utils/test-mock';
import OffersCityItem from './offer-city-item';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

describe(`OffersCityItem e2e`, () => {
  const cityClickHandler = jest.fn();
  const hoverHandler = jest.fn();
  const mouseLeaveHandler = jest.fn();
  const app = shallow(
      <OffersCityItem
        cityName={mockCities[0]}
        activeCity={mockCities[0]}
        hovered={true}
        onHover={hoverHandler}
        onUnHover={mouseLeaveHandler}
        onCityNameClick={cityClickHandler}
      />
  );
  const cityItem = findByTestAtr(app, `test-city-hover`);

  it(`City click is working`, () => {
    const mockFunc = jest.fn();
    const cityLink = findByTestAtr(app, `test-city-click`);
    const event = {
      preventDefault: mockFunc
    };

    cityLink.simulate(`click`, event);

    expect(cityClickHandler).toHaveBeenCalledTimes(1);
    expect(cityClickHandler).toHaveBeenCalledWith(mockCities[0]);
  });

  it(`City hover is working correctly`, () => {
    cityItem.simulate(`mouseenter`);
    expect(hoverHandler).toHaveBeenCalledTimes(1);
  });

  it(`City mouse leaver is working correctly`, () => {
    cityItem.simulate(`mouseleave`);
    expect(mouseLeaveHandler).toHaveBeenCalledTimes(1);
  });
});
