import * as React from 'react';
import OfferReview from "../offer-review/offer-review";
import {CommentModel} from "../../utils/utils";

interface OfferReviewListProps {
  comments: CommentModel [];
}

const OfferReviewList: React.FC <OfferReviewListProps> = (props) => {
  const {comments} = props;

  const _renderReviews = () => comments.slice(0, 10).map((review, id) => <OfferReview {...review} key = {`${review.comment} - ${id}`}/>);
  return (
    <ul className="reviews__list">
      {_renderReviews()}
    </ul>
  );
};

export default OfferReviewList;
