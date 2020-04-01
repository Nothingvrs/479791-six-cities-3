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
      this._filterOpenHandler = this._filterOpenHandler.bind(this);
      this._setActiveFilter = this._setActiveFilter.bind(this);
    }

    _setActiveFilter() {
      this.setState((prevState) => ({isOpen: !prevState.isOpen}));
    }

    _filterOpenHandler() {
      this.setState((prevState) => ({isOpen: !prevState.isOpen}));
    }

    render() {
      return <Component {...this.props} onFilterOpen={this._filterOpenHandler} onActiveFilterSet = {this._setActiveFilter} isOpen = {this.state.isOpen}/>;
    }
  }

  return OffersFilter;
};

export default withFilter;
