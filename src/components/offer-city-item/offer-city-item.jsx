import React from 'react';
import PropTypes from 'prop-types';

const OffersCityItem = (props) => {
  const {cityName, onCityNameClick, activeCity, hovered, onHover, onUnHover} = props;

  return (
    <li className="locations__item" style={hovered ? {textShadow: `1px 0 0,.5px 0 0,-1px 0 0`} : {}} onMouseEnter={onHover} onMouseLeave = {onUnHover}>
      <a
        className={`locations__item-link tabs__item ${cityName.name === activeCity.name ? `tabs__item--active` : ``}`}
        onClick={(evt) => {
          evt.preventDefault();
          onCityNameClick(cityName);
        }}
        data-test="test-city-click"
      >
        <span>{cityName.name}</span>
      </a>
    </li>
  );
};

OffersCityItem.propTypes = {
  cityName: PropTypes.object.isRequired,
  onCityNameClick: PropTypes.func.isRequired,
  activeCity: PropTypes.object.isRequired,
  hovered: PropTypes.bool.isRequired,
  onHover: PropTypes.func.isRequired,
  onUnHover: PropTypes.func.isRequired
};

export default OffersCityItem;
