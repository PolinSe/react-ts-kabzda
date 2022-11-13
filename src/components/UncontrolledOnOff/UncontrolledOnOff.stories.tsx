import React from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledOnOff} from './UncontrolledOnOff';

export default {
  title: 'UncontrolledOnOff',
  component: UncontrolledOnOff,
}


export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={action('change on off')}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={action('change on off')}/>
