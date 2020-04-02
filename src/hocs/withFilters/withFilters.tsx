import * as React from 'react';
import {PureComponent} from 'react';

interface OffersFilterProps {
  filter: string;
  onChangeFilter: (filterName: string) => void;
}

interface OffersFilterPropsState {
  isOpen: boolean;
}

const withFilter = (Component) => {

  class OffersFilter extends PureComponent<OffersFilterProps, OffersFilterPropsState> {
    constructor(props: OffersFilterProps) {
      super(props);
      this.state = {
        isOpen: false
      };
      this._handleFilterClick = this._handleFilterClick.bind(this);
    }

    _handleFilterClick() {
      this.setState((prevState) => ({isOpen: !prevState.isOpen}));
    }

    render() {
      return <Component {...this.props} onFilterClick={this._handleFilterClick} isOpen = {this.state.isOpen}/>;
    }
  }

  return OffersFilter;
};

export default withFilter;
