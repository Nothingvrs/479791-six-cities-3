import React from 'react';
import PropTypes from 'prop-types';
import OffersList from '../offers-list/offers-list.jsx';
import OffersMap from '../offers-map/offers-map.jsx';
import {connect} from 'react-redux';
import OffersCities from '../offers-cities/offers-cities.jsx';
import OffersFilter from '../offers-filter/offers-filter.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';
import {ActionCreator} from '../../reducer/reducer.jsx';
import withFilter from '../../hocs/withFilters';
import {getCards, getCitiesFromState, getCity, getFilter, getHoveredId} from "../../reducer/data/selectors";

const OffersWithFilter = withFilter(OffersFilter);
const Main = (props) => {
  const {
    cards,
    citiesNames,
    city,
    onCardHover,
    onCardUnHover,
    hoveredId,
    onChangeCity,
    filter,
    onChangeFilter
  } = props;
  const history = props.history;
  const _cardHeaderClickHandler = (id) => {
    history.push(`/offer/${id}`);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
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
              activeCity={city ? city : {}}
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
                      onHeaderClick={_cardHeaderClickHandler}
                      onCardHover={onCardHover}
                      onCardUnHover={onCardUnHover}
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

Main.propTypes = {
  cards: PropTypes.array.isRequired,
  history: PropTypes.object,
  citiesNames: PropTypes.arrayOf(PropTypes.object),
  city: PropTypes.object,
  onCardHover: PropTypes.func.isRequired,
  onCardUnHover: PropTypes.func.isRequired,
  hoveredId: PropTypes.number.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {


  return {
    cards: getCards(state),
    city: getCity(state),
    citiesNames: getCitiesFromState(state),
    hoveredId: getHoveredId(state),
    filter: getFilter(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCardHover(id) {
    dispatch(ActionCreator.setHovered(id));
  },
  onCardUnHover() {
    dispatch(ActionCreator.resetHovered());
  },
  onChangeCity(cityName) {
    dispatch(ActionCreator.setCity(cityName));
  },
  onChangeFilter(filterName) {
    dispatch(ActionCreator.setFilter(filterName));
  },
  onFilterReset() {
    dispatch(ActionCreator.resetFilter());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
