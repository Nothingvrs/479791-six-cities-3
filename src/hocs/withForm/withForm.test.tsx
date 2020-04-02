import * as React from 'react';
import {shallow} from 'enzyme';
import withFilter from './withForm';
import * as Enzyme from 'enzyme';
import * as EnzymeReactAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new EnzymeReactAdapter()});
const MockedComponent = jest.fn();
const WithFormComponent = withFilter(MockedComponent);


describe(`WithForm hoc`, () => {
  const wrapper = shallow(<WithFormComponent />);
  it(`Should email change`, () => {
    const emailEvent = {target: {value: `mockEmail@mockmail.com`}};
    wrapper.props().onEmailChange(emailEvent);
    expect(wrapper.props().email).toEqual(`mockEmail@mockmail.com`);
  });

  it(`Should password change`, () => {
    const passwordEvent = {target: {value: `mockPassword`}};
    wrapper.props().onPasswordChange(passwordEvent);
    expect(wrapper.props().password).toEqual(`mockPassword`);
  });

  it(`Should validation change`, () => {
    wrapper.props().onValidationSet(true);
    expect(wrapper.props().isValid).toEqual(true);
  });

  it(`Should mark set`, () => {
    wrapper.props().onMarkSet(5);
    expect(wrapper.props().mark).toEqual(5);
  });

  it(`Should comment change`, () => {
    const passwordEvent = {target: {value: `mock comment`}};
    wrapper.props().onCommentSet(passwordEvent);
    expect(wrapper.props().comment).toEqual(`mock comment`);
  });

  it(`Should comment reset`, () => {
    wrapper.props().onMarkSet(5);
    const passwordEvent = {target: {value: `mock comment`}};
    wrapper.props().onCommentSet(passwordEvent);
    wrapper.props().onResetComments();
    expect(wrapper.props().comment).toEqual(``);
    expect(wrapper.props().mark).toEqual(0);
  });

  it(`Should sending change`, () => {
    wrapper.props().onSetIsSending(true);
    expect(wrapper.props().isSending).toEqual(true);
  });
});
