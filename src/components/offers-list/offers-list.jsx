import React from 'react';
import OfferCard from '../offer-card/offer-card.jsx';
import withHoverItem from "../../hocs/withHoverItem";

const OfferCardWithHoverItem = withHoverItem(OfferCard);

const OffersList = (props) => {
  const {cards, onCardHover, onCardUnHover, onHeaderClick, nearPlace} = props;

  return cards.map((card, index) => (
    <OfferCardWithHoverItem
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
