import OffersMap from "./offers-map";
import {mockCards, mockCities} from "../../utils/test-mock";
import * as React from "react";
import {mount} from 'enzyme';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import * as Enzyme from 'enzyme';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

const fn = {
  addMarker: jest.fn(),
  removeLayer: jest.fn(),
  clearLayers: jest.fn(),
  setView: jest.fn(),
};


jest.mock(`leaflet`, () => ({
  map: () => ({setView: fn.setView, remove: jest.fn()}),
  icon: () => undefined,
  layerGroup: () => ({addTo: () => ({clearLayers: fn.clearLayers})}),
  tileLayer: () => ({addTo: () => undefined}),
  marker: () => ({addTo: fn.addMarker})
}));

describe(`Offer Map`, () => {
  const app = mount(<OffersMap cards={mockCards} hoveredId = {-1} city={mockCities[0]}/>);

  it(`SetView correctly working`, () => {
    expect(fn.setView).toHaveBeenCalledTimes(1);
    expect(fn.setView).toHaveBeenCalledWith([mockCities[0].location.latitude, mockCities[0].location.longitude], mockCities[0].location.zoom);
  });

  it(`Pins added successfully`, () => {
    expect(fn.addMarker).toHaveBeenCalledTimes(4);
  });

  it(`clearLayout and setView works correctly after hover id change`, () => {

    app.setProps({hoveredId: 1});
    expect(fn.setView).toHaveBeenCalledTimes(2);
    expect(fn.clearLayers).toHaveBeenCalledTimes(1);
    expect(fn.addMarker).toHaveBeenCalledTimes(8);
  });

  it(`clearLayout and SetView works correctly after city change`, () => {

    app.setProps({city: mockCities[1]});
    expect(fn.setView).toHaveBeenCalledTimes(3);
    expect(fn.setView).toHaveBeenCalledWith([mockCities[1].location.latitude, mockCities[1].location.longitude], mockCities[1].location.zoom);
    expect(fn.clearLayers).toHaveBeenCalledTimes(2);
    expect(fn.addMarker).toHaveBeenCalledTimes(12);
  });

});
