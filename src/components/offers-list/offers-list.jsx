import React from 'react';
import OfferCard from '../offer-card/offer-card.jsx';
import withHoverItem from "../../hocs/withHoverItem";

const OfferCardWiHoverItem = withHoverItem(OfferCard);

const OffersList = (props) => {
  const {cards, onHeaderClick, nearPlace, favorite} = props;
  if (!cards) {
    return null;
  }
  return cards.map((card) => (
    <OfferCardWiHoverItem
      card={card}
      key={card.id}
      onHeaderClick={onHeaderClick}
      nearPlace={nearPlace}
      favorite = {favorite}
    />
  ));
};

export default OffersList;
