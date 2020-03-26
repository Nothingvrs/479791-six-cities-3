import OfferAddComment from "./offer-add-comment";
import React from 'react';
import {mockCards, mockCities, userData} from '../../utils/test-mock';
import Enzyme, {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {getCities} from '../../reducer/data/data-reducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


const mockComment = {mark: 3, comment: `Mock Comment`};

Enzyme.configure({adapter: new EnzymeReactAdapter()});

const initialState = {
  data: {
    city: mockCities[0],
    offers: mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `popular`
  },
  user: {
    authorizationStatus: true,
    userData
  }
};

const reducer = (state = initialState) => {
  return state;
};
const store = createStore(reducer);

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`OfferAddComment successfully rendered`, () => {
  const tree = mount(
      <Provider store={store}>
        <OfferAddComment mark = {mockComment.mark} onMarkSet={() => {}} comment={mockComment.comment} isAuth id={0} addComment={() => {}} onCommentSet={() => {}} resetComments={() => {}}/>
      </Provider>
  );
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
