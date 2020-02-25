import React from 'react';
import OfferReview from "../offer-review/offer-review.jsx";
import PropTypes from 'prop-types';
import {commentShape} from "../../utils/utils";


const OfferReviewList = (props) => {
  const {comments} = props;

  const renderReviews = () => comments.map((review, id) => <OfferReview {...review} key = {`${review.comment} - ${id}`}/>);
  return (
    <ul className="reviews__list">
      {renderReviews()}
    </ul>
  );
};

OfferReviewList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape
  )).isRequired
};

export default OfferReviewList;
