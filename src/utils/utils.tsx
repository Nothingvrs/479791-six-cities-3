export interface CommentModel {
  id: number;
  comment: string;
  mark: number;
  date: string;
  user: UserModel;
}

interface HostUserModel {
  name: string;
  img: string;
  isPro: boolean;
}

interface LocationModel {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface UserModel {
  id: number;
  email: string;
  name: string;
  img: string;
  isPro: boolean;
}

export interface CityModel {
  name?: string;
  location: LocationModel;
}

export interface CardModel {
  id: number;
  name: string;
  type: string;
  previewImg: string;
  imgs: string [];
  price: number;
  isInBookmark: boolean;
  mark: number;
  isPremium: boolean;
  bedroomNo: number;
  capacity: number;
  facilities: string [];
  descriptions: string [];
  reviews: number;
  avgMark: number;
  comments: CommentModel [];
  hostUser: HostUserModel;
  city: CityModel;
  addressCoords: [number, number];
  nearOffers?: CardModel [];
}


export const offerAdapter = (offer) => {
  return {
    id: offer.id,
    name: offer.title,
    type: offer.type.charAt(0).toUpperCase() + offer.type.slice(1),
    previewImg: offer.preview_image,
    imgs: offer.images,
    price: offer.price,
    isInBookmark: offer.is_favorite,
    mark: offer.rating,
    isPremium: offer.is_premium,
    bedroomNo: offer.bedrooms,
    capacity: offer.max_adults,
    facilities: offer.goods,
    descriptions: [offer.description],
    hostUser: {
      id: offer.host.id,
      name: offer.host.name,
      img: offer.host.avatar_url,
      isPro: offer.host.is_pro
    },
    addressCoords: [offer.location.latitude, offer.location.longitude],
    city: offer.city
  };
};

export const commentAdapter = (comment) => ({
  id: comment.id,
  comment: comment.comment,
  mark: comment.rating,
  date: comment.date,
  user: userAdapter(comment.user)
});

export const userAdapter = (user) => ({
  id: user.id,
  email: user.email,
  name: user.name,
  img: user.avatar_url,
  isPro: user.is_pro
});

export const getCities = (initialOffers) => {
  const citiesNames = new Set();
  const cities = [];
  initialOffers.forEach((offer) => {
    if (!citiesNames.has(offer.city.name)) {
      citiesNames.add(offer.city.name);
      cities.push(offer.city);
    }
  });
  return cities;
};
