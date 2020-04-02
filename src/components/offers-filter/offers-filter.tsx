import * as React from 'react';

const FILTERS = {
  popular: `Popular`,
  lowToHigh: `Price: low to high`,
  highToLow: `Price: high to low`,
  topRated: `Top rated first`
};

interface OffersFilterProps {
  onChangeFilter: (filterName: string) => void;
  filter: string;
  onFilterClick: () => void;
  isOpen: boolean;
}

const OffersFilter: React.FC <OffersFilterProps> = (props) => {

  const _setActiveFilterHandler = (filter) => {
    props.onFilterClick();
    props.onChangeFilter(filter);
  };

  const _renderFilters = () => {
    return Object.keys(FILTERS).map((filter, index) => (
      <li
        className={`places__option ${filter === props.filter && `places__option--active`}`}
        tabIndex={0}
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
      <span className="places__sorting-type" tabIndex= {0} onClick={props.onFilterClick}>
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

export default OffersFilter;
