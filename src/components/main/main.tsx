import * as React from 'react';
import OffersList from '../offers-list/offers-list';
import OffersMap from '../offers-map/offers-map';
import {connect} from 'react-redux';
import OffersCities from '../offers-cities/offers-cities';
import OffersFilter from '../offers-filter/offers-filter';
import MainEmpty from '../main-empty/main-empty';
import {ActionCreator} from '../../reducer/data/data-reducer';
import withFilter from '../../hocs/withFilters';
import {
  getCards,
  getCitiesFromState,
  getCity,
  getError,
  getFilter,
  getHoveredId
} from "../../reducer/data/data-selectors";
import {getUserData} from "../../reducer/user/user-selector";
import {Link} from "react-router-dom";
import {CardModel, CityModel, UserModel} from "../../utils/utils";

const OffersWithFilter = withFilter(OffersFilter);

interface MainProps {
  cards: CardModel [];
  citiesNames: CityModel[];
  city: CityModel;
  hoveredId: number;
  onChangeCity: (cityName: CityModel) => void;
  filter: string;
  onChangeFilter: (filterName: string) => void;
  user: UserModel;
  error: string;
}

const Main: React.FC <MainProps> = (props) => {
  const {
    cards,
    citiesNames,
    city,
    hoveredId,
    onChangeCity,
    filter,
    onChangeFilter,
    user,
    error
  } = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        {error && <span style={{display: `block`, margin: `0 auto`, paddingTop: 20, color: `red`, textAlign: `center`, fontSize: 20}}>Something went wrong</span> }
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
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
                  <Link className="header__nav-link header__nav-link--profile" to={`${user ? `/favorite` : `/login`}`} >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    {user ? <span className="header__user-name user__name">{user.email}</span> : <span className="header__login">Sign in</span>}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main
        className={`page__main page__main--index ${
          cards.length === 0 ? `page__main--index-empty` : ``
        }`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <OffersCities
              citiesNames={citiesNames}
              onCityNameClick={onChangeCity}
              activeCity={city ? city : null}
            />
          </section>
        </div>
        <div className="cities">
          <div
            className={`cities__places-container container ${
              cards.length === 0 ? `cities__places-container--empty` : ``
            }`}
          >
            <section
              className={`${cards.length === 0 ? `cities__no-places` : `cities__places places`}`}
            >
              {cards.length === 0 ? (
                <MainEmpty />
              ) : (
                <React.Fragment>
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {cards.length > 0 ? cards.length : 0} places to stay in {city.name}
                  </b>
                  <OffersWithFilter filter={filter} onChangeFilter={onChangeFilter} />
                  <div className="cities__places-list places__list tabs__content">
                    <OffersList
                      cards={cards}
                    />
                  </div>
                </React.Fragment>
              )}
            </section>
            <div className="cities__right-section">
              {cards.length > 0 && <OffersMap cards={cards} hoveredId={hoveredId} city = {city}/>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );

};

const mapStateToProps = (state) => {

  return {
    cards: getCards(state),
    city: getCity(state),
    citiesNames: getCitiesFromState(state),
    hoveredId: getHoveredId(state),
    filter: getFilter(state),
    user: getUserData(state),
    error: getError(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(cityName) {
    dispatch(ActionCreator.setCity(cityName));
  },
  onChangeFilter(filterName) {
    dispatch(ActionCreator.setFilter(filterName));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
