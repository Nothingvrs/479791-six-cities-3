import * as React from 'react';
import OfferReviewList from '../offer-review-list/offer-review-list';
import withForm from "../../hocs/withForm";
import OfferAddComment from "../offer-add-comment/offer-add-comment";
import {CommentModel} from "../../utils/utils";

const AddOfferCommentWithForm = withForm(OfferAddComment);

interface OfferCommentsProps {
  comments: CommentModel [];
  id: number;
  isAuth: boolean;
}

const OfferComments: React.FC <OfferCommentsProps> = (props) => {
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

export default OfferComments;
