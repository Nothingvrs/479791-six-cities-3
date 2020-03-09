import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withHoverItem = (Component) => {
  class WithHoverItem extends PureComponent {
    constructor(props) {
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
  WithHoverItem.propTypes = {
    onHover: PropTypes.func,
    onUnHover: PropTypes.func
  };

  return WithHoverItem;
};

export default withHoverItem;

