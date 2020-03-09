import React from 'react';
import PropTypes from 'prop-types';

const FILTERS = {
  popular: `Popular`,
  lowToHigh: `Price: low to high`,
  highToLow: `Price: high to low`,
  topRated: `Top rated first`
};

const OffersFilter = (props) => {

  const _setActiveFilterHandler = (filter) => {
    props.onActiveFilterSet();
    props.onChangeFilter(filter);
  };

  const _renderFilters = () => {
    return Object.keys(FILTERS).map((filter, index) => (
      <li
        className={`places__option ${filter === props.filter && `places__option--active`}`}
        tabIndex="0"
        onClick={() => _setActiveFilterHandler(filter)}
        key={`${filter} - ${index}`}
        data-test="test-filter-click"
      >
        {FILTERS[filter]}
      </li>
    ));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={props.onFilterOpen}>
        {FILTERS[props.filter]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom places__options--${
          props.isOpen ? `opened` : `custom`
        }`}
      >
        {_renderFilters()}
      </ul>
    </form>
  );
};

OffersFilter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onActiveFilterSet: PropTypes.func.isRequired,
  onFilterOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default OffersFilter;
