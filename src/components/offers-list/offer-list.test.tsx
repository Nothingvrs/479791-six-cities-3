import * as React from 'react';
import {getTestStore, mockCards} from '../../utils/test-mock';
import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import OffersList from "./offers-list";
import {BrowserRouter} from "react-router-dom";

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`Card successfully successfully rendered`, () => {
  const tree = mount(
    <Provider store={getTestStore()}>
      <BrowserRouter>
        <OffersList cards={mockCards}/>
      </BrowserRouter>
    </Provider>
  );
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
