import * as React from 'react';
import OffersCityItem from '../offer-city-item/offer-city-item';
import withHoverItem from "../../hocs/withHoverItem";
import {CityModel} from "../../utils/utils";
const OffersCityItemWithHover = withHoverItem(OffersCityItem);

interface OffersCitiesProps {
  citiesNames: CityModel [];
  onCityNameClick: (city: CityModel) => void;
  activeCity: CityModel;
}

const OffersCities: React.FC <OffersCitiesProps> = (props) => {
  const {citiesNames, onCityNameClick, activeCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {citiesNames && citiesNames.map((cityName, index) => (
        <OffersCityItemWithHover
          key={`${cityName.name} - ${index}`}
          cityName={cityName}
          activeCity={activeCity}
          onCityNameClick={onCityNameClick}
        />
      ))}
    </ul>
  );
};

export default OffersCities;
