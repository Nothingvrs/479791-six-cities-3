import React from 'react';
import PropTypes from 'prop-types';

const OffersCityItem = (props) => {
  const {cityName, onCityNameClick, activeCity, hovered, onHover, onUnHover} = props;

  return (
    <li className="locations__item" style={hovered ? {textShadow: `1px 0 0,.5px 0 0,-1px 0 0`} : {}} onMouseEnter={onHover} onMouseLeave = {onUnHover}>
      <a
        className={`locations__item-link tabs__item ${cityName === activeCity ? `tabs__item--active` : ``}`}
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
  );
};

OffersCityItem.propTypes = {
  cityName: PropTypes.string.isRequired,
  onCityNameClick: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
  hovered: PropTypes.bool.isRequired,
  onHover: PropTypes.func.isRequired,
  onUnHover: PropTypes.func.isRequired
};

export default OffersCityItem;
