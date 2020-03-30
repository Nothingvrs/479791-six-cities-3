import React from 'react';
import OfferReviewList from '../offer-review-list/offer-review-list.jsx';
import PropTypes from "prop-types";
import withForm from "../../hocs/withForm";
import OfferAddComment from "../offer-add-comment/offer-add-comment.jsx";
import {commentShape} from "../../utils/utils";

const AddOfferCommentWithForm = withForm(OfferAddComment);

const OfferComments = (props) => {
  const {comments, isAuth} = props;
  if (!comments) {
    return null;
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Review{comments.length > 1 && `s`} &middot;{` `}
        <span className="reviews__amount">
          {comments.length === 0 ? `Be the first!` : comments.length}
        </span>
      </h2>
      <OfferReviewList comments={comments} />
      {isAuth && <AddOfferCommentWithForm id = {props.id}/>}
    </section>
  );
};

OfferComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)),
  id: PropTypes.number,
  mark: PropTypes.number,
  isAuth: PropTypes.bool
};

export default OfferComments;
