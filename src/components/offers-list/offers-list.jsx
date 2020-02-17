import React from 'react';
import OfferCard from "../offer-card/offer-card.jsx";

const OffersList = (props) => {
  const {cards, onCardHover} = props;

  return (cards.map((card, index) => (<OfferCard card = {card} key = {index} onCardHover = {onCardHover}/>)));
};

export default OffersList;
