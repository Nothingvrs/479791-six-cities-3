import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const FILTERS = {
  popular: `Popular`,
  lowToHigh: `Price: low to high`,
  highToLow: `Price: high to low`,
  topRated: `Top rated first`
};

class OffersFilter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this._filterOpenHandler = this._filterOpenHandler.bind(this);
  }

  _setActiveFilter(filter) {
    this.setState((prevState) => ({isOpen: !prevState}));
    this.props.onChangeFilter(filter);
  }

  _filterOpenHandler() {
    this.setState((prevState) => ({isOpen: !prevState.isOpen}));
  }

  _renderFilters() {
    return Object.keys(FILTERS).map((filter, index) => (
      <li
        className={`places__option ${filter === this.props.filter && `places__option--active`}`}
        tabIndex="0"
        onClick={() => this._setActiveFilter(filter)}
        key={`${filter} - ${index}`}
        data-test="test-filter-click"
      >
        {FILTERS[filter]}
      </li>
    ));
  }

  render() {
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this._filterOpenHandler}>
          {FILTERS[this.props.filter]}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul
          className={`places__options places__options--custom places__options--${
            this.state.isOpen ? `opened` : `custom`
          }`}
        >
          {this._renderFilters()}
        </ul>
      </form>
    );
  }
}

OffersFilter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  onFilterReset: PropTypes.func.isRequired,
  city: PropTypes.string,
  filter: PropTypes.string.isRequired
};

export default OffersFilter;
