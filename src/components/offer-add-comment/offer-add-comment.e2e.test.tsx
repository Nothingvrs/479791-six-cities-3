import OfferAddComment from "./offer-add-comment";
import * as React from 'react';
import {findByTestAtr, getTestStore} from '../../utils/test-mock';
import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';


const mockComment = {mark: 3, comment: `Mock Comment`};

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`OfferAddComment successfully rendered`, () => {
  const commentSetHandler = jest.fn();
  const mockFunc = jest.fn();
  const app = mount(
    <Provider store={getTestStore()}>
      <OfferAddComment mark = {mockComment.mark} onMarkSet={mockFunc} comment={mockComment.comment} id={0} onCommentSet={commentSetHandler} resetComments={mockFunc}/>
    </Provider>
  );

  const commentField = findByTestAtr(app, `test-add-comment`);

  commentField.simulate(`change`);

  expect(commentSetHandler).toHaveBeenCalledTimes(1);
});
