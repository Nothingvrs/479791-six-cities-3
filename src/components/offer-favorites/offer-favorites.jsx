import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {DataOperation} from "../../reducer/data/data-reducer";
import {getFavoriteOffersPerCity} from "../../reducer/data/data-selectors";
import {getAuthStatus, isAuthResponseReceived} from "../../reducer/user/user-selector";
import {Authorization} from "../../reducer/user/user-reducer";
import OffersList from "../offers-list/offers-list.jsx";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const OffersFavorites = (props) => {
  const {onMount, isAuth, favoriteOffersPerCity} = props;
  useEffect(() => {
    onMount();
  }, [onMount]);

  useEffect(() => {
    if (!isAuth) {
      props.history.push(`/login`);
    }
  }, [isAuth]);

  const _cardHeaderClickHandler = (newId) => {
    props.history.push(`/offer/${newId}`);
  };


  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link">
                <img
                  className="header__logo"
                  src="/img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <ul className="favorites__list">

              {favoriteOffersPerCity && favoriteOffersPerCity.map((offersPerCity, index) => (<li className="favorites__locations-items" key = {`${Object.keys(offersPerCity)[0]} - ${index}` }>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{Object.keys(offersPerCity)[0]}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <OffersList favorite cards = {offersPerCity[Object.keys(offersPerCity)[0]]} onHeaderClick = {_cardHeaderClickHandler}/>
                </div>
              </li>))}

            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <Link to="/" className="footer__logo-link">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
};


OffersFavorites.propTypes = {
  onMount: PropTypes.func,
  isAuth: PropTypes.bool,
  favoriteOffersPerCity: PropTypes.arrayOf(PropTypes.object),
  isAuthResponseReceived: PropTypes.bool,
  history: PropTypes.object
};

const mapDispatchToProps = (dispatch) => ({
  onMount() {
    dispatch(DataOperation.loadFavoriteOffers());
  }
});

const mapStateToProps = (state) => ({
  isAuth: getAuthStatus(state) === Authorization.AUTH && isAuthResponseReceived(state),
  favoriteOffersPerCity: getFavoriteOffersPerCity(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(OffersFavorites);
