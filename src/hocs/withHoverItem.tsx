import * as React from 'react';
import {PureComponent} from 'react';
import {CardModel, CityModel} from "../utils/utils";

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
  isHovered: boolean
}


const withHoverItem = (Component) => {
  class WithHoverItem extends PureComponent <WithHoverItemProps, WithHoverItemState> {
    constructor(props: WithHoverItemProps) {
      super(props);
      this.state = {
        isHovered: false
      };
      this.hoverHandler = this.hoverHandler.bind(this);
      this.unHoverHandler = this.unHoverHandler.bind(this);
    }

    hoverHandler(param) {
      this.setState({isHovered: true});
      if (this.props.onHover) {
        this.props.onHover(param);
      }
    }

    unHoverHandler() {
      this.setState({isHovered: false});
      if (this.props.onUnHover) {
        this.props.onUnHover();
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          onHover={this.hoverHandler}
          onUnHover={this.unHoverHandler}
          hovered={this.state.isHovered}
        />
      );
    }
  }

  return WithHoverItem;
};

export default withHoverItem;
