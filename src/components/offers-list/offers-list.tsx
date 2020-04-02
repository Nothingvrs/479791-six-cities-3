import * as React from 'react';
import OfferCard from '../offer-card/offer-card';
import withHoverItem from '../../hocs/withHoverItem/withHoverItem';
import {CardModel} from '../../utils/utils';

const OfferCardWiHoverItem = withHoverItem(OfferCard);

interface OffersListProps {
  cards: CardModel [];
  nearPlace?: boolean;
  favorite?: boolean;
}

const OffersList: React.FC<OffersListProps> = (props) => {
  const {cards, nearPlace, favorite} = props;
  if (!cards) {
    return null;
  }
  return (
    <React.Fragment>
      {cards.map((card) => (
        <OfferCardWiHoverItem card={card} key={card.id} nearPlace={nearPlace} favorite={favorite} />
      ))}
    </React.Fragment>
  );
};

export default OffersList;
