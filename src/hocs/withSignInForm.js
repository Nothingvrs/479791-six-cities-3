import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getAuthStatus, getErrorMsg} from '../reducer/user/user-selector';
import {UserOperation, Authorization} from '../reducer/user/user-reducer';
import {getCity} from "../reducer/data/data-selectors";
import PropTypes from 'prop-types';


const withSignInForm = (Component) => {
  class SignInForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        email: ``,
        password: ``,
        isValid: true
      };
      this.emailChangeHandler = this.emailChangeHandler.bind(this);
      this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
      this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    componentDidMount() {
      if (this.props.isAuth) {
        this.props.history.push(`/`);
      }
    }

    componentDidUpdate() {
      if (this.props.isAuth) {
        this.props.history.push(`/`);
      }
    }

    emailChangeHandler(evt) {
      const data = evt.target.value;
      this.setState({email: data});
    }
    passwordChangeHandler(evt) {
      const data = evt.target.value;
      this.setState({password: data});
    }

    formSubmitHandler(evt) {

      evt.preventDefault();
      const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          this.state.email
      );

      if (!valid) {
        this.setState({isValid: false});
      } else {
        this.props.login({email: this.state.email, password: this.state.email});
      }
    }

    render() {
      return (
        <Component
          onEmailChange={this.emailChangeHandler}
          onPasswordChange={this.passwordChangeHandler}
          onFormSubmit={this.formSubmitHandler}
          password={this.state.password}
          email={this.state.email}
          city = {this.props.city}
          error = {this.props.errorMsg}
        />
      );
    }
  }

  SignInForm.propTypes = {
    isAuth: PropTypes.bool,
    history: PropTypes.object,
    city: PropTypes.object,
    login: PropTypes.func,
    errorMsg: PropTypes.string
  };

  const mapStateToProps = (state) => {
    return {
      isAuth: getAuthStatus(state) === Authorization.AUTH,
      city: getCity(state),
      errorMsg: getErrorMsg(state)
    };
  };

  const mapDispatchToProps = (dispatch) => ({
    login(data) {
      dispatch(UserOperation.loginUser(data));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(SignInForm);
};

export default withSignInForm;
