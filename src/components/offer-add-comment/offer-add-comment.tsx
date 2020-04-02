import * as React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {DataOperation} from '../../reducer/data/data-reducer';
import {getError, getIsCommentAdded} from "../../reducer/data/data-selectors";

interface OfferAddCommentProps {
  mark: number;
  onMarkSet: (mark: number) => void;
  comment: string;
  onCommentSet: (evt: React.SyntheticEvent) => void;
  addComment: (id: number, comment: {comment: string; rating: number}) => void;
  id: number;
  onResetComments: () => void;
  onValidationSet: (isValid: boolean) => void;
  isValid: boolean;
  isSending: boolean;
  onSetIsSending: (isSending: boolean) => void;
  error: string;
  isCommentAdded: boolean;
}

const OfferAddComment: React.FC<OfferAddCommentProps> = (props) => {
  const {
    mark,
    onMarkSet,
    comment,
    onCommentSet,
    addComment,
    id,
    onResetComments,
    onValidationSet,
    isValid,
    onSetIsSending,
    isSending,
    error,
    isCommentAdded
  } = props;

  useEffect(() => {
    if (!error && isCommentAdded) {
      onSetIsSending(false);
      onResetComments();
    }
    if (error && !isCommentAdded) {
      onSetIsSending(false);
    }
  }, [isCommentAdded, error]);

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
            data-test="test-mark-set"
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

  const _formSubmitHandler = (evt) => {
    evt.preventDefault();
    if (comment.length > 50 && comment.length < 300) {
      addComment(id, {comment, rating: mark});
      onSetIsSending(true);
    } else {
      onValidationSet(false);
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={_formSubmitHandler} data-test="test-addComment">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">{_renderMarks()}</div>
      <textarea
        disabled={isSending}
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
          disabled={mark === 0 || comment.length === 0 || isSending}
        >
          Submit
        </button>
      </div>
      {error && <span style={{color: `red`, textAlign: `center`}}>Something went wrong</span>}
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addComment(id, comment) {
    dispatch(DataOperation.addCommentToApi(id, comment));
  }
});

const mapStateToProps = (state) => ({
  error: getError(state),
  isCommentAdded: getIsCommentAdded(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferAddComment);
export {OfferAddComment};
