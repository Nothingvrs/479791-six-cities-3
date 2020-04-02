import * as React from 'react';
import PrivateRoute from "./private-route";
import {getTestStore} from '../../utils/test-mock';
import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";


Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`PrivateRoute successfully rendered`, () => {
  const tree = mount(<Provider store={getTestStore()}><BrowserRouter><PrivateRoute/></BrowserRouter></Provider>);
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
