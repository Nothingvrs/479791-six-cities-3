import React from 'react';
import PropTypes from 'prop-types';

const OfferCard = (props) => {
  const {name, type, img, price, isInBookmark, mark, isPremium} = props.card;
  const {onCardHover} = props;
  return (
    <article className="cities__place-card place-card" onMouseOver={onCardHover} data-test = "test-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={img} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isInBookmark &&
            `place-card__bookmark-button--active`}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${20 * mark}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" data-test="test-header">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isInBookmark: PropTypes.bool.isRequired,
    mark: PropTypes.oneOf([...(new Array(6))].map((_, i) => i)).isRequired,
    isPremium: PropTypes.bool.isRequired
  }).isRequired,
  onCardHover: PropTypes.func.isRequired
};

export default OfferCard;
