import * as React from 'react';
import {PureComponent} from 'react';

interface SignInFormProps {
  id?: number;
}

interface SignInFormPropsState {
  email: string;
  password: string;
  mark: number;
  comment: string;
  isValid: boolean;
  errorMsg: string;
  isSending: boolean;
}

const withForm = (Component) => {
  class SignInForm extends PureComponent<SignInFormProps, SignInFormPropsState> {
    constructor(props: SignInFormProps) {
      super(props);
      this.state = {
        email: ``,
        password: ``,
        mark: 0,
        comment: ``,
        isValid: true,
        errorMsg: ``,
        isSending: false
      };
      this._handleEmailChange = this._handleEmailChange.bind(this);
      this._handlePasswordChange = this._handlePasswordChange.bind(this);
      this._validationSetHandler = this._validationSetHandler.bind(this);
      this._handleMarkChange = this._handleMarkChange.bind(this);
      this._handleCommentChange = this._handleCommentChange.bind(this);
      this._resetCommentsHandler = this._resetCommentsHandler.bind(this);
      this._setIsSendingHandler = this._setIsSendingHandler.bind(this);
    }

    _setIsSendingHandler(value) {
      this.setState({isSending: value});
    }

    _handleMarkChange(mark) {
      this.setState({mark});
    }

    _handleCommentChange(evt) {
      const data = evt.target.value;
      this.setState({comment: data});
    }

    _handleEmailChange(evt) {
      const data = evt.target.value;
      this.setState({email: data});
    }

    _handlePasswordChange(evt) {
      const data = evt.target.value;
      this.setState({password: data});
    }

    _validationSetHandler(validationValue) {
      this.setState({isValid: validationValue});
    }

    _resetCommentsHandler() {
      this.setState({comment: ``, mark: 0});
      this.setState({isValid: true});
    }

    render() {
      return (
        <Component
          {...this.props}
          onEmailChange={this._handleEmailChange}
          onPasswordChange={this._handlePasswordChange}
          onValidationSet={this._validationSetHandler}
          onMarkSet={this._handleMarkChange}
          onCommentSet={this._handleCommentChange}
          isValid={this.state.isValid}
          password={this.state.password}
          email={this.state.email}
          comment={this.state.comment}
          mark={this.state.mark}
          onResetComments={this._resetCommentsHandler}
          onSetIsSending={this._setIsSendingHandler}
          isSending = {this.state.isSending}
        />
      );
    }
  }

  return SignInForm;
};

export default withForm;
