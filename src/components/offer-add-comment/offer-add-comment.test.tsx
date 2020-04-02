import OfferAddComment from "./offer-add-comment";
import * as React from 'react';
import {getTestStore} from '../../utils/test-mock';
import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';

const mockComment = {mark: 3, comment: `Mock Comment`};

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`OfferAddComment successfully rendered`, () => {
  const mockFunc = jest.fn();
  const tree = mount(
      <Provider store={getTestStore()}>
        <OfferAddComment mark = {mockComment.mark} onMarkSet={mockFunc} comment={mockComment.comment} isAuth id={0} addComment={mockFunc} onCommentSet={mockFunc} resetComments={mockFunc}/>
      </Provider>
  );
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
