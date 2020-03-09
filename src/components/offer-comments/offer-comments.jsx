import React from 'react';
import OfferReviewList from '../offer-review-list/offer-review-list.jsx';
import PropTypes from "prop-types";

const OfferComments = (props) => {
  const {comments, mark} = props;

  const _renderMarks = () =>
    [...new Array(5)]
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

  return (
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
        <div className="reviews__rating-form form__rating">{_renderMarks(mark)}</div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
        ></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set{` `}
            <span className="reviews__star">rating</span> and describe your stay with at least
            <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

OfferComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    authorImg: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    mark: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired
  })),
  mark: PropTypes.number
};

export default OfferComments;
