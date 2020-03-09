import React from 'react';
import PropTypes from 'prop-types';
import OffersCityItem from '../offer-city-item/offer-city-item.jsx';
import withHoverItem from "../../hocs/withHoverItem";
const OffersCityItemWithHover = withHoverItem(OffersCityItem);

const OffersCities = (props) => {
  const {citiesNames, onCityNameClick, activeCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {citiesNames.map((cityName, index) => (
        <OffersCityItemWithHover
          key={`${cityName} - ${index}`}
          cityName={cityName}
          activeCity={activeCity}
          onCityNameClick={onCityNameClick}
        />
      ))}
    </ul>
  );
};

OffersCities.propTypes = {
  citiesNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCityNameClick: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired
};

export default OffersCities;
