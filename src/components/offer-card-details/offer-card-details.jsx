import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {cardPropTypes, commentShape, userShape} from '../../utils/utils';
import OffersList from '../offers-list/offers-list.jsx';
import OffersMap from '../offers-map/offers-map.jsx';
import {connect} from 'react-redux';
import {DataOperation} from '../../reducer/data/data-reducer';
import OfferComments from '../offer-comments/offer-comments.jsx';
import {
  getCommentsFromState,
  getHoveredId, getIsInBookmark,
  getIsLoaded,
  getOfferById,
} from '../../reducer/data/data-selectors';
import {Link} from 'react-router-dom';
import {getIsAuth, getUserData} from '../../reducer/user/user-selector';

const OfferCardDetail = (props) => {
  const {comments, onMount, user, isAuth, onSetFavorite, hoveredId} = props;
  useEffect(() => {
    onMount(props.match.params.id);
  }, [props.match.params.id, onMount]);

  if (!props.card && props.isLoaded) {
    props.history.push(`/`);
    return null;
  } else if (!props.card) {
    return null;
  }

  const {
    name,
    type,
    imgs,
    price,
    isInBookmark,
    isPremium,
    bedroomNo,
    capacity,
    facilities,
    descriptions,
    avgMark,
    hostUser,
    nearOffers,
    addressCoords,
    id
  } = props.card;

  const _cardHeaderClickHandler = (newId) => {
    props.history.push(`/offer/${newId}`);
  };

  const _renderImgs = () => {
    return imgs.map((img, index) => (
      <div className="property__image-wrapper" key={index}>
        <img className="property__image" src={img} alt="Photo studio" />
      </div>
    ));
  };

  const _renderFacilities = () => {
    return facilities.map((facility, index) => (
      <li className="property__inside-item" key={index}>
        {facility}
      </li>
    ));
  };

  const _renderDescription = () => {
    return descriptions.map((description, index) => (
      <p className="property__text" key={index}>
        {description}
      </p>
    ));
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link">
                <img
                  className="header__logo"
                  src="/img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={`${user ? `/favorite` : `/login`}`} >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    {user ? <span className="header__user-name user__name">{user.email}</span> : <span className="header__login">Sign in</span>}
                  </Link>
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
              <div className="property__gallery">{_renderImgs()}</div>
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
                  onClick={() => onSetFavorite(id, !isInBookmark ? 1 : 0)}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{isInBookmark ? `In` : `To`} bookmarks</span>
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
                <ul className="property__inside-list">{facilities && _renderFacilities()}</ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={`property__avatar-wrapper ${
                      hostUser.isPro ? `property__avatar-wrapper--pro` : ``
                    } user__avatar-wrapper`}
                  >
                    <img
                      className="property__avatar user__avatar"
                      src={`/${hostUser.img}`}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{hostUser.name}</span>
                </div>
                <div className="property__description">{_renderDescription(descriptions)}</div>
              </div>
              <OfferComments comments={comments} id={id} isAuth = {isAuth}/>
            </div>
          </div>
          <OffersMap
            cards={nearOffers}
            nearPlace
            hoveredId={hoveredId}
            city={{location: {latitude: addressCoords[0], longitude: addressCoords[1], zoom: 13}}}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList
                cards={nearOffers}
                nearPlace
                onHeaderClick={_cardHeaderClickHandler}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

OfferCardDetail.propTypes = {
  card: cardPropTypes,
  history: PropTypes.object,
  match: PropTypes.object,
  hoveredId: PropTypes.number.isRequired,
  isLoaded: PropTypes.bool,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)),
  user: PropTypes.shape(userShape),
  onMount: PropTypes.func,
  isAuth: PropTypes.bool,
  onSetFavorite: PropTypes.func
};

const mapStateToProps = (state, props) => {
  return {
    card: getOfferById(state, props),
    hoveredId: getHoveredId(state),
    isLoaded: getIsLoaded(state),
    comments: getCommentsFromState(state),
    user: getUserData(state),
    isAuth: getIsAuth(state),
    isInBookmark: getIsInBookmark(state, props)
  };
};
const mapDispatchToProps = (dispatch) => ({
  onMount(id) {
    dispatch(DataOperation.loadComments(id));
  },
  onSetFavorite(offerId, status) {
    dispatch(DataOperation.addToFavoriteOffer(offerId, status));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferCardDetail);
