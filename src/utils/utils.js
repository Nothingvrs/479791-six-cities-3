import PropTypes from "prop-types";

export const cardPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
  imgs: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  isInBookmark: PropTypes.bool.isRequired,
  mark: PropTypes.oneOf([...new Array(6)].map((_, i) => i)).isRequired,
  isPremium: PropTypes.bool.isRequired,
  bedroomNo: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
  facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  reviews: PropTypes.number.isRequired,
  avgMark: PropTypes.number.isRequired,
  hostUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired}).isRequired;
