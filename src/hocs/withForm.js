import React, {PureComponent} from 'react';

const withForm = (Component) => {
  class SignInForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        email: ``,
        password: ``,
        mark: 0,
        comment: ``,
        isValid: true,
        errorMsg: ``,
      };
      this.emailChangeHandler = this.emailChangeHandler.bind(this);
      this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
      this.validationSet = this.validationSet.bind(this);
      this.markSetHandler = this.markSetHandler.bind(this);
      this.commentSetHandler = this.commentSetHandler.bind(this);
      this.resetComments = this.resetComments.bind(this);
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
          resetComments = {this.resetComments}
        />
      );
    }
  }

  return SignInForm;
};

export default withForm;
