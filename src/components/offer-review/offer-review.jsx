import React from 'react';
import moment from "moment";
import PropTypes from 'prop-types';
import {userShape} from "../../utils/utils";


const formattedDate = (date) => {
  return moment(date).format(`MMMM YYYY`);
};

const OfferReview = (props) => {

  const {user, comment, mark, date} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.img}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
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
  author: PropTypes.string,
  authorImg: PropTypes.string,
  comment: PropTypes.string,
  mark: PropTypes.number,
  date: PropTypes.string,
  user: PropTypes.shape(userShape)
};

export default OfferReview;
