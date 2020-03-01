import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {cardPropTypes} from '../../utils/utils';
import OfferReviewList from '../offer-review-list/offer-review-list.jsx';
import OffersList from '../offers-list/offers-list.jsx';
import OffersMap from '../offers-map/offers-map.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.jsx';

class OfferCardDetail extends PureComponent {
  constructor() {
    super();
    this._cardHeaderClickHandler = this._cardHeaderClickHandler.bind(this);
  }

  _cardHeaderClickHandler(newId) {
    this.props.history.push(`/offer/${newId}`);
  }

  renderImgs(imgs) {
    return imgs.map((img, index) => (
      <div className="property__image-wrapper" key={index}>
        <img className="property__image" src={img} alt="Photo studio" />
      </div>
    ));
  }

  renderFacilities(facilities) {
    return facilities.map((facility, index) => (
      <li className="property__inside-item" key={index}>
        {facility}
      </li>
    ));
  }

  renderDescription(descriptions) {
    return descriptions.map((description, index) => (
      <p className="property__text" key={index}>
        {description}
      </p>
    ));
  }

  renderMarks(mark) {
    return [...new Array(5)]
      .map((_, i) => ++i)
      .reverse()
      .map((value, index) => (
        <React.Fragment key={index}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={value}
            id={`${value}-stars`}
            type="radio"
            defaultChecked={mark === value}
          />
          <label
            htmlFor={`${value}-stars`}
            className="reviews__rating-label form__rating-label"
            title="perfect"
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </React.Fragment>
      ));
  }

  render() {
    if (!this.props.card) {
      return null;
    } else {
      const {
        name,
        type,
        imgs,
        price,
        isInBookmark,
        mark,
        isPremium,
        bedroomNo,
        capacity,
        facilities,
        descriptions,
        avgMark,
        hostUser,
        comments,
        nearOffers
      } = this.props.card;
      const {onCardHover, onCardUnHover, hoveredId} = this.props;
      return (
        <div className="page">
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <a
                    className="header__logo-link"
                    href="#"
                    onClick={(evt) => {
                      evt.preventDefault();
                      this.props.history.push(`/`);
                    }}
                  >
                    <img
                      className="header__logo"
                      src="/img/logo.svg"
                      alt="6 cities logo"
                      width="81"
                      height="41"
                    />
                  </a>
                </div>
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__user-name user__name">
                          Oliver.conner@gmail.com
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          <main className="page__main page__main--property">
            <section className="property">
              {imgs.length > 0 && (
                <div className="property__gallery-container container">
                  <div className="property__gallery">{this.renderImgs(imgs)}</div>
                </div>
              )}

              <div className="property__container container">
                <div className="property__wrapper">
                  {isPremium && (
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                  )}

                  <div className="property__name-wrapper">
                    <h1 className="property__name">{name}</h1>
                    <button
                      className={`property__bookmark-button button ${isInBookmark &&
                      `property__bookmark-button--active`}`}
                      type="button"
                    >
                      <svg className="property__bookmark-icon" width="31" height="33">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">
                        {isInBookmark ? `In` : `To`} bookmarks
                      </span>
                    </button>
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{width: `${avgMark * 20}%`}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">{avgMark}</span>
                  </div>
                  <ul className="property__features">
                    <li className="property__feature property__feature--entire">{type}</li>
                    <li className="property__feature property__feature--bedrooms">
                      {bedroomNo} Bedroom{bedroomNo > 1 && `s`}
                    </li>
                    <li className="property__feature property__feature--adults">
                      Max {capacity} adult{capacity > 1 && `s`}
                    </li>
                  </ul>
                  <div className="property__price">
                    <b className="property__price-value">&euro;{price}</b>
                    <span className="property__price-text">&nbsp;night</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      {facilities && this.renderFacilities(facilities)}
                    </ul>
                  </div>
                  <div className="property__host">
                    <h2 className="property__host-title">Meet the host</h2>
                    <div className="property__host-user user">
                      <div
                        className={`property__avatar-wrapper ${hostUser.status === `pro` &&
                        `property__avatar-wrapper--pro`} user__avatar-wrapper`}
                      >
                        <img
                          className="property__avatar user__avatar"
                          src={hostUser.img}
                          width="74"
                          height="74"
                          alt="Host avatar"
                        />
                      </div>
                      <span className="property__user-name">{hostUser.name}</span>
                    </div>
                    <div className="property__description">
                      {this.renderDescription(descriptions)}
                    </div>
                  </div>
                  <section className="property__reviews reviews">
                    <h2 className="reviews__title">
                      Review{comments.length > 1 && `s`} &middot;{` `}
                      <span className="reviews__amount">
                        {comments.length === 0 ? `Be the first!` : comments.length}
                      </span>
                    </h2>
                    <OfferReviewList comments={comments} />
                    <form className="reviews__form form" action="#" method="post">
                      <label className="reviews__label form__label" htmlFor="review">
                        Your review
                      </label>
                      <div className="reviews__rating-form form__rating">
                        {this.renderMarks(mark)}
                      </div>
                      <textarea
                        className="reviews__textarea form__textarea"
                        id="review"
                        name="review"
                        placeholder="Tell how was your stay, what you like and what can be improved"
                      ></textarea>
                      <div className="reviews__button-wrapper">
                        <p className="reviews__help">
                          To submit review please make sure to set{` `}
                          <span className="reviews__star">rating</span> and describe your stay with
                          at least <b className="reviews__text-amount">50 characters</b>.
                        </p>
                        <button
                          className="reviews__submit form__submit button"
                          type="submit"
                          disabled=""
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </section>
                </div>
              </div>
              <OffersMap cards={nearOffers} nearPlace hoveredId={hoveredId} />
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <OffersList
                    cards={nearOffers}
                    nearPlace
                    onCardHover={onCardHover}
                    onCardUnHover={onCardUnHover}
                    onHeaderClick={this._cardHeaderClickHandler}
                  />
                </div>
              </section>
            </div>
          </main>
        </div>
      );
    }
  }
}

OfferCardDetail.propTypes = {
  card: cardPropTypes,
  history: PropTypes.object,
  match: PropTypes.object,
  onCardHover: PropTypes.func.isRequired,
  onCardUnHover: PropTypes.func.isRequired,
  hoveredId: PropTypes.number.isRequired
};

const mapStateToProps = (state, props) => {
  const getOfferById = (initialOffers, id) => {
    const offer = initialOffers.find((newOffer) => newOffer.id === Number(id));
    if (!offer) {
      return null;
    }
    const newOffer = Object.assign({}, offer);
    newOffer.nearOffers = offer.nearOffers.map((offerId) =>
      initialOffers.find((offerItem) => offerItem.id === offerId)
    );
    return newOffer;
  };

  const id = props.match.params.id;
  const card = getOfferById(state.offers, id);
  if (!card) {
    props.history.push(`/`);
  }

  return {
    card,
    hoveredId: state.hoveredId
  };
};
const mapDispatchToProps = (dispatch) => ({
  onCardHover(id) {
    dispatch(ActionCreator.setHovered(id));
  },
  onCardUnHover() {
    dispatch(ActionCreator.resetHovered());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferCardDetail);
