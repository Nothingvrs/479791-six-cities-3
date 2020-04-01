import * as React from 'react';
import {CardModel} from '../../utils/utils';
import {connect} from 'react-redux';
import {ActionCreator, DataOperation} from '../../reducer/data/data-reducer';
import {getAuthStatus} from '../../reducer/user/user-selector';
import {withRouter} from 'react-router';
import {Authorization} from '../../reducer/user/user-reducer';
import {Link, RouteComponentProps} from 'react-router-dom';

interface OfferCardProps {
  card: CardModel;
  nearPlace: boolean;
  onHover: (id: number) => void;
  onUnHover: () => void;
  onSetFavorite: (id: number, status: boolean) => void;
  favorite: boolean;
  isAuth: boolean;
}

const OfferCard: React.FC <OfferCardProps & RouteComponentProps> = (props) => {
  const {name, type, price, isInBookmark, mark, isPremium, id, previewImg} = props.card;
  const {
    nearPlace,
    favorite,
    onHover,
    onUnHover,
    onSetFavorite,
    isAuth,
  } = props;

  return (
    <article
      className={`${nearPlace ? `near-places__card` : `cities__place-card`} ${
        favorite ? `favorites__card` : ``
      } place-card`}
      data-test="test-card-hover"
      onMouseEnter={nearPlace || nearPlace ? () => undefined : () => onHover(id)}
      onMouseLeave={nearPlace || nearPlace ? () => undefined : onUnHover}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div
        className={`${nearPlace ? `near-places__image-wrapper` : `cities__image-wrapper`} ${
          favorite ? `favorites__image-wrapper` : ``
        } place-card__image-wrapper`}
      >
        <a href="#">
          <img
            className="place-card__image"
            src={previewImg}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className={`${favorite ? `favorites__card-info` : ``} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Link to={!isAuth ? `/login` : `#`} onClick={() => {
            onSetFavorite(id, isInBookmark);
          }}>
            <button
              className={`place-card__bookmark-button button ${isInBookmark &&
              `place-card__bookmark-button--active`}`}
              type="button"

            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"/>
              </svg>
              <span className="visually-hidden">{isInBookmark ? `In` : `To`} bookmarks</span>
            </button>
          </Link>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${20 * Math.round(mark)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}
                href="#"
                data-test="test-header-click"
          >
            {name}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
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

const mapStateToProps = (state) => ({isAuth: getAuthStatus(state) === Authorization.AUTH});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OfferCard));
