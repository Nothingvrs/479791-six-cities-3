import React from 'react';
import OfferCard from '../offer-card/offer-card.jsx';

const OffersList = (props) => {
  const {cards, onCardHover, onCardUnHover, onHeaderClick, nearPlace} = props;

  return cards.map((card, index) => (
    <OfferCard
      card={card}
      key={index}
      onCardHover={onCardHover}
      onCardUnHover = {onCardUnHover}
      onHeaderClick={onHeaderClick}
      nearPlace={nearPlace}
    />
  ));
};

export default OffersList;
