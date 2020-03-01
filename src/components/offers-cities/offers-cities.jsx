import React from 'react';
import PropTypes from 'prop-types';

const OffersCities = (props) => {
  const {citiesNames, onCityNameClick} = props;


  return (
    <ul className="locations__list tabs__list">
      {citiesNames.map((cityName, index) => (
        <li className="locations__item" key={`${cityName} - ${index}`}>
          <a
            className="locations__item-link tabs__item"
            href={cityName}
            onClick={(evt) => {
              evt.preventDefault();
              onCityNameClick(cityName);
            }}
            data-test="test-city-click"
          >
            <span>{cityName}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

OffersCities.propTypes = {
  citiesNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCityNameClick: PropTypes.func.isRequired
};

export default OffersCities;
