import OfferAddComment from "./offer-add-comment";
import * as React from 'react';
import {findByTestAtr, getTestStore} from '../../utils/test-mock';
import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {OfferAddComment as OfferAddCommentWithoutStore} from "./offer-add-comment";

const mockComment = {mark: 3, shortComment: `Short Comment`, comment: `No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken. It sufficient instrument insipidity simplicity at interested. `};

Enzyme.configure({adapter: new EnzymeReactAdapter()});

describe(`OfferAddComment`, () => {
  it(`Should comment changed`, () => {
    const commentSetHandler = jest.fn();
    const mockFunc = jest.fn();
    const app = mount(
        <Provider store={getTestStore()}>
          <OfferAddComment mark = {mockComment.mark} onMarkSet={mockFunc} comment={mockComment.comment} id={0} onCommentSet={commentSetHandler} onResetComments={mockFunc}/>
        </Provider>
    );

    const commentField = findByTestAtr(app, `test-add-comment`);
    commentField.simulate(`change`);
    expect(commentSetHandler).toHaveBeenCalledTimes(1);
  });

  it(`Should mark set`, () => {
    const markSetHandler = jest.fn();
    const mockFunc = jest.fn();
    const app = mount(
        <Provider store={getTestStore()}>
          <OfferAddComment mark = {mockComment.mark} onMarkSet={markSetHandler} comment={mockComment.comment} id={0} onCommentSet={mockFunc} onResetComments={mockFunc}/>
        </Provider>
    );

    const markField = findByTestAtr(app, `test-mark-set`);

    markField.forEach((comment) => comment.simulate(`change`));

    expect(markSetHandler).toHaveBeenCalledTimes(5);

  });

  it(`Should addComment work correctly`, () => {
    const addComment = jest.fn();
    const mockFunc = jest.fn();
    const app = mount(
        <OfferAddCommentWithoutStore error={``} isCommentAdded = {true} onSetIsSending = {mockFunc} isSending = {true} isValid = {true} onValidationSet = {mockFunc} addComment = {addComment} mark = {mockComment.mark} onMarkSet={mockFunc} comment={mockComment.comment} id={0} onCommentSet={mockFunc} onResetComments={mockFunc}/>
    );

    const formField = findByTestAtr(app, `test-addComment`);
    formField.simulate(`submit`);
    expect(addComment).toHaveBeenCalledTimes(1);
    expect(addComment).toHaveBeenCalledWith(0, {comment: mockComment.comment, rating: mockComment.mark});
  });

  it(`Should ResetComments work correctly`, () => {
    const resetComments = jest.fn();
    const setIsSendingHandler = jest.fn();
    const mockFunc = jest.fn();
    mount(
        <OfferAddCommentWithoutStore error={``} isCommentAdded = {true} onSetIsSending = {setIsSendingHandler} isSending = {true} isValid = {true} onValidationSet = {mockFunc} addComment = {mockFunc} mark = {mockComment.mark} onMarkSet={mockFunc} comment={mockComment.comment} id={0} onCommentSet={mockFunc} onResetComments={resetComments}/>
    );
    expect(resetComments).toHaveBeenCalledTimes(1);
    expect(setIsSendingHandler).toHaveBeenCalledTimes(1);
  });

  it(`Should onValidationSet work correctly`, () => {
    const validationHandler = jest.fn();
    const mockFunc = jest.fn();
    const app = mount(
        <OfferAddCommentWithoutStore error={``} isCommentAdded = {true} onSetIsSending = {mockFunc} isSending = {true} isValid = {true} onValidationSet = {validationHandler} addComment = {mockFunc} mark = {mockComment.mark} onMarkSet={mockFunc} comment={mockComment.shortComment} id={0} onCommentSet={mockFunc} onResetComments={mockFunc}/>
    );
    const formField = findByTestAtr(app, `test-addComment`);
    formField.simulate(`submit`);
    expect(validationHandler).toHaveBeenCalledTimes(1);
  });

  it(`Should onSetIsSending work correctly`, () => {
    const setIsSendingHandler = jest.fn();
    const mockFunc = jest.fn();
    const app = mount(
        <OfferAddCommentWithoutStore error={``} isCommentAdded = {false} onSetIsSending = {setIsSendingHandler} isSending = {true} isValid = {true} onValidationSet = {mockFunc} addComment = {mockFunc} mark = {mockComment.mark} onMarkSet={mockFunc} comment={mockComment.comment} id={0} onCommentSet={mockFunc} onResetComments={mockFunc}/>
    );
    const formField = findByTestAtr(app, `test-addComment`);
    formField.simulate(`submit`);
    expect(setIsSendingHandler).toHaveBeenCalledTimes(1);
  });

});
