import React from 'react';
import {UncontrolledRaiting} from './UncontrolledRating';
import {action} from '@storybook/addon-actions';


export default {
  title: 'UncontrolledRaiting',
  component: UncontrolledRaiting,
}

const callback = action('rating changing')

export const EmptyRating = () => <UncontrolledRaiting defaultValue={0} onChange={callback}/>;
export const Rating1 = () => <UncontrolledRaiting defaultValue={1} onChange={callback}/>;
export const Rating2 = () => <UncontrolledRaiting defaultValue={2} onChange={callback}/>;
export const Rating3 = () => <UncontrolledRaiting defaultValue={3} onChange={callback}/>;
export const Rating4 = () => <UncontrolledRaiting defaultValue={4} onChange={callback}/>;
export const Rating5 = () => <UncontrolledRaiting defaultValue={5} onChange={callback}/>;
