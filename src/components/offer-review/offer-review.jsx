import React from 'react';
import moment from "moment";
import PropTypes from 'prop-types';


const formattedDate = (date) => {
  return moment(date).format(`MMMM YYYY`);
};

const OfferReview = (props) => {

  const {author, authorImg, comment, mark, date} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={authorImg}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{author}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${mark * 20}%`}}></span>
            <span className="visually-hidden">{mark}</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">

          {formattedDate(date)}
        </time>
      </div>
    </li>
  );
};

OfferReview.propTypes = {
  author: PropTypes.string.isRequired,
  authorImg: PropTypes.string,
  comment: PropTypes.string.isRequired,
  mark: PropTypes.number,
  date: PropTypes.string.isRequired
};

export default OfferReview;
