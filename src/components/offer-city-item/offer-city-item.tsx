import * as React from 'react';
import {CityModel} from "../../utils/utils";

interface OffersCityItemProps {
  cityName: CityModel;
  onCityNameClick: (city: CityModel) => void;
  activeCity: CityModel;
  hovered: boolean;
  onHover: (evt: React.SyntheticEvent) => void;
  onUnHover: () => void;
}

const OffersCityItem: React.FC <OffersCityItemProps> = (props) => {
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

export default OffersCityItem;
