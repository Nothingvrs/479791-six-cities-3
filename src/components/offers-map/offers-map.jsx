import React, {PureComponent, createRef} from 'react';
import leaflet from 'leaflet';
import {cardPropTypes} from '../../utils/utils';
import PropTypes from 'prop-types';

const hoveredIcon = leaflet.icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [30, 30]
});
let icon = leaflet.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [30, 30]
});

class OffersMap extends PureComponent {
  constructor(props) {
    super(props);
    this.markers = {};
    this._mapDiv = createRef();
  }

  componentDidMount() {
    const city = [this.props.city.location.latitude, this.props.city.location.longitude];

    const zoom = this.props.city.location.zoom;
    this.map = leaflet.map(this._mapDiv.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    this.layerGroup = leaflet.layerGroup().addTo(this.map);

    if (this.props.nearPlace) {
      leaflet.marker(city, {icon: hoveredIcon}).addTo(this.layerGroup);
    }
    this.props.cards.forEach((card) =>
      leaflet.marker(card.addressCoords, {icon}).addTo(this.layerGroup)
    );
  }

  componentDidUpdate() {
    const city = [this.props.city.location.latitude, this.props.city.location.longitude];
    const zoom = this.props.city.location.zoom;
    this.map.setView(city, zoom);
    const {hoveredId} = this.props;

    this.layerGroup.clearLayers();

    if (this.props.nearPlace) {
      leaflet.marker(city, {icon: hoveredIcon}).addTo(this.layerGroup);
    }
    this.markers = this.props.cards.forEach((card) => {
      let newIcon = icon;
      if (card.id === hoveredId) {
        newIcon = hoveredIcon;
      }
      return leaflet.marker(card.addressCoords, {icon: newIcon}).addTo(this.layerGroup);
    });
  }

  render() {
    return (
      <section
        ref={this._mapDiv}
        className={`${this.props.nearPlace ? `property__map` : `cities__map`} map`}
      />
    );
  }
}

OffersMap.propTypes = {
  cards: PropTypes.arrayOf(cardPropTypes).isRequired,
  nearPlace: PropTypes.bool,
  hoveredId: PropTypes.number.isRequired,
  city: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  })
};

export default OffersMap;
