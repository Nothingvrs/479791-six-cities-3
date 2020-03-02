import React from 'react';
import PropTypes from 'prop-types';
import OffersList from '../offers-list/offers-list.jsx';
import OffersMap from '../offers-map/offers-map.jsx';
import {connect} from 'react-redux';
import OffersCities from '../offers-cities/offers-cities.jsx';
import OffersFilter from '../offers-filter/offers-filter.jsx';
import {ActionCreator} from '../../reducer.jsx';

const Main = (props) => {
  const {cards, citiesNames, city, history, onCardHover, onCardUnHover, hoveredId, onChangeCity, filter, onChangeFilter, onFilterReset} = props;
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <OffersCities citiesNames={citiesNames} onCityNameClick={onChangeCity} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {cards.length > 0 ? cards.length : 0} places to stay in {city}
              </b>
              <OffersFilter filter = {filter} city = {city} onChangeFilter = {onChangeFilter} onFilterReset = {onFilterReset}/>
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  cards={cards}
                  onHeaderClick={_cardHeaderClickHandler}
                  onCardHover={onCardHover}
                  onCardUnHover={onCardUnHover}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <OffersMap cards={cards} hoveredId={hoveredId} />
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
  citiesNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string,
  onCardHover: PropTypes.func.isRequired,
  onCardUnHover: PropTypes.func.isRequired,
  hoveredId: PropTypes.number.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  onFilterReset: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const city = state.city;
  const filter = state.filterName;
  let cards = state.offers.filter((offer) => offer.city === city);

  switch (filter) {
    case `lowToHigh`:
      cards = cards.sort((card1, card2) => card1.price - card2.price);
      break;
    case `highToLow`:
      cards = cards.sort((card1, card2) => card2.price - card1.price);
      break;
    case `topRated`:
      cards = cards.sort((card1, card2) => card2.avgMark - card1.avgMark);
      break;
  }

  return {
    cards,
    city,
    citiesNames: state.citiesNames,
    hoveredId: state.hoveredId,
    filter
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
