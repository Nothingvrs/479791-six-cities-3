import * as React from 'react';
import {PureComponent, createRef} from 'react';
import * as leaflet from 'leaflet';
import {CardModel, CityModel} from '../../utils/utils';
import {LayerGroup, Map} from "leaflet";

const hoveredIcon = leaflet.icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [30, 30]
});
const icon = leaflet.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [30, 30]
});

interface OffersMapProps {
  cards: CardModel [];
  nearPlace?: boolean;
  hoveredId: number;
  city: CityModel;
}

class OffersMap extends PureComponent <OffersMapProps, {}> {
  private map: Map;
  private layerGroup: LayerGroup;
  private readonly mapDiv: React.RefObject<HTMLElement>;
  constructor(props: OffersMapProps) {
    super(props);
    this.mapDiv = createRef();
  }

  componentDidMount() {
    const city: [number, number] = [this.props.city.location.latitude, this.props.city.location.longitude];

    const zoom = this.props.city.location.zoom;
    this.map = leaflet.map(this.mapDiv.current, {
      center: city,
      zoom,
      zoomControl: false,
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
    const city: [number, number] = [this.props.city.location.latitude, this.props.city.location.longitude];
    const zoom = this.props.city.location.zoom;
    this.map.setView(city, zoom);
    const {hoveredId} = this.props;

    this.layerGroup.clearLayers();

    if (this.props.nearPlace) {
      leaflet.marker(city, {icon: hoveredIcon}).addTo(this.layerGroup);
    }
    this.props.cards.forEach((card) => {
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
        ref={this.mapDiv}
        className={`${this.props.nearPlace ? `property__map` : `cities__map`} map`}
      />
    );
  }
}


export default OffersMap;
