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
      this.emailChangeHandler = this.emailChangeHandler.bind(this);
      this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
      this.validationSet = this.validationSet.bind(this);
      this.markSetHandler = this.markSetHandler.bind(this);
      this.commentSetHandler = this.commentSetHandler.bind(this);
      this.resetComments = this.resetComments.bind(this);
      this.setIsSending = this.setIsSending.bind(this);
    }

    setIsSending(value) {
      this.setState({isSending: value});
    }

    markSetHandler(mark) {
      this.setState({mark});
    }

    commentSetHandler(evt) {
      const data = evt.target.value;
      this.setState({comment: data});
    }

    emailChangeHandler(evt) {
      const data = evt.target.value;
      this.setState({email: data});
    }
    passwordChangeHandler(evt) {
      const data = evt.target.value;
      this.setState({password: data});
    }

    validationSet(validationValue) {
      this.setState({isValid: validationValue});
    }

    resetComments() {
      this.setState({comment: ``, mark: 0});
      this.setState({isValid: true});
    }

    render() {
      return (
        <Component
          {...this.props}
          onEmailChange={this.emailChangeHandler}
          onPasswordChange={this.passwordChangeHandler}
          validationSet={this.validationSet}
          onMarkSet={this.markSetHandler}
          onCommentSet={this.commentSetHandler}
          isValid={this.state.isValid}
          password={this.state.password}
          email={this.state.email}
          comment={this.state.comment}
          mark={this.state.mark}
          resetComments={this.resetComments}
          setIsSending={this.setIsSending}
          isSending = {this.state.isSending}
        />
      );
    }
  }

  return SignInForm;
};

export default withForm;
