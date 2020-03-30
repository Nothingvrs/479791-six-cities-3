import React from 'react';
import PropTypes from 'prop-types';
import {cardPropTypes} from "../../utils/utils";
import {connect} from 'react-redux';
import {ActionCreator, DataOperation} from "../../reducer/data/data-reducer";

const OfferCard = (props) => {
  const {name, type, price, isInBookmark, avgMark, isPremium, id, previewImg} = props.card;
  const {onHeaderClick, nearPlace, favorite, onHover, onUnHover, onSetFavorite} = props;

  return (
    <article className= {`${nearPlace ? `near-places__card` : `cities__place-card`} ${favorite ? `favorites__card` : ``} place-card`} data-test = "test-card-hover" onMouseEnter ={() => onHover(id)} onMouseLeave = {onUnHover}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className= {`${nearPlace ? `near-places__image-wrapper` : `cities__image-wrapper`} ${favorite ? `favorites__image-wrapper` : ``} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImg} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className={`${favorite ? `favorites__card-info` : ``} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isInBookmark &&
            `place-card__bookmark-button--active`}`}
            type="button"
            onClick={() => onSetFavorite(id, !isInBookmark ? 1 : 0)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isInBookmark ? `In` : `To`} bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${20 * avgMark}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={(evt) => {
            evt.preventDefault();
            onHeaderClick(id);
          }} data-test="test-header-click">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  card: cardPropTypes,
  onHeaderClick: PropTypes.func.isRequired,
  nearPlace: PropTypes.bool,
  onHover: PropTypes.func.isRequired,
  onUnHover: PropTypes.func.isRequired,
  onSetFavorite: PropTypes.func,
  favorite: PropTypes.bool
};

const mapDispatchToProps = (dispatch) => ({
  onHover(id) {
    dispatch(ActionCreator.setHovered(id));
  },
  onUnHover() {
    dispatch(ActionCreator.resetHovered());
  },
  onSetFavorite(offerId, status) {
    dispatch(DataOperation.addToFavoriteOffer(offerId, status));
  }
});


export default connect(null, mapDispatchToProps)(OfferCard);
