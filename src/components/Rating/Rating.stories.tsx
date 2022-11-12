import React, {useState} from 'react';
import {Rating, RatingValueType} from './Rating';

export default {
  title: 'Rating',
  component: Rating,
}

export const EmptyRating = () => <Rating value={0}/>;
export const Rating1 = () => <Rating value={1}/>;
export const Rating2 = () => <Rating value={2}/>;
export const Rating3 = () => <Rating value={3}/>;
export const Rating4 = () => <Rating value={4}/>;
export const Rating5 = () => <Rating value={5}/>;

export const RatingChanging = () => {
  const [rating, setRating] = useState<RatingValueType>(1);
  return <Rating value={rating} onClick={setRating}/>
}