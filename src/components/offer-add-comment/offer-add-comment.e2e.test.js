import OfferAddComment from "./offer-add-comment.jsx";
import React from 'react';
import {mockCards, mockCities, userData, findByTestAtr} from '../../utils/test-mock';
import Enzyme, {mount} from 'enzyme';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {getCities} from '../../reducer/data/data-reducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Authorization} from "../../reducer/user/user-reducer";


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
    authorizationStatus: Authorization.AUTH,
    userData
  }
};

const reducer = (state = initialState) => {
  return state;
};
const store = createStore(reducer);

it(`OfferAddComment successfully rendered`, () => {

  const commentSetHandler = jest.fn();

  const app = mount(
      <Provider store={store}>
        <OfferAddComment mark = {mockComment.mark} onMarkSet={() => {}} comment={mockComment.comment} id={0} onCommentSet={commentSetHandler} resetComments={() => {}}/>
      </Provider>
  );


  const commentField = findByTestAtr(app, `test-add-comment`);


  commentField.simulate(`change`);

  expect(commentSetHandler).toHaveBeenCalledTimes(1);
});
