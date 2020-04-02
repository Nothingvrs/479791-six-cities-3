import * as React from 'react';
import {useEffect} from 'react';
import {getAuthStatus, getErrorMsg} from "../../reducer/user/user-selector";
import {Authorization, UserOperation} from "../../reducer/user/user-reducer";
import {getCity} from "../../reducer/data/data-selectors";
import {connect} from "react-redux";
import {RouteComponentProps} from 'react-router-dom';
import {CityModel} from "../../utils/utils";

interface InterfaceSignIn {
  onEmailChange: (event: React.SyntheticEvent) => void;
  onPasswordChange: (event: React.SyntheticEvent) => void;
  password: string;
  email: string;
  isAuth: boolean;
  city: CityModel;
  login: (loginData: {email: string; password: string}) => void;
  error: string;
}

const SignIn: React.FC <InterfaceSignIn & RouteComponentProps> = (props) => {
  const {onEmailChange, onPasswordChange, password, email, city, error} = props;

  useEffect(() => {
    if (props.isAuth) {
      props.history.push(`/`);
    }
  });
  const _formSubmitHandler = (evt) => {
    evt.preventDefault();
    const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );

    if (valid) {
      props.login({email, password});
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={_formSubmitHandler} data-test='test-login-sign-in'>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={true}
                  value={email}
                  onChange={onEmailChange}
                  data-test='test-email-sign-in'
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required={true}
                  value={password}
                  onChange={onPasswordChange}
                  data-test='test-password-sign-in'
                />
              </div>
              {error && <span style={{color: `red`, textAlign: `center`}}>Something went wrong</span>}
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city && city.name}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: getAuthStatus(state) === Authorization.AUTH,
    city: getCity(state),
    error: getErrorMsg(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  login(data) {
    dispatch(UserOperation.loginUser(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
export {SignIn};
