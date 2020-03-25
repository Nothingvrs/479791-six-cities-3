import PropTypes from 'prop-types';

export const cardPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  imgs: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  isInBookmark: PropTypes.bool.isRequired,
  mark: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
  bedroomNo: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
  facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  reviews: PropTypes.number.isRequired,
  avgMark: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        authorImg: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        mark: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired
      })
  ).isRequired,
  hostUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired
  }).isRequired
});

export const commentShape = {
  author: PropTypes.string.isRequired,
  authorImg: PropTypes.string,
  comment: PropTypes.string.isRequired,
  mark: PropTypes.number,
  date: PropTypes.string.isRequired
};

export const offerAdapter = (offer) => {
  return {
    id: offer.id,
    name: offer.title,
    type: offer.type.charAt(0).toUpperCase() + offer.type.slice(1),
    previewImg: offer.preview_image,
    imgs: offer.images,
    price: offer.price,
    isInBookmark: offer.is_favorite,
    mark: offer.rating,
    isPremium: offer.is_premium,
    bedroomNo: offer.bedrooms,
    capacity: offer.max_adults,
    facilities: offer.goods,
    descriptions: [offer.description],
    reviews: 2,
    avgMark: 4.5,
    hostUser: {
      id: offer.host.id,
      name: offer.host.name,
      img: offer.host.avatar_url,
      isPro: offer.host.is_pro
    },
    addressCoords: [offer.location.latitude, offer.location.longitude],
    comments: [
      {
        id: 1,
        author: `Max`,
        authorImg: `/img/avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        mark: 4,
        date: `2020-01-26T13:51:50.417Z`
      },
      {
        id: 2,
        author: `Max`,
        authorImg: `/img/avatar-max.jpg`,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        mark: 4,
        date: `2020-01-26T13:51:50.417Z`
      }
    ],
    city: offer.city
  };
};
