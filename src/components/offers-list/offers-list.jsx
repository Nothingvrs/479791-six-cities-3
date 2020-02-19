import React from 'react';
import OfferCard from "../offer-card/offer-card.jsx";

const OffersList = (props) => {
  const {cards, onCardHover, onHeaderClick} = props;

  return (cards.map((card, index) => (<OfferCard card = {card} key = {index} onCardHover = {onCardHover} onHeaderClick ={onHeaderClick}/>)));
};

export default OffersList;
