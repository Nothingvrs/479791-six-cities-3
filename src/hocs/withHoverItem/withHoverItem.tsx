import * as React from 'react';
import {PureComponent} from 'react';
import {CardModel, CityModel} from "../../utils/utils";

interface WithHoverItemProps {
  onHover?: (id: number) => void;
  onUnHover?: () => void;
  cityName?: CityModel;
  activeCity?: CityModel;
  onCityNameClick?: (city: CityModel) => void;
  card?: CardModel;
  nearPlace?: boolean;
  favorite?: boolean;
}

interface WithHoverItemState {
  isHovered: boolean;
}


const withHoverItem = (Component) => {
  class WithHoverItem extends PureComponent <WithHoverItemProps, WithHoverItemState> {
    constructor(props: WithHoverItemProps) {
      super(props);
      this.state = {
        isHovered: false
      };
      this._handleCityMouseEnter = this._handleCityMouseEnter.bind(this);
      this._handleCityMouseLeave = this._handleCityMouseLeave.bind(this);
    }

    _handleCityMouseEnter() {
      this.setState({isHovered: true});
    }

    _handleCityMouseLeave() {
      this.setState({isHovered: false});
    }

    render() {
      return (
        <Component
          {...this.props}
          onHover={this._handleCityMouseEnter}
          onUnHover={this._handleCityMouseLeave}
          hovered={this.state.isHovered}
        />
      );
    }
  }

  return WithHoverItem;
};

export default withHoverItem;
