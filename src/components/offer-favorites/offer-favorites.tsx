import * as React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {DataOperation} from "../../reducer/data/data-reducer";
import {getError, getFavoriteOffersPerCity} from "../../reducer/data/data-selectors";
import {getAuthStatus, isAuthResponseReceived} from "../../reducer/user/user-selector";
import {Authorization} from "../../reducer/user/user-reducer";
import OffersList from "../offers-list/offers-list";
import {Link} from "react-router-dom";
import {CardModel} from "../../utils/utils";

interface OffersPerCity {
  city: string;
  cards: CardModel [];
}
interface OffersFavoritesProps {
  onMount: () => void;
  favoriteOffersPerCity: OffersPerCity [];
  error: string;
}

const OffersFavorites: React.FC <OffersFavoritesProps> = (props) => {
  const {onMount, favoriteOffersPerCity, error} = props;
  useEffect(() => {
    onMount();
  }, [onMount]);

  return (
    <div className="page">
      <header className="header">
        {error && <span style={{display: `block`, margin: `0 auto`, paddingTop: 20, color: `red`, textAlign: `center`, fontSize: 20}}>Something went wrong</span> }
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
          {favoriteOffersPerCity && favoriteOffersPerCity.length > 0 ? <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <ul className="favorites__list">

              {favoriteOffersPerCity && favoriteOffersPerCity.map((offersPerCity, index) => (<li className="favorites__locations-items" key = {`${offersPerCity.city} - ${index}` }>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{offersPerCity.city}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <OffersList favorite cards = {offersPerCity.cards} />
                </div>
              </li>))}

            </ul>
          </section> : <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan yor future
                trips.</p>
            </div>
          </section>}

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


const mapDispatchToProps = (dispatch) => ({
  onMount() {
    dispatch(DataOperation.loadFavoriteOffers());
  }
});

const mapStateToProps = (state) => ({
  isAuth: getAuthStatus(state) === Authorization.AUTH && isAuthResponseReceived(state),
  favoriteOffersPerCity: getFavoriteOffersPerCity(state),
  error: getError(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(OffersFavorites);

export {OffersFavorites};
