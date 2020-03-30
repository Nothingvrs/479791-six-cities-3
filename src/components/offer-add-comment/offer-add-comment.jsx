import React from 'react';
import {connect} from 'react-redux';
import {DataOperation} from '../../reducer/data/data-reducer';
import PropTypes from 'prop-types';

const OfferAddComment = (props) => {
  const {
    mark,
    onMarkSet,
    comment,
    onCommentSet,
    addComment,
    id,
    resetComments,
    validationSet,
    isValid
  } = props;
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
            onChange={() => onMarkSet(value)}
            checked={mark === value}
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

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    if (comment.length > 50 && comment.length < 300) {
      addComment(id, {comment, rating: mark});
      resetComments();
    } else {
      validationSet(false);
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={formSubmitHandler}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">{_renderMarks()}</div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onCommentSet}
        value={comment}
        data-test="test-add-comment"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{` `}
          <span className="reviews__star">rating</span> and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        {!isValid && <span style={{color: `red`, textAlign: `center`}}>Check Your Data!!!</span>}
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={mark === 0 || comment.length === 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

OfferAddComment.propTypes = {
  mark: PropTypes.number,
  onMarkSet: PropTypes.func,
  comment: PropTypes.string,
  onCommentSet: PropTypes.func,
  addComment: PropTypes.func,
  id: PropTypes.number,
  resetComments: PropTypes.func,
  validationSet: PropTypes.func,
  isValid: PropTypes.bool
};

const mapDispatchToProps = (dispatch) => ({
  addComment(id, comment) {
    dispatch(DataOperation.addCommentToApi(id, comment));
  }
});

export default connect(null, mapDispatchToProps)(OfferAddComment);
