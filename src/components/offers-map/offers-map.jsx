import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import {cardPropTypes} from '../../utils/utils';
import PropTypes from 'prop-types';

class OffersMap extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(`leafletmap`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    this.props.cards.forEach((card) => leaflet.marker(card.addressCoords, {icon}).addTo(map));
  }

  render() {
    return <div id="leafletmap" style={{width: `100%`, height: `100%`}}></div>;
  }
}

OffersMap.propTypes = {
  cards: PropTypes.arrayOf(cardPropTypes).isRequired
};

export default OffersMap;
